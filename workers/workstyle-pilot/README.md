# WorkStyle pilot intake worker

Status: ACTIVATION-READY, FRONTEND STILL GATED UNTIL VERIFIED DEPLOYMENT.

Purpose: receive WorkStyle cognitive-pilot sessions from `2rasi.com` / `2rasi.lt` and store them in Cloudflare D1 once the verified intake endpoint is activated.

## Current boundary

The live form must continue to work without this worker. JSON export remains the fallback and audit path.

No participant name, email or employer is requested by the WorkStyle form. Free-text feedback can still contain information typed voluntarily by a participant, so do not ask participants to identify themselves in feedback.

Cloudflare infrastructure may retain operational request logs depending on account settings. Therefore public wording should not claim absolute anonymity. Preferred wording: `Vardo, el. pašto ar darbdavio neprašome.`

## Endpoint

- `GET /health`
- `POST /v1/session`

Allowed browser origins:
- `https://2rasi.com`
- `https://www.2rasi.com`
- `https://2rasi.lt`
- `https://www.2rasi.lt`

The worker does not store request IP addresses in D1.

## GitHub deployment and activation

The manual-only workflow is:

`.github/workflows/workstyle-pilot-worker.yml`

Run it from `hero-webgl`.

It requires:

- repository secret `CLOUDFLARE_API_TOKEN`;
- repository variable `CLOUDFLARE_ACCOUNT_ID`.

The Cloudflare token is account-scoped and needs D1 Write plus Workers Scripts Write for the selected account. The workflow normalizes the secret defensively and then uses the Cloudflare REST API directly instead of Wrangler authentication.

The workflow deliberately performs the activation gate itself:

1. Validate the GitHub secret and account id.
2. Verify D1 API access with the token.
3. Find an existing `workstyle-pilot` D1 database or create it.
4. Apply `schema.sql` through the D1 query API.
5. Upload the `workstyle-pilot-intake` Worker with its D1 binding through the Workers API.
6. Enable the Worker on the account `workers.dev` subdomain.
7. Verify `GET /health`.
8. Verify CORS from `https://2rasi.lt` and `https://2rasi.com`.
9. POST `test-session-v3.json`.
10. Verify that the synthetic session reached D1.
11. Delete the synthetic row so pilot data stays clean.
12. If `activate_frontend=true`, write the verified `/v1/session` URL into `tools/workstyle15/v07-intake-config.js`, set `enabled: true`, refresh intake asset cache-busters, commit and push that activation to `hero-webgl`.

Because Hostinger autodeploys `hero-webgl`, the activation commit then reaches the live 2rasi site through the normal publish path.

No account id, D1 id, API token or generated environment config is committed.

## Frontend intake

The LT-E form loads both intake files, but the config remains disabled until the deployment workflow passes every backend check:

- `tools/workstyle15/v07-intake-config.js`
- `tools/workstyle15/v07-intake-client.js`

With `enabled: false`, these files do not change the live questionnaire UI.

After verified activation, the completion flow becomes:

`Finish -> optional feedback -> Pateikti piloto duomenis -> Ačiū, sesija gauta`

The participant still makes an explicit submission choice. The cognitive pilot does not silently transmit a completed research session.

The client:
- requires a completed 34-response LT-E session;
- sends the same local session used by JSON export;
- omits browser credentials from the cross-origin request;
- uses a request timeout and retry path;
- stores only the returned submission receipt in the local session;
- keeps JSON export visible as fallback;
- treats repeated submission as safe because the Worker upserts by `sessionId`.

When active, participant-facing privacy copy says that answers, marked ambiguities and active response time are submitted for pilot analysis if the participant chooses to submit. It does not claim absolute anonymity.

## Data model

D1 stores both:
- compact server-calculated metadata for quick review;
- the original JSON payload for reproducible analysis.

Stored metadata includes version/language, completion state, response count, active first-response time, break time, optional broad role context and cognitive issue counts.

## Manual fallback

If GitHub Actions is unavailable, the Worker can still be deployed manually through the Cloudflare dashboard or API using the same `src/index.js`, `schema.sql` and D1 binding described above. Avoid committing any API token or account-specific credentials.

## Abuse / scale boundary

This is adequate for a small invited cognitive pilot. Before a broad public launch add rate limiting / abuse controls and a retention policy. Do not treat this worker as production-grade hiring-assessment infrastructure.
