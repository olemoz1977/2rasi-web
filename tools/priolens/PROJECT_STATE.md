# PrioLens project state

Status: ACTIVE RESEARCH / OPEN14 v0.2 / LIVE OWNER-SMOKE READY
Updated: 2026-09-01
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Read first

1. `RESUME_HERE.md`
2. `docs/NEW_CHAT_SOURCE_OF_TRUTH_v0.1.md`
3. this file

Then open only the canonical doc needed for the task.

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
5. CONNECTION
6. BELONGING
7. CARE

### Agency / esteem
8. AUTONOMY
9. CONTROL
10. RECOGNITION

### Growth / cognitive / possibility
11. MASTERY
12. EXPLORATION
13. KNOWLEDGE — working display concept `Learning / Understanding`
14. OPPORTUNITY

This is a discovery shortlist, not a validated taxonomy.

`SUCCESS / ACHIEVEMENT` remains `DERIVED / THEORY-HOLD`.

Canonical family decision:
`docs/OPEN14_SOCIAL_SPLIT_AND_SUCCESS_DECISION_v0.1.md`.

## Asset state

Canonical active matrix:
`docs/OPEN14_ASSET_MATRIX_v0.3.md`.

Current:
- 14 families;
- 2 exemplars per family;
- 28 required runtime assets;
- 0 missing runtime paths;
- all active runtime paths HTTP-smoked where newly introduced;
- CARE-A, CARE-B, RECOGNITION-A and RECOGNITION-B are live pilot assets;
- AUT-B backpack asset is live at `/priolens-research-assets/Recovered/priolens_aut_backpack_v01.webp`;
- RECOGNITION-B remains a boundary probe;
- KNOWLEDGE-B remains a Learning / Understanding boundary probe.

Canonical host provenance for the four new CARE/RECOGNITION binaries:
`olemoz1977/omesg360/priolens/open14-v02/HOST_ASSET_PROVENANCE_v0.2.json`.

Important binary boundary:
- the available GitHub connector truncated binary uploads;
- corrupted repo binary copies were removed;
- verified Hostinger research-assets copies plus SHA-256 provenance are canonical for the current pilot checkpoint.

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

## Two-exemplar / three-appearance correction

Canonical assigner:
`research/p3_open14_exemplar_assigner_v01.mjs`.

Per session:
- both exemplars shown;
- one appears twice, one once;
- exactly 7 families repeat A and 7 repeat B;
- A/B total = 21/21;
- every screen slot = 7 A / 7 B.

Primary family repetition requires:
`chosen_A > 0 && chosen_B > 0`.

Therefore:
- 2/3 across both exemplars = cross-exemplar repeated;
- 2/3 concentrated on the same repeated exemplar = exemplar-specific, not family-level evidence;
- 3/3 necessarily crosses exemplars.

Preserve exact exemplar identity in exports and analysis.

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

## Live Open14 runtime

Canonical checkpoint:
`docs/OPEN14_LIVE_RUNTIME_CHECKPOINT_v0.1.md`.

Live owner-smoke route:
`https://omesg360.eu/priolens-open14-v02/`

Historical P3 v0.4 remains separate and untouched:
`https://omesg360.eu/priolens/`

Open14 source lives in `olemoz1977/omesg360/priolens/open14-v02/`:
- `index.html`;
- `bank.json`;
- `p3_open14_planner_v02.mjs`;
- `p3_open14_exemplar_assigner_v01.mjs`.

Live bank status:
`READY_FOR_OWNER_SMOKE`.

Runtime behavior:
- fail-closed if a required runtime path becomes null;
- 14 visual triads;
- `no_clear_choice`;
- RT separate telemetry;
- exact exemplar identity retained;
- 12 post-visual sufficiency taps;
- cross-exemplar result logic;
- JSON export;
- automatic API POST after completion;
- API failure does not block result rendering or manual JSON export.

## Backend state

Dedicated Hostinger MySQL exists:
- database `u986950573_priolens`;
- table `priolens_open14_sessions`.

Live endpoint:
`https://omesg360.eu/priolens-open14-api/api.php`

Health endpoint:
`https://omesg360.eu/priolens-open14-api/health.php`

Server-only `config.php` exists on Hostinger and is not committed.

Verified operational behavior:
- JSON POST validation;
- session/schema validation;
- UUID validation;
- exact 14-choice requirement;
- sufficiency-key validation;
- prepared PDO insert;
- idempotent retry by session UUID;
- live DB connectivity;
- real production INSERT path;
- health remains green after INSERT.

Synthetic infrastructure row:
- seed `SYSTEM_SMOKE_DO_NOT_ANALYZE`;
- fixed session UUID `00000000-0000-4000-8000-000000000001`;
- exclude from all pilot analysis;
- reruns are idempotent.

## Retention

Approved target retention: **90 days**.

Operational now:
- `created_at` stored;
- generated/indexed `expires_at = created_at + 90 DAY`;
- CLI-only `cleanup.php` deployed.

Not yet operational:
- no Hostinger cron is configured to execute cleanup;
- automatic physical deletion after 90 days is therefore not yet guaranteed.

Do not describe retention as fully operational until cron scheduling and cleanup smoke are complete.

## Smoke evidence

Host asset verification:
- workflow `Verify PrioLens Open14 host assets`;
- run `33452688466`;
- success.

Open14 runtime deploy:
- workflow `Deploy PrioLens Open14 runtime`;
- run `33452934088`;
- success.

Production API write smoke:
- workflow `Verify PrioLens Open14 API write path`;
- run `33453033200`;
- success.

## External pilot preparation

Canonical:
- `docs/OPEN14_EXTERNAL_PILOT_PROTOCOL_v0.1.md`;
- `docs/OPEN14_FAMILY_DECISION_RULES_v0.1.md`;
- `docs/OPEN14_DATA_INGESTION_CONTRACT_v0.1.md`;
- `docs/OPEN14_BACKEND_REUSE_DECISION_NOTE_v0.1.md`.

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

Do not recruit externally yet because retention cleanup is not fully operational and owner smoke has not been completed.

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

## Immediate next action — OWNER SMOKE

Run exactly one owner smoke session at:
`https://omesg360.eu/priolens-open14-v02/`

Check only:
- mobile geometry;
- image loading/cropping;
- whether 14 triads still feel fast/game-like;
- sufficiency-flow burden;
- result readability;
- automatic-save success/failure state;
- gross stimulus anomalies.

Do not use repeated owner runs as construct evidence or tune the bank to the owner's personal pattern.

After that one run:
1. fix clear technical/UX failures only;
2. configure and smoke the 90-day Hostinger cleanup cron;
3. then decide first external formative pilot release.

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
