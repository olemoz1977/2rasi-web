# WorkStyle v0.7 — Cognitive Pilot Runbook

Status: ACTIVE SMALL PILOT / PRE-PSYCHOMETRIC
Date: 2026-08-23
Branch: hero-webgl

## Purpose

The current goal is not to validate the 8-axis model and not to produce respondent profiles.

The immediate goal is to test whether the eight proposed bipolar work-style dilemmas are:
- understandable after one normal read;
- experienced as distinct rather than repetitive;
- balanced enough that neither pole looks obviously better;
- usable without excessive `Priklauso nuo situacijos` or `Neteko / negaliu įvertinti` responses;
- stable enough across item contexts to justify a later item-reduction stage.

## Current live form

`https://2rasi.com/tools/workstyle15/v07-cognitive.html`

Current version: `0.7-cognitive-8axis-lt-c`.

Important instrumentation changes after the first real completion:
- response grammar: `Visada / Dažniau / Abu panašiai / Dažniau / Visada`;
- both behavioural poles are visually separated;
- same-axis items are prevented from appearing consecutively;
- `Neaišku / sunku suprasti` and `Primena ankstesnę situaciją` are collected as separate signals;
- no respondent profile is shown.

## Small cognitive pilot target

Target: **6–10 independent respondents** before any new construct-level decision.

This is not a psychometric sample. It is only enough to find obvious wording, context and duplication problems.

Prefer respondents with real work experience, but do not restrict the pilot to managers. The WorkStyle core is intended to describe work behaviour broadly rather than managerial competence.

Avoid using only people from one team or one job family if convenient alternatives are available.

## What to collect

For every completion retain the anonymous JSON export.

Key signals:
- completion time;
- item response time;
- use of `Abu panašiai`;
- use of `Priklauso nuo situacijos`;
- use of `Neteko / negaliu įvertinti`;
- item marked `unclear`;
- item marked `similar to earlier`;
- free-text comments;
- within-axis directional consistency, interpreted only as a cognitive clue, not reliability evidence.

## First-completion lessons

The first real completion showed that random item ordering can itself create perceived repetition when several items from one axis appear consecutively. This has been corrected in version LT-C.

The first completion also showed that end-of-test questions asking respondents to remember exact item numbers are weak. Duplication and ambiguity should therefore be captured at the item itself.

Do not treat the first respondent's axis means as a personal profile or as evidence of construct validity.

## Item-level warning rules for this pilot

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
- invite a large sample before the cognitive form stabilises.

## Gate after 6–10 completions

Produce one consolidated review with four outputs:

1. **KEEP** — axis and item content is sufficiently clear for the next development pool.
2. **REWRITE** — construct remains plausible but wording/context fails.
3. **MERGE / DROP CANDIDATE** — repeated overlap or artificial bipolarity.
4. **OPEN QUESTION** — insufficient evidence; retain only for further cognitive testing.

Only after this gate decide whether the 8-axis architecture survives.

If it survives, the next stage is not a final short test. The next stage is a larger candidate item pool and an external pilot designed to reduce items empirically.

## Product boundary

WorkStyle v0.7 remains a 2rasi research / for-fun prototype.

Leadership SJT remains parked as a separate future professional module.

No selection, competence, role-fit or leadership-potential claim belongs in this pilot.
