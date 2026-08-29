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

## Working direction semantic contract — FROZEN FOR INTERNAL AUDIT

`/tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md` now defines the working semantic boundaries used for stimulus audit.

Important boundary:

- these are internal operational definitions, not validated psychological constructs;
- a legacy filename/pair label is never sufficient evidence for a PrioLens mapping;
- nearest-neighbour directions must be challenged explicitly;
- if two directions are comparably plausible from visible content, the candidate is ambiguous rather than force-mapped;
- two exemplars for one direction must be conceptually independent scene/content realizations.

Required neighbour checks include AUT↔OPP, AUT↔EXP, AUT↔INF, CER↔PRO, CER↔EXP, EXP↔OPP, MAS↔INF, CON↔INF and CON↔PRO.

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

These are **legacy mapped file counts**, not usable-exemplar counts.

### Semantic pre-audit checkpoint

`/tools/priolens/docs/STIMULUS_SEMANTIC_PREAUDIT_v0.1.md` applies the new working direction boundaries to the 19 historically mapped candidates without treating old mappings as authoritative.

Current triage:

- INF: both historical mapped candidates are quarantined; current usable count is effectively 0 pending reserve/direct review.
- MAS: both historical candidates are weak because generic laptop/notebook work imagery does not by itself establish mastery.
- OPP: `p0-002-b` is likely closer to EXP; corridor imagery remains ambiguous; OPP is a likely gap.
- CER: `p0-003-b` is likely closer to PRO than CER.
- PRO: `p0-002-a` remains possible; `p0-003-b` becomes a possible replacement candidate.
- CON: current phone/table/chat candidates rely heavily on social/device projection and require strict review.
- AUT/CER/EXP still require nearest-neighbour cleanup and direct visual review.

This changes the planning assumption: raw recovered count is no longer enough to say that stimulus availability is not a bottleneck. **Usable semantic count may be a bottleneck for INF, MAS and OPP.** New generation is still premature until all 23 reserve candidates are reviewed.

## Risk flag

**Influence / INF remains the first replacement-review priority.** The old prototype already called Influence coverage especially weak, and the semantic pre-audit now quarantines both mapped INF candidates.

Do not keep a weak INF image merely to satisfy a nominal two-file quota.

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
- `/tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md`
- `/tools/priolens/docs/STIMULUS_SEMANTIC_PREAUDIT_v0.1.md`
- `/tools/priolens/PROJECT_STATE.md` (this file)

## Next priority work

1. Directly inspect all 19 mapped candidates and 23 reserve images; record visual-confound status separately from semantic status.
2. Review the 23 reserve images without inheriting their old source-family semantics, prioritizing INF, MAS, OPP, then CON/PRO.
3. Reassign candidates across directions where the visible content supports a different working direction; do not preserve old mapping for continuity.
4. Select two sufficiently independent exemplar candidates per direction and identify only genuine gaps that still require new generation.
5. Run a cross-set confound audit across the proposed final 16.
6. Copy only selected/frozen assets into a PrioLens-owned asset path; do not create runtime dependency on ConflictLab URLs.
7. Freeze exact neutral participant prompt.
8. Freeze choice-commit event (`pointerdown`, `pointerup`, or `click`) based on intended timing semantics and compatibility.
9. Implement and test deterministic 28-edge session planner with exemplar and position balancing.
10. Implement measured renderer and preflight.
11. Implement descriptive result trace.
12. Only then freeze protocol/stimulus versions and expose public participation.

## Current blocker boundary

The project is **not blocked on planner code**. It is blocked on stimulus evidence quality.

Direct binary/pixel inspection is still required before any candidate can receive a final visual-confound pass. Semantic pre-audit alone does not authorize the 16-stimulus freeze.

## New-chat / new-project recovery instruction

If conversation context is lost, start from this file, then `PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md`, `docs/DIRECTION_DEFINITIONS_v0.1.md`, `docs/STIMULUS_SEMANTIC_PREAUDIT_v0.1.md`, `docs/ASSET_INVENTORY_v0.1.md`, and draft PR #9. Do not reconstruct the product from ConflictLab or 2Pair memory. Treat this file as the current handoff checkpoint until superseded by a newer project-state file or merged architecture decision.
