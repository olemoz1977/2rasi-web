const ALLOWED_ORIGINS = new Set([
  "https://2rasi.com",
  "https://www.2rasi.com",
  "https://2rasi.lt",
  "https://www.2rasi.lt",
]);

const MAX_BODY_BYTES = 220_000;
const SCHEMA_PREFIX = "workstyle-v07-cognitive-session-v";
const EVENT_TYPES = new Set(["page_view", "tool_start", "tool_complete", "feedback"]);
const TOOL_IDS = new Set([
  "gallery",
  "site",
  "leadership-360",
  "mirror",
  "multipliers",
  "divergent",
  "situational-leadership",
  "drama-triangle",
  "strategic-thinking",
  "2pair",
  "workstyle",
]);

function corsHeaders(origin) {
  const headers = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
  if (ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
}

function json(body, status = 200, origin = "") {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...corsHeaders(origin),
    },
  });
}

function asText(value, max = 128) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, max) : null;
}

function asMs(value) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0
    ? Math.round(value)
    : 0;
}

function asBooleanInt(value) {
  return value === true ? 1 : 0;
}

function summarize(payload) {
  const responses = payload.responses && typeof payload.responses === "object"
    ? payload.responses
    : {};
  const timing = payload.timingMs && typeof payload.timingMs === "object"
    ? payload.timingMs
    : {};

  let answered = 0;
  let unclear = 0;
  let duplicate = 0;
  let context = 0;
  let na = 0;

  for (const response of Object.values(responses)) {
    if (!response || typeof response !== "object") continue;
    if (response.kind) answered += 1;
    if (response.unclear) unclear += 1;
    if (response.duplicate) duplicate += 1;
    if (response.kind === "context") context += 1;
    if (response.kind === "na") na += 1;
  }

  const activeMs = Object.values(timing).reduce(
    (sum, value) => sum + asMs(value),
    0,
  );
  const breakMs = Array.isArray(payload.breaks)
    ? payload.breaks.reduce((sum, entry) => sum + asMs(entry?.durationMs), 0)
    : 0;

  const pilotContext = payload.pilotContext && typeof payload.pilotContext === "object"
    ? payload.pilotContext
    : {};

  return {
    answered,
    activeMs,
    breakMs,
    unclear,
    duplicate,
    context,
    na,
    role: asText(pilotContext.role, 40),
    experience: asText(pilotContext.experience, 40),
    environment: asText(pilotContext.environment, 40),
  };
}

function validateSession(payload) {
  if (!payload || typeof payload !== "object") return "body must be a JSON object";
  if (!String(payload.schema || "").startsWith(SCHEMA_PREFIX)) return "unsupported schema";
  if (!asText(payload.sessionId, 120)) return "missing sessionId";
  if (!asText(payload.version, 120)) return "missing version";
  if (!payload.responses || typeof payload.responses !== "object") return "missing responses";
  if (Object.keys(payload.responses).length > 60) return "too many responses";
  return null;
}

function validateCommonInsight(payload) {
  if (!payload || typeof payload !== "object") return "body must be a JSON object";
  if (!asText(payload.visitId, 120)) return "missing visitId";
  const toolId = asText(payload.toolId, 80);
  if (!toolId || !TOOL_IDS.has(toolId)) return "unsupported toolId";
  return null;
}

function validateEvent(payload) {
  const common = validateCommonInsight(payload);
  if (common) return common;
  if (!asText(payload.eventId, 120)) return "missing eventId";
  const eventType = asText(payload.eventType, 40);
  if (!eventType || !EVENT_TYPES.has(eventType)) return "unsupported eventType";
  if (payload.meta !== undefined && (payload.meta === null || typeof payload.meta !== "object" || Array.isArray(payload.meta))) {
    return "meta must be an object";
  }
  return null;
}

function validateFeedback(payload) {
  const common = validateCommonInsight(payload);
  if (common) return common;
  if (!asText(payload.feedbackId, 120)) return "missing feedbackId";
  const usefulness = asText(payload.usefulness, 16);
  if (usefulness !== "yes" && usefulness !== "no") return "usefulness must be yes or no";
  if (typeof payload.comment === "string" && payload.comment.length > 1200) return "comment too long";
  return null;
}

async function readJson(request, origin) {
  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (contentLength && contentLength > MAX_BODY_BYTES) {
    return { response: json({ ok: false, error: "payload_too_large" }, 413, origin) };
  }

  let raw;
  try {
    raw = await request.text();
  } catch {
    return { response: json({ ok: false, error: "body_read_failed" }, 400, origin) };
  }

  if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) {
    return { response: json({ ok: false, error: "payload_too_large" }, 413, origin) };
  }

  try {
    return { payload: JSON.parse(raw), raw };
  } catch {
    return { response: json({ ok: false, error: "invalid_json" }, 400, origin) };
  }
}

function insightFields(payload) {
  return {
    visitId: asText(payload.visitId, 120),
    toolId: asText(payload.toolId, 80),
    pagePath: asText(payload.pagePath, 240),
    pageHost: asText(payload.pageHost, 120),
    language: asText(payload.language, 12) || "unknown",
    source: asText(payload.source, 80),
    medium: asText(payload.medium, 80),
    campaign: asText(payload.campaign, 120),
    content: asText(payload.content, 120),
    referrerHost: asText(payload.referrerHost, 160),
    occurredAt: asText(payload.occurredAt, 64),
  };
}

