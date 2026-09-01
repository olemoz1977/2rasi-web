# PrioLens asset inventory v0.1

Status: RECOVERED CANDIDATE INVENTORY / NOT STIMULUS FREEZE
Date: 2026-08-29

This document inventories reusable historical still-image assets for PrioLens. It does **not** declare any image to be a validated representation of a PrioLens direction.

## 1. Sources

Historical source repository and branch:

`olemoz1977/ConflictLab@feature/2pair-integrated-v0.1`

Recovered asset roots:

- `docs/experiments/stimulus-validation/assets/` — Wave 1 visual pairs
- `docs/experiments/pair-p0/images/` — Pair P0 / N0 images
- `docs/media/` — historical still-image pool

The recovered `decision_drivers_8x8_prototype_v0.4.html` was used only to reconstruct which legacy assets had already been tentatively mapped to the eight current directions. Its old `SEED`, `EXPERIMENTAL`, and `WEAK` labels were pair/prototype judgements, not validation evidence for individual assets.

## 2. Inventory counts

Non-placeholder still-image pool currently recoverable from the three roots:

- Wave 1: **12** images
- Pair P0 / N0: **18** non-placeholder images
- historical media: **12** still images
- total non-placeholder still-image files: **42**

The old 8-direction v0.4 prototype references **19 unique images** from this pool. Therefore there are **23 non-placeholder reserve images** that were not used by that prototype.

The Pair P0 directory also contains four filenames marked `placeholder-v0`; they are tracked separately and are not preferred candidate material.

## 3. Current prototype mapping recovered from v0.4

These are **candidate mappings to review**, not final PrioLens assignments.

| Direction | Recovered candidate asset | Source family | Status now |
| --- | --- | --- | --- |
| AUT · Autonomy | `CR-PO-01/open-space.png` | Wave 1 | REVIEW |
| AUT · Autonomy | `p0-001-b.png` | Pair P0 | REVIEW |
| CER · Certainty | `CR-PO-01/partitioned-space.png` | Wave 1 | REVIEW |
| CER · Certainty | `p0-003-b.png` | Pair P0 | REVIEW |
| CER · Certainty | `CS-PR-01/more-reveal.webp` | Wave 1 | REVIEW |
| EXP · Exploration | `p0-003-a.png` | Pair P0 | REVIEW |
| EXP · Exploration | `n0-004-a.webp` | Pair P0 | REVIEW |
| EXP · Exploration | `CS-PR-01/less-reveal.jpg` | Wave 1 | REVIEW |
| MAS · Mastery | `p5_person_laptop.png` | historical media | REVIEW |
| MAS · Mastery | `v2_p3_notebook.png` | historical media | REVIEW |
| CON · Connection | `p1_phone_table.png` | historical media | REVIEW |
| CON · Connection | `p4_empty_table.png` | historical media | REVIEW |
| CON · Connection | `p3_chat_screen.png` | historical media | REVIEW |
| INF · Influence | `n0-009-a-prototype-v0.png` | Pair P0 | HIGH-RISK REVIEW |
| INF · Influence | `p0-001-a.png` | Pair P0 | HIGH-RISK REVIEW |
| PRO · Protection | `n0-009-b-prototype-v0.png` | Pair P0 | REVIEW |
| PRO · Protection | `p0-002-a.png` | Pair P0 | REVIEW |
| OPP · Opportunity | `p0-002-b.png` | Pair P0 | REVIEW |
| OPP · Opportunity | `v2_p2_corridor.png` | historical media | REVIEW |

Recovered candidate counts by direction:

- AUT 2
- CER 3
- EXP 3
- MAS 2
- CON 3
- INF 2
- PRO 2
- OPP 2

So the immediate problem is **not raw image count**. The problem is whether two images for a direction are conceptually independent, semantically defensible and sufficiently controlled visually. The old prototype explicitly identified Influence as especially weak, so INF is the first replacement/review priority.

## 4. Full Wave 1 still-image inventory

### Used by old v0.4 mapping

- `docs/experiments/stimulus-validation/assets/CR-PO-01/open-space.png`
- `docs/experiments/stimulus-validation/assets/CR-PO-01/partitioned-space.png`
- `docs/experiments/stimulus-validation/assets/CS-PR-01/less-reveal.jpg`
- `docs/experiments/stimulus-validation/assets/CS-PR-01/more-reveal.webp`

### Reserve / unassigned for PrioLens review

- `docs/experiments/stimulus-validation/assets/CR-FS-01/continuous-capacity.png`
- `docs/experiments/stimulus-validation/assets/CR-FS-01/fixed-slots.png`
- `docs/experiments/stimulus-validation/assets/CR-PZ-01/no-predefined-zones.png`
- `docs/experiments/stimulus-validation/assets/CR-PZ-01/predefined-zones.png`
- `docs/experiments/stimulus-validation/assets/CS-CA-01/less-reference.png`
- `docs/experiments/stimulus-validation/assets/CS-CA-01/more-reference.png`
- `docs/experiments/stimulus-validation/assets/CS-RE-01/less-evidence.png`
- `docs/experiments/stimulus-validation/assets/CS-RE-01/more-evidence.png`

