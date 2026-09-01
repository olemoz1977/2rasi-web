# PrioLens project state

Status: ACTIVE RESEARCH / OPEN14 v0.2 / OWNER SMOKE COMPLETE / PRE-PILOT HARDENING
Updated: 2026-09-01
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Read first

1. `RESUME_HERE.md`
2. `docs/OPEN14_OWNER_SMOKE_AND_RUNTIME_HARDENING_v0.1.md`
3. this file
4. older architecture docs only as needed

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

Target public duration remains roughly 2–4 minutes. `no_clear_choice` remains valid.

## Active architecture

### Channel A — revealed visual priority

Low-deliberation comparative visual choice with no need labels.

Working framing:
> **Low-deliberation comparative visual choice under reduced self-presentation opportunity.**

### Channel B — current perceived sufficiency

Collected only after Channel A.

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

## Asset state

Canonical active matrix:
`docs/OPEN14_ASSET_MATRIX_v0.3.md`.

Current:
- 14 families;
- 2 exemplars per family;
- 28 runtime paths;
- CARE-A, CARE-B, RECOGNITION-A and RECOGNITION-B retained for pilot research;
- RECOGNITION-B remains a boundary probe;
- KNOWLEDGE-B remains a Learning / Understanding boundary probe;
- AUTONOMY-B backpack asset is live.

### New geometry finding

The completed mobile owner smoke exposed a real visual-area confound:
- portrait / 9:16 active assets occupy less visible area than square assets in the same slot;
- this can alter salience independently of stimulus meaning.

Therefore active geometry policy before external pilot:
- audit all 28 actual runtime binaries by dimensions;
- create 1:1 derivatives for every active non-square stimulus;
- do not stretch;
- do not solve by adding large empty margins;
- do not use blind `object-fit: cover` as the final normalization method;
- preserve first-glance meaning with reviewed crop / reframe;
- retain originals unchanged;
- switch bank paths only after derivative review.

This is the immediate stimulus priority.

## Planner and exemplar rule

Canonical planner:
`research/p3_open14_planner_v02.mjs`.

Per session:
- 14 triads;
- each family appears 3 times;
- each family 1/1/1 across positions;
- 3 distinct macro domains per triad;
- no repeated family pair;
- 42 unique pair co-occurrences;
- 6 unique opponents per family.

Canonical exemplar assigner:
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

## Owner smoke completed

One full mobile owner smoke completed on 2026-09-01.

Technical facts:
- all 14 visual trials completed;
- all 6 sufficiency screens completed;
- `no_clear_choice = 0`;
- median visual RT = 4332.5 ms;
- automatic final submission succeeded;
- planner and exemplar invariants held.

Owner-run family observations are not construct evidence.

Useful methodological demonstration from that run:
- BELONGING, MASTERY and SAFETY repeated across both exemplars;
- CARE and RECOGNITION repeated only on one exemplar each;
- therefore the cross-exemplar guardrail prevented stimulus-specific repetition from being mislabeled as family-level evidence.

Do not tune the bank to the owner's personal pattern.

## Perceived sufficiency v0.2

Six domains / twelve items remain conceptually active:
1. Restoration & resources;
2. Safety & stability;
3. Connection, belonging & support;
4. Agency & esteem;
5. Growth & capability;
6. Meaning & contribution.

### Participant-facing UI now

Visible numeric 1–5 Likert buttons are removed.

Each item uses:
- one discrete 5-step slider;
- left anchor `Labai trūksta`;
- right anchor `Pakanka`;
- separate `Sunku pasakyti` button.

Internal storage remains 1–5 and `null`, so this is a UI representation change rather than a new scale.

### Open sufficiency issues

1. `null` / `Sunku pasakyti` coverage must be surfaced in participant-facing domain results. A one-item answer must not silently look like a fully observed two-item domain score.
2. Visual CARE = proactive / giving care. `CARE_SUPPORT_PRESENT` = perceived care/support present or received in one's life. They are not construct-equivalent and must not be interpreted as a direct mismatch score.
3. Meaning / Contribution currently has no active visual counterpart.

