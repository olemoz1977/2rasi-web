# PrioLens project state

Status: ACTIVE RESEARCH / STANDALONE IMAGE BANK / SIMPLE SEMANTIC SCREENING ACTIVE
Updated: 2026-08-31
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## Read first

1. `docs/PRODUCT_ARCHITECTURE_INVARIANTS_v0.1.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/STIMULUS_SELECTION_RULES_v0.2.md`
4. `docs/D1_D2_EVIDENCE_RECLASSIFICATION_v0.1.md`
5. `docs/ORIGINAL_STIMULUS_EXACT_MAPPING_v0.1.md`
6. this file

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

Original v0.1 used 8 working directions:
- AUT
- CER
- EXP
- MAS
- CON
- INF
- PRO
- OPP

It used 2 standalone exemplars per direction, 16 active stimuli and 28 direction-v-direction edges.

The exact S01–S16 ↔ beta asset mapping has been recovered byte-for-byte from `Gallery.zip` and `priolens_working_beta-4.html`.

Recovery is complete. Do not restart archaeology or ask the user to re-upload old project material.

## What survives from D1/D2

The standalone correction does **not** erase the negative D1/D2 evidence.

D1/D2 showed that the inference

`different visible mechanisms → one stable broad direction → safe direction score`

is not established enough to freeze.

INF repeatedly collapsed toward steering/routing/causality/control.
MAS repeatedly collapsed toward precision/fit/refinement/skilled execution.

Interpretation:
- broad directions remain hypotheses;
- do not assume direction-level scoring is valid merely because images were designed under the same label;
- use multiple materially different exemplars and let later evidence determine whether a direction survives.

## Active stimulus-selection model

The previous lower-level F1–F8 work remains useful as diagnostic vocabulary but is **not the active product taxonomy**.

Active rule:

> A useful PrioLens image should be quickly understandable, naturally express the intended candidate idea, and avoid gross visual distortions that would obviously swamp the semantic choice.

Do **not** require laboratory-style semantic sterility.

An image may contain several cues. It may show an adjustment and its visible consequence. It may have alternative readings. The question is whether the intended reading is natural and dominant enough to justify carrying the image into a larger candidate bank.

Canonical rules: `docs/STIMULUS_SELECTION_RULES_v0.2.md`.

## Candidate directions are back as design hypotheses

AUT/CER/EXP/MAS/CON/INF/PRO/OPP are again useful for **bank construction**, but not as validated scores.

Practical target:
- roughly 4–6 materially different standalone images per promising direction;
- semantic diversity over cosmetic variants;
- no matched A/B mates;
- no quota-filling with weak images;
- obvious nuisance outliers rejected;
- blind AI used only as a cheap description/confound filter;
- external humans later determine which images and directions actually survive.

## Current image-bank lessons

Historical strongest anchors/candidates still include:
- MAS: S12 caliper precision; S16 pottery skill;
- INF: irrigation gate feeding several channels; room light switch changing wider room state;
- CON: S03 dyadic connection; two people jointly handling/exchanging one object;
- EXP: footprints/trail; route through windshield;
- PRO: S08 umbrella shielding;
- OPP: prepared useful materials; ripe harvest + basket;
- CER: S06 checklist, with completion/symbol warning.

Recent regulation/control experiments:
- S11 workstation image failed blind screening because it read primarily as computer work;
- backpack-strap adjustment passed as a clear adjustment scene;
- bicycle saddle adjustment was ambiguous with repair;
- car headrest adjustment was understandable but context-specific;
- physical audio volume-control scene is retained as a strong clear adjustment/control candidate.

Do not over-interpret these as proof of AUT or any other broad direction.

## Gallery status

`Gallery.zip` contains 223 files / 222 byte-unique images and has already been reviewed twice.

Do not repeatedly re-review the full archive without a new question.

Use Gallery candidates where useful, then generate only genuinely missing semantic exemplars.

## Solo research constraint

The user is working alone.

Current workflow:
1. build and curate the candidate bank;
2. use blind AI sparingly for obvious semantic/confound checks;
3. treat user self-reading as design sanity check, not independent validation;
4. postpone external human validation until a compact bank is worth showing;
5. do not make recruiting participants an immediate blocker.

## Immediate next action

Stop further theory splitting.

Build a **practical v0.2 candidate matrix** for the eight working directions using:
- recovered S01–S16;
- strongest Gallery candidates;
- recent clear generated scenes such as irrigation, prepared materials and audio volume adjustment.

For each direction, mark:
- current usable candidates;
- obvious weak/rejected items;
- how many genuinely different scenes are still missing to reach a provisional 4–6 image bank.

Then generate only the missing scenes, one at a time.

## Guardrails

- do not return to matched Preserve↔Refine architecture;
- do not erase D1/D2 negative evidence;
- do not equate a clear image with validated direction scoring;
- do not fill quotas with weak or duplicate renders;
- do not restart long AI consensus loops;
- do not over-sterilize images until they become artificial;
- keep the public experience aligned with **For Fun with Wisdom**.

## AI Review Harness

Vercel harness exists and reaches AI Gateway. Paid execution remains deferred.
