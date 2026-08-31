# PrioLens project state

Status: ACTIVE RECOVERY / ORIGINAL STANDALONE STIMULUS BASELINE PARTIALLY RECONSTRUCTED
Updated: 2026-08-31
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## Drift-control rule

Before interpreting any local research result, read:

> `docs/PRODUCT_ARCHITECTURE_INVARIANTS_v0.1.md`

Local failures may change a stimulus, semantic family, rendering method or comparison schedule. They must **not silently redefine the product architecture**.

## Product boundary

PrioLens is a short visual-choice experience.

Working principle:
> **For Fun, but with Wisdom.**

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

Public constraints:
- no mandatory free text or per-choice explanation;
- no personality/diagnosis/hidden-self claims;
- `no_clear_choice` allowed;
- target about 2–4 minutes / roughly 12–18 meaningful choices for the eventual public flow.

## Original architecture recovered from File Library

The original PrioLens v0.1 materials have been recovered and now take precedence over the recent matched-pair drift.

Source material recovered:
- `PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md`;
- `priolens_working_beta_v03.html` with all 16 active images embedded as base64;
- `RED_TEAM_SYNTHESIS_v0.1.md`;
- original core/calibration session JSON exports;
- two historical stimulus-matrix artifacts showing earlier candidate provenance.

Original model:
- 8 working directions;
- 2 **independent standalone visual exemplars** per direction;
- 16 active stimuli;
- 28 direction-v-direction edges in the old research core session;
- image identity and direction identity stored separately;
- the two images shown on a trial were assembled by the planner from independently registered stimuli.

The old red-team explicitly stopped freezing the 16-image set and recommended a larger independently designed candidate bank, provisionally at least 4 exemplars per direction, followed by human semantic validation before preference testing.

Important:
> this recommendation expands the standalone-image bank; it does not convert PrioLens into matched same-scene A/B stimulus design.

Recovery sources now documented in:
- `docs/ORIGINAL_PRIOLENS_BASELINE_RECOVERY_v0.1.md`
- `docs/ORIGINAL_STIMULUS_INVENTORY_RECOVERY_v0.1.md`

## Standalone-image architecture

The fundamental PrioLens stimulus unit is **one standalone image**.

A trial displays two standalone images, but this does **not** make the trial a 2Pair-style matched A/B stimulus pair.

The two images do not need to:
- show the same object;
- use the same scene;
- differ by one manipulated property;
- form a before/after or preserve/refine mate;
- invite the viewer to detect "what changed".

They may be visually and contextually different scenes, provided each stimulus is interpretable on its own and gross nuisance cues are screened/balanced.

## Original 16-stimulus red-team status

Recovered blind direction mapping:
- S01 EXP — REWORK / retest
- S02 INF — REWORK / retest; chain reaction/causality
- S03 CON — candidate only; face/social salience confound
- S04 INF — REPLACE preferred; mechanical/system/causality cross-load
- S05 AUT — REPLACE/redesign
- S06 CER — REWORK / retest; checklist/completion
- S07 OPP — REPLACE preferred; food/reward dominated
- S08 PRO — REWORK / retest
- S09 EXP — REPLACE/redesign
- S10 CER — REPLACE preferred; ambiguous container
- S11 AUT — REPLACE/redesign
- S12 MAS — strongest candidate; precision measurement/craftsmanship
- S13 PRO — REPLACE preferred; weak protected-object meaning
- S14 CON — REWORK / retest
- S15 OPP — provisional only; greenhouse/nature/positive-valence confound
- S16 MAS — strongest candidate; pottery/craftsmanship

## Recovery progress · historical scene provenance

Historical stimulus matrices are **precursor evidence, not final ground truth**. Their labels changed before the final blind set, so they cannot be used as a direct registry.

