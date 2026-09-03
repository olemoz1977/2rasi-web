# Open14 v0.3.1 owner remediation — deployed technical PASS

Date: 2026-09-03
Status: TECHNICAL PASS / OWNER MOBILE VISUAL-UX RETEST PENDING / EXTERNAL RECRUITMENT CLOSED
Runtime repo: `olemoz1977/omesg360`
Runtime branch: `feature/priolens-open14-v03`
Owner preview: `https://omesg360.eu/priolens-open14-v03/?lang=lt&from=lt`

This checkpoint supersedes the earlier same-day instruction to retest the pre-remediation v0.3 preview. The owner mobile review identified five concrete stimulus problems, so those stimuli were remediated first and promoted as a versioned bank revision.

## Boundary

- Live v0.2 remains untouched.
- Public routing is unchanged.
- External recruitment remains CLOSED.
- Family taxonomy is unchanged.
- Family planner remains `cyclic-14x3-diff-1-4-slot-role-v0.2`.
- Exemplar assigner remains `balanced-3x1-no-repeat-slot-v0.3`.
- MOST+LEAST protocol remains `most+least-v0.3`.
- Session schema remains `2rasi.priolens.open14.rank-session-v0.3`.
- Stable exemplar IDs remain unchanged.

Changing stimulus pixels without changing bank identity would mix old and new owner sessions. Therefore the remediated stimulus set is identified as:

`2rasi.priolens.open14.bank-v0.3.1`

The new draft namespace is:

`priolens.open14.v031.rank.draft`

This prevents a draft created with bank-v0.3 pixels from resuming under bank-v0.3.1 pixels.

## Five owner-remediated exemplars

1. `REST-01`
   - runtime: `/priolens-research-assets/Open14-v03-owner-remediation-v01/rest_01_slippers_640.webp`
   - SHA-256: `16af674632e9859d63003ca777aa21253fe6e975338ec5a269f44203cbce9524`
   - mechanism: slippers / immediate rest-recovery cue; distracting rocking-horse content removed by crop.

2. `RESOURCE-03`
   - runtime: `/priolens-research-assets/Open14-v03-owner-remediation-v01/resource_03_food_640.webp`
   - SHA-256: `5d0cd65c93353af46442516c91b61e736d0abe522f6a2315e750b7841f4c480d`
   - mechanism: prepared, available, usable/rewarding resource; replaces ambiguous raw wood/materials read.

3. `KNOWLEDGE-02`
   - runtime: `/priolens-research-assets/Open14-v03-owner-remediation-v01/knowledge_02_online_learning_640.webp`
   - SHA-256: `d5b243976d3533fedff1b48b8338d6102d7ed9ef59bd74205394e0543ddb65e3`
   - mechanism: active online lesson plus handwritten notes; replaces generic laptop/work read.

4. `OPPORTUNITY-01`
   - runtime: `/priolens-research-assets/Open14-v03-owner-remediation-v01/opportunity_01_workbench_640.webp`
   - SHA-256: `2c2ca25fd5c5b7fd3a4552c1c1298accc78a8c7534651ff3f74821d3d49df168`
   - mechanism: useful prepared materials plus open work surface; replaces empty-market-stall ambiguity.

5. `RECOGNITION-02`
   - runtime: `/priolens-research-assets/Open14-v03-owner-remediation-v01/recognition_02_recrop_640.webp`
   - SHA-256: `e7a765de3ac1401b15aac42e43e21cbfc674fe3c3e4f9cb5fa17e0d1142fc612`
   - mechanism unchanged: teacher/student high-five; crop shifted to retain both people and reduce dead-wall asymmetry.

## Asset evidence

Owner-remediation asset materialization + isolated Hostinger upload:
- workflow run `33785859324` = SUCCESS;
- 5/5 WebP outputs = 640×640;
- 5 unique SHA-256;
- live HTTP bytes matched expected SHA-256.

The five files live in the immutable directory:
`/priolens-research-assets/Open14-v03-owner-remediation-v01/`

## Bank promotion and no-repeat evidence

Bank promotion:
- `bank-v0.3` -> `bank-v0.3.1`;
- promotion workflow run `33790490418` = SUCCESS;
- bank was deliberately set `runtimeReady:false` during migration;
- 42 unique exemplar IDs;
- 42 unique runtime paths;
- 1000-seed no-repeat smoke PASS;
- no family-planner or exemplar-assigner version inflation was introduced.

## Full-42 hosted audit

Workflow run `33790603165` = SUCCESS.

