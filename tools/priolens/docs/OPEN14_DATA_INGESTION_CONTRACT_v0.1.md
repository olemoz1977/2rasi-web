# PrioLens Open14 data ingestion contract v0.1

Status: DESIGN READY / BACKEND NOT CHOSEN
Date: 2026-09-01

## Purpose

Define the minimum privacy-conscious contract for collecting Open14 pilot sessions before choosing or deploying a backend.

This document does not authorize deployment to any external service.

## Principle

Collect what is needed to evaluate:
- stimulus behavior;
- exemplar behavior;
- UX friction;
- cross-exemplar family repetition;
- perceived sufficiency relationships.

Do not collect identity merely because it is technically easy.

## Submission model

Prefer one final POST after the participant finishes the core flow.

Endpoint shape, platform-independent:

```http
POST /api/priolens/open14/session
Content-Type: application/json
```

Response:

```json
{
  "ok": true,
  "submissionId": "server-generated-random-id"
}
```

Do not require account/login for the formative pilot.

## Client payload

Required top-level fields:

```text
schema
startedAt
completedAt
seed
planSchema
bankSchema
assignerSchema
plannerAudit
exemplarAudit
exemplarPlan
choices[]
sufficiencySchema
sufficiency{}
familyStats{}
domainStats{}
macroStats{}
rtMedianMs
noClearChoiceCount
clientContext{}
```

## Client context

Allowed minimal fields:
- viewportWidth;
- viewportHeight;
- pointerMode if known;
- language;
- coarse platform class if explicitly needed (`mobile` / `desktop` / `tablet`), preferably derived locally rather than full user-agent storage;
- visibility interruption count / total hidden duration if implemented.

Avoid by default:
- full user-agent string;
- IP stored in application data;
- exact GPS/location;
- email/name/phone;
- advertising IDs;
- browser fingerprint fields.

Server infrastructure may see an IP operationally; the application should not intentionally persist it unless a security requirement is documented.

## Anonymous session identity

Client may generate a random session UUID solely for retry/deduplication.

Do not derive it from device/browser characteristics.

Server generates a separate submission ID.

## Retry behavior

If POST fails:
- keep the completed payload in memory/local browser storage temporarily;
- show `Nepavyko išsiųsti. Gali pabandyti dar kartą.`;
- allow local JSON export as fallback;
- do not silently discard a completed pilot session.

Do not repeatedly send in background without participant awareness.

## Validation

Server rejects payload when:
- schema is unknown;
- not exactly 14 visual choices;
- required choice fields are missing;
- family/exemplar IDs are not in the active bank version;
- sufficiency object has invalid values outside `1..5|null`;
- payload is excessively large;
- obvious executable/html injection content appears in fields that should be enums/IDs.

Do not trust client-derived summary statistics as canonical.

Store raw choice/sufficiency data and recompute derived summaries server-side or during analysis.

## Data storage shape

For the formative pilot, a simple append-only session record is sufficient.

Recommended logical tables/collections:

### sessions
- submission_id
- session_uuid
- schema
- bank_schema
- planner_schema
- assigner_schema
- seed
- started_at
- completed_at
- client_context_json
- raw_payload_json

A normalized event database is not required for n≈30.

If analysis later scales, choices/sufficiency can be normalized then.

## Retention

Before pilot launch, explicitly choose:
- retention period;
- who can access raw data;
- backup policy;
- deletion process.

For a formative pilot, default toward a finite research retention window rather than indefinite storage.

Do not write a public privacy promise until the actual backend behavior matches it.

## Participant copy

Keep consent/notice short and factual.

Working LT copy:

> Ši bandomoji versija išsaugo tavo pasirinkimus ir trumpus įsivertinimus tyrimo analizei. Vardo, el. pašto ar tikslios vietos neprašome. Rezultatai naudojami PrioLens veikimui tikrinti, ne diagnozei ar asmenybės vertinimui.

This copy must be adjusted to the actual deployed storage/retention setup before use.

## Security minimum

Backend should provide:
- HTTPS;
- POST only for submission route;
- payload size limit;
- JSON schema validation;
- rate limiting or basic abuse protection;
- no directory listing/raw database exposure;
- server credentials never shipped to browser;
- separate read/admin access from public write endpoint.

## Platform decision gate

Possible implementation targets may include:
- a small serverless endpoint;
- a minimal Hostinger-side endpoint/database;
- another existing authenticated infrastructure.

Do not choose solely by convenience.

Decision criteria:
1. simplest secure anonymous POST;
2. easy export for analysis;
3. controllable retention/deletion;
4. no unnecessary PII;
5. low operational burden;
6. does not endanger the existing 2rasi/omesg360 deployment boundary.

A backend deployment is an external infrastructure decision and requires explicit approval before creation if it creates a new service/project or changes data-retention behavior.
