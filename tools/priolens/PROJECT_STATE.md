# PrioLens project state

Status: ACTIVE RESEARCH / STANDALONE IMAGE BANK / IMPULSE-FIRST AUDIT ACTIVE
Updated: 2026-08-31
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## Read first

1. `docs/PRODUCT_ARCHITECTURE_INVARIANTS_v0.1.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/STIMULUS_IMPULSE_AUDIT_v0.1.md`
4. `docs/STIMULUS_SELECTION_RULES_v0.2.md`
5. `docs/CANDIDATE_BANK_MATRIX_v0.2.md`
6. `docs/GALLERY_CONFLICTLAB_V04_PROVENANCE_NOTE_v0.1.md`
7. `docs/D1_D2_EVIDENCE_RECLASSIFICATION_v0.1.md`
8. `docs/ORIGINAL_STIMULUS_EXACT_MAPPING_v0.1.md`
9. this file

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

The active review order is now impulse-first:

> **First ask what the image actually pulls the viewer toward. Only after that map it to a candidate PrioLens direction.**

This applies equally to historical PASS, HOLD, CANDIDATE and DROP images.

A DROP may be useful if it failed only because it was assigned to the wrong direction. A PASS may still be rejected if its actual impulse does not match the intended construct.

Canonical audit rule: `docs/STIMULUS_IMPULSE_AUDIT_v0.1.md`.

General visual screening remains simple:
- fast readability;
- intended/observed impulse stronger than alternatives;
- no gross preference distortion;
- no laboratory-style semantic sterility requirement.

Canonical selection rules: `docs/STIMULUS_SELECTION_RULES_v0.2.md`.

## Candidate directions are design hypotheses

AUT/CER/EXP/MAS/CON/INF/PRO/OPP are useful for bank construction, but not validated scores.

Practical target:
- roughly 4–6 materially different standalone images per promising direction;
- semantic diversity over cosmetic variants;
- no matched A/B mates;
- no quota-filling with weak images;
- obvious nuisance outliers rejected;
- blind AI used only as a cheap description/confound filter;
- external humans later determine which images and directions actually survive.

Current working matrix: `docs/CANDIDATE_BANK_MATRIX_v0.2.md`.

## Current bank summary

- AUT: backpack adjustment + physical audio volume control are current clear candidates; S11 dropped; bicycle saddle and car headrest remain HOLD.
- CER: only S06 checklist/completion is a provisional anchor; this is currently the thinnest bank.
- EXP: footprints/trail + route-through-windshield are useful, but route/travel trope is overrepresented.
- MAS: S12 caliper + S16 pottery remain strongest anchors.
- CON: S03 dyad + joint object handling/exchange survive provisionally; face/social salience still matters.
- INF: irrigation gate + wider-room light switch are useful clear candidates.
- PRO: S08 umbrella is still the clearest provisional anchor; more diverse safeguarding scenes are needed.
- OPP: prepared useful materials + ripe harvest/basket are current useful candidates.

These statuses are provisional and must be re-read through the impulse-first audit before freezing.

## Gallery provenance and status

`Gallery.zip` contains 223 files / 222 byte-unique images and has already been reviewed twice.

Important provenance fact: at least part of Gallery generation was influenced by **ConflictLab v0.4** stimulus logic.

Archived v0.4-era generator used three signal axes:
- `aw`: withdrawal ↔ approach;
- `cs`: uncertainty tolerance ↔ clarity seeking;
- `cr`: release ↔ control.

It also used F1–F7 visible-cue rules, including understandability without explanation and allowing the same cue to be chosen for different reasons.

Therefore Gallery is a **hybrid-provenance corpus**, not a bank originally optimized only for AUT/CER/EXP/MAS/CON/INF/PRO/OPP.

The provenance is context only. During impulse audit, do not start from old ConflictLab labels either.

Canonical provenance note: `docs/GALLERY_CONFLICTLAB_V04_PROVENANCE_NOTE_v0.1.md`.

## Solo research constraint

The user is working alone.

Current workflow:
1. audit what each image actually evokes;
2. only then map/reassign to a candidate PrioLens direction;
3. use blind AI sparingly for obvious semantic/confound checks;
4. postpone external human validation until a compact bank is worth showing;
5. do not make recruiting participants an immediate blocker.

## Immediate next action

Do not generate more scenes yet.

Perform the same impulse-first audit on:
1. recovered S01–S16;
2. current KEEP/PASS candidates;
3. HOLD candidates;
4. historical DROP images that remain interpretable;
5. remaining useful Gallery candidates.

For every image record only:
- first impulse;
- up to three secondary impulses;
- dominant visible cue;
- old status;
- possible PrioLens fit only after impulse description;
- new decision: KEEP / HOLD / DROP / REASSIGN.

This audit replaces direction-first review as the immediate task.

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
