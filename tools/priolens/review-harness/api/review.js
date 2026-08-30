const crypto = require('crypto');

const GATEWAY_URL = 'https://ai-gateway.vercel.sh/v1/chat/completions';
const DEFAULT_MODELS = {
  claude: process.env.MODEL_CLAUDE || 'anthropic/claude-opus-5',
  grok: process.env.MODEL_GROK || 'xai/grok-4.6',
  gemini: process.env.MODEL_GEMINI || 'google/gemini-3.6-flash',
};

const MAX_BLIND_CHARS = 50000;
const MAX_REVEAL_CHARS = 30000;
const MAX_REVIEWERS = 3;

function json(res, status, payload) {
  res.status(status).setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  return res.end(JSON.stringify(payload));
}

function safeEqual(a, b) {
  const aa = Buffer.from(String(a || ''));
  const bb = Buffer.from(String(b || ''));
  if (aa.length !== bb.length) return false;
  return crypto.timingSafeEqual(aa, bb);
}

function requireAccess(req) {
  const expected = process.env.HARNESS_ACCESS_KEY;
  if (!expected) throw new Error('HARNESS_ACCESS_KEY is not configured');
  const supplied = req.headers['x-harness-key'];
  if (!safeEqual(supplied, expected)) {
    const err = new Error('Unauthorized');
    err.statusCode = 401;
    throw err;
  }
}

function lockSecret() {
  const secret = process.env.REVIEW_LOCK_SECRET;
  if (!secret || secret.length < 24) {
    throw new Error('REVIEW_LOCK_SECRET must be configured with at least 24 characters');
  }
  return secret;
}

function signPayload(payload) {
  const encoded = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url');
  const sig = crypto.createHmac('sha256', lockSecret()).update(encoded).digest('base64url');
  return `${encoded}.${sig}`;
}

function readLock(token) {
  if (typeof token !== 'string' || !token.includes('.')) throw new Error('Invalid lock token');
  const [encoded, suppliedSig] = token.split('.', 2);
  const expectedSig = crypto.createHmac('sha256', lockSecret()).update(encoded).digest('base64url');
  if (!safeEqual(suppliedSig, expectedSig)) throw new Error('Lock signature mismatch');
  return JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8'));
}

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'string') return JSON.parse(req.body);
  return req.body;
}

function extractText(data) {
  const content = data?.choices?.[0]?.message?.content;
  if (typeof content === 'string') return content.trim();
  if (Array.isArray(content)) {
    return content.map((part) => (typeof part === 'string' ? part : part?.text || '')).join('\n').trim();
  }
  return '';
}

async function gatewayRequest(model, messages) {
  const apiKey = process.env.AI_GATEWAY_API_KEY;
  if (!apiKey) throw new Error('AI_GATEWAY_API_KEY is not configured');

  const response = await fetch(GATEWAY_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages,
      max_tokens: 6000,
    }),
  });

  const raw = await response.text();
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    data = { raw };
  }

  if (!response.ok) {
    const message = data?.error?.message || data?.message || raw || `Gateway HTTP ${response.status}`;
    const err = new Error(message);
    err.statusCode = response.status;
    throw err;
  }

  const output = extractText(data);
  if (!output) throw new Error(`Empty model output from ${model}`);

  return {
    output,
    responseId: data?.id || null,
    resolvedModel: data?.model || model,
    usage: data?.usage || null,
  };
}

async function callReviewer(reviewer, messages) {
  const primary = DEFAULT_MODELS[reviewer];
  if (!primary) throw new Error(`Unknown reviewer: ${reviewer}`);

  try {
    return { ...(await gatewayRequest(primary, messages)), requestedModel: primary };
  } catch (err) {
    // Vercel has surfaced both xai/ and spacexai/ creator slugs for current Grok catalog pages.
    // Keep one narrow compatibility fallback instead of silently switching model families.
    if (reviewer === 'grok' && primary === 'xai/grok-4.6' && /model|not found|unknown|404/i.test(err.message)) {
      const fallback = 'spacexai/grok-4.6';
      return { ...(await gatewayRequest(fallback, messages)), requestedModel: primary, fallbackModel: fallback };
    }
    throw err;
  }
}

