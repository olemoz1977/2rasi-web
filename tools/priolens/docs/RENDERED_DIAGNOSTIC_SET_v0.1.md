# PrioLens rendered diagnostic set v0.1

Status: PRE-RENDER SPEC / FALSIFICATION SET / NOT FINAL STIMULI
Date: 2026-08-30

## Purpose

Create the smallest rendered set that can tell us whether matched-edge control survives the move from text concepts to actual static images.

This is not a showcase set and not a participant-ready library.

Four pairs only:
1. CER ↔ PRO clean baseline;
2. MAS ↔ INF clean/action baseline;
3. redesigned AUT ↔ OPP high-risk diagnostic;
4. redesigned CON ↔ INF high-risk diagnostic.

Each pair gets two separate 1:1 images generated from one shared base-scene specification. The second side should be produced as a controlled edit of the first/base composition where practical, not as an unrelated fresh generation.

## Global render rules

For every pair:
- square 1:1;
- photorealistic;
- same camera height, focal length, perspective and crop within pair;
- same ambient light and color temperature;
- no text, logos, labels, symbols, arrows or diagrams;
- no dramatic lighting;
- no luxury/status cues;
- no exaggerated positive/negative emotion;
- no obvious good/bad, finished/unfinished, success/failure framing;
- both variants must be plausible real scenes;
- intended contrast must remain understandable at small mobile size;
- do not solve semantics through brighter color, more visible faces, more objects, more movement or greater apparent value on one side.

For every generated asset retain:
- pair ID;
- side ID;
- generation/edit lineage;
- prompt/version;
- source/base asset ID;
- image hash once frozen for review.

---

# D01 · CER ↔ PRO baseline

Source concept: M08.

## Test question

Can one matched physical enclosure create a directly visible clarity-vs-protection tension without one side looking objectively better?

## Shared scene

Neutral workshop or maintenance setting. A small simple mechanical assembly is mounted inside a rectangular protective housing on a bench. The housing, mechanism, camera, bench and lighting remain identical.

No person required.

## CER side

The front of the housing has a rigid transparent inspection panel. The internal mechanism position/state is clearly visible through it. The panel is functional and not flimsy; this side should not look broken or unsafe.

Dominant visible property:
`internal state directly visible`.

## PRO side

The same housing has a rigid opaque reinforced front cover of identical dimensions. The internal mechanism is no longer visible. The cover should visibly communicate stronger shielding through structure/material thickness or fitted protection, not through darkness or danger cues.

Dominant visible property:
`internal mechanism more physically shielded`.

## Must hold constant

- exact mechanism;
- housing footprint;
- background;
- camera;
- external cleanliness/quality;
- overall luminance;
- no extra locks, warning colors or hazard signs.

## Failure conditions

Reject if:
- transparent side looks obviously more premium/attractive;
- opaque side looks dark, heavy or threatening;
- one side implies broken/unsafe engineering;
- contrast becomes transparency preference rather than clarity-vs-protection tradeoff.

---

# D02 · MAS ↔ INF baseline

Source concept: M11, refined for tighter matching.

## Test question

Can mastery and influence be separated within one real work system without influence becoming merely 'bigger' and mastery merely 'more technical'?

## Shared scene

Neutral greenhouse or irrigation work area. Same worker, same modest work clothes, same irrigation system and same plant beds. Medium framing wide enough to show one foreground control area and several background beds.

Face is not the focal element.

## MAS side

The worker performs a precise calibration/adjustment on one individual irrigation emitter or small distribution component serving one plant. The action visibly requires fine alignment/measurement, but avoid a conspicuously expensive instrument or high-tech display.

Dominant visible property:
`fine skilled adjustment / quality of one local output`.

## INF side

The same worker operates one simple main distribution gate/manifold element. The action visibly changes water routing across several existing beds in the same frame.

Dominant visible property:
`one simple action changes a broader external system outcome`.

## Must hold constant

- same worker and clothing;
- same greenhouse/bed quality;
- same overall amount of visible water where possible;
- same camera and light;
- no audience, authority markers or heroic pose;
- no dramatic difference in effort.

## Failure conditions

Reject if:
- INF wins because more water/more motion simply looks spectacular;
- MAS wins because close precision tool looks more sophisticated;
- framing changes from intimate close-up to wide scene;
- either side becomes obviously more productive or valuable.

---

# D03 · AUT ↔ OPP redesigned diagnostic

Replaces M07/M14 unchanged.

## Design problem to solve

Previous grammar failed because:
- AUT = several equivalent choices with no meaningful difference;
- OPP = one already-ready/matched/usable solution;
- OPP therefore carried completion/readiness reward.

