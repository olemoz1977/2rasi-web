# PrioLens Open14 v0.3 full-42 host audit pass

Status: ASSET GATE PASS / V0.3 API DEPLOYMENT STILL PENDING / RUNTIME FAIL-CLOSED
Date: 2026-09-03

## Trigger

Owner uploaded the approved `priolens_open14_v03_new15_upload.zip` contents to:

`/priolens-research-assets/Open14-v03/`

The visible Hostinger File Manager state was treated only as upload evidence. Runtime acceptance required public HTTP and exact-byte verification.

## New-15 public verification

GitHub Actions run:
- repo: `olemoz1977/omesg360`
- branch: `feature/priolens-open14-v03`
- workflow: `Verify PrioLens Open14 v0.3 host assets`
- run ID: `33755869671`
- result: **SUCCESS**

Verified:
- 15/15 public asset URLs returned HTTP 200;
- 15/15 downloaded binaries matched the canonical SHA-256 values from `open14-next-bank-v0.3-geometry.json` exactly.

Therefore the new-15 upload is accepted as byte-identical to the geometry-approved package.

## Full-42 host audit

GitHub Actions workflow:
`Audit PrioLens Open14 v0.3 full 42`

First run `33755969978` reached all 42 assets and failed only while serializing a NumPy `int64` pHash distance into JSON. This was an audit-script defect, not an asset failure.

The serializer was fixed and run `33756186905` completed **SUCCESS**.

Verified in the successful run:
- 42/42 runtime URLs reachable over HTTP;
- 42/42 images decode successfully;
- 42/42 images are square;
- 42 unique exemplar IDs;
- 42 unique runtime paths;
- 42 unique exact SHA-256 values;
- canonical exact SHA verification PASS for all 15 new v0.3 assets;
- no pHash=0 duplicate-like pair;
- closest pHash distance = 16;
- pHash WATCH threshold `<=12`: 0 pairs;
- stock-watermark OCR keyword hits: 0.

Closest pHash pairs reported:
1. CARE-02 vs EXPLORATION-02: 16
2. ORDER-03 vs RESOURCE-03: 16
3. ORDER-01 vs SAFETY-01: 18
4. BELONGING-01 vs RESOURCE-01: 20
5. CONNECTION-02 vs EXPLORATION-02: 20

No pair crosses the current WATCH threshold.

Full audit artifact:
- artifact ID `9893549218`;
- artifact name `priolens-open14-v03-full42-audit`;
- artifact ZIP SHA-256 `196af5b184f3cafdbfd35f026dc68323ce8e28f09468fb426d37a20627c68d9c`.

## API package prepared

A separate API upload package was built from the isolated v0.3 runtime branch.

GitHub Actions run:
- workflow: `Package PrioLens Open14 v0.3 API`
- run ID: `33756437570`
- result: **SUCCESS**

Package payload:
`priolens_open14_v03_api_upload.zip`

Payload SHA-256:
`ee7ce235183d428923c33423d9a378cc166bdfc4b59891f3752d112e9ee4cf49`

Contents:
- `api.php`;
- `progress.php`;
- `.htaccess` copied from the established v0.2 server protection pattern;
- `README_UPLOAD.txt`.

The package intentionally excludes `config.php` because it contains database credentials.

Target:
`public_html/priolens-open14-v03-api/`

After extraction, the existing secure v0.2 `config.php` must be copied server-side into the new v0.3 API directory. Do not download/share the credential file.

## Current deployment gate

ASSET GATE = **PASS**.

Still pending before `runtimeReady:true`:
1. deploy separate v0.3 API package to `/priolens-open14-v03-api/`;
2. copy existing secure DB `config.php` into that new directory;
3. verify GET route behavior and then valid/invalid POST smoke for both final and progress endpoints;
4. only then set v0.3 bank `runtimeReady:true`;
5. deploy/smoke participant runtime separately.

Live Open14 v0.2 remains unchanged. External recruitment remains CLOSED.