function normalizeReviewers(input) {
  const list = Array.isArray(input) ? input : ['claude', 'grok', 'gemini'];
  const unique = [...new Set(list)].filter((r) => Object.prototype.hasOwnProperty.call(DEFAULT_MODELS, r));
  if (!unique.length || unique.length > MAX_REVIEWERS) throw new Error('Choose 1-3 supported reviewers');
  return unique;
}

async function runStage1(body) {
  const packageId = String(body.packageId || '').trim() || `review-${Date.now()}`;
  const blindPrompt = String(body.blindPrompt || '');
  if (!blindPrompt.trim()) throw new Error('blindPrompt is required');
  if (blindPrompt.length > MAX_BLIND_CHARS) throw new Error('blindPrompt is too long');

  const reviewers = normalizeReviewers(body.reviewers);
  const settled = await Promise.allSettled(
    reviewers.map(async (reviewer) => {
      const result = await callReviewer(reviewer, [{ role: 'user', content: blindPrompt }]);
      const lockPayload = {
        v: 1,
        packageId,
        reviewer,
        requestedModel: result.requestedModel,
        resolvedModel: result.resolvedModel,
        blindPrompt,
        stage1Output: result.output,
        stage1ResponseId: result.responseId,
        stage1Usage: result.usage,
        lockedAt: new Date().toISOString(),
      };
      return {
        reviewer,
        model: result.resolvedModel,
        output: result.output,
        usage: result.usage,
        lockToken: signPayload(lockPayload),
      };
    })
  );

  return settled.map((item, i) => {
    const reviewer = reviewers[i];
    if (item.status === 'fulfilled') return { ok: true, ...item.value };
    return { ok: false, reviewer, error: item.reason?.message || String(item.reason) };
  });
}

async function runStage2(body) {
  const revealPrompt = String(body.revealPrompt || '');
  if (!revealPrompt.trim()) throw new Error('revealPrompt is required');
  if (revealPrompt.length > MAX_REVEAL_CHARS) throw new Error('revealPrompt is too long');

  const lockTokens = Array.isArray(body.lockTokens) ? body.lockTokens : [];
  if (!lockTokens.length || lockTokens.length > MAX_REVIEWERS) throw new Error('1-3 Stage 1 lock tokens are required');

  const locks = lockTokens.map(readLock);
  const settled = await Promise.allSettled(
    locks.map(async (lock) => {
      const messages = [
        { role: 'user', content: lock.blindPrompt },
        { role: 'assistant', content: lock.stage1Output },
        { role: 'user', content: revealPrompt },
      ];
      const result = await callReviewer(lock.reviewer, messages);
      return {
        reviewer: lock.reviewer,
        model: result.resolvedModel,
        stage1Output: lock.stage1Output,
        stage2Output: result.output,
        stage1LockedAt: lock.lockedAt,
        stage2At: new Date().toISOString(),
        usage: result.usage,
      };
    })
  );

  return settled.map((item, i) => {
    const reviewer = locks[i]?.reviewer || `reviewer-${i + 1}`;
    if (item.status === 'fulfilled') return { ok: true, ...item.value };
    return { ok: false, reviewer, error: item.reason?.message || String(item.reason) };
  });
}

module.exports = async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      return json(res, 200, {
        ok: true,
        service: 'PrioLens AI Review Harness',
        reviewers: Object.entries(DEFAULT_MODELS).map(([id, model]) => ({ id, model })),
      });
    }

    if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'Method not allowed' });

    requireAccess(req);
    const body = parseBody(req);

    if (body.action === 'stage1') {
      return json(res, 200, { ok: true, action: 'stage1', results: await runStage1(body) });
    }
    if (body.action === 'stage2') {
      return json(res, 200, { ok: true, action: 'stage2', results: await runStage2(body) });
    }

    return json(res, 400, { ok: false, error: 'action must be stage1 or stage2' });
  } catch (err) {
    return json(res, err.statusCode || 500, { ok: false, error: err.message || 'Unknown error' });
  }
};
