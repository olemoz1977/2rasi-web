# PrioLens project state

Status: ACTIVE RESEARCH / OPEN14 v0.2 / TEXT MECHANISMS ACCEPTED / RUNTIME FAIL-CLOSED
Updated: 2026-09-01
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Read first

1. `RESUME_HERE.md`
2. `docs/NEW_CHAT_SOURCE_OF_TRUTH_v0.1.md`
3. `docs/NEED_STATE_AND_IMPULSE_PRIORITY_ARCHITECTURE_v0.1.md`
4. `docs/OPEN14_SOCIAL_SPLIT_AND_SUCCESS_DECISION_v0.1.md`
5. `docs/P3_OPEN_SPECTRUM_14_SPEC_v0.2.md`
6. `docs/OPEN14_ASSET_MATRIX_v0.2.md`
7. `docs/OPEN14_MISSING_SCENE_MECHANISMS_v0.2.md`
8. `docs/OPEN14_MISSING_STIMULUS_PRODUCTION_SPECS_v0.1.md`
9. `docs/PERCEIVED_SUFFICIENCY_LAYER_v0.2.md`
10. `docs/TWO_CHANNEL_RESULT_SYNTHESIS_SPEC_v0.1.md`
11. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
12. `docs/STIMULUS_SELECTION_PRAGMATIC_RULE_v0.1.md`
13. `docs/HOSTING_DEPLOYMENT_BOUNDARY_v0.1.md`
14. this file

Older Open14 v0.1 docs and `PERCEIVED_SUFFICIENCY_LAYER_v0.1.md` are historical checkpoints, not the active design.

## Product boundary

PrioLens remains a short visual-choice experience.

Canonical phrase:
> **For Fun with Wisdom**

Do not claim:
- personality diagnosis;
- hidden / true self;
- subconscious truth;
- fast = true;
- latency = psychological strength;
- strong visual response = unmet need;
- one complete validated taxonomy of human priorities;
- Karpman roles from image choices.

Target public duration remains roughly 2–4 minutes. `no_clear_choice` stays valid.

## Active two-channel architecture

### Channel A — revealed visual priority

Low-deliberation visual choice with no need labels.

Working framing:
> **Low-deliberation comparative visual choice under reduced self-presentation opportunity.**

### Channel B — current perceived sufficiency

After the visual task, 12 short self-ratings across 6 broad domains.

Preferred term:
> **current perceived sufficiency landscape**

Do not assign one global Maslow stage. Maslow-style levels are coarse coverage buckets only.

The two channels are compared descriptively. Do not collapse them into one unmet-need score.

Canonical synthesis:
`docs/TWO_CHANNEL_RESULT_SYNTHESIS_SPEC_v0.1.md`.

## Active Open14 v0.2 family set

### Basic / stability
1. REST
2. RESOURCE
3. SAFETY
4. ORDER

### Social
5. CONNECTION — direct contact / reciprocity
6. BELONGING — being with / part of others
7. CARE — acting for another's welfare

### Agency / esteem
8. AUTONOMY
9. CONTROL
10. RECOGNITION

### Growth / cognitive / possibility
11. MASTERY
12. EXPLORATION
13. KNOWLEDGE — working display concept `Learning / Understanding`
14. OPPORTUNITY

This is a discovery shortlist, not a fundamental-needs taxonomy.

`SUCCESS / ACHIEVEMENT` is not an active atomic family.
Status: `DERIVED / THEORY-HOLD`.

## CARE / RECOGNITION human gate

All four missing text-level mechanisms are accepted for prototyping.

### CARE-A
Small visible self-sacrifice:
- one person shifts the only umbrella toward another;
- helper accepts modest exposure to rain.

Target:
`pasirūpinti kitu savo komforto sąskaita`.

### CARE-B
Proactive help before visible request:
- one person has dropped simple everyday items while occupied;
- another person has already started helping.

Target:
`pastebėti ir padėti neprašytam`.

### RECOGNITION-A
Restrained peer acknowledgement:
- small peer group directs modest applause toward one person;
- natural smiles;
- one or more clear thumbs-up gestures;
- no award/winner framing.

Target:
`būti pastebėtam ir įvertintam kitų`.

### RECOGNITION-B
Accepted as `BOUNDARY_PROBE`:
- visually equal peers actively seek one person's judgement on neutral shared material;
- no leader, teaching or specialist-status cues.

Target:
`mano nuomonė / kompetencija čia vertinama`.

Main risk:
- may collapse into MASTERY, CONTROL/leadership, CONNECTION or BELONGING.

Canonical production constraints:
`docs/OPEN14_MISSING_STIMULUS_PRODUCTION_SPECS_v0.1.md`.

**Do not generate any image unless the user explicitly asks.**

## Active asset state

Canonical matrix:
`docs/OPEN14_ASSET_MATRIX_v0.2.md`.

Current:
- 24 existing/recovered assets cover 12 of 14 families;
- 4 accepted text-level prototypes still have no actual image asset: CARE-A, CARE-B, RECOGNITION-A, RECOGNITION-B;
- preferred AUT-B backpack image is preserved in `olemoz1977/omesg360/priolens/recovered-assets/priolens_aut_backpack_v01.webp`;
- its intended Hostinger path remains unverified from the current automation path, so runtime manifest keeps AUT-B `runtimePath = null` until real smoke evidence exists.

Do not claim the recovered Hostinger URL is live without verification.

## Open14 planner

Canonical source:
`research/p3_open14_planner_v02.mjs`.

