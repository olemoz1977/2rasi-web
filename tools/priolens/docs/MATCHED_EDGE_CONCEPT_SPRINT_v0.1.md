# PrioLens matched-edge concept sprint v0.1

Status: TEXT-ONLY GATE 0 / NO ASSETS
Date: 2026-08-30

## Purpose

Test whether the hardest PrioLens direction edges can be expressed as **matched visual tradeoffs** before generating any image.

Each concept uses:
- one shared scene/domain;
- two legitimate variants;
- intended contrast carried by observable changes;
- no claim that the contrast is already validated as a direction choice.

Seven hardest edges from the current nearest-neighbour topology are tested twice each.

## Edge 1 · AUT ↔ OPP

### AO-1 · Neutral workbench

Shared scene:
A plain workbench, one simple unfinished wooden piece, neutral lighting, no branding, no text, one hand entering from the same position.

AUT-side concept:
Three different but visibly ordinary and functionally plausible hand tools for accomplishing the same next step are laid at equal distance from the workpiece. The hand is centered before selecting any of them. No tool is larger, newer or visually privileged.

OPP-side concept:
The same workpiece and workbench remain. One ordinary tool is present. Beside the workpiece lies one unused pre-cut component whose shape visibly matches an empty position in the unfinished piece and could be used immediately.

Risk:
- AUT can collapse to generic tool choice/MAS.
- OPP can collapse to resource availability/MAS.
- scene matching is only moderate because the visible object count differs.

Gate 0 status: HIGH_RISK.

### AO-2 · Access point in a neutral work area

Shared scene:
A plain indoor work area viewed from a fixed position, same lighting and architecture, no people, no signage.

AUT-side concept:
Three equally lit, equally sized open access points are visible ahead, each leading to functionally similar empty work areas. None is visually privileged.

OPP-side concept:
One access point is open. Beyond it a vacant ready-to-use work surface and a small set of neutral unused materials are clearly visible.

Risk:
- AUT may read as navigation/EXP.
- OPP depends on the viewer assigning value to the available workspace/materials.
- opportunity may still be reward/availability rather than a distinct direction.

Gate 0 status: HIGH_RISK / likely HOLD.

---

## Edge 2 · AUT ↔ EXP

### AE-1 · Compartment cabinet

Shared scene:
A plain cabinet with three identical compartments on a neutral wall, one hand at the same height, same camera and lighting.

AUT-side concept:
All three compartment handles are equally accessible and visually identical. The hand is centered between them before selecting one. No contents are visible.

EXP-side concept:
One compartment is partly open and the hand is actively pulling it further. Inside, only part of several neutral unfamiliar objects is visible; the contents are not yet fully resolved.

Risk:
- closed compartments on the AUT side may themselves invite curiosity/EXP.
- open/closed state changes salience.

Gate 0 status: HIGH_RISK.

### AE-2 · Modular tabletop task

Shared scene:
A plain table with a simple neutral geometric object and several loose components, same hand position and lighting.

AUT-side concept:
Three different component arrangements are visibly possible around the same central object; all required pieces are known and visible, and the hand is moving one piece into one of several open positions.

EXP-side concept:
Only one arrangement area is present, but the hand is lifting a cover from a recessed compartment to reveal previously unseen neutral components beneath it.

Risk:
- AUT can become puzzle/configuration/MAS.
- EXP can become simple reveal/CER.
- matched control is moderate, not minimal.

Gate 0 status: HIGH_RISK.

---

## Edge 3 · AUT ↔ INF

### AI-1 · Wooden flow track

Shared scene:
A simple wooden channel system with a hand on one low-skill movable gate, neutral balls/tokens, same camera and lighting.

AUT-side concept:
One token approaches the gate. Moving the gate visibly sends that one token along one of several equivalent routes toward the same type of endpoint.

INF-side concept:
Several tokens are already moving through the system. Moving the same gate visibly redirects the larger flow into different downstream channels/containers.

Risk:
- “own course” is not directly visible; AUT is represented through local route choice.
- both sides may read as generic mechanical causality.
- number of moving tokens changes salience.

Gate 0 status: HIGH_RISK but informative.

### AI-2 · Local vs shared lighting control

Shared scene:
A neutral workroom with one person at the same simple rotary control, same camera, same lighting baseline, no labels.

AUT-side concept:
The control visibly changes only the lamp and adjustable setup at the person's own immediate workstation.

INF-side concept:
The same simple control visibly changes the lighting state across several identical work areas in the room at once.

Risk:
- personal ownership of the local station is inferred.
- INF may reduce to “larger effect” rather than meaningful external/shared influence.

Gate 0 status: HIGH_RISK.

---

## Edge 4 · CER ↔ PRO

### CP-1 · Component case

Shared scene:
The same clear hard case contains several neutral mechanical components; same camera, lighting, object count and case size.

CER-side concept:
The internal layout leaves every component and its position fully visible through clear dividers and an unobstructed transparent lid.

PRO-side concept:
The same components remain visible through the transparent lid, but each sits deeply in fitted cushioning that physically surrounds and secures it.

Risk:
- both variants retain some clarity and some protection, which is desirable for equal legitimacy but may weaken contrast.
- fitted organization may leak PRO back into CER/MAS.

