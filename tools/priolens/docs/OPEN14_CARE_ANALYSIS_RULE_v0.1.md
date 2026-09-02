# PrioLens Open14 CARE analysis rule v0.1

Status: CANONICAL ANALYSIS RULE / PRE-PILOT
Date: 2026-09-02

## Problem

The two channels do not currently measure the same CARE construct.

Visual CARE is defined as proactive care-giving:
> acting for another person's welfare, including when it costs time, comfort or resources and when help was not explicitly requested.

The Channel B item `CARE_SUPPORT_PRESENT` asks whether care, support and human attention are sufficiently present in the participant's life. It is primarily a received / available-support item.

These are related social phenomena but are not construct-equivalent.

## Frozen rule for Open14 v0.2

1. Do **not** interpret visual CARE repetition as evidence that the participant lacks care or support.
2. Do **not** directly compare visual CARE with `CARE_SUPPORT_PRESENT` in participant-facing synthesis or pilot analysis.
3. Keep `CARE_SUPPORT_PRESENT` inside the broader `CONNECTION_SUPPORT` sufficiency context only.
4. Keep visual CARE as an independent visual family for the formative pilot.
5. Current comparison logic intentionally maps `CONNECTION_SUPPORT` only to visual CONNECTION and BELONGING, not CARE.
6. Do not create an artificial CARE sufficiency score by reusing unrelated Channel B items.
7. If formative data later justify a direct CARE comparison, add a separate care-giving sufficiency item in a new protocol version rather than silently changing v0.2 semantics.

## Participant-result consequence

A repeated CARE visual theme may appear under `What repeated / Kas kartojosi`, but it must not create a `Where it may be worth looking again / Kur verta pažvelgti dar kartą` comparison against received support.

This is intentional missing symmetry, not a bug.

## Analysis consequence

For Open14 v0.2:
- CARE visual repetition can be analysed descriptively as its own family signal;
- `CARE_SUPPORT_PRESENT` can contribute to the broader CONNECTION_SUPPORT sufficiency domain;
- no direct CARE <-> CARE_SUPPORT_PRESENT association should be treated as a pre-specified construct test.

Any exploratory association between them must be labelled exploratory and language-stratified where relevant.

## Guardrail

Do not add or relabel a visual family merely to make the two channels symmetrical. Meaning / Contribution also remains contextual-only on Channel B.
