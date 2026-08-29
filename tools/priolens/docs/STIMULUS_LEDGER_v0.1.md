# PrioLens stimulus ledger v0.1

Status: LIVE DECISION LOG / NOT A STIMULUS FREEZE
Updated: 2026-08-30

## Rules

- A chat decision is not durable until recorded here.
- `PASS` = defensible design candidate, not validated construct evidence.
- `PROVISIONAL PASS` occupies a working slot but must survive full-set audit and cleanup.
- `RESERVE` does not count toward the 16.
- Do not reopen a closed direction unless full-set audit exposes a concrete problem.
- Two exemplars per direction must be conceptually independent.
- Semantic fit never overrides visual-confound risk.

## Current slot ledger

| Direction | Slot 1 | Slot 2 | State |
|---|---|---|---|
| AUT | `4655` three equivalent bottle openers / method choice | `4656` user-configured workspace | **2/2 provisional** |
| CER | `4650` transparent container with visible contents | `4657` transparent single-exit cup dispenser | **2/2 provisional** |
| EXP | `3098` forest road into unknown | `4649` opening unknown drawer contents | **2/2 provisional** |
| MAS | `4635` precision caliper | `4636` potter shaping vessel | **2/2 PASS** |
| CON | `4646` reciprocal dyadic conversation | `2624` small-group belonging | **2/2 provisional** |
| INF | `4602` routed marble consequence family | `4641` domino chain reaction | **2/2; slot 2 provisional** |
| PRO | `2723` wet umbrella | `4645` fragile wine glass in fitted foam case | **2/2 provisional** |
| OPP | `4637` productive greenhouse | `4638` prepared food table | **2/2 provisional** |

Strict candidate coverage: **16/16 occupied.**

This is candidate coverage only. No asset is frozen yet.

## Current candidate decisions

### AUT

#### `4655` — equivalent bottle openers / method choice
- Semantic: `PROVISIONAL PASS`.
- Why: several visibly equivalent means are available for the same familiar action and the hand is free to choose the method.
- Nearest neighbours: AUT > MAS because the scene is about method choice rather than skill; AUT > OPP because no meaningful gain/opportunity differentiates the options; AUT > EXP because nothing unknown is being discovered.
- Independence vs `4656`: `PASS`; method selection vs environment configuration.
- Visual issue: bottle/cap logic is imperfect and must be corrected or safely normalized before freeze; do not rely on a crop that removes the same-task cue.
- Disposition: **KEEP / AUT-1 PROVISIONAL**.

#### `4656` — user configures own workstation
- Semantic: `PROVISIONAL PASS`.
- Why: the user visibly determines the configuration of their own working environment without an imposed correct arrangement.
- Nearest neighbours: AUT > MAS because self-direction/configuration is central, not demonstrated competence; INF weak because no external/shared outcome is being shaped.
- Independence vs `4655`: `PASS`.
- Confound: technology/workplace complexity and large monitor-arm salience.
- Disposition: **KEEP / AUT-2 PROVISIONAL**.

**AUT candidate generation closed.**

### CER

#### `4650` — transparent container with fully visible neutral contents
- Semantic: `PROVISIONAL PASS`.
- Why: what is present is directly visible without opening, searching or guessing.
- Nearest neighbours: CER > EXP because no unknown content is approached; CER > PRO because container is not protecting from harm; CER > OPP because contents are neutral/non-rewarding.
- Independence vs `4657`: `PASS`; known present state vs predictable next state.
- Confound: storage/organization reading.
- Disposition: **KEEP / CER-1 PROVISIONAL**.

#### `4657` — transparent single-exit cup dispenser
- Semantic: `PROVISIONAL PASS`.
- Why: a familiar physical stack plus one exit makes the next available item/state visible and predictable.
- Nearest neighbours: CER currently stronger than MAS/PRO; OPP remains a challenge because the protruding cup is also an available resource.
- Independence vs `4650`: `PASS`.
- Confound: dispenser/storage/order reading; mild OPP availability leakage.
- Disposition: **KEEP / CER-2 PROVISIONAL pending full-set semantic challenge**.

Rejected CER families include: eyeglasses/reading (`2722`), labeled organization shelf, scales/gauges, question-mark/redacted-document/foggy-crossroads/map, rainy-window waiting (`2621`), inactive phone (`2620`), physically incoherent disc dispensers (`4651`,`4652`), jigsaw fit (`4653`), hourglass/time-flow (`4654`,`3111`,`3112`).

**CER candidate generation closed; full-set audit may still reopen CER-2.**

### EXP

#### `3098` — single forest road disappearing deeper into trees
- Semantic: `PROVISIONAL PASS`.
- Why: one route enters partially unknown space without presenting a choice fork or visible reward.
- Independence vs `4649`: `PASS`; spatial exploration vs content discovery.
- Confound: nature/travel aesthetic.
- Disposition: **KEEP / EXP-1 PROVISIONAL**.

