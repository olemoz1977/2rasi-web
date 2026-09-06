const ALLOWED_ORIGINS = new Set([
  "https://2rasi.com",
  "https://www.2rasi.com",
  "https://2rasi.lt",
  "https://www.2rasi.lt",
]);

const MAX_BODY_BYTES = 220_000;
const CLEAN_ANALYTICS_SINCE = "2026-09-06T04:05:00.000Z";
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
  "priolens",
]);

const PRIOLENS_SV_SCHEMA = "2rasi.priolens.stimulus-validation-session-v0.1";
const PRIOLENS_SV_VERSION = "priolens-stimulus-validation-v0.1";
const PRIOLENS_SV_POOL = "open14-v031-current42";
const PRIOLENS_SV_RESEARCH_SINCE = "2026-09-06T06:00:00.000Z";
const PRIOLENS_SV_HOLDS = Object.freeze({
  "SAFETY-02":"visible_watermark",
  "EXPLORATION-01":"visible_watermark",
  "AUTONOMY-02":"suspected_generator_artifact",
});
const PRIOLENS_SV_FAMILIES = [
  "REST","RESOURCE","SAFETY","ORDER","CONNECTION","BELONGING","CARE",
  "AUTONOMY","CONTROL","RECOGNITION","MASTERY","EXPLORATION","KNOWLEDGE","OPPORTUNITY",
];
const PRIOLENS_SV_CLASSIFICATIONS = new Set([...PRIOLENS_SV_FAMILIES, "OTHER"]);
const PRIOLENS_SV_COMPETITORS = Object.freeze({
  REST:["RESOURCE","SAFETY","ORDER"],
  RESOURCE:["OPPORTUNITY","SAFETY","REST"],
  SAFETY:["ORDER","CONTROL","RESOURCE"],
  ORDER:["SAFETY","CONTROL","KNOWLEDGE"],
  CONNECTION:["BELONGING","CARE","RECOGNITION"],
  BELONGING:["CONNECTION","CARE","RECOGNITION"],
  CARE:["CONNECTION","BELONGING","RECOGNITION"],
  AUTONOMY:["CONTROL","OPPORTUNITY","EXPLORATION"],
  CONTROL:["AUTONOMY","MASTERY","ORDER"],
  RECOGNITION:["BELONGING","MASTERY","CARE"],
  MASTERY:["KNOWLEDGE","CONTROL","RECOGNITION"],
  EXPLORATION:["KNOWLEDGE","OPPORTUNITY","AUTONOMY"],
  KNOWLEDGE:["EXPLORATION","MASTERY","ORDER"],
  OPPORTUNITY:["RESOURCE","AUTONOMY","EXPLORATION"],
});
const PRIOLENS_SV_STIMULUS_TO_FAMILY = Object.freeze(Object.fromEntries(
  PRIOLENS_SV_FAMILIES.flatMap((family) => [1,2,3].map((n) => [
    `${family}-${String(n).padStart(2, "0")}`,
    family,
  ])),
));
const PRIOLENS_SV_THRESHOLDS = Object.freeze({
  minN: 40,
  keepFitMin: 0.60,
  keepTopCompetitorMax: 0.20,
  keepOtherMax: 0.20,
  keepClarityMin: 3.5,
  keepConfidenceMin: 3.5,
  replaceFitBelow: 0.40,
  replaceTopCompetitorAtLeast: 0.35,
  replaceOtherAtLeast: 0.35,
});

function priolensValidationForm(formIndex) {
  const out = [];
  PRIOLENS_SV_FAMILIES.forEach((family, familyIndex) => {
    const miss = familyIndex % 7;
    if (formIndex === miss) return;
    const available = [0,1,2,3,4,5,6].filter((x) => x !== miss);
    const shift = familyIndex % 6;
    const rotated = available.slice(shift).concat(available.slice(0, shift));
    const position = rotated.indexOf(formIndex);
    const exemplar = Math.floor(position / 2) + 1;
    out.push(`${family}-${String(exemplar).padStart(2, "0")}`);
  });
  return out;
}

