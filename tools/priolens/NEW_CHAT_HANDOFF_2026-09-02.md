# PrioLens — new chat handoff

Date: 2026-09-02
Status: convenience handoff only — NOT source of truth
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`

## Mandatory startup

Do not reconstruct PrioLens from chat memory.

Read in this order:
1. `tools/priolens/RESUME_HERE.md`
2. `tools/priolens/PROJECT_STATE.md`
3. `tools/priolens/docs/OPEN14_PILOT_COHORT_RULE_v0.1.md`
4. `tools/priolens/docs/OPEN14_CARE_ANALYSIS_RULE_v0.1.md`
5. `tools/priolens/docs/OPEN14_BILINGUAL_RUNTIME_v0.1.md`
6. older checkpoints only if needed

If this handoff conflicts with those files, the canonical repo files win.

## Current state in one screen

Open14 v0.2 is in **pre-pilot hardening**, not construct validation.

Already live / closed:
- final 14-family / 28-exemplar stimulus bank;
- 28/28 square active assets and final owner remediation;
- mobile accessibility fixes;
- visible horizontal no-clear-choice control;
- explicit unanswered slider state and inline validation;
- autosave / resume and final API upsert lifecycle;
- participant result completion with short synthesis;
- coverage-aware Channel B result rendering;
- participant-facing repeat and return-to-2rasi actions;
- raw JSON / diagnostics hidden from normal participant mode;
- one bilingual LT+EN Open14 runtime;
- session `language: lt|en` persisted;
- CARE giving-vs-received-support boundary frozen;
- pilot cohort inclusion/exclusion rule frozen.

Live Open14 runtime:
`https://omesg360.eu/priolens-open14-v02/`

Language routing:
- LT: `?lang=lt&from=lt`
- EN: `?lang=en&from=com`

Owner-readable stimulus bank:
`https://omesg360.eu/priolens-open14-v02/stimulus-bank.html`

## 2rasi entry state

PrioLens is card 10.
Owner-approved homepage hook:
- LT: `Pirmas žvilgsnis ir antras atsakymas ne visada rodo tą patį.`
- EN: `A first glance and a second answer do not always show the same thing.`

Owner mobile-browser evidence confirms card 10 is already visible publicly on `2rasi.lt`.
The PrioLens landing in the feature branch is aligned with Open14 and bilingual routing.

Do not assume `.com` or the full public entry/return path is verified until manually smoked in browser.

## Remaining pre-pilot work

1. Run one fresh full mobile LT participant smoke.
2. Run one focused EN smoke.
3. In both, check result summary, coverage states, `Atlikti dar kartą / Try again`, and return to the correct 2rasi domain.
4. Manually smoke public `.lt` and `.com` card -> landing -> Open14 -> return path.
5. Configure and smoke the 90-day Hostinger cleanup cron.
6. Only when recruitment intentionally opens, record `PILOT_OPENED_AT_UTC` and then open the external formative cohort.

External recruitment is still CLOSED.

## Pilot cohort rule

Do not delete pre-pilot DB rows merely to create a clean cohort.
Use the canonical cutoff rule in `OPEN14_PILOT_COHORT_RULE_v0.1.md`.
Always exclude seed `SYSTEM_SMOKE_DO_NOT_ANALYZE`.
Do not use owner / household / technical rows as construct evidence.
Keep `language` as an analysis factor; do not pool LT/EN blindly.

## Research / interpretation guardrails

Current research question:
> Do cross-exemplar repeated visual pulls show interpretable, non-trivial relationships with independently reported current sufficiency, beyond stimulus-specific salience and chance?

Do not claim:
- personality diagnosis;
- subconscious or true-self access;
- fast = true;
- RT = psychological strength;
- visual pull = unmet need;
- one global need score.

CARE rule:
- visual CARE = proactive care-giving;
- `CARE_SUPPORT_PRESENT` = care/support present or received;
- do not directly compare them in v0.2.

Keep `For Fun with Wisdom`.

## Working-style constraint

Work critically and concretely. Do not flatter. Act when the step is clear and reversible.

**Do not generate, redraw, edit or otherwise create images unless the user explicitly asks to generate/draw/edit an image.** Uploaded or shown images are not permission to generate replacements.

When current repo state contradicts older chat context, say so and follow the repo.
