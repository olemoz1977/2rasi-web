# PrioLens P3 open-spectrum 14-family scan v0.2

Status: ACTIVE RESEARCH VARIANT SPEC / NOT PUBLIC ARCHITECTURE
Date: 2026-09-01
Supersedes for active work: `P3_OPEN_SPECTRUM_14_SPEC_v0.1.md`

## Why this variant

The old 7-direction P3 is too narrow for the current research question, while a 20+ family taxonomy would make the product heavy and encourage premature construct inflation.

The active middle point is:

> **14 candidate visual families, 14 triads, 3 appearances per family.**

Arithmetic:
- 14 families × 3 appearances = 42 family appearances;
- 14 triads × 3 slots = 42 slots.

The current 14-trial session length is preserved while the candidate spectrum is broadened.

This is a **broad scan**, not a complete tournament, latent-needs model or 1–14 rank.

## Candidate 14 v0.2

### Basic / material / stability

1. **REST** — rest / comfort / restoration
   - pull: `relief, comfort, recovery`

2. **RESOURCE** — resource / reward / acquisition
   - pull: `get or use something useful/rewarding now`

3. **SAFETY** — safety / protection
   - pull: `reduce harm, threat or loss`

4. **ORDER** — order / clarity / predictability
   - pull: `make things arranged, understandable, less uncertain`

### Social

5. **CONNECTION** — direct connection / reciprocity
   - pull: `direct contact or mutual exchange with another`

6. **BELONGING** — belonging / inclusion / togetherness
   - pull: `be with / part of others`

7. **CARE** — altruistic care / proactive helping
   - pull: `act for another person's welfare, including with a small personal cost or before being asked`
   - important: generic warmth or mere closeness is not CARE.

### Agency / esteem

8. **AUTONOMY** — autonomy / self-direction
   - pull: `choose or set this for myself`

9. **CONTROL** — control / assertion / boundary
   - pull: `set the boundary, route, state or what happens next`

10. **RECOGNITION** — recognition / acknowledgement / esteem
    - pull: `have contribution or standing seen and acknowledged`
    - macro assignment: Agency / Esteem, although delivery is social.

### Growth / cognitive / possibility

11. **MASTERY** — mastery / competence
    - pull: `do this well, precisely or skillfully`

12. **EXPLORATION** — exploration / discovery
    - pull: `see what is there / go into the unknown`

13. **KNOWLEDGE** — learning / understanding
    - technical ID remains `KNOWLEDGE` for now;
    - display concept may be `Learning / Understanding`;
    - pull: `know, understand or learn`.

14. **OPPORTUNITY** — opportunity / possibility
    - pull: `use or develop an available possibility`.

## v0.1 -> v0.2 changes

### CONNECTION split

The old broad social bucket is split into:
- `CONNECTION` — direct dyadic contact / reciprocity;
- `BELONGING` — being with / part of others;
- `CARE` — acting for another's welfare.

Do not treat these as proven latent dimensions. This split is a research hypothesis worth testing because the visible mechanisms are materially different.

### SUCCESS removed from the broad scan

`SUCCESS / ACHIEVEMENT` is no longer an Open14 family.

Reason:
- a success endpoint is an outcome;
- the attraction can be driven by mastery, recognition, reward/resource, control, autonomy or opportunity;
- current static-image operationalization does not isolate a useful first-read impulse without heavy overlap.

Current status:
- `SUCCESS / ACHIEVEMENT = DERIVED / THEORY-HOLD`.

It may return later in targeted research if evidence shows a distinct visual pull.

### CARE narrowed

CARE explicitly includes:
- altruistic helping;
- modest self-sacrifice;
- proactive help without a visible request.

Avoid heroic emergency scenes because danger/bravery can become the dominant choice cue.

Canonical decision note:
`OPEN14_SOCIAL_SPLIT_AND_SUCCESS_DECISION_v0.1.md`.

## Deferred from the first Open14 scan

- wider-system Influence;
- Success / Achievement as an atomic visual family;
- Contribution / Service;
- Self-expression / Authenticity;
- Engagement / Immersion;
- Justice / Fairness;
- Purpose / Meaning.

