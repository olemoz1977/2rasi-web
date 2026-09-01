# PrioLens project state

Status: ACTIVE RESEARCH / OPEN14 v0.2 / OWNER ASSET REVIEW COMPLETE / PRE-PILOT HARDENING
Updated: 2026-09-01
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Read first

1. `RESUME_HERE.md`
2. `docs/OPEN14_FINAL_ASSET_BANK_v0.1.md`
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
- complete validated human-priority taxonomy.

Target public duration remains roughly 2–4 minutes. `no_clear_choice` remains valid.

## Active architecture

### Channel A

Low-deliberation comparative visual choice with no need labels.

Working framing:
> **Low-deliberation comparative visual choice under reduced self-presentation opportunity.**

### Channel B

Current perceived sufficiency, collected only after Channel A.

Preferred term:
> **current perceived sufficiency landscape**

Do not assign one global Maslow stage and do not collapse both channels into one score.

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
13. KNOWLEDGE — display concept `Learning / Understanding`
14. OPPORTUNITY

This is a discovery shortlist, not a validated taxonomy.

`SUCCESS / ACHIEVEMENT` remains `DERIVED / THEORY-HOLD`.

## Stimulus bank

Owner remediation is complete for the current active bank.

Final audit workflow:
`33518074758` — SUCCESS.

Verified:
- 14 families;
- 28 active exemplars;
- 28/28 runtime binaries reachable;
- 28/28 square;
- no OCR hits for known KlingAI / Gemini / OpenAI watermark text;
- no active legacy REPLACE / SEARCH_REQUIRED / old HOLD blockers;
- owner `stimulus-bank.html` updated and stale hardcoded watermark flags removed.

Current technical bank:
`olemoz1977/omesg360/priolens/open14-v02/bank.json`

Current bank commit:
`2652f3db043f99436dc88afc1188aeb546f0313b`

Bank metadata:
- `status: PREPILOT_HARDENING`;
- `assetReviewStatus: OWNER_FINALIZED_FINAL_AUDIT_PASS`.

Final latest replacements:
- CONTROL-A: real-looking industrial joystick / direct system control;
- BELONGING-B: three-person shared coffee ritual;
- EXPLORATION-B: magnifier + unknown forest object;
- OPPORTUNITY-A: one prepared empty market stall inside an active market.

Their runtime derivatives are 640x640 WebP under:
`/priolens-research-assets/Open14-final-v01/`.

Original owner-uploaded PNGs remain unchanged under:
`/priolens-research-assets/Open14-v02/`.

Owner-readable map:
`https://omesg360.eu/priolens-open14-v02/stimulus-bank.html`

Do not reopen stimulus generation simply to seek theoretical purity. Reopen only if final mobile smoke or formative data exposes a concrete failure.

## Planner and exemplar rule

Per session:
- 14 triads;
- each family appears 3 times;
- each family 1/1/1 across positions;
- 3 distinct macro domains per triad;
- no repeated family pair;
- 42 unique pair co-occurrences;
- 6 unique opponents per family.

Per family:
- both exemplars shown;
- one appears twice, one once;
- total A/B balance 21/21;
- every screen slot 7 A / 7 B.

Primary family repetition requires:
`chosen_A > 0 && chosen_B > 0`.

Therefore same-exemplar repetition is not family-level evidence.

## Runtime state

One full mobile owner smoke completed on 2026-09-01.

Current runtime includes:
- 14 visual triads;
- `no_clear_choice`;
- RT as process telemetry only;
- exact exemplar identity;
- 12 post-visual sufficiency items;
- discrete hidden-number slider UI;
- JSON export;
- final automatic API submission;
- local autosave / resume;
- server-side incomplete checkpoints.

Production lifecycle smoke passed:
`partial -> final -> stale partial cannot overwrite final`.

Do not tune the bank to the owner's personal choice pattern.

## Perceived sufficiency

Six domains / twelve items remain conceptually active:
1. Restoration & resources;
2. Safety & stability;
3. Connection, belonging & support;
4. Agency & esteem;
5. Growth & capability;
6. Meaning & contribution.

UI:
- one discrete 5-step slider per item;
- anchors `Labai trūksta` / `Pakanka`;
- separate `Sunku pasakyti`;
- storage remains 1–5 and `null`.

Open issues:
1. participant-facing results must expose coverage; 1/2 answered must not look like a complete domain score;
2. visual CARE = proactive / giving care, while `CARE_SUPPORT_PRESENT` measures care/support present or received; do not treat them as construct-equivalent;
3. Meaning / Contribution has no active visual counterpart.

## Backend and retention

Dedicated Hostinger MySQL table:
`priolens_open14_sessions`.

Endpoints:
- final: `https://omesg360.eu/priolens-open14-api/api.php`;
- progress: `https://omesg360.eu/priolens-open14-api/progress.php`;
- health: `https://omesg360.eu/priolens-open14-api/health.php`.

Target retention: 90 days.

Operational:
- `created_at`;
- generated/indexed `expires_at = created_at + 90 DAY`;
- CLI-only cleanup script.

Still missing:
- Hostinger cron is not configured / smoked;
- therefore automatic physical deletion after 90 days is not yet guaranteed.

## Remaining pre-pilot hardening

1. one final mobile visual smoke on the finalized 28/28 bank;
2. fix sufficiency `null` / coverage display;
3. preserve CARE giving-vs-received-support asymmetry explicitly in result wording / logic;
4. configure and smoke 90-day cleanup cron;
5. then decide the first small external formative release.

External recruitment remains CLOSED until these are complete.

## Formative pilot target

When opened:
- 24–36 valid completions;
- ~30 practical target;
- stimulus / UX / family-boundary research, not validation.

Synthetic rows with `SYSTEM_SMOKE_DO_NOT_ANALYZE` must be excluded.

## Research question

Current testable question:
> **Do cross-exemplar repeated visual pulls show interpretable, non-trivial relationships with independently reported current sufficiency, beyond stimulus-specific salience and chance?**

Do not ask:
> `Does PrioLens correctly identify unmet needs?`

## Active stimulus rule

Use:
> **image → first spontaneous pull / meaning → candidate impulse family → KEEP / HOLD / DROP / REASSIGN / NEW-FAMILY**

Main pragmatic question:
> **What does a reasonable viewer see happening within about one second?**

Guardrail:
> **clear enough + engaging > theoretically pure + dead**
