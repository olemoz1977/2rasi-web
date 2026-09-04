# PrioLens Open14 v0.4 — Information Architecture Freeze

Date: 2026-09-04  
Status: FROZEN FOR VISUAL IMPLEMENTATION  
Scope: owner-preview result UX + adaptive clarification presentation

## Boundary

This freeze covers **what the participant sees, in what order, and what each visible element is allowed to mean**.

It does not freeze final artwork, final SVG geometry, transition video, or production promotion.

Live v0.2 remains unchanged. External recruitment remains closed.

## Frozen flow

1. Channel A MOST + LEAST visual choices.
2. A+ only when the frozen A-focus rules require clarification.
3. Channel B current sufficiency ratings.
4. B+ only when exact eligible lowest sufficiency items are tied.
5. Final save.
6. Result world.

A+ remains before Channel B to avoid textual need-wording priming the visual runoff.

## A+ participant presentation

- phone layout: one candidate image-group per row;
- each candidate group shows only the participant's already selected exemplars;
- family labels remain hidden;
- the whole image group is selectable;
- “Nė viena aiškiai” remains available;
- A+ never changes raw MOST counts.

## Result world

One continuous mobile scene:

1. **Pirmas žvilgsnis** above the waterline.
2. **Antras atsakymas** below the waterline.

The two halves are analytically separate.

### Upper scene

- ship represents Channel-A focus only;
- hero shows one focus name only;
- raw counts are not shown in the hero;
- no automatic causal line from ship to needs map;
- if no focus is justified, do not manufacture one.

### Lower scene

- needs map represents Channel-B / B+ sufficiency route only;
- only route-relevant land(s) are rendered;
- inactive six-group taxonomy is not shown in the normal result;
- one endpoint -> one relevant land;
- multiple valid endpoints -> all relevant lands/endpoints, without silent truncation;
- no route -> compact no-route state, with no inactive lands.

The renderer must not discard a protocol-valid 3+ tie merely to force a visually convenient two-land layout.

## First-glance detail

Order is frozen:

1. focus name + participant-language provenance;
2. self-explanation reflection;
3. exact 3/3 background evidence as secondary information.

Rules:

- selected focus exemplars are shown only once, in the reflection block;
- the reflection question is shown once;
- after answer selection, options collapse to “Tavo atsakymas” + selected answer;
- participant copy does not expose MOST / LEAST / A+ jargon when plain-language provenance is enough;
- only exact 3/3 repeated background directions are participant-facing;
- 2/3 LEAST stays in raw research data only;
- background evidence must remain visually weaker than the main focus/reflection.

## Second-answer detail

Presentation is a compact bottom sheet over the main result scene.

For a concrete single need area:

- show the need-area label;
- show a short plain-language description;
- provenance heading: **“Kaip ši poreikio sritis buvo išskirta?”**;
- explain direct minimum vs additional tie clarification;
- method boundary:
  **“Tai rodo, kuri poreikio sritis šiuose atsakymuose išsiskyrė kaip mažiausiai pakankama, ne poreikio stiprumą.”**

For multiple valid need areas, use plural wording and equal visual weight.

For no-route, do not imply that one need area was singled out.

## Persistence

- unfinished draft and completed result are separate local states;
- completed result restores after reload on the same device;
- restore must not send the final API payload again;
- “Atlikti dar kartą” clears the completed-result snapshot.

## Forbidden interpretations

Do not introduce through copy or visual encoding:

- visual pull = unmet need;
- first glance causes the second answer;
- subconscious / true-self access;
- B/B+ finds the “deepest” or “true” need;
- LEAST = dislike or low importance;
- route distance, land size, brightness or color = need strength;
- one global need score;
- automatic Maslow-style hierarchy.

## Implementation boundary

Current runtime implementation:
- result semantics: `result_renderer_v04.mjs`;
- result shell + presentation CSS: `result_shell_v04.mjs`;
- build orchestration: `build_from_v031.mjs`.

The result shell/styles were extracted from the build script before visual artwork work.

## Evidence

Owner real-phone review covered:
- route-only map;
- first-glance detail hierarchy;
- collapsed self-explanation answer;
- 3/3 background placement;
- sufficiency bottom sheet;
- completed-result restore.

Technical gates:
- local v2 390x844 UI smoke after shell refactor: PASS;
- logic/build smoke after shell refactor: PASS;
- deployed 390x844 owner flow + live API after shell refactor: run `33881903219` SUCCESS.

This IA is now frozen for visual implementation. Any later semantic or ordering change must be treated as an explicit IA change, not visual polishing.
