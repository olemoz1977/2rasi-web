# PrioLens stimulus ledger v0.1

Status: LIVE DECISION LOG / NOT A STIMULUS FREEZE
Updated: 2026-08-30

## Purpose

Persistent source of truth for current stimulus decisions. A chat decision is not retained until recorded here.

Track for each candidate:

`source -> direction -> semantic status -> independence -> confounds -> disposition`

Rules:

- Do not reopen accepted/rejected candidates without new evidence.
- Do not generate more for a direction already at 2/2 unless full-set audit exposes a concrete problem.
- `PASS` = defensible design candidate, not validated construct evidence.
- `PROVISIONAL PASS` occupies a working slot but must survive cleanup + full-set audit.
- `RESERVE` does not count toward the 16.
- Procedural mockups and generated moodboards are never stimuli.

## Current slot ledger

| Direction | Slot 1 | Slot 2 | State |
|---|---|---|---|
| AUT | missing | missing | **0/2** |
| CER | missing | missing | **0/2** |
| EXP | `3098` forest road | `4649` opening unknown drawer contents | **2/2 provisional** |
| MAS | `4635` precision caliper | `4636` potter | **2/2 PASS** |
| CON | `4646` reciprocal dyadic conversation | `2624` small-group belonging | **2/2 provisional** |
| INF | routed consequence family: `4602` OR `4612` | `4641` domino chain reaction | **2/2 candidate coverage; slot 2 provisional** |
| PRO | `2723` wet umbrella | `4645` horizontal wine glass in foam case | **2/2 provisional** |
| OPP | `4637` productive greenhouse | `4638` prepared food table | **2/2 provisional** |

Strict candidate count: **12/16 occupied; 4 remain open.**

Open slots:

- CER: 2
- AUT: 2

## Current candidate decisions

### MAS

#### `4635` precision caliper / fine mechanical adjustment
- Semantic: `PASS`.
- Why: precision, measurement, fine adjustment and quality control are directly visible.
- Nearest neighbour: MAS > INF because skilled execution, not external consequence, is central.
- Confound: technical/mechanical domain.
- Disposition: **KEEP / MAS-1**.

#### `4636` potter forms symmetrical clay vessel
- Semantic: `PASS`.
- Why: practiced hand control, refinement, symmetry and skill are visible.
- Independence vs `4635`: `PASS`.
- Confound: craft/tactile domain.
- Disposition: **KEEP / MAS-2**.

**MAS closed at 2/2.**

### OPP

#### `4637` open greenhouse with visible productive value
- Semantic: `PROVISIONAL PASS`.
- Why: concrete valuable possibility is visibly available and accessible now.
- Nearest neighbour: OPP > AUT/EXP because visible value, not freedom/discovery, is central.
- Confound: nature/food positive valence.
- Disposition: **KEEP / OPP-1 provisional**.

#### `4638` prepared food table with one empty plate
- Semantic: `PROVISIONAL PASS`.
- Why: prepared value is visibly available for immediate use.
- Nearest neighbour: weak residual CON reading but no people/celebration/multiple place settings.
- Independence vs `4637`: provisional pass; different scenes but same positive resource/food domain.
- Confound: appetite/reward.
- Disposition: **KEEP / OPP-2 provisional**.

**OPP closed provisionally.**

### INF

#### `4602` hand redirects marble flow through physical gate
- Semantic: `PASS`.
- Why: one visible action changes the outcome of a wider external physical system.
- Confound: mechanism/control affinity.
- Disposition: **KEEP as routed-consequence family option**.

#### `4612` irrigation gate distributes water toward several plant beds
- Semantic: `PASS`.
- Independence vs `4602`: `FAIL`; same routed-flow family.
- Disposition: **KEEP only as alternative to `4602`; never pair 4602 + 4612**.

#### `4641` fingertip initiates domino chain reaction
- Semantic: `PASS`.
- Physical causality: `PASS`; first tile leans away from finger, contacts next tile, downstream propagation is visible.
- Nearest neighbours: MAS and AUT materially weaker.
- Independence vs routed-flow family: `PASS`.
- Confound: wooden game-piece salience acceptable; KlingAI watermark must be absent before freeze.
- Disposition: **KEEP / INF-2 PROVISIONAL PASS**.

Rejected INF: `4599` hidden consequence; `4614` procedural only; `4615` incoherent causality; `4616` finger read as holding/stopping.

**INF closed provisionally at 2/2 candidate families.**

### EXP

