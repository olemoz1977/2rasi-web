# PrioLens project state

Status: ACTIVE RESEARCH / STANDALONE BASELINE RECOVERED / BROAD DIRECTIONS UNPROVEN
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
6. this file

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

## Active semantic model

Do **not** organize new work primarily by the old eight labels.

Name each candidate first by what is concretely visible. Old directions are only legacy hypothesis tags.

Current lower-level families from the Gallery pass:
- F1 Controlled execution
- F2 External state steering
- F3 Reciprocal coordination
- F4 Route continuation / discovery
- F5 Shielding
- F6 Available resource
- F7 Explicit settled state

Canonical active bank: `docs/GALLERY_SEMANTIC_BANK_v0.2.md`.

Examples:
- irrigation gate → external system steering/distribution; legacy tag INF;
- room light switch → wider environmental state change; legacy tag INF;
- S12 caliper → precision measurement/controlled execution; legacy tag MAS;
- S16 pottery → skilled shaping/controlled execution; legacy tag MAS.

Do not call those images validated INF or MAS stimuli.

## Consequence for AUT and other gaps

There is currently **no obligation to fill AUT, CER, PRO, etc. quotas** merely because the original model had eight directions.

The previous plan to immediately generate `AUT-01` is cancelled.

A new image should be generated only when:
1. a useful lower-level semantic family is missing a materially different exemplar;
2. the Gallery has been exhausted for that purpose;
3. the image can be defined by a visible action/state without relying on designer story.

If no coherent family relevant to an old direction emerges, the old direction may remain unsupported or be dropped later.

## Gallery status

`Gallery.zip` contains 223 files / 222 byte-unique images. The first direction-labelled triage (`GALLERY_CANDIDATE_BANK_PASS_v0.1.md`) is retained as historical work but is **superseded for interpretation** by `GALLERY_SEMANTIC_BANK_v0.2.md` because v0.1 over-promoted some images into broad directions.

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

Do **not** generate AUT-01 yet.

Next:
1. re-read the existing Gallery through the lower-level semantic families F1–F7;
2. identify materially different existing exemplars that strengthen or falsify those families;
3. flag families that still depend on one visual trope;
4. only then generate narrowly for a missing lower-level family exemplar;
5. use D1/D2 as a guardrail against silently promoting lower-level mechanisms into broad direction scores.

## Guardrails

- Do not return to matched Preserve↔Refine product architecture.
- Do not erase D1/D2 negative evidence.
- Do not equate `KEEP` with direction validation or scoring permission.
- Do not fill an eight-direction quota by force.
- Do not restart long AI consensus loops as if AI were construct validation.

The current combined position is:

> **PrioLens is standalone-image-first. The old eight broad directions remain hypotheses. Current work proceeds from visible lower-level semantics upward, not from broad labels downward.**

## AI Review Harness

Vercel harness exists and reaches AI Gateway. Paid execution remains deferred.
