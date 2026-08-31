# PrioLens project state

Status: ACTIVE RESEARCH / OPEN14 v0.2 / DESIGN PREP COMPLETE / EXTERNAL-ACTION GATES
Updated: 2026-09-01
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Read first

1. `RESUME_HERE.md`
2. `docs/NEW_CHAT_SOURCE_OF_TRUTH_v0.1.md`
3. this file

Then open only the canonical doc needed for the task.

Older Open14 v0.1 docs and `PERCEIVED_SUFFICIENCY_LAYER_v0.1.md` are historical checkpoints.

## Product boundary

Canonical phrase:
> **For Fun with Wisdom**

PrioLens remains a short visual-choice experience.

Do not claim:
- personality diagnosis;
- hidden / true self;
- subconscious truth;
- fast = true;
- latency = psychological strength;
- strong visual response = unmet need;
- complete validated human-priority taxonomy;
- Karpman roles from image choices.

Target public duration remains roughly 2–4 minutes. `no_clear_choice` stays valid.

## Active architecture

### Channel A — revealed visual priority

Low-deliberation comparative visual choice with no need labels.

Working framing:
> **Low-deliberation comparative visual choice under reduced self-presentation opportunity.**

### Channel B — current perceived sufficiency

After the visual task, 12 short self-ratings across 6 broad domains.

Preferred term:
> **current perceived sufficiency landscape**

Do not assign one global Maslow stage.
Do not collapse the two channels into one score.

Canonical docs:
- `docs/NEED_STATE_AND_IMPULSE_PRIORITY_ARCHITECTURE_v0.1.md`;
- `docs/PERCEIVED_SUFFICIENCY_LAYER_v0.2.md`;
- `docs/TWO_CHANNEL_RESULT_SYNTHESIS_SPEC_v0.1.md`.

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

`SUCCESS / ACHIEVEMENT` is not an active atomic visual family.
Status: `DERIVED / THEORY-HOLD`.

Canonical family decision:
`docs/OPEN14_SOCIAL_SPLIT_AND_SUCCESS_DECISION_v0.1.md`.

## Four accepted missing-stimulus mechanisms

All four text mechanisms passed the human gate.

### CARE-A
`pasirūpinti kitu savo komforto sąskaita`

One person shifts the only umbrella toward another and accepts modest exposure to rain.

### CARE-B
`pastebėti ir padėti neprašytam`

One person starts helping gather another person's dropped everyday items before any visible request.

### RECOGNITION-A
`būti pastebėtam ir įvertintam kitų`

Small peer group gives restrained applause, natural smiles and one or more thumbs-up gestures toward one ordinary focal person.

### RECOGNITION-B — boundary probe
`mano nuomonė / kompetencija čia vertinama`

Visually equal peers actively seek one person's judgement on neutral shared material. No leader, teacher or specialist-status staging.

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
- missing real image assets: CARE-A, CARE-B, RECOGNITION-A, RECOGNITION-B;
- AUT-B backpack asset is preserved in `olemoz1977/omesg360/priolens/recovered-assets/priolens_aut_backpack_v01.webp`;
- its intended Hostinger runtime path remains unverified from the current automation path;
- do not claim that recovered Hostinger URL is live until actual smoke evidence exists.

## Planner

Canonical source:
`research/p3_open14_planner_v02.mjs`.

Design invariants:
- 14 triads;
- each family exactly 3 appearances;
- each family exactly 1/1/1 across screen slots;
- 3 distinct macro domains per trial;
- no repeated family pair;
- 42 unique pair co-occurrences;
- 6 unique opponents per family.

Planner is browser-safe for ES-module import.

## Two-exemplar / three-appearance correction

Problem:
- each family has 2 exemplars but 3 appearances.

Canonical assigner:
`research/p3_open14_exemplar_assigner_v01.mjs`.

Per session:
- both exemplars shown;
- one appears twice, one once;
- exactly 7 families repeat A and 7 repeat B;
- A/B total = 21/21;
- every screen slot = 7 A / 7 B.

Balancing logic checked across 1000 simulated assignments.

### Family-level repetition rule

Primary family repetition requires:
`chosen_A > 0 && chosen_B > 0`.

Therefore:
- 2/3 across both exemplars = cross-exemplar repeated;
- 2/3 concentrated on the same repeated exemplar = exemplar-specific, not family-level evidence;
- 3/3 necessarily crosses exemplars.

Preserve exact exemplar identity in exports.

## Perceived sufficiency v0.2

Canonical:
`docs/PERCEIVED_SUFFICIENCY_LAYER_v0.2.md`.

Six domains / twelve items:
1. Restoration & resources;
2. Safety & stability;
3. Connection, belonging & support;
4. Agency & esteem;
5. Growth & capability;
6. Meaning & contribution.

