# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 LIVE UNCHANGED / v0.3.1 REMEDIATED OWNER PREVIEW TECHNICAL PASS / v0.4 A+/B+ DESIGN FREEZE NOT DEPLOYED / OWNER REAL-PHONE VISUAL-UX RETEST PENDING / EXTERNAL RECRUITMENT CLOSED
Updated: 2026-09-04
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Repo is source of truth. Do not reconstruct PrioLens from chat memory.**

Recovery order:
1. this file;
2. `config/open14-v0.3-active-runtime-protocol.json` for what is actually deployed now;
3. `config/open14-v0.4-adaptive-clarifiers-protocol.json` and `docs/OPEN14_V04_A_PLUS_B_PLUS_PROTOCOL_FREEZE_2026-09-04.md` for the next protocol design; these are DESIGN ONLY, NOT DEPLOYED;
4. `docs/OPEN14_V031_OWNER_REMEDIATION_DEPLOYED_TECHNICAL_PASS_2026-09-03.md`;
5. `docs/OPEN14_V03_MOST_LEAST_DEPLOYED_PASS_2026-09-03.md` for pre-remediation protocol history;
6. `docs/OPEN14_42_BANK_DESIGN_FREEZE_2026-09-03.md` and bank/source/geometry configs as historical design evidence.

Later checkpoints supersede older same-day notes when they conflict.
The v0.4 design freeze supersedes earlier result-presentation assumptions, but it does **not** supersede the v0.3.1 deployed-runtime boundary until v0.4 is explicitly implemented, tested and deployed.

## Current deployment boundary

Runtime repo: `olemoz1977/omesg360`.
Branch: `feature/priolens-open14-v03`.
Owner preview:
`https://omesg360.eu/priolens-open14-v03/?lang=lt&from=lt`

Live v0.2 remains unchanged:
`https://omesg360.eu/priolens-open14-v02/`

External recruitment remains CLOSED.
Do not replace v0.2 or open recruitment merely because the v0.3.1 owner preview passes technical smoke.

Hostinger preview/API deployment is available through isolated GitHub Actions FTP workflows using existing repository secrets.
There is no need to ask the owner for manual Hostinger upload when the existing isolated FTP path can do the job.

Current isolated preview deploy sends together:
- `index.html`;
- `bank.json`;
- `stimulus-bank.html`.

It does not touch v0.2, public routing, or research assets.

## Non-negotiable research boundary

Channel A = low-deliberation comparative visual choice.

Active v0.3.1 protocol records two distinct observations when MOST is clear:
- MOST = first visual pull;
- LEAST = lower pull among the two remaining images.

Channel B = current perceived sufficiency collected only after Channel A.

Planned v0.4 adds two analytically separate adaptive clarifiers:
- A+ = focus clarification among already repeated Channel-A candidates; it never changes raw MOST counts;
- B+ = clarification among exact tied lowest eligible Channel-B sufficiency items; it never changes raw Channel-B ratings.

Do not claim:
- subconscious/true-self access;
- visual pull = unmet need;
- A+ converts 2/3 into 3/3 or acts as a fourth exposure;
- B+ finds a deepest/true need;
- LEAST = dislike, aversion or low psychological importance;
- RT = psychological strength;
- MOST-minus-LEAST = psychological score;
- one global/Maslow need score;
- validated complete taxonomy;
- a one-to-one construct mapping between the 14 Channel-A families and the 12 Channel-B need items.

MOST and LEAST stay analytically separate. No participant-facing balance score.
CARE visual giving is not equivalent to `CARE_SUPPORT_PRESENT` received/present support.

## Current bank identity

Current owner-preview bank:
`2rasi.priolens.open14.bank-v0.3.1`

14 families × 3 unique exemplars = 42.

Unchanged deployed architecture:
- family planner `cyclic-14x3-diff-1-4-slot-role-v0.2`;
- exemplar assigner `balanced-3x1-no-repeat-slot-v0.3`;
- protocol `most+least-v0.3`;
- session schema `2rasi.priolens.open14.rank-session-v0.3`.