New pair must keep both sides **unresolved and forward-facing**.

## Shared scene

Neutral modular workbench with one simple unfinished functional assembly. Same actor's hands, same assembly, same set of neutral modular components, same camera and lighting. No finished product is shown on either side.

## AUT side

The assembly is mounted on a visibly reconfigurable fixture/rail. The actor's hand is actively repositioning the same functional control/module between two clearly different but equally legitimate operating positions/method layouts. Both configurations lead to the same visible task goal; neither is a superior resource or extra capacity.

Dominant visible property:
`meaningful self-directed reconfiguration of method`.

Important: autonomy comes from **visible ability to determine how the task is arranged**, not from the number of available objects.

## OPP side

The same assembly and fixture remain in one neutral standard configuration. A clearly compatible but unused expansion slot/interface is visible on the same system, with the corresponding neutral extension module available beside it but not installed. The current task is not completed and the extension is not a reward object; it simply creates additional future functional capacity beyond the current setup.

Dominant visible property:
`an accessible unused possibility to extend future capacity`.

## Equal-legitimacy controls

- both sides show the same unfinished base task;
- both sides contain the same total component value and comparable object count;
- neither shows a completed fit, success state or immediately consumable reward;
- AUT side must not have more colorful/interesting options;
- OPP side must not look like the obvious missing final piece.

## Failure conditions

Reject if blind review reads:
- AUT as mere indecision/multiple choices;
- OPP as completion/readiness/certainty;
- OPP as a more valuable or richer scene;
- AUT as technical skill/mastery;
- either side requires knowing ownership, instructions or future story not visible in-frame.

---

# D04 · CON ↔ INF redesigned diagnostic

Replaces M04/M09 unchanged.

## Design problem to solve

Previous grammar failed because INF was represented as:
`one active consequential person + passive others`, creating status/dominance/leadership contamination.

New pair must keep all actors visibly legitimate and engaged.

## Shared scene

Overhead or high-oblique view of three adults around the same neutral shared tabletop task. Faces are minimized or outside the focal area; hands/actions are primary. Same people, same table, same neutral components and same camera/light in both variants.

All three participants remain visibly active in both sides.

## CON side

The three participants are engaged in one reciprocal shared action where each person's contribution directly meets another person's contribution: for example, jointly aligning/handing a shared flexible component or sequentially passing/positioning equal pieces in a mutually dependent loop.

No one occupies the central authority position.

Dominant visible property:
`reciprocal mutual coordination/contact`.

## INF side

All three remain active at their own parts of the shared tabletop system. One participant adjusts a neutral central routing/divider element that visibly changes how identical pieces/flow are distributed across all three active work zones, including their own. The other two are not passive observers; their hands are visibly continuing work and receiving/adjusting the changed distribution.

Dominant visible property:
`one contribution visibly changes the shared external configuration/outcome`.

## Equal-legitimacy controls

- same three participants;
- same amount of visible activity;
- same centrality of bodies/faces;
- same task value;
- no one stands while others sit;
- no pointing, commanding, instructing or watching-passively poses;
- no special clothing, badge, chair or control console;
- INF consequence must be visible in the physical system, not inferred from social reaction.

## Failure conditions

Reject if blind review reads:
- INF as leader/boss/dominance;
- CON as teamwork efficiency rather than reciprocal connection;
- one side has more faces/eye contact/smiles;
- INF looks more consequential simply because more objects move;
- the shared outcome requires a verbal backstory.

---

## Pre-human rendered audit

For each D01-D04 pair run a blind visual review with reviewers seeing only the two rendered images and no edge labels.

Required questions:
1. What is the dominant meaningful difference?
2. What does each side primarily represent?
3. What alternative explanation could drive preference?
4. Is either side more attractive/resolved/valuable/status-laden?
5. Does any meaning require hidden story?
6. Are the two images genuinely matched enough for a fair choice?

Verdicts:
- `RENDER_CLEAN`
- `RENDER_CROSS_LOAD`
- `RENDER_ASYMMETRIC`
- `RENDER_STORY_DEPENDENT`
- `RENDER_FAIL`

Only `RENDER_CLEAN` proceeds directly to human M-B testing. Other verdicts trigger redesign, not prompt polishing around the same failed mechanism.

## Decision after D01-D04

Matched-edge remains primary only if:
- both baseline pairs remain clean after actual rendering;
- at least one of the two redesigned high-risk pairs removes the repeated structural failure that appeared in the text-only sprint;
- generated-image artefacts do not reintroduce a systematic visual advantage larger than the intended contrast.

If even the clean baselines collapse during rendering, reconsider static-image matched-edge feasibility itself.
