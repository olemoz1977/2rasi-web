# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 LIVE UNCHANGED / v0.3.1 OWNER PREVIEW PRESERVED / v0.4 OWNER-FEEDBACK LIGHTWEIGHT RESULT UX DEPLOYED TECHNICAL PASS / REVISED REAL-PHONE REVIEW PENDING / EXTERNAL RECRUITMENT CLOSED
Updated: 2026-09-04
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Repo is source of truth. Do not reconstruct PrioLens from chat memory.**

Recovery order:
1. this file;
2. `config/open14-v0.4-active-runtime-protocol.json` for the current owner-preview runtime;
3. `docs/OPEN14_V04_RESULT_WORLD_OWNER_PREVIEW_2026-09-04.md` for the current result architecture and owner-review gate;
4. `config/open14-v0.4-adaptive-clarifiers-protocol.json` and `docs/OPEN14_V04_A_PLUS_B_PLUS_PROTOCOL_FREEZE_2026-09-04.md` for the frozen A+/B+ rationale and rules;
5. `config/open14-v0.3-active-runtime-protocol.json` and `docs/OPEN14_V031_OWNER_REMEDIATION_DEPLOYED_TECHNICAL_PASS_2026-09-03.md` for the preserved v0.3.1 baseline;
6. older v0.3 / bank docs as historical evidence.

Later checkpoints supersede older same-day notes when they conflict.
The v0.4 owner preview is now implemented and deployed. It does **not** replace live v0.2 or open external recruitment.

## Current deployment boundary

Current runtime repo: `olemoz1977/omesg360`.  
Current owner-preview branch: `feature/priolens-open14-v04`.

v0.4 owner preview:
- LT: `https://omesg360.eu/priolens-open14-v04/?lang=lt&from=lt`
- EN: `https://omesg360.eu/priolens-open14-v04/?lang=en&from=com`
- API: `https://omesg360.eu/priolens-open14-v04-api/`

Preserved v0.3.1 owner preview:
`https://omesg360.eu/priolens-open14-v03/?lang=lt&from=lt`

Live v0.2 remains unchanged:
`https://omesg360.eu/priolens-open14-v02/`

External recruitment remains CLOSED.
Do not replace v0.2 or open recruitment merely because v0.4 passes owner-preview technical smoke.

Hostinger preview/API deployment uses isolated GitHub Actions FTP workflows and existing repository secrets.
The v0.4 deployment is isolated from v0.3.1 and v0.2.

## Non-negotiable research boundary

Channel A = low-deliberation comparative visual choice.

Active v0.3.1 protocol records two distinct observations when MOST is clear:
- MOST = first visual pull;
- LEAST = lower pull among the two remaining images.

Channel B = current perceived sufficiency collected only after Channel A.

v0.4 implements two analytically separate adaptive clarifiers:
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

## v0.4 adaptive protocol + result world — DEPLOYED OWNER PREVIEW

Frozen design source:
- `config/open14-v0.4-adaptive-clarifiers-protocol.json`;
- `docs/OPEN14_V04_A_PLUS_B_PLUS_PROTOCOL_FREEZE_2026-09-04.md`.

Current implementation source-of-truth:
- `config/open14-v0.4-active-runtime-protocol.json`;
- `docs/OPEN14_V04_RESULT_WORLD_OWNER_PREVIEW_2026-09-04.md`.

v0.4 protocol flow:
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
- attention detail discloses the raw first-choice repetition count and direct-vs-additional-comparison provenance in participant language;
- participant-facing LEAST/background detail shows only exact 3/3 repeated directions; 2/3 remains stored raw research data;
- needs map contains Channel-B need locations, not Channel-A family labels;
- main needs-map hero renders only route-relevant land(s), not the full six-group taxonomy;
- one endpoint normally yields one land; multiple valid endpoints yield only their relevant lands;
- B+ `similar` may legitimately preserve more than two endpoints, and the renderer must not silently truncate them;
- sufficiency detail opens as a compact bottom sheet over the result rather than replacing it with a mostly empty page;
- after the attention self-explanation is answered, the option list collapses to the selected answer.

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

v0.4 A+/B+ local mobile flow:
- `33808756271` SUCCESS;
- 390×844 A+ visual runoff + A+ reload/resume + 12-way B+ + B+ reload/resume + final payload PASS.

v0.4 server semantic validation:
- `33809181365` SUCCESS;
- server recomputes A+ candidates from raw MOST choices;
- server recomputes B+ candidates from Channel-B minima;
- forged adaptive state rejected.

v0.4 isolated API + owner preview + low-fi result world:
- `33852386491` SUCCESS;
- initial low-fi ship/map/detail architecture PASS.

