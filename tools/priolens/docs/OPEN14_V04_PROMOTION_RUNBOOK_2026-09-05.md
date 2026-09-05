# PrioLens v0.4 — guarded live promotion runbook

Status: READY / DO NOT EXECUTE LIVE SWITCH WITHOUT EXPLICIT OWNER APPROVAL
Date: 2026-09-05

## Frozen candidate

Implementation repo:
`olemoz1977/omesg360`

Branch:
`feature/priolens-open14-v04`

Candidate SHA:
`3a70db37130ea5b1f76d30237fe4026a22749fa9`

Clean owner-preview deploy:
`33966471878` SUCCESS

Owner preview:
- LT: `https://omesg360.eu/priolens-open14-v04/?lang=lt&from=lt`
- EN: `https://omesg360.eu/priolens-open14-v04/?lang=en&from=com`

Runtime API:
- `/priolens-open14-v04-api/api.php`
- `/priolens-open14-v04-api/progress.php`

v0.2 remains intact and is the rollback target.

## Closed gates

- interpretation synthetic methodology audit: 10/10 PASS;
- A+ noClear specific-bridge suppression: PASS;
- CARE role-boundary guard: PASS;
- absent-theme injection guard: PASS;
- DIRECT vs RELATED wording strength: PASS;
- LT/EN semantic bridge parity: PASS;
- deployed source/API/remote bytes/module MIME/full mobile flow: PASS;
- headless one-A4 portrait PDF: PASS;
- owner real Android system print: ISO A4, 1 / 1: PASS.

## Pre-switch blocker

Confirm the actual production publish mechanism for `2rasi-web/hero-webgl`.

Current repo documentation conflicts:
- `PORTFOLIO_ROADMAP.md`: Hostinger Git auto-deployment stays OFF.
- `workers/workstyle-pilot/README.md`: `hero-webgl` autodeploys to Hostinger.

Do not infer the current mechanism from either stale statement. Promotion is not allowed until the publish path is known.

## Live pointer patch

Do not copy v0.4 over the v0.2 runtime.
Do not rename the v0.4 API.
Do not delete v0.2.

Only change the 2rasi PrioLens entry point.

### 1. `tools/priolens/landing-i18n.js`

Current:
`https://omesg360.eu/priolens-open14-v02/?from=${from}&lang=${lang}`

Target:
`https://omesg360.eu/priolens-open14-v04/?from=${from}&lang=${lang}`

This controls both participant start links.

### 2. `tools/priolens/index.html`

Change both static fallback start hrefs:
- v0.2 -> v0.4.

### 3. Cache token

Bump the `landing-i18n.js?v=...` query token in `tools/priolens/index.html`.

Reason:
a stale landing JS asset could otherwise keep sending some users to v0.2 after the HTML switch.

## Expected routing

LT:
`https://2rasi.lt/tools/priolens/`
- start -> `https://omesg360.eu/priolens-open14-v04/?from=lt&lang=lt`

EN:
`https://2rasi.com/tools/priolens/`
- start -> `https://omesg360.eu/priolens-open14-v04/?from=com&lang=en`

Language switch remains same-path on the 2rasi landing.

## Post-switch smoke

Do not announce promotion complete until all items pass.

### Entry routing
- 2rasi.lt PrioLens landing loads;
- 2rasi.com PrioLens landing loads;
- LT start has `from=lt&lang=lt`;
- EN start has `from=com&lang=en`;
- no entry link still points to v0.2 accidentally.

### v0.4 runtime
- intro boots on mobile;
- 14 MOST+LEAST trials complete;
- A+ path works when required;
- A+ noClear preserves repeated motifs without a forced interpretation bridge;
- Channel B all 12 items complete;
- B+ one-endpoint path works;
- multiple B endpoints remain supported;
- no-low-route remains supported;
- result opens directly on 12×12 matrix;
- A detail opens and returns correctly;
- B detail opens over visible matrix and closes back to it;
- final API save succeeds;
- completed result reload restores without duplicate final POST.

### Interpretation
- heading and non-diagnostic boundary visible;
- no forbidden hidden/true/subconscious/personality claims;
- strong bridge does not introduce absent motifs;
- CARE does not assign giver/receiver role;
- weak/no bridge uses non-forcing language;
- LT and EN both produce the same bridge-strength class for equivalent inputs.

### PDF
- Android/system Save as PDF remains A4;
- one page only;
- matrix + interpretation + exact 12-statement appendix visible.

### Cache / module delivery
- HTML/MJS/JSON v0.4 preview assets use no-cache/must-revalidate policy;
- .mjs MIME is JavaScript;
- runtime still calls only the isolated v0.4 API path.

### Rollback safety
- direct v0.2 URL still loads after promotion.

## Rollback

If any post-switch gate fails:

1. Revert `tools/priolens/landing-i18n.js` target v0.4 -> v0.2.
2. Revert both `tools/priolens/index.html` fallback hrefs v0.4 -> v0.2.
3. Bump the `landing-i18n.js` cache token again.
4. Publish through the same confirmed production mechanism.
5. Smoke both LT and EN landing starts.
6. Verify direct v0.2 runtime/API still works.
7. Leave v0.4 preview/API deployed for diagnosis.

Rollback must not delete v0.4 or mutate historical v0.2 data/runtime.

## Promotion decision

Current state:
**READY, AWAITING EXPLICIT OWNER APPROVAL.**

The owner's approval must be a clear instruction to perform the live switch, not merely approval of the preview, PDF or interpretation.
