# PrioLens bidirectional rank prototype v0.1

Status: EXPERIMENTAL / OWNER-ONLY / DOES NOT SUPERSEDE OPEN14 v0.2
Date: 2026-09-02

## Purpose

Test one protocol question before changing the public PrioLens experience:

> Does collecting both the most-attractive and least-attractive choice within the same visual triad produce a more useful momentary priority map than positive pull alone?

This is a product/research probe, not a pilot protocol change.

## Isolation boundary

The active public Open14 v0.2 remains unchanged.

The prototype does **not** change:
- `2rasi.lt` or `2rasi.com` card / landing routing;
- `/priolens-open14-v02/`;
- the v0.2 session schema;
- the v0.2 final/progress API;
- the production research database;
- cohort rules;
- CARE analysis boundary;
- external recruitment status.

External recruitment remains CLOSED.

## Owner-only runtime

Runtime repository:
`olemoz1977/omesg360`

Source:
`priolens/open14-rank-v01/index.html`

Live URL:
`https://omesg360.eu/priolens-open14-rank-v01/`

Deploy workflow:
`.github/workflows/deploy-priolens-open14-rank-v01.yml`

Successful deployment / live smoke:
`33638887216` — SUCCESS.

The first deployment attempt was stopped by JavaScript syntax validation before FTP upload; it did not affect live runtime. The corrected source passed syntax validation, FTP upload and live HTTP smoke.

## Shared design assets

The prototype intentionally reuses the existing v0.2 infrastructure:
- same finalized 14-family / 28-exemplar bank;
- same `buildOpen14Plan()` 14x3 planner;
- same exemplar assigner;
- same 14 triads per run;
- same 12 Channel B current-sufficiency items.

No image generation or stimulus-bank change was opened.

## Visual task

For each triad:
1. choose `Kuris pirmas patraukia?`;
2. keep that first choice fixed;
3. among the two remaining images choose `O kuris iš likusių traukia mažiausiai?`;
4. `Abu likę panašiai` is allowed when the remaining two cannot be meaningfully separated;
5. `Nė vienas aiškiai` remains available for the first-pull question.

The third item becomes an implicit middle position only when both a most and least choice are made.

## Experimental session schema

Local-only prototype state uses:
`2rasi.priolens.open14.rank-session-v0.1`

It is stored only in browser localStorage.

No rank-v0.1 data are submitted to the research backend in this owner probe.

If the protocol proves useful, backend/storage must be versioned explicitly before any external use rather than mixed into the v0.2 table semantics.

## Result logic

For each family the owner view shows:
- `most` count;
- `least` count;
- descriptive `balance = most - least`.

The balance is **not** a psychological score.

Participant-like evidence cards require the same pragmatic cross-exemplar discipline in each direction:
- strong positive repetition: most >= 2 and both exemplars represented;
- strong negative repetition: least >= 2 and both exemplars represented.

The prototype then looks for descriptive contrasts such as:
1. wants more + repeatedly pulls most;
2. feels sufficient + repeatedly pulls most;
3. wants more + repeatedly pulls least;
4. positive and negative visual directions differ clearly.

No contrast is interpreted as hidden truth, subconscious need or diagnosis.

## Owner evaluation question

Do not tune the model from one personal result.

First judge the experience itself:
- does the second visual choice feel natural or forced?
- does `least` add information rather than merely reflect image dislike?
- does a `wants more + least` contrast produce a meaningful reflection moment?
- does the full + / - map feel more like a momentary priority map than v0.2 positive pull alone?
- is the added interaction worth the extra time and cognitive load?

Only after several owner/household UX probes should we decide whether rank-v0.1 deserves a formal protocol version and backend.
