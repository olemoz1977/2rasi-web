# PrioLens — RESUME HERE

Status: ACTIVE / OPEN14 v0.2 / OWNER ASSET REVIEW COMPLETE / MOBILE UX HARDENED / PARTICIPANT COMPLETION LIVE / BILINGUAL LT+EN LIVE / PRE-PILOT HARDENING
Updated: 2026-09-02
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Rule

**Chat history is not the project memory.**

Recovery order:
1. read this file;
2. read `PROJECT_STATE.md` for architecture / runtime background;
3. read `docs/OPEN14_PILOT_COHORT_RULE_v0.1.md` for analysis inclusion/exclusion;
4. read `docs/OPEN14_CARE_ANALYSIS_RULE_v0.1.md` for the frozen CARE boundary;
5. read `docs/OPEN14_BILINGUAL_RUNTIME_v0.1.md` for the bilingual architecture;
6. read `docs/OPEN14_PREPILOT_SMOKE_FINDINGS_2026-09-02.md` for the latest UX / public-routing checkpoint;
7. read `docs/OPEN14_PARTICIPANT_SURFACE_v0.1.md` for the latest participant intro / result presentation rule;
8. read `docs/OPEN14_PARTICIPANT_COMPLETION_v0.1.md`;
9. read `docs/OPEN14_MOBILE_ACCESSIBILITY_HARDENING_v0.1.md`;
10. read `docs/OPEN14_FINAL_ASSET_BANK_v0.1.md` for the finalized active stimulus bank;
11. read older docs / File Library only when needed.

If an older runtime / UX section conflicts with the pre-pilot smoke checkpoint, the smoke checkpoint wins. For participant intro / result presentation, `OPEN14_PARTICIPANT_SURFACE_v0.1.md` wins over the older participant-completion presentation. The bilingual-runtime checkpoint remains canonical for language architecture.

## Current architecture

Channel A = low-deliberation comparative visual priority.
Channel B = current perceived sufficiency collected only after the visual task.

No combined psychological score.
No global Maslow stage.
No `visual pull = unmet need` claim.

Active Open14 v0.2 families:
- BASIC: REST, RESOURCE, SAFETY, ORDER;
- SOCIAL: CONNECTION, BELONGING, CARE;
- AGENCY / ESTEEM: AUTONOMY, CONTROL, RECOGNITION;
- GROWTH / COGNITIVE / POSSIBILITY: MASTERY, EXPLORATION, KNOWLEDGE / Learning-Understanding, OPPORTUNITY.

`SUCCESS / ACHIEVEMENT` remains `DERIVED / THEORY-HOLD`.

## Runtime state

Current participant runtime includes:
- 14 visual triads;
- 12 post-visual sufficiency items;
- hidden-number 5-step slider UI;
- `Sunku pasakyti / Hard to say = null`;
- no visible slider thumb until a numeric 1–5 response is actually chosen;
- persistent secondary `Išeiti / Exit` action on all screens;
- local autosave / resume;
- server-side incomplete checkpoints;
- final API upsert using the same `sessionUuid`;
- stale partial protection;
- mobile readability / unanswered-state hardening;
- participant-facing three-part result hierarchy (`Pirmas žvilgsnis / First glance` -> `Antras atsakymas / Second answer` -> `Pažvelk dar kartą / Look again`);
- coverage-aware sufficiency logic with incomplete domains omitted from complete participant interpretation;
- clear repeat and 2rasi return actions;
- raw JSON export and diagnostics hidden from normal participants;
- one bilingual LT/EN runtime selected by `lang=lt|en`;
- `language` stored in new session payloads;
- language-separated local drafts.

Production lifecycle smoke passed:
`partial -> final -> stale partial cannot overwrite final`.

Do not use owner or household smoke runs as construct evidence.

### Mobile UX hardening live

Runtime commit:
`6ed9fd59cf8b715cf99d03427084a9cd38ff722d`

Workflow run:
`33540650020` — SUCCESS.

Changes:
- `Nė vienas aiškiai` moved from a narrow vertical strip to a horizontal 48 px button below the three images;
- trial prompt / counter enlarged;
- sufficiency statements enlarged to 18 px;
- support labels / helper text increased in size and contrast;
- unanswered sliders explicitly show `Neatsakyta`;
- missing answers receive inline high-contrast validation instead of relying on browser `alert()`.

Messenger JSON export hardening commit:
`5e0f8881e93d53e3fac5c22c6f5587e30bc18053`.

### Participant completion live

Runtime commit:
`98d4204ebc178288931af0ec3ef1a42693fc8fd2`

Workflow run:
`33542878842` — SUCCESS.

