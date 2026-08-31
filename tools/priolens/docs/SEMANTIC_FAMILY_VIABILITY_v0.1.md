# PrioLens semantic family viability v0.1

Status: ACTIVE SOLO RESEARCH GATE
Date: 2026-08-31

## Purpose

Decide which lower-level standalone-image semantic families are worth extending before any new image generation or return to broad AUT/CER/EXP/MAS/CON/INF/PRO/OPP aggregation.

This is not construct validation. It is a practical solo-build gate.

## Gate rule

A family is `PROMISING` only if it has:
1. at least 2 materially different standalone scenes;
2. a common visible semantic core that can be described without the legacy broad label;
3. no single obvious nuisance cue that explains the whole family;
4. a plausible path to 3+ diverse exemplars without forcing artificial scenes.

`WEAK` means the family currently exists mostly as one trope/template.
`INSUFFICIENT` means there is not enough scene diversity to judge it.

## Current verdicts

| Family | Current evidence | Main problem | Verdict | Next action |
| --- | --- | --- | --- | --- |
| F1 Controlled execution | S12 caliper; S16 pottery | both are skilled hands / craft execution | WEAK-PROMISING | search Gallery for non-handcraft competence/execution scene; generate only if none exists |
| F2 External state steering | irrigation distribution; room-state switch; S02 domino as contrast | broad Influence is unsupported, but local steering/state-change core is visible across different mechanisms | PROMISING | keep as first family for compact solo prototype; add one non-mechanical/non-switch exemplar only if Gallery lacks one |
| F3 Reciprocal coordination | joint box exchange; S03 warm dyad | faces/warmth/social valence dominate; reciprocity not isolated | WEAK | search for low-face-salience joint action / reciprocal coordination scene |
| F4 Route continuation / discovery | footprints; windshield route; S01 forest road | all are path/journey templates; semantic core may only be route-following | WEAK | do not add more roads; search for discovery without path/door trope |
| F5 Shielding | S08 umbrella | one exemplar only | INSUFFICIENT | find two materially different protection/shielding mechanisms before using family |
| F6 Available resource | prepared workbench materials; ripe harvest+basket; old food scene as confounded contrast | strongest exemplars differ, but reward/nature still contaminates some | PROMISING | retain workbench as anchor; search Gallery for one non-food/non-nature immediately usable resource scene |
| F7 Explicit settled state | S06 checklist | one exemplar; symbol/completion confound | INSUFFICIENT | find text/symbol-light explicit-state scene |

## Decision

Do not build a balanced 7-family or 8-direction test yet.

Current best research/product seed is **F2 External state steering + F6 Available resource** because these are the only families that currently have both:
- more than one materially distinct scene;
- a semantic core that can be stated without relying on the old broad label.

F1 is close but still template-bound by skilled hands/craft.

F3/F4 are visually readable but trope-bound.
F5/F7 are underpopulated.

## Immediate execution order

1. Re-search Gallery specifically for:
   - F1 non-handcraft controlled execution;
   - F3 reciprocal coordination without warm faces;
   - F5 shielding/protection through a mechanism other than umbrella/case;
   - F6 non-food/non-nature available resource;
   - F7 explicit settled state without checklist/text/symbol.
2. Do **not** search for AUT/CER/EXP/MAS/CON/INF/PRO/OPP assets directly.
3. If Gallery has no credible exemplar for a missing family, generate exactly one new standalone image for that narrow family and retest.
4. Do not create matched A/B mates.

## Product consequence

The public PrioLens interaction can stay unchanged:

`two standalone images -> quick choice -> repeated pattern -> short descriptive mirror`

What changes is the hidden research layer: broad labels are not scoring units until earned by later evidence.
