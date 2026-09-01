# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 / OWNER SMOKE COMPLETE / STIMULUS BANK REMEDIATION
Updated: 2026-09-01
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Chat history is not the project memory.**

Recovery order:
1. read this file;
2. read `PROJECT_STATE.md` for architecture / runtime background;
3. read `docs/OPEN14_CANDIDATE_SHORTLIST_V01_v0.1.md` as the latest active checkpoint;
4. read `docs/OPEN14_REMEDIATION_BATCH_V01_v0.1.md` for the preceding remediation batch;
5. read older docs / File Library only when needed.

If an older asset-state section conflicts with the latest remediation checkpoint, the latest checkpoint wins.

## Current architecture

Channel A = low-deliberation comparative visual priority.
Channel B = current perceived sufficiency collected only after the visual task.

No combined psychological score.
No global Maslow stage.
No `visual pull = unmet need` claim.

Active Open14 v0.2 families:
- BASIC: REST, RESOURCE, SAFETY, ORDER;
- SOCIAL: CONNECTION, BELONGING, CARE;
- AGENCY / ESTEEM: AUTONOMY, CONTROL, RECOGNITION;
- GROWTH / COGNITIVE / POSSIBILITY: MASTERY, EXPLORATION, KNOWLEDGE / Learning-Understanding, OPPORTUNITY.

`SUCCESS / ACHIEVEMENT` remains `DERIVED / THEORY-HOLD`.

## Runtime state

One full mobile owner smoke completed successfully.

Current runtime includes:
- 14 visual triads;
- 12 post-visual sufficiency items;
- hidden-number 5-step slider UI;
- `Sunku pasakyti = null`;
- local autosave / resume;
- server-side incomplete checkpoints;
- final API upsert using the same `sessionUuid`;
- stale partial protection.

Production lifecycle smoke passed:
`partial -> final -> stale partial cannot overwrite final`.

Do not use the one owner run as construct evidence.

## Stimulus bank state

Dimensions audit is complete. Geometry normalization has moved into semantic / visual remediation.

Resolved and live:
- SAFETY-B -> clean `Gallery/S13.webp`; pHash 0 vs old file; no watermark keyword detected;
- AUTONOMY-A -> forked-path candidate; 1254x1254; working read `pasirinkti savo kryptį`;
- REST-A -> slippers candidate, owner-selected `bottom` 1:1 crop; working read `persijungti į poilsį / namų komfortą`;
- KNOWLEDGE-A -> library candidate, owner-selected `top` 1:1 crop; working read `ieškoti žinių / mokytis`;
- CONNECTION-A -> owner-selected `small` watermark cleanup;
- CONNECTION-B -> owner-selected `small` watermark cleanup.

All six above are present in the technical `bank.json`; the four latest owner selections were deployed and live-smoked successfully in workflow run `33470516649`.

Still requiring replacement:
- REST-B;
- ORDER-A;
- ORDER-B;
- CONTROL-A;
- KNOWLEDGE-B.

Hold / search after those five:
- BELONGING-B: HOLD due asymmetric warmth cue;
- OPPORTUNITY-A: HOLD / search clearer immediate-opportunity cue.

### Candidate search state

Whole-Gallery semantic retrieval completed successfully:
- workflow run `33471115239`;
- 184 valid Gallery candidates after 25 current/source/previous/bad-known files were excluded;
- CLIP ranking + OCR watermark screening;
- full review route: `https://omesg360.eu/priolens-candidate-review-v02/`.

**CLIP is retrieval support only. It is not construct evidence and must never auto-switch a bank asset.**

A curated four-candidate-per-family mobile shortlist for the five required replacements is live:
`https://omesg360.eu/priolens-candidate-shortlist-v01/`

Deploy/smoke workflow run:
`33471574796` — SUCCESS.

Known cross-loaded legacy assets such as `S06.webp` and `S11.webp` were deliberately excluded from the curated shortlist even where CLIP ranked them highly.

Currently passing / retained:
- RESOURCE-A/B;
- SAFETY-A/B;
- CONNECTION-A/B;
- CARE-A/B;
- AUTONOMY-A/B;
- CONTROL-B;
- RECOGNITION-A;
- RECOGNITION-B as boundary probe;
- MASTERY-A/B;
- EXPLORATION-A/B;
- KNOWLEDGE-A;
- OPPORTUNITY-B;
- BELONGING-A.

Technical active bank:
`olemoz1977/omesg360/priolens/open14-v02/bank.json`

Owner-readable bank:
`https://omesg360.eu/priolens-open14-v02/stimulus-bank.html`

Latest formal checkpoint:
`docs/OPEN14_CANDIDATE_SHORTLIST_V01_v0.1.md`

## Live routes

Open14 runtime:
`https://omesg360.eu/priolens-open14-v02/`

Historical P3 v0.4:
`https://omesg360.eu/priolens/`

Final API:
`https://omesg360.eu/priolens-open14-api/api.php`

Progress API:
`https://omesg360.eu/priolens-open14-api/progress.php`

Health:
`https://omesg360.eu/priolens-open14-api/health.php`

## Retention

Target: 90 days.

Already present:
- `created_at`;
- generated/indexed `expires_at = created_at + 90 DAY`;
- CLI-only cleanup script.

Still missing:
- Hostinger cron has not yet been configured / smoked.

Do not claim fully operational automatic deletion yet.

## Immediate next action

**Owner visual review of the five-family curated shortlist. Do not switch any candidate from CLIP score alone.**

Open:
`https://omesg360.eu/priolens-candidate-shortlist-v01/`

Return `A / B / C / D / reject` for:
1. REST-B;
2. ORDER-A;
3. ORDER-B;
4. CONTROL-A;
5. KNOWLEDGE-B.

Then:
1. create reviewed 1:1 derivatives for any accepted portrait candidates;
2. verify watermark / logos / text and visual credibility;
3. switch accepted reviewed assets into `bank.json`;
4. smoke changed runtime paths;
5. review BELONGING-B and OPPORTUNITY-A;
6. run final 28/28 geometry + watermark + semantic + runtime-reachability audit;
7. run one final mobile visual smoke;
8. fix sufficiency `null` / coverage display;
9. preserve CARE visual-vs-received-support asymmetry explicitly;
10. configure and smoke 90-day cleanup cron;
11. only then decide first external formative mini-pilot.

Do not repeatedly rerun the owner to tune a personal result.
Do not recruit externally yet.
