# PrioLens project state

Status: ACTIVE DESIGN / 16-CANDIDATE COVERAGE / PRE-FREEZE CLEANUP
Updated: 2026-08-30
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9
Public target: `https://2rasi.com/tools/priolens/` and `https://2rasi.lt/tools/priolens/`

## Product boundary

- PrioLens is a new 2rasi-native product, not a ConflictLab revival.
- 2Pair remains frozen.
- No runtime dependency on `omesg360.eu`.
- Promise: repeated pairwise choices clarify which competing priority took precedence in this session.
- No diagnosis, subconscious/hidden-needs, personality-type or employment-suitability claims.

Working public wording:

- EN: `When two things matter, what takes priority?`
- LT: `Kai svarbūs abu, kam teiki pirmenybę?`

## Protocol architecture

Eight working directions:

- AUT: Autonomy / Pasirinkimo laisvės poreikis
- CER: Certainty / Aiškumo poreikis
- EXP: Exploration / Tyrinėjimo trauka
- MAS: Mastery / Meistriškumo siekis
- CON: Connection / Ryšio poreikis
- INF: Influence / Poveikio siekis
- PRO: Protection / Apsaugos poreikis
- OPP: Opportunity / Galimybių trauka

Target:

- 2 conceptually independent exemplars per direction
- 16 active stimuli
- complete 8-direction tournament: C(8,2) = 28 core trials
- one exemplar combination per direction edge per participant; exemplar combinations rotate across participants/sessions
- optional reliability block off in base v0.1

## Working semantic contract

Source: `/tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md`

Status: FROZEN FOR INTERNAL AUDIT / NOT VALIDATED CONSTRUCTS.

Binding rules:

- visible content must carry intended direction without filename/source knowledge;
- nearest-neighbour directions must be challenged;
- comparable fit to 2+ directions = ambiguous, not force-mapped;
- two exemplars must be conceptually independent scene/content realizations;
- semantic fit never overrides physical-coherence or visual-confound risk.

## Presentation freeze

- vertical top/bottom
- equal 1:1 frames
- both simultaneously visible
- `object-fit: contain`, no runtime crop
- no scrolling during measured trial
- top/bottom randomized/counterbalanced independently from direction
- unsupported viewport fails preflight
- preload + decode before timing
- `performance.now()`
- exact choice-commit event still unresolved

Render order:

`preload -> decode -> reserve layout -> render both -> verify visible/interactive -> stable paint/layout -> start clock -> capture choice -> timestamp before next render`

## Result boundary

Participant result remains descriptive only:

- raw wins/selections per direction out of 7
- observed 28-edge trace/matrix
- ties visible
- tiers/relative pattern allowed
- reflection on surprising/close choices allowed
- no forced strict 1–8 ranking on ties
- no latency-derived psychological score
- no choice+latency combined score

Any Bradley-Terry/model estimator requires a separate versioned analysis contract with uncertainty reporting.

## Live stimulus source of truth

Candidate-level decisions:

`/tools/priolens/docs/STIMULUS_LEDGER_v0.1.md`

Full-set audit:

`/tools/priolens/docs/FULL_SET_AUDIT_v0.1.md`

If older audit/inventory files conflict with the live ledger, **the ledger wins**.

## Current strict slot status

| Direction | Status | Working candidates |
|---|---:|---|
| AUT | **2/2 provisional** | `4655`, `4656` |
| CER | **2/2 provisional** | `4650`, `CER-CHECKLIST-01` |
| EXP | **2/2 provisional** | `3098`, `4649` |
| MAS | **2/2 PASS** | `4635`, `4636` |
| CON | **2/2 provisional** | `4646`, `2624` |
| INF | **2/2** | `4602`, `4641` |
| PRO | **2/2 provisional** | `2723`, `4645` |
| OPP | **2/2 provisional** | `4637`, `4638` |

Strict candidate coverage: **16/16.**

This is not yet a stimulus freeze.

## Full-set audit verdict

The set has complete semantic candidate coverage but is **not freeze-ready**.

Hard cleanup blockers:

1. `4655` AUT-1: bottle/cap/opening-task physical inconsistency must be corrected without removing the same-task cue.
2. `CER-CHECKLIST-01`: green success cue must be neutralized to dark gray/black.
3. `2624` CON-2: portrait + extreme dark luminance requires reviewed square/exposure normalization.
4. `2723` PRO-1: portrait + dark/rain presentation requires reviewed square/tonal normalization.
5. Visible generator watermarks must be removed from every selected final binary.

Current quantitative visual range before cleanup:

- mean relative luminance range approximately **0.169–0.718**;
- `2624` is the dark extreme;
- CER checklist is the bright extreme;
- this range is too direction-correlated to freeze unchanged.

Structural pilot risks:

- OPP pair remains correlated with food/resource/reward valence;
- CON necessarily carries human-face/social salience;
- CER currently trends bright/minimal;
- EXP-1 carries nature/travel preference risk;
- technical/mechanical affinity spans MAS-1, INF-1 and AUT-2.

These risks do not currently force a replacement, but exemplar IDs must remain in pilot data for bias diagnostics.

## Current blocker boundary

The blocker is no longer missing stimuli.

The active blocker is **asset cleanup + re-audit of the same 16 candidates**.

Do not resume broad generation or library searching unless cleanup makes a candidate fail semantically or the re-audit exposes a concrete replacement need.

## Next priority work

1. Create cleaned working copies for the hard-blocker assets.
2. Remove all visible generator marks from selected candidates.
3. Re-run semantic review on any edited image to ensure meaning did not change.
4. Re-run luminance/contrast/format audit on all cleaned binaries.
5. If the cleaned 16 pass, copy them into a PrioLens-owned asset path and record immutable hashes.
6. Populate/freeze `config/stimuli-v0.1.json` only after hashes exist.
7. Freeze neutral participant prompt.
8. Freeze choice-commit event.
9. Implement deterministic 28-edge planner with exemplar + position balancing.
10. Implement renderer/preflight and descriptive result trace.
11. Run internal/beta pilot with stimulus/exemplar IDs retained for bias diagnostics.

## Current repository files

Key current files:

- `/PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md`
- `/tools/priolens/README.md`
- `/tools/priolens/index.html`
- `/tools/priolens/config/product-v0.1.json`
- `/tools/priolens/config/protocol-v0.1.json`
- `/tools/priolens/config/stimuli-v0.1.json` — still PENDING / no frozen hashes
- `/tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md`
- `/tools/priolens/docs/STIMULUS_LEDGER_v0.1.md`
- `/tools/priolens/docs/FULL_SET_AUDIT_v0.1.md`
- `/tools/priolens/PROJECT_STATE.md`

Historical/supporting files remain available but are not the live candidate source of truth.

## Recovery instruction

If conversation context is lost, start from this file, then `docs/STIMULUS_LEDGER_v0.1.md`, `docs/FULL_SET_AUDIT_v0.1.md`, `docs/DIRECTION_DEFINITIONS_v0.1.md`, then older audit/inventory docs and draft PR #9. Do not reconstruct PrioLens from ConflictLab or 2Pair memory.