However, five final blind scenes are now strongly triangulated to earlier numbered candidate scenes:
- S12 MAS ↔ historical `MAS-A 4635` — calipers / precise measurement;
- S16 MAS ↔ historical `MAS-B 4636` — pottery wheel / skilled shaping;
- S15 OPP ↔ historical `OPP-A 4637` — open greenhouse / growth;
- S07 OPP ↔ historical `OPP-B 4638` — prepared food/resources;
- S06 CER ↔ historical `CER-B 4659` — checklist/completion.

Possible but not yet proven:
- S08 PRO ↔ historical `PRO-A 2723` — umbrella/rain.

These are **scene-continuity links only**. They do not establish `direction-01` vs `direction-02` stable beta IDs.

Searches for standalone files by historical numeric codes did not recover source assets. The exact one-to-one relation `Sxx -> direction-01/direction-02` remains unresolved and must not be guessed.

## Recent drift retained only as historical evidence

Recent OT-03 matched rendering work is not the active product architecture.

### X12 wooden frame
- Refine image became physically plausible.
- Preserve mate forced implausible or much more complex woodworking behavior.
- Keep only as evidence of why forced matched-scene design is wrong for PrioLens.

### X13 cord coil
- Refine and Preserve renders are plausible standalone image candidates.
- They are not a required pair and should not be evaluated as a matched unit.

## Current research question

The strongest source-grounded question from the old red-team remains:

> Can materially different standalone exemplars of the same working direction produce a reproducible direction-level choice signal after semantic fit and low-level visual confounds are controlled?

The eight working directions remain hypotheses, not validated traits or guaranteed final scores.

## Immediate next action

Do **not** generate more new stimuli yet.

Recovery first:
1. extract the original 16 beta images from the embedded HTML without changing pixels;
2. save/reconstruct a historical asset inventory under stable beta IDs;
3. use deterministic visual/source comparison to recover as much of S01–S16 ↔ `direction-01/-02` as possible without guessing;
4. produce one contact sheet with stable asset ID, recovered Sxx where proven, red-team verdict and major confounds;
5. classify old assets as historical KEEP / REWORK / DROP candidates;
6. only then design missing standalone exemplars to expand promising directions toward a 4+ candidate bank.

No external preference pilot should use the old 16 as if they were validated/final.

## Human semantic validation boundary

Before pairwise preference testing, standalone images must be screened independently.

Research questions should capture:
- blind open-ended meaning;
- optional mapping to working direction definitions only after open coding;
- intended-direction hit / neighbour confusion;
- major confounds such as valence, aesthetics, faces, food, nature, complexity, completion and expertise.

## AI reviewers

AI is a concept/confound filter only, not a validator.

Do not reopen long Claude/Grok voting loops before human semantic evidence.

## AI Review Harness

Vercel harness is deployed and reaches AI Gateway. Paid execution remains deferred. Do not spend more time on billing now.

## Source-of-truth order

1. `docs/PRODUCT_ARCHITECTURE_INVARIANTS_v0.1.md`
2. `docs/ORIGINAL_PRIOLENS_BASELINE_RECOVERY_v0.1.md`
3. `docs/ORIGINAL_STIMULUS_INVENTORY_RECOVERY_v0.1.md`
4. original `PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md` source material recovered from File Library
5. original `RED_TEAM_SYNTHESIS_v0.1.md` source material recovered from File Library
6. `PROJECT_STATE.md`
7. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
8. `docs/STANDALONE_IMAGE_COMPARISON_ARCHITECTURE_v0.1.md`
9. later standalone-image semantic-screen protocol when created
10. recent OT/matched-edge work as historical methodological evidence only

## Recovery instruction

If context is lost, start with the invariant file and the two recovery files above.

Do not restart same-scene Preserve↔Refine mate construction, do not treat two images on one screen as a 2Pair matched pair, do not silently regenerate assets that still exist in the old beta, do not infer `Sxx -> direction-01/-02` from numbering, and do not let a local stimulus/rendering failure redefine PrioLens architecture.
