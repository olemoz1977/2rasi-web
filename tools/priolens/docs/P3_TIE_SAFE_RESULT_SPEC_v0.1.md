# PrioLens P3 tie-safe result spec v0.1

Status: ACTIVE TECHNICAL SPEC
Date: 2026-08-31

## Problem

The first owner P3 run produced:

- Mastery 5/6;
- Protection 5/6.

The result UI nevertheless named Mastery as the unique most-selected direction. This is an implementation error caused by breaking an exact tie through array/sort order.

## Source-of-truth ordering

Participant-facing headline logic must use the **raw observed selection counts/rates first**.

Research-only model estimates, including Plackett–Luce weights, must not break an exact raw tie in the main result.

## Tie-safe algorithm

1. Compute `chosen` and `shown` for every active direction.
2. Compute the displayed rate using exact counts, not rounded text values.
3. Find the maximum raw rate.
4. Collect **all** directions exactly equal to that maximum under the same denominator/rate contract.
5. If one direction is top, show a singular headline.
6. If two or more directions are tied, show all tied directions and explicitly call it a tie/shared top pattern.
7. Never use stable sort order, direction array order or model weight as an invisible tie-breaker.

For the current balanced P3 design every active direction is shown 6 times, so comparing raw `chosen` counts is equivalent and preferable.

## Required wording examples

Unique top, example 5/6 vs 4/6:

> **Šioje sesijoje dažniausiai rinkaisi Meistriškumo vaizdus: 5 iš 6 parodymų.**

Exact two-way tie, current owner run:

> **Šioje sesijoje išsiskyrė dvi kryptys: Meistriškumas ir Apsauga. Abi pasirinktos 5 iš 6 parodymų.**

Three-way tie:

> **Šioje sesijoje vienodai išsiskyrė trys kryptys: X, Y ir Z. Visos pasirinktos po N iš 6 parodymų.**

Do not manufacture a unique #1 when the observed counts do not contain one.

## Near ties

A near tie is not the same as an exact tie. For the small owner/research P3 block, avoid inventing a universal psychological significance threshold.

The UI may show the observed #1–#2 count or percentage-point gap descriptively. It must not claim that a 1-selection gap is substantively meaningful without later evidence.

## Zero / no-choice handling

If no direction has any selection because all trials were `no_clear_choice` (if that response is enabled in the P3 runtime), do not list all directions as a meaningful seven-way top tie.

Use a neutral result such as:

> **Šioje sesijoje nei viena kryptis neišsiskyrė pagal pasirinkimus.**

Preserve the raw trace for research diagnostics.

## Required tests

At minimum:

1. unique top → one direction named;
2. exact 2-way top tie → both named;
3. exact 3-way top tie → all three named;
4. tie caused by identical raw counts → no array-order winner;
5. zero-selections / all no-clear-choice → neutral result;
6. research model slightly separates a raw tie → participant-facing headline remains tied;
7. changing direction array order does not change the semantic result.

## Result hierarchy

Participant-facing order should be:

1. raw session pattern;
2. exact ties / close observed counts;
3. exemplar contribution if shown in owner/research mode;
4. model output only in research mode with uncertainty caveat.

This specification is descriptive and does not convert P3 selections into validated psychological scores.
