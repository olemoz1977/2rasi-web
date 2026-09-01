# Gallery provenance note: ConflictLab v0.4

Status: ACTIVE INTERPRETATION NOTE
Updated: 2026-08-31

## Why this matters

The PrioLens Gallery was not generated in a semantic vacuum. The user confirmed that at least part of the image-generation work was influenced by ConflictLab v0.4 logic.

The archived ConflictLab v0.4-era stimulus generator shows that the active signal model was based on three axes:

- `aw` — approach_withdrawal: -1 withdrawal / +1 approach
- `cs` — certainty_seeking: -1 uncertainty tolerance / +1 clarity seeking
- `cr` — control_release: -1 release / +1 control

It also used F1-F7 visual-cue rules. Important among them:
- cue is not an interpretation;
- cue is not an emotion label;
- cue does not prescribe the correct response;
- the same cue may be chosen by different people for different reasons (F4);
- cue must be understandable without explanation;
- cue must be grounded in what is visibly present.

Source of truth: archived ConflictLab `archive/legacy-tools/generator.html`.

## Consequence for PrioLens Gallery review

The Gallery must be treated as a **hybrid-provenance candidate corpus**, not as a set of images originally optimized only for the later eight PrioLens directions.

This explains why some images resist broad labels such as AUT/CER/INF/MAS while still reading cleanly as approach, clarity-seeking, control, precision, steering or other lower-level visible tendencies.

Do not interpret this as proof that PrioLens should restore ConflictLab v0.4 axes. The v0.4 model is provenance, not the current scoring model.

## Practical implication

Before generating many new images for a supposedly thin PrioLens direction, first ask whether the Gallery already contains useful legacy images whose original design intent came from one of the v0.4 axes.

Especially relevant provisional correspondences to inspect, without assuming one-to-one identity:
- `CER` may overlap with legacy `cs+` clarity-seeking scenes;
- `AUT` may overlap with some `cr+` local-control scenes;
- `EXP` may overlap with some `aw+` / `cs-` approach-to-uncertainty scenes;
- `PRO`, `INF`, `OPP`, `MAS`, `CON` may combine several old-axis signals and therefore should not be expected to map cleanly.

These are search hypotheses only.

## New review rule

Do not perform another blind full-Gallery pass. Instead do **targeted provenance-aware retrieval**:
1. choose a current PrioLens gap;
2. translate it into plausible v0.4 signal ancestry where appropriate;
3. inspect only the Gallery candidates relevant to that ancestry;
4. keep images that are fast, clear and useful under current PrioLens product rules;
5. generate new scenes only after that targeted legacy recovery is exhausted.

This preserves prior work and avoids generating replacements for images that may already exist for historical reasons.