Changes at that checkpoint:
- result originally gained a short participant-facing synthesis; this presentation is now superseded by `OPEN14_PARTICIPANT_SURFACE_v0.1.md`, while the underlying coverage rule remains active;
- `Nauja sesija` became `Atlikti dar kartą`;
- added `Grįžti į 2rasi`;
- sufficiency coverage is explicit: 0/2, 1/2 partial, 2/2 complete;
- only complete 2/2 domains enter Channel A vs Channel B comparison / summary logic;
- raw JSON export and diagnostics are debug-only.

### Bilingual LT/EN runtime live

Runtime commit:
`b97c06e876cf2df0b0f3af3d043465d66b2ff845`

Workflow run:
`33544864679` — SUCCESS.

EN persistence lifecycle smoke:
`33613108832` — SUCCESS (`partial -> final -> stale partial blocked`) using `language: "en"` and `SYSTEM_SMOKE_DO_NOT_ANALYZE`.

Routing:
- `?lang=lt&from=lt` -> LT participant UI and return to `2rasi.lt`;
- `?lang=en&from=com` -> EN participant UI and return to `2rasi.com`;
- legacy `from=com` without `lang` infers EN;
- default remains LT.

New session payloads include `language: "lt" | "en"`.
Historical Open14 v0.2 rows without `language` remain accepted.
LT and EN unfinished drafts use separate localStorage keys; legacy LT drafts remain resumable.

Channel B uses the same 12 item IDs in both languages. EN wording is a semantic translation, not a new construct version. Keep language during analysis until LT/EN comparability is inspected.

Participant retention wording is now explicitly provisional (`numatyta / intended up to 90 days`) because cleanup cron is not yet operational.

### Pre-pilot smoke fixes live — 2026-09-02

Owner PC smoke exposed a measurement-relevant Channel B ambiguity: after selecting `Sunku pasakyti`, the native midpoint slider thumb became dark although the stored value was `null`.

Runtime fix commit:
`05c6d95a6eccdff102a9244c6aab2e8ea455512d`

Deployment / live-source smoke workflow:
`33620120366` — SUCCESS.

Now:
- no numeric response -> slider thumb hidden;
- `Sunku pasakyti / Hard to say` -> slider thumb remains hidden and the explicit button carries the state;
- numeric interaction -> thumb appears and 1–5 is stored;
- persistent `Išeiti / Exit` is available on all screens and routes back to the correct 2rasi domain;
- autosave / resume remains active.

Canonical detailed checkpoint:
`docs/OPEN14_PREPILOT_SMOKE_FINDINGS_2026-09-02.md`

### Participant surface hardened — 2026-09-02

Canonical participant-surface checkpoint:
`docs/OPEN14_PARTICIPANT_SURFACE_v0.1.md`

Main participant-surface runtime commit:
`caa49b0dcb372fc085e79ec15fbd3fce66dd6d12`

Main deployment / live-source smoke workflow:
`33622563632` — SUCCESS.

Latest combined no-comparison edge commit:
`542f55627cee2f1039dc15c3c91de7eb0770054d`

Latest edge deployment / live-source smoke workflow:
`33622980671` — SUCCESS.

Participant-facing changes:
- `Open14` is now internal-only terminology; normal UI shows `PrioLens` and `Tyrimo prototipas / Research prototype`;
- successful image-bank readiness checks disappear instead of occupying the intro;
- the intro is action-oriented and no longer reads like a technical runtime screen;
- result hierarchy is `Pirmas žvilgsnis / First glance` -> `Antras atsakymas / Second answer` -> `Pažvelk dar kartą / Look again`;
- normal participant results no longer show `0/2`, `1/2`, `2/2`, decimal domain averages or score bars;
- incomplete sufficiency domains remain in research data but are not presented as complete participant interpretations;
- raw diagnostics remain debug-only;
- the exact `no repeated theme + all Hard to say` edge now states both reasons for the absence of a valid comparison.

Research model, schema, CARE boundary and cohort rule are unchanged.

### CARE boundary frozen

Canonical analysis rule:
`docs/OPEN14_CARE_ANALYSIS_RULE_v0.1.md`

Open14 v0.2 intentionally does **not** compare visual CARE directly with `CARE_SUPPORT_PRESENT`. Visual CARE = proactive care-giving; Channel B item = care/support present or received. Keep both, but do not treat them as equivalent constructs.

## Stimulus bank state

**Owner stimulus remediation is complete.**

Final asset audit:
- 14 families;
- 28 active exemplars;
- 28/28 active binaries reachable;
- 28/28 square;
- no OCR hits for known KlingAI / Gemini / OpenAI watermark text;
- no remaining active REPLACE / SEARCH_REQUIRED / old HOLD blockers.

