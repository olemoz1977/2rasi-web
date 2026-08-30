# Claude observable-tradeoff replication Stage 1 result v0.1

Status: LOCKED BLIND RESULT
Date: 2026-08-31
Reviewer: Claude
Source package: `OT_REPLICATION_BLIND_STAGE1_v0.1.md`

## Verbatim response

This looks like stimulus-validation work for your visual pair platform — I'll do a pure visual read, no construct labels.

## Per-pair analysis

**X01** — Diff: A reshapes the wax to fix an uneven spot; B adds supports that hold the existing shape. Nuisance: "correcting a flaw" (A) can read as more skilled/purposeful than "just bracing" (B). **CLEAN_LOCAL_CONTRAST** (nuisance mild).

**X02** — Diff: A opens a flap to reveal current joint orientation; B rotates the joint to a new orientation. Nuisance: B's visible object motion (lamp head moving) is more salient than A's small flap — could read as "more happens" in B. **CLEAN_LOCAL_CONTRAST**.

**X03** — Diff: A picks which of two tracks the ball will follow; B aligns a rail segment flush with fixed neighbors. Nuisance: B looks like a fine-motor precision/skill task, A looks like a simple choice — different perceived difficulty. **CLEAN_LOCAL_CONTRAST**, flag skill-asymmetry.

**X04** — Diff: A changes which shared downstream channel gets the flow; B changes circulation only inside the worker's own basin. Nuisance: A affects the shared system, B is purely private — scope difference could read as "more consequential" for A regardless of any other factor. **AMBIGUOUS**.

**X05** — Diff: A rotates the disc's orientation; B slides open a cover to reveal current orientation. Nuisance: same motion-salience issue as X02 (rotating disc vs. sliding cover). **CLEAN_LOCAL_CONTRAST**.

**X06** — Diff: A assembles a 3-part cradle to hold the vessel's current form; B reshapes the wall/rim to be more even. Nuisance: 3-part cradle assembly may read as more complex/skilled than a single continuous adjustment. **AMBIGUOUS**.

**X07** — Diff: A repositions a guide inside the worker's own zone (no downstream effect); B moves a diverter that changes which shared lane cards enter. Nuisance: same local-vs-shared scope asymmetry as X04. **AMBIGUOUS**.

**X08** — Diff: A fits a plate flush to reference edges (no card moves); B directs the next actual card into a slot. Nuisance: B acts on a real moving object, A is a static fit exercise — B may read as more "live"/consequential. **AMBIGUOUS**.

**X09** — Diff: A reveals the current block arrangement; B moves a divider, changing the arrangement. Nuisance: same reveal-vs-motion salience issue as X02/X05. **CLEAN_LOCAL_CONTRAST**.

**X10** — Diff: A picks a path for the tube at the junction; B seats a connector centered between fixed tube ends. Both static/no visible consequence, well matched. **CLEAN_LOCAL_CONTRAST**.

**X11** — Diff: A picks which downstream track beads follow; B adjusts bead positioning only in the worker's own tray. Nuisance: same local-vs-downstream scope issue as X04/X07. **AMBIGUOUS**.

**X12** — Diff: A corrects the joint toward being more exactly square; B braces the existing (already-good) angle so it doesn't move. Nuisance: "fixing a flaw" vs. "preserving a correct state" implies different necessity/skill levels, same issue as X01. **AMBIGUOUS**.

## Cross-pair grouping

**Group 1 — reshape/correct existing form vs. secure/stabilize existing form.**
X01, X06, X12.
Polarity: X01 (A=reshape, B=stabilize), X06 (A=stabilize, B=reshape — reversed), X12 (A=reshape, B=stabilize).
All three are hands-on craft/repair-bench scenes (wax, ceramics, wood). It recurs across materials, but the scene *type* (artisan correcting vs. bracing a physical object) stays constant, so this could partly be a craft/repair trope rather than a domain-independent relation.
**Status: PARTIAL_REPLICATION.**

**Group 2 — reveal/observe current state vs. actively change that state.**
X02, X05, X09.
Polarity: X02 (A=reveal, B=change), X05 (A=change, B=reveal — reversed), X09 (A=reveal, B=change).
All three use a nearly identical mechanism: a cover/flap that either exposes the current state or is already open while something rotates/slides. The relation is consistent but the device convention (cover reveals vs. part moves) is unusually uniform across the three — this looks like the same mechanical template restated, not clearly independent scenes.
**Status: PARTIAL_REPLICATION.**

**Group 3 — change with effect reaching beyond one's station (shared/downstream) vs. change confined to one's own local zone.**
X04, X07, X11.
Polarity: X04 (A=downstream, B=local), X07 (A=local, B=downstream — reversed), X11 (A=downstream, B=local).
All three share one scene template: material flows along a track past a worker's station toward a downstream branch (water/cards/beads are just substituted materials on the same layout). Domain "change" here is largely cosmetic.
**Status: PARTIAL_REPLICATION** (recurs, but weak test of domain-independence).

**Group 4 — select/route among options vs. align/fit a piece to sit flush with fixed elements.**
X03, X08, X10.
Polarity: X03 (A=route, B=fit), X08 (A=fit, B=route — reversed), X10 (A=route, B=fit).
Same track-toward-junction template as Group 3.
**Status: PARTIAL_REPLICATION.**

## Cross-group concern

Groups 3 and 4 both draw on the identical "items travel along a track to a two-way junction" scene, and the "routing/selection" pole appears in **six** of the twelve pairs (X03, X04, X07, X08, X10, X11) — always as one side of the pair, but contrasted against two different alternatives: local-only tweak (Group 3) or flush-alignment fit (Group 4). This suggests "routing/selection" may be the more dominant recurring pole, deliberately paired with two distinct counter-actions, rather than four fully independent, balanced relations. Worth deciding whether Groups 3 and 4 are truly separate constructs or two probes of one pole against different foils.

No pair breaks cleanly outside these four groupings — all twelve sort into one of the four (3 pairs each).
