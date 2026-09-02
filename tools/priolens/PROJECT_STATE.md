# PrioLens project state

Status: ACTIVE RESEARCH / OPEN14 v0.2 / OWNER ASSET REVIEW COMPLETE / MOBILE UX HARDENED / PARTICIPANT COMPLETION LIVE / BILINGUAL LT+EN LIVE / PRE-PILOT HARDENING
Updated: 2026-09-01
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Read first

1. `RESUME_HERE.md`
2. `docs/OPEN14_PILOT_COHORT_RULE_v0.1.md`
3. `docs/OPEN14_CARE_ANALYSIS_RULE_v0.1.md`
4. `docs/OPEN14_BILINGUAL_RUNTIME_v0.1.md`
5. `docs/OPEN14_PARTICIPANT_COMPLETION_v0.1.md`
6. `docs/OPEN14_MOBILE_ACCESSIBILITY_HARDENING_v0.1.md`
7. `docs/OPEN14_FINAL_ASSET_BANK_v0.1.md`
8. this file
9. older architecture docs only as needed

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

Current runtime includes:
- 14 visual triads;
- `no_clear_choice`;
- RT as process telemetry only;
- exact exemplar identity;
- 12 post-visual sufficiency items;
- discrete hidden-number slider UI;
- final automatic API submission;
- local autosave / resume;
- server-side incomplete checkpoints;
- participant-facing three-part result hierarchy (`First glance -> Second answer -> Look again`);
- coverage-aware sufficiency logic with incomplete domains excluded from complete participant interpretation;
- clear repeat / 2rasi return actions;
- raw JSON export and diagnostics hidden from normal participant mode;
- one bilingual LT/EN participant runtime;
- `language: lt|en` stored in new payloads;
- language-separated local drafts.

Production lifecycle smoke passed:
`partial -> final -> stale partial cannot overwrite final`.

Do not tune the bank to the owner's personal choice pattern.

### Mobile / in-app browser hardening

Informal household mobile smoke exposed three measurement-relevant UX failures:
- `Nė vienas aiškiai` was easy to miss as a 50 px vertical strip;
- sufficiency text / helper labels were too small for lower-vision reading;
- the unanswered slider looked like a valid midpoint because its thumb sat at 3 while only greyed.

These are UX findings only, not construct evidence or pilot data.

Accessibility runtime commit:
`6ed9fd59cf8b715cf99d03427084a9cd38ff722d`

Workflow run:
`33540650020` — SUCCESS.

Now:
- `Nė vienas aiškiai` is a horizontal 48 px minimum-height button below the triad;
- trial prompt / counter are larger;
- sufficiency statements are 18 px with larger line-height;
- domain titles, range anchors, helper text and `Sunku pasakyti` are larger / higher contrast;
- unanswered items explicitly show `Neatsakyta`;
- incomplete domains use inline high-contrast validation and mark missing items instead of relying on `alert()`.

Messenger JSON export was separately hardened after Blob-download failure in the in-app browser. Automatic server submission remains independent of manual export.

### Participant completion flow

Historical note: the later checkpoint `docs/OPEN14_PARTICIPANT_SURFACE_v0.1.md` supersedes the old `Trumpai / In short` result presentation. The completion actions and 0/2–1/2–2/2 coverage validity rule remain active, but technical coverage counts are no longer shown in normal participant results.

Informal household testing exposed a product completion failure: after reading the result, the participant asked what happens next.

Runtime commit:
`98d4204ebc178288931af0ec3ef1a42693fc8fd2`

Workflow run:
`33542878842` — SUCCESS.

Now:
- result begins with a short synthesis based only on existing descriptive evidence;
- `Nauja sesija` is now `Atlikti dar kartą`;
- `Grįžti į 2rasi` returns through constrained origin routing;
- raw JSON and diagnostics are debug-only.

### Bilingual LT/EN runtime

Runtime commit:
`b97c06e876cf2df0b0f3af3d043465d66b2ff845`

Workflow run:
`33544864679` — SUCCESS.

EN persistence lifecycle smoke run:
`33613108832` — SUCCESS. It verified `language: en` through partial checkpoint, final API submission, and stale-partial protection. The synthetic row uses `SYSTEM_SMOKE_DO_NOT_ANALYZE`.

One runtime serves both languages:
- LT: `?lang=lt&from=lt`;
- EN: `?lang=en&from=com`;
- legacy `from=com` without `lang` infers EN;
- default is LT.

The visual bank, planner, exemplar logic, autosave and backend are shared.
Channel B uses the same 12 item IDs and semantically matched LT/EN wording.
New payloads store `language: lt|en`; historical Open14 v0.2 rows without language remain valid.
Language must be retained during analysis before deciding whether LT and EN observations can be pooled.

