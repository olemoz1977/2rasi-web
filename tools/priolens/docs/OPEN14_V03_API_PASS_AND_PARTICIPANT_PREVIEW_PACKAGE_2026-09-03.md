# PrioLens Open14 v0.3 — API gate PASS + participant preview package

Status: ASSET GATE PASS / API GATE PASS / PARTICIPANT PREVIEW PACKAGE PREPARED / LIVE v0.2 UNCHANGED / EXTERNAL RECRUITMENT CLOSED
Date: 2026-09-03

## Canonical runtime branch

Runtime repo: `olemoz1977/omesg360`
Branch: `feature/priolens-open14-v03`
Runtime path: `priolens/open14-v03/`

Live `main` and live `/priolens-open14-v02/` remain unchanged.

## Asset gate

New 15 deployed to:
`/priolens-research-assets/Open14-v03/`

Automated hosted verification:
- new15 host verification run `33755869671` = SUCCESS;
- 15/15 HTTP 200;
- 15/15 exact SHA-256 match canonical geometry manifest.

Full42 hosted audit:
- run `33756186905` = SUCCESS;
- 42/42 HTTP/decode PASS;
- 42/42 square runtime images;
- 42 unique exemplar IDs;
- 42 unique runtime paths;
- 42 unique exact SHA-256 values;
- new 15/15 canonical expected SHA PASS;
- pHash closest distance = 16;
- pHash watch threshold <=12: 0 pairs;
- stock-watermark OCR keyword hits: 0.

The first full42 run `33755969978` failed only while serializing the audit report because a `numpy.int64` value was not JSON serializable. The download/decode checks had already completed. The script was fixed and run `33756186905` passed. Do not treat the first failure as an asset failure.

## Separate v0.3 API

Hostinger target:
`/priolens-open14-v03-api/`

Deployed files:
- `api.php`;
- `progress.php`;
- `.htaccess`;
- copied secure `config.php` from live v0.2 API directory inside Hostinger.

`config.php` was not downloaded or exposed.

Deployed API smoke:
- workflow run `33757546461` = SUCCESS;
- smoke seed prefix `SYSTEM_SMOKE_DO_NOT_ANALYZE`;
- canonical planner + v0.3 no-repeat assigner generated the test session;
- assignment audit: 42 exposures, 42 unique exemplar IDs, 42 unique runtime paths, 0 exact image repeats.

Observed endpoint behavior:
- GET `api.php` -> 405 `Method not allowed`;
- GET `progress.php` -> 405 `Method not allowed`;
- GET `config.php` -> 403;
- POST legacy `session-v0.2` -> 400 `Unsupported session schema`;
- POST forbidden Origin -> 403 `Origin not allowed`;
- valid v0.3 progress POST -> 200 and DB save;
- valid v0.3 final POST -> 200 on same session;
- progress POST after final -> 200 with `completedAlready:true`, therefore completed payload is not overwritten by later partial checkpoint.

Smoke session is research noise and must be excluded from analysis through the existing `SYSTEM_SMOKE_DO_NOT_ANALYZE` rule.

## Runtime bank gate state

Feature-branch `priolens/open14-v03/bank.json` now has:
- schema `2rasi.priolens.open14.bank-v0.3`;
- status `API_GATE_PASS_READY_FOR_SEPARATE_PREVIEW_DEPLOY`;
- `runtimeReady: true`;
- start policy `READY_FOR_SEPARATE_V03_PARTICIPANT_PREVIEW_DEPLOY`;
- full42 asset gate PASS;
- API deployed PASS;
- API smoke PASS, run `33757546461`.

This `runtimeReady:true` means only that the isolated v0.3 preview package is technically allowed to start after deployment. It is not authorization to replace live v0.2 or open recruitment.

## Participant preview package

Prepared from the feature-branch runtime after API gate PASS.

File:
`priolens_open14_v03_participant_upload.zip`

ZIP SHA-256:
`f419805f917223018ea099a56d5b191aa9c9d343c0c7c49ad195f31685d3ed2f`

Packaging workflow:
- run `33757758737` = SUCCESS.

Target Hostinger directory:
`public_html/priolens-open14-v03/`

Package contains only:
- `index.html`;
- `bank.json`;
- `p3_open14_planner_v02.mjs`;
- `open14_no_repeat_assigner_v03.mjs`;
- `.htaccess` with `.mjs` MIME rule;
- `README_UPLOAD.txt`.

It intentionally does not contain:
- API files;
- DB config;
- image binaries;
- build scripts.

Expected private preview URL after upload:
`https://omesg360.eu/priolens-open14-v03/?lang=lt&from=lt`

## Next gate

1. Upload/extract participant preview package to NEW Hostinger directory `public_html/priolens-open14-v03/`.
2. Do not touch `public_html/priolens-open14-v02/`.
3. Run deployed runtime smoke:
   - root/index reachability;
   - `bank.json` identity and `runtimeReady:true`;
   - module MIME/load;
   - all 42 image reachability;
   - start enabled after bank preflight;
   - one complete LT participant flow;
   - autosave/resume;
   - final POST to separate v0.3 API;
   - focused EN result smoke.
4. Owner mobile visual smoke across all 42, with BELONGING-03 explicit WATCH.
5. Re-run no-repeat behavior against deployed participant surface.
6. Only after those pass consider merge/live replacement.
7. External recruitment remains CLOSED until an explicit later `PILOT_OPENED_AT_UTC` freeze.

## Research boundaries remain unchanged

- Channel A is low-deliberation comparative visual choice, not subconscious truth.
- Visual pull is not unmet need.
- RT is not psychological strength.
- No single global/Maslow need score.
- CARE visual giving and `CARE_SUPPORT_PRESENT` received/present support are not equivalent constructs.
