# PrioLens P3 open-spectrum 14-family scan v0.1

Status: RESEARCH VARIANT SPEC / NOT PUBLIC ARCHITECTURE
Updated: 2026-09-01

## Why this variant

The old 7-direction P3 is too narrow for the current research question, while a 20+ family taxonomy would make the product heavy and encourage premature construct inflation.

A useful middle point emerges from the current visual-footing map:

> **14 candidate visual families, 14 triads, 3 appearances per family.**

Arithmetic:
- 14 families × 3 appearances = 42 family appearances;
- 14 triads × 3 slots = 42 slots.

Therefore the 14-trial session length can be preserved while the candidate spectrum doubles from 7 to 14 families.

This is a **broad scan**, not a complete tournament and not a 1–14 ranking.

## Candidate 14

### Basic / material / stability

1. **REST** — rest / comfort / restoration
   - pull: `relief, comfort, recovery`

2. **RESOURCE** — resource / reward / acquisition
   - pull: `get or use something useful/rewarding now`

3. **SAFETY** — safety / protection
   - pull: `reduce harm, threat or loss`

4. **ORDER** — order / clarity / predictability
   - pull: `make things arranged, understandable, less uncertain`

### Social / esteem

5. **CONNECTION** — connection / belonging / togetherness
   - pull: `be with / connected to others`
   - note: reciprocity vs belonging remains a possible later split; do not claim they are proven identical.

6. **CARE** — care / caregiving
   - pull: `support or give something for another's welfare`

7. **RECOGNITION** — recognition / acknowledgement / esteem
   - pull: `have contribution or standing seen and acknowledged`

### Agency / outcome

8. **AUTONOMY** — autonomy / self-direction
   - pull: `choose or set this for myself`

9. **CONTROL** — control / assertion / boundary
   - pull: `set the boundary, route, state or what happens next`

10. **SUCCESS** — success / goal attainment
    - pull: `reach the result, win or meet the standard`

### Growth / cognitive / possibility

11. **MASTERY** — mastery / competence
    - pull: `do this well, precisely or skillfully`

12. **EXPLORATION** — exploration / discovery
    - pull: `see what is there / go into the unknown`

13. **KNOWLEDGE** — stable technical ID; working display concept **learning / understanding**
    - pull: `learn, know or understand more clearly`
    - note: this wording is deliberately broader than book/classroom knowledge. The first scan tests whether explicit learning and a direct `see/understand more clearly` scene behave coherently. If not, split or rename later rather than forcing coherence.

14. **OPPORTUNITY** — opportunity / possibility
    - pull: `use or develop an available possibility`

## Why these 14, and why not the others yet

This is not a claim that these are the 14 fundamental human motives.

They are selected because together they satisfy two practical conditions:

1. they cover materially different parts of the current need/impulse map;
2. almost all already have some visual footing in Gallery.

### Deferred from this scan

**Wider-system Influence**
- old INF appears to mix system impact with control;
- CONTROL is more concrete and CONTRIBUTION remains partial;
- keep INF out until its unique pull is clearer.

**Contribution / Service**
- important but current static scenes overlap with Care and Control/Influence;
- retain in perceived-sufficiency/reflection layer and later visual viability work.

**Self-expression / Authenticity**
- self-expression is visually plausible but currently weak and easily collapses into Autonomy or aesthetic novelty;
- broader Authenticity remains reflection-only for now.

**Engagement / Immersion**
- a still image shows focus more readily than subjective immersion/flow;
- keep outside first broad scan.

**Justice / Fairness** and **Purpose / Meaning**
- remain `REFLECTION_HOLD` because current one-frame visual representation would require too much inferred story.

## Asset state

The Open14 matrix now reuses existing Gallery material for all filled families and leaves only six intentional gaps:
- CARE A/B;
- RECOGNITION A/B;
- SUCCESS A/B.

Canonical matrix:
`OPEN14_ASSET_MATRIX_v0.1.md`

Canonical set-level nuisance audit:
`OPEN14_SET_LEVEL_VISUAL_BALANCE_AUDIT_v0.1.md`

