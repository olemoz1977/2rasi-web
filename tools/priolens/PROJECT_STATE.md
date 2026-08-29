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

Detailed source:

`/tools/priolens/docs/GENERATED_CANDIDATE_AUDIT_v0.1.md`

Generated image binaries are still conversation uploads/generated assets and are **not** repository assets or hash-frozen stimuli.

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

Current status: **two independent scene families are now available provisionally**.

Strong routed-flow family candidates:

- INF-A: hand redirects marble flow through a physical gate (`4602.png`) — semantic pass.
- INF-C: hand opens irrigation gate and visible water reaches several young-plant beds (`4612.png`) — semantic pass.
- INF-A and INF-C must **not** both enter the final pair because they instantiate the same underlying `hand + gate/lever + routed physical flow + downstream consequence` logic.

Independent second family:

- INF-D: hand switches on lighting across a visibly shared study/classroom space — `SEMANTIC_PASS_PROVISIONAL`, `PAIR_INDEPENDENCE_PASS` versus INF-A/INF-C.
- Rationale: one action changes the state of the whole shared environment; multiple ceiling fixtures and many tables/chairs make the affected external setting visible.
- Flags: luminance salience and low-stakes consequence. The room is already daylight-lit, reducing but not eliminating the brightness confound.

Generic control-panel INF-B (`4599.png`) remains ambiguous and must not freeze.

Current provisional INF pairing strategy: choose **one of INF-A or INF-C** plus INF-D only after full-set confound comparison.

## Weak-direction generation disposition

Stage A generation for INF/MAS/OPP can now stop provisionally.

- INF: 2 independent scene families available provisionally.
- MAS: 2 independent candidates available.
- OPP: 2 independent candidates available provisionally.

This does **not** freeze any image. The generation exercise also exposed an implementation/process warning: long image-generation context repeatedly biased outputs toward recently used gate/flow/control motifs. Future replacement generation should use isolated generation context where possible rather than treating repeated same-chat attempts as independent designs.

## Current cross-set concerns

- MAS-A vs routed-flow INF is semantically separable, but technical/mechanical visual affinity remains a style/domain concern.
- MAS-B provides useful domain diversity.
- INF-D reduces the risk that INF becomes synonymous with mechanical routing, but its consequence is lower-stakes and luminance-based.
- OPP pair currently has stronger positive/reward valence than MAS and INF candidates; final set must challenge this before freeze.
- INF-A and INF-C must not be used together.

## Current blocker boundary

The project is not blocked on planner code, visual access, historical retrieval, or weak-direction generation.

The active blocker is now completing stimulus-set quality review for the remaining directions:

1. audit AUT/CER/EXP/CON/PRO directly against the frozen definitions;
2. identify two defensible independent exemplars per remaining direction;
3. assemble a proposed 16-candidate set;
4. run full-set semantic + luminance/contrast/complexity/salience/style/valence/domain-overlap audit;
5. resolve flagged weak candidates, including INF-A vs INF-C choice, INF-D luminance/low-stakes risk, and OPP food/reward overlap;
6. only then copy selected assets into a PrioLens-owned path and hash/freeze them.

No generated or historical image is a frozen PrioLens stimulus yet.

## Next priority work

1. **Stop additional INF/MAS/OPP rendering unless the full-set audit later invalidates a candidate.**
2. Continue strict direct review for AUT/CER/EXP/CON/PRO using File Library + recovered historical assets.
3. Select two conceptually independent candidates per remaining direction; generate replacements only for demonstrated gaps.
4. Assemble a proposed 16-candidate set and run full-set luminance/contrast/complexity/salience/style/valence review.
5. Choose INF-A versus INF-C and re-check INF-D in that full-set context.
6. Re-check OPP pair against CON and against reward/food preference confounds.
7. Copy only selected/frozen assets into a PrioLens-owned asset path and capture immutable hashes.
8. Freeze neutral participant prompt.
9. Freeze choice-commit event.
10. Implement deterministic 28-edge planner with exemplar + position balancing.
11. Implement renderer/preflight and descriptive result trace.
12. Only then freeze protocol/stimulus versions and expose public participation.

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