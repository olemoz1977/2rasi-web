# PrioLens Open14 v0.3 geometry review package

Status: GEOMETRY DECISIONS MATERIALIZED / OWNER REVIEW PENDING / NOT DEPLOYED
Date: 2026-09-03
Parent design freeze: `OPEN14_42_BANK_DESIGN_FREEZE_2026-09-03.md`
Machine-readable geometry: `../config/open14-next-bank-v0.3-geometry.json`

## What was completed

The 15 new source assets for the frozen 42-stimulus design were normalized into a deterministic 640x640 WebP review package in the working environment.

- 14 non-square sources received explicit 1:1 crop boxes.
- `RECOGNITION-03` (`4973`) was already square and was resized without crop.
- Output settings: 640x640, WebP quality 92, Lanczos resampling.
- Every runtime-review derivative has a SHA-256 recorded in `open14-next-bank-v0.3-geometry.json`.
- No file was deployed to the live Open14 v0.2 runtime.
- No bank/runtime/session identity was changed.

## Crop policy

Default for the new sources is a deterministic centered square crop. This was accepted only where the one-second semantic action remained visible in the review contact sheet.

One deliberate exception:
- `BELONGING-03` uses horizontal centering `0.45` rather than `0.50`, crop box `[259,0,1123,864]`, to preserve a visible third group member at the left edge and reduce a pure dyad/CONNECTION reading.

## Important review observation

The square contact sheet remains semantically readable across the package. The main geometry watch item is `BELONGING-03`: a 1:1 crop necessarily reduces the original four-person gaming scene. The chosen crop retains the two active players plus evidence of another group member, but owner mobile review should specifically check whether it still reads as shared-group/togetherness rather than merely two-person connection.

Other notable square reads:
- REST-03: actual resting/napping under blanket remains clear; face is not a dominant salience cue.
- RECOGNITION-03: framed certificate remains visually obvious in square form.
- RECOGNITION-02: directed high-five remains visible; learning/mastery cross-load is unchanged from the design audit.
- CARE-03: tying a child's shoe remains the clear action.
- SAFETY-03: seat-belt fastening remains the clear action.
- OPPORTUNITY-03: open greenhouse entrance and accessible productive interior remain visible.

## What is not yet complete

This is a review package, not the runtime bank.

Still required before any next-bank deployment:
1. owner mobile review of the 15 normalized assets, especially BELONGING-03;
2. materialize/upload the 15 approved WebP binaries into a versioned next-bank runtime asset directory;
3. combine them with the 27 retained live assets to form the full 42 runtime package;
4. populate real runtime paths in the v0.3 bank manifest;
5. integrate `balanced-3x1-no-repeat-slot-v0.3` into a separate next runtime;
6. bump bank/planner/session metadata;
7. run reachability/hash/pHash/text-watermark and mobile/runtime smoke;
8. keep live v0.2 untouched until all of the above pass.

## Local review artifact created during this step

Working-session ZIP:
`priolens_nextbank_v03_geometry_review.zip`

It contains:
- 15 normalized 640x640 WebP files;
- `geometry_manifest.json`;
- a geometry contact sheet.

The ZIP is not a repository/runtime artifact and should not be treated as deployed evidence.
