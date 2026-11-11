# WorkStyle v0.7 — Cognitive Pilot Runbook

Status: ACTIVE SMALL PILOT / PRE-PSYCHOMETRIC
Date: 2026-08-23
Branch: `hero-webgl`

## Purpose

The current goal is not to validate the 8-axis model and not to produce respondent profiles.

The immediate goal is to test whether the proposed bipolar work-style dilemmas are:
- understandable after one normal read;
- experienced as distinct rather than repetitive;
- balanced enough that neither pole looks obviously better;
- usable without excessive `Priklauso nuo situacijos` or `Neteko / negaliu įvertinti` responses;
- stable enough across item contexts to justify a later item-reduction stage.

## Current live form

`https://2rasi.com/tools/workstyle15/v07-cognitive.html`

Current form/instrument version: `0.7-cognitive-8axis-lt-e`.
Current LT wording/content version: `v07-lt-d`.

LT-E changed the ordering/instrumentation architecture, not the item wording.

Current form behaviour:
- response grammar: `Visada / Dažniau / Abu panašiai / Dažniau / Visada`;
- both behavioural poles are visually separated;
- `Neaišku / sunku suprasti` and `Primena ankstesnę situaciją` are separate signals;
- three blocks: `12 + 11 + 11`;
- all eight candidate axes are represented in every block;
- each 3-item fragile axis contributes one item per block;
- each 5-item axis is distributed `2 / 2 / 1` across blocks;
- the same axis is never intentionally placed in adjacent positions, including across block boundaries;
- explicit break screens after items 12 and 23;
- break duration is stored separately and excluded from item timing;
- item timing stops at first answer rather than continuing until `Toliau`;
- background/tab-hidden time is excluded from active first-response timing;
- optional broad pilot context: role, work-experience band, work environment;
- LT items live in a separate content pack `tools/workstyle15/v07-content-lt.js`;
- no respondent profile is shown.

The earlier internal LT-C completion belongs to an older instrumentation version and must not be pooled blindly with LT-E timing metrics.

## Small cognitive pilot target

Target: **6–10 independent respondents** before any new construct-level decision.

This is not a psychometric sample. It is only enough to find obvious wording, context and duplication problems.

Prefer respondents with real work experience, but do not restrict the pilot to managers. WorkStyle is intended to describe work behaviour broadly rather than managerial competence.

Avoid using only people from one team or one job family if convenient alternatives are available.

## What to collect

For every completion retain the anonymous JSON export until automatic intake is explicitly activated.

Key signals:
- completion status;
- active first-response timing by item;
- block-level timing change;
- break duration;
- use of `Abu panašiai`;
- use of `Priklauso nuo situacijos`;
- use of `Neteko / negaliu įvertinti`;
- item marked `unclear`;
- item marked `similar to earlier`;
- free-text comments;
- optional broad role/context metadata;
- within-axis directional spread, interpreted only as a cognitive clue, not reliability evidence.

Use `tools/workstyle15/analyze-v07.py` for aggregation. It reports cognitive signals only and does not calculate respondent scores.

## First-completion lessons already incorporated

The first real completion showed that random item ordering can itself create perceived repetition when several items from one axis appear consecutively. LT-E prevents adjacent same-axis items.

A further instrumentation audit showed that merely avoiding adjacent axes was not enough for fatigue analysis: one block could accidentally contain much more of the fragile constructs than another. LT-E therefore balances all eight axes across every block.

The first completion also showed that end-of-test questions asking respondents to remember exact item numbers are weak. Duplication and ambiguity are now captured at the item itself.

The response presentation was redesigned after mobile testing. The current intro uses separate `Apie` and `Pradėti` cards, and answer selection is highlighted rather than covered by dark fills.

Do not treat any individual respondent's axis direction as a personal profile or as evidence of construct validity.

## Item-level warning rules

These are practical cognitive-screening flags, not statistical validation thresholds.

Flag an item for review when, across the small pilot:
- about one third or more respondents mark it `unclear`;
- about one third or more mark it `similar to earlier`;
- about one third or more use `Priklauso nuo situacijos`;
- several respondents independently describe the same missing context;
- one pole is repeatedly described as obviously smarter, safer, kinder or more competent;
- response time is repeatedly much longer than neighbouring items and comments indicate interpretation difficulty.

One flag does not automatically mean delete. Look for the reason first.

## Axis-level warning rules

An axis should enter a STOP / REDESIGN review when:
- multiple items repeatedly trigger context dependence;
- respondents cannot explain how the two poles belong to one behavioural choice space;
- both poles can naturally be strongly true at the same time for the same referent;
- the axis feels like competence, morality or rational decision quality rather than work style;
- items from that axis repeatedly feel like duplicates of another axis;
- item directions vary mainly because the scenario changes rather than because the person's recurring preference is visible.

The currently higher-risk axes remain:
- Local / Concrete Focus ↔ System / Relational Focus;
- Conclusion Stability ↔ Evidence-based Revision;
- Opportunity Scanning ↔ Risk Scanning.

## What NOT to do yet

Do not:
- calculate public scores;
- show 0–100 indexes;
- create PAEI or DISC derived results;
- average axes into domains;
- call the model validated;
- rewrite the bank after every single respondent;
- invite a large sample before the cognitive form stabilises;
- mix LT-C and LT-E timing as if instrumentation were identical;
- silently submit pilot data to a backend.

## Gate after 6–10 completions

Produce one consolidated review with four outputs:

1. **KEEP** — axis and item content is sufficiently clear for the next development pool.
2. **REWRITE** — construct remains plausible but wording/context fails.
3. **MERGE / DROP CANDIDATE** — repeated overlap or artificial bipolarity.
4. **OPEN QUESTION** — insufficient evidence; retain only for further cognitive testing.

Only after this gate decide whether the 8-axis architecture survives.

If it survives, the next stage is not a final short test. The next stage is a larger candidate item pool and an external pilot designed to reduce items empirically.

## Data-intake boundary

A Cloudflare Worker + D1 intake package exists under `workers/workstyle-pilot/`, but it is not connected to the live form.

For the current invited pilot:
- JSON export is the active transfer mechanism;
- automatic submission is activated only after endpoint health, D1 storage and CORS are verified;
- participant-facing privacy wording must be updated before activation;
- JSON remains available as fallback after activation.

## Product boundary

WorkStyle v0.7 remains a 2rasi research / for-fun prototype.

Leadership SJT remains parked as a separate future professional module.

No selection, competence, role-fit or leadership-potential claim belongs in this pilot.