Reasons vary: overlap, weak one-frame footing, abstraction or the construct behaving more like an outcome than an atomic impulse.

## Asset implication

Most of the Open14 v0.2 bank reuses existing Gallery material.

BELONGING now has existing candidates:
- `S14.webp` — `bendrauti / veikti socialiniame rate`;
- `20260731_043300801.png` — `dalintis šiluma / būti kartu`.

These are broad-scan candidates, not validated belonging stimuli.

Current true prototype gaps are approximately:
- 2 CARE mechanisms;
- 2 RECOGNITION mechanisms.

= **about 4 new prototypes**, not a rebuilt library.

Do not generate them automatically.

## CARE mechanism boundary

### CARE-A — visible self-cost

One person voluntarily gives another person protection / comfort / resource while accepting a small visible cost themselves.

The cost must be noticeable but not dramatic enough to turn the scene into bravery or emergency.

### CARE-B — proactive help without request

One person notices another person struggling and begins practical help without a visible request.

The scene must not depend on hidden backstory to be readable.

These are mechanism notes, not final prompts.

## Presentation plan

Keep the P3 v0.4 geometry as the research shell unless a new technical problem is found:
- 3 equal stacked image rows;
- right-side `Nė vienas aiškiai` rail;
- 14 trials;
- no family labels during choice;
- latency remains UX/process telemetry only.

## Planner v0.2

Canonical source:
`research/p3_open14_planner_v02.mjs`

Planner ID:
`cyclic-14x3-diff-1-4-slot-role-v0.2`

Family-set version:
`open-spectrum-14-v0.2`

Macro family counts:
- BASIC: 4;
- GROWTH: 4;
- SOCIAL: 3;
- AGENCY / ESTEEM: 3.

The cyclic FAMILY_SET ordering is intentional. Do not alphabetize or reorder it without revalidating the design.

Within one 14-trial session:
- each family appears exactly 3 times;
- each family appears exactly once in each of the 3 slots;
- every trial has 3 different families;
- every trial has 3 distinct macro domains;
- no family pair repeats;
- 42 unique pair co-occurrences;
- each family meets 6 unique opponents.

The v0.2 implementation was smoke-tested across 1000 deterministic seeds with all validation invariants passing.

## Pair coverage boundary

There are `C(14,2)=91` possible family pairs but only 42 pair co-occurrences in a session.

Therefore:
- pair omissions are expected;
- this is not a complete tournament;
- context sensitivity remains part of the observation;
- do not infer a stable 1–14 ranking from one session.

## Exemplar rule

Ideal research bank:
- 3 materially different exemplars per family, one per appearance.

Practical first prototype:
- 2 strong exemplars per family are acceptable;
- if one exemplar repeats, rotate which exemplar repeats across seeds/participants;
- always preserve exemplar identity in data.

Do not generate a weak third exemplar just for symmetry.

## Result boundary

The result may describe:
- which families were chosen more often in this session;
- which broad areas appeared repeatedly after correcting for exposure;
- choice distribution and no-clear-choice;
- later comparison with perceived sufficiency.

Do not report:
- a stable 1–14 rank;
- a latent need score;
- unmet needs;
- personality type;
- subconscious priorities;
- Karpman roles.

## Relationship to perceived sufficiency

The self-report layer still comes **after** the visual scan.

The two layers do not require one-to-one category equivalence.

In particular:
- visual `CONNECTION` and `BELONGING` may both map into a broader self-reported connection/belonging sufficiency area;
- CARE can be compared only cautiously with perceived care/support because giving care and receiving care are not identical;
- SUCCESS does not need a self-report equivalent merely because it existed in v0.1.

Do not subtract visual and self-report values as if they share one scale.

## Immediate build order

1. use existing Gallery candidates for BELONGING;
2. keep CARE A/B and RECOGNITION A/B explicit as the only true Open14 visual gaps;
3. do not generate any images until the mechanism text passes human review;
4. integrate the accepted existing bank with planner v0.2;
5. preserve the short perceived-sufficiency layer after the visual task;
6. run an owner technical/design smoke test only after the bank is complete enough to render.
