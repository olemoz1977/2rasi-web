# WorkStyle pilot intake worker

Status: PREPARED, NOT CONNECTED TO THE LIVE FORM.

Purpose: receive anonymous WorkStyle cognitive-pilot sessions from `2rasi.com` and store them in Cloudflare D1 once the pilot moves beyond manual JSON exchange.

## Current boundary

The live form must continue to work without this worker. JSON export remains the fallback and audit path.

No participant name, email or employer is requested by the WorkStyle form. Free-text feedback can still contain information typed voluntarily by a participant, so do not ask participants to identify themselves in feedback.

Cloudflare infrastructure may retain operational request logs depending on account settings. Therefore public wording should not claim absolute anonymity. Preferred wording: `Vardo, el. pašto ar darbdavio neprašome.`

## Endpoint

- `GET /health`
- `POST /v1/session`

Allowed browser origins are currently:
- `https://2rasi.com`
- `https://www.2rasi.com`

The worker does not store request IP addresses in D1.

## D1

Create a D1 database, then apply `schema.sql`.

Example Wrangler workflow:

```bash
wrangler d1 create workstyle-pilot
cp wrangler.toml.example wrangler.toml
# paste the returned database_id into wrangler.toml
wrangler d1 execute workstyle-pilot --file=schema.sql --remote
wrangler deploy
```

Do not commit a generated `wrangler.toml` if it later contains environment-specific details that should remain private. The example file is safe to keep in the public repository.

## GitHub deployment helper

A manual-only GitHub Actions workflow now exists at:

`.github/workflows/workstyle-pilot-worker.yml`

It does not run on pushes. It requires these repository secrets before a manual run:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `WORKSTYLE_D1_DATABASE_ID`

The workflow builds an ephemeral `wrangler.jsonc`, validates it, applies `schema.sql` to the configured D1 database and deploys the Worker. The generated config is not committed.

The D1 database itself remains a one-time Cloudflare account resource and must exist before the workflow is run.

## Prepared frontend intake

The explicit-submit client is prepared but intentionally not loaded by the live cognitive form yet:

- `tools/workstyle15/v07-intake-config.js` — disabled activation config;
- `tools/workstyle15/v07-intake-client.js` — explicit `Pateikti piloto duomenis` flow with retry and JSON fallback messaging.

When activated, the client reads the same LT-E browser session that JSON export uses, requires a completed 34-response session, sends one payload, and stores only the returned receipt state locally. Repeated submission is safe because the Worker upserts by `sessionId`.

Do not set `enabled: true` or load the intake client from `v07-cognitive.html` until the activation gate below has passed.

## Frontend activation gate

Do not add automatic submission to `v07-cognitive.html` until all of these are true:

1. Worker deployment exists and `/health` responds.
2. D1 insert has been manually verified with a synthetic session.
3. CORS from `https://2rasi.com` is verified.
4. Participant-facing privacy copy is updated from `local only` to `submitted for pilot analysis with consent`.
5. JSON export remains available as fallback.

Recommended frontend flow after activation:

`Finish -> optional feedback -> Submit pilot data -> received confirmation`

The form should not silently submit a research session without a clear participant action during the cognitive-pilot phase.

Activation should be a small, auditable change:
1. set the verified `POST /v1/session` URL in `v07-intake-config.js`;
2. set `enabled: true`;
3. load `v07-intake-config.js` and `v07-intake-client.js` from `v07-cognitive.html`;
4. keep the JSON export button visible;
5. repeat the mobile-first live smoke check before invitations.

## Data model

D1 stores both:
- compact server-calculated metadata for quick review;
- the original JSON payload for reproducible analysis.

Stored metadata includes version/language, completion state, response count, active first-response time, break time, optional broad role context and cognitive issue counts.

## Abuse / scale boundary

This is adequate for a small invited pilot. Before a broad public launch add rate limiting / abuse controls and a retention policy. Do not treat this worker as production-grade hiring-assessment infrastructure.
