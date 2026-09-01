# PrioLens Open14 remediation batch v01

Status: ACTIVE CHECKPOINT
Date: 2026-09-01

## What changed

The first concrete stimulus-remediation batch is complete and the owner review decisions from the remediation page have now been applied.

## Resolved and live

### SAFETY-B

Previous runtime:
`/priolens-research-assets/Gallery/20260829_233727670.png`

Current runtime:
`/priolens-research-assets/Gallery/S13.webp`

Verification:
- 520x520 square;
- perceptual hash distance to previous SAFETY-B = 0;
- no watermark keyword detected in OCR pass.

Status:
`CLEAN_EQUIVALENT_PHASH0`

### AUTONOMY-A

Previous runtime:
`/priolens-research-assets/Gallery/S05.webp`

Current runtime:
`/priolens-research-assets/Gallery/file_00000000cc8c81f4a927534c8316290c.png`

Verification:
- 1254x1254 square;
- no watermark keyword detected in OCR pass.

Working first-glance target:
`pasirinkti savo kryptį`

Status:
`OWNER_ACCEPTED_CANDIDATE_SWITCHED`

### REST-A

Accepted source candidate:
`/priolens-research-assets/Gallery/20260730_233524155.png`

Source geometry:
768x1360 portrait.

Owner reviewed top / center / bottom 1:1 derivatives and selected:
`bottom`

Current runtime:
`/priolens-research-assets/Open14-remediation-v01/rest-a_sq_bottom_v01.webp`

Working first-glance target:
`persijungti į poilsį / namų komfortą`

Status:
`OWNER_ACCEPTED_REPLACEMENT_SWITCHED`

Important history:
- old REST-A image had been created for classic-shoes vs sneakers choice;
- that old semantic assignment to REST is superseded and must not be used in interpretation.

### KNOWLEDGE-A

Accepted source candidate:
`/priolens-research-assets/Gallery/20260730_233054250.png`

Source geometry:
768x1360 portrait.

Owner reviewed top / center / bottom 1:1 derivatives and selected:
`top`

Current runtime:
`/priolens-research-assets/Open14-remediation-v01/knowledge-a_sq_top_v01.webp`

Working first-glance target:
`ieškoti žinių / mokytis`

Status:
`OWNER_ACCEPTED_REPLACEMENT_SWITCHED`

### CONNECTION-A

Original runtime:
`/priolens-research-assets/Gallery/S03.webp`

Original issue:
KlingAI watermark detected.

Owner reviewed small-mask and medium-mask inpaint variants and selected:
`small`

Current runtime:
`/priolens-research-assets/Open14-remediation-v01/connection-a_clean_small_v01.webp`

Status:
`HUMAN_ACCEPTED_WATERMARK_CLEANUP_SMALL`

### CONNECTION-B

Original runtime:
`/priolens-research-assets/Gallery/20260829_235204397.png`

Original issue:
watermark visually confirmed during owner smoke.

Owner reviewed small-mask and medium-mask inpaint variants and selected:
`small`

Current runtime:
`/priolens-research-assets/Open14-remediation-v01/connection-b_clean_small_v01.webp`

Status:
`HUMAN_ACCEPTED_WATERMARK_CLEANUP_SMALL`

## Technical deployment facts

Initial remediation workflow run:
`33469791120`

That run:
- downloaded the candidate assets from Hostinger;
- verified SAFETY-B and AUTONOMY-A;
- created REST-A and KNOWLEDGE-A crop derivatives;
- created CONNECTION-A/B cleanup derivatives;
- deployed the human review page.

Initial verified bank switch commit:
`edee4957651b7d82c15b6206af83fe5060c2865f`

Owner selection application run:
`33470516649`

Result:
- REST-A bottom applied;
- KNOWLEDGE-A top applied;
- CONNECTION-A small applied;
- CONNECTION-B small applied;
- `bank.json` deployed to the live Open14 runtime;
- all four accepted asset URLs returned HTTP 200;
- live `bank.json` smoke verified all four new paths.

Technical active bank:
`olemoz1977/omesg360/priolens/open14-v02/bank.json`

Owner-readable bank:
`https://omesg360.eu/priolens-open14-v02/stimulus-bank.html`

## Remaining unresolved stimulus work

### Replace / search

- REST-B
  - current image has two watermarks;
  - replacement should use a different restoration mechanism from REST-A rather than duplicating home-comfort.

- ORDER-A
  - preferred direction: tool shadow board / outlined assigned tool positions;
  - first-glance principle: `kiekvienas daiktas turi savo vietą`.

- ORDER-B
  - preferred direction: clearly marked parking spaces / assigned zones;
  - first-glance principle: `erdvė suskirstyta į aiškiai paskirtas vietas`.

- CONTROL-A
  - current central instrument looks artificial;
  - search for a familiar, credible real control where one action visibly regulates state / flow / outcome.

- KNOWLEDGE-B
  - current `pamatyti aiškiau / daugiau` probe is too broad;
  - search for active digital learning / understanding rather than generic computer use.

### Hold / compare

- BELONGING-B
  - HOLD because warmth / steam is visually asymmetric and may weaken togetherness reading.

- OPPORTUNITY-A
  - HOLD / search for a clearer immediate valuable possibility that can be acted on now.

## Current family-level working summary

- REST: A resolved; B replace.
- RESOURCE: A/B pass.
- SAFETY: A/B pass; B now clean equivalent.
- ORDER: A/B replace.
- CONNECTION: A/B retained and cleaned.
- BELONGING: A pass; B HOLD.
- CARE: A/B pass.
- AUTONOMY: A/B pass; A replaced with forked-path candidate.
- CONTROL: A replace; B pass.
- RECOGNITION: A pass; B retained as boundary probe.
- MASTERY: A/B pass.
- EXPLORATION: A/B pass.
- KNOWLEDGE: A resolved; B replace/search.
- OPPORTUNITY: A HOLD/search; B pass.

## Immediate next action

Do not run another owner interpretation session yet.

Continue stimulus remediation in this order:
1. search Gallery / existing assets for REST-B, ORDER-A, ORDER-B, CONTROL-A and KNOWLEDGE-B;
2. compare BELONGING-B and OPPORTUNITY-A against any stronger existing candidates;
3. only if strong existing candidates do not exist, define new stimulus briefs before generating anything;
4. normalize every newly accepted non-square asset to reviewed 1:1 derivative;
5. run final 28/28 audit: geometry + watermark + semantic status + runtime reachability;
6. run one final mobile visual smoke;
7. fix sufficiency `null` / coverage display;
8. keep CARE visual-vs-received-support self-report asymmetry explicit;
9. configure and smoke 90-day cleanup cron;
10. only then decide first external formative mini-pilot.

External recruitment remains CLOSED.
