# PrioLens project state

Status: ACTIVE RESEARCH / STANDALONE BASELINE RECOVERED / LOWER-LEVEL FAMILY MODEL ACTIVE
Updated: 2026-08-31
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## Read first

1. `docs/PRODUCT_ARCHITECTURE_INVARIANTS_v0.1.md`
2. `docs/ORIGINAL_PRIOLENS_BASELINE_RECOVERY_v0.1.md`
3. `docs/ORIGINAL_STIMULUS_EXACT_MAPPING_v0.1.md`
4. `docs/D1_D2_EVIDENCE_RECLASSIFICATION_v0.1.md`
5. `docs/GALLERY_SEMANTIC_BANK_v0.2.md`
6. `docs/GALLERY_SECOND_PASS_LOWER_LEVEL_v0.1.md`
7. this file

## Product boundary

PrioLens remains a short visual-choice experience:

```text
START
→ two standalone images
→ choose
→ ...
→ short session mirror
```

The fundamental stimulus unit is **one standalone image**. A trial juxtaposes two independently registered stimuli. It is not a 2Pair-style same-scene matched A/B construction.

Public constraints:
- no mandatory writing or per-choice explanation;
- no personality/diagnosis/hidden-self claim;
- `no_clear_choice` allowed;
- eventual target roughly 2–4 minutes / 12–18 meaningful choices.

## Original baseline recovered

Original v0.1 used 8 working directions (AUT, CER, EXP, MAS, CON, INF, PRO, OPP), 2 standalone exemplars per direction, 16 active stimuli and 28 direction-v-direction edges.

The exact S01–S16 ↔ beta asset mapping has been recovered byte-for-byte from `Gallery.zip` and `priolens_working_beta-4.html`. Canonical mapping: `docs/ORIGINAL_STIMULUS_EXACT_MAPPING_v0.1.md`.

Recovery is complete enough to stop archaeology.

## Critical combined interpretation of the last 10h

The standalone correction and the D1/D2 negative results both survive.

### Standalone correction says
- one image = one stimulus;
- trials are assembled later from independent images;
- do not force same-scene matched mates.

### D1/D2 says
The broad inference

`different visible mechanisms -> one stable broad direction -> safe direction score`

is **not supported enough to freeze**.

INF repeatedly collapsed toward steering/routing/causality/control.
MAS repeatedly collapsed toward precision/fit/refinement/skilled execution.

These were AI concept-review results, not human construct validation, but they are meaningful negative evidence and must not be erased merely because the product architecture was corrected.

Canonical interpretation: `docs/D1_D2_EVIDENCE_RECLASSIFICATION_v0.1.md`.

## Active semantic model after second Gallery pass

Do **not** organize new work primarily by the old eight labels.

Name each candidate first by what is concretely visible. Old directions are only legacy hypothesis tags.

Second full Gallery pass revised the family model:
- F1 Controlled execution
- F2 External state steering
- F3 Reciprocal coordination
- F4A Route continuation
- F4B Navigation / directional uncertainty
- F5A Active shielding
- F5B Securing / containment
- F6 Available resource / ready possibility
- F7 Explicit settled / configured state
- F8 Local configuration / local control

Important corrections:
- former F4 `route continuation / discovery` was too broad and is split into route continuation vs navigation/directional uncertainty;
- shielding is not automatically the same mechanism as securing/containment;
- F8 is restored from D1/D2 local-mechanism evidence and is **not AUT**.

Canonical second pass: `docs/GALLERY_SECOND_PASS_LOWER_LEVEL_v0.1.md`.

Examples:
- irrigation gate → external system steering/distribution; legacy tag INF;
- room light switch → wider environmental state change; legacy tag INF;
- S12 caliper → precision measurement/controlled execution; legacy tag MAS;
- S16 pottery → skilled shaping/controlled execution; legacy tag MAS;
- S11 workstation adjustment → local configuration/control; legacy tag AUT only as historical provenance, not as semantic identity.

