# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 LIVE UNCHANGED / v0.3 42-BANK ASSET GATE PASS / v0.3 MOST+LEAST SOURCE PASS / MOST+LEAST API DEPLOY PENDING / MOST+LEAST PARTICIPANT DEPLOY PENDING / EXTERNAL RECRUITMENT CLOSED
Updated: 2026-09-03
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Repo is source of truth. Do not reconstruct PrioLens from chat memory.**

Recovery order:
1. this file;
2. `config/open14-v0.3-active-runtime-protocol.json`;
3. `docs/OPEN14_V03_MOST_LEAST_MIGRATION_SOURCE_PASS_2026-09-03.md`;
4. `docs/OPEN14_V03_DEPLOYED_PARTICIPANT_SMOKE_PASS_2026-09-03.md` for historical positive-only v0.3 deploy evidence only;
5. `docs/OPEN14_V03_API_PASS_AND_PARTICIPANT_PREVIEW_PACKAGE_2026-09-03.md` for historical positive-only v0.3 API evidence only;
6. `docs/OPEN14_V03_GEOMETRY_PASS_AND_ASSET_UPLOAD_PACKAGE_2026-09-03.md`;
7. `docs/OPEN14_42_BANK_DESIGN_FREEZE_2026-09-03.md`;
8. `config/open14-next-bank-v0.3-design.json`;
9. `config/open14-next-bank-v0.3-source-assets.json`;
10. `config/open14-next-bank-v0.3-geometry.json`;
11. `research/open14_no_repeat_assigner_v03.mjs` + smoke;
12. older runtime-plan/checkpoint files only when needed.

Later checkpoints supersede older same-day notes when they conflict.

## Non-negotiable research boundary

Channel A = low-deliberation comparative visual choice. Active v0.3 Channel A records two distinct comparative observations per triad when MOST is clear:
- MOST = first visual pull;
- LEAST = least pull among the two remaining images.

Channel B = current perceived sufficiency collected only after Channel A.

Do not claim:
- subconscious/true-self access;
- visual pull = unmet need;
- RT = psychological strength;
- MOST-minus-LEAST = psychological score;
- one global/Maslow need score;
- validated complete taxonomy.

MOST and LEAST stay analytically separate. Any balance field is diagnostic only and is not participant-facing.

CARE visual giving is not equivalent to `CARE_SUPPORT_PRESENT` received/present support.

## Live v0.2

Still unchanged and live:
`https://omesg360.eu/priolens-open14-v02/`

- 14 families × 2 exemplars = 28 active images;
- live interaction remains its existing v0.2 protocol;
- external recruitment CLOSED.

Do not overwrite or mutate live v0.2 while v0.3 preview validation is incomplete.

## Frozen v0.3 bank — PASS

14 families × 3 unique exemplars = 42.

No-repeat assigner:
`balanced-3x1-no-repeat-slot-v0.3`

Family planner remains intentionally v0.2 because its family-triad algorithm did not change:
`cyclic-14x3-diff-1-4-slot-role-v0.2`

1000-seed logic invariant:
- 42 exposures;
- 42 unique exemplar IDs;
- each family uses 01/02/03 once;
- exact-image repeats = 0;
- balanced screen slots.

### Hosted asset gate — PASS

New 15 are deployed under:
`/priolens-research-assets/Open14-v03/`

- new15 hosted verification run `33755869671` = SUCCESS;
- full42 audit run `33756186905` = SUCCESS;
- 42/42 HTTP/decode PASS;
- 42 unique runtime paths and exact SHA;
- new15 canonical SHA 15/15 PASS;
- closest pHash distance 16;
- pHash watches <=12 = 0;
- stock-watermark OCR hits = 0.

`BELONGING-03` geometry PASS; owner mobile visual WATCH remains.

## Active v0.3 interaction — MOST+LEAST

Runtime repo:
- `olemoz1977/omesg360`;
- branch `feature/priolens-open14-v03`.

Active protocol identity:
- protocol: `most+least-v0.3`;
- session schema: `2rasi.priolens.open14.rank-session-v0.3`;
- draft key: `priolens.open14.v03.rank.draft`.

The previous positive-only v0.3 identity `2rasi.priolens.open14.session-v0.3` is superseded for the active preview protocol and must not be pooled with rank sessions.

Interaction:
1. choose MOST;
2. MOST locks;
3. choose LEAST from the remaining two or explicit tie;
4. no-clear MOST skips LEAST;
5. `pendingMost` is checkpointed so reload between MOST and LEAST resumes the same phase.

Results:
- MOST repetitions shown separately;
- LEAST repetitions shown separately as `Kas liko antrame plane?` / EN equivalent;
- LEAST participates in reflection through `LOW_LEAST` / `HIGH_LEAST` cases;
- no participant-facing MOST−LEAST score.

## MOST+LEAST source gates — PASS

Build run `33763964338` = SUCCESS:
- guarded v0.3 build from live v0.2 source;
- guarded MOST+LEAST transform;
- guarded LEAST-aware result transform;
- 1000-seed 42-bank/no-repeat invariant smoke;
- identity guards;
- generated index commit.

Source/API contract run `33763878138` = SUCCESS:
- PHP syntax PASS;
- valid final rank payload reaches backend config boundary;
- valid progress + `pendingMost` reaches backend config boundary;
- old positive-only v0.3 session schema rejected;
- MOST=LEAST rejected;
- invalid `pendingMost` rejected.

Canonical current protocol state:
`config/open14-v0.3-active-runtime-protocol.json`

Canonical migration checkpoint:
`docs/OPEN14_V03_MOST_LEAST_MIGRATION_SOURCE_PASS_2026-09-03.md`

## Important supersession note

Earlier deployed v0.3 positive-only smokes remain valid historical evidence for hosting, bank and the then-current runtime, but **do not close the active MOST+LEAST deployment gates**.

Until the new packages are uploaded, Hostinger preview directories still serve the earlier positive-only v0.3 version:
- `/priolens-open14-v03-api/`;
- `/priolens-open14-v03/`.

Therefore current active gate state is:
- 42-bank assets: PASS;
- MOST+LEAST source/build: PASS;
- MOST+LEAST API package: PREPARED, DEPLOY PENDING;
- MOST+LEAST API deployed smoke: PENDING;
- MOST+LEAST participant package: PREPARED, DEPLOY PENDING;
- MOST+LEAST participant deployed Chromium smoke: PENDING;
- owner mobile visual/interaction smoke: PENDING;
- external recruitment: CLOSED.

## Immediate next execution queue

1. Upload the prepared MOST+LEAST API package into existing `public_html/priolens-open14-v03-api/`.
2. Overwrite `api.php`, `progress.php`, `.htaccess`; **preserve existing `config.php` unchanged**.
3. Run dedicated deployed MOST+LEAST API smoke.
4. Only after API PASS upload the MOST+LEAST participant package into existing `public_html/priolens-open14-v03/`.
5. Run deployed Chromium MOST+LEAST smoke, including reload between MOST and LEAST, tie path, 42 unique exemplars, LT+EN and final rank payload.
6. Owner mobile smoke, with explicit `BELONGING-03` WATCH.
7. Only then consider any live replacement.
8. External recruitment remains CLOSED until a later explicit `PILOT_OPENED_AT_UTC` freeze.

Main stimulus rule:
> **What does a reasonable viewer see happening within about one second?**

Guardrail:
> **clear enough + engaging > theoretically pure + dead**
