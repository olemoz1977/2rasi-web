# WorkStyle 15 v0.4 — cognitive pilot runbook

Status: ACTIVE PILOT PROCEDURE
Instrument: `workstyle15-lt-v0.4-form-a`
Last updated: 2026-08-23

## Purpose

Run a small real-user cognitive pilot before any broader launch, EN translation, item shortening or psychometric claims.

The goal is not to validate the model statistically. The goal is to discover whether real people:
- understand the Lithuanian items as intended;
- can complete 75 items without excessive friction;
- interpret reverse items naturally;
- understand the result language;
- feel the result is specific enough to be useful rather than merely flattering/general;
- can export the anonymous pilot record successfully.

## Pilot URL

Expected direct URL:
`https://2rasi.com/tools/workstyle15/`

The page is intentionally `noindex,nofollow` and is not yet linked from the main homepage.

Do not invite participants until the URL has been manually smoke-tested on at least one mobile and one desktop browser.

## First smoke test

Verify:
1. Intro page loads and says v0.4.
2. Start creates a new session.
3. 1–5 choices work on mouse/touch.
4. Back/Next preserve answers.
5. `Išsaugoti ir išeiti` returns to intro and Resume restores progress.
6. Progress reaches 75/75.
7. Reverse items do not look visually different from direct items.
8. Final result appears only after all 75 responses.
9. 15 dimensions appear before five domain summaries.
10. Each dimension expands and shows measures / higher / lower / helps / watch / reflection prompt.
11. Feedback 1–5 + open comment saves.
12. Anonymous JSON downloads and can be opened as valid JSON.
13. New session can be started after completion.
14. Mobile layout has no horizontal overflow and all 1–5 choices remain tappable.

## Suggested cognitive-pilot size

Start with approximately **5–10 real users** for cognitive/usability evidence.

This is enough to find repeated comprehension and UX problems. It is **not** enough to validate factor structure, reliability, norms or population-level claims.

If several users independently flag the same item, interpretation or interaction, treat that as a concrete revision signal.

## Participant instruction

Before starting, tell the participant only:

> Atsakyk pagal tai, kas paprastai būdinga tavo realiam darbui, o ne pagal tai, kaip norėtum atrodyti. Nėra gerų ar blogų rezultatų. Jei teiginys neaiškus arba rezultatas atrodo per bendras, pasižymėk tai — būtent tokių pastabų mums reikia.

Do not explain the 15 dimensions, PAEI, DISC, Big Five or the ADEPT provenance before completion. This reduces priming.

## Cognitive debrief after completion

Ask briefly:
1. Kurie teiginiai buvo neaiškūs arba privertė spėlioti, ką turima omenyje?
2. Ar buvo teiginių, į kuriuos norėjosi atsakyti „priklauso nuo situacijos“?
3. Ar pastebėjai teiginių, kurie atrodė beveik vienodi?
4. Ar buvo teiginių, kuriuose buvo sunku suprasti, kuri atsakymo pusė tau tinka?
5. Kuris rezultato aprašymas atrodė tiksliausias?
6. Kuris atrodė per daug bendras arba netikslus?
7. Ar 75 teiginiai jautėsi per ilga, priimtina ar trumpa apimtis?

Do not debate the participant's answer or explain why an item was written that way. Record the reaction first.

## Data to collect

For every completed participant, collect the exported anonymous JSON when they agree to share it.

The export contains:
- anonymous session ID;
- version/form/language;
- item responses and scored values;
- item positions;
- approximate first-response latency;
- visits and response changes;
- active completion time;
- dimension and domain indexes;
- result-specificity rating;
- optional comment.

Do not ask for name/email as part of the instrument dataset.

If participant identity is needed operationally to arrange the session, keep that information separately from the exported research data.

## Early review checklist

After the first few sessions inspect:
- items repeatedly described as confusing;
- unusually slow items relative to the person's own median;
- items frequently changed after first answer;
- reverse items that behave noticeably differently from direct items;
- completion time and fatigue comments;
- whether later sections show more rushed responses;
- very compressed response patterns (almost everyone choosing 4/5);
- repeated comments that interpretations are flattering but generic;
- repeated comments that two dimensions feel identical.

High-priority construct boundaries already identified before pilot:
- Goal Persistence vs Achievement Drive;
- Social Energy vs Persuasive Influence / Assertive Communication;
- Constructive Outlook vs Emotional Regulation;
- Learning Orientation vs Reflective Self-Awareness.

## What NOT to conclude from a small cognitive pilot

Do not claim from 5–10 users:
- validation;
- reliability coefficients as stable evidence;
- factor structure;
- population norms or percentiles;
- predictive validity;
- official DISC/PAEI correspondence;
- that a high or low score is a strength/weakness in general.

Small-sample statistics may be used only as debugging clues.

## Version-change rule

V0.4 is frozen once pilot responses begin.

If wording changes after real pilot data exists:
- create v0.5;
- preserve the original item ID history / change log;
- do not merge v0.4 and v0.5 response data as if they were the same form without explicitly accounting for the wording change.

## Promotion gate

Do not add WorkStyle 15 to the main homepage/sitemap until:
- direct URL works on mobile and desktop;
- at least several cognitive completions are finished;
- no blocking comprehension/scoring/export bug remains;
- the decision is made whether broader data collection needs a central anonymous endpoint.