function corsHeaders(origin) {
  const headers = {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-2rasi-owner",
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


function integerIn(value, min, max) {
  return Number.isInteger(value) && value >= min && value <= max;
}

function validatePriolensStimulusValidation(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return "body must be a JSON object";
  if (payload.schema !== PRIOLENS_SV_SCHEMA) return "unsupported schema";
  if (payload.version !== PRIOLENS_SV_VERSION) return "unsupported version";
  if (payload.poolVersion !== PRIOLENS_SV_POOL) return "unsupported pool";
  if (!asText(payload.sessionId, 120)) return "missing sessionId";
  if (payload.language !== "lt" && payload.language !== "en") return "language must be lt or en";
  if (!integerIn(payload.formIndex, 0, 6)) return "formIndex must be 0..6";
  if (!asText(payload.completedAt, 64)) return "missing completedAt";
  if (!Array.isArray(payload.responses) || payload.responses.length !== 12) return "responses must contain exactly 12 items";

  const expected = new Set(priolensValidationForm(payload.formIndex));
  const seenStimuli = new Set();
  const seenPositions = new Set();

  for (const response of payload.responses) {
    if (!response || typeof response !== "object" || Array.isArray(response)) return "invalid response object";
    const stimulusId = asText(response.stimulusId, 40);
    if (!stimulusId || !expected.has(stimulusId)) return "stimulus outside assigned form";
    if (seenStimuli.has(stimulusId)) return "duplicate stimulus";
    seenStimuli.add(stimulusId);

    const targetFamily = asText(response.targetFamily, 40);
    if (PRIOLENS_SV_STIMULUS_TO_FAMILY[stimulusId] !== targetFamily) return "target family mismatch";
    const openText = asText(response.openText, 240);
    if (!openText || openText.length < 2) return "openText too short";
    if (!integerIn(response.clarity, 1, 5)) return "clarity must be 1..5";
    if (!integerIn(response.confidence, 1, 5)) return "confidence must be 1..5";
    if (!integerIn(response.valence, 1, 5)) return "valence must be 1..5";

    const classification = asText(response.classification, 40);
    if (!classification || !PRIOLENS_SV_CLASSIFICATIONS.has(classification)) return "invalid classification";

    if (!integerIn(response.presentationIndex, 0, 11)) return "presentationIndex must be 0..11";
    if (seenPositions.has(response.presentationIndex)) return "duplicate presentationIndex";
    seenPositions.add(response.presentationIndex);

    if (!Array.isArray(response.optionOrder) || response.optionOrder.length !== 5) return "optionOrder must contain 5 codes";
    const optionSet = new Set(response.optionOrder);
    if (optionSet.size !== 5 || !optionSet.has(targetFamily) || !optionSet.has("OTHER") || !optionSet.has(classification)) return "invalid optionOrder";
    for (const code of optionSet) if (!PRIOLENS_SV_CLASSIFICATIONS.has(code)) return "unsupported option code";
    const expectedOptions = new Set([targetFamily, ...(PRIOLENS_SV_COMPETITORS[targetFamily] || []), "OTHER"]);
    if (expectedOptions.size !== optionSet.size || [...expectedOptions].some((code) => !optionSet.has(code))) return "optionOrder does not match protocol";

    for (const key of ["step1Ms","step2Ms","totalMs"]) {
      const value = response[key];
      if (typeof value !== "number" || !Number.isFinite(value) || value < 0 || value > 3600000) return key + " out of range";
    }
  }

  if (seenStimuli.size !== expected.size) return "assigned form incomplete";
  return null;
}

async function handlePriolensStimulusValidation(payload, raw, env, origin) {
  const validationError = validatePriolensStimulusValidation(payload);
  if (validationError) {
    return json({ ok:false, error:"invalid_payload", detail:validationError }, 400, origin);
  }

  const sessionId = asText(payload.sessionId, 120);
  const receivedAt = new Date().toISOString();
  const source = asText(payload.source, 80);
  const medium = asText(payload.medium, 80);
  const campaign = asText(payload.campaign, 120);
  const referrerHost = asText(payload.referrerHost, 160);

  try {
    const statements = [
      env.DB.prepare(`
        INSERT INTO priolens_stimulus_validation_sessions (
          session_id, received_at, version, pool_version, language, form_index,
          started_at, completed_at, response_count, source, medium, campaign,
          referrer_host, payload_json
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(session_id) DO UPDATE SET
          received_at=excluded.received_at,
          version=excluded.version,
          pool_version=excluded.pool_version,
          language=excluded.language,
          form_index=excluded.form_index,
          started_at=excluded.started_at,
          completed_at=excluded.completed_at,
          response_count=excluded.response_count,
          source=excluded.source,
          medium=excluded.medium,
          campaign=excluded.campaign,
          referrer_host=excluded.referrer_host,
          payload_json=excluded.payload_json
      `).bind(
        sessionId, receivedAt, payload.version, payload.poolVersion, payload.language, payload.formIndex,
        asText(payload.startedAt, 64), payload.completedAt, payload.responses.length,
        source, medium, campaign, referrerHost, raw,
      ),
      env.DB.prepare("DELETE FROM priolens_stimulus_validation_responses WHERE session_id = ?").bind(sessionId),
    ];

    for (const response of payload.responses) {
      statements.push(env.DB.prepare(`
        INSERT INTO priolens_stimulus_validation_responses (
          session_id, stimulus_id, target_family, language, open_text, clarity,
          classification, confidence, valence, presentation_index, option_order_json,
          step1_ms, step2_ms, total_ms
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        sessionId,
        response.stimulusId,
        response.targetFamily,
        payload.language,
        asText(response.openText, 240),
        response.clarity,
        response.classification,
        response.confidence,
        response.valence,
        response.presentationIndex,
        JSON.stringify(response.optionOrder),
        Math.round(response.step1Ms),
        Math.round(response.step2Ms),
        Math.round(response.totalMs),
      ));
    }

    await env.DB.batch(statements);
  } catch (error) {
    console.error("D1 PrioLens stimulus validation insert failed", error);
    return json({ ok:false, error:"storage_failed" }, 500, origin);
  }

  return json({ ok:true, sessionId, receivedAt, responseCount:payload.responses.length }, 201, origin);
}

function priolensSvStatus(row, topCompetitorRate, otherRate) {
  const n = Number(row.n || 0);
  const fitRate = n ? Number(row.intended_n || 0) / n : 0;
  const clarity = Number(row.clarity_avg || 0);
  const confidence = Number(row.confidence_avg || 0);
  if (n < PRIOLENS_SV_THRESHOLDS.minN) return "COLLECTING";
  if (
    fitRate < PRIOLENS_SV_THRESHOLDS.replaceFitBelow
    || topCompetitorRate >= PRIOLENS_SV_THRESHOLDS.replaceTopCompetitorAtLeast
    || otherRate >= PRIOLENS_SV_THRESHOLDS.replaceOtherAtLeast
    || topCompetitorRate >= fitRate
  ) return "REPLACE";
  if (
    fitRate >= PRIOLENS_SV_THRESHOLDS.keepFitMin
    && topCompetitorRate <= PRIOLENS_SV_THRESHOLDS.keepTopCompetitorMax
    && otherRate <= PRIOLENS_SV_THRESHOLDS.keepOtherMax
    && clarity >= PRIOLENS_SV_THRESHOLDS.keepClarityMin
    && confidence >= PRIOLENS_SV_THRESHOLDS.keepConfidenceMin
  ) return "KEEP";
  return "REVIEW";
}

function buildPriolensSvRows(metricRows, classRows, scope) {
  const classMap = new Map();
  for (const row of classRows) {
    const key = row.stimulus_id;
    if (!classMap.has(key)) classMap.set(key, []);
    classMap.get(key).push(row);
  }

  return metricRows.map((row) => {
    const n = Number(row.n || 0);
    const fitRate = n ? Number(row.intended_n || 0) / n : 0;
    const otherRate = n ? Number(row.other_n || 0) / n : 0;
    const competitors = (classMap.get(row.stimulus_id) || [])
      .filter((x) => x.classification !== row.target_family && x.classification !== "OTHER")
      .sort((a,b) => Number(b.n || 0) - Number(a.n || 0) || String(a.classification).localeCompare(String(b.classification)));
    const top = competitors[0] || null;
    const topRate = top && n ? Number(top.n || 0) / n : 0;
    return {
      scope,
      stimulusId:row.stimulus_id,
      targetFamily:row.target_family,
      n,
      fitRate,
      otherRate,
      topCompetitor:top?.classification || null,
      topCompetitorRate:topRate,
      clarityAvg:Number(row.clarity_avg || 0),
      confidenceAvg:Number(row.confidence_avg || 0),
      valenceAvg:Number(row.valence_avg || 0),
      status:PRIOLENS_SV_HOLDS[row.stimulus_id] ? "HOLD" : priolensSvStatus(row, topRate, otherRate),
      holdReason:PRIOLENS_SV_HOLDS[row.stimulus_id] || null,
    };
  }).sort((a,b) => a.stimulusId.localeCompare(b.stimulusId));
}

async function handlePriolensStimulusValidationSummary(request, env, origin) {
  if (!ALLOWED_ORIGINS.has(origin)) {
    return json({ ok:false, error:"origin_not_allowed" }, 403, origin);
  }
  if (request.headers.get("X-2rasi-owner") !== "1") {
    return json({ ok:false, error:"owner_gate_required" }, 403, origin);
  }

  const cleanSessionWhere = `
    s.pool_version = ?
    AND s.received_at >= ?
    AND COALESCE(s.source,'') NOT IN ('owner','test','synthetic')
  `;
  const bindClean = [PRIOLENS_SV_POOL, PRIOLENS_SV_RESEARCH_SINCE];

  try {
    const [
      sessionResult,
      excludedResult,
      overallMetricsResult,
      byLanguageMetricsResult,
      overallClassesResult,
      byLanguageClassesResult,
    ] = await Promise.all([
      env.DB.prepare(`
        SELECT s.language, COUNT(*) AS n
        FROM priolens_stimulus_validation_sessions s
        WHERE ${cleanSessionWhere}
        GROUP BY s.language
      `).bind(...bindClean).all(),
      env.DB.prepare(`
        SELECT
          COUNT(*) AS total,
          SUM(CASE WHEN received_at < ? THEN 1 ELSE 0 END) AS pre_cutoff,
          SUM(CASE WHEN COALESCE(source,'') IN ('owner','test','synthetic') THEN 1 ELSE 0 END) AS internal
        FROM priolens_stimulus_validation_sessions
        WHERE pool_version = ?
      `).bind(PRIOLENS_SV_RESEARCH_SINCE, PRIOLENS_SV_POOL).all(),
      env.DB.prepare(`
        SELECT r.stimulus_id, r.target_family, COUNT(*) AS n,
          SUM(CASE WHEN r.classification = r.target_family THEN 1 ELSE 0 END) AS intended_n,
          SUM(CASE WHEN r.classification = 'OTHER' THEN 1 ELSE 0 END) AS other_n,
          AVG(r.clarity) AS clarity_avg,
          AVG(r.confidence) AS confidence_avg,
          AVG(r.valence) AS valence_avg
        FROM priolens_stimulus_validation_responses r
        JOIN priolens_stimulus_validation_sessions s ON s.session_id = r.session_id
        WHERE ${cleanSessionWhere}
        GROUP BY r.stimulus_id, r.target_family
      `).bind(...bindClean).all(),
      env.DB.prepare(`
        SELECT r.stimulus_id, r.target_family, r.language, COUNT(*) AS n,
          SUM(CASE WHEN r.classification = r.target_family THEN 1 ELSE 0 END) AS intended_n,
          SUM(CASE WHEN r.classification = 'OTHER' THEN 1 ELSE 0 END) AS other_n,
          AVG(r.clarity) AS clarity_avg,
          AVG(r.confidence) AS confidence_avg,
          AVG(r.valence) AS valence_avg
        FROM priolens_stimulus_validation_responses r
        JOIN priolens_stimulus_validation_sessions s ON s.session_id = r.session_id
        WHERE ${cleanSessionWhere}
        GROUP BY r.stimulus_id, r.target_family, r.language
      `).bind(...bindClean).all(),
      env.DB.prepare(`
        SELECT r.stimulus_id, r.target_family, r.classification, COUNT(*) AS n
        FROM priolens_stimulus_validation_responses r
        JOIN priolens_stimulus_validation_sessions s ON s.session_id = r.session_id
        WHERE ${cleanSessionWhere}
        GROUP BY r.stimulus_id, r.target_family, r.classification
      `).bind(...bindClean).all(),
      env.DB.prepare(`
        SELECT r.stimulus_id, r.target_family, r.language, r.classification, COUNT(*) AS n
        FROM priolens_stimulus_validation_responses r
        JOIN priolens_stimulus_validation_sessions s ON s.session_id = r.session_id
        WHERE ${cleanSessionWhere}
        GROUP BY r.stimulus_id, r.target_family, r.language, r.classification
      `).bind(...bindClean).all(),
    ]);

    const sessions = {all:0,lt:0,en:0};
    for (const row of resultRows(sessionResult)) {
      const key = row.language === "lt" || row.language === "en" ? row.language : null;
      if (key) {
        sessions[key] = Number(row.n || 0);
        sessions.all += Number(row.n || 0);
      }
    }

    const overallRows = buildPriolensSvRows(
      resultRows(overallMetricsResult),
      resultRows(overallClassesResult),
      "all",
    );

    const byLanguageMetrics = resultRows(byLanguageMetricsResult);
    const byLanguageClasses = resultRows(byLanguageClassesResult);
    const languageRows = ["lt","en"].flatMap((language) => buildPriolensSvRows(
      byLanguageMetrics.filter((x) => x.language === language),
      byLanguageClasses.filter((x) => x.language === language),
      language,
    ));

    return json({
      ok:true,
      generatedAt:new Date().toISOString(),
      schema:PRIOLENS_SV_SCHEMA,
      poolVersion:PRIOLENS_SV_POOL,
      researchSince:PRIOLENS_SV_RESEARCH_SINCE,
      publicResearchOpen:false,
      holds:PRIOLENS_SV_HOLDS,
      thresholds:PRIOLENS_SV_THRESHOLDS,
      sessionCounts:sessions,
      excluded:resultRows(excludedResult)[0] || {},
      rows:[...overallRows, ...languageRows],
    }, 200, origin);
  } catch (error) {
    console.error("D1 PrioLens stimulus validation summary failed", error);
    return json({ ok:false, error:"summary_failed" }, 500, origin);
  }
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


function dashboardRange(url) {
  const raw = String(url.searchParams.get("days") || "7").toLowerCase();
  const requested = raw === "all"
    ? null
    : new Date(Date.now() - ([1, 7, 30].includes(Number(raw)) ? Number(raw) : 7) * 86400000).toISOString();
  const since = !requested || requested < CLEAN_ANALYTICS_SINCE ? CLEAN_ANALYTICS_SINCE : requested;
  return {
    days: raw === "all" ? null : ([1, 7, 30].includes(Number(raw)) ? Number(raw) : 7),
    since,
    label: raw === "all" ? "all" : String([1, 7, 30].includes(Number(raw)) ? Number(raw) : 7),
  };
}

function resultRows(result) {
  return Array.isArray(result?.results) ? result.results : [];
}

async function handleDashboard(request, env, origin, url) {
  if (!ALLOWED_ORIGINS.has(origin)) {
    return json({ ok: false, error: "origin_not_allowed" }, 403, origin);
  }
  if (request.headers.get("X-2rasi-owner") !== "1") {
    return json({ ok: false, error: "owner_gate_required" }, 403, origin);
  }

  const range = dashboardRange(url);
  const timeClause = range.since ? " AND received_at >= ?" : "";
  const params = range.since ? [range.since] : [];

  try {
    const [
      summaryResult,
      toolsResult,
      sourcesResult,
      campaignsResult,
      dailyResult,
      feedbackResult,
      quoteCommentsResult,
      workstyleResult,
    ] = await Promise.all([
      env.DB.prepare(`
        SELECT
          COUNT(DISTINCT CASE WHEN event_type = 'page_view' THEN visit_id END) AS visitors,
          SUM(CASE WHEN event_type = 'page_view' THEN 1 ELSE 0 END) AS page_views,
          COUNT(DISTINCT CASE WHEN event_type = 'tool_start' THEN visit_id END) AS started,
          COUNT(DISTINCT CASE WHEN event_type = 'tool_complete' THEN visit_id END) AS completed,
          COUNT(DISTINCT CASE WHEN event_type = 'feedback' THEN visit_id END) AS feedbacks
        FROM site_events
        WHERE COALESCE(source, '') NOT IN ('synthetic', 'owner', 'test')${timeClause}
      `).bind(...params).all(),

      env.DB.prepare(`
        SELECT
          tool_id,
          COUNT(DISTINCT CASE WHEN event_type = 'page_view' THEN visit_id END) AS visitors,
          SUM(CASE WHEN event_type = 'page_view' THEN 1 ELSE 0 END) AS page_views,
          COUNT(DISTINCT CASE WHEN event_type = 'tool_start' THEN visit_id END) AS started,
          COUNT(DISTINCT CASE WHEN event_type = 'tool_complete' THEN visit_id END) AS completed,
          COUNT(DISTINCT CASE WHEN event_type = 'feedback' THEN visit_id END) AS feedbacks
        FROM site_events
        WHERE COALESCE(source, '') NOT IN ('synthetic', 'owner', 'test')${timeClause}
        GROUP BY tool_id
        ORDER BY visitors DESC, page_views DESC, tool_id
      `).bind(...params).all(),

      env.DB.prepare(`
        SELECT
          COALESCE(NULLIF(source, ''), 'direct') AS source,
          COUNT(DISTINCT visit_id) AS visitors
        FROM site_events
        WHERE event_type = 'page_view'
          AND COALESCE(source, '') NOT IN ('synthetic', 'owner', 'test')${timeClause}
        GROUP BY COALESCE(NULLIF(source, ''), 'direct')
        ORDER BY visitors DESC, source
      `).bind(...params).all(),

      env.DB.prepare(`
        SELECT
          COALESCE(NULLIF(source, ''), 'direct') AS source,
          COALESCE(NULLIF(medium, ''), '') AS medium,
          COALESCE(NULLIF(campaign, ''), '') AS campaign,
          COUNT(DISTINCT CASE WHEN event_type = 'page_view' THEN visit_id END) AS visitors,
          COUNT(DISTINCT CASE WHEN event_type = 'tool_start' THEN visit_id END) AS started,
          COUNT(DISTINCT CASE WHEN event_type = 'tool_complete' THEN visit_id END) AS completed
        FROM site_events
        WHERE COALESCE(source, '') NOT IN ('synthetic', 'owner', 'test')${timeClause}
          AND (
            (campaign IS NOT NULL AND trim(campaign) <> '')
            OR COALESCE(source, '') IN ('skool','facebook','instagram','linkedin','tiktok','youtube','reddit','substack','pinterest','threads','x','chatgpt')
          )
        GROUP BY COALESCE(NULLIF(source, ''), 'direct'), COALESCE(NULLIF(medium, ''), ''), COALESCE(NULLIF(campaign, ''), '')
        HAVING visitors > 0
        ORDER BY visitors DESC, started DESC, source
        LIMIT 30
      `).bind(...params).all(),

      env.DB.prepare(`
        SELECT
          substr(received_at, 1, 10) AS day,
          COUNT(DISTINCT CASE WHEN event_type = 'page_view' THEN visit_id END) AS visitors,
          COUNT(DISTINCT CASE WHEN event_type = 'tool_start' THEN visit_id END) AS starts,
          COUNT(DISTINCT CASE WHEN event_type = 'tool_complete' THEN visit_id END) AS completes
        FROM site_events
        WHERE COALESCE(source, '') NOT IN ('synthetic', 'owner', 'test')${timeClause}
        GROUP BY substr(received_at, 1, 10)
        ORDER BY day
      `).bind(...params).all(),

      env.DB.prepare(`
        SELECT
          COUNT(*) AS total,
          SUM(CASE WHEN usefulness = 'yes' THEN 1 ELSE 0 END) AS yes_count,
          SUM(CASE WHEN usefulness = 'no' THEN 1 ELSE 0 END) AS no_count,
          SUM(CASE WHEN quote_consent = 1 AND comment IS NOT NULL AND trim(comment) <> '' THEN 1 ELSE 0 END) AS quoteable
        FROM site_feedback
        WHERE COALESCE(source, '') NOT IN ('synthetic', 'owner', 'test')${timeClause}
      `).bind(...params).all(),

      env.DB.prepare(`
        SELECT received_at, tool_id, usefulness, comment
        FROM site_feedback
        WHERE COALESCE(source, '') NOT IN ('synthetic', 'owner', 'test')
          AND quote_consent = 1
          AND comment IS NOT NULL
          AND trim(comment) <> ''${timeClause}
        ORDER BY received_at DESC
        LIMIT 8
      `).bind(...params).all(),

      env.DB.prepare(`
        SELECT
          COUNT(*) AS responded_1_plus,
          SUM(CASE WHEN answered >= 12 THEN 1 ELSE 0 END) AS reached_12,
          SUM(CASE WHEN answered >= 23 THEN 1 ELSE 0 END) AS reached_23,
          SUM(CASE WHEN answered >= 34 OR completed_at IS NOT NULL THEN 1 ELSE 0 END) AS completed_34,
          ROUND(AVG(answered), 1) AS avg_answered,
          MAX(received_at) AS last_response
        FROM workstyle_sessions
        WHERE session_id <> 'synthetic-workstyle-v07-test'
          AND json_extract(payload_json, '$.analyticsSource') IS NOT NULL
          AND COALESCE(json_extract(payload_json, '$.analyticsSource'), '') NOT IN ('owner', 'test')${timeClause}
      `).bind(...params).all(),
    ]);

    return json({
      ok: true,
      generatedAt: new Date().toISOString(),
      range: { days: range.days, label: range.label, since: range.since },
      cleanSince: CLEAN_ANALYTICS_SINCE,
      summary: resultRows(summaryResult)[0] || {},
      tools: resultRows(toolsResult),
      sources: resultRows(sourcesResult),
      campaigns: resultRows(campaignsResult),
      daily: resultRows(dailyResult),
      workstyle: {
        linkedOnly: true,
        ...(resultRows(workstyleResult)[0] || {}),
      },
      feedback: {
        ...(resultRows(feedbackResult)[0] || {}),
        quoteComments: resultRows(quoteCommentsResult),
      },
    }, 200, origin);
  } catch (error) {
    console.error("D1 dashboard query failed", error);
    return json({ ok: false, error: "dashboard_query_failed" }, 500, origin);
  }
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

    if (url.pathname === "/v1/dashboard" && request.method === "GET") {
      return handleDashboard(request, env, origin, url);
    }

    if (url.pathname === "/v1/priolens-stimulus-validation-summary" && request.method === "GET") {
      return handlePriolensStimulusValidationSummary(request, env, origin);
    }

    if (request.method !== "POST" || !["/v1/session", "/v1/event", "/v1/feedback", "/v1/priolens-stimulus-validation"].includes(url.pathname)) {
      return json({ ok: false, error: "not_found" }, 404, origin);
    }

    if (!ALLOWED_ORIGINS.has(origin)) {
      return json({ ok: false, error: "origin_not_allowed" }, 403, origin);
    }

    const parsed = await readJson(request, origin);
    if (parsed.response) return parsed.response;

    if (url.pathname === "/v1/session") return handleSession(parsed.payload, parsed.raw, env, origin);
    if (url.pathname === "/v1/event") return handleEvent(parsed.payload, env, origin);
    if (url.pathname === "/v1/priolens-stimulus-validation") return handlePriolensStimulusValidation(parsed.payload, parsed.raw, env, origin);
    return handleFeedback(parsed.payload, env, origin);
  },
};
