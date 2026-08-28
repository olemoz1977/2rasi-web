const ALLOWED_ORIGINS = new Set([
  "https://2rasi.com",
  "https://www.2rasi.com",
  "https://2rasi.lt",
  "https://www.2rasi.lt",
]);

const MAX_BODY_BYTES = 220_000;
const SCHEMA_PREFIX = "workstyle-v07-cognitive-session-v";

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

function validate(payload) {
  if (!payload || typeof payload !== "object") return "body must be a JSON object";
  if (!String(payload.schema || "").startsWith(SCHEMA_PREFIX)) return "unsupported schema";
  if (!asText(payload.sessionId, 120)) return "missing sessionId";
  if (!asText(payload.version, 120)) return "missing version";
  if (!payload.responses || typeof payload.responses !== "object") return "missing responses";
  if (Object.keys(payload.responses).length > 60) return "too many responses";
  return null;
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
      return json({ ok: true, service: "workstyle-pilot-intake" }, 200, origin);
    }

    if (url.pathname !== "/v1/session" || request.method !== "POST") {
      return json({ ok: false, error: "not_found" }, 404, origin);
    }

    if (!ALLOWED_ORIGINS.has(origin)) {
      return json({ ok: false, error: "origin_not_allowed" }, 403, origin);
    }

    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength && contentLength > MAX_BODY_BYTES) {
      return json({ ok: false, error: "payload_too_large" }, 413, origin);
    }

    let raw;
    try {
      raw = await request.text();
    } catch {
      return json({ ok: false, error: "body_read_failed" }, 400, origin);
    }

    if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) {
      return json({ ok: false, error: "payload_too_large" }, 413, origin);
    }

    let payload;
    try {
      payload = JSON.parse(raw);
    } catch {
      return json({ ok: false, error: "invalid_json" }, 400, origin);
    }

    const validationError = validate(payload);
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
      console.error("D1 insert failed", error);
      return json({ ok: false, error: "storage_failed" }, 500, origin);
    }

    return json({ ok: true, sessionId, receivedAt, answered: summary.answered }, 201, origin);
  },
};
