# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 LIVE / v0.3 42-BANK ASSET GATE PASS / v0.3 API GATE PASS / v0.3 PARTICIPANT PREVIEW DEPLOYED + AUTOMATED SMOKE PASS / OWNER MOBILE VISUAL SMOKE PENDING / EXTERNAL RECRUITMENT CLOSED
Updated: 2026-09-03
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Repo is source of truth. Do not reconstruct PrioLens from chat memory.**

Recovery order:
1. this file;
2. `docs/OPEN14_V03_DEPLOYED_PARTICIPANT_SMOKE_PASS_2026-09-03.md`;
3. `docs/OPEN14_V03_API_PASS_AND_PARTICIPANT_PREVIEW_PACKAGE_2026-09-03.md`;
4. `docs/OPEN14_V03_RUNTIME_DRAFT_CHECKPOINT_2026-09-03.md`;
5. `docs/OPEN14_V03_GEOMETRY_PASS_AND_ASSET_UPLOAD_PACKAGE_2026-09-03.md`;
6. `docs/OPEN14_42_BANK_DESIGN_FREEZE_2026-09-03.md`;
7. `config/open14-next-bank-v0.3-runtime-plan.json`;
8. `config/open14-next-bank-v0.3-design.json`;
9. `config/open14-next-bank-v0.3-source-assets.json`;
10. `config/open14-next-bank-v0.3-geometry.json`;
11. `research/open14_no_repeat_assigner_v03.mjs` + smoke;
12. `NEW_CHAT_HANDOFF_2026-09-03.md` for older same-day context;
13. `PROJECT_STATE.md` for older background only.

Later checkpoints supersede older same-day notes when they conflict.

## Non-negotiable research boundary

Channel A = low-deliberation comparative visual choice.
Channel B = current perceived sufficiency collected only after Channel A.

Do not claim:
- subconscious/true-self access;
- visual pull = unmet need;
- RT = psychological strength;
- one global/Maslow need score;
- validated complete taxonomy.

CARE visual giving is not equivalent to `CARE_SUPPORT_PRESENT` received/present support.

## Live v0.2

Still unchanged and live:
`https://omesg360.eu/priolens-open14-v02/`

- 14 families × 2 exemplars = 28 active images;
- exact A/B image repetition still exists by design;
- external recruitment CLOSED.

Do not overwrite or mutate live v0.2 while preview validation is incomplete.

## Frozen v0.3 bank

14 families × 3 unique exemplars = 42.

Delta from live:
- 27 live exemplars retained;
- 15 new runtime assets;
- Recognition live B retired from next bank;
- Recognition contributes two non-live assets.

Runtime IDs are canonical family-local `01/02/03`.

No-repeat assigner identity:
`balanced-3x1-no-repeat-slot-v0.3`

Family planner remains intentionally v0.2 because its family-triad algorithm did not change:
`cyclic-14x3-diff-1-4-slot-role-v0.2`

1000-seed logic smoke PASS:
- 42 exposures;
- 42 unique exemplar IDs;
- each family uses 01/02/03 once;
- exact-image repeats = 0;
- balanced screen slots.

## Asset gate — PASS

New 15 are deployed under:
`/priolens-research-assets/Open14-v03/`

Hosted verification:
- new15 run `33755869671` = SUCCESS;
- full42 run `33756186905` = SUCCESS.

Full42 facts:
- 42/42 HTTP/decode PASS;
- all square;
- 42 unique paths;
- 42 unique exact SHA-256;
- 15/15 new exact canonical SHA PASS;
- closest pHash distance 16;
- pHash watches <=12 = 0;
- stock-watermark OCR hits = 0.

`BELONGING-03` geometry is PASS and remains only a mobile visual WATCH.

## Separate v0.3 API — DEPLOYED + PASS

Hostinger:
`/priolens-open14-v03-api/`

Live v0.2 API remains separate and unchanged.

API smoke run `33757546461` = SUCCESS.

