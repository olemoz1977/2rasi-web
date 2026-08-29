# PrioLens stimulus ledger v0.1

Status: LIVE DECISION LOG / NOT A STIMULUS FREEZE
Updated: 2026-08-29

## Purpose

Persistent source of truth for current stimulus decisions. A chat decision is not retained until recorded here.

For every candidate track:

`source -> intended direction -> semantic status -> independence -> visual/confound status -> disposition`

Rules:

- Do not re-open accepted/rejected candidates without new evidence.
- Do not generate more for a direction already at 2/2 unless the full-set audit exposes a concrete problem.
- `PASS` means defensible design candidate, not validated construct evidence.
- `PROVISIONAL PASS` counts as an occupied candidate slot but must survive full-set audit / cleanup.
- `RESERVE` does not count toward the 16.
- Procedural mockups and generated moodboards are never stimuli.

## Current slot ledger

| Direction | Slot 1 | Slot 2 | Current state |
|---|---|---|---|
| AUT | missing | missing | **0/2** |
| CER | missing | missing | **0/2** |
| EXP | `3098` forest road | missing | **1/2 provisional** |
| MAS | `4635` precision caliper | `4636` potter | **2/2 PASS** |
| CON | missing | missing | **0/2**; `2790`, `2720` reserves |
| INF | routed consequence family: `4602` OR `4612` | `4641` domino chain reaction | **2/2 candidate coverage; slot 2 provisional** |
| PRO | `2723` wet umbrella | missing | **1/2 provisional** |
| OPP | `4637` productive greenhouse | `4638` prepared food table | **2/2 provisional** |

Strict candidate count: **8/16 occupied; 8 remain open.**

Open slots:

- EXP: 1
- PRO: 1
- CON: 2
- CER: 2
- AUT: 2

## Current candidate decisions

### MAS

#### `4635` precision caliper / fine mechanical adjustment
- Direction: MAS.
- Semantic: `PASS`.
- Why: precision, measurement, fine adjustment and quality control are directly visible.
- Nearest neighbour: MAS dominates INF because skilled execution, not external consequence, is central.
- Confound: technical/mechanical domain flag.
- Disposition: **KEEP / MAS-1**.

#### `4636` potter forms symmetrical clay vessel
- Direction: MAS.
- Semantic: `PASS`.
- Why: practiced hand control, refinement, symmetry and skill are visible.
- Independence vs `4635`: `PASS`.
- Confound: craft/tactile domain flag.
- Disposition: **KEEP / MAS-2**.

**MAS closed at 2/2.**

### OPP

#### `4637` open greenhouse with visible productive value
- Direction: OPP.
- Semantic: `PROVISIONAL PASS`.
- Why: a concrete valuable possibility is visibly available and accessible now.
- Nearest neighbour: stronger OPP than AUT/EXP because visible value, not freedom/discovery, is central.
- Confound: nature/food positive valence.
- Disposition: **KEEP / OPP-1 provisional**.

#### `4638` prepared food table with one empty plate
- Direction: OPP.
- Semantic: `PROVISIONAL PASS`.
- Why: prepared value is visibly available for immediate use.
- Nearest neighbour: weak residual CON reading, but no people/celebration/multiple place settings.
- Independence vs `4637`: provisional pass; scenes differ but both remain positive resource/food domains.
- Confound: appetite/reward.
- Disposition: **KEEP / OPP-2 provisional**.

**OPP closed provisionally at 2/2; reopen only if cross-set audit rejects one.**

### INF

#### `4602` hand redirects marble flow through physical gate
- Direction: INF.
- Semantic: `PASS`.
- Why: one visible action changes the outcome of a wider external physical system.
- Confound: mechanism/control affinity.
- Disposition: **KEEP as routed-consequence family option**.

#### `4612` irrigation gate distributes water toward several plant beds
- Direction: INF.
- Semantic: `PASS`.
- Why: one visible action changes a wider external system and consequence is visible in-frame.
- Independence vs `4602`: `FAIL`; both are `hand + gate/lever + routed physical flow + downstream consequence`.
- Disposition: **KEEP only as alternative to `4602`; never pair 4602 + 4612**.

