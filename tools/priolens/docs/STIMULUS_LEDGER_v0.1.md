# PrioLens stimulus ledger v0.1

Status: LIVE DECISION LOG / NOT A STIMULUS FREEZE
Updated: 2026-08-29

## Purpose

This file is the persistent ledger for stimulus decisions made during visual review and generation. A decision made in chat is not considered retained until it is recorded here.

For every candidate, record:

`source -> intended direction -> semantic status -> independence status -> visual/confound status -> disposition`

Rules:

- Do not re-open an accepted/rejected candidate without new evidence.
- Do not generate more candidates for a direction already at 2/2 unless the full-set audit exposes a concrete problem.
- `PASS` means defensible design candidate, not validated construct evidence.
- `PROVISIONAL PASS` remains eligible but must survive the full-set confound audit.
- `RESERVE` is not counted toward the 16.
- Procedural mockups are never stimuli.

## Current slot ledger

| Direction | Slot 1 | Slot 2 | Current state |
|---|---|---|---|
| AUT | missing | missing | **0/2** |
| CER | missing | missing | **0/2** |
| EXP | `3098` forest road | missing | **1/2 provisional** |
| MAS | `4635` precision caliper | `4636` potter | **2/2 PASS** |
| CON | missing | missing | **0/2**; `2790`, `2720` reserves |
| INF | routed physical consequence family: `4602` OR `4612` | missing independent family | **1/2** |
| PRO | `2723` wet umbrella | missing | **1/2 provisional** |
| OPP | `4637` productive greenhouse | `4638` prepared food table | **2/2 provisional** |

Strict count: **7/16 slots currently occupied by PASS or PROVISIONAL PASS candidates; 9 slots remain open.**

## Candidate decisions

### MAS

#### `4635` — precision caliper / fine mechanical adjustment
- Direction: MAS.
- Semantic status: `PASS`.
- Why: precision, measurement, fine adjustment and quality control are directly visible.
- Nearest-neighbour challenge: INF does not dominate because the visible emphasis is skilled execution, not an external system outcome.
- Visual/confound status: technical-domain flag only.
- Disposition: **KEEP / MAS-1**.
- Note: same accepted concept family as the earlier `4604` reference in `GENERATED_CANDIDATE_AUDIT_v0.1.md`; use the currently visible/re-uploaded version for ongoing review unless hashes later prove otherwise.

#### `4636` — potter forms symmetrical clay vessel
- Direction: MAS.
- Semantic status: `PASS`.
- Why: practiced hand control, refinement, symmetry and skill are visible in-frame.
- Independence vs `4635`: `PASS`.
- Visual/confound status: craft/tactile-domain flag.
- Disposition: **KEEP / MAS-2**.
- Note: same accepted concept family as earlier `4605`.

**MAS generation is closed. Do not generate more MAS unless full-set audit later fails one of these.**

### OPP

#### `4637` — open greenhouse with visible productive value
- Direction: OPP.
- Semantic status: `PROVISIONAL PASS`.
- Why: a concrete valuable possibility is visibly available and accessible now.
- Nearest-neighbour challenge: stronger OPP than AUT/EXP because visible value, not freedom or discovery, is the central cue.
- Visual/confound status: nature/food positive-valence flag.
- Disposition: **KEEP / OPP-1 provisional**.
- Note: same accepted concept family as earlier `4607`.

#### `4638` — prepared food table with one empty plate
- Direction: OPP.
- Semantic status: `PROVISIONAL PASS`.
- Why: prepared value is visibly available for immediate use.
- Nearest-neighbour challenge: weak residual CON reading possible, but no people/celebration/multiple place settings.
- Independence vs `4637`: `PROVISIONAL PASS`; scenes differ, but both remain positive resource/food domains.
- Visual/confound status: appetite/reward flag.
- Disposition: **KEEP / OPP-2 provisional**.
- Note: same accepted concept family as earlier `4611`.

**OPP generation is closed for now. Re-open only if cross-set valence/domain audit rejects one.**

### INF

#### `4602` — hand redirects marble flow through physical gate
- Direction: INF.
- Semantic status: `PASS`.
- Why: one visible action changes the outcome of a wider external physical system.
- Visual/confound status: mechanism/control affinity.
- Disposition: **KEEP as routed-flow family option**.

#### `4612` — irrigation gate distributes water toward several young-plant beds
- Direction: INF.
- Semantic status: `PASS`.
- Why: one visible action changes a wider external system and the consequence is visible in-frame.
- Independence vs `4602`: `FAIL`.
- Reason: both instantiate `hand + gate/lever + routed physical flow + downstream consequence`.
- Disposition: **KEEP as alternative to `4602`, never pair the two as INF-1/INF-2**.

#### `4599` — generic control panel
- Direction attempted: INF.
- Semantic status: `AMBIGUOUS / FAIL`.
- Problem: control affordance is visible, but external consequence is not.
- Disposition: **REJECT**.

#### `4614` — Python domino sketch
- Status: `PROCEDURAL_REFERENCE_ONLY / NOT A STIMULUS`.
- Disposition: **NEVER COUNT / NEVER FREEZE**.

#### `4615` — branching wooden domino chain
- Direction attempted: INF.
- Semantic status: `PASS` at concept level.
- Independence vs routed-flow family: `PASS`.
- Visual/confound status: neutral.
- Fatal issue: `CAUSAL_COHERENCE_FAIL`; first standing block is not visibly causing the already-falling chain.
- Disposition: **CONCEPT KEEP / IMAGE REJECT**.

