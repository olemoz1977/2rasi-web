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

`/tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md` defines the working semantic boundaries used for stimulus audit.

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

### File Library direct visual recovery — ACTIVE

The earlier assumption that direct visual inspection was technically blocked is no longer valid for the overall workflow.

GitHub connector binary access is limited, but the user's File Library contains the historical visual material and exposes images for direct multimodal review. Numeric filename search is imperfect, so retrieval uses both filename neighbourhoods and visual-content queries.

Direct File Library review is recorded in:

`/tools/priolens/docs/FILE_LIBRARY_VISUAL_AUDIT_v0.1.md`

The exact `2465.png` handle has not surfaced by literal filename search, but the historical numeric series is recoverable, including `2766`, `2767`, `2781`, `2782`, `2783`, `2784`, `2785`, `2787`, `2790`, `2791`, `2792`, `2793`, `2794`, `2795`, `2796`, `2798` and additional later variants.

Current direct-review implications:

- `2790` (two mugs) is a plausible CON candidate, with implied-social-context and warm-aesthetic confounds.
- `2781` (key in lock) is a plausible PRO candidate, stronger for PRO than CER, but highly literal.
- `2798` (forked forest path) is too structurally ambiguous across AUT/EXP/OPP to serve as a clean single-direction exemplar.
- `2766` (generic laptop) confirms that generic work imagery is insufficient for MAS.
- `2681(1)` (dark faceless figures) carries a strong threat/ominous confound and is unsuitable for clean CON/INF use.
- no directly reviewed historical image resolves the INF gap.

### Weak-direction historical reserve checkpoint — GENERATION AUTHORIZED

The 23 unassigned reserves were additionally checked at source-family / historical-cue level without pretending that every exact reserve binary received a direct pixel pass.

The recovered evidence shows:

- Wave 1 reserves are legacy reveal/evidence/reference and spatial-structure/capacity manipulations rather than natural INF/MAS/OPP scenes.
- N0-004…N0-008 historical reactions cluster around moving forward/end-state, texture/touch and object arrangement/crowding; they do not reveal an obvious INF or MAS scene and remain ambiguous for OPP.
- historical media reserves center on approach/release/uncertainty, window silhouette, empty room and person alone; none naturally establishes INF or MAS, while approach/uncertainty risks collapsing OPP into EXP/AUT.

Therefore the historical library is now considered **semantically exhausted enough for INF, MAS and OPP to authorize controlled new candidate generation**. This is not a claim that all 23 reserve files are pixel-audited. Exact reserves remain eligible if later direct review shows they outperform generated candidates.

Generation is governed by:

`/tools/priolens/docs/STIMULUS_GENERATION_BRIEFS_v0.1.md`

Generation policy:

- initial pool is 3 conceptually different candidates per weak direction, 9 scenes total;
- target remains at least 2 independent passing exemplars per direction;
- generating exactly two is forbidden because it creates quota pressure;
- generated candidates use neutral IDs during blind review;
- no generated image enters `stimuli-v0.1.json` until semantic and visual-confound gates pass;
- OPP carries the highest semantic-risk flag because physical openness repeatedly overlaps AUT/EXP.

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

- INF: both historical mapped candidates are quarantined; historical recovery did not produce a defensible replacement, so controlled generation is active.
- MAS: historical laptop/notebook and recovered work/craft material remain too generic or domain-confounded, so controlled generation is active.
- OPP: `p0-002-b` is likely closer to EXP; corridor/opening imagery remains ambiguous, so controlled generation is active with a strict AUT/EXP challenge.
- CER: `p0-003-b` is likely closer to PRO than CER.
- PRO: `p0-002-a` remains possible; `p0-003-b` becomes a possible replacement candidate.
- CON: `2790` is a plausible first candidate but a second independent exemplar still needs evidence.
- AUT/CER/EXP still require nearest-neighbour cleanup and direct visual review.