v0.4 unified scene follow-up:
- `33853607761` SUCCESS after retrying a transient Hostinger FTP timeout;
- source build + semantic gates PASS;
- isolated API/config boundary PASS;
- remote bytes + ES-module MIME PASS;
- deployed 390×844 full flow + final save PASS;
- one continuous ship → waterline → needs-map scene PASS;
- 6 continent groups / 12 Channel-B need locations PASS;
- no-route state marks 0 route targets;
- ship and map detail opening PASS.

Owner-feedback result-UX refinement:
- local UI smoke `33868490503` SUCCESS;
- A+ 390px candidate card width gate PASS (>=300px, one group per row);
- one-endpoint route-only map PASS;
- participant attention detail technical-term leak gate PASS;
- sufficiency bottom-sheet behavior PASS;
- final deployment `33868510484` SUCCESS;
- source build + semantic validation PASS;
- isolated v0.4 API/config boundary PASS;
- live bytes + ES-module MIME PASS;
- deployed 390×844 full owner flow + final API save PASS;
- no-route inactive-continent removal PASS;
- Browser Back / keyboard / modal behavior PASS.

## Result-image rule

Current participant result rendering:
- Channel-A focus 2/3 -> show its 2 distinct selected exemplars in detail/reflection;
- Channel-A focus 3/3 -> show its 3 distinct selected exemplars;
- participant-facing LEAST/background detail is now restricted to exact 3/3 repeats and shows the 3 corresponding exemplars;
- 2/3 LEAST is preserved in raw data but intentionally not surfaced in participant detail.

Do not reintroduce a `slice(0,2)` cap on a valid 3/3 focus or 3/3 background set.

## Current gate state

- v0.3.1 42-bank technical asset gate: PASS.
- v0.3.1 owner preview: PRESERVED.
- v0.4 A+/B+ protocol: IMPLEMENTED + DEPLOYED OWNER PREVIEW.
- v0.4 server semantic validation: PASS.
- v0.4 unified ship-water-needs-map result scene: DEPLOYED + TECHNICAL PASS.
- v0.4 owner-feedback lightweight result UX: DEPLOYED + TECHNICAL PASS (`33868510484`).
- A+ phone runoff: one wide candidate group per row at <=620px.
- participant needs-map hero: route-relevant land(s) only; inactive full-taxonomy map removed from normal result.
- v0.4 final ship graphic: NOT IMPLEMENTED.
- v0.4 needs-map model: six groups + twelve Channel-B locations remain available as vocabulary, but participant hero now renders only route-relevant land(s); final artwork + dotted route geometry NOT IMPLEMENTED.
- v0.4 transition video: NOT IMPLEMENTED.
- Owner real-phone v0.4 result-UX review: PENDING.
- Live v0.2: UNCHANGED.
- External recruitment: CLOSED.

## Immediate next execution queue

### v0.4 revised owner real-phone result-UX gate

Use:
`https://omesg360.eu/priolens-open14-v04/?lang=lt&from=lt`

The 2026-09-04 owner screenshots produced a concrete UX remediation pass. The revised preview is now deployed. Review the revised information architecture, not final artwork.

Check:
1. A+ “Dar vienas žvilgsnis” now shows one wide candidate image-group per row and the individual exemplars are large enough to judge on the phone;
2. the upper ship still works with one Channel-A focus name;
3. attention detail is materially lighter, 2/3 LEAST is gone from participant view, and exact 3/3 background evidence remains understandable without MOST/LEAST/A+ jargon;
4. after answering “Kas, tavo manymu, galėjo traukti šiuose vaizduose?”, the six options collapse cleanly to the selected answer;
5. the lower needs-map hero shows only route-relevant land(s), not all six groups / twelve locations;
6. one-route, multi-route and no-route states remain understandable;
7. the sufficiency “Detalės” bottom sheet contains enough meaning + provenance without looking like an empty report page;
8. ship and map remain clearly separate perspectives without automatic causal interpretation;
9. the whole result feels lighter than the previous version.

If this revised information architecture passes:
1. freeze the information architecture;
2. refactor result shell/styles out of `build_from_v031.mjs` before adding final artwork;
3. define final minimalist ship visual grammar;
4. define route-only needs-map visual grammar over the frozen six-group/twelve-location vocabulary;
5. implement dotted route only from `sufficiencyRoute`;
6. real-phone visual test;
7. add the fixed 4–6 second non-diagnostic transition video last.

Do not add automatic A↔B causal interpretation while polishing visuals.
Do not touch live v0.2 or open external recruitment without a separate explicit decision.

### Independent stimulus-human gate

The earlier v0.3.1 stimulus concerns remain useful as bank-quality checks, especially `OPPORTUNITY-01` and `BELONGING-03`, but they do not block evaluating the new v0.4 result architecture.

Main stimulus rule:
> **What does a reasonable viewer see happening within about one second?**
