# PrioLens Open14 bilingual runtime v0.1

Status: ACTIVE CHECKPOINT / LT+EN RUNTIME LIVE / PRE-PILOT HARDENING
Updated: 2026-09-02

## Decision

Open14 uses one bilingual runtime, not separate LT and EN codebases.

Routing:
- `?lang=lt&from=lt` -> Lithuanian participant UI and return to `2rasi.lt`;
- `?lang=en&from=com` -> English participant UI and return to `2rasi.com`;
- legacy `from=com` without `lang` infers English;
- default remains Lithuanian.

The same 14-family stimulus bank, planner, exemplar assignment, autosave, backend and result logic are used in both languages.

## Runtime

Source:
`olemoz1977/omesg360/priolens/open14-v02/index.html`

Runtime commit:
`b97c06e876cf2df0b0f3af3d043465d66b2ff845`

Workflow:
`Apply PrioLens bilingual runtime v02`

Run:
`33544864679` - SUCCESS.

Validation passed:
- inline module JavaScript syntax;
- PHP syntax for final and progress APIs;
- live source smoke;
- API health smoke;
- EN persistence lifecycle smoke run `33613108832`: partial checkpoint -> final submission -> stale partial blocked.

The EN synthetic persistence row uses `language: "en"`, seed `SYSTEM_SMOKE_DO_NOT_ANALYZE`, and must never enter pilot analysis.

A first migration attempt was stopped before commit/deploy by syntax validation. Live runtime was not touched by the failed attempt.

## Language telemetry

New sessions include:
`language: "lt" | "en"`

This is stored inside the existing JSON payload. No separate DB column and no session-schema bump were introduced.

The final and progress APIs accept the optional language field only when it is `lt` or `en`. Historical v0.2 sessions without a language field remain valid.

Draft storage is language-separated so LT and EN unfinished sessions do not collide. Legacy LT drafts can still be resumed.

## Channel B translation rule

The EN sufficiency items are semantic translations of the LT items, not new constructs or stylistic rewrites.

The same item IDs and 1-5 / null storage semantics are retained:
- RESTORATION_ENERGY
- MATERIAL_RESOURCES
- SAFETY_STABILITY
- CLARITY_PREDICTABILITY
- CONNECTION_BELONGING
- CARE_SUPPORT_PRESENT
- AUTONOMY_AGENCY
- RECOGNITION_ESTEEM
- LEARNING_GROWTH
- CAPABILITY_MASTERY
- MEANING_PURPOSE
- CONTRIBUTION

Language must be retained in analysis so LT and EN response distributions can be inspected separately before pooling.

## Retention wording correction

The participant intro previously said data are stored `up to 90 days` as if physical deletion were already guaranteed.

Because the automatic cleanup cron is not yet configured and smoked, wording is now explicitly provisional:
- LT: `Numatyta saugojimo trukmė - iki 90 dienų.`
- EN: `The intended retention period is up to 90 days.`

Do not claim guaranteed physical 90-day deletion until cron is operational.

## 2rasi entry preparation

Feature-branch landing:
`tools/priolens/index.html`

Landing commit:
`8cc8e2d03506f021119e5c4465427b5af86754fa`

The landing now routes:
- `2rasi.lt` -> Open14 `lang=lt&from=lt`;
- `2rasi.com` -> Open14 `lang=en&from=com`.

The owner mobile browser confirms the 10th PrioLens card is already visible on public `2rasi.lt`. Its approved copy is:
- LT: `Pirmas žvilgsnis ir antras atsakymas ne visada rodo tą patį.`
- EN: `A first glance and a second answer do not always show the same thing.`

The feature branch was restored to this copy in commit `383ef9bf6c20a7f45a15bd4ee86147a02540efa4`.

Automated GitHub-runner smoke could not connect to `2rasi.lt` (TCP/443 timeout), so `.com` and public landing/return reachability remain a manual-browser verification item rather than a claimed CI pass.

## Research guardrails unchanged

Bilingual support does not change the construct model.

Do not claim:
- personality diagnosis;
- subconscious / true self;
- faster = truer;
- visual pull = unmet need;
- one global need score.

CARE asymmetry remains important:
- visual CARE = proactive / giving care;
- `CARE_SUPPORT_PRESENT` = care/support present or received.

Current comparison logic therefore does not directly map visual CARE into the CONNECTION_SUPPORT sufficiency domain.

## Remaining pre-pilot hardening

1. one fresh full mobile participant smoke in LT and one focused EN smoke, including result summary, restart and return route;
2. explicitly freeze/document CARE giving-vs-received asymmetry as an analysis rule;
3. configure and smoke the 90-day cleanup cron;
4. clean or explicitly exclude current owner/household/system test rows before pilot analysis begins;
5. manually smoke public `.lt` and `.com` card -> landing -> Open14 -> return routing;
6. only then open the first small external formative recruitment.

External recruitment remains CLOSED.