#### `3098` single forest road disappearing deeper into trees
- Semantic: `PROVISIONAL PASS`.
- Why: one path into partially unknown space supports approach-to-unknown without a choice fork.
- Nearest neighbour: EXP > AUT because no choice fork; OPP weaker because no visible gain/reward.
- Confound: nature/travel aesthetic.
- Disposition: **KEEP / EXP-1 provisional**.

#### `4649` hand opens drawer revealing previously unseen neutral contents
- Semantic: `PROVISIONAL PASS`.
- Why: the visible action reveals previously unseen, non-rewarding contents and reads as finding out what is inside rather than choosing among alternatives or accessing obvious value.
- Nearest neighbours: EXP > OPP because no visible gain/reward; EXP > AUT because no meaningful choice freedom is shown; CER is weaker because the image depicts approaching/revealing unknown content rather than a stable known state.
- Independence vs `3098`: `PASS`; spatial exploration into an unknown path vs object/content discovery are different exploration families.
- Confound: warm wood/product aesthetic mild; KlingAI watermark must be absent before freeze.
- Disposition: **KEEP / EXP-2 PROVISIONAL PASS pending clean asset + full-set audit**.

**EXP closed provisionally at 2/2 candidate families.**

### PRO

#### `2723` wet black umbrella by doorway
- Semantic: `PROVISIONAL PASS`.
- Why: protective function against visible rain/wetness is directly legible.
- Nearest neighbour: PRO > CER/AUT/OPP.
- Confound: dark/rain negative valence.
- Disposition: **KEEP / PRO-1 provisional**.

#### `4645` horizontal fragile wine glass in fitted foam case
- Semantic: `PROVISIONAL PASS`.
- Why: fragile glass is recognizable and visibly immobilized by fitted lower foam plus protective lid foam.
- Physical coherence: `PASS` at candidate level.
- Nearest neighbour: PRO > CER because function is reducing damage exposure, not uncertainty.
- Independence vs `2723`: `PASS`; weather shielding vs transport/impact cushioning.
- Confound: mild product/packaging aesthetic; KlingAI watermark must be absent before freeze.
- Disposition: **KEEP / PRO-2 provisional**.

Rejected PRO: `2781` lock/unlock ambiguity; `4642` unclear object/unrealistic foam; `4644` case could not plausibly close safely.

**PRO closed provisionally.**

### CON

#### `4646` two adults in reciprocal face-to-face conversation
- Semantic: `PROVISIONAL PASS`.
- Why: mutual eye contact, reciprocal body orientation and equal engagement make interpersonal connection directly visible.
- Nearest neighbours: INF weak because neither directs the other; PRO absent.
- Confound: opposite-sex pairing + warm smiles may add mild romantic/intimacy valence.
- Disposition: **KEEP / CON-1 provisional**.

#### `2624` three adults around a table in warm reciprocal social interaction
- Semantic: `PROVISIONAL PASS`.
- Why: all three are visibly oriented toward the same small social group and the scene reads as shared belonging/interaction rather than mere co-presence.
- Independence vs `4646`: `PASS`; dyadic face-to-face reciprocity vs small-group belonging are different connection families.
- Nearest neighbour: INF is weaker because no leader, presentation or directional control is visible; MAS absent.
- Confounds: warm pendant light, dark ambience and the forward-facing smiling woman create positive/social salience and mild focal asymmetry. Must survive full-set valence/salience audit.
- Disposition: **KEEP / CON-2 PROVISIONAL PASS**.

Other CON candidates:
- `4647` two adults carrying one box together: `RESERVE`; reads as couple/moving-household and repeats opposite-sex smiling social family.
- `4648` three adults standing in bright room: `RESERVE`; center person + blazer creates status/business/INF leakage and stock-social aesthetic.
- `2625` four adults seated around a table: `FAIL/RESERVE`; meeting/work interpretation and one focal serious participant dominate belonging.
- `2790` two mugs: `RESERVE`; relationship inferred, warmth/absence confounds.
- `2720` two water glasses: `RESERVE`; neutral but no reciprocal connection.
- empty seats, `3370`, `3372`: `FAIL`.

**CON closed provisionally at 2/2 candidate families.**

### CER

Rejected families:
- `2722` eyeglasses on printed material: reading/vision/intellect, not certainty.
- organized shelf with labels: order/organization + text confound.
- measuring vessels/level gauges: scales/numbers + MAS/numeracy confound.
- question mark / redacted document / foggy crossroads / old map: previously rejected in reconciliation audit.

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
