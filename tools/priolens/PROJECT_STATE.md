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

## Existing visual asset inventory already recoverable

Do NOT ask the user to re-upload the old visual set just because a chat changed.

A File Library artifact named `decision_drivers_8x8_prototype_v0.4.html` contains the current 8-direction prototype and direct references to historical assets in the ConflictLab repository. Its source roots are:

- `docs/experiments/pair-p0/images/`
- `docs/media/`
- `docs/experiments/stimulus-validation/assets/`

The v0.4 prototype currently references these historical assets:

- `CR-PO-01/open-space.png`
- `CR-PO-01/partitioned-space.png`
- `p0-003-a.png`
- `p0-003-b.png`
- `n0-004-a.webp`
- `p5_person_laptop.png`
- `v2_p3_notebook.png`
- `p1_phone_table.png`
- `p4_empty_table.png`
- `n0-009-a-prototype-v0.png`
- `n0-009-b-prototype-v0.png`
- `p0-002-a.png`
- `p0-002-b.png`
- `v2_p2_corridor.png`
- `p0-001-a.png`
- `p0-001-b.png`
- `CS-PR-01/more-reveal.webp`
- `CS-PR-01/less-reveal.jpg`
- `p3_chat_screen.png`

These are historical candidate assets / seeds, not automatically the final PrioLens 16-image set. The v0.4 prototype itself marks several mappings EXPERIMENTAL or WEAK, especially Influence coverage.

## Important methodological warning inherited from earlier review

Do not treat existing images as validated constructs merely because they were used in an earlier prototype. Previous review identified uncontrolled low-level visual confounds (complexity, luminance, spatial frequency, familiarity, style/format differences) and circular construct assignment risks. PrioLens needs exemplar-level review before stimulus freeze.

## Current repository files

- `/PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md`
- `/tools/priolens/README.md`
- `/tools/priolens/index.html`
- `/tools/priolens/config/product-v0.1.json`
- `/tools/priolens/config/protocol-v0.1.json`
- `/tools/priolens/config/stimuli-v0.1.json`
- `/tools/priolens/docs/DATA_CONTRACT_v0.1.md`
- `/tools/priolens/PROJECT_STATE.md` (this file)

## Next priority work

1. Build an inventory of all reusable historical images from the three asset roots above.
2. Assign candidate images to the 8 directions without assuming old pair mappings are valid.
3. Select at least 2 sufficiently independent exemplars per direction, or identify gaps requiring new generation.
4. Run a confound audit across the final candidate 16.
5. Freeze exact neutral participant prompt.
6. Freeze choice-commit event (`pointerdown`, `pointerup`, or `click`) based on intended timing semantics and compatibility.
7. Implement and test deterministic 28-edge session planner with exemplar and position balancing.
8. Implement measured renderer and preflight.
9. Implement descriptive result trace.
10. Only then freeze protocol/stimulus versions and expose public participation.

## New-chat recovery instruction

If conversation context is lost, start from this file and `PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md`, then inspect draft PR #9. Do not reconstruct the product from ConflictLab or 2Pair memory. Treat this file as the current handoff checkpoint until superseded by a newer dated project-state file or merged architecture decision.