# PrioLens Open14 live runtime checkpoint v0.1

Status: ACTIVE / OWNER-SMOKE READY / EXTERNAL PILOT NOT YET OPEN
Date: 2026-09-01

## Live boundaries

Open14 owner-smoke runtime:
- `https://omesg360.eu/priolens-open14-v02/`

Historical P3 v0.4 remains separate and untouched:
- `https://omesg360.eu/priolens/`

Pilot API:
- `https://omesg360.eu/priolens-open14-api/api.php`

Health endpoint:
- `https://omesg360.eu/priolens-open14-api/health.php`

Persistent research assets remain outside deploy-owned runtime directories.

## Runtime state

`olemoz1977/omesg360/priolens/open14-v02/` now contains the active Open14 source package:
- `index.html`;
- `bank.json`;
- `p3_open14_planner_v02.mjs`;
- `p3_open14_exemplar_assigner_v01.mjs`.

Bank status:
- `READY_FOR_OWNER_SMOKE`;
- 14 active families;
- 28 required exemplar runtime paths non-null;
- fail-closed rule retained.

Runtime behavior:
- 14 visual triads;
- exact exemplar identity retained;
- balanced A/B exemplar assignment;
- `no_clear_choice` remains available;
- RT retained as process telemetry only;
- visual task first;
- 12 perceived-sufficiency items second;
- primary family repetition requires wins across both A and B exemplars;
- result remains descriptive, not diagnostic;
- JSON export remains available;
- automatic POST to the pilot API runs after completion;
- API failure does not block the participant result or manual JSON export.

## New pilot assets

Canonical Hostinger paths:
- CARE-A: `/priolens-research-assets/Open14-v02/priolens_care-a_v01.webp`
- CARE-B: `/priolens-research-assets/Open14-v02/priolens_care-b_v01.webp`
- RECOGNITION-A: `/priolens-research-assets/Open14-v02/priolens_recognition-a_v01.webp`
- RECOGNITION-B: `/priolens-research-assets/Open14-v02/priolens_recognition-b_v01.webp`
- AUTONOMY-B: `/priolens-research-assets/Recovered/priolens_aut_backpack_v01.webp`

All five were HTTP-smoked as valid WebP assets.

Canonical provenance:
`olemoz1977/omesg360/priolens/open14-v02/HOST_ASSET_PROVENANCE_v0.2.json`.

The four new image binaries are intentionally not canonical GitHub assets because the available GitHub connector truncated binary uploads. The verified Hostinger research-assets copies plus SHA-256 provenance are canonical for this pilot checkpoint.

## Backend state

Dedicated Hostinger MySQL database:
- database: `u986950573_priolens`;
- user: `u986950573_priolensuser`;
- table: `priolens_open14_sessions`.

Server-only `config.php` exists on Hostinger and is not committed.

API properties:
- POST JSON validation;
- schema allow-listing;
- UUID validation;
- exactly 14 choices required;
- choice must reference a presented exemplar/slot;
- 12 sufficiency keys validated;
- prepared PDO insert;
- idempotent retry by `session_uuid`;
- no name/email/IP/user-agent columns in the research table;
- API/DB errors fail without blocking local result rendering.

## Retention state

Approved target retention: **90 days**.

Already operational:
- `created_at` stored;
- generated `expires_at = created_at + 90 DAY` stored and indexed;
- `cleanup.php` deployed as CLI-only cleanup code.

Not yet operational:
- no Hostinger cron has yet been configured to execute `cleanup.php`;
- therefore automatic physical deletion after 90 days is **not yet guaranteed**.

Do not describe retention as fully operational until the cron is scheduled and smoked.

## Smoke evidence

Host asset HTTP verification:
- workflow: `Verify PrioLens Open14 host assets`;
- run: `33452688466`;
- result: success.

Isolated Open14 runtime deploy:
- workflow: `Deploy PrioLens Open14 runtime`;
- run: `33452934088`;
- result: success;
- checks included runtime source, bank completeness, planner/assigner imports, live HTTP runtime, API health, pilot asset reachability and historical `/priolens/` boundary.

Production API write path:
- workflow: `Verify PrioLens Open14 API write path`;
- run: `33453033200`;
- result: success;
- synthetic fixed session accepted by production API and DB.

Synthetic infrastructure row:
- `seed = SYSTEM_SMOKE_DO_NOT_ANALYZE`;
- fixed `sessionUuid = 00000000-0000-4000-8000-000000000001`;
- exclude from all pilot analyses;
- reruns are idempotent.

## Current gate

Next real step is **one owner smoke session in the live Open14 runtime**.

Owner smoke is for:
- mobile geometry;
- whether 14 triads still feel fast/game-like;
- image loading/cropping;
- sufficiency flow burden;
- result readability;
- visible automatic-save success/failure state;
- gross stimulus anomalies.

It is **not** construct validation and must not be repeatedly rerun to tune the owner's own profile.

After one owner smoke:
1. fix only clear technical/UX failures;
2. configure and smoke the 90-day cleanup cron;
3. decide the first external formative pilot release;
4. do not recruit until retention cleanup is actually operational.
