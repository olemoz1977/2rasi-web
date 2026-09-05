# WorkStyle web assets

This directory contains several historical WorkStyle instrument generations. Do not infer the current methodology from the directory name `workstyle15` or from the legacy `index.html`.

## Current R&D form

Invited cognitive pilot URL:

`https://2rasi.com/tools/workstyle15/v07-cognitive.html`

Current form/instrument version:

`0.7-cognitive-8axis-lt-e`

Current LT wording/content version:

`v07-lt-d`

Current files:
- `v07-cognitive.html` — current shell, interaction, block/order engine, timing and export;
- `v07-content-lt.js` — current LT situation content pack;
- `analyze-v07.py` — multi-session cognitive-signal analyzer; no respondent scoring;
- `validate-v07.mjs` — engineering sanity validator for content and balanced ordering.

Current methodology source of truth is repository root:

`WORKSTYLE_CURRENT_DECISIONS.md`

Current pilot instructions:

`WORKSTYLE_V07_COGNITIVE_PILOT_RUNBOOK.md`

## Why the folder is still named `workstyle15`

The route predates the current 8-axis hypothesis. Renaming/moving it during the cognitive pilot would create unnecessary URL churn and could break historical links.

`workstyle15` is therefore currently a **technical legacy route name**, not a claim that the current model has 15 dimensions.

A clean product route/name can be chosen later, after the cognitive architecture stabilises.

## Historical assets

The following belong to earlier WorkStyle generations and are retained for provenance / comparison:
- `index.html`, `app.js`, `data.js`, `styles.css` — earlier v0.4-era implementation;
- `v05.html`, `app-v05.js`, `v05-config.js`, `v05.css` — v0.5 45-item phase;
- `v06.html`, `v06-config.js` — v0.6 45-item phase;
- supporting label/form files from the 15-dimension architecture.

Do not silently update these files to match v0.7. Historical instrument versions must stay reconstructable.

## Current boundary

WorkStyle v0.7 is:
- a 2rasi research / for-fun prototype;
- primarily bipolar;
- 34 cognitive-pilot situations;
- 8 candidate axes, count not protected;
- not a validated assessment;
- not a hiring / promotion / role-fit tool;
- not scored for participants yet.

Leadership SJT work is a separate parked future module and does not belong in the current WorkStyle form.
