# PrioLens AI Review Harness v0.1

Status: IMPLEMENTED / NOT DEPLOYED
Date: 2026-08-31

## Purpose

Replace repeated phone copy-paste across Claude, Grok and Gemini with one small research harness while preserving the blind-review discipline used in PrioLens.

The harness is research infrastructure. It does not validate constructs and must not turn model agreement into evidence of human psychological meaning.

## Architecture

```text
mobile browser
  -> Vercel-hosted harness page
  -> /api/review serverless function
  -> Vercel AI Gateway
     -> Claude
     -> Grok
     -> Gemini
```

Vercel AI Gateway is used as the model-access plane so provider credentials do not need to be stored in the browser or GitHub repository.

Current default reviewer slots:
- `claude` -> `anthropic/claude-opus-5`
- `grok` -> `xai/grok-4.6` with one compatibility fallback to `spacexai/grok-4.6` if the catalog slug differs;
- `gemini` -> `google/gemini-3.6-flash`.

Model IDs are environment-overridable because provider catalogs change.

## Non-negotiable research behavior

### Stage 1

Each reviewer receives only the blind prompt.

Reviewers run independently and cannot see other reviewers' answers.

The server returns each Stage 1 answer with a cryptographic lock token. The lock contains the exact blind prompt, exact model answer, model identity, package ID and timestamp, signed with a server-side HMAC secret.

### Stage 2

Stage 2 accepts only valid Stage 1 lock tokens.

For each reviewer independently, the server reconstructs the thread as:

```text
USER: exact blind Stage 1 prompt
ASSISTANT: exact locked Stage 1 answer
USER: Stage 2 reveal prompt
```

Therefore Stage 2 cannot silently replace or edit the model's Stage 1 interpretation.

No database is required for v0.1 because the signed lock token is the immutable Stage 1 record.

## Security boundary

Provider/Gateway API credentials are server-side only.

Required Vercel environment variables:
- `AI_GATEWAY_API_KEY`
- `HARNESS_ACCESS_KEY`
- `REVIEW_LOCK_SECRET` (24+ characters; use a long random value)

Optional:
- `MODEL_CLAUDE`
- `MODEL_GROK`
- `MODEL_GEMINI`

The browser stores `HARNESS_ACCESS_KEY` only in `sessionStorage`. It is a personal access barrier, not a provider credential.

The API accepts at most three known reviewer slots and caps prompt lengths. This reduces accidental spend but is not a full multi-user authentication/rate-limit system.

For deployment, use a low AI Gateway per-key budget. Do not expose a provider API key in HTML, JavaScript, GitHub Pages or query parameters.

## Mobile workflow

1. Open one harness URL on the phone.
2. Enter the personal harness access key once per browser session.
3. Paste/load one blind package.
4. Tap `Run Stage 1`.
5. Review Claude/Grok/Gemini outputs; signed locks are created automatically.
6. Paste/load the reveal prompt.
7. Tap `Run Stage 2`.
8. Tap `Copy all results` or `Download JSON` once and bring the combined result back to PrioLens analysis.

The user no longer has to open and maintain three separate model chats.

## Files

- `tools/priolens/review-harness/index.html` - mobile-first UI
- `tools/priolens/review-harness/api/review.js` - server-side gateway + lock enforcement
- `tools/priolens/review-harness/vercel.json` - serverless duration config
- `tools/priolens/review-harness/.env.example` - environment variable names only

## Deployment target

Recommended Vercel project root:

`tools/priolens/review-harness`

No framework or package install is required for v0.1: static HTML plus a Node serverless function.

After the Vercel project is connected to the GitHub branch/project root:
1. create an AI Gateway key;
2. set the three required environment variables;
3. set a conservative Gateway key budget;
4. deploy;
5. test `GET /api/review` for reviewer configuration;
6. run a harmless one-line Stage 1 test before using a real research package.

## Methodological limitation

Multi-model agreement is only an adversarial/concept-screening signal.

Do not treat:
- 3/3 model agreement,
- repeated model wording,
- or a `SUPPORTED` verdict

as construct validation or as a substitute for blind human evidence.

Models share training-data patterns and can converge for reasons unrelated to the intended construct.

## Next version candidates

Only add these if v0.1 is actually useful:
- repo-backed review package dropdowns, eliminating prompt paste entirely;
- automatic JSON result commit to a research-results branch;
- randomized A/B ordering generated server-side;
- model/version snapshot and cost capture;
- human-review mode using the same package schema.

Do not add these before the basic Stage 1 -> lock -> Stage 2 flow works on the user's phone.
