# PrioLens blind visual stimulus validation — deployed technical checkpoint

Date: 2026-09-06
Status: DEPLOYED / LT+EN / STORAGE + SUMMARY TECHNICAL PASS / OWNER PARTICIPANT-FLOW REVIEW PENDING

## Scope

A separate blind semantic stimulus-screening tool is now live alongside the Open14 v0.4 public pilot.

It validates/selects **images**, not participants and not the PrioLens construct model.

Canonical protocol:
`PRIOLENS_VISUAL_STIMULUS_VALIDATION_PROTOCOL_v0.1.md`

## Public routes

- LT: `https://2rasi.lt/tools/priolens/validate/?lang=lt`
- EN: `https://2rasi.com/tools/priolens/validate/?lang=en`
- official landing: `https://2rasi.lt/tools/priolens/` / `https://2rasi.com/tools/priolens/`

The official PrioLens landing exposes the validation study as a secondary research action. The main PrioLens pilot remains the primary action.

## Production identity

Repository:
`olemoz1977/2rasi-web`

Production branch:
`hero-webgl`

Build branch:
`feature/priolens-stimulus-validation-v01`

Final production commit:
`795f6d3ffe08ce2c32a0284f42092e23a67cd310`

## Current pool

- pool: `open14-v031-current42`
- 42 exact current stimuli
- 14 families × 3 exemplars
- source bank: `2rasi.priolens.open14.bank-v0.3.1`
- no active public-pilot pixel mutation

Manifest:
`tools/priolens/validate/stimuli-v031.json`

## Participant design

One session:
- 12 individual images;
- ~5–7 minute target;
- no family/mechanism labels before open description;
- open first-impression description;
- clarity 1–5;
- then intended + 3 nearest competitor descriptions + OTHER;
- classification confidence 1–5;
- valence 1–5;
- timing stored as process telemetry only.

Seven incomplete-block forms:
- 12 distinct families per form;
- each family omitted from exactly one form;
- each stimulus appears in exactly two forms;
- all 42 stimuli receive equal planned exposure over a balanced seven-form cycle.

## Data/storage

Cloudflare Worker:
`workstyle-pilot-intake.olemoz1977.workers.dev`

Submission:
`POST /v1/priolens-stimulus-validation`

Aggregate owner summary:
`GET /v1/priolens-stimulus-validation-summary`

Dedicated D1 tables:
- `priolens_stimulus_validation_sessions`
- `priolens_stimulus_validation_responses`

The aggregate summary does not expose open-text responses.

## Technical gate

Final Worker/schema/source/storage workflow:
- workflow: `Deploy 2rasi insights Worker`
- run: `34012182305`
- conclusion: SUCCESS

Passed:
- app JavaScript syntax;
- worker JavaScript syntax;
- 42-stimulus manifest count/uniqueness/family gate;
- D1 schema apply;
- Worker upload;
- CORS/health;
- existing event/feedback regression;
- synthetic PrioLens validation submission with 12 responses;
- D1 session + 12 normalized response persistence;
- aggregate owner-summary endpoint;
- synthetic cleanup.

Public crawl also confirmed that the official PrioLens landing contains the new validation callout and that the validation route itself is reachable.

## Screening states

No decision below n=40 ratings for the specific stimulus.

After n>=40:
- KEEP candidate: fit >=60%, top competitor <=20%, OTHER <=20%, mean clarity >=3.5, mean confidence >=3.5;
- REPLACE candidate: fit <40%, top competitor >=35%, OTHER >=35%, or top competitor >= intended fit;
- otherwise REVIEW.

These are pragmatic stimulus-screening thresholds only.

## Owner summary

On the validation page, 2rasi owner mode exposes the aggregate summary:
- ALL;
- LT;
- EN;
- per-stimulus n;
- intended fit;
- OTHER;
- nearest competitor;
- clarity;
- confidence;
- valence;
- COLLECTING / KEEP / REVIEW / REPLACE.

## Open gate

Still pending:
- owner real-phone participant-flow smoke for the new validation UI;
- first non-owner completed validation session;
- later independent coding of open-text responses;
- later combination with Open14 MOST/LEAST exemplar/opponent/slot behavior.

Do not mutate the active Open14 public-pilot bank based on early validation rows.
