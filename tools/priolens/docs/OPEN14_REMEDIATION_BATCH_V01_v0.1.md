# PrioLens Open14 remediation batch v01

Status: ACTIVE CHECKPOINT
Date: 2026-09-01

## What changed

The first concrete stimulus-remediation batch is complete.

### SAFETY-B resolved

Current runtime path was:
`/priolens-research-assets/Gallery/20260829_233727670.png`

Clean Gallery equivalent checked:
`/priolens-research-assets/Gallery/S13.webp`

Verification:
- 520x520 square;
- perceptual hash distance to the previous SAFETY-B = 0;
- no watermark keyword detected in OCR pass.

Decision:
- switch SAFETY-B to `S13.webp`.

This switch is now present in `olemoz1977/omesg360/priolens/open14-v02/bank.json` and was deployed to the live runtime.

### AUTONOMY-A resolved

Accepted forked-path candidate:
`/priolens-research-assets/Gallery/file_00000000cc8c81f4a927534c8316290c.png`

Verification:
- 1254x1254 square;
- no watermark keyword detected in OCR pass;
- owner review had already identified it as a strong self-direction candidate.

Working first-glance target:
`pasirinkti savo kryptį`

Decision:
- replace old AUTONOMY-A tool-selection image with the forked-path candidate.

This switch is now present in `bank.json` and deployed live.

## Human review package now live

Review route:
`https://omesg360.eu/priolens-remediation-review-v01/`

The review page contains four unresolved human-judgement tasks.

### REST-A crop review

Accepted source candidate:
`Gallery/20260730_233524155.png`

Source geometry:
- 768x1360 portrait.

Three 640x640 WebP derivatives are available:
- top;
- center;
- bottom.

Do not switch runtime until the owner selects the crop that best preserves:
`persijungti į poilsį / namų komfortą`.

### KNOWLEDGE-A crop review

Accepted source candidate:
`Gallery/20260730_233054250.png`

Source geometry:
- 768x1360 portrait.

Three 640x640 WebP derivatives are available:
- top;
- center;
- bottom.

Do not switch runtime until the owner selects the crop that best preserves:
`ieškoti žinių / mokytis`.

### CONNECTION-A watermark cleanup review

Current semantic stimulus remains accepted.
Original OCR detected a KlingAI watermark.

Two cleanup derivatives are available:
- small-mask inpaint;
- medium-mask inpaint.

OCR on both cleanup derivatives no longer detects the KlingAI string.

Human visual review is still required before bank switch because cleanup must not create a visible artificial patch.

### CONNECTION-B watermark cleanup review

Current semantic stimulus remains accepted.
Owner visually confirmed a watermark during smoke.

Two cleanup derivatives are available:
- small-mask inpaint;
- medium-mask inpaint.

OCR did not reliably identify the original watermark, so automated text disappearance is not sufficient evidence. Human visual review is required.

## Technical deployment facts

Remediation workflow run:
`33469791120`

Result:
- source assets downloaded from Hostinger;
- candidate audit succeeded;
- derivatives created;
- review page deployed;
- SAFETY-B and AUTONOMY-A bank switches committed as `edee4957651b7d82c15b6206af83fe5060c2865f`.

Because a GitHub Actions token push does not trigger the normal downstream runtime workflow, the current bank was then explicitly deployed to the live Open14 runtime.

Live bank deployment run:
`33469946684`

Smoke verified both live paths:
- SAFETY-B -> `S13.webp`;
- AUTONOMY-A -> forked-path candidate.

## Immediate next owner action

Open:
`https://omesg360.eu/priolens-remediation-review-v01/`

Return four decisions only:
1. REST-A = top / center / bottom;
2. KNOWLEDGE-A = top / center / bottom;
3. CONNECTION-A = small / medium / reject cleanup;
4. CONNECTION-B = small / medium / reject cleanup.

After those decisions:
1. switch accepted REST-A and KNOWLEDGE-A derivatives into `bank.json`;
2. switch accepted CONNECTION cleanup derivatives;
3. continue search for REST-B, ORDER-A, ORDER-B, CONTROL-A and KNOWLEDGE-B;
4. separately review BELONGING-B and OPPORTUNITY-A;
5. run final 28/28 geometry + watermark + semantic + reachability audit;
6. run one final mobile visual smoke;
7. then fix sufficiency `null` / coverage display;
8. preserve CARE visual-vs-received-support asymmetry explicitly;
9. configure and smoke 90-day cleanup cron;
10. only then decide the first small external formative pilot.

External recruitment remains CLOSED.
