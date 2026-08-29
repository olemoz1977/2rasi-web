# PrioLens project state

Status: ACTIVE DESIGN / HANDOFF SOURCE OF TRUTH
Updated: 2026-08-29
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9
Public target: `https://2rasi.com/tools/priolens/` and `https://2rasi.lt/tools/priolens/`

## Product boundary

- PrioLens is a new 2rasi-native product, not a ConflictLab revival.
- 2Pair remains frozen and must not be silently changed.
- No runtime dependency on `omesg360.eu`.
- Homepage position: card 10.
- Promise: help a person make competing priorities clearer through repeated pairwise choices; no diagnosis, subconscious/instinct claims, hidden-needs claims or employment suitability claims.

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
- one exemplar combination per direction edge per participant; combinations rotate across sessions/participants
- optional reliability block remains off in base v0.1

## Working semantic contract

Source: `/tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md`

Status: FROZEN FOR INTERNAL AUDIT / NOT VALIDATED CONSTRUCTS.

Rules that remain binding:

- visible content must carry the intended direction without filename/source knowledge;
- nearest-neighbour directions must be challenged;
- comparable fit to 2+ directions = ambiguous, not force-mapped;
- two exemplars must be conceptually independent scene/content realizations;
- semantic fit never overrides visual-confound risk.

Required neighbour checks include AUT↔OPP, AUT↔EXP, AUT↔INF, CER↔PRO, CER↔EXP, EXP↔OPP, MAS↔INF, CON↔INF and CON↔PRO.

## Presentation freeze

- vertical top/bottom on all supported viewports
- equal 1:1 frames
- both stimuli simultaneously visible
- `object-fit: contain`, no crop
- no scrolling during measured trial
- top/bottom randomized/counterbalanced independently from direction
- unsupported viewport fails preflight
- fetch+decode before timing
- `performance.now()`
- exact choice-commit event still unresolved

Required render order:

`preload -> decode -> reserve layout -> render both -> verify visible/interactive -> stable paint/layout -> start clock -> capture choice -> timestamp before next render`

## Result boundary

Initial participant result remains descriptive only:

- raw wins/selections per direction out of 7
- observed 28-edge trace/matrix
- ties visible
- tiers/relative pattern allowed
- reflection on surprising/close choices allowed
- no artificial strict 1–8 ranking on ties
- no latency-derived psychological score
- no choice+latency combined score

Any Bradley-Terry/model estimator requires a separate versioned analysis contract with uncertainty reporting.

## Historical asset recovery checkpoint

Historical inventory is documented in:

- `/tools/priolens/config/candidate-inventory-v0.1.json`
- `/tools/priolens/docs/ASSET_INVENTORY_v0.1.md`
- `/tools/priolens/docs/FILE_LIBRARY_VISUAL_AUDIT_v0.1.md`
- `/tools/priolens/docs/STIMULUS_SEMANTIC_PREAUDIT_v0.1.md`

Recovered inventory remains:

- 42 non-placeholder historical stills
- 19 used by old v0.4
- 23 non-placeholder reserve images

File Library direct visual access is available. Exact numeric filename indexing is incomplete, but this is no longer a technical blocker.

Historical recovery did not produce defensible independent coverage for the weakest directions without weakening the semantic contract, so controlled generation was authorized.

## Generated weak-direction checkpoint — CURRENT

Source of detailed audit:

`/tools/priolens/docs/GENERATED_CANDIDATE_AUDIT_v0.1.md`

Generated image binaries are still conversation uploads and are **not** yet repository assets or hash-frozen stimuli.

### MAS

Current status: **2 defensible, independent candidates**.

- MAS-A: hands measure/adjust a small mechanical part with caliper + precision tool (`4604.png`) — semantic pass, technical-domain flag.
- MAS-B: potter's hands form a symmetrical clay vessel (`4605.png`) — semantic pass, craft/tactile-domain flag.
- Pair independence: PASS.

No more MAS generation is currently justified.

### OPP

Current status: **2 provisional defensible candidates**.

- OPP-A: open greenhouse with visibly productive plants/ripe produce (`4607.png`) — semantic pass, nature/food positive-valence flag.
- OPP-B: neutral prepared food table with one empty plate (`4611.png`) — provisional semantic pass, appetite/reward flag.
- Pair independence: provisional pass, but both occupy positive food/resource domains.

