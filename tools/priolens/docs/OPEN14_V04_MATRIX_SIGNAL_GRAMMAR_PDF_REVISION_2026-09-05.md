# PrioLens v0.4 — matrix signal grammar + PDF revision

Status: CURRENT / OWNER REAL-ANDROID PDF PASS / PROMOTION PENDING
Date: 2026-09-05

This document is the current source of truth for the v0.4 matrix signal grammar and PDF layout. It supersedes the earlier same-day two-page landscape and full orange row/column variants.

## Primary participant result

The 12×12 relationship matrix is the primary final result.

- Ship/map is deactivated from the normal participant flow.
- Both matrix axes use the same 12 exact Channel-B statements.
- Six 2-item groups are product/navigation grouping only.
- Matrix geometry does not encode causality, psychological distance, need strength or importance.

## Channel A signal grammar

The primary matrix shows every raw first-choice family that repeated:

- raw MOST 3/3 = fully filled dark-green family chip / summary badge;
- raw MOST 2/3 = fully filled light-green family chip / summary badge;
- no separate MOST point marker.

Green intensity encodes repetition count only.

A+ remains a clarifier:
- when it resolves one family, that focus is used in detail;
- when A+ returns no clear family, all raw 3/3 and 2/3 repetitions stay visible and no artificial single focus is created.

LEAST:
- is not shown in the primary matrix;
- is not part of the general PDF matrix signal;
- only exact 3/3 LEAST/background may appear cautiously in first-glance detail and human interpretation.

## Channel B signal grammar

For every numeric Channel-B rating <= 3:

- only that exact top-axis item is pale orange;
- only that exact left-axis item is pale orange;
- only that same item's diagonal matrix cell is pale orange.

Orange must not spill through unrelated rows, columns or other need areas.

Final B/B+ route:
- has no aqua point;
- exact endpoint axis cells and same-area diagonal cell receive the stronger orange outline;
- all protocol-valid tied endpoints remain visible.

The main B summary uses insufficiency wording:
**Šiuo metu nepakanka**

The exact affirmative questionnaire statements remain unchanged on the axes and in the statement appendix.

## Relationship grammar

- DIRECT = solid family chip on the corresponding diagonal.
- RELATED = outlined family chip.
- BRIDGE = restrained dashed/soft placement at a primary representational intersection plus related-area note.
- NO_DIRECT = subtle note where no defensible direct A counterpart exists.

Construct boundaries remain in force:
- CARE does not infer giver/receiver role;
- CONTROL is direct action-effect agency, not autonomy;
- OPPORTUNITY is formative environmental affordance;
- Channel A does not cause Channel B.

## Human interpretation

Participant-facing block:
**Viena galima interpretacija**

Boundary:
**Tai bendrinė refleksija pagal šios sesijos pasirinkimus. Ne diagnozė ir ne išvada apie tavo asmenybę.**

Current inference rules:
- B/B+ insufficiency is the current-situation anchor;
- all raw MOST 3/3 and 2/3 repetitions may be named;
- exact 3/3 LEAST may be used only as cautious secondary contrast;
- specific bridges may mention only A motifs actually present;
- A+ noClear suppresses a specific combined A/B story;
- CARE imagery never assigns the participant a giver or receiver role;
- DIRECT and RELATED bridges use different wording strength;
- if there is no defensible semantic bridge, the interpretation explicitly refuses to force one;
- LT and EN use the same semantic bridge rule set.

## PDF

Method:
browser/system Print -> Save as PDF.

Current target:
- exactly **one A4 portrait page**;
- no forced appendix page break;
- print CSS resets inherited mobile root/wrapper height, min-height, overflow and background before print;
- interactive buttons/details are excluded.

One-page report contains:
1. result title and two summary cards;
2. compact numbered 12×12 matrix;
3. legend and methodological boundary;
4. human interpretation;
5. all 12 exact Channel-B statements in a compact 3-column appendix.

Print axes use numbers 1-12 instead of repeating the long statements inside the matrix.

## Evidence

Technical:
- own-area orange + one-page PDF local smoke: `33959809259` SUCCESS;
- own-area orange deployed smoke: `33959809300` SUCCESS;
- all MOST repetitions local UI/PDF: `33960497418` SUCCESS;
- all MOST repetitions deployment: `33960497398` SUCCESS;
- deterministic interpretation local full-flow/PDF: `33963316027` SUCCESS;
- clean interpretation deploy recheck: `33964509120` SUCCESS.

Owner real Android:
- Android system print preview showed `ISO A4`;
- page counter showed `1 / 1`;
- the matrix, interpretation and statement appendix were visible on the single page;
- therefore the real-Android one-page PDF acceptance gate is PASS.

Latest interpretation-hardening deployment is tracked separately in the active runtime protocol.

Live v0.2 remains unchanged.
Promotion remains blocked until explicit owner approval to switch the 2rasi entry links.
