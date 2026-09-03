# PrioLens Open14 REST C owner freeze

Status: CANONICAL NEXT-BANK FAMILY DECISION / LIVE v0.2 UNCHANGED
Date: 2026-09-03

## Decision

The previous furry-slippers candidate `4928.jpg` remains HOLD only because it repeats the existing home-comfort/footwear mechanism too closely.

The owner supplied the non-footwear REST candidate based on Pexels/Pixabay `269141`: a person lying/resting on a sofa under a blue blanket.

Exact reviewed binary identity:
- owner file label: `4971.jpg`;
- dimensions: `1536×1097`;
- bytes: `474297`;
- SHA-256: `9996dbab58b7963b044f0a1129c228e94cfd28809772e1b17ebbaf131f6e131c`.

Normalized square review derivative prepared locally:
- 640×640 WebP, center-fit from the owner binary;
- SHA-256: `f84f46f7376c105765012ab614efc81e1a4a9bee137550ab6da90eae9d5f3465`.

Small-size review:
- 192×192 center-crop inspection still clearly shows a person lying on a sofa under a blanket;
- the intended REST/restoration action survives mobile-scale reduction;
- the image does not depend on readable text or a product cue.

## Construct assessment

First-glance read:
> a person is resting / napping on a sofa under a blanket.

Strengths:
- actual rest/restoration behavior rather than another footwear/home-comfort object;
- mechanism diversity versus the existing REST A/B;
- clear enough at small size;
- no visible construct-label text or watermark.

Residual risks:
- sleep-specific interpretation;
- some viewers may read illness/tiredness/laziness rather than restorative rest;
- blanket/sofa carries domestic-context valence.

These risks are accepted because the alternative `4928` slippers candidate creates a stronger semantic-duplication problem.

## Next-bank REST set

For the 42-image no-repeat bank:
- REST-A: KEEP current active exemplar;
- REST-B: KEEP current active exemplar;
- REST-C: KEEP / FINAL — owner `4971.jpg` person resting under blue blanket;
- furry-slippers `4928.jpg`: HOLD / not final.

Therefore the next-bank REST family freezes to **A + B + C(4971)**.

Live Open14 v0.2 remains unchanged until the full 3×14 asset package, planner/version boundary and runtime smoke pass.

## Supersession

This checkpoint supersedes the open REST-C review state in:
- `OPEN14_ABC_FULL_AUDIT_2026-09-03.md`;
- `OPEN14_C_PACKAGE_PROVENANCE_2026-09-03.md`;
- `RESUME_HERE.md`.

REST is no longer an open family for next-bank design review.