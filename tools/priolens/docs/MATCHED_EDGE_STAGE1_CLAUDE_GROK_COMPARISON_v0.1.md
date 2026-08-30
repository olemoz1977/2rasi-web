# PrioLens matched-edge Stage 1 Claude vs Grok comparison v0.1

Status: GATE F2 EVIDENCE / PARTIAL-BLIND COMPARISON
Date: 2026-08-30

## Review conditions

### Grok
- Stage 1 used the neutralized blind package.
- Intended 8-direction mapping was hidden.
- Grok judged all 14 concepts `CLEAN_CONTRAST`.

### Claude
- Stage 1 was blind to the intended M01-M14 direction mapping and the eight revealed directions.
- Minor information leakage remained because the package identified the project as PrioLens / matched-edge.
- This makes Claude Stage 1 not perfectly blind to study family, but it did not have the information needed to fit pair meanings to specific intended directions.
- Therefore use Claude primarily as adversarial concept-feasibility evidence, not as pristine blind semantic validation.

## Main divergence

Grok's Stage 1 was permissive: 14/14 `CLEAN_CONTRAST`.

Claude found substantially more structural failure:
- `CLEAN_CONTRAST`: M01, M03, M06, M08, M11, M13
- `AMBIGUOUS_CONTRAST`: M04, M07, M09, M10
- `NONSEMANTIC_DOMINATED`: M05, M12, M14
- `INFEASIBLE_AS_MATCHED_PAIR`: M02

This disagreement must not be averaged away. The failure modes Claude identifies are exactly the kinds of artefacts the matched-edge architecture is intended to control.

## Strong convergence

Both reviewers identify the strongest concepts around:
- M01: secured/protected vs open/visible;
- M08: transparent/visible mechanism vs protective cover;
- M11: system-level effect vs fine individual precision;
- M13: broader flow control vs single-route/single-item choice.

This is meaningful because those concepts survive both a permissive and a more adversarial reading.

## Critical Claude findings

### 1. Completion / resolution cue family

Claude identifies M05, M07, M12 and M14 as variants of one underlying confound:

`resolved / matched / ready-to-use`
vs
`open / unresolved / equal-choice / partly hidden`

The resolved side can be inherently more satisfying, convenient or visually complete regardless of the intended priority edge.

Implication:
- these concepts cannot be treated as successful evidence for EXP/OPP or AUT/OPP solely because the revealed mapping sounds semantically plausible;
- matched-edge architecture can still encode systematic desirability asymmetry.

### 2. Hidden-story dependence

Claude identifies:
- M02: "previously unseen" depends on prior knowledge not visible in a still;
- M04: shared ownership/benefit of beds is not directly visible;
- M06: assumes unseen/other workstations or users are meaningfully affected;
- M09: assumes consequences for passive bystanders.

Implication:
- matched scenes do not remove researcher-story risk;
- visible consequence and visible relationship must be present in-frame.

### 3. Status / agency asymmetry

M04 and M09 give one person visibly more consequential agency than the others.

This can create a dominance/leadership/status cue rather than a clean CON↔INF contrast.

### 4. Reused visual mechanisms

Claude sees likely duplication across:
- M03 / M11 / M13: single-item precision or discrete choice vs broader flow/system control;
- M04 / M11: central gate with downstream irrigation effect;
- M05 / M07 / M12 / M14: resolved-ready vs unresolved-open structure.

Implication:
- even if individual matched edges are interpretable, direction-level aggregation may collapse onto a small set of recurring visual mechanisms.

## Architecture implication

Matched-edge remains the leading architecture candidate because it can control within-trial domain, people, lighting, reward and other visual-family differences better than unrelated global exemplars.

However, Claude Stage 1 blocks any claim that the initial 14-concept sprint is a clean success.

Current F2 interpretation:

`MATCHED_EDGE = PROMISING BUT MECHANISM-CONFOUNDED / NOT SELECTED`

Do not advance all 14 concepts to rendering.

## Best next diagnostic set

Before large asset generation, render only concepts that discriminate between the optimistic Grok reading and the stricter Claude reading.

Recommended diagnostic concepts:
1. M08 — strongest clean baseline: CER↔PRO candidate.
2. M11 — strong action/scope baseline: MAS↔INF candidate.
3. M07 or M14 — intentionally test the completion/resolution confound in AUT↔OPP.
4. M02 — intentionally test whether EXP↔AUT can be represented in a single still without prior-knowledge story.

Purpose is falsification, not showcase quality.

If humans or independent visual review reproduce Claude's failure modes after rendering, redesign those edge mechanisms rather than polishing them.

## Current decision

- Do not return to the old 16 global exemplar set.
- Do not declare matched-edge architecture validated.
- Do not render all 56 assets.
- Preserve Grok Stage 1/2 as supportive concept evidence.
- Preserve Claude Stage 1 as stronger adversarial evidence despite minor project-name leakage.
- Await Claude Stage 2 before closing Gate F2 architecture selection.