async function handleSession(payload, raw, env, origin) {
  const validationError = validateSession(payload);
  if (validationError) {
    return json({ ok: false, error: "invalid_payload", detail: validationError }, 400, origin);
  }

  const summary = summarize(payload);
  const sessionId = asText(payload.sessionId, 120);
  const version = asText(payload.version, 120);
  const language = asText(payload.language, 12) || "unknown";
  const completedAt = asText(payload.completedAt, 64);
  const receivedAt = new Date().toISOString();

  try {
    await env.DB.prepare(`
      INSERT INTO workstyle_sessions (
        session_id, received_at, version, language, completed_at,
        answered, active_ms, break_ms,
        role, experience, environment,
        unclear_count, duplicate_count, context_count, na_count,
        payload_json
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(session_id) DO UPDATE SET
        received_at=excluded.received_at,
        version=excluded.version,
        language=excluded.language,
        completed_at=excluded.completed_at,
        answered=excluded.answered,
        active_ms=excluded.active_ms,
        break_ms=excluded.break_ms,
        role=excluded.role,
        experience=excluded.experience,
        environment=excluded.environment,
        unclear_count=excluded.unclear_count,
        duplicate_count=excluded.duplicate_count,
        context_count=excluded.context_count,
        na_count=excluded.na_count,
        payload_json=excluded.payload_json
      WHERE
        excluded.answered > workstyle_sessions.answered
        OR (
          excluded.answered = workstyle_sessions.answered
          AND COALESCE(CAST(json_extract(excluded.payload_json, '$.autosaveSeq') AS INTEGER), 0)
              >= COALESCE(CAST(json_extract(workstyle_sessions.payload_json, '$.autosaveSeq') AS INTEGER), 0)
        )
    `).bind(
      sessionId,
      receivedAt,
      version,
      language,
      completedAt,
      summary.answered,
      summary.activeMs,
      summary.breakMs,
      summary.role,
      summary.experience,
      summary.environment,
      summary.unclear,
      summary.duplicate,
      summary.context,
      summary.na,
      raw,
    ).run();
  } catch (error) {
    console.error("D1 session insert failed", error);
    return json({ ok: false, error: "storage_failed" }, 500, origin);
  }

  return json({ ok: true, sessionId, receivedAt, answered: summary.answered }, 201, origin);
}

async function handleEvent(payload, env, origin) {
  const validationError = validateEvent(payload);
  if (validationError) {
    return json({ ok: false, error: "invalid_payload", detail: validationError }, 400, origin);
  }

  const f = insightFields(payload);
  const eventId = asText(payload.eventId, 120);
  const eventType = asText(payload.eventType, 40);
  const receivedAt = new Date().toISOString();
  let metadataJson = "{}";
  try { metadataJson = JSON.stringify(payload.meta || {}).slice(0, 4000); } catch {}

  try {
    await env.DB.prepare(`
      INSERT OR IGNORE INTO site_events (
        event_id, received_at, occurred_at, visit_id, event_type, tool_id,
        page_path, page_host, language, source, medium, campaign, content,
        referrer_host, metadata_json
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      eventId, receivedAt, f.occurredAt, f.visitId, eventType, f.toolId,
      f.pagePath, f.pageHost, f.language, f.source, f.medium, f.campaign, f.content,
      f.referrerHost, metadataJson,
    ).run();
  } catch (error) {
    console.error("D1 event insert failed", error);
    return json({ ok: false, error: "storage_failed" }, 500, origin);
  }

  return json({ ok: true, eventId, receivedAt }, 201, origin);
}

async function handleFeedback(payload, env, origin) {
  const validationError = validateFeedback(payload);
  if (validationError) {
    return json({ ok: false, error: "invalid_payload", detail: validationError }, 400, origin);
  }

  const f = insightFields(payload);
  const feedbackId = asText(payload.feedbackId, 120);
  const usefulness = asText(payload.usefulness, 16);
  const comment = asText(payload.comment, 1200);
  const quoteConsent = asBooleanInt(payload.quoteConsent && Boolean(comment));
  const completedBeforeFeedback = asBooleanInt(payload.completedBeforeFeedback);
  const receivedAt = new Date().toISOString();

  try {
    await env.DB.prepare(`
      INSERT OR IGNORE INTO site_feedback (
        feedback_id, received_at, occurred_at, visit_id, tool_id, usefulness,
        comment, quote_consent, completed_before_feedback,
        page_path, page_host, language, source, medium, campaign, content, referrer_host
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      feedbackId, receivedAt, f.occurredAt, f.visitId, f.toolId, usefulness,
      comment, quoteConsent, completedBeforeFeedback,
      f.pagePath, f.pageHost, f.language, f.source, f.medium, f.campaign, f.content, f.referrerHost,
    ).run();
  } catch (error) {
    console.error("D1 feedback insert failed", error);
    return json({ ok: false, error: "storage_failed" }, 500, origin);
  }

  return json({ ok: true, feedbackId, receivedAt }, 201, origin);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      if (!ALLOWED_ORIGINS.has(origin)) {
        return new Response(null, { status: 403 });
      }
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (url.pathname === "/health" && request.method === "GET") {
      return json({ ok: true, service: "workstyle-pilot-intake", insights: true }, 200, origin);
    }

    if (request.method !== "POST" || !["/v1/session", "/v1/event", "/v1/feedback"].includes(url.pathname)) {
      return json({ ok: false, error: "not_found" }, 404, origin);
    }

    if (!ALLOWED_ORIGINS.has(origin)) {
      return json({ ok: false, error: "origin_not_allowed" }, 403, origin);
    }

    const parsed = await readJson(request, origin);
    if (parsed.response) return parsed.response;

    if (url.pathname === "/v1/session") return handleSession(parsed.payload, parsed.raw, env, origin);
    if (url.pathname === "/v1/event") return handleEvent(parsed.payload, env, origin);
    return handleFeedback(parsed.payload, env, origin);
  },
};
