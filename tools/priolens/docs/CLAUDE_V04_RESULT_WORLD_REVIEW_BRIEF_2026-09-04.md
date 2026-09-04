# Claude review brief — PrioLens v0.4 result world

Status: REVIEW REQUEST / DO NOT MODIFY METHOD
Date: 2026-09-04

## Goal

Review the current PrioLens v0.4 result-world frontend and UX critically before final visual design.

This is NOT a request to redesign the research method. The A / A+ / B / B+ protocol is already frozen and implemented. Focus on:
1. information architecture;
2. mobile readability;
3. whether the ship -> waterline -> needs-map metaphor is clear without becoming gimmicky;
4. frontend structure / maintainability;
5. cache/versioning and deployment risks;
6. whether the current implementation is too patch-on-patch and should be refactored before final visuals.

Return concrete findings and recommendations. Do not flatter the concept.

## Source of truth

Architecture / protocol repo:
- https://github.com/olemoz1977/2rasi-web
- branch: `feature/priolens-architecture`

Read first:
- `tools/priolens/RESUME_HERE.md`
- `tools/priolens/config/open14-v0.4-active-runtime-protocol.json`
- `tools/priolens/config/open14-v0.4-adaptive-clarifiers-protocol.json`
- `tools/priolens/docs/OPEN14_V04_A_PLUS_B_PLUS_PROTOCOL_FREEZE_2026-09-04.md`
- `tools/priolens/docs/OPEN14_V04_RESULT_WORLD_OWNER_PREVIEW_2026-09-04.md`

Runtime repo:
- https://github.com/olemoz1977/omesg360
- branch: `feature/priolens-open14-v04`

Key runtime files:
- `priolens/open14-v04/build_from_v031.mjs`
- `priolens/open14-v04/adaptive_clarifiers_v04.mjs`
- `priolens/open14-v04/result_world_v04.mjs`
- `priolens/open14-v04/result_renderer_v04.mjs`
- `priolens/open14-v04/deployed_real_smoke_v04.mjs`
- `.github/workflows/deploy-priolens-open14-v04-owner-preview.yml`

Public deployed owner preview:
- LT: https://omesg360.eu/priolens-open14-v04/?lang=lt&from=lt
- EN: https://omesg360.eu/priolens-open14-v04/?lang=en&from=com

Hostinger access is NOT required. Hostinger is only the deployment target. The code is in the public GitHub runtime repo above, and the deployed UI is publicly reachable at the URLs above.

## Non-negotiable semantic boundaries

Channel A = low-deliberation comparative visual choice.

MOST = first visual pull.
LEAST = lower pull among the remaining two after a clear MOST.
LEAST != dislike or low importance.
RT != psychological strength.
No MOST-minus-LEAST psychological score.

A+:
- adaptive visual clarification among already repeated Channel-A candidates;
- never changes raw MOST counts;
- never turns 2/3 into 3/3;
- not a fourth exposure.

Channel B:
- self-reported current perceived sufficiency;
- 12 items.

B+:
- adaptive clarification only among exact tied eligible lowest Channel-B values;
- never changes the underlying numeric ratings;
- does not reveal a deepest / true need.

Channel A and Channel B are not one-to-one constructs.
CARE visual giving is not equivalent to Channel-B received/present support.

Do NOT recommend:
- hidden/subconscious interpretations;
- one global need score;
- a Maslow hierarchy;
- automatic causal line between ship and map;
- automatic A->B interpretation.

## Intended result-world semantics

### Ship
Represents only the resolved Channel-A focus.
Hero should show only the focus-family name.
No 2/3 or 3/3 number on the hero.
Tap opens detail that discloses:
- raw MOST count;
- selected exemplars;
- whether A+ was used;
- LEAST separately.

### Needs map
Represents only Channel-B/B+ sufficiency route.
The map contains six need continents and twelve need locations.
A dotted route may point only to resolved Channel-B/B+ endpoint(s).
No Channel-A family names may be used as need-map destinations.

### Relationship
The ship and map share one visual world but remain analytically independent.
The user may notice a similarity or difference themselves.
The UI must not claim one explains the other.

## Current design intent

The owner does NOT want two dashboard cards.

Desired mobile composition:
- one vertical scene;
- ship in the upper part;
- waterline / sea transition;
- needs map below;
- Channel-A focus name integrated into the ship / sail;
- need route expressed primarily by the map, not a large report headline;
- details available on tap;
- playful enough to feel engaging, but not game-like or pseudo-diagnostic.

Internal product principle:
"Fun with Wisdom"

This is not necessarily a public slogan.

## Current observed problem from owner phone

Earlier deployed state appeared as a hybrid:
- new unified HTML / ship-water scene;
- old cached result renderer;
- lower map area appeared blank;
- old copy remained.

A cache-busting update was then added to the ES-module imports.
Please inspect whether the current versioning/deployment approach is robust enough or whether the frontend should be reorganized before visual polish.

## Questions to answer

### A. UX / information architecture

1. Does one vertical ship -> waterline -> needs-map scene communicate two perspectives better than two separate cards?
2. What visual hierarchy would you use on a 390x844 phone so the focus name does not overwhelm the scene?
3. Should labels like "Pirmas žvilgsnis" / "Antras atsakymas" remain visible in the hero, or can the metaphor carry more of the meaning?
4. How should no-focus / no-route / multi-route cases appear without making the result feel like an error state?
5. Does the waterline add useful semantic structure, or does it imply a hidden hierarchy / unconscious depth?
6. What are the strongest risks of the ship/map metaphor becoming too gimmicky?
7. What should remain visible in the hero vs only in details?

### B. Needs-map visual grammar

1. Is 6 continents + 12 need locations viable on a narrow mobile screen without becoming illegible?
2. If not, propose a better map composition while preserving all 12 Channel-B locations.
3. How should one route, multiple route endpoints, and no-route state be shown?
4. Should the route start from the ship, from a neutral map edge, or from no visible origin? Remember: no causal ship-to-map relationship is allowed.
5. How can the route look navigational without implying diagnosis or "your true direction"?

### C. Frontend architecture

Review:
- `build_from_v031.mjs`
- `result_renderer_v04.mjs`
- `result_world_v04.mjs`

Answer:
1. Is the current build-by-string-patching approach still acceptable for v0.4, or has it become too fragile?
2. What should be refactored before adding final SVG/illustration and transition video?
3. Identify concrete cache/versioning weaknesses.
4. Identify DOM / event / state risks.
5. Identify mobile accessibility issues.
6. Recommend the smallest safe refactor, not a rewrite for its own sake.

### D. Verdict

Give:
- top 5 current problems, ordered by severity;
- what to keep unchanged;
- what to change before visual polish;
- whether to proceed with the ship/map metaphor or stop and replace it;
- one recommended next implementation step.

## Output style

Be critical and specific.
Separate:
- methodological issue;
- UX issue;
- frontend engineering issue;
- optional polish.

Do not propose changes that violate the semantic boundaries above.
