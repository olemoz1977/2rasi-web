# PrioLens project state

Status: ACTIVE RESEARCH / FULL GALLERY IMPULSE AUDIT COMPLETE / CER CONSTRUCT HOLD
Updated: 2026-08-31
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## Read first

1. `docs/PRODUCT_ARCHITECTURE_INVARIANTS_v0.1.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/STIMULUS_IMPULSE_AUDIT_v0.1.md`
4. `docs/GALLERY_IMPULSE_AUDIT_v0.1.csv`
5. `docs/GALLERY_IMPULSE_CURATION_v0.1.md`
6. `docs/RECENT_GENERATED_IMPULSE_AUDIT_v0.1.md`
7. `docs/CANDIDATE_BANK_MATRIX_v0.3.md`
8. `docs/CER_VISUAL_VIABILITY_CHECK_v0.1.md`
9. `docs/STIMULUS_SELECTION_RULES_v0.2.md`
10. `docs/GALLERY_CONFLICTLAB_V04_PROVENANCE_NOTE_v0.1.md`
11. `docs/D1_D2_EVIDENCE_RECLASSIFICATION_v0.1.md`
12. `docs/ORIGINAL_STIMULUS_EXACT_MAPPING_v0.1.md`
13. this file

## Product boundary

PrioLens is a short visual-choice experience.

Canonical phrase:
> **For Fun with Wisdom**

Public flow:

```text
START
→ two standalone images
→ choose
→ two standalone images
→ choose
→ ...
→ short session mirror
```

Core constraints:
- one image = one standalone stimulus;
- two images together = comparison event, not 2Pair-style matched A/B;
- no mandatory writing or per-choice explanation;
- no personality/diagnosis/hidden-self claim;
- `no_clear_choice` allowed;
- target roughly 2–4 minutes / 12–18 meaningful choices.

## Original baseline recovered

Original v0.1 used 8 working directions: AUT, CER, EXP, MAS, CON, INF, PRO, OPP.

It used 2 standalone exemplars per direction, 16 active stimuli and 28 direction-v-direction edges.

The exact S01–S16 ↔ beta asset mapping has been recovered byte-for-byte from `Gallery.zip` and `priolens_working_beta-4.html`.

Recovery is complete. Do not restart archaeology or ask the user to re-upload old project material.

## Active review rule

The active order is impulse-first:

> **image → what it evokes → possible direction → KEEP / HOLD / DROP / REASSIGN**

Do not start from the intended historical label.

This applies equally to historical PASS, HOLD, CANDIDATE and DROP images.

A DROP may return if it failed only because it was assigned to the wrong direction. A PASS may be removed if its first impulse does not support the intended construct.

Canonical rule: `docs/STIMULUS_IMPULSE_AUDIT_v0.1.md`.

## Full Gallery audit complete

`Gallery.zip` contains 223 files / 222 byte-unique images.

Every Gallery image has now received a plain-language first-impulse description in:

`docs/GALLERY_IMPULSE_AUDIT_v0.1.csv`

This pass was intentionally independent of old PrioLens direction labels and old ConflictLab v0.4 labels.

After second-stage curation:
- 40 Gallery images remain KEEP/HOLD for the current eight-direction question;
- 183 are DROP from the compact candidate bank;
- DROP here means not useful enough for the present PrioLens bank, not visually bad.

Canonical curation: `docs/GALLERY_IMPULSE_CURATION_v0.1.md`.

Do not perform another full Gallery pass unless a genuinely new question requires it.

## Current candidate bank after impulse audit

Active matrix: `docs/CANDIDATE_BANK_MATRIX_v0.3.md`.

### AUT
Strongest current candidates:
- `S05` choosing the appropriate tool;
- backpack strap adjustment;
- physical audio volume adjustment.

First common working impulse:
> **I choose / I set this for myself.**

Bicycle saddle and car headrest remain HOLD. Workstation scene is DROP because computer work dominates.

### CER
CER is now **CONSTRUCT HOLD**, not an image-production gap.

Working intended impulse:
> **Trauka į būseną, kurioje aišku, kas vyksta ar ko tikėtis.**

