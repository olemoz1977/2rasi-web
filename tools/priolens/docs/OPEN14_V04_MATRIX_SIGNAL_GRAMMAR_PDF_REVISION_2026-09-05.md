# PrioLens v0.4 — matrix signal grammar + PDF revision

Status: DEPLOYED TECHNICAL PASS / OWNER REAL-PHONE VISUAL REVIEW PENDING
Date: 2026-09-05

## Trigger

Owner approved a simpler result grammar:
- no navy MOST point;
- no hollow LEAST point in the primary matrix;
- no aqua B point;
- MOST repetition shown through green styling on the selected A-direction chip;
- Channel-B ratings of 3 or lower shown as orange row/column bands;
- final B/B+ route shown with stronger orange outline;
- LEAST remains available only in first-glance detail;
- result summary uses insufficiency wording rather than repeating an affirmative “pakankamai” statement.

The owner-supplied browser PDF was also reviewed. Its main weaknesses were:
- matrix text too small to read comfortably;
- full Channel-B statements repeated on both axes in the print matrix;
- LEAST still occupied a primary summary card;
- old point-marker grammar remained;
- “Du žvilgsniai viename žemėlapyje” was stale after matrix became the primary result;
- an unintended blank second page appeared.

## Current participant-facing result grammar

### Channel A

Primary matrix:
- only the resolved first-glance direction is highlighted;
- raw MOST 3/3 -> darker green border + pale green fill;
- raw MOST 2/3 -> lighter green border + paler green fill;
- there is no separate MOST point marker.

Green intensity encodes **repetition count only**, not need strength, importance or positive value.

### LEAST

Primary matrix:
- not shown;
- no LEAST summary card;
- no LEAST point/legend.

Detail:
- exact 3/3 repeated LEAST/background directions remain in `Pirmo žvilgsnio detalės`;
- 2/3 LEAST remains raw research data only.

PDF appendix:
- exact 3/3 LEAST/background names may appear as secondary detail, not as a primary matrix signal.

### Channel B

For every numeric Channel-B rating <= 3:
- corresponding top-axis item is pale orange;
- corresponding left-axis item is pale orange;
- the full matching matrix row and column are pale orange.

Overlapping low-sufficiency rows/columns do not become progressively darker.

Final B/B+ route:
- no aqua point;
- route item(s) receive a stronger orange outline on axis cells and the diagonal matrix cell;
- all valid tied endpoints remain visible.

The main B result card uses:
**Šiuo metu nepakanka**

and a deficit-form phrase, e.g.:
**Galimybių prisidėti prie kažko svarbaus ne tik sau.**

The exact affirmative questionnaire statements remain unchanged on the matrix axes.

## Result copy

Current title:
**Du žvilgsniai vienoje matricoje.**

Current boundary language:
- matrix shows a relationship, not causality;
- matrix does not show area importance;
- orange = participant rating <= 3;
- green = first-glance repetition count;
- the two perspectives remain separate.

## PDF revision

Method remains browser/system Print -> Save as PDF.

Print layout is now intentionally **two pages**:

### Page 1
- result title and two primary summary cards;
- compact relationship matrix;
- matrix axes use numbers 1-12 rather than repeating full long statements;
- group headers remain;
- green/orange result grammar remains;
- legend and methodological boundary remain.

### Page 2
- `Tavo vertinti teiginiai`;
- all 12 exact Channel-B statements in a readable two-column list;
- secondary exact-3/3 LEAST/background note when present.

This replaces the previous accidental second blank page.

Print CSS:
- A4 landscape;
- print colors requested via `print-color-adjust: exact`;
- interactive buttons/details are omitted;
- PDF smoke requires exactly two PDF pages.

## Runtime

Implementation repo:
`olemoz1977/omesg360`
branch:
`feature/priolens-open14-v04`

Matrix model schema:
`2rasi.priolens.open14.result-matrix-v0.5`

Key file:
`priolens/open14-v04/result_matrix_v04.mjs`

## Technical evidence

- logic/build/unit gate on the revised matrix: PASS;
- local 390x844 A+/B+ full-flow + print-media smoke: run `33959134826` SUCCESS;
- local PDF smoke:
  - print appendix visible;
  - long statements removed from matrix axes in print mode;
  - interactive actions hidden;
  - generated PDF = exactly 2 pages;
- deployed owner preview/API/full 390x844 smoke:
  - run `33959134861`, attempt 2: SUCCESS;
- first deploy attempt failed at the known remote API byte-verification step before preview deployment; clean rerun passed.

Live v0.2 remains unchanged.
Ship/map participant flow remains deactivated.

## Acceptance gate

Owner reviews on the real Android phone:
1. green 3/3 vs light-green 2/3 distinction;
2. absence of LEAST from the primary matrix;
3. readability of orange <=3 row/column bands;
4. stronger orange final B/B+ route outline;
5. “Šiuo metu nepakanka” wording;
6. two-page Save-as-PDF result.
