# PrioLens bank v0.4 — runtime promotion checkpoint

Date: 2026-09-06  
Status: LIVE / VERIFIED

## Promotion

Active participant runtime:
`https://omesg360.eu/priolens-open14-v04/`

Runtime repo/branch:
`olemoz1977/omesg360@feature/priolens-open14-v04`

Bank transition:
- previous: `2rasi.priolens.open14.bank-v0.3.1`;
- current live: `2rasi.priolens.open14.bank-v0.4`;
- runtime remains Open14 pilot `v0.4`;
- 42 unique stimulus exemplars remain in the bank;
- owner 42/42 visual review: PASS;
- five changed assets passed raw SHA256, decoded-pixel SHA256, remote-byte and owner-review gates.

## Live proof

Final hardened deployment:
- commit: `a6ad9c9da9240705d561cac5cc3912d739f5dbd4`;
- workflow: `Deploy PrioLens Open14 v0.4 owner preview`;
- run: `34033543477`;
- conclusion: SUCCESS;
- live smoke completed: `2026-09-06T12:36:45Z`.

The deployed real-browser smoke explicitly verified:
1. live `bank.json` schema is `2rasi.priolens.open14.bank-v0.4`;
2. lineage records `previousBankSchema=2rasi.priolens.open14.bank-v0.3.1`;
3. live bank has `runtimeReady=true`;
4. a complete system-smoke participant session saves `bankSchema=2rasi.priolens.open14.bank-v0.4`;
5. result/reload/API flow still works.

Smoke output:
`PASS: deployed v0.4 runtime bank-v0.4 + saved bankSchema tag + matrix-primary result + reload restore + isolated live API`

## Analytical boundary

Do **not** classify sessions by a guessed timestamp when `bank_schema` is available.

Primary separator:
- `bank_schema = 2rasi.priolens.open14.bank-v0.3.1` → historical v0.4-pilot sessions with the previous stimulus bank;
- `bank_schema = 2rasi.priolens.open14.bank-v0.4` → sessions using the current stimulus bank.

Operational promotion confirmation time:
`2026-09-06T12:36:45Z`.

This timestamp is audit metadata only. `bank_schema` is the analytical source of truth.

The v0.4 API validator accepts both bank schemas so an already-open/in-flight pre-promotion session can still save without being relabelled.

## Statistics UI

The v0.4 admin statistics now separate the two stimulus banks:
- default v0.4 view: bank v0.4;
- `Bank v0.3.1`: historical v0.4 pilot data;
- `Visi bankai`: combined view when explicitly needed.

Smoke sessions remain excluded by default.

Therefore the old screenshot showing 29 v0.4 sessions should not be interpreted as 29 bank-v0.4 sessions. Those historical sessions remain tagged by their actual bank schema.

## Validation

Blind stimulus validation v0.4 is independently live on:
`open14-v04-current42`

Do not merge participant-runtime choice data with blind semantic-screening responses. They answer different questions.
