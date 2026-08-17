# 2Pair public launch checkpoint

Updated: 2026-08-17

## Priority
Finish the 2Pair public participation path before returning to GLA360 / OMESG360Bot product work.

## Research satellites

### Wave 1
- Purpose: validate pair balance and other choice mechanics.
- Public path: https://omesg360.eu/wave1/
- Temporary research satellite, not the final 2Pair product.

### Calibration v0.1
- Purpose: mechanical rapid-choice / selection-timing and UX calibration.
- Live path: https://omesg360.eu/conflictlab/releases/calibration-v0.1/
- External participation is authorized by ConflictLab activation record `docs/privacy/CALIBRATION_ACTIVATION_RECORD_v0.1.md` on branch `arch/result-v0.2-implementation-baseline`.
- Activation record commit: `98eb3b17042cf1d818bbb611b3c0287ee4399ab2`.
- Study boundary: MECHANICAL_TIMING_ONLY. No Gate D/E, no validated CS/CR mapping, no psychological interpretation of latency, no personality/employment/health result.
- 18+ declaration required for research upload.
- Participant may continue locally without research upload.
- Research DB stores pseudonymous timing/technical telemetry; reflection text and intensity remain local-only.
- Active pseudonymous DB retention: max 90 days.
- First external invitation had not yet been issued when activation was recorded.

## 2rasi web state
Repository: `olemoz1977/2rasi-web`
Production/default branch: `hero-webgl`

Implemented on 2026-08-17:
- shared domain language layer: `.com` -> EN, `.lt` -> LT;
- same-path EN/LT switch;
- homepage EN/LT copy;
- 2Pair EN/LT copy;
- mobile hero hints localized;
- 2Pair page aligned with actual Wave / Calibration roles;
- Calibration direct path restored after confirmed activation;
- concise Calibration participant boundary + privacy link added.

Relevant commits:
- `7e551ab2aaea9c5cfe7c4e934d87deb04fb1f857` shared i18n layer
- `61127998c51a9d442bf96a94a8240c844470638d` localized hero interaction hints
- `2388dc94b7a09b4a076f9570ddf12b6f2725506f` initial 2Pair status alignment
- `06a516a6f5a47b6a6750cfaec175ebd78e0f8569` homepage/2Pair language-state alignment
- `0cd592d9d17345fc98acf380d5dcb97cfaf08283` authorized Calibration entry + participant boundary
- `7132e8f8ffa068a969e1d464f624fc41ca391363` post-i18n Calibration launch status
- `0094af712b64978c094d751a1079a1425ebef01b` final 2Pair page script wiring

## Remaining before invitation
1. Deploy/reload current `hero-webgl` revision on Hostinger and verify the live bytes.
2. Verify `2rasi.com` resolves to EN and `2rasi.lt` resolves to LT using the same path `/tools/2pair/`.
3. Live smoke only the public entry path and links (not the already-frozen Calibration measurement protocol):
   - homepage -> 2Pair;
   - 2Pair -> Calibration;
   - privacy link;
   - EN/LT switch;
   - mobile layout.
4. If those pass, issue the first real Calibration invitation. Do not change Calibration participant-facing protocol after collection starts without a new protocol/version delta.

## Scope guard
Do not reopen GLA360, OMESG360Bot, respondent-email architecture, or unrelated tool redesign while completing this launch path unless they block 2Pair directly.