Raw recovered count is not evidence of usable semantic coverage. **INF, MAS and OPP are confirmed design gaps at the current evidence threshold.**

## Risk flag

**Influence / INF remains the first generation-review priority.** The old prototype called Influence coverage especially weak, the semantic pre-audit quarantined both mapped INF candidates, and the File Library recovery did not provide a clean replacement.

Do not keep a weak INF image merely to satisfy a nominal two-file quota.

**Opportunity / OPP is the highest semantic-overlap risk.** A generated OPP scene must show future value/gain, not just openness, movement, curiosity or choice.

## Important methodological warning inherited from earlier review

Do not treat existing or generated images as validated constructs merely because they were designed for a direction. Previous review identified uncontrolled low-level visual confounds and circular construct-assignment risks. PrioLens needs exemplar-level review before stimulus freeze.

Specific selection rule:

- two conceptually independent exemplars per direction
- same intended direction, different scene/content realization
- avoid using a single old A/B manipulation as the basis for both final exemplars
- audit brightness/contrast/complexity/salience/style
- avoid text/UI cues unless controlled across all final assets
- immutable PrioLens asset ID + content hash after freeze
- document mapping rationale independently from legacy filenames
- generated candidates must receive blind semantic screening before final-set promotion

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
- `/tools/priolens/docs/FILE_LIBRARY_VISUAL_AUDIT_v0.1.md`
- `/tools/priolens/docs/STIMULUS_GENERATION_BRIEFS_v0.1.md`
- `/tools/priolens/PROJECT_STATE.md` (this file)

## Next priority work

1. Generate the Stage A weak-direction candidate pool defined in `STIMULUS_GENERATION_BRIEFS_v0.1.md`: 3 INF + 3 MAS + 3 OPP neutral-ID scenes.
2. Directly review every generated candidate for semantic fit and low-level visual confounds; reject rather than rescue ambiguous outputs.
3. Run the required nearest-neighbour challenge, especially MAS↔INF and OPP↔AUT/EXP.
4. Continue direct historical review opportunistically for CON/PRO and AUT/CER/EXP; exact historical reserves remain eligible if they beat generated candidates.
5. Select two sufficiently independent candidates per direction only after evidence supports them.
6. Run a cross-set confound audit across the proposed final 16 and re-render selected generated concepts if normalization is needed.
7. Copy only selected/frozen assets into a PrioLens-owned asset path; do not create runtime dependency on ConflictLab URLs.
8. Freeze exact neutral participant prompt.
9. Freeze choice-commit event (`pointerdown`, `pointerup`, or `click`) based on intended timing semantics and compatibility.
10. Implement and test deterministic 28-edge session planner with exemplar and position balancing.
11. Implement measured renderer and preflight.
12. Implement descriptive result trace.
13. Only then freeze protocol/stimulus versions and expose public participation.

## Current blocker boundary

The project is **not blocked on planner code, visual access or exact retrieval of every historical reserve**.

The active blocker is stimulus evidence quality: generate and audit defensible INF/MAS/OPP candidates, then obtain two independent exemplars for all eight directions and pass the cross-set confound audit.

No generated or historical candidate can receive a final visual-confound pass without direct visual review. No 16-stimulus freeze is authorized yet.

## New-chat / new-project recovery instruction

If conversation context is lost, start from this file, then `PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md`, `docs/DIRECTION_DEFINITIONS_v0.1.md`, `docs/STIMULUS_GENERATION_BRIEFS_v0.1.md`, `docs/STIMULUS_SEMANTIC_PREAUDIT_v0.1.md`, `docs/FILE_LIBRARY_VISUAL_AUDIT_v0.1.md`, `docs/ASSET_INVENTORY_v0.1.md`, and draft PR #9. Do not reconstruct the product from ConflictLab or 2Pair memory. Treat this file as the current handoff checkpoint until superseded by a newer project-state file or merged architecture decision.