#### `4649` — hand opens drawer revealing previously unseen neutral contents
- Semantic: `PROVISIONAL PASS`.
- Why: the scene shows discovery of previously unseen, non-rewarding contents rather than choice or gain.
- Independence vs `3098`: `PASS`.
- Confound: warm wood/product aesthetic; KlingAI watermark must be absent before freeze.
- Disposition: **KEEP / EXP-2 PROVISIONAL**.

**EXP candidate generation closed.**

### MAS

#### `4635` — precision caliper / fine mechanical adjustment
- Semantic: `PASS`.
- Why: precision, measurement, fine adjustment and quality control are directly visible.
- Independence vs `4636`: `PASS`.
- Confound: technical/mechanical domain.
- Disposition: **KEEP / MAS-1**.

#### `4636` — potter forms symmetrical clay vessel
- Semantic: `PASS`.
- Why: practiced hand control, refinement and skill are directly visible.
- Independence vs `4635`: `PASS`.
- Confound: craft/tactile domain.
- Disposition: **KEEP / MAS-2**.

**MAS closed.**

### CON

#### `4646` — reciprocal face-to-face conversation
- Semantic: `PROVISIONAL PASS`.
- Why: mutual eye contact, reciprocal orientation and equal engagement visibly carry interpersonal connection.
- Independence vs `2624`: `PASS`; dyadic reciprocity vs small-group belonging.
- Confound: opposite-sex pairing + warm smiles may create romantic/intimacy valence; KlingAI watermark must be absent.
- Disposition: **KEEP / CON-1 PROVISIONAL**.

#### `2624` — three adults around table in warm reciprocal social interaction
- Semantic: `PROVISIONAL PASS`.
- Why: group orientation and reciprocal interaction visibly support belonging rather than mere co-presence.
- Independence vs `4646`: `PASS`.
- Confounds: portrait source format, warm/dark ambience, focal smiling woman, human-face/social salience.
- Disposition: **KEEP / CON-2 PROVISIONAL pending square-asset normalization and full-set salience audit**.

Other CON candidates: `4647` reserve (couple/moving-household), `4648` reserve (central/status/business leakage), `2625` fail/reserve (meeting interpretation), `2790`/`2720` reserve only.

**CON candidate generation closed.**

### INF

#### `4602` — hand redirects marble flow through physical gate
- Semantic: `PASS`.
- Why: one visible action changes the outcome of a wider external physical system.
- Confound: technical/mechanical affinity with MAS-1.
- Disposition: **CURRENTLY SELECTED / INF-1**, preferred over `4612` for full-set audit because it avoids additional nature/food-domain overlap.

#### `4612` — irrigation gate
- Semantic: `PASS`, but same family as `4602`.
- Disposition: **ALTERNATE ONLY; never pair with 4602**.

#### `4641` — fingertip initiates domino chain reaction
- Semantic: `PASS`.
- Physical causality: `PASS` compared with earlier 4615/4616 attempts.
- Independence vs routed-flow family: `PASS`.
- Confound: wooden game-piece salience; KlingAI watermark must be absent.
- Disposition: **KEEP / INF-2 PROVISIONAL**.

**INF candidate generation closed.**

### PRO

#### `2723` — wet black umbrella by doorway
- Semantic: `PROVISIONAL PASS`.
- Why: protection against rain/wetness is directly legible.
- Independence vs `4645`: `PASS`; weather shielding vs impact cushioning.
- Confounds: portrait source format, dark/rain negative valence.
- Disposition: **KEEP / PRO-1 PROVISIONAL pending square normalization**.

#### `4645` — fragile wine glass in fitted foam case
- Semantic: `PROVISIONAL PASS`.
- Why: fragile object is visibly immobilized and protected from impact/breakage.
- Independence vs `2723`: `PASS`.
- Confound: mild product/packaging aesthetic; KlingAI watermark must be absent.
- Disposition: **KEEP / PRO-2 PROVISIONAL**.

Rejected PRO: `2781` lock/unlock ambiguity; `4642` unclear object/unrealistic foam; `4644` physically incoherent support.

**PRO candidate generation closed.**

### OPP

#### `4637` — open productive greenhouse
- Semantic: `PROVISIONAL PASS`.
- Why: a concrete valuable possibility is visibly available and accessible.
- Confound: nature/food positive valence.
- Disposition: **KEEP / OPP-1 PROVISIONAL**.

#### `4638` — prepared food table with one empty plate
- Semantic: `PROVISIONAL PASS`.
- Why: prepared value is visibly available for immediate use.
- Independence vs `4637`: scene-level independence is acceptable, but both remain food/resource-positive domains.
- Confounds: appetite/reward; residual CON possibility.
- Disposition: **KEEP / OPP-2 PROVISIONAL pending full-set domain/valence audit**.

**OPP candidate generation closed provisionally.**

## Full-set stage

All 16 working slots are now occupied. Next required step is the full-set audit across:

1. nearest-neighbour semantic leakage;
2. within-direction independence;
3. valence/reward/threat;
4. salience and human-face advantage;
5. luminance/contrast;
6. visual complexity;
7. style/domain overlap;
8. square-format/visual-occupancy consistency;
9. watermark/cleanup feasibility.

No stimulus may be hash-frozen until that audit is complete.
