# PrioLens Open14 stimulus bank owner review v0.1

Status: ACTIVE CHECKPOINT
Date: 2026-09-01

## Why this checkpoint exists

The previous formal checkpoint stopped at geometry normalization. Runtime work has moved beyond that point.

The active 28-image Open14 bank has now received:
- actual-dimensions audit;
- reviewed 1:1 normalization for acceptable portrait assets;
- owner first-glance semantic review;
- watermark OCR / visual review;
- clean-near-duplicate search in the Hostinger Gallery.

This checkpoint supersedes the older statement that the immediate next action is to finish the 28-asset dimensions audit.

## Geometry audit result

Current 28-asset bank:
- 23 / 28 assets were already square;
- 5 / 28 were 768x1360 portrait assets.

Portrait set:
- REST-A;
- RESOURCE-B;
- ORDER-A;
- BELONGING-B;
- KNOWLEDGE-A.

Reviewed center 1:1 derivatives accepted:
- REST-A;
- RESOURCE-B;
- BELONGING-B;
- KNOWLEDGE-A.

ORDER-A was not accepted as a crop solution and remains replacement-required.

Important: geometric acceptance does not imply semantic acceptance. REST-A is geometrically acceptable but semantically mismatched to REST.

## Owner first-glance review decisions

### Replace / reassign

- REST-A: `REASSIGN_REQUIRED_SEMANTIC_MISMATCH`.
  - Original creation intent: choice between classic shoes and sneakers.
  - Do not interpret as rest/restoration.

- REST-B: `REPLACE_REQUIRED_WATERMARK`.
  - Two visible watermarks.

- ORDER-A: `REPLACE_REQUIRED_1TO1`.
  - Crop solution rejected; replacement needed.

- ORDER-B: `REPLACE_REQUIRED_SEMANTIC_MISMATCH`.
  - Owner does not read the image as clear order / structure on first glance.

- AUTONOMY-A: `REPLACE_REQUIRED_SEMANTIC_MISMATCH`.
  - Choosing a tool does not clearly communicate self-direction / autonomy.

- CONTROL-A: `REPLACE_REQUIRED_VISUAL_CREDIBILITY`.
  - Central instrument/object looks artificial or implausible and can dominate the first-glance read.

- KNOWLEDGE-A: `REPLACE_SEARCH_BETTER_CANDIDATE`.
  - Search for a clearer learning / understanding cue, preferably a direct book / learning scene.

- KNOWLEDGE-B: `REPLACE_SEARCH_BETTER_CANDIDATE`.
  - Current `see clearer / more` boundary probe is too broad; search for clearer learning / understanding, potentially digital learning.

### Hold / review

- BELONGING-B: `HOLD_OWNER_REVIEW_ASYMMETRIC_WARMTH`.
  - Belonging reading is debatable because visible steam / warmth appears associated mainly with one participant/object.

- OPPORTUNITY-A: `HOLD_SEARCH_BETTER_CANDIDATE`.
  - Search Gallery for a clearer immediate-opportunity cue before freezing.

### Keep but clean

- CONNECTION-A: `CLEAN_REQUIRED_WATERMARK`.
  - KlingAI watermark detected by OCR.

- CONNECTION-B: `CLEAN_REQUIRED_WATERMARK`.
  - Watermark visually confirmed during owner smoke.

Do not spend cleanup effort on stimuli already marked REPLACE / REASSIGN unless a clean equivalent directly solves the replacement.

## Watermark audit

A one-time OCR / corner audit was run across all 28 current runtime assets.

Clear detections:
- REST-B: KlingAI watermark, already replacement-required;
- ORDER-B: KlingAI 3.0 watermark, already replacement-required for semantics;
- CONNECTION-A: KlingAI watermark, keep-but-clean;
- CONNECTION-B: visually confirmed watermark, keep-but-clean.

No other currently retained stimulus produced a clear watermark-text detection in this pass. This is not a guarantee against tiny non-text logos.

## Gallery duplicate search

A perceptual-hash search over the Hostinger Gallery found:
- SAFETY-B current file `20260829_233727670.png` has `S13.webp` at perceptual hash distance 0.

This makes `S13.webp` a strong candidate for a clean equivalent of SAFETY-B and should be visually checked / switched if clean.

No near-identical clean copy was found for CONNECTION-A or CONNECTION-B in the first search pass.

## Current source-of-truth split

Technical runtime bank and per-exemplar review metadata:
`olemoz1977/omesg360/priolens/open14-v02/bank.json`

Owner-readable live catalog:
`https://omesg360.eu/priolens-open14-v02/stimulus-bank.html`

Formal project checkpoint:
this document.

## Immediate next action

Do not run another owner interpretation session yet.

Finish stimulus remediation in this order:
1. verify / switch SAFETY-B to clean `S13.webp` if visually equivalent and watermark-free;
2. resolve CONNECTION-A and CONNECTION-B watermark cleanup or replace with clean equivalents;
3. find / create replacements for REST-A, REST-B, ORDER-A, ORDER-B, AUTONOMY-A, CONTROL-A, KNOWLEDGE-A and KNOWLEDGE-B;
4. review BELONGING-B and OPPORTUNITY-A against better Gallery candidates;
5. re-run one final active-bank audit for geometry, watermark, semantic status and runtime reachability;
6. only when the active bank is clean, smoke the mobile visual flow once;
7. then fix sufficiency `null` / coverage display;
8. keep CARE visual-vs-received-support self-report asymmetry explicit;
9. configure and smoke 90-day cleanup cron;
10. then decide the first small external formative pilot.

External recruitment remains CLOSED.
