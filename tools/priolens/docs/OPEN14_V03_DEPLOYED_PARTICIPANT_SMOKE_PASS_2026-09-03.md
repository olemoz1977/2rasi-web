# Open14 v0.3 — deployed participant preview smoke PASS

Date: 2026-09-03
Status: **SEPARATE PREVIEW DEPLOYED / AUTOMATED SMOKE PASS / OWNER MOBILE VISUAL SMOKE PENDING / EXTERNAL RECRUITMENT CLOSED**

## Scope

This checkpoint covers the separate Open14 v0.3 participant preview at:

- LT: `https://omesg360.eu/priolens-open14-v03/?lang=lt&from=lt`
- EN: `https://omesg360.eu/priolens-open14-v03/?lang=en&from=com`

It does **not** replace or mutate live Open14 v0.2.

## Runtime identity

Runtime repo: `olemoz1977/omesg360`
Branch: `feature/priolens-open14-v03`
Path: `priolens/open14-v03/`

Current bank state after the pass:

- schema `2rasi.priolens.open14.bank-v0.3`;
- status `PARTICIPANT_PREVIEW_DEPLOY_PASS_OWNER_MOBILE_PENDING`;
- `runtimeReady:true`;
- family planner `cyclic-14x3-diff-1-4-slot-role-v0.2`;
- exemplar assigner `balanced-3x1-no-repeat-slot-v0.3`;
- session schema `2rasi.priolens.open14.session-v0.3`;
- start policy `PREVIEW_OPEN_FOR_OWNER_MOBILE_SMOKE_EXTERNAL_RECRUITMENT_CLOSED`.

## Deployed static verification

GitHub Actions run `33759033307` = **SUCCESS**.

Verified against the public Hostinger preview:

- deployed `index.html` byte-for-byte equals feature-branch runtime source;
- deployed `bank.json` byte-for-byte equals feature-branch runtime source at test time;
- deployed `p3_open14_planner_v02.mjs` byte-for-byte equals source;
- deployed `open14_no_repeat_assigner_v03.mjs` byte-for-byte equals source;
- `.mjs` Content-Type = `application/javascript`;
- LT and EN query URLs serve the same expected runtime HTML;
- all 42 runtime image paths return HTTP 200;
- runtime contains separate v0.3 API/progress paths;
- runtime contains `session-v0.3` and local-draft autosave logic.

## Chromium participant smoke

Same run `33759033307` executed Chromium at mobile viewport `390×844`.

LT full-flow PASS:

- bank becomes ready and Start enables;
- LT return target points to `2rasi.lt`;
- first trial rendered correctly;
- after one visual choice, reload detects local draft;
- Resume restores the same session at trial `2 / 14`;
- all 14 visual trials complete;
- actual deployed UI exposes **42 unique exemplar IDs** across the session;
- exact exemplar repetition = 0;
- all 6 Channel-B sufficiency screens complete with 12 responses;
- result screen opens;
- final payload attempts the separate v0.3 API path;
- final payload contains 14 choices, 42 unique presented exemplar IDs and 12 sufficiency values;
- payload identities are `session-v0.3`, `bank-v0.3`, `exemplars-v0.3`.

EN focused PASS:

- `html lang=en`;
- EN copy applied;
- return target points to `2rasi.com`;
- bank becomes ready;
- Start works;
- first deployed triad contains 3 distinct exemplar IDs.

### DB pollution guard

The Chromium UI smoke intercepted its progress/final API calls and returned synthetic success responses. It therefore did **not** create an unmarked pseudo-participant row.

Real deployed API persistence had already passed separately in run `33757546461`, using seed prefix `SYSTEM_SMOKE_DO_NOT_ANALYZE`.

## CI harness note

Earlier run `33758727391` failed only because the Playwright test script was written to `/tmp`, so Node ESM could not resolve the repo-local `playwright` package. Static deployed checks in that run had already passed. The harness path was corrected; run `33759033307` then passed fully. This was not a PrioLens runtime defect.

## Remaining gate

Automated technical deployment validation is complete for the separate v0.3 preview.

The next gate is **owner mobile visual smoke** across the actual preview, with special attention to `BELONGING-03`:

- one-second semantic readability;
- no accidental crop/scale issue on the real phone;
- togetherness/group signal remains stronger than a mere dyadic connection reading;
- no visually broken/blank/slow-loading stimulus;
- overall 42-bank participant experience remains usable on mobile.

Do not merge/replace live v0.2 and do not open external recruitment until this visual gate and the remaining pre-pilot decision are explicitly closed.