#### `4641` fingertip initiates domino chain reaction
- Direction: INF.
- Semantic: `PASS`.
- Why: the fingertip visibly initiates the first falling domino and the effect propagates through multiple downstream pieces in the same frame; a small action visibly changes a wider external system state.
- Physical causality: **PASS compared with 4615/4616**. The first tile is already leaning away from the finger and contacts the next tile; downstream falling and upright pieces make propagation legible.
- Nearest neighbours: MAS weak (no skill/refinement task); AUT weak (not directing one's own course); INF is the clearest reading.
- Independence vs routed-flow family (`4602`/`4612`): `PASS`; causal chain reaction is a different scene/mechanism family from routed flow.
- Branching: not clearly legible, but **not required by the frozen INF definition**; visible external propagation is sufficient.
- Visual/confound: wooden game-piece salience is acceptable; **KlingAI watermark must be absent/removed before freeze**. Final crop/export must not introduce composition imbalance.
- Disposition: **KEEP / INF-2 PROVISIONAL PASS pending clean watermark-free asset + full-set audit**.

Earlier rejected INF attempts:
- `4599` generic control panel: `FAIL`, external consequence hidden.
- `4614`: procedural domino sketch only, never a stimulus.
- `4615`: concept pass, image fail because causal sequence incoherent.
- `4616`: image fail because finger read as holding/stopping the first tile.

**INF now has two conceptually independent candidate families. Do not generate more INF unless `4641` cannot be obtained cleanly or full-set audit rejects it.**

### EXP

#### `3098` single forest road disappearing deeper into trees
- Direction: EXP.
- Semantic: `PROVISIONAL PASS`.
- Why: one path into partially unknown space supports approach-to-unknown without a visible choice fork.
- Nearest neighbour: cleaner than AUT forked paths; weaker OPP because no visible gain/reward.
- Confound: nature/travel aesthetic.
- Disposition: **KEEP / EXP-1 provisional**.

**EXP remains 1/2.**

### PRO

#### `2723` wet black umbrella by doorway
- Direction: PRO.
- Semantic: `PROVISIONAL PASS`.
- Why: protective function against visible rain/wetness is directly legible.
- Nearest neighbour: clearer PRO than CER/AUT/OPP.
- Confound: dark/rain negative valence.
- Disposition: **KEEP / PRO-1 provisional**.

#### `2781` key inserted in door lock
- Semantic: `AMBIGUOUS`.
- Problem: locking vs unlocking is not visible, so protection vs access remains unresolved.
- Disposition: **RESERVE only**.

#### `4642` white object in foam case
- Direction attempted: PRO.
- Semantic: `FAIL`.
- Problem: protected object is not clearly recognizable as fragile; foam geometry looks arbitrary/unrealistic, so the viewer must infer what is being protected and why.
- Disposition: **REJECT**.

#### `4644` upright wine glass in open hard case
- Direction attempted: PRO.
- Semantic concept: PRO is legible, but image-level physical realism fails.
- Fatal issue: the wine glass protrudes far above the lower foam and is not supported around the bowl/stem; the case could not plausibly close without contacting or breaking the glass.
- Disposition: **REJECT / PHYSICAL_PROTECTION_COHERENCE_FAIL**.
- Correction direction: if this family is retried, place the wine glass horizontally in a precise full-profile foam cavity with matching lid foam so the entire glass is immobilized when closed.

**PRO remains 1/2.**

### CON

#### `2790` two mugs, one steaming
- Semantic: `AMBIGUOUS`.
- Problem: relationship is inferred through absent people; can read as waiting/absence. Warm coffee adds positive valence.
- Disposition: **RESERVE**.

#### `2720` two glasses of water
- Semantic: `AMBIGUOUS`.
- Strength: neutral.
- Problem: two objects alone do not establish reciprocal connection/belonging.
- Disposition: **RESERVE**.

Rejected CON families:
- two adjacent empty seats: absence/separation dominates.
- `3370`: two mannequins side by side facing canvas, co-presence without reciprocity.
- `3372`: two mannequins apart in gallery, separation/exhibition dominates.

**CON remains 0/2.**

### CER

Rejected CER families:
- `2722` eyeglasses on printed material: reading/vision/intellect, not certainty.
- organized shelf with labels: order/organization plus text confound.
- measuring vessels/level gauges: numbers/scales and MAS/numeracy confound.
- question mark / redacted document / foggy crossroads / old map families remain rejected per reconciliation audit.

**CER remains 0/2.**

### AUT

No candidate has passed.

Rejected/ambiguous families include open doors/gates, forked roads and vehicles because they collapse into OPP/EXP or introduce product/status cues.

**AUT remains 0/2.**

## Latest targeted File Library sweep

Targeted search for CON/CER/AUT/PRO/EXP/INF did not produce additional candidates that survive the frozen semantic contract.

Notable non-additions:
- open gate / garden / playground remain OPP/EXP/AUT ambiguous;
- water gauges remain rejected CER family;
- first-aid / alarm / emergency assets are PRO-dominant or medical/safety-confounded for INF;
- mannequin/gallery scenes fail CON because reciprocal interaction is absent.

## Current-chat generator failure mode

The image generator in this long chat repeatedly returned multi-panel PrioLens moodboards instead of requested single 1:1 stimuli.

Rule:
- those boards are `GENERATOR_CONTEXT_FAILURE / NOT CANDIDATES`;
- labels/statuses invented inside them are not project decisions;
- do not audit board panels as stimuli unless independently exported/regenerated and reviewed.

## Decision discipline

After every candidate review, update this ledger before moving on.

Do not call a direction complete unless it has two eligible, conceptually independent candidate families. A provisional candidate may occupy a working slot but still must survive cleanup and the full-set audit before stimulus freeze.