Verified:
- GET `api.php` -> 405;
- GET `progress.php` -> 405;
- `config.php` -> 403;
- legacy session-v0.2 POST rejected 400;
- forbidden Origin rejected 403;
- valid v0.3 progress saved 200;
- valid v0.3 final saved 200;
- progress after completion returns `completedAlready:true` and does not overwrite completed data.

Smoke row uses seed prefix `SYSTEM_SMOKE_DO_NOT_ANALYZE` and must be excluded from research analysis.

## v0.3 participant preview — DEPLOYED + AUTOMATED SMOKE PASS

Preview URLs:
- LT: `https://omesg360.eu/priolens-open14-v03/?lang=lt&from=lt`;
- EN: `https://omesg360.eu/priolens-open14-v03/?lang=en&from=com`.

Runtime repo:
- `olemoz1977/omesg360`;
- branch `feature/priolens-open14-v03`;
- path `priolens/open14-v03/`.

Current feature `bank.json`:
- status `PARTICIPANT_PREVIEW_DEPLOY_PASS_OWNER_MOBILE_PENDING`;
- `runtimeReady:true`;
- start policy `PREVIEW_OPEN_FOR_OWNER_MOBILE_SMOKE_EXTERNAL_RECRUITMENT_CLOSED`;
- asset gate PASS;
- API gate PASS;
- participant preview deployed = true;
- participant static smoke = PASS;
- participant Chromium smoke = PASS;
- owner mobile visual smoke = pending.

### Deployed runtime smoke

Run `33759033307` = SUCCESS.

Static/public checks:
- deployed `index.html`, `bank.json`, planner and assigner matched feature source byte-for-byte at smoke time;
- `.mjs` MIME = `application/javascript`;
- all 42 runtime image paths HTTP 200;
- v0.3 API/progress paths and session identity present.

Chromium `390×844` LT full-flow PASS:
- Start enabled;
- first choice saved locally;
- reload detected draft;
- Resume restored trial `2 / 14`;
- all 14 visual trials completed;
- 42 unique exemplar IDs observed on the actual deployed UI;
- exact exemplar repeats = 0;
- all 6 Channel-B screens / 12 values completed;
- result opened;
- final payload attempted the separate v0.3 API and carried 14 choices + 42 unique presented exemplars + 12 sufficiency values.

Focused EN PASS:
- EN copy;
- `2rasi.com` return target;
- bank ready;
- Start works;
- first triad has 3 distinct exemplars.

Chromium progress/final POSTs were intercepted to avoid creating an unmarked pseudo-participant row. Real deployed API persistence was already tested separately with `SYSTEM_SMOKE_DO_NOT_ANALYZE`.

Earlier run `33758727391` failed only because the Playwright smoke script was placed in `/tmp` and Node ESM could not resolve repo-local `playwright`; static runtime checks had passed. Corrected run `33759033307` passed fully. This was a CI harness defect, not a PrioLens runtime defect.

Canonical checkpoint:
`docs/OPEN14_V03_DEPLOYED_PARTICIPANT_SMOKE_PASS_2026-09-03.md`

## Immediate next execution queue

1. Owner mobile visual smoke on the separate v0.3 preview across the real 14-trial experience / 42 stimuli.
2. Explicit WATCH: `BELONGING-03` must still read as shared-group/togetherness rather than merely a dyad on the owner's real phone.
3. Check no blank/slow/broken stimulus and no problematic mobile crop/scale behavior.
4. If owner mobile visual smoke PASS, record that gate in repo and decide whether any additional manual LT/EN result smoke is still needed beyond the successful automated Chromium run.
5. Only after the preview gates are explicitly closed consider merging/replacing live v0.2.
6. External recruitment remains CLOSED until later explicit `PILOT_OPENED_AT_UTC` freeze.

Main stimulus rule:
> **What does a reasonable viewer see happening within about one second?**

Guardrail:
> **clear enough + engaging > theoretically pure + dead**