The bilingual migration was syntax-checked before deployment. An earlier v01 migration attempt failed validation and did not touch live; v02 passed and deployed.

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
- LT anchors `Labai trūksta` / `Pakanka`;
- EN anchors `Far too little` / `Enough`;
- separate `Sunku pasakyti / Hard to say`;
- storage remains 1–5 and `null`;
- an unset slider is explicitly labeled as unanswered and is not treated as midpoint data.

Coverage issue CLOSED in runtime commit `98d4204ebc178288931af0ec3ef1a42693fc8fd2`:
- 0/2 numeric answers -> hard-to-say state;
- 1/2 -> explicit partial-information state, no full domain bar;
- only 2/2 complete domains enter Channel A vs Channel B comparison / summary logic.

CARE asymmetry is CLOSED as a pre-pilot ambiguity by `docs/OPEN14_CARE_ANALYSIS_RULE_v0.1.md`:
- visual CARE = proactive / giving care;
- `CARE_SUPPORT_PRESENT` = care/support present or received;
- no direct CARE <-> CARE_SUPPORT_PRESENT comparison in v0.2;
- current result logic correctly excludes CARE from CONNECTION_SUPPORT comparison.

Remaining conceptual asymmetry:
- Meaning / Contribution has no active visual counterpart; keep it contextual-only rather than inventing symmetry.

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
- CLI-only cleanup script;
- final / progress APIs accept optional `language` only when `lt` or `en`;
- production cleanup source parity verified;
- web execution denied with HTTP 403;
- live DB expiry column/index/invariant verified by workflow `33623739323` with `expiryMismatchRows = 0`.

Canonical retention checkpoint:
`docs/OPEN14_RETENTION_CRON_v0.1.md`

Still missing:
- Hostinger hPanel cron entry is not configured / smoked;
- first real cron output has not been observed;
- automatic physical deletion after 90 days is therefore not guaranteed.

Participant wording now says retention is **intended / numatyta** up to 90 days, not guaranteed.

Existing DB contains owner / household / system testing rows. They must be cleaned or explicitly excluded before pilot analysis; do not treat them as construct evidence.

## 2rasi entry / exit architecture

The 10th PrioLens homepage card already exists in `feature/priolens-architecture` and points to `/tools/priolens/`.

Homepage hook (owner-approved):
- EN: `A first glance and a second answer do not always show the same thing.`
- LT: `Pirmas žvilgsnis ir antras atsakymas ne visada rodo tą patį.`

Feature-branch restoration commit: `383ef9bf6c20a7f45a15bd4ee86147a02540efa4`.

The PrioLens landing is aligned with current Open14 and bilingual routing.
Latest landing commit:
`11517309d064332142d8ad9cd89ab8b263ae2149`.

Prepared routing:
- `2rasi.lt` -> `from=lt&lang=lt`;
- `2rasi.com` -> `from=com&lang=en`.

Owner mobile-browser evidence confirms the PrioLens card is already public on `2rasi.lt`.
GitHub-hosted HTTP smoke could not connect to `2rasi.lt` (TCP/443 timeout), so `.com` and the public landing/return path are not independently CI-verified and still need manual browser smoke.

Latest checkpoint:
`docs/OPEN14_BILINGUAL_RUNTIME_v0.1.md`

## Remaining pre-pilot hardening

1. run one fresh full mobile participant smoke in LT and one focused EN smoke, including summary, coverage states, restart and return;
2. create the Hostinger hPanel PHP cron for the verified cleanup script and smoke its first output;
5. manually smoke the public `.lt` and `.com` card -> landing -> PrioLens -> return path before recruitment.

External recruitment remains CLOSED until these are complete.

## Pilot cohort inclusion

Canonical rule:
`docs/OPEN14_PILOT_COHORT_RULE_v0.1.md`

Before recruitment, record one explicit UTC cutoff as `PILOT_OPENED_AT_UTC`. External analysis includes only complete rows at/after that cutoff with the frozen schema set. `SYSTEM_SMOKE_DO_NOT_ANALYZE` is excluded at all times. Pre-cutoff owner/household/technical rows remain UX/infrastructure evidence only. Physical deletion is optional and not required for methodological separation.

## Formative pilot target

When opened:
- 24–36 valid completions;
- ~30 practical target;
- stimulus / UX / family-boundary research, not validation.

Synthetic rows with `SYSTEM_SMOKE_DO_NOT_ANALYZE` must be excluded.
Language must remain available as an analysis factor; do not pool LT/EN blindly.

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