## Live runtime

Open14 runtime:
`https://omesg360.eu/priolens-open14-v02/`

Historical P3 v0.4 remains separate:
`https://omesg360.eu/priolens/`

Open14 source lives in `olemoz1977/omesg360/priolens/open14-v02/`.

Runtime behavior now includes:
- fail-closed bank start;
- 14 visual triads;
- `no_clear_choice`;
- RT as process telemetry only;
- exact exemplar identity;
- 12 post-visual sufficiency items;
- discrete hidden-number slider UI;
- cross-exemplar result logic;
- JSON export;
- final automatic API submission;
- local autosave / resume;
- server-side incomplete checkpoints.

## Autosave / resume hardening

The previous final-only saving architecture is obsolete.

Current behavior:
- local checkpoint after every visual choice;
- local checkpoint after every sufficiency response;
- incomplete session survives reload / closed tab in the same browser/device;
- intro offers `Tęsti sesiją` and `Pradėti naują` when a valid draft exists;
- incomplete server checkpoint endpoint: `/priolens-open14-api/progress.php`;
- final endpoint: `/priolens-open14-api/api.php`;
- both use the same `sessionUuid`;
- final completion upserts over the incomplete row;
- stale partial checkpoints cannot overwrite a completed row.

Production lifecycle smoke passed:
`partial -> final -> stale partial cannot overwrite final`.

Incomplete sessions are useful dropout / UX evidence but must not be included as valid completed pilot observations.

Canonical latest runtime checkpoint:
`docs/OPEN14_OWNER_SMOKE_AND_RUNTIME_HARDENING_v0.1.md`.

## Backend state

Dedicated Hostinger MySQL:
- database `u986950573_priolens`;
- table `priolens_open14_sessions`.

Endpoints:
- final: `https://omesg360.eu/priolens-open14-api/api.php`;
- progress: `https://omesg360.eu/priolens-open14-api/progress.php`;
- health: `https://omesg360.eu/priolens-open14-api/health.php`.

Server-only `config.php` exists on Hostinger and is not committed.

Verified operational behavior:
- final JSON validation;
- partial checkpoint validation;
- UUID validation;
- exact final 14-choice requirement;
- partial 0–14 choice acceptance;
- prepared PDO writes;
- finalization by same session UUID;
- stale partial protection;
- live DB connectivity;
- production INSERT / UPDATE path.

Synthetic infrastructure rows use `SYSTEM_SMOKE_DO_NOT_ANALYZE` and must be excluded from pilot analysis.

## Retention

Approved target: **90 days**.

Operational now:
- `created_at` stored;
- generated/indexed `expires_at = created_at + 90 DAY`;
- CLI-only cleanup script deployed.

Not yet operational:
- no Hostinger cron configured to execute cleanup;
- automatic physical deletion after 90 days is therefore not guaranteed yet.

Do not describe retention as fully operational until cron scheduling and cleanup smoke are complete.

## External pilot

Prepared formative target:
- 24–36 valid completions;
- ~30 practical target;
- stimulus / UX / family-boundary research, not validation.

Do not recruit yet.

The immediate pre-pilot sequence is now:
1. complete current 28-asset geometry audit;
2. normalize every active non-square asset to reviewed 1:1 derivative;
3. mobile smoke normalized bank;
4. fix sufficiency `null` / coverage display;
5. preserve CARE visual-vs-self-report asymmetry explicitly;
6. configure and smoke 90-day cleanup cron;
7. then decide first small external formative release.

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

## Guardrails

- no sterile-image optimization for its own sake;
- no forced fourteen-family completeness;
- no theory-first rationalization;
- no `strong visual response = unmet need` claim;
- no direct neural-system inference;
- no Karpman diagnosis;
- no RT-as-psychological-strength;
- no strict 1–14 rank from sparse pair coverage;
- preserve exemplar identity;
- expose uncertainty;
- keep **For Fun with Wisdom**.
