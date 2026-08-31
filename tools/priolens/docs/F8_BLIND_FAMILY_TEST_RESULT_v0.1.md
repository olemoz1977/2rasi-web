# PrioLens F8 blind family test result v0.1

Status: NEGATIVE FAMILY RECOVERY / ONE STIMULUS SURVIVES
Date: 2026-08-31

## Question

Can two materially different standalone scenes independently recover a common visible semantic core consistent with `local configuration / local control` without revealing project labels?

Stimuli:
- Blind A = historical `S11.webp` workstation scene.
- Blind B = new backpack-strap adjustment scene.

Both were reviewed separately with the same blind prompt. Project-specific labels and broad direction names were explicitly excluded.

## Claude blind A

Literal reading:
> A woman is seated at a desk, partially obscured by a monitor mounted on an articulating arm, with one hand raised near her face and the other resting on a keyboard tray.

Best-fit visible concepts:
1. Working at a computer workstation
2. Face partially blocked/obscured by equipment
3. Seated, stationary posture at a desk

Alternative reading only:
- adjusting or reaching toward the monitor

Interpretation:
**FAIL for F8 family recovery.**
The intended local-configuration action is not foregrounded. The dominant visible meaning is simply working at a workstation.

## Claude blind B

Literal reading:
> A person wearing a blue sweatshirt is using both hands to adjust the gray strap of a backpack on their shoulder.

Best-fit visible concepts:
1. Adjusting a backpack strap
2. Gripping/pulling a strap buckle
3. Wearing a backpack

Alternative readings retain the same local-action structure: putting on, taking off, or tightening gear.

Interpretation:
**PASS as an individual local-configuration candidate.**
The visible action is foregrounded and independently recoverable without the project label.

## Family-level verdict

**F8 NOT YET RECOVERED AS A FAMILY.**

Reason:
The two candidate stimuli do not independently converge on the same semantic core. Blind A collapses to `working at a workstation`; Blind B clearly recovers `adjusting/configuring worn gear`.

Do not rescue S11 by arguing that the intended monitor-adjustment action is present somewhere in the frame. The blind reading determines stimulus usability.

## Asset decisions

- `S11.webp`: REMOVE from active F8 candidate set. Retain only as historical old-AUT evidence.
- Backpack strap image (`4806.png` in current chat): KEEP/HOLD as `F8-B1` individual candidate.

Note: the backpack render contains a small generator mark in the lower-right corner. A clean final version would be required before deployment, but this does not affect the semantic test result.

## Next step

Do not reject F8 after one failed historical stimulus.

Instead, create or recover **one new materially different scene** where local configuration is the dominant visible action and then repeat the same blind test against F8-B1.

Candidate scene must:
- make adjustment/configuration the first visible reading;
- remain local to the user/object;
- avoid wider-system consequences;
- avoid path/travel/choice symbolism;
- avoid another backpack or workstation trope.

Only if two materially different scenes independently recover a common local-configuration core should F8 move from `EMERGING` toward `SUPPORTED LOWER-LEVEL FAMILY`.
