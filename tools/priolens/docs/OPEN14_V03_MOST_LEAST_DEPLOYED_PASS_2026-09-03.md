# Open14 v0.3 MOST+LEAST deployed preview PASS — 2026-09-03

Status: PASS / OWNER MOBILE UX REVIEW PENDING / EXTERNAL RECRUITMENT CLOSED

## Scope

The separate v0.3 preview was migrated from the temporary positive-only interaction to the previously owner-tested MOST+LEAST interaction pattern while keeping live Open14 v0.2 unchanged.

Preview:
- LT: `https://omesg360.eu/priolens-open14-v03/?lang=lt&from=lt`
- EN: `https://omesg360.eu/priolens-open14-v03/?lang=en&from=com`

Runtime repo:
- `olemoz1977/omesg360`
- branch `feature/priolens-open14-v03`

## Protocol identity

- visual bank: `2rasi.priolens.open14.bank-v0.3`
- family planner: `cyclic-14x3-diff-1-4-slot-role-v0.2`
- exemplar assigner: `balanced-3x1-no-repeat-slot-v0.3`
- participant session schema: `2rasi.priolens.open14.rank-session-v0.3`
- protocol: `most+least-v0.3`
- rank draft key is separated from the earlier positive-only v0.3 draft key.

Per triad:
1. MOST: `Kuris pirmas patraukia?`
2. chosen MOST is locked;
3. LEAST: `O kuris iš likusių traukia mažiausiai?`
4. LEAST can only be one of the remaining two, or `Abu likę panašiai`.

No user-facing `MOST - LEAST` psychological score is introduced.

## Source / validator gates

Guarded build and 42-bank/no-repeat smoke:
- run `33763964338` = SUCCESS.

Rank source/API contract smoke:
- run `33763878138` = SUCCESS.

The v0.3 API was migrated to the rank session schema. Backend rejects:
- previous positive-only `2rasi.priolens.open14.session-v0.3` payloads;
- a LEAST exemplar equal to MOST;
- invalid `pendingMost` state.

Progress supports saving between MOST and LEAST via `pendingMost`.

## Deployed API gate — PASS

Run `33766017673` = SUCCESS.

Verified against public Hostinger endpoints:
- GET `api.php` -> 405;
- GET `progress.php` -> 405;
- `config.php` -> 403;
- old positive-only v0.3 schema -> 400;
- MOST=LEAST -> 400;
- forbidden Origin -> 403;
- valid rank progress with `pendingMost` -> 200 and saved;
- valid rank final -> 200;
- progress after completed final -> `completedAlready:true`.

Smoke seed prefix: `SYSTEM_SMOKE_DO_NOT_ANALYZE` and must be excluded from research analysis.

## Deployed participant gate — PASS

Run `33766486747` = SUCCESS.

Static deploy checks PASS:
- deployed runtime files matched feature source byte-for-byte at smoke time;
- bank runtime-ready;
- `.mjs` works as JavaScript;
- all 42 stimulus runtime paths reachable;
- rank schema, LEAST, `pendingMost`, LEAST-aware result logic and language-specific MOST badge markers present.

Chromium 390×844 LT full-flow PASS:
- Start works;
- Trial 1 MOST selected;
- counter does not advance before LEAST;
- MOST image locks;
- reload between MOST and LEAST;
- Resume restores trial `1 / 14` directly in LEAST phase with MOST still locked;
- explicit LEAST selection works;
- `Abu likę panašiai` path exercised once;
- all 14 triads complete;
- 42 unique exemplar IDs observed, exact exemplar repeat = 0;
- all 6 Channel-B screens / 12 sufficiency values completed;
- LEAST result section present;
- final rank payload contains 14 choices, 42 unique presented exemplars and 12 sufficiency values;
- final payload has `pendingMost:null`;
- MOST never equals LEAST.

Focused EN PASS:
- EN language;
- `2rasi.com` return target;
- MOST+LEAST intro copy;
- FIRST lock marker;
- LEAST phase shown correctly.

Browser progress/final calls were intercepted in the participant smoke to avoid an unmarked pseudo-participant DB row. Real rank API persistence was separately verified by run `33766017673` using the `SYSTEM_SMOKE_DO_NOT_ANALYZE` prefix.

## Result layer

MOST and LEAST are kept as separate observations.

LEAST is now available to the reflection layer, including cases where a broader Channel-B area is rated low/high while the linked visual family repeatedly appears among least-pulling images.

Interpretation boundary remains:
- MOST is comparative visual pull, not hidden truth;
- LEAST is comparative lower pull in that triad, not aversion, dislike, or low psychological importance;
- neither MOST nor LEAST proves need or sufficiency;
- Channel B remains a separate current-sufficiency self-report.

## Current gate

Technical MOST+LEAST preview gate = PASS.

Remaining gate before any live replacement decision:
- owner real-phone UX / visual smoke;
- specifically judge whether the two-step interaction feels natural and not tiring;
- verify no confusing lock transition, no awkward scroll jump, no broken crop;
- explicit `BELONGING-03` WATCH remains: must read as shared-group/togetherness rather than merely dyadic connection.

External recruitment remains CLOSED. Live v0.2 remains unchanged.