Gate 0 status: CANDIDATE.

### CP-2 · Inspection window vs protective cover

Shared scene:
A simple outdoor utility mechanism in a clean, well-lit environment with mild dust/water exposure; identical camera and surrounding scene.

CER-side concept:
A large transparent panel exposes the mechanism's current internal position/state directly to view while still enclosing it.

PRO-side concept:
A robust closed protective cover occupies the same area and visibly shields the mechanism from exposure; only the external cover is seen.

Risk:
- closed cover may create a strong information asymmetry by design.
- must avoid making the PRO variant look obviously “safer/better” in a dramatic environment.

Gate 0 status: CANDIDATE / HIGH_RISK.

---

## Edge 5 · EXP ↔ OPP

### EO-1 · Workbench drawer

Shared scene:
A plain wooden workbench with one drawer, same hand, camera and lighting.

EXP-side concept:
The hand is opening the drawer; only part of several unfamiliar neutral contents is visible and the drawer remains partly closed.

OPP-side concept:
The drawer is fully open. Inside is one unused generic component whose shape visibly matches an empty place in a neutral object on the workbench, making an immediate next use apparent.

Risk:
- OPP is still represented as useful resource availability.
- EXP side may simply be lower information/CER-negative.

Gate 0 status: HIGH_RISK.

### EO-2 · Storage-room doorway

Shared scene:
A plain storage/work room viewed through the same open doorway; same architecture, lighting and camera.

EXP-side concept:
Beyond the doorway, part of the room is obscured by shelving and several unlabeled neutral containers are only partly visible deeper inside.

OPP-side concept:
Beyond the doorway, a clear vacant work surface and unused generic materials are visible and immediately accessible.

Risk:
- unknown depth vs available resource is visually legible but may become curiosity vs utility rather than EXP vs OPP.
- OPP still requires value inference.

Gate 0 status: HIGH_RISK.

---

## Edge 6 · MAS ↔ INF

### MI-1 · Mechanical production bench

Shared scene:
The same neutral workbench, same row of small metal components, same pair of hands, camera, lighting and overall technical domain.

MAS-side concept:
The hands use a caliper and a small adjustment tool on one component; the visible action is fine measurement and precise correction.

INF-side concept:
The hands operate one simple gate/lever that visibly redirects the flow of several identical components into different downstream containers; no fine adjustment is involved.

Risk:
- both remain technical/mechanical.
- INF may still read as system operation rather than meaningful impact.

Gate 0 status: CANDIDATE / HIGH_RISK.

### MI-2 · Same garden, different action scope

Shared scene:
The same ordinary garden/greenhouse work area, same worker shown only from shoulders/hands downward, same lighting and plants without dramatic abundance.

MAS-side concept:
The worker performs a precise grafting/pruning action on one ordinary plant with close hand control.

INF-side concept:
The worker moves one simple main irrigation gate and water visibly begins flowing into several separate neutral planting beds.

Risk:
- nature preference is shared across both sides, which is useful control.
- INF remains causal-system impact; MAS remains skilled action.
- different camera emphasis may be required to make both actions legible.

Gate 0 status: CANDIDATE.

---

## Edge 7 · CON ↔ INF

### CI-1 · Three-person shared table

Shared scene:
Three adults around the same plain table in neutral light, no food, no business clothing/status cues, same people and camera.

CON-side concept:
The three are oriented toward one another in reciprocal interaction, with a plain shared object passed between them; no one occupies a visually dominant position and no outcome change is shown.

INF-side concept:
The same three people remain at the same table. One person's hand changes the position of a simple central physical divider/model, and that action visibly changes how several shared pieces/paths on the table are arranged; the other people remain present but neutral.

Risk:
- CON may read as cooperation/task rather than relationship.
- INF may read as puzzle/MAS.
- faces/social content is matched on both sides, reducing but not eliminating social salience.

Gate 0 status: HIGH_RISK but strategically useful.

### CI-2 · Shared garden activity

Shared scene:
The same three adults in the same ordinary garden area, same framing, lighting and moderate plant density.

CON-side concept:
Two/three people are jointly tending one plant bed and visibly exchanging the same plain watering tool in a reciprocal action; no central system control is visible.

INF-side concept:
The same people remain in the scene, but one person operates a simple main water gate and water visibly reaches several separate beds used by the group.

Risk:
- CON can become cooperation/task.
- INF can become utility/gardening.
- nature and people confounds are deliberately shared across both variants.

Gate 0 status: CANDIDATE / HIGH_RISK.

---

## Internal synthesis before blind review

### Most promising matched edges conceptually
- CER ↔ PRO
- MAS ↔ INF
- CON ↔ INF (because social salience can be matched rather than direction-specific)

### Still structurally difficult
- AUT ↔ OPP
- AUT ↔ EXP
- EXP ↔ OPP
- AUT ↔ INF

This pattern is informative: the hardest cases remain the directions whose definitions depend on relational freedom, unknownness or future value.

## Next gate

Do not refine these concepts yet.

First run a **blind concept interpretation** in randomized order. Reviewers must not see the edge labels, direction definitions or the internal risk notes until Stage 2.
