# PrioLens v0.4 — pre-result 12×12 relationship matrix + PDF checkpoint

Status: DEPLOYED TECHNICAL PASS / OWNER REAL-PHONE REVIEW PENDING  
Date: 2026-09-05

## Purpose

Insert a participant-facing 12×12 relationship matrix after Channel B/B+ resolution and before the existing ship/map result world.

The matrix is a **relationship display**, not a validated latent-space model.

It must not imply:
- Channel A causes Channel B;
- marker distance is psychological distance;
- cell position is need strength;
- MOST or LEAST is an unmet-need score;
- DIRECT/RELATED/BRIDGE are empirically validated relationships.

Canonical construct source:
`tools/priolens/config/open14-v0.4-construct-map-2026-09-05.json`

Runtime module:
`priolens/open14-v04/result_matrix_v04.mjs`

## Flow

1. Channel A MOST + LEAST
2. A+ when required
3. Channel B current sufficiency
4. B+ when required
5. final state snapshot + anonymous save starts
6. **12×12 relationship matrix**
7. participant presses **Toliau į rezultatą**
8. preserved ship/map result world

The existing result world is not removed.

## Axes

Both axes use the same 12 exact Channel-B statements the participant answered.

Group order:
1. Prasmė ir indėlis
2. Augimas ir gebėjimai
3. Autonomija ir pripažinimas
4. Ryšys, priklausymas ir parama
5. Saugumas ir stabilumas
6. Poilsis ir resursai

The six groups are product/navigation grouping only.

## Participant result overlays

The matrix uses three separate result marks:

- filled navy dot = resolved first-glance focus;
- hollow navy dot = only an exact 3/3 repeated Channel-A LEAST/background family;
- aqua dot = Channel-B lowest-sufficiency route endpoint(s).

No MOST-minus-LEAST mark exists.

If no A focus is resolved, no focus dot is manufactured.
If Channel B yields no route, no aqua route marker is manufactured.

## Construct relationship grammar

DIRECT:
- solid family chip.

RELATED:
- outlined family chip.

BRIDGE / NO DIRECT MATCH:
- restrained dashed/soft representation at one primary display intersection;
- related B-area indices are disclosed as a relationship note;
- the primary display intersection is **representational**, not a claim of a precise psychological coordinate.

Current bridge representations:
- CARE: primary `2×8`, related B areas `2,7,8`;
- CONTROL: primary `5×10`, related B areas `5,9,10`;
- OPPORTUNITY: primary `3×5`, related B areas `3,4,5,12`.

CARE remains role-ambiguous. The matrix does not infer whether the participant identified with the helper, receiver, relationship, or scene.

B diagonal areas without a direct A counterpart remain visibly unfilled rather than being forced into symmetry.

## Visual system

Uses the 2rasi palette from the site CSS:
- ink `#071b2e`
- ink-soft `#315166`
- mist `#eef6f8`
- mist-2 `#dfeef2`
- water `#7bb8c8`
- white `#fbfdfe`
- restrained navy-alpha grid lines

Mobile:
- horizontal matrix scrolling;
- sticky left B axis;
- three summary cards before the matrix;
- viewport auto-centers horizontally around the participant's visible result marker(s).

## PDF

Buttons:
- matrix screen: **Išsaugoti PDF**
- existing result world: **Išsaugoti PDF**

Implementation:
- browser/system `window.print()`;
- dedicated A4-landscape print CSS;
- print report contains participant summary + 12×12 matrix;
- no server-side PDF generator;
- no external PDF dependency.

This intentionally uses the browser's **Save as PDF** capability. It is not yet a one-tap generated PDF download. In-app browser support may vary.

## Technical evidence

Local 390×844 matrix flow:
- run `33953958723`: SUCCESS.

First deployed run after matrix insertion:
- run `33953958704`: failed only because the smoke incorrectly required a focus marker in a protocol-valid no-focus state.
- runtime page/API deployment and byte/MIME checks had already passed.
- smoke was corrected to compare marker presence with the resolved protocol state, not assume a focus.

Final deployed owner-preview gate:
- run `33954090061`: **SUCCESS**
- source build and matrix unit test: PASS
- isolated API: PASS
- live preview byte/MIME verification including `result_matrix_v04.mjs`: PASS
- real deployed 390×844 full flow: PASS
- matrix → existing result transition: PASS
- final API save: PASS

Live v0.2 remains unchanged.
External recruitment remains closed.

## Owner review

Review on a real phone:
1. Does the three-card summary make the result understandable before inspecting the full matrix?
2. Does horizontal matrix navigation remain understandable?
3. Are focus/background/sufficiency markers distinguishable without implying stronger/weaker importance?
4. Do CARE / CONTROL / OPPORTUNITY read as relationship exceptions rather than precise scores?
5. Does **Toliau į rezultatą** feel like a natural transition to the ship/map view?
6. Is the A4 landscape Save-as-PDF result useful enough, or should a later iteration create a fixed one-tap branded PDF?
