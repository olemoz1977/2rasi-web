# PrioLens Open14 v0.4 — Result Visual Grammar

Date: 2026-09-04  
Status: IMPLEMENTATION SPEC AFTER IA FREEZE

This document defines how to turn the frozen result architecture into a coherent visual world without adding new psychological meaning.

## Core principle

The final result should feel like **one quiet scene viewed in two layers**, not a test dashboard.

The visual system must reduce cognitive load, not decorate the result.

## 1. Ship grammar

Semantic role:
- the ship carries only the Channel-A first-glance focus.

Visual direction:
- minimalist, recognizable side-view sailboat;
- no photorealism;
- no decorative nautical detail;
- one mast, one sail, one hull;
- focus label belongs naturally on/inside the sail area;
- enough empty space around the focus label for long Lithuanian terms;
- line weight consistent with the needs-map drawing.

Do not encode:
- MOST count in sail size;
- certainty in opacity;
- strength in ship size;
- direction toward a Channel-B target.

If no Channel-A focus is justified, use a neutral no-focus state rather than an empty labelled sail.

## 2. Waterline grammar

The waterline separates perspectives.

It must:
- visibly connect the upper and lower scene;
- remain quiet and low contrast;
- not become an arrow, bridge, or causal connector;
- not carry interpretive text.

No route may start from the ship or cross the waterline.

## 3. Needs-map grammar

The map renders only route-relevant geography.

### One endpoint

Render:
- one organic land shape;
- one group label;
- one need-area target;
- one neutral route origin inside the lower map;
- one dotted route from that neutral map origin to the target.

Do not repeat the endpoint as a second large heading above the land.

### Multiple endpoints

If endpoints belong to the same group:
- one land;
- multiple equal-weight targets.

If endpoints belong to different groups:
- one land per relevant group.

Every valid endpoint receives equal visual weight.

If B+ preserved 3+ endpoints:
- show all protocol-valid endpoints;
- do not rank them by size, route length, position, opacity or color.

### No-route

Render:
- no inactive lands;
- no dotted route;
- compact neutral text: “Aiškaus maršruto nėra”.

## 4. Dotted route

The dotted line is a **locator**, not a score.

Rules:
- exists only in the lower Channel-B map;
- starts from a neutral lower-map origin, never from the ship;
- fixed stroke weight and dot rhythm;
- same visual weight for all endpoints;
- no animated “journey from A to B” semantics;
- route length must not imply magnitude;
- branches, if needed, use equal styling.

## 5. Color

Use restrained neutral color:
- upper scene: near-white / cool neutral;
- water: muted pale blue;
- lower scene: warm off-white;
- lines/text: neutral charcoal/gray.

Do not use traffic-light semantics.
Do not use red for deficit or green for fulfilled.
Do not use saturation to encode need strength.

## 6. Typography

Hierarchy:
- scene eyebrow: small uppercase;
- focus / need target: primary readable label;
- group label: secondary;
- “Detalės”: compact action.

Long Lithuanian labels must wrap without shrinking below comfortable mobile readability.

## 7. Interaction

- ship “Detalės” -> dedicated first-glance detail route;
- map “Detalės” -> bottom sheet;
- browser Back remains valid;
- bottom sheet supports close button, backdrop and Escape;
- no hidden tap-only interaction on the illustration itself is required for core access.

## 8. Mobile target

Primary design width: 390 px.

At 390x844:
- the full main result should read as one scene;
- the ship must remain recognizable without dominating;
- one-land result must not look like an oversized empty blob;
- labels must remain legible without zoom;
- detail buttons must not overlap labels.

## 9. Visual implementation order

1. Replace dashed ship ghost with final minimalist vector/CSS/SVG ship.
2. Replace oval land prototype with final organic route-only land grammar.
3. Add lower-map dotted route from neutral map origin.
4. Validate one endpoint, two endpoints, 3+ endpoints and no-route.
5. Real-phone visual pass.
6. Only then add the fixed 4–6 second non-diagnostic transition video.

## 10. Freeze guard

Visual implementation must not change:
- A/A+ logic;
- B/B+ logic;
- participant-facing 3/3 background rule;
- result/detail ordering;
- route endpoint set;
- Channel-A / Channel-B separation;
- completed-result persistence.

If a visual idea requires changing one of those, stop and treat it as an IA change request.
