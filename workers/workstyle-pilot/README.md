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

## Data model

D1 stores both:
- compact server-calculated metadata for quick review;
- the original JSON payload for reproducible analysis.

Stored metadata includes version/language, completion state, response count, active first-response time, break time, optional broad role context and cognitive issue counts.

## Abuse / scale boundary

This is adequate for a small invited pilot. Before a broad public launch add rate limiting / abuse controls and a retention policy. Do not treat this worker as production-grade hiring-assessment infrastructure.
