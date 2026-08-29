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
| PRO | `2723` wet umbrella | `4645` horizontal wine glass in foam case | **2/2 provisional** |
| OPP | `4637` productive greenhouse | `4638` prepared food table | **2/2 provisional** |

Strict candidate count: **9/16 occupied; 7 remain open.**

Open slots:

- EXP: 1
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
- Independence vs `4602`: `FAIL`; same routed-flow family.
- Disposition: **KEEP only as alternative to `4602`; never pair 4602 + 4612**.

#### `4641` fingertip initiates domino chain reaction
- Direction: INF.
- Semantic: `PASS`.
- Physical causality: `PASS` compared with 4615/4616; first tile leans away from finger, contacts next tile, and propagation is visible.
- Nearest neighbours: MAS and AUT materially weaker.
- Independence vs routed-flow family: `PASS`.
- Branching is not required by the frozen INF definition.
- Confound: wooden game-piece salience acceptable; KlingAI watermark must be absent before freeze.
- Disposition: **KEEP / INF-2 PROVISIONAL PASS**.

Earlier rejected INF attempts: `4599` hidden consequence; `4614` procedural reference; `4615` incoherent causality; `4616` finger read as holding/stopping.

**INF closed provisionally at 2/2 candidate families.**

### EXP

#### `3098` single forest road disappearing deeper into trees
- Direction: EXP.
- Semantic: `PROVISIONAL PASS`.
- Why: one path into partially unknown space supports approach-to-unknown without a choice fork.
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

#### `4645` horizontal fragile wine glass in fitted foam case
- Direction: PRO.
- Semantic: `PROVISIONAL PASS`.
- Why: the fragile glass is clearly recognizable and visibly immobilized by a fitted lower foam cavity plus protective lid foam; physical protection from impact/breakage is directly legible.
- Physical coherence: `PASS` at candidate level. The glass lies horizontally, stem/base/bowl are supported, and the case can plausibly close with compressible lid foam.
- Nearest neighbour: PRO clearly dominates CER because the visible function is reducing damage exposure, not reducing uncertainty.
- Independence vs `2723`: `PASS`; weather shielding vs transport/impact cushioning are different protection families.
- Confound: product/packaging aesthetic is mild; KlingAI watermark must be absent before freeze.
- Disposition: **KEEP / PRO-2 PROVISIONAL PASS pending clean asset + full-set audit**.

Rejected PRO attempts:
- `2781`: lock vs unlock ambiguous.
- `4642`: protected object unclear and foam unrealistic.
- `4644`: upright wine glass protruded above support and case could not plausibly close safely.

**PRO closed provisionally at 2/2 candidate families.**

### CON

Reserves:
- `2790` two mugs: relationship inferred, absence/warmth confounds.
- `2720` two glasses of water: neutral but no reciprocal connection.

Rejected families:
- empty adjacent seats;
- `3370` mannequins side by side facing canvas;
- `3372` mannequins apart in gallery.

**CON remains 0/2.**

### CER

Rejected families:
- `2722` eyeglasses on printed material: reading/vision/intellect, not certainty.
- organized shelf with labels: order/organization plus text confound.
- measuring vessels/level gauges: numbers/scales and MAS/numeracy confound.
- question mark / redacted document / foggy crossroads / old map per reconciliation audit.

**CER remains 0/2.**

### AUT

No candidate has passed.

Rejected/ambiguous families include open doors/gates, forked roads and vehicles because they collapse into OPP/EXP or introduce product/status cues.

**AUT remains 0/2.**

## Current-chat generator failure mode

The image generator in this long chat repeatedly returned multi-panel PrioLens moodboards instead of requested single 1:1 stimuli. Those boards are `GENERATOR_CONTEXT_FAILURE / NOT CANDIDATES`.

## Decision discipline

After every candidate review, update this ledger before moving on.

Do not call a direction complete unless it has two eligible, conceptually independent candidate families. A provisional candidate may occupy a working slot but still must survive cleanup and the full-set audit before stimulus freeze.
