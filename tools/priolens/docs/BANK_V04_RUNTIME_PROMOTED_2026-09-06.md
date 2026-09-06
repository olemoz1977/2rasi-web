# PrioLens bank v0.4 — participant runtime promotion

Date: 2026-09-06  
Status: LIVE  
Participant runtime: `https://omesg360.eu/priolens-open14-v04/`

## Promotion evidence

Runtime branch:
`olemoz1977/omesg360@feature/priolens-open14-v04`

Successful deploy:
- run: `34030815518`;
- head: `8a02d8b0315aff6fe32ea6570e0b867e71200e0f`;
- completed: `2026-09-06T11:44:01Z`;
- source build and v0.4 semantic tests: PASS;
- generated API/progress bank-v0.4 allow-list: PASS;
- protected API config boundary: PASS;
- remote API bytes: PASS;
- participant runtime bytes/modules: PASS;
- real deployed 390×844 participant-flow + API save smoke: PASS.

## Active bank

Newly started participant sessions load:
`2rasi.priolens.open14.bank-v0.4`

Changed exemplars:
- SAFETY-02;
- EXPLORATION-01;
- AUTONOMY-02;
- OPPORTUNITY-01;
- OPPORTUNITY-03.

OPPORTUNITY-02 remains unchanged.

## Analytical boundary

Do **not** classify sessions by UI/runtime label `v0.4` alone.

The v0.4 participant program existed before the stimulus-bank promotion, so historical v0.4 sessions can contain:
- `bank_schema = 2rasi.priolens.open14.bank-v0.3.1`;
- new sessions: `bank_schema = 2rasi.priolens.open14.bank-v0.4`.

Primary analysis split is the stored `bank_schema`.

The v0.4 API intentionally continues to accept both bank schemas so an already-open bank-v0.3.1 session is not lost during the cutover. The frontend does not resume a local draft when its stored bank schema differs from the bank currently loaded.

## Admin statistics

The v0.4 admin surface now has explicit:
- Bank v0.4;
- Bank v0.3.1;
- Visi bankai.

Default v0.4 view is Bank v0.4.

CSV and raw JSONL preserve `bank_schema`.

Historical v0.4 counts shown before this promotion must not be interpreted as bank-v0.4 observations.
