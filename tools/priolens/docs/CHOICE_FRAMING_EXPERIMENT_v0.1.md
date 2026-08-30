# PrioLens choice-framing experiment v0.1

Status: METHODOLOGY NOTE / NOT PART OF PRIMARY SCORE
Date: 2026-08-30

## Purpose

Test whether a pairwise priority choice is robust to opposite decision framing across two separate study stages.

This is not a second vote on the same trial and must not be merged into one score.

## Stage A · approach framing

Preferred prompt:

> Kurį iš šių dviejų pasirinktum?

Response options:
- first variant;
- second variant;
- no_clear_choice.

## Stage B · relinquishment framing

Preferred prompt:

> Jei vieno iš šių dviejų turėtum atsisakyti, kurio atsisakytum?

Response options:
- first variant;
- second variant;
- no_clear_choice.

Interpretation note:
Selecting A in Stage A is not assumed to be equivalent to relinquishing B in Stage B. Agreement is a robustness observation; disagreement is potentially meaningful framing asymmetry, not an error.

## Design rule

Do not ask both questions consecutively about the exact same rendered pair.

Reason:
- the second answer would be contaminated by memory and consistency pressure;
- it would partly measure willingness to repeat the previous choice rather than a genuinely opposite decision frame.

Instead use independent matched realizations of the same edge and counterbalance framing across participants.

Example for an edge with scenario families S1 and S2:

Participant group A:
- S1: approach framing;
- S2: relinquishment framing.

Participant group B:
- S1: relinquishment framing;
- S2: approach framing.

Keep scene position randomization/counterbalancing independent of framing assignment.

## Analysis boundary

Model framing as an explicit experimental factor alongside:
- participant;
- edge;
- scenario family;
- side position;
- sequence/local context.

Do not collapse approach and relinquishment responses into one direction total until data show that doing so is defensible.

Candidate questions:
- Does framing materially change side choice probability?
- Are some edges more framing-sensitive than others?
- Does a direction appear only under approach or only under relinquishment framing?
- Is framing sensitivity scenario-specific?

## Current decision

Primary PrioLens flow remains approach-framed pairwise choice.

Opposite framing is retained as a separate methodological robustness experiment and may be included in an early research pilot after the rendered matched-edge concepts pass visual feasibility review.