Final package workflow:
`33518074758` — SUCCESS.

Final bank status:
- `status: PREPILOT_HARDENING`;
- `assetReviewStatus: OWNER_FINALIZED_FINAL_AUDIT_PASS`.

Current technical bank commit:
`2652f3db043f99436dc88afc1188aeb546f0313b`

Latest final replacements:
- CONTROL-A -> industrial joystick;
- BELONGING-B -> three-person shared coffee ritual;
- EXPLORATION-B -> magnifier / unknown forest object;
- OPPORTUNITY-A -> one prepared empty market stall inside an active market.

Final derivatives are under:
`/priolens-research-assets/Open14-final-v01/`

Owner-readable bank:
`https://omesg360.eu/priolens-open14-v02/stimulus-bank.html`

Do not reopen asset generation / replacement work unless a concrete smoke failure or formative data gives a reason.

## 2rasi entry state

The canonical PrioLens card points to `/tools/priolens/`.

Homepage hook (owner-approved):
- EN: `A first glance and a second answer do not always show the same thing.`
- LT: `Pirmas žvilgsnis ir antras atsakymas ne visada rodo tą patį.`

Feature-branch restoration commit: `383ef9bf6c20a7f45a15bd4ee86147a02540efa4`.

The PrioLens landing page is aligned with Open14 and bilingual routing.
Latest feature-branch landing commit:
`11517309d064332142d8ad9cd89ab8b263ae2149`.

Prepared routing:
- `2rasi.lt` -> `https://omesg360.eu/priolens-open14-v02/?from=lt&lang=lt`;
- `2rasi.com` -> `https://omesg360.eu/priolens-open14-v02/?from=com&lang=en`.

### Public deploy drift found by manual smoke

Owner manual smoke on 2026-09-02 found that public `2rasi.com` card 10 opened LT Open14.

Root cause:
- the public-looking `hero-webgl` branch still linked card 10 directly to the Open14 root without `from` / `lang`;
- Open14 therefore correctly used its LT default;
- EN runtime itself was already present and operational.

Repository correction on `hero-webgl`:
`3162fc17699fb4cd5bb8b7102bbfd36cb1680cd2`.

Patch workflow:
`33620294591` — SUCCESS.

The correction adds the bilingual landing and routes card 10 through `/tools/priolens/`.

**Do not mark public `.com` PASS yet.** That workflow verified the branch correction, not an independent live public deployment. Manual `.com` re-smoke is still required. If public `.com` still opens LT after a fresh reload, investigate deployment plumbing / stale deployment rather than Open14 language logic.

Owner mobile browser continues to confirm that PrioLens card 10 is visible on public `2rasi.lt`.

## Pilot cohort boundary

Canonical inclusion/exclusion rule:
`docs/OPEN14_PILOT_COHORT_RULE_v0.1.md`

Existing owner, household and technical rows do not need destructive deletion to preserve analysis validity. The first external cohort requires an explicit `PILOT_OPENED_AT_UTC`; only completed rows at/after that cutoff can enter the cohort, and `SYSTEM_SMOKE_DO_NOT_ANALYZE` is always excluded. Keep `language` as an analysis factor.

## Live routes

Open14 runtime:
`https://omesg360.eu/priolens-open14-v02/`

Historical P3 v0.4:
`https://omesg360.eu/priolens/`

Final API:
`https://omesg360.eu/priolens-open14-api/api.php`

Progress API:
`https://omesg360.eu/priolens-open14-api/progress.php`

Health:
`https://omesg360.eu/priolens-open14-api/health.php`

## Remaining pre-pilot hardening

1. smoke the new participant intro and result hierarchy on mobile, including the all-`Sunku pasakyti / Hard to say` edge case;
2. run one fresh full mobile participant smoke in LT, including result presentation, repeat and return;
3. run one focused EN smoke through the new result presentation;
4. manually complete the public `.lt` and `.com` card -> landing -> PrioLens -> return journey;
5. configure and smoke the 90-day cleanup cron;
6. only when recruitment intentionally opens, record `PILOT_OPENED_AT_UTC` before distributing the recruitment link.

The supplied PC completion does **not** close the required full LT mobile smoke.

Target retention remains 90 days, but physical automatic deletion is not guaranteed until cron is configured and smoked.

External recruitment remains CLOSED.

## Research guardrail

Current research question:
> **Do cross-exemplar repeated visual pulls show interpretable, non-trivial relationships with independently reported current sufficiency, beyond stimulus-specific salience and chance?**

Do not claim:
- personality diagnosis;
- subconscious / true-self access;
- fast = true;
- RT = psychological strength;
- visual pull = unmet need.

Keep **For Fun with Wisdom**.
