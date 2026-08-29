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
- Promise: clarify competing priorities through repeated pairwise choices; no diagnosis, subconscious/instinct claims, hidden-needs claims or employment-suitability claims.

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

Binding rules:

- visible content must carry intended direction without filename/source knowledge;
- nearest-neighbour directions must be challenged;
- comparable fit to 2+ directions = ambiguous, not force-mapped;
- two exemplars must be conceptually independent scene/content realizations;
- semantic fit never overrides visual-confound risk.

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

## Historical asset recovery

Historical inventory remains documented in:

- `/tools/priolens/config/candidate-inventory-v0.1.json`
- `/tools/priolens/docs/ASSET_INVENTORY_v0.1.md`
- `/tools/priolens/docs/FILE_LIBRARY_VISUAL_AUDIT_v0.1.md`
- `/tools/priolens/docs/STIMULUS_SEMANTIC_PREAUDIT_v0.1.md`

Recovered inventory:

- 42 non-placeholder historical stills
- 19 used by old v0.4
- 23 non-placeholder reserves

File Library direct visual access is available. Historical recovery did not produce clean independent coverage for the weakest directions without weakening the semantic contract, so controlled generation was authorized.

## Generated weak-direction checkpoint — CURRENT

Detailed source:

`/tools/priolens/docs/GENERATED_CANDIDATE_AUDIT_v0.1.md`

Generated binaries are conversation uploads/generated assets and are **not** repository assets or hash-frozen stimuli.

### MAS

Current status: **2 defensible independent candidates**.

- MAS-A: precision mechanical adjustment (`4604.png`) — semantic pass, technical-domain flag.
- MAS-B: potter forms a symmetrical clay vessel (`4605.png`) — semantic pass, craft/tactile-domain flag.
- Pair independence: PASS.

No more MAS generation is justified now.

### OPP

Current status: **2 provisional independent candidates**.

- OPP-A: open greenhouse with visibly productive value (`4607.png`) — semantic pass, nature/food positive-valence flag.
- OPP-B: neutral prepared food table with one empty plate (`4611.png`) — provisional semantic pass, appetite/reward flag.
- Pair independence: provisional pass, but both remain positive food/resource domains.

No more OPP generation is justified until full-set comparison shows a real need.

### INF

Current strict status: **1 independent defensible scene family only**.

Routed physical consequence family:

- INF-A: hand redirects marble flow through a physical gate (`4602.png`) — semantic pass.
- INF-C: irrigation gate distributes water toward several young-plant beds (`4612.png`) — semantic pass.
- INF-A and INF-C are **not independent** and must not become the final pair together. Both instantiate `hand + gate/lever + routed physical flow + downstream consequence`.

Other attempts:

- generic control panel `4599.png`: ambiguous because external consequence is not visible.
- light-switch attempts: rejected as low-stakes and luminance-driven; **no INF-D candidate exists**.
- mailbox, compactor, alarm, gates, windows, first-aid/resource rooms, drinking fountain and repeated irrigation/pump variants were rejected for hidden consequence, neighbour-direction dominance, same-family duplication or visual confounds.

Important correction:

- `4614.png` is a crude Python-drawn domino composition reference only.
- Status: `PROCEDURAL_REFERENCE_ONLY / NOT A STIMULUS`.
- It must never be counted as a positive INF result, candidate image or visual-quality evidence.

Therefore **INF generation remains open**. A second photorealistic, conceptually independent INF exemplar is still missing.

## Current blocker boundary

The active blocker is stimulus evidence quality, specifically:

1. obtain one second conceptually independent photorealistic INF exemplar;
2. then audit AUT/CER/EXP/CON/PRO directly against frozen definitions;
3. identify two defensible independent exemplars per remaining direction;
4. assemble a proposed 16-candidate set;
5. run full-set semantic + luminance/contrast/complexity/salience/style/valence/domain-overlap audit;
6. only then copy selected assets into a PrioLens-owned path and hash/freeze them.

No generated or historical image is a frozen PrioLens stimulus yet.

## Current cross-set concerns

- MAS-A vs routed-flow INF is semantically separable, but technical/mechanical affinity remains a style/domain concern.
- MAS-B provides useful domain diversity.
- OPP pair has stronger positive/reward valence than current MAS and INF candidates.
- INF-A and INF-C must not both enter the final 16.
- Long same-chat generation context repeatedly biases image output toward recently used gate/flow/control motifs; replacement generation should use isolated context or strong visual references where possible.

## Next priority work

1. **Continue INF concept design until a second independent photorealistic candidate passes semantics, pair independence and visual-confound review.**
2. Do not count procedural references/mockups as stimuli.
3. Once INF is complete, audit AUT/CER/EXP/CON/PRO using File Library + recovered historical assets.
4. Generate replacements only for demonstrated gaps.
5. Assemble proposed 16-candidate set and run full-set confound review.
6. Copy only selected/frozen assets into a PrioLens-owned path and capture immutable hashes.
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

If conversation context is lost, start from this file, then `docs/DIRECTION_DEFINITIONS_v0.1.md`, `docs/GENERATED_CANDIDATE_AUDIT_v0.1.md`, `docs/FILE_LIBRARY_VISUAL_AUDIT_v0.1.md`, `docs/STIMULUS_SEMANTIC_PREAUDIT_v0.1.md`, `docs/ASSET_INVENTORY_v0.1.md`, `PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md`, and draft PR #9. Do not reconstruct PrioLens from ConflictLab or 2Pair memory. Treat this file as the current source of truth until superseded.