Draft namespace changed with the pixel-bank revision:
`priolens.open14.v031.rank.draft`

Reason: do not resume a draft made with pre-remediation v0.3 pixels under v0.3.1 pixels.

Stable exemplar IDs were retained. Five runtime assets changed:
- `REST-01` -> slippers crop;
- `RESOURCE-03` -> prepared food;
- `KNOWLEDGE-02` -> online lesson + handwritten notes;
- `OPPORTUNITY-01` -> prepared materials/open workbench;
- `RECOGNITION-02` -> improved teacher/student high-five crop.

Exact paths, hashes and rationale are frozen in:
`docs/OPEN14_V031_OWNER_REMEDIATION_DEPLOYED_TECHNICAL_PASS_2026-09-03.md`.

## v0.4 adaptive protocol freeze — NOT DEPLOYED

Frozen source:
- `config/open14-v0.4-adaptive-clarifiers-protocol.json`;
- `docs/OPEN14_V04_A_PLUS_B_PLUS_PROTOCOL_FREEZE_2026-09-04.md`.

Planned flow:
1. current Channel A MOST + LEAST;
2. A+ only when the raw Channel-A result does not leave one direct repeated focus;
3. current 12-item Channel B;
4. B+ only when exact eligible lowest sufficiency items are tied;
5. final persistence;
6. fixed non-diagnostic transition video;
7. result world: Channel-A ship + independent Channel-B needs map.

A+ is placed before Channel B to avoid textual need wording priming the visual runoff.

Frozen A-focus rules:
- exactly one 3/3 -> direct focus, no A+;
- 2+ families at 3/3 -> A+ among all 3/3 candidates;
- no 3/3 + exactly one 2/3 -> direct repeated focus, no A+;
- no 3/3 + 2+ families at 2/3 -> A+ among all 2/3 candidates;
- no family >=2/3 -> do not manufacture a focus.

A+ shows only the participant's previously MOST-selected exemplars for each candidate family, with family labels hidden. A+ never changes raw MOST counts.

Neutral combinatorial baseline under equal random MOST among three images and no no-clear choices:
- unique 3/3: ~39.04%;
- no 3/3: ~54.66%;
- 2+ 3/3: ~6.30%;
- A+ trigger under the frozen rules: ~60.62%.
This is a design baseline, not an empirical participant prediction.

Frozen B-route rules:
- `Sunku pasakyti` excluded from numeric minimum;
- no numeric answers -> no route;
- all numeric answers 4–5 -> no deficit-style route;
- one exact eligible minimum at <=3 -> direct route endpoint, no B+;
- 2+ exact eligible minima at <=3 -> B+ among those tied items;
- B+ `Jos dabar panašiai` -> all tied minima remain endpoints;
- B+ `Sunku pasakyti` -> no directional route is forced.

Result-world semantics:
- ship = Channel-A focus only;
- needs map = Channel-B/B+ only;
- no automatic ship-to-map causal line;
- hero ship shows only the focus name, not raw counts;
- detailed view must disclose raw count and whether A+ was used;
- needs map contains need locations, not Channel-A family labels.

A new v0.4 session schema and draft namespace are required before runtime implementation. Do not silently extend `rank-session-v0.3` with A+/B+ semantics.

## Current technical evidence

Owner-remediation asset upload + exact live hash verification:
- `33785859324` SUCCESS.

Bank v0.3.1 promotion + 1000-seed no-repeat smoke:
- `33790490418` SUCCESS.

Current full-42 hosted audit:
- `33790603165` SUCCESS;
- 42/42 HTTP/decode/square PASS;
- 42 unique exemplar IDs;
- 42 unique runtime paths;
- 42 unique exact SHA-256 values;
- 18/18 SHA-pinned assets matched;
- pHash watch <=12 = 0;
- stock-watermark OCR hits = 0.

API compatibility source migration:
- `33790995808` SUCCESS.

