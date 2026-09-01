# PrioLens rendered diagnostic prompts v0.1

Status: EXECUTION DRAFT / CONTROLLED BASE+EDIT WORKFLOW
Date: 2026-08-30
Source: `RENDERED_DIAGNOSTIC_SET_v0.1.md`

## Workflow rule

Do not independently generate both sides of a pair.

Preferred sequence:
1. generate one neutral/base side;
2. preserve camera, framing, lighting, scene geometry and all non-target elements;
3. create the opposite side by editing only the intended contrast;
4. if the edit materially shifts framing, object count, lighting, person pose or visual quality, reject and regenerate rather than accepting the pair.

No text, labels, arrows, diagrams, logos or watermarks in any image.

All images: photorealistic, square 1:1, neutral natural lighting, moderate saturation, mobile-legible composition.

---

# D01 · CER ↔ PRO

## Base generation: CER side

Create one photorealistic square 1:1 image of a neutral workshop bench. Centered in the frame is a small simple mechanical assembly mounted inside a clean rectangular protective housing. The housing has a rigid transparent front inspection panel of normal industrial quality, so the internal mechanism position and state are clearly visible through the panel. The transparent panel must still look functional and protective, not flimsy or unsafe. Neutral background, no person, no text, no warning labels, no brand, no dramatic lighting. Keep the housing and mechanism simple and visually legible at small mobile size. The scene must look ordinary and equally plausible as a product with either a transparent or opaque front cover.

## Controlled edit: PRO side

Edit the existing image only. Preserve exactly the same camera, crop, perspective, bench, background, mechanical assembly, housing dimensions, lighting, color balance and overall visual quality. Replace only the transparent front inspection panel with an opaque reinforced protective front cover of the same external dimensions. The opaque cover should communicate stronger physical shielding through fitted solid construction, without looking darker, more expensive, more threatening or more attractive. Do not add locks, warning colors, hazard signs, extra hardware or any new objects. The internal mechanism should no longer be visible. Everything else remains unchanged.

## Reject if
- edit changes crop/perspective;
- PRO side becomes darker/heavier;
- CER side looks clearly more premium;
- one housing looks safer or more professional because of unrelated detail.

---

# D02 · MAS ↔ INF

## Base generation: MAS side

Create one photorealistic square 1:1 image in a neutral greenhouse or irrigation work area. One ordinary worker in simple work clothing is beside a modest irrigation system and several similar plant beds. Use a medium fixed viewpoint wide enough to show both a foreground irrigation control area and several background beds. The worker's face is not a focal point. The worker is performing a precise fine adjustment on one small irrigation emitter or distribution component serving one plant, using a simple manual adjustment tool or visible calibrated alignment, with careful hand control. The skill and precision should be visible from the action itself, not from expensive instruments. Neutral natural lighting, no branding, no dramatic water spray, no success/failure cues.

## Controlled edit: INF side

Edit the existing image only. Preserve the exact same worker, clothing, greenhouse, plant beds, camera, crop, lighting and overall scene quality. Change only the worker's immediate action and the local irrigation configuration: instead of fine-adjusting one emitter, the worker operates one simple main distribution gate/manifold control, and the resulting water routing is visibly distributed across several existing beds within the same frame. Keep the action mechanically simple and avoid adding a complex control panel. Do not make the worker more central, heroic or authoritative. Do not increase saturation, brightness or overall apparent productivity. Maintain similar visual activity and water amount as much as possible.

## Reject if
- framing switches to wide spectacle vs close precision;
- INF side wins through more visible motion/water;
- MAS side wins through more sophisticated tool aesthetics;
- worker posture/status changes materially.

---

# D03 · AUT ↔ OPP redesigned

## Base generation: AUT side

Create one photorealistic square 1:1 image of a neutral modular workbench. In the center is one simple unfinished functional assembly mounted on a visible reconfigurable fixture or rail. Only the actor's hands/forearms are visible. The actor is actively repositioning the same functional control/module between two clearly different but equally legitimate operating positions on the fixture. Both positions visibly serve the same unfinished task and neither looks superior, more complete or more valuable. The scene should communicate that the person can determine how the task setup is arranged, not merely that many objects exist. Use ordinary neutral components, no labels, no premium tools, no bright colors, no finished product and no reward object.

## Controlled edit: OPP side

Edit the existing image only. Preserve the exact same workbench, unfinished base assembly, actor hands, camera, crop, lighting, colors and overall component value. Place the base fixture in one neutral standard configuration rather than showing active repositioning. Make one clearly compatible unused expansion interface/slot on the same system visibly available, with one neutral extension module beside it but not installed. The base task must remain unfinished. The extension must communicate additional future functional capacity, not the missing final piece required to complete the current task. Do not make the OPP side more resolved, tidy, bright, valuable or complete. Keep total object count and visual density comparable to the AUT side.

## Reject if
- AUT reads as indecision or arbitrary option count;
- OPP looks like the obvious missing final piece;
- OPP side looks more complete/rewarding;
- AUT looks like technical mastery;
- future value depends on invisible instructions or ownership story.

---

# D04 · CON ↔ INF redesigned

## Base generation: CON side

Create one photorealistic square 1:1 overhead or high-oblique image of three adults around the same neutral tabletop task. Faces should be minimized and not emotionally expressive; hands and shared action are the focal point. All three participants are visibly active. Use identical neutral pieces/components and a simple shared tabletop setup. In this variant, the three participants perform one reciprocal mutually dependent action: each person's hand contribution directly meets or passes into another person's contribution, forming a clear cooperative loop with no central authority position. Avoid smiles, pointing, instructing, status cues, party/dining context or professional uniforms. Neutral lighting and equal visual prominence for all three.

## Controlled edit: INF side

Edit the existing image only. Preserve exactly the same three adults, table, camera, crop, lighting, clothing, component family, object density and overall activity level. All three remain visibly active. Change only the interaction mechanism: one participant adjusts a neutral central routing/divider element that visibly changes how identical pieces or flow are distributed across all three active work zones, including their own. The other two participants continue actively receiving/arranging the changed distribution; they are not passive observers and do not look toward the acting person for instruction. No one gains a special chair, position, badge, control console, standing posture or authority cue. The shared physical consequence must be visible without social reaction or backstory.

## Reject if
- INF reads as boss/leader/dominance;
- CON reads only as teamwork efficiency;
- one side has more faces/eye contact/emotion;
- INF has more overall movement or more objects;
- consequence relies on a verbal story rather than visible physical configuration.

---

## Review rule after each pair

Do not show intended direction labels to the first visual reviewer.

Ask only:
- What is the main meaningful difference?
- What does each side seem to prioritize or make possible?
- Is either side more attractive, complete, valuable, safe, powerful or visually interesting for reasons unrelated to that difference?
- Does either interpretation require a hidden story?

Only after the blind response is preserved compare it to the intended edge.