Existing candidates fail this first-impulse test:
- signed/confirmed document → commitment/confirmation;
- assigned places → order/structure;
- green traffic light → permission/go; remains only a weak HOLD;
- `S10` → visible order/containment;
- `S06` → completion;
- water-to-mark → precision/control.

Current conclusion: there is no strong standalone CER image yet. The problem may be structural because certainty/predictability is partly temporal and inferential, while a single static image tends to encode proxies such as order, completion, precision, safety or permission.

Canonical checkpoint: `docs/CER_VISUAL_VIABILITY_CHECK_v0.1.md`.

Do not generate more CER scenes until the construct itself is narrowed, replaced or explicitly retained despite this representational problem.

### EXP
Current strong candidates:
- `S09` reveal/discovery;
- peeking past an obstruction;
- uncertain fork/path;
- `S01` forward into unseen route.

Enough diversity for now. Route/travel remains a confound, but EXP is no longer route-only.

### MAS
Current strong candidates:
- `S12` precision measurement;
- `S16` skilled shaping;
- precise frame adjustment.

Water-to-mark is REASSIGN/HOLD here, not CER. Bank remains manual-skill heavy.

### CON
Current strong candidates:
- `S03` dyadic connection;
- reciprocal joint handling/exchange.

Group conversation and shared-moment scenes remain HOLD. Faces/warmth remain a confound.

### INF
Current strong candidates:
- irrigation gate distributing water across a wider system;
- local switch changing wider room state.

`S02` domino and `S04` routing remain HOLD. Enough to stop generating for now.

### PRO
Current strong candidates:
- umbrella shielding;
- gate latch/access security;
- fitted protective case;
- robust enclosure.

Important correction: do not prematurely split shielding vs securing vs safeguarding into separate product constructs. Keep them as candidate expressions of broad Protection until evidence says whether they cohere.

### OPP
Current strong candidates:
- prepared useful materials;
- ripe harvest + basket;
- blank canvas + tools.

Seedling, gift, food and greenhouse remain HOLD. This direction currently has good scenario diversity, though reward/nature confounds remain.

## What survives from D1/D2

D1/D2 negative evidence is retained.

The inference

`different visible mechanisms → one stable broad direction → safe direction score`

is not established enough to freeze.

Current broad directions are therefore design hypotheses for bank construction, not validated scores. Later human evidence must decide whether materially different exemplars actually cohere.

## Gallery provenance

Part of Gallery was influenced by ConflictLab v0.4 axes (`aw`, `cs`, `cr`) and visible-cue rules.

This explains some image ancestry but is not the PrioLens scoring model.

Do not use old ConflictLab labels to rescue or force a current mapping.

## Solo workflow

The user is working alone.

Current workflow:
1. curate the compact bank now that first impulses are recorded;
2. use blind AI only for obvious ambiguity/confound checks when useful;
3. do not require external participants yet;
4. do not generate broadly;
5. generate only for a real remaining gap.

## Immediate next action

A product-level decision is now required on CER before further image generation:

1. retain the current certainty / clarity / predictability hypothesis despite weak direct visual representability;
2. narrow it to a more visually direct impulse such as stability / knownness / clear permission / structure;
3. replace/drop CER and allow the final PrioLens model to contain fewer than eight directions.

Do not resolve this by semantic rescue or by generating more proxy images.

After that decision, resume compact-bank construction using the same impulse-first rule.

## Guardrails

- do not return to matched Preserve↔Refine architecture;
- do not erase D1/D2 negative evidence;
- do not equate a clear image with validated direction scoring;
- do not preserve old PASS/DROP labels by inertia;
- do not assign direction before writing the image impulse;
- do not fill quotas with weak or duplicate renders;
- do not restart long AI consensus loops;
- do not over-sterilize images until they become artificial;
- do not treat ConflictLab v0.4 axes as the current PrioLens scoring model;
- keep the public experience aligned with **For Fun with Wisdom**.

## AI Review Harness

Vercel harness exists and reaches AI Gateway. Paid execution remains deferred.
