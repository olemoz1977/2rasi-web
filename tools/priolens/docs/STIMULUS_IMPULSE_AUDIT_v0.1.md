# PrioLens stimulus impulse audit v0.1

Status: ACTIVE
Updated: 2026-08-31

## Core rule

Every image is reviewed the same way regardless of its old status (`PASS`, `HOLD`, `CANDIDATE`, `DROP`).

First ask only:

> **What does this image make a viewer feel pulled toward, want to do, or immediately read as desirable/meaningful?**

Do not start from the intended direction label.

## Audit fields

For each image record:

1. **First impulse** — the strongest immediate pull in plain language.
2. **Secondary impulses** — up to three weaker but plausible pulls.
3. **Dominant visible cue** — what in the image creates that pull.
4. **Old status** — PASS / HOLD / CANDIDATE / DROP, retained only as provenance.
5. **Possible PrioLens fit** — assigned only after the impulse is written.
6. **Decision now** — KEEP / HOLD / DROP / REASSIGN.

## Important consequence

A historical DROP is not automatically discarded. It may have failed only because it was mapped to the wrong direction.

Likewise, a historical PASS is not automatically retained if its actual impulse is different from the intended construct.

The impulse description therefore comes before direction mapping and before final selection.

## Example

Water poured to a marked level:
- first impulse: reach the exact required level;
- secondary: precision, control, completion;
- dominant cue: liquid approaching a marked target line;
- CER fit: weak;
- likely fit: MAS/control-related;
- decision for CER: DROP / possible REASSIGN.

## Scope

Apply this rule to:
- recovered S01–S16;
- all Gallery candidates;
- all prior DROP/HOLD images that are still visually interpretable;
- newly generated images.

Do not preserve old labels by inertia.