Rejected attempts include `4606`, `4608`, `4609`, `4610` for visual contrast, pair-independence or MAS ambiguity reasons.

No more OPP generation is currently justified until full-set comparison shows a real need.

### INF

Current status: **semantic coverage exists, but independent two-exemplar coverage is still missing**.

- INF-A: hand redirects marble flow through a physical gate (`4602.png`) — semantic pass.
- INF-B: generic control panel (`4599.png`) — semantic ambiguous; do not freeze.
- INF-C: hand opens irrigation gate and visible water reaches several young-plant beds (`4612.png`) — semantic pass.

Critical correction: INF-A and INF-C **must not be the final pair**. Both instantiate the same underlying logic: `hand + gate/lever + routed physical flow + visible downstream consequence`. This fails the conceptual-independence rule even though both individually pass.

Therefore INF still requires one different scene family. Do not generate another gate/valve/flow variant.

## Current cross-set concerns

- MAS-A vs INF-A/INF-C is semantically separable, but technical/mechanical visual affinity remains a style/domain concern.
- MAS-B provides useful domain diversity.
- OPP pair currently has stronger positive/reward valence than MAS and INF candidates; final set must challenge this before freeze.
- INF needs a genuinely different external-impact scene, not another flow-routing metaphor.

## Current blocker boundary

The project is not blocked on planner code, visual access or historical retrieval.

The active blocker is stimulus-set quality:

1. solve one conceptually independent INF scene family;
2. re-run weak-direction cross-set audit;
3. return to AUT/CER/EXP/CON/PRO and identify two defensible independent exemplars for every direction;
4. run final 16-set semantic + visual-confound audit;
5. only then copy selected assets into a PrioLens-owned path and hash/freeze them.

No generated or historical image is a frozen PrioLens stimulus yet.

## Next priority work

1. **Do not generate more MAS or OPP now.**
2. Design, before rendering, one genuinely different INF concept that shows visible external/shared consequence without routed flows, generic control panels, authority/status stereotypes, coercion or MAS-like precision/craft.
3. Audit that INF candidate and re-run the six-candidate weak-direction cross-set comparison.
4. Continue the same strict direct review for AUT/CER/EXP/CON/PRO.
5. Assemble a proposed 16-candidate set and run cross-set luminance/contrast/complexity/salience/style/valence review.
6. Copy only selected/frozen assets into a PrioLens-owned asset path and capture immutable hashes.
7. Freeze neutral participant prompt.
8. Freeze choice-commit event.
9. Implement deterministic 28-edge planner with exemplar + position balancing.
10. Implement renderer/preflight and descriptive result trace.
11. Only then freeze protocol/stimulus versions and expose public participation.

## Current repository files

- `/PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md`
- `/tools/priolens/README.md`
- `/tools/priolens/index.html`
- `/tools/priolens/config/product-v0.1.json`
- `/tools/priolens/config/protocol-v0.1.json`
- `/tools/priolens/config/stimuli-v0.1.json` — deliberately PENDING / assets null
- `/tools/priolens/config/candidate-inventory-v0.1.json`
- `/tools/priolens/config/generation-candidates-v0.1.json`
- `/tools/priolens/docs/DATA_CONTRACT_v0.1.md`
- `/tools/priolens/docs/ASSET_INVENTORY_v0.1.md`
- `/tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md`
- `/tools/priolens/docs/STIMULUS_SEMANTIC_PREAUDIT_v0.1.md`
- `/tools/priolens/docs/FILE_LIBRARY_VISUAL_AUDIT_v0.1.md`
- `/tools/priolens/docs/STIMULUS_GENERATION_BRIEFS_v0.1.md`
- `/tools/priolens/docs/GENERATED_CANDIDATE_AUDIT_v0.1.md`
- `/tools/priolens/PROJECT_STATE.md` (this file)

## Recovery instruction

If conversation context is lost, start from this file, then `docs/DIRECTION_DEFINITIONS_v0.1.md`, `docs/GENERATED_CANDIDATE_AUDIT_v0.1.md`, `docs/FILE_LIBRARY_VISUAL_AUDIT_v0.1.md`, `docs/STIMULUS_SEMANTIC_PREAUDIT_v0.1.md`, `docs/ASSET_INVENTORY_v0.1.md`, `PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md`, and draft PR #9. Do not reconstruct PrioLens from ConflictLab or 2Pair memory.