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
3. read `docs/OPEN14_SHORTLIST_OWNER_DECISIONS_V01_v0.1.md` as the latest active checkpoint;
4. read `docs/OPEN14_CANDIDATE_SHORTLIST_V01_v0.1.md` for shortlist construction/history;
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
- CONNECTION-B -> owner-selected `small` watermark cleanup;
- ORDER-A -> owner shortlist B, normalized 640x640 WebP, switched live;
- ORDER-B -> owner shortlist C, normalized 640x640 WebP, switched live.

Latest shortlist decisions:
- REST-B = B -> selected candidate `Gallery/20260730_232752414.png`, crop review pending;
- ORDER-A = B -> applied live;
- ORDER-B = C -> applied live;
- CONTROL-A = reject -> new search required; old runtime remains non-pilot-safe placeholder;
- KNOWLEDGE-B = B -> selected candidate `Gallery/20260730_022124068.png`, crop review pending.

OCR watermark keyword screen on the four selected shortlist sources found no Kling/Gemini/OpenAI hits.

Owner crop review route for REST-B and KNOWLEDGE-B:
`https://omesg360.eu/priolens-shortlist-crop-review-v01/`

Need:
- REST-B = top / center / bottom;
- KNOWLEDGE-B = top / center / bottom.

Do not switch those two until crop review is complete.

Hold / search after crop choices:
- CONTROL-A: SEARCH_REQUIRED_AFTER_SHORTLIST_REJECT;
- BELONGING-B: HOLD due asymmetric warmth cue;
- OPPORTUNITY-A: HOLD / search clearer immediate-opportunity cue.

### Verification

Shortlist decision apply workflow:
`33473407345`
- selected files fetched;
- OCR/dimension audit passed;
- ORDER-A/B normalized and bank patch committed;
- portrait crop derivatives uploaded;
- final smoke step failed only because `curl -I` HEAD returned 403.

Follow-up GET smoke:
`33473495639` — SUCCESS.

Verified by GET:
- all selected remediation assets reachable;
- crop review reachable;
- live bank reachable;
- ORDER-A/B switched paths present;
- CONTROL-A reject status present.

Therefore the earlier 403 was a smoke-method issue, not a deploy failure.

Currently passing / retained apart from items explicitly pending above:
- RESOURCE-A/B;
- SAFETY-A/B;
- CONNECTION-A/B;
- BELONGING-A;
- CARE-A/B;
- AUTONOMY-A/B;
- CONTROL-B;
- RECOGNITION-A;
- RECOGNITION-B as boundary probe;
- MASTERY-A/B;
- EXPLORATION-A/B;
- KNOWLEDGE-A;
- OPPORTUNITY-B.

Technical active bank:
`olemoz1977/omesg360/priolens/open14-v02/bank.json`

Owner-readable bank:
`https://omesg360.eu/priolens-open14-v02/stimulus-bank.html`

Latest formal checkpoint:
`docs/OPEN14_SHORTLIST_OWNER_DECISIONS_V01_v0.1.md`

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

**Owner crop review for REST-B and KNOWLEDGE-B.**

Open:
`https://omesg360.eu/priolens-shortlist-crop-review-v01/`

Return:
1. REST-B = top / center / bottom;
2. KNOWLEDGE-B = top / center / bottom.

Then:
1. switch those two reviewed derivatives and smoke;
2. search again for CONTROL-A with a new concept/candidate set; do not generate unless explicitly requested;
3. review BELONGING-B and OPPORTUNITY-A;
4. run final 28/28 geometry + watermark + semantic + runtime-reachability audit;
5. run one final mobile visual smoke;
6. fix sufficiency `null` / coverage display;
7. preserve CARE visual-vs-received-support asymmetry explicitly;
8. configure and smoke 90-day cleanup cron;
9. only then decide first external formative mini-pilot.

Do not repeatedly rerun the owner to tune a personal result.
Do not recruit externally yet.