Planner:
`cyclic-14x3-diff-1-4-slot-role-v0.2`.

Validated design invariants:
- 14 triads;
- each family exactly 3 appearances;
- each family exactly 1/1/1 across screen slots;
- 3 distinct macro domains per triad;
- no repeated family pair;
- 42 unique pair co-occurrences;
- 6 unique opponents per family.

Planner is browser-safe for ES-module import.

## Two-exemplar / three-appearance correction

Problem:
- each family has 2 exemplars;
- each family appears 3 times;
- naive A-B-A would let one repeated picture masquerade as family-level evidence.

Canonical assigner:
`research/p3_open14_exemplar_assigner_v01.mjs`.

Per session:
- both exemplars are always shown;
- one exemplar appears twice, the other once;
- exactly 7 families repeat A and 7 repeat B;
- total A/B appearances = 21/21;
- each screen slot receives exactly 7 A and 7 B appearances.

The balancing logic was checked across 1000 simulated assignments.

### Exemplar-aware result rule

Do not call a family `repeated` merely because it was chosen 2/3 times.

Primary family-level repetition requires:
`chosen_A > 0 && chosen_B > 0`.

Therefore:
- 2/3 across A and B = cross-exemplar repeated;
- 2/3 concentrated on the same repeated exemplar = exemplar-specific, not family-level repetition;
- 3/3 necessarily crosses exemplars.

Preserve exemplar identity in all exports.

## Perceived sufficiency v0.2

Canonical:
`docs/PERCEIVED_SUFFICIENCY_LAYER_v0.2.md`.

6 domains / 12 items:
1. Restoration & resources;
2. Safety & stability;
3. Connection, belonging & support;
4. Agency & esteem;
5. Growth & capability;
6. Meaning & contribution.

Important asymmetries:
- visual CARE = giving/proactive care; self-report care/support item = care/support present in one's life; do not equate them;
- Meaning/Contribution currently has no active Open14 visual counterpart;
- no forced one-to-one mapping exists merely for a tidy chart.

## Result synthesis

Canonical:
`docs/TWO_CHANNEL_RESULT_SYNTHESIS_SPEC_v0.1.md`.

Participant-facing structure:
1. `Kas kartojosi` — only cross-exemplar repeated visual families are primary;
2. `Kaip pats vertini dabartinę situaciją` — six sufficiency domains;
3. `Kur verta pažvelgti dar kartą` — at most 2–3 descriptive cross-channel observations;
4. uncertainty is surfaced rather than hidden.

No strict 1–14 rank.
No combined psychological score.
No `low sufficiency + visual pull = unmet need` claim.

## Runtime scaffold

`olemoz1977/omesg360` contains a separate, non-live Open14 v0.2 source package:
- `priolens/open14-v02/index.html`;
- `priolens/open14-v02/bank.json`;
- `priolens/open14-v02/p3_open14_planner_v02.mjs`;
- `priolens/open14-v02/p3_open14_exemplar_assigner_v01.mjs`.

Runtime behavior:
- fail-closed if any required `runtimePath` is null;
- 14 visual triads;
- `no_clear_choice`;
- RT retained as separate telemetry;
- exact exemplar identity retained;
- 12 post-visual sufficiency taps;
- cross-exemplar result logic;
- JSON export;
- no latent psychological model.

The historical live `/priolens/` P3 v0.4 runtime has **not** been replaced.

## Historical P3 v0.4 checkpoint

Live old-bank research runtime:
`omesg360.eu/priolens/`.

Latest old-bank owner run remains technical/design evidence only. Do not repeat it as validation.

## Active stimulus rule

Do not optimize toward laboratory sterility.

Use:
> **image → first spontaneous pull / meaning → candidate impulse family → KEEP / HOLD / DROP / REASSIGN / NEW-FAMILY**

Main pragmatic question:
> **What does a reasonable viewer see happening within about one second?**

Emotion is not a confound by itself. Systematic salience imbalance across families is the larger risk.

## Immediate next action

No additional user decision is needed for theory/runtime wiring.

Without generating images:
1. freeze the four accepted missing-stimulus text specs;
2. keep Open14 runtime fail-closed;
3. prepare the first external-human pilot protocol and analysis plan around cross-exemplar repetition + perceived sufficiency;
4. define what evidence would KEEP / MERGE / SPLIT / DROP a family after pilot data;
5. do not deploy Open14 over the historical live v0.4 runtime yet.

When the user explicitly requests image creation:
1. create only CARE-A, CARE-B, RECOGNITION-A and RECOGNITION-B;
2. audit each with the one-second pragmatic rule;
3. reject/reassign rather than endlessly rescue a failed scene;
4. wire accepted runtime paths;
5. then run an owner technical/design smoke test only;
6. move quickly to external human data.

## Research question

Do not ask:
> `Does PrioLens correctly identify unmet needs?`

Current testable question:
> **Do cross-exemplar repeated visual pulls show interpretable, non-trivial relationships with independently reported current sufficiency, beyond stimulus-specific salience and chance?**

## Guardrails

- no sterile-image optimization for its own sake;
- no forced seven/eight/fourteen theoretical completeness;
- no theory-first rationalization of images;
- no `strong visual response = unmet need` claim;
- no direct neural-system inference from image choice;
- no Karpman role diagnosis from visual choices;
- no Plackett–Luce weight as psychological strength;
- no strict 1–14 rank from sparse pair coverage;
- no repeated-owner old-bank run as validation;
- preserve exemplar identity;
- keep public experience aligned with **For Fun with Wisdom**.