#### subsequent domino correction (`4616` in session shorthand)
- Direction attempted: INF.
- Semantic concept: still valid.
- Fatal issue: finger reads as holding/stopping the first block rather than clearly pushing it.
- Disposition: **IMAGE REJECT; domino family remains a viable INF-2 concept only if physical causality is rendered unambiguously**.

**INF remains 1/2. Need one conceptually independent photographic family.**

### EXP

#### `3098` — single forest road disappearing deeper into trees
- Direction: EXP.
- Semantic status: `PROVISIONAL PASS`.
- Why: one path into partially unknown space supports exploration/approach-to-unknown without a visible choice fork.
- Nearest-neighbour challenge: cleaner than forked-path AUT; weaker OPP because no visible gain/reward is presented.
- Visual/confound status: nature/travel-aesthetic flag.
- Disposition: **KEEP / EXP-1 provisional**.

**EXP remains 1/2.**

### PRO

#### `2723` — wet black umbrella by doorway
- Direction: PRO.
- Semantic status: `PROVISIONAL PASS`.
- Why: the object's protective function against visible rain/wetness is directly legible.
- Nearest-neighbour challenge: clearer PRO than CER/AUT/OPP.
- Visual/confound status: dark/rain negative-valence flag.
- Disposition: **KEEP / PRO-1 provisional**.

#### `2781` — key inserted in door lock
- Direction attempted: PRO.
- Semantic status: `AMBIGUOUS`.
- Problem: image does not show whether the door is being locked or unlocked; can mean protection or access/opening.
- Disposition: **RESERVE only, not counted**.

**PRO remains 1/2.**

### CON

#### `2790` — two mugs, one steaming
- Direction attempted: CON.
- Semantic status: `AMBIGUOUS`.
- Problem: relationship is inferred through an absent second person; can read as waiting/absence/loneliness. Warm coffee/sun adds positive valence.
- Disposition: **RESERVE, not counted**.

#### `2720` — two glasses of water
- Direction attempted: CON.
- Semantic status: `AMBIGUOUS`.
- Strength: more neutral than mugs.
- Problem: two objects alone do not establish mutual contact/belonging.
- Disposition: **RESERVE, not counted**.

#### two adjacent empty seats
- Direction attempted: CON.
- Semantic status: `FAIL`.
- Problem: absence/separation dominates connection.
- Disposition: **REJECT**.

#### `3370` — two mannequin figures side by side facing a blank canvas
- Direction attempted: CON.
- Semantic status: `FAIL`.
- Problem: co-presence is visible, but mutual contact/reciprocity/belonging is not; attention is directed toward the canvas rather than toward each other.
- Visual/confound status: art-gallery/mannequin artificiality and strong architectural aesthetics.
- Disposition: **REJECT**.

#### `3372` — two mannequin figures several feet apart in museum gallery
- Direction attempted: CON.
- Semantic status: `FAIL`.
- Problem: separation and exhibition context dominate; no reciprocal interaction or clear relationship cue.
- Disposition: **REJECT**.

**CON remains 0/2.**

### CER

#### `2722` — eyeglasses on printed material
- Direction attempted: CER.
- Semantic status: `FAIL`.
- Problem: reads as reading/vision/intellect rather than clarity/predictability/knowing what applies.
- Disposition: **REJECT**.

#### generated organized shelf with labeled folders
- Direction attempted: CER.
- Semantic status: `FAIL`.
- Problems: organization/order rather than certainty; text labels create a language/reading confound.
- Disposition: **REJECT**.

#### generated measuring vessels / level gauges
- Direction attempted: CER.
- Semantic status: `FAIL` for base set.
- Problems: repeated text/numbers/scales; measurement drifts toward MAS and creates reading/numeracy confounds.
- Disposition: **REJECT this entire generation family**.

**CER remains 0/2.**

### AUT

No candidate has passed.

Rejected/ambiguous families include open doors/gates, forked roads and vehicles because they collapse into OPP and/or EXP or introduce product/status cues.

**AUT remains 0/2.**

## Latest targeted File Library sweep

A targeted search for additional CON/CER/AUT/PRO/EXP/INF assets did not produce any new candidate that survives the frozen semantic contract.

Notable non-additions:

- open gate / garden / playground scenes remain OPP/EXP/AUT ambiguous rather than clean AUT;
- clear water gauges remain CER-attractive only through scale/numeracy cues and therefore remain rejected;
- first-aid / alarm / emergency assets remain PRO-dominant or medical/safety-confounded and cannot serve as clean INF;
- two-person mannequin/gallery scenes fail CON because reciprocal interaction is absent.

## Current-chat generator failure mode

During the latest generation attempts, the image generator repeatedly returned **multi-panel PrioLens moodboards/infographics instead of the requested single 1:1 standalone stimulus**, even when the immediate instruction specified a single photorealistic scene.

Disposition rule:

- these generated boards are `GENERATOR_CONTEXT_FAILURE / NOT CANDIDATES`;
- no auto-assigned labels, IDs, statuses or scene suggestions printed inside those boards are project decisions;
- do not count or audit those board panels as individual stimuli unless a panel is independently regenerated/exported as a standalone asset and reviewed under this ledger.

## Open slots in priority terms

Exactly 9 slots remain:

- INF: 1
- EXP: 1
- PRO: 1
- CON: 2
- CER: 2
- AUT: 2

## Decision discipline from now on

After every candidate review, update this ledger before moving to another concept. The chat is a working surface; this file is the persistent decision record.

Do not say a direction is complete unless this ledger shows 2 eligible, conceptually independent candidates for it.
