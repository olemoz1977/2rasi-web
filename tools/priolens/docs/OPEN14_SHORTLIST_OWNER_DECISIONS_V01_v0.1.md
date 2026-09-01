# PrioLens Open14 shortlist owner decisions v01

Status: ACTIVE CHECKPOINT / TWO CROPS PENDING / CONTROL-A SEARCH REQUIRED
Date: 2026-09-01

## Owner decisions

From curated shortlist v01:
- REST-B = B -> `Gallery/20260730_232752414.png`
- ORDER-A = B -> `Gallery/file_000000003c0c81fb80655b530662c0ee.png`
- ORDER-B = C -> `Gallery/file_00000000fdf0821099271633f3930bad.png`
- CONTROL-A = reject
- KNOWLEDGE-B = B -> `Gallery/20260730_022124068.png`

## Applied

ORDER-A and ORDER-B were already square. They were normalized to 640x640 WebP without crop/distortion and switched into the active bank:
- ORDER-A -> `/priolens-research-assets/Open14-remediation-v02/order-a_owner-b_v01.webp`
- ORDER-B -> `/priolens-research-assets/Open14-remediation-v02/order-b_owner-c_v01.webp`

OCR watermark keyword screen found no `kling`, `gemini`, `openai` hits on the four selected source images.

CONTROL-A remains on its old non-pilot-safe runtime only as a placeholder and is now explicitly `SEARCH_REQUIRED_AFTER_SHORTLIST_REJECT`.

## Crop review pending

REST-B and KNOWLEDGE-B sources are portrait 768x1360. Top/center/bottom 1:1 derivatives were prepared at 640x640 WebP.

Owner crop review route:
`https://omesg360.eu/priolens-shortlist-crop-review-v01/`

Need one choice for each:
- REST-B = top / center / bottom
- KNOWLEDGE-B = top / center / bottom

Do not switch those two until owner crop review is complete.

## Technical verification

Initial apply workflow:
`33473407345`
- asset fetch SUCCESS
- audit/crop generation SUCCESS
- upload SUCCESS
- bank patch/push SUCCESS
- final smoke step failed only because one `curl -I` HEAD request returned 403

Follow-up GET smoke:
`33473495639`
- all selected remediation assets HTTP 200
- crop review HTTP 200
- live bank HTTP 200
- ORDER-A path present
- ORDER-B path present
- CONTROL-A reject status present
- SUCCESS

Therefore the earlier 403 was a smoke-method issue, not a failed asset/deploy state.

## Immediate next

1. Owner selects REST-B crop.
2. Owner selects KNOWLEDGE-B crop.
3. Switch those two reviewed derivatives into bank and smoke.
4. Search again for CONTROL-A with a new concept/candidate set; do not generate unless explicitly requested.
5. Then review BELONGING-B and OPPORTUNITY-A.
6. Run final 28/28 geometry + watermark + semantic + reachability audit.
7. Final mobile visual smoke.
8. Fix sufficiency null/coverage display.
9. Preserve CARE visual-vs-received-support asymmetry explicitly.
10. Configure and smoke 90-day cleanup cron.
11. Only then consider external formative mini-pilot.

External recruitment remains CLOSED.