Isolated v0.3 API deployment:
- `33791065786` SUCCESS.

Deployed API smoke:
- `33791193830` SUCCESS;
- v0.3.1 progress/final persistence PASS;
- old bank-v0.3 compatibility PASS;
- old positive-only session schema rejected;
- MOST=LEAST rejected;
- origin boundary PASS.

Source-bank API gate:
- `33791262545` SUCCESS.

v0.3.1 guarded participant build:
- `33791323772` SUCCESS;
- 1000-seed no-repeat PASS;
- new v031 draft namespace PASS.

Atomic isolated preview deploy:
- `33791409529` SUCCESS;
- live `index.html`, `bank.json`, `stimulus-bank.html` matched source byte-for-byte.

Deployed 390×844 Chromium participant smoke:
- `33791582358` SUCCESS;
- LT full MOST->LEAST flow PASS;
- reload/resume between MOST and LEAST PASS;
- v031 draft isolation PASS;
- LEAST tie path PASS;
- 14 triads / 42 unique exemplars / 0 exact repeats PASS;
- six Channel-B pages / final v0.3.1 payload PASS;
- focused EN flow PASS.

Final bank metadata sync:
- `33791761554` SUCCESS;
- repo and Hostinger bank metadata match;
- participant preview deploy/static/Chromium gates = PASS;
- `ownerMobileVisualSmokePassed:false` remains intentionally open.

## Result-image rule

Current participant result rendering remains:
- 2/3 -> show 2 distinct exemplar images;
- 3/3 -> show 3 distinct exemplar images;
- applies to MOST cards, LEAST cards and reflection hero.

Do not reintroduce a `slice(0,2)` cap.

## Current gate state

- v0.3.1 42-bank technical asset gate: PASS.
- v0.3.1 API: DEPLOYED + PASS.
- v0.3.1 participant preview: DEPLOYED + TECHNICAL PASS.
- Owner real-phone visual/UX gate: RETEST PENDING.
- v0.4 A+/B+ protocol: DESIGN FREEZE / NOT IMPLEMENTED / NOT DEPLOYED.
- Live v0.2: UNCHANGED.
- External recruitment: CLOSED.

## Immediate next execution queue

### v0.4 protocol implementation, owner-only

Do not start with ship/map rendering. Implement the protocol first:
1. define new v0.4 session schema and draft namespace;
2. implement a pure deterministic A-focus resolver;
3. implement A+ UI + persistence + resume;
4. implement a pure deterministic B-route resolver;
5. implement B+ UI + persistence + resume;
6. extend API compatibility/validation for v0.4 while preserving v0.3 owner-session compatibility during migration;
7. build an owner-only synthetic edge-case harness covering the frozen cases in the v0.4 protocol doc;
8. only after those pass, implement the ship + needs-map result renderer;
9. add the fixed transition video last.

### Independent open v0.3.1 human gate

Owner real-phone visual/UX retest remains open. Focus on:
1. `REST-01`: slippers immediately read as rest/recovery; no rocking-horse distraction.
2. `RESOURCE-03`: prepared food works as an available usable/rewarding resource without becoming an obviously overpowering food cue.
3. `KNOWLEDGE-02`: active learning is clear; not generic computer work.
4. `OPPORTUNITY-01`: available possibility/use opportunity is clear; not merely materials or a blank desk.
5. `RECOGNITION-02`: both people and the high-five are legible; dead-wall imbalance is reduced.
6. `BELONGING-03`: still reads as shared-group/togetherness rather than a dyad.
7. Current result screen: 3/3 shows 3 images, 2/3 shows 2, no awkward wrapping/overflow.
8. MOST -> LEAST interaction still feels natural on the real device.

If any item fails, record the exact stimulus/interaction problem before changing the bank again.
If all pass, record owner PASS in repo. Replacing live v0.2 and opening external recruitment remain separate explicit decisions.

Main stimulus rule:
> **What does a reasonable viewer see happening within about one second?**
