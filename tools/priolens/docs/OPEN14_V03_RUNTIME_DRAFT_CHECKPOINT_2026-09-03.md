# PrioLens Open14 v0.3 runtime draft checkpoint

Status: NEXT RUNTIME DRAFT BUILT + LOGIC SMOKE PASS / FAIL-CLOSED / NEW15 HOSTINGER UPLOAD PENDING / LIVE v0.2 UNCHANGED
Date: 2026-09-03

Canonical parent checkpoints:
- `OPEN14_42_BANK_DESIGN_FREEZE_2026-09-03.md`
- `OPEN14_V03_GEOMETRY_PASS_AND_ASSET_UPLOAD_PACKAGE_2026-09-03.md`
- `../config/open14-next-bank-v0.3-runtime-plan.json`

Runtime repository:
- repo: `olemoz1977/omesg360`
- isolated branch: `feature/priolens-open14-v03`
- runtime path: `priolens/open14-v03/`
- live `main` / `priolens/open14-v02/` was not modified.

## Why a separate runtime branch was used

The next runtime is incomplete until the 15 new binaries exist in persistent Hostinger storage and pass reachability/hash checks.

Creating the draft on a separate branch prevents an incomplete v0.3 surface from being treated as live and reduces accidental auto-deploy risk.

## Runtime bank

Feature branch contains `priolens/open14-v03/bank.json` with:
- schema `2rasi.priolens.open14.bank-v0.3`;
- 14 families × 3 canonical IDs = 42;
- 27 retained live runtime paths;
- 15 planned `/priolens-research-assets/Open14-v03/...` paths with expected SHA-256;
- `runtimeReady: false`;
- explicit fail-closed start policy.

No claim is made that the 15 planned URLs are currently reachable.

## Planner / assigner provenance

The family planner is intentionally unchanged:
- file `p3_open14_planner_v02.mjs`;
- Git blob SHA `2dbf0dc7b5ce6bf17c1f7ee858d889a0c92d2be5`;
- plan schema `2rasi.priolens.p3.open14.plan-v0.2`;
- planner `cyclic-14x3-diff-1-4-slot-role-v0.2`.

The runtime no-repeat assigner is an exact textual copy of the already-smoked source:
- file `open14_no_repeat_assigner_v03.mjs`;
- Git blob SHA `851c42e2e2e815c4a707df8c0e21c1d947e2fcdd`;
- schema `2rasi.priolens.open14.exemplars-v0.3`;
- assigner `balanced-3x1-no-repeat-slot-v0.3`.

Do not invent a v0.3 identity for the unchanged family planner merely to make version numbers match. The changed exemplar assignment layer is separately versioned v0.3.

## Generated v0.3 participant runtime

Rather than manually editing the ~64 KB live `index.html`, feature branch contains:
- `build_from_v02.mjs`;
- guarded exact `replace-once` transformations;
- generated `priolens/open14-v03/index.html`.

The build intentionally starts from the current live v0.2 participant surface and changes only version-dependent runtime logic.

Key v0.3 changes:
1. import `assignOpen14ThreeExemplars` / `listThreeExemplarBankProblems`;
2. use separate next endpoint paths `/priolens-open14-v03-api/api.php` and `/priolens-open14-v03-api/progress.php`;
3. local draft key -> `priolens.open14.v03.draft`;
4. session schema -> `2rasi.priolens.open14.session-v0.3`;
5. `runtimeReady !== true` keeps Start disabled;
6. exemplar plan metadata stores v0.3 pattern/family assignment details;
7. family repetition uses the set of distinct canonical selected exemplar IDs, not legacy `-A/-B` suffixes;
8. result copy no longer assumes exactly two exemplars.

The builder fails if expected live-v0.2 source markers are missing or occur an unexpected number of times. This prevents silent patch drift.

## Runtime build + bank smoke

GitHub Actions workflow:
`.github/workflows/priolens-open14-v03-build.yml`

Run:
- ID `33754111649`;
- event: feature-branch push;
- conclusion: **SUCCESS**.

Successful steps included:
- guarded v0.3 index generation from live v0.2 source;
- actual v0.3 `bank.json` + assigner smoke;
- 1000 seeds;
- 42 unique IDs / 42 unique runtime paths in manifest;
- assignment audit = 42 exposures, zero exact exemplar repeats per seed;
- generated-index identity guard checks;
- generated index commit to the feature branch.

This is a **logic/manifest smoke**, not an HTTP asset smoke and not a participant mobile smoke.

## v0.3 backend source

Feature branch contains separate source validators:
- `priolens/open14-v03/server/api.php`;
- `priolens/open14-v03/server/progress.php`.

Intended separate deployment target:
`/priolens-open14-v03-api/`

They do not replace live `/priolens-open14-api/`.

The v0.3 final validator requires:
- `session-v0.3`;
- `bank-v0.3`;
- unchanged family-plan schema `plan-v0.2`;
- exemplar assigner schema `exemplars-v0.3`;
- 14 completed trials;
- 42 unique presented canonical exemplar IDs;
- each family exactly `01/02/03` once;
- no exact exemplar repeat;
- existing sufficiency contract `2rasi.priolens.sufficiency-v0.2`.

The existing database schema can keep v0.2 and v0.3 separable because it already stores session/bank/planner/assigner schema plus raw payload. No DB schema migration is required by this draft.

The v0.3 API source has not been deployed to Hostinger yet.

## Current hard blocker

Persistent Hostinger filesystem write is still unavailable from the current ChatGPT tool environment.

Prepared upload package remains:
- `priolens_open14_v03_new15_upload.zip`;
- bytes `923635`;
- SHA-256 `cfed237752163b5bf4d6227a2dce3c889dbcf1946fe6543947e898d159567481`;
- target `/priolens-research-assets/Open14-v03/`.

Until those binaries are uploaded and exact-byte HTTP hash checks pass:
- keep `runtimeReady:false`;
- do not merge next runtime to live;
- do not open external recruitment.

## Next execution queue

1. Upload the approved new-15 package to persistent Hostinger `/priolens-research-assets/Open14-v03/`.
2. Verify all 15 over HTTP and compare downloaded bytes to canonical SHA-256.
3. Verify the 27 retained paths over HTTP in the same full-42 pass.
4. Run full 42 pHash/text/watermark audit.
5. Deploy the separate v0.3 API source to `/priolens-open14-v03-api/` with existing secure DB config pattern.
6. Only after 1-5 pass, flip v0.3 `bank.json` to `runtimeReady:true` in the feature branch.
7. Run participant runtime smoke: LT + EN, autosave/resume, 14 choices, 6 sufficiency screens, final POST.
8. Run owner mobile 42-bank visual smoke, with BELONGING-03 as the explicit geometry WATCH.
9. Re-run no-repeat runtime smoke against the deployed participant surface.
10. Only after all pass consider merge/live replacement and later explicit `PILOT_OPENED_AT_UTC`.

## Research boundaries

Unchanged:
- Channel A is low-deliberation comparative visual choice, not subconscious truth;
- visual pull is not unmet need;
- RT is not psychological strength;
- there is no one Maslow/global need score;
- CARE visual giving and `CARE_SUPPORT_PRESENT` received/present support are not the same construct.
