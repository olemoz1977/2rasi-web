# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 LIVE UNCHANGED / v0.3 42-BANK PASS / v0.3 MOST+LEAST API PASS / OWNER MOBILE FOUND 3/3 RESULT IMAGE CAP / FIX SOURCE+CI PASS / FIX DEPLOY PENDING / EXTERNAL RECRUITMENT CLOSED
Updated: 2026-09-03
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Repo is source of truth. Do not reconstruct PrioLens from chat memory.**

Recovery order:
1. this file;
2. `config/open14-v0.3-active-runtime-protocol.json`;
3. `docs/OPEN14_V03_MOST_LEAST_DEPLOYED_PASS_2026-09-03.md` for the pre-fix deployed technical smoke;
4. `docs/OPEN14_V03_MOST_LEAST_MIGRATION_SOURCE_PASS_2026-09-03.md`;
5. `docs/OPEN14_V03_GEOMETRY_PASS_AND_ASSET_UPLOAD_PACKAGE_2026-09-03.md`;
6. `docs/OPEN14_42_BANK_DESIGN_FREEZE_2026-09-03.md`;
7. bank/design/source/geometry configs and no-repeat assigner smoke as needed.

Later checkpoints supersede older same-day notes when they conflict.

## Non-negotiable research boundary

Channel A = low-deliberation comparative visual choice.

Active v0.3 records two distinct comparative observations when MOST is clear:
- MOST = first visual pull;
- LEAST = lower pull among the two remaining images.

Channel B = current perceived sufficiency collected only after Channel A.

Do not claim:
- subconscious/true-self access;
- visual pull = unmet need;
- LEAST = dislike, aversion or low psychological importance;
- RT = psychological strength;
- MOST-minus-LEAST = psychological score;
- one global/Maslow need score;
- validated complete taxonomy.

MOST and LEAST stay analytically separate. No participant-facing balance score.
CARE visual giving is not equivalent to `CARE_SUPPORT_PRESENT` received/present support.

## Live v0.2

Still unchanged:
`https://omesg360.eu/priolens-open14-v02/`

Do not overwrite or mutate live v0.2 while v0.3 owner review is incomplete.
External recruitment remains CLOSED.

## Frozen v0.3 bank — PASS

14 families × 3 unique exemplars = 42.
Family planner remains `cyclic-14x3-diff-1-4-slot-role-v0.2`.
No-repeat assigner remains `balanced-3x1-no-repeat-slot-v0.3`.

1000-seed invariant:
- 42 exposures;
- 42 unique exemplar IDs;
- each family uses 01/02/03 once;
- exact-image repeats = 0;
- balanced screen slots.

Hosted asset gates remain PASS:
- new15 run `33755869671`;
- full42 audit `33756186905`;
- 42/42 HTTP/decode PASS;
- 42 unique paths and exact SHA;
- pHash watch <=12 = 0;
- stock-watermark OCR hits = 0.

`BELONGING-03` geometry PASS; owner phone group-read WATCH remains.

## Active v0.3 protocol — MOST+LEAST

Runtime repo: `olemoz1977/omesg360`, branch `feature/priolens-open14-v03`.
Preview: `https://omesg360.eu/priolens-open14-v03/?lang=lt&from=lt`.

Identity:
- protocol `most+least-v0.3`;
- session schema `2rasi.priolens.open14.rank-session-v0.3`;
- draft key `priolens.open14.v03.rank.draft`.

Interaction:
1. choose MOST;
2. MOST locks;
3. choose LEAST from the remaining two or `Abu likę panašiai`;
4. no-clear MOST skips LEAST;
5. `pendingMost` makes reload/resume between MOST and LEAST safe.

API deployed rank smoke `33766017673` = SUCCESS.
Pre-fix deployed participant smoke `33766486747` = SUCCESS for the runtime bytes that existed before the owner result-image finding.

## Owner mobile finding — 3/3 displayed with only 2 images

Owner real-phone review found a concrete inconsistency:
- result text said e.g. `Priklausymas 3/3`;
- the result card / reflection showed only 2 exemplar images.

Root cause confirmed in source: three v0.2 two-image caps survived the v0.3 migration:
1. MOST result card used `chosenImagePaths(id).slice(0,2)`;
2. LEAST result card used `leastImagePaths(id).slice(0,2)`;
3. reflection hero used `images.slice(0,2)`.

This is a presentation defect, not a bank/counting defect.

### Fix policy

Display every distinct exemplar that produced the displayed repeated-family count:
- 2/3 -> show 2 images;
- 3/3 -> show 3 images.

Applies to:
- MOST result cards;
- LEAST result cards;
- reflection hero.

Responsive result grids now use auto-fit so 2-image cases remain 2-wide and 3-image cases fit three images without an empty third cell.

Fix source commit: `5468e9c1033751262c05115280015c685c70529c`.
Build + 1000-seed invariants: run `33770222635` = SUCCESS.
Source-contract smoke: run `33770222682` = SUCCESS.
Updated participant package: run `33770331724`, with explicit guards preventing the three `slice(0,2)` caps from returning.

## Current gate state

- 42-bank asset gate: PASS.
- MOST+LEAST API: DEPLOYED + PASS.
- MOST+LEAST source after 3/3 fix: PASS.
- Deployed participant currently serves the pre-fix bytes until owner uploads the new participant package.
- Therefore current-source deployed participant smoke: PENDING.
- Owner mobile visual/UX smoke: OPEN, issue found, retest pending after deploy.
- External recruitment: CLOSED.

## Immediate next execution queue

1. Upload the updated participant ZIP into existing `public_html/priolens-open14-v03/`, overwriting preview files only.
2. Run deployed byte/static/Chromium MOST+LEAST smoke against the new bytes.
3. Owner retests the result screen specifically:
   - 3/3 must show 3 images;
   - 2/3 must show 2 images;
   - no awkward mobile wrapping/overflow;
   - MOST → LEAST remains natural;
   - `BELONGING-03` still reads as shared-group/togetherness.
4. Capture owner PASS/issues in repo.
5. Only after owner gate closes consider replacing live v0.2.
6. External recruitment remains CLOSED until a later explicit `PILOT_OPENED_AT_UTC` freeze.

Main stimulus rule:
> **What does a reasonable viewer see happening within about one second?**

Guardrail:
> **clear enough + engaging > theoretically pure + dead**