Do not call these validated INF/MAS/AUT stimuli.

## Current family viability

- **F2 External state steering** — PROMISING
- **F6 Available resource / ready possibility** — PROMISING
- **F1 Controlled execution** — VIABLE BUT TROPE-NARROW
- **F4A Route continuation** — COHERENT LOCAL FAMILY, DO NOT OVER-ABSTRACT
- **F8 Local configuration/control** — EMERGING
- **F3 Reciprocal coordination** — UNDER-SUPPORTED
- **F5A Active shielding** — UNDER-SUPPORTED
- **F5B Securing/containment** — distinct mechanism, not yet unified
- **F7 Explicit settled/configured state** — UNDER-SUPPORTED
- **F4B Navigation/directional uncertainty** — distinct HOLD family

## Consequence for old broad directions

There is currently **no obligation to fill AUT, CER, PRO, etc. quotas** merely because the original model had eight directions.

The previous plan to generate `AUT-01` remains cancelled.

A new image should be generated only when:
1. a useful lower-level semantic family is missing a materially different exemplar;
2. the Gallery has been exhausted for that purpose;
3. the image can be defined by a visible action/state without relying on designer story.

If no coherent family relevant to an old direction emerges, the old direction may remain unsupported or be dropped later.

## Gallery status

`Gallery.zip` contains 223 files / 222 byte-unique images.

The Gallery has now been reviewed twice:
1. initial triage, historically direction-labelled;
2. lower-level semantic re-pass after D1/D2 reclassification.

The first direction-labelled triage (`GALLERY_CANDIDATE_BANK_PASS_v0.1.md`) is retained as historical work but is superseded for active interpretation by the lower-level semantic documents.

Second-pass findings include:
- no strong non-handcraft third exemplar for F1;
- no clean low-face-salience reciprocal-action exemplar for F3;
- no clean second active-shielding exemplar for F5A;
- blank canvas + tools is a useful F6 HOLD outside food/nature;
- knob/indicator panel is a useful F7/F8 HOLD but not a clean second KEEP;
- F4 should remain split rather than forced into one broad exploration family;
- F8 local configuration/control is worth retaining as an emerging lower-level mechanism.

## Solo research constraint

The user is working alone.

Current solo workflow:
1. ChatGPT + user curate and red-team the candidate bank;
2. independent AI can be used blind as an adversarial semantic/confound check;
3. AI agreement is not called validation;
4. user self-reading is only a sanity check because of author-intent contamination;
5. external human screening is deferred until a compact bank is worth testing.

Do not make recruiting 10–15 people an immediate blocker.

## Immediate next action

The Gallery is exhausted enough for current lower-level questions.

Do not generate broadly.

If creating new images, work one explicit lower-level gap at a time, in this priority order:
1. F8 Local configuration/control — one materially different non-workstation exemplar;
2. F3 Reciprocal coordination — one low-face-salience visible coordinated-action exemplar;
3. F7 Explicit settled/configured state — one text/symbol-light exemplar;
4. F5A Active shielding — one non-umbrella active-shielding exemplar;
5. F1 Controlled execution — one non-handcraft domain exemplar.

F2 and F6 do not need new images yet.

Before generating, define the visible mechanism and exclusion criteria. Do not start from AUT/INF/MAS labels.

## Guardrails

- Do not return to matched Preserve↔Refine product architecture.
- Do not erase D1/D2 negative evidence.
- Do not equate `KEEP` with direction validation or scoring permission.
- Do not fill an eight-direction quota by force.
- Do not merge lower-level mechanisms by semantic convenience.
- Do not restart long AI consensus loops as if AI were construct validation.

The current combined position is:

> **PrioLens is standalone-image-first. Broad directions remain hypotheses. Current work proceeds from visible lower-level mechanisms upward, with family boundaries allowed to split when the images do not support one abstraction.**

## AI Review Harness

Vercel harness exists and reaches AI Gateway. Paid execution remains deferred.
