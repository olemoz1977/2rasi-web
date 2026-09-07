# Multipliers Pilot v0.9 intake

Isolated pilot runtime for `2rasi.com/tools/multipliers-pilot/`.

- Existing `tools/multipliers/` runtime is not modified.
- Existing OMESG360 runtime is not modified.
- Frontend queues pilot telemetry locally until the verified Worker endpoint is activated.
- D1 stores an anonymous session UUID, question/option order, selected option, response time, result summary and optional feedback.
- The form does not ask for name, email or employer.
- Worker deployment is handled by `.github/workflows/multipliers-pilot-worker.yml` using the same Cloudflare repository credentials already used by the other 2rasi pilot infrastructure.