Results:
- 42/42 HTTP reachable and decodable;
- 42/42 square runtime assets;
- 42 unique exemplar IDs;
- 42 unique runtime paths;
- 42 unique exact binary SHA-256 values;
- 18/18 SHA-pinned assets matched expected hashes;
- pHash watch distance <=12: 0 pairs;
- closest pHash distance: 16;
- stock-watermark keyword OCR hits: 0.

This is the current full-bank asset gate. Earlier full42 runs describe the pre-remediation bank and are historical evidence only.

## API compatibility and deployed evidence

The isolated v0.3 API continues using session schema:
`2rasi.priolens.open14.rank-session-v0.3`.

For migration safety, the API accepts both:
- `2rasi.priolens.open14.bank-v0.3`;
- `2rasi.priolens.open14.bank-v0.3.1`.

This preserves old owner-session compatibility while the stored `bank_schema` still identifies which pixel bank was used.

API source compatibility migration:
- run `33790995808` = SUCCESS.

Isolated API deployment:
- run `33791065786` = SUCCESS;
- remote `api.php` and `progress.php` matched repo byte-for-byte through FTP verification;
- `config.php` remained protected and was not overwritten;
- v0.2 API was not touched.

Deployed API smoke:
- run `33791193830` = SUCCESS;
- bank-v0.3.1 progress persistence PASS;
- bank-v0.3.1 final persistence PASS;
- progress-after-final guard PASS;
- MOST=LEAST rejection PASS;
- old positive-only session-schema rejection PASS;
- forbidden-origin rejection PASS;
- legacy bank-v0.3 compatibility PASS.

## Runtime build and deployment

Source bank API gate / build-ready transition:
- run `33791262545` = SUCCESS.

v0.3.1 guarded participant build:
- run `33791323772` = SUCCESS;
- 1000-seed no-repeat smoke PASS;
- draft namespace `priolens.open14.v031.rank.draft` PASS;
- MOST+LEAST / LEAST-aware result-layer guards PASS;
- old v0.3 draft namespace absent.

Atomic isolated owner-preview deployment:
- run `33791409529` = SUCCESS;
- deployed `index.html`, `bank.json`, and `stimulus-bank.html` together;
- live index matched source byte-for-byte;
- live bank matched source byte-for-byte;
- live bank schema = `2rasi.priolens.open14.bank-v0.3.1`;
- live bank `runtimeReady:true`;
- owner stimulus-bank page matched source byte-for-byte.

## Deployed participant technical smoke

Workflow run `33791582358` = SUCCESS.

390×844 Chromium checks passed:
- LT start gate;
- bank-v0.3.1 payload identity;
- MOST -> LEAST two-stage interaction;
- MOST lock and participant-facing badge;
- `Abu likę panašiai` path;
- reload after MOST and resume directly into LEAST;
- new `priolens.open14.v031.rank.draft` local-storage namespace;
- old `priolens.open14.v03.rank.draft` not written;
- 14 triads;
- 42 unique presented exemplar IDs;
- exact-image repeat = 0;
- six Channel-B pages / 12 sufficiency responses;
- final MOST+LEAST payload with `bank-v0.3.1`;
- focused EN start / `.com` return target / FIRST -> LEAST transition.

Final gate metadata sync:
- run `33791761554` = SUCCESS;
- finalized `bank.json` was synced to Hostinger and matched repo byte-for-byte;
- `participantPreviewDeployed:true`;
- `participantPreviewStaticSmokePassed:true`;
- `participantPreviewChromiumSmokePassed:true`;
- `ownerMobileVisualSmokePassed:false` remains intentionally open.

## Current gate

Technical v0.3.1 owner preview: PASS.

Remaining gate: OWNER REAL-PHONE VISUAL/UX RETEST.

The owner should specifically inspect:
1. `REST-01` — slippers read immediately as rest/recovery; no rocking-horse distraction.
2. `RESOURCE-03` — prepared food reads as an available usable/rewarding resource without becoming an obviously dominant food cue.
3. `KNOWLEDGE-02` — active learning is clear; not generic computer work.
4. `OPPORTUNITY-01` — reads as an available possibility/use opportunity; not merely material resources or a blank desk.
5. `RECOGNITION-02` — both people and high-five are legible; reduced dead-wall imbalance.
6. `BELONGING-03` — still reads as shared-group/togetherness rather than a dyad.
7. Result rendering — 3/3 shows 3 distinct exemplar images, 2/3 shows 2, no awkward mobile overflow.
8. MOST -> LEAST interaction still feels natural on the real device.

If any of these fail, record the concrete image/interaction problem before changing the bank again.

If they pass, record owner PASS. Do not replace live v0.2 and do not open external recruitment automatically; those remain separate explicit decisions.
