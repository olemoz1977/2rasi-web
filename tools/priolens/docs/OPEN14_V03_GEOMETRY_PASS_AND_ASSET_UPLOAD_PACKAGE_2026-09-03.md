# PrioLens Open14 v0.3 geometry pass + asset upload package

Status: GEOMETRY PASS / NEW-15 UPLOAD PACKAGE PREPARED / HOSTINGER UPLOAD PENDING / LIVE v0.2 UNCHANGED
Date: 2026-09-03

Parent checkpoints:
- `OPEN14_42_BANK_DESIGN_FREEZE_2026-09-03.md`
- `OPEN14_V03_GEOMETRY_REVIEW_PACKAGE_2026-09-03.md`
- `../config/open14-next-bank-v0.3-geometry.json`

## Review artifact received and verified

Owner supplied the working-session review archive:
- file: `priolens_nextbank_v03_geometry_review.zip`;
- bytes: `1187809`;
- SHA-256: `0707ecd3569b943c91e33a164498c3017f9c0570d8747b2f469f7caf1817d2c5`.

Archive contents verified:
- 15 normalized runtime-review WebP files;
- `geometry_manifest.json`;
- geometry contact sheet.

For all 15 normalized assets:
- decoded format = WebP;
- dimensions = 640x640;
- exact file SHA-256 matches `config/open14-next-bank-v0.3-geometry.json`;
- 15/15 hashes are unique.

This resolves the operational uncertainty caused by the review ZIP not being present in the repository.

## Geometry decision

Geometry review = **PASS**.

The 192x192 small-size review preserved the intended first-glance action across the 15-image package.

Notable checks:
- REST-03: person resting / napping under blanket remains readable;
- SAFETY-03: seat-belt fastening remains clear;
- CONNECTION-03: direct dyadic conversation remains clear;
- CARE-03: tying another person's shoe remains clear;
- RECOGNITION-02: directed high-five remains visible;
- RECOGNITION-03: person + framed certificate remains obvious; certificate wording is not required for the read;
- MASTERY-03: sewing/button action remains readable;
- OPPORTUNITY-03: open greenhouse entrance and accessible productive interior remain visible.

### BELONGING-03

Decision: **PASS / keep WATCH for later 42-bank mobile smoke**.

Canonical crop remains:
- centering: `0.45, 0.50`;
- crop: `[259,0,1123,864]`;
- runtime review hash: `5506a4a3a754683b077fc2f853a22d4d7189df7d727e1cfa14441c6786a606f6`.

At 192x192 the crop retains:
- two clearly active players with controllers;
- visible evidence of a third group member at the left edge.

The scene therefore still reads as shared group activity / togetherness rather than collapsing to a pure two-person CONNECTION scene. No further crop shift is justified before runtime smoke.

## Hash precedence clarification

For runtime packaging, the normalized output hashes in `config/open14-next-bank-v0.3-geometry.json` are canonical.

Earlier family-specific freeze notes contain hashes from earlier local normalization derivatives for REST-03 and RECOGNITION-03. Those older derivative hashes must not be used as runtime verification hashes for this package.

Source hashes in the family freezes remain valid provenance; normalized runtime-review hashes come from the later geometry manifest.

## New-15 Hostinger upload package

A deployment-oriented package was prepared from the verified 15 WebPs.

Target persistent research asset directory:
`/priolens-research-assets/Open14-v03/`

Package:
- `priolens_open14_v03_new15_upload.zip`;
- bytes: `923635`;
- SHA-256: `cfed237752163b5bf4d6227a2dce3c889dbcf1946fe6543947e898d159567481`.

Package contents:
- the 15 exact geometry-approved WebPs using the filenames frozen in the geometry manifest;
- `HOST_ASSET_PROVENANCE_v0.3-new15.json` with source hash, crop, normalized hash, bytes and planned runtime path;
- short deployment README.

The package is prepared only. It has **not** been uploaded to Hostinger and no reachability claim is made.

## Hosting boundary

Current canonical infrastructure rule remains active:
- research stimulus binaries live in the persistent Hostinger research-assets area;
- runtime/provenance is versioned in Git;
- do not move canonical research binaries into Git merely to bypass the Hostinger boundary.

No Hostinger hosting/filesystem write connector is available in the current tool environment, and no installable Hostinger hosting upload plugin was found. Therefore the actual persistent-asset upload remains the only blocked external filesystem action at this checkpoint.

## New-15 pHash / visible-text pre-audit

A local 64-bit perceptual-hash screen across the 15 approved images found no near-duplicate pair requiring action. The closest pair was RESOURCE-03 vs ORDER-03 at Hamming distance 16; visually they remain different scenes/mechanisms.

Visual text/watermark screen:
- no visible stock watermark detected in the 15-image contact sheet;
- RECOGNITION-03 contains certificate text, but the stimulus does not rely on readable wording at participant size;
- KNOWLEDGE-03 contains normal page content, not construct-label text.

This is only the new-15 pre-audit. Full 42-bank pHash/text/watermark audit still remains after runtime assembly.

## Next execution queue

1. Upload the 15 approved WebPs to `/priolens-research-assets/Open14-v03/` without touching live v0.2 assets.
2. HTTP-reachability + exact-byte SHA-256 check of all 15 uploaded files.
3. Combine the 15 v0.3 paths with the 27 retained live exemplars into the 42-bank runtime manifest.
4. Keep runtime fail-closed until every required path is reachable.
5. Integrate `balanced-3x1-no-repeat-slot-v0.3` into a separate `open14-v03` runtime.
6. Update family repetition logic to be exemplar-ID-set based (`01/02/03`), not legacy A/B-suffix based.
7. Bump session/local-draft/bank/assigner identity so v0.2 and v0.3 observations cannot mix silently.
8. Ensure backend validation accepts exactly the frozen v0.3 exemplar IDs while retaining v0.2 compatibility, or use a separate version-aware endpoint.
9. Run full 42 reachability/hash/pHash/text-watermark/mobile smoke and runtime no-repeat smoke.
10. Only after all smoke passes reconsider live replacement and external recruitment.

Live Open14 v0.2 remains unchanged. External recruitment remains CLOSED.