Important asset decisions already made:
- AUT uses S05 + recovered backpack adjustment rather than the weak seat-choice placeholder;
- recovered physical audio control is kept as an AUT/CONTROL boundary reserve;
- old CONTROL-B dark/flat settings image was replaced by a square scene whose first read is `įjungti / pakeisti visos patalpos būseną`;
- RESOURCE and OPPORTUNITY vivid outliers are retained and tracked rather than sterilized;
- KNOWLEDGE technical ID is now tested as a broader Learning/Understanding concept so a square `pamatyti aiškiau / daugiau` exemplar can be used as a boundary test without pretending it is literal knowledge acquisition.

## Presentation plan

Keep the P3 v0.4 presentation geometry as the research shell unless a new technical problem is found:
- 3 equal stacked image rows;
- right-side `Nė vienas aiškiai` rail;
- 14 trials;
- no labels during choice;
- latency remains UX/process telemetry only.

Runtime note:
- current square slots use `object-fit: contain`;
- portrait assets remain uncropped but appear narrower;
- do not let one family be represented only by portrait sources when an equally meaningful square/near-square alternative exists.

## Balancing target

Within one 14-trial session:
- each family appears exactly 3 times;
- each family appears exactly once in each of the 3 slots;
- no trial repeats a family;
- use different exemplars where the bank permits;
- preserve exact family + exemplar identity in data.

Unlike the old 7-family balanced incomplete block design, this scan **cannot and should not attempt complete pairwise coverage**.

There are `C(14,2)=91` possible family pairs but only 42 pair co-occurrences across 14 triads. Pair omissions are expected.

The planner objective is therefore not complete pair balance. It is:
1. exact family exposure balance;
2. exact slot balance;
3. broad opponent diversity;
4. macro-domain mixing;
5. no repeated family-pair encounters within a session.

## Macro-domain mixing rule

Prefer triads that do not contain three near-neighbour families from the same macro area.

For example:
- avoid `CARE + CONNECTION + RECOGNITION` in one early trial;
- prefer combinations such as `CARE + CONTROL + EXPLORATION`.

Reason:
- broad scan asks what pulls across qualitatively different valid options;
- near-neighbour discrimination can be a later targeted module if needed.

## Exemplar rule

Ideal research bank:
- 3 materially different exemplars per family, one per appearance.

Practical first prototype:
- 2 strong exemplars per family are acceptable;
- if one exemplar must repeat within a session, rotate which exemplar repeats across session seeds/participants;
- never hide exemplar identity in analysis.

Do not generate a weak third exemplar merely to satisfy symmetry.

## Result boundary

The result may describe:
- which families were chosen more often in this session;
- which macro areas appeared repeatedly;
- choice distribution and no-clear-choice;
- later comparison with perceived sufficiency.

Do not report:
- a 1–14 stable rank;
- a latent need score;
- unmet needs;
- personality type;
- subconscious priorities.

## Relationship to perceived sufficiency

After the visual scan, the person completes the broader perceived-sufficiency layer.

Canonical draft:
`PERCEIVED_SUFFICIENCY_LAYER_v0.1.md`

The two layers do **not** need one-to-one category equivalence.

Comparison should initially happen at:
- a broad macro-domain level;
- or only on families with a defensible mapping.

This prevents abstract areas such as Purpose from being forced into weak pictures merely to match the self-report layer.

## Current build order

Completed:
1. Open14 planner/data contract concept;
2. existing Gallery asset matrix;
3. set-level visual nuisance audit;
4. targeted replacement of the obvious CONTROL-B visual outlier;
5. short perceived-sufficiency research draft.

Current gate:
1. finish recovered backpack asset provenance/path housekeeping;
2. use one square Learning/Understanding boundary exemplar so KNOWLEDGE is not systematically portrait-only in the first scan;
3. then review the six missing text-level mechanisms with the user:
   - CARE A/B;
   - RECOGNITION A/B;
   - SUCCESS A/B;
4. **do not generate images before that mechanism decision**;
5. after accepted missing assets exist, integrate the Open14 runtime;
6. run an owner technical/design smoke test, not validation.
