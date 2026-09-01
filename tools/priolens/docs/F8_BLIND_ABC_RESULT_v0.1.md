# PrioLens F8 blind A/B/C result v0.1

Status: ACTIVE EVIDENCE / LOWER-LEVEL FAMILY TEST
Date: 2026-08-31

## Purpose

Test whether materially different standalone scenes independently recover a common lower-level visible mechanism provisionally called `F8 Local configuration / local control`.

This is not AUT validation and not a scoring permission.

## Blind protocol

Each image was shown alone in a clean AI chat with no PrioLens/F8/AUT labels and the same prompt asking for:
1. literal description;
2. three best-fit visible concepts;
3. alternative readings;
4. visual confounds.

## A — historical S11 workstation scene

Claude literal description:
- woman seated at desk, partially obscured by monitor, one hand raised near face, other on keyboard tray.

Top concept:
- working at a computer workstation.

Adjustment appeared only as an alternative reading.

Verdict: **DROP from active F8 family**.
Reason: the intended local-configuration mechanism is not foregrounded. The scene reads primarily as generic computer work.

## B — backpack shoulder-strap adjustment

Claude literal description:
- person uses both hands to adjust gray backpack strap on shoulder.

Top concepts:
1. adjusting backpack strap;
2. gripping/pulling strap buckle;
3. wearing backpack.

Alternative leakage:
- putting backpack on;
- taking backpack off;
- tightening gear before movement.

Verdict: **PASS CANDIDATE / KEEP**.
Reason: direct local adjustment is the dominant blind reading.

## C — bicycle saddle-height adjustment

Claude literal description:
- person stands beside bicycle, one hand on seat, other using a small tool at seat-post clamp.

Top concepts:
1. adjusting/tightening a bicycle component;
2. hands-on manual manipulation;
3. person and bicycle in proximity.

Alternative leakage:
- loosening clamp;
- removing/installing seat post;
- inspecting bicycle.

Verdict: **HOLD**.
Reason: adjustment is foregrounded, but the scene also reads as technical maintenance/repair. It does not yet cleanly recover `configuration for own use`.

## Current F8 conclusion

The family **does not yet pass**.

Current evidence:
- A fails because configuration is not visually foregrounded;
- B is the strongest current anchor;
- C recovers adjustment but with repair/maintenance leakage.

Therefore do not claim that F8 has been established merely because B and C both contain manipulation.

The next exemplar should preserve direct self-use adjustment while removing repair/tool cues.

## Design constraint for next F8 candidate

Prefer an object with a built-in, ordinary, tool-free adjustment mechanism where the visible action naturally means fitting/configuring for immediate personal use.

Avoid:
- tools;
- technical maintenance context;
- damaged components;
- workshop cues;
- sports/performance context;
- broader system effects;
- old AUT framing.
