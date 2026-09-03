# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 LIVE / v0.3 42-BANK ASSET GATE PASS / v0.3 RUNTIME DRAFT FAIL-CLOSED / API DEPLOYMENT PENDING / EXTERNAL RECRUITMENT CLOSED
Updated: 2026-09-03
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Repo is source of truth. Do not reconstruct PrioLens from chat memory.**

Recovery order:
1. this file;
2. `NEW_CHAT_HANDOFF_2026-09-03.md`;
3. `docs/OPEN14_42_BANK_DESIGN_FREEZE_2026-09-03.md`;
4. `config/open14-next-bank-v0.3-design.json`;
5. `config/open14-next-bank-v0.3-source-assets.json`;
6. `config/open14-next-bank-v0.3-geometry.json`;
7. `docs/OPEN14_V03_GEOMETRY_PASS_AND_ASSET_UPLOAD_PACKAGE_2026-09-03.md`;
8. `config/open14-next-bank-v0.3-runtime-plan.json`;
9. `docs/OPEN14_V03_RUNTIME_DRAFT_CHECKPOINT_2026-09-03.md`;
10. `docs/OPEN14_V03_FULL42_HOST_AUDIT_PASS_2026-09-03.md`;
11. `research/open14_no_repeat_assigner_v03.mjs` + smoke;
12. family-specific freezes / pilot / CARE / bilingual checkpoints as needed.

Later design, geometry, runtime and host-audit checkpoints supersede older open-review notes.

## Method boundary

Channel A = low-deliberation comparative visual choice.
Channel B = current perceived sufficiency collected only after Channel A.

Do not claim:
- subconscious / true-self access;
- visual pull = unmet need;
- RT = psychological strength;
- one global Maslow/need score;
- validated complete taxonomy.

CARE visual = proactive care-giving. `CARE_SUPPORT_PRESENT` = care/support present or received. Do not treat them as construct-equivalent.

## Live v0.2 — DO NOT MODIFY

Runtime:
`https://omesg360.eu/priolens-open14-v02/`

State:
- 14 families × 2 exemplars = 28 active images;
- external recruitment CLOSED;
- live runtime/API remain unchanged.

## Next Open14 v0.3 — frozen 42 bank

Design:
- 14 families × 3 unique exemplars = 42;
- 27 live exemplars retained;
- 15 new runtime assets;
- Recognition keeps live A, adds 4967 + owner 4973; live Recognition-B retires from next bank only;
- runtime IDs are `FAMILY-01/02/03`;
- exact image repeats per session = 0.

Family planner intentionally remains:
- schema `2rasi.priolens.p3.open14.plan-v0.2`;
- planner `cyclic-14x3-diff-1-4-slot-role-v0.2`.

Changed exemplar layer:
- schema `2rasi.priolens.open14.exemplars-v0.3`;
- assigner `balanced-3x1-no-repeat-slot-v0.3`;
- 1000-seed source/runtime smoke PASS.

Session schema:
`2rasi.priolens.open14.session-v0.3`

Bank schema:
`2rasi.priolens.open14.bank-v0.3`

## Geometry + asset gate — PASS

Owner geometry package:
- 15/15 canonical derivatives = 640×640;
- all 15 exact SHA-256 matched `config/open14-next-bank-v0.3-geometry.json`;
- BELONGING-03 crop remains x=0.45 and is geometry PASS / mobile WATCH only.

Owner uploaded the approved 15 binaries to:
`/priolens-research-assets/Open14-v03/`

Public new-15 verification:
- GitHub Actions run `33755869671` = SUCCESS;
- 15/15 HTTP 200;
- 15/15 exact SHA-256 matched canonical geometry hashes.

Full 42 host audit:
- successful run `33756186905`;
- 42/42 URLs reachable and decodable;
- 42/42 square;
- 42 unique exemplar IDs;
- 42 unique runtime paths;
- 42 unique exact SHA-256 values;
- 15/15 new canonical SHA checks PASS;
- pHash closest distance = 16;
- pHash WATCH `<=12` = 0;
- stock-watermark OCR keyword hits = 0.

Canonical checkpoint:
`docs/OPEN14_V03_FULL42_HOST_AUDIT_PASS_2026-09-03.md`

**Asset gate is closed. Do not reopen geometry or bank selection without concrete evidence.**

## Separate v0.3 runtime draft

Runtime repo:
`olemoz1977/omesg360`

Isolated branch:
`feature/priolens-open14-v03`

Path:
`priolens/open14-v03/`

State:
- guarded v0.3 index built from live v0.2 participant surface;
- actual 42-bank + no-repeat assigner 1000-seed logic smoke PASS (`33754111649`);
- repetition logic uses distinct canonical exemplar IDs, not legacy A/B suffixes;
- v0.3 draft/local/session/API identities separated from v0.2;
- live `omesg360/main` untouched.

Current runtime gate:
- asset metadata should read `ASSET_GATE_PASS_API_PENDING_FAIL_CLOSED`;
- asset gate booleans = true;
- **`runtimeReady` must remain `false` until API gate passes**.

## Current blocker — v0.3 API deployment

Separate source already exists in runtime branch:
- `priolens/open14-v03/server/api.php`;
- `priolens/open14-v03/server/progress.php`.

Target Hostinger directory:
`public_html/priolens-open14-v03-api/`

Prepared upload payload:
`priolens_open14_v03_api_upload.zip`

Payload SHA-256:
`ee7ce235183d428923c33423d9a378cc166bdfc4b59891f3752d112e9ee4cf49`

Package contains:
- `api.php`;
- `progress.php`;
- `.htaccess`;
- upload README.

It intentionally excludes `config.php` because that contains DB credentials.

After extracting the package into the new v0.3 API directory, copy the existing secure `config.php` server-side from the live v0.2 API directory into the new v0.3 directory. Do not download/share the credential file and do not overwrite `/priolens-open14-api/`.

Expected routes after setup:
- `https://omesg360.eu/priolens-open14-v03-api/api.php`
- `https://omesg360.eu/priolens-open14-v03-api/progress.php`

GET should return HTTP 405 / `Method not allowed`. Then run valid + invalid POST smoke for progress and final endpoint.

## Next execution queue

1. Upload/extract v0.3 API ZIP to `public_html/priolens-open14-v03-api/`.
2. Copy live v0.2 secure `config.php` server-side into that new directory.
3. Verify both v0.3 API routes and run valid/invalid POST smoke.
4. Only after API PASS set v0.3 `bank.json` `runtimeReady:true`.
5. Deploy/smoke separate v0.3 participant surface: LT + EN, 14 choices, 6 sufficiency screens, autosave/resume, final POST.
6. Owner mobile visual smoke across all 42; keep BELONGING-03 as explicit WATCH.
7. Runtime no-repeat smoke against deployed participant surface.
8. Only then consider replacing live v0.2 and later record explicit `PILOT_OPENED_AT_UTC` before external recruitment.

External recruitment remains **CLOSED**.

Main pragmatic stimulus question:
> **What does a reasonable viewer see happening within about one second?**

Guardrail:
> **clear enough + engaging > theoretically pure + dead**
