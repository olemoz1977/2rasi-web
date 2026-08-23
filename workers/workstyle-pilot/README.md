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

It requires one repository secret:

- `CLOUDFLARE_API_TOKEN`

The token must be able to read the accessible Cloudflare account and manage Workers Scripts and D1. The workflow resolves `CLOUDFLARE_ACCOUNT_ID` itself through the Cloudflare API, so a separate account-id secret is not required.

The workflow deliberately performs the activation gate itself:

1. Resolve the Cloudflare account from the API token.
2. Find an existing `workstyle-pilot` D1 database or create it.
3. Build an ephemeral Wrangler config with the resolved D1 id.
4. Dry-run the Worker bundle.
5. Apply `schema.sql` to remote D1.
6. Deploy `workstyle-pilot-intake` to `workers.dev`.
7. Verify `GET /health`.
8. Verify CORS from `https://2rasi.lt` and `https://2rasi.com`.
9. POST `test-session-v3.json`.
10. Verify that the synthetic session reached D1.
11. Delete the synthetic row so pilot data stays clean.
12. If `activate_frontend=true`, write the verified `/v1/session` URL into `tools/workstyle15/v07-intake-config.js`, set `enabled: true`, commit and push that activation to `hero-webgl`.

Because Hostinger autodeploys `hero-webgl`, the activation commit then reaches the live 2rasi site through the normal publish path.

No generated Wrangler config, account id or D1 id is committed.

## Frontend intake

The LT-E form now loads both intake files, but the config remains disabled until the deployment workflow passes every backend check:

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

## Manual Wrangler fallback

If GitHub Actions is unavailable, the same worker can still be deployed manually:

```bash
wrangler d1 create workstyle-pilot
cp wrangler.toml.example wrangler.toml
# paste the returned database_id into wrangler.toml
wrangler d1 execute workstyle-pilot --file=schema.sql --remote
wrangler deploy
```

Do not commit a generated `wrangler.toml` if it contains environment-specific details.

## Abuse / scale boundary

This is adequate for a small invited cognitive pilot. Before a broad public launch add rate limiting / abuse controls and a retention policy. Do not treat this worker as production-grade hiring-assessment infrastructure.