Important asymmetries:
- visual CARE = giving/proactive care;
- self-report CARE_SUPPORT_PRESENT = perceived care/support present in one's life;
- do not equate them;
- Meaning/Contribution currently has no active visual counterpart.

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

Separate non-live package in `olemoz1977/omesg360/priolens/open14-v02/`:
- `index.html`;
- `bank.json`;
- `p3_open14_planner_v02.mjs`;
- `p3_open14_exemplar_assigner_v01.mjs`.

Runtime behavior:
- fail-closed if any required runtime path is null;
- 14 visual triads;
- `no_clear_choice`;
- RT separate telemetry;
- exact exemplar identity retained;
- 12 post-visual sufficiency taps;
- cross-exemplar result logic;
- JSON export;
- no latent psychological model.

Historical live `omesg360.eu/priolens/` P3 v0.4 has **not** been replaced.

## External pilot preparation

Prepared:
- `docs/OPEN14_EXTERNAL_PILOT_PROTOCOL_v0.1.md`;
- `docs/OPEN14_FAMILY_DECISION_RULES_v0.1.md`;
- `docs/OPEN14_DATA_INGESTION_CONTRACT_v0.1.md`.

First external pilot:
- formative, not validation;
- target 24–36 valid completions, ~30 practical target;
- primary evidence includes UX, no-clear, exemplar asymmetry, cross-exemplar repetition and descriptive sufficiency relationships.

Family decisions after data use:
- KEEP;
- HOLD;
- REASSIGN;
- MERGE;
- SPLIT;
- DROP from visual channel.

Do not preserve 14 merely because the planner is elegant.

## Backend finding

Existing `olemoz1977/omesg360/wave1/api.php` proves the current Hostinger environment already supports a usable PHP + MySQL research-collection pattern:
- POST JSON validation;
- UUID validation;
- allow-lists;
- PDO prepared statements;
- DB error handling;
- simple rate limiting.

Current recommendation for the first ~30-person pilot:
> **reuse Hostinger PHP + MySQL rather than create a new Vercel/Supabase project.**

Canonical note:
`docs/OPEN14_BACKEND_REUSE_DECISION_NOTE_v0.1.md`.

Prepared but **not deployed** in `olemoz1977/omesg360/priolens/open14-v02/server/`:
- `api.example.php`;
- `schema.sql`;
- `config.example.php`.

No DB table has been created.
No real credentials are committed.
No endpoint has been deployed.
No retention behavior has changed.

Existing general Hostinger deploy is frontend-only by construction, so these drafts do not auto-deploy as a production backend.

## Research question

Do not ask:
> `Does PrioLens correctly identify unmet needs?`

Current testable question:
> **Do cross-exemplar repeated visual pulls show interpretable, non-trivial relationships with independently reported current sufficiency, beyond stimulus-specific salience and chance?**

## Active stimulus rule

Do not optimize toward laboratory sterility.

Use:
> **image → first spontaneous pull / meaning → candidate impulse family → KEEP / HOLD / DROP / REASSIGN / NEW-FAMILY**

Main pragmatic question:
> **What does a reasonable viewer see happening within about one second?**

## Immediate next action — USER GATE

All reversible theory/runtime/pilot preparation that can be done safely without external deployment or image generation is complete.

Two real action gates remain:

### Gate A — missing image prototypes

Requires explicit user request to create images.

If approved:
1. create only CARE-A, CARE-B, RECOGNITION-A, RECOGNITION-B;
2. pragmatic first-read audit;
3. reject/reassign failed prototypes rather than endlessly rescue them;
4. wire accepted runtime paths;
5. verify AUT-B Hostinger runtime path;
6. run one technical/design smoke session.

### Gate B — pilot data backend

Recommended path: existing Hostinger PHP + MySQL.

Requires explicit approval before:
- creating the DB table;
- deploying the API endpoint;
- setting real retention/access behavior.

If approved:
1. choose retention period and raw-data access method;
2. review API/schema drafts;
3. execute DB schema;
4. deploy API to dedicated research path;
5. add anonymous session UUID + POST/retry/fallback export to runtime;
6. negative validation + HTTP smoke;
7. only then recruit external participants.

Do not deploy Open14 over historical live v0.4 yet.

## Guardrails

- no sterile-image optimization for its own sake;
- no forced seven/eight/fourteen completeness;
- no theory-first rationalization;
- no `strong visual response = unmet need` claim;
- no direct neural-system inference;
- no Karpman diagnosis;
- no RT-as-psychological-strength;
- no strict 1–14 rank from sparse pair coverage;
- preserve exemplar identity;
- expose uncertainty;
- keep **For Fun with Wisdom**.