The reserve images stay `UNASSIGNED`; their old CS/CR pair names must not be converted automatically into PrioLens meanings.

## 5. Pair P0 / N0 still-image inventory

### Used by old v0.4 mapping

- `docs/experiments/pair-p0/images/n0-004-a.webp`
- `docs/experiments/pair-p0/images/n0-009-a-prototype-v0.png`
- `docs/experiments/pair-p0/images/n0-009-b-prototype-v0.png`
- `docs/experiments/pair-p0/images/p0-001-a.png`
- `docs/experiments/pair-p0/images/p0-001-b.png`
- `docs/experiments/pair-p0/images/p0-002-a.png`
- `docs/experiments/pair-p0/images/p0-002-b.png`
- `docs/experiments/pair-p0/images/p0-003-a.png`
- `docs/experiments/pair-p0/images/p0-003-b.png`

### Reserve / unassigned non-placeholder images

- `docs/experiments/pair-p0/images/n0-004-b.png`
- `docs/experiments/pair-p0/images/n0-005-a.png`
- `docs/experiments/pair-p0/images/n0-005-b.png`
- `docs/experiments/pair-p0/images/n0-006-a.png`
- `docs/experiments/pair-p0/images/n0-006-b.png`
- `docs/experiments/pair-p0/images/n0-007-a-prototype-v0.png`
- `docs/experiments/pair-p0/images/n0-007-b-prototype-v0.webp`
- `docs/experiments/pair-p0/images/n0-008-a-prototype-v0.png`
- `docs/experiments/pair-p0/images/n0-008-b-prototype-v0.png`

### Placeholder-labelled files — do not promote without review

- `docs/experiments/pair-p0/images/n0-005-a-placeholder-v0.png`
- `docs/experiments/pair-p0/images/n0-005-b-placeholder-v0.png`
- `docs/experiments/pair-p0/images/n0-006-a-placeholder-v0.png`
- `docs/experiments/pair-p0/images/n0-006-b-placeholder-v0.png`

Note: `n0-005-a-placeholder-v0.png` and `n0-005-a.png` resolve to the same historical Git blob, so filename count must not be confused with independent visual count.

## 6. Historical media still-image inventory

### Used by old v0.4 mapping

- `docs/media/p1_phone_table.png`
- `docs/media/p3_chat_screen.png`
- `docs/media/p4_empty_table.png`
- `docs/media/p5_person_laptop.png`
- `docs/media/v2_p2_corridor.png`
- `docs/media/v2_p3_notebook.png`

### Reserve / unassigned

- `docs/media/ax_approach.png`
- `docs/media/ax_release.png`
- `docs/media/ax_uncertainty.png`
- `docs/media/p2_window_silhouette.png`
- `docs/media/v2_p1_empty_room.png`
- `docs/media/v2_p4_person_alone.png`

Historical video files are outside the PrioLens still-image v0.1 inventory and are not candidates for the measured pair screen.

## 7. Reuse risks already visible before visual audit

1. **Paired-complement dependence.** Some current mappings take opposite members of one old visual pair and assign them to different PrioLens directions. That is useful as a prototype but can make the new construct inseparable from the old image manipulation.
2. **Scene-family dependence.** Two exemplars for one direction must not simply be two versions of the same scene or composition.
3. **Low-level visual confounds.** Existing files differ strongly in format, file size, likely complexity, luminance, composition and rendering style. Final assets need controlled presentation and a confound audit.
4. **Old semantic labels are not evidence.** A file called `open-space`, `more-reveal` or `fixed-slots` does not prove that participants interpret it as Autonomy, Certainty or any other PrioLens direction.
5. **Influence is under-specified.** The old v0.4 prototype itself marked Influence mappings as weak. Count = 2 does not mean coverage = sufficient.

## 8. Final selection rule for PrioLens v0.1

Before copying/finalizing the 16 active assets, require for each direction:

- two conceptually independent exemplars
- same intended direction but different scene/content realization
- no reliance on a single old A/B manipulation for both exemplars
- no text or interface cue unless deliberately controlled across all assets
- comparable presentation geometry and treatment
- reviewed brightness/contrast/complexity/salience/style confounds
- immutable PrioLens asset ID and content hash after freeze
- mapping rationale documented separately from the filename

## 9. Inventory conclusion

There is enough historical material to avoid asking the user to upload everything again. There is **not yet enough evidence to freeze 16 final images**.

Next action is a visual/semantic audit of the 19 already mapped candidates plus the 23 reserve images. Only after that audit should selected files be copied into the PrioLens-owned asset path and `stimuli-v0.1.json` receive real asset/hash values.
