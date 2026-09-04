# PrioLens Open14 v0.4 — Result Visual Grammar

Date: 2026-09-04  
Status: IMPLEMENTED OWNER-PREVIEW CANDIDATE / TECHNICAL PASS / REAL-PHONE VISUAL REVIEW PENDING

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
- one irregular cartographic land silhouette with a readable coastline;
- one group label;
- one need-area target styled as a map location;
- one dotted route entering from the lower edge of the lower map;
- no visible start-circle or score-like origin marker.

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
- enters from the lower map edge, never from the ship;
- has no visible origin-circle marker;
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
3. Add lower-map dotted route entering from the lower map edge, without a visible origin marker.
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


## Implementation checkpoint — 2026-09-04

Implemented in `olemoz1977/omesg360` / `feature/priolens-open14-v04`:

- dashed prototype ship removed;
- minimalist inline SVG sailboat implemented;
- focus label remains independent semantic text over the sail region;
- organic route-only land shapes implemented;
- dotted route geometry is generated dynamically from one neutral lower-map origin to every valid Channel-B endpoint;
- route SVG exists only inside the lower map and never crosses the waterline;
- no-route state renders no route SVG;
- route stroke does not vary with score or magnitude;
- same-group two-endpoint and cross-group three-endpoint states preserve every valid endpoint.

Automated evidence:
- local 390×844 multi-state UI smoke `33882688598` SUCCESS;
- single endpoint -> 1 land / 1 target / 1 dotted path;
- two endpoints in one need group -> 1 land / 2 targets / 2 equal paths;
- three endpoints across three groups -> 3 lands / 3 targets / 3 equal paths;
- no endpoint -> no inactive lands and no route geometry;
- deployed owner-preview + API + real 390×844 smoke `33883041521` SUCCESS.

Remaining gate:
- owner real-phone visual judgement of actual proportions, focus-label fit and overall visual tone.

No transition video should be added before that visual pass.


## Cartographic map correction — 2026-09-04

Owner real-phone review rejected the first “organic land” implementation because it still read as a large oval/blob rather than a map. This was treated as a visual-grammar defect, not an IA change.

Revised implementation:
- CSS border-radius blob removed;
- each route-relevant land now uses an irregular inline-SVG coastline;
- three deterministic coastline variants provide geographic irregularity without referencing real-world countries or continents;
- subtle internal coast-detail strokes reinforce the map reading;
- need-area target is styled as a map location rather than an underlined result chip;
- dotted route is a curved cubic path entering from the lower map edge;
- the prior visible origin circle is removed because it looked like a scale/measurement marker;
- route remains entirely inside the Channel-B map and does not cross the waterline;
- no-route remains empty of both land and route geometry.

Technical evidence:
- local 390×844 cartographic/multi-state smoke `33884239941` SUCCESS;
- deployed owner-preview + API + real 390×844 smoke `33884243972` SUCCESS.

The next gate is again owner visual judgement on a real phone. No transition video yet.


## Illustrated-island target adaptation — 2026-09-04

The owner supplied a fantasy-style map reference to clarify the missing map grammar, then approved a generated neutral PrioLens adaptation as the visual target direction.

What was transferred from the reference:
- irregular, unmistakably geographic coastline;
- visible land-versus-sea relationship;
- restrained internal terrain cues so the shape reads as a territory;
- a location marker rather than a UI result chip;
- a curved navigational route.

What was deliberately not transferred:
- parchment/fantasy styling;
- dense illustration;
- real-world geography;
- decorative mountain/forest symbolism as psychological meaning;
- red/green deficit encoding.

Runtime adaptation:
- pale sea field and subtle shoreline halos;
- irregular SVG island + small islets;
- generic low-contrast mountain, river, lake and grove cues;
- neutral ring-and-dot location pin;
- route terminates at the pin and enters from the lower map edge;
- one-endpoint layout positions group name and need label like map annotations rather than centered dashboard text.

Technical evidence:
- local 390×844 illustrated-target smoke `33886180623` SUCCESS;
- deployed owner-preview + API + real 390×844 smoke `33886186077` SUCCESS.

Remaining gate: owner real-phone visual judgement. IA remains frozen.


## Approved-target page adaptation — 2026-09-04

After the generated neutral target received an explicit positive owner reaction, the target was translated into the live v0.4 page instead of being treated as a standalone image.

Changes:
- one-land result reduced to roughly 82% mobile width to restore visible sea around the island;
- coastline geometry sharpened and made more asymmetric;
- SVG island aspect ratio is preserved instead of stretched to the layout box;
- terrain is reduced to a restrained atlas vocabulary: one mountain ridge, river, lake, small groves and islets;
- need label is now a direct map annotation with only a subtle text halo, not a white UI chip;
- location marker uses a neutral map pin;
- dotted route is shorter/calmer and enters from the lower-left map edge;
- lower “Detalės” control moved to the right, matching the approved composition;
- upper scene gained only subtle distant-land/water cues; no new meaning was introduced.

Technical evidence:
- logic smoke `33887982736` SUCCESS;
- local 390×844 UI smoke `33887982777` SUCCESS;
- deployed preview + API + real 390×844 owner-flow smoke `33887982768` SUCCESS.

IA remains frozen. The remaining gate is owner visual judgement of the deployed page.


## Stronger geographic silhouette correction — 2026-09-04

Owner feedback: the first live adaptation of the approved target was only minimally different and still read too much like a cloud/blob.

Correction:
- single-land width reduced to about 74vw / max 270px;
- more sea exposed around the land;
- coastline rebuilt with explicit angular segments, bays, peninsulas and concavities;
- repeated rounded scallop rhythm removed;
- small side islands changed from circular satellites to irregular islets;
- map land receives a slight natural rotation while annotations remain upright;
- route shortened and shifted to a calmer lower-left entry;
- no new psychological semantics added.

Technical evidence:
- logic smoke `33889606429` SUCCESS;
- local 390×844 UI smoke `33889606362` SUCCESS;
- deployed preview + API + real 390×844 smoke `33889606233` SUCCESS.

Remaining owner gate: the land must now read as stylized geography, not a cloud.
