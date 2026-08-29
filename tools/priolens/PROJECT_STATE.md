# PrioLens project state

Status: ACTIVE DESIGN / HANDOFF SOURCE OF TRUTH
Updated: 2026-08-29
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9
Public target: `https://2rasi.com/tools/priolens/` and `https://2rasi.lt/tools/priolens/`

## Product lineage boundary

- ConflictLab is not being revived.
- 2Pair remains frozen as-is and must not be silently mutated.
- PrioLens is a new 2rasi-native product that reuses lessons from earlier rapid visual-choice work but changes the core measurement principle.
- PrioLens must not depend on `omesg360.eu` at runtime.
- Homepage position: card 10.

## Product idea

PrioLens is intended to help a person make competing priorities clearer through repeated pairwise choices. The promise is clarity / focus, not diagnosis.

Working public wording:

- EN: `When two things matter, what takes priority?`
- LT: `Kai svarbūs abu, kam teiki pirmenybę?`

Do not claim subconscious, instinct, hidden-needs, personality diagnosis, employment suitability or clinical meaning.

## Current protocol architecture

- 8 working directions:
  - AUT: Autonomy / Pasirinkimo laisvės poreikis
  - CER: Certainty / Aiškumo poreikis
  - EXP: Exploration / Tyrinėjimo trauka
  - MAS: Mastery / Meistriškumo siekis
  - CON: Connection / Ryšio poreikis
  - INF: Influence / Poveikio siekis
  - PRO: Protection / Apsaugos poreikis
  - OPP: Opportunity / Galimybių trauka
- 2 independent exemplar slots per direction.
- 16 active stimuli target.
- Complete direction tournament: C(8,2) = 28 core trials per participant.
- Every direction appears in 7 direction-v-direction trials.
- With 2 exemplars per direction there are 4 possible exemplar combinations per direction edge, 112 cross-direction image combinations overall.
- A participant sees one exemplar combination for each of the 28 direction edges; combinations rotate across sessions/participants.
- Optional 8-12 alternate-exemplar reliability block is not enabled in base v0.1.

## Presentation freeze

Current v0.1 architecture uses:

- vertical top/bottom on all supported viewports
- equal 1:1 frames
- both stimuli visible simultaneously
- `object-fit: contain`
- no crop for fit
- no scrolling during a measured trial
- top/bottom assignment randomized/counterbalanced separately from direction identity
- unsupported viewport fails preflight instead of silently changing geometry
- asset fetch and decode occur before timing
- `performance.now()` for mechanical timing
- exact choice-commit input event remains unresolved and must be frozen before external collection

Required render order:

`preload -> decode -> reserve layout -> render both -> verify visible/interactive -> stable paint/layout -> start clock -> capture choice -> timestamp before next render`

## Result boundary

Initial participant result must remain descriptive:

- raw wins/selections per direction out of 7 core direction edges
- observed 28-edge pairwise trace/matrix
- ties stay visible
- tiers/relative pattern allowed
- reflection on surprising/close choices allowed
- no artificial strict #1-#8 ranking when evidence is tied
- no latency-derived psychological score
- no choice + latency combined score

Bradley-Terry or another model-based estimator, if introduced later, requires a separately versioned analysis contract and uncertainty reporting.

## Historical asset recovery — COMPLETE FOR INVENTORY STAGE

Do NOT ask the user to re-upload the old visual set just because a chat changed.

The recovered File Library artifact `decision_drivers_8x8_prototype_v0.4.html` and the historical ConflictLab branch were cross-checked. The reusable still-image roots are:

- `docs/experiments/stimulus-validation/assets/`
- `docs/experiments/pair-p0/images/`
- `docs/media/`

Inventory checkpoint:

- 12 Wave 1 still images
- 18 Pair P0 / N0 non-placeholder still images
- 12 historical media still images
- **42 non-placeholder still-image files total**
- old v0.4 prototype references **19 unique images**
- **23 non-placeholder reserve images** remain unassigned by v0.4
- 4 additional Pair P0 filenames are explicitly placeholder-labelled and are not preferred candidates

Machine-readable inventory:

`/tools/priolens/config/candidate-inventory-v0.1.json`

Human review inventory:

`/tools/priolens/docs/ASSET_INVENTORY_v0.1.md`

### Recovered candidate counts by direction

- AUT 2
- CER 3
- EXP 3
- MAS 2
- CON 3
- INF 2
- PRO 2
- OPP 2

This means raw count is not the current bottleneck. The bottleneck is exemplar independence, semantic defensibility and visual-confound control.

### Risk flag

**Influence / INF is the first replacement-review priority.** The old prototype itself called Influence coverage especially weak. Two existing files do not equal two acceptable exemplars.

Directions with exactly two recovered candidates and therefore no spare inside the old mapping: AUT, MAS, INF, PRO, OPP.

Directions with one extra candidate available inside the old mapping: CER, EXP, CON.

The full 23-image reserve must be visually/semantically audited before deciding whether any new generation is necessary.

## Important methodological warning inherited from earlier review

Do not treat existing images as validated constructs merely because they were used in an earlier prototype. Previous review identified uncontrolled low-level visual confounds (complexity, luminance, spatial frequency, familiarity, style/format differences) and circular construct assignment risks. PrioLens needs exemplar-level review before stimulus freeze.

Specific selection rule:

- two conceptually independent exemplars per direction
- same intended direction, different scene/content realization
- avoid using a single old A/B manipulation as the basis for both final exemplars
- audit brightness/contrast/complexity/salience/style
- avoid text/UI cues unless controlled across all final assets
- immutable PrioLens asset ID + content hash after freeze
- document mapping rationale independently from legacy filenames

## Current repository files

- `/PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md`
- `/tools/priolens/README.md`
- `/tools/priolens/index.html`
- `/tools/priolens/config/product-v0.1.json`
- `/tools/priolens/config/protocol-v0.1.json`
- `/tools/priolens/config/stimuli-v0.1.json` — still deliberately PENDING / assets null
- `/tools/priolens/config/candidate-inventory-v0.1.json`
- `/tools/priolens/docs/DATA_CONTRACT_v0.1.md`
- `/tools/priolens/docs/ASSET_INVENTORY_v0.1.md`
- `/tools/priolens/PROJECT_STATE.md` (this file)

## Next priority work

1. Visually inspect the 19 recovered mapped candidates and 23 reserve images.
2. Re-evaluate mappings to the 8 directions without assuming old pair labels are correct.
3. Select two sufficiently independent exemplar candidates per direction; identify only the genuine gaps that still require new generation.
4. Run a confound audit across the proposed final 16.
5. Copy only selected/frozen assets into a PrioLens-owned asset path; do not create runtime dependency on ConflictLab URLs.
6. Freeze exact neutral participant prompt.
7. Freeze choice-commit event (`pointerdown`, `pointerup`, or `click`) based on intended timing semantics and compatibility.
8. Implement and test deterministic 28-edge session planner with exemplar and position balancing.
9. Implement measured renderer and preflight.
10. Implement descriptive result trace.
11. Only then freeze protocol/stimulus versions and expose public participation.

## New-chat / new-project recovery instruction

If conversation context is lost, start from this file, then `PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md`, `docs/ASSET_INVENTORY_v0.1.md`, and draft PR #9. Do not reconstruct the product from ConflictLab or 2Pair memory. Treat this file as the current handoff checkpoint until superseded by a newer project-state file or merged architecture decision.
