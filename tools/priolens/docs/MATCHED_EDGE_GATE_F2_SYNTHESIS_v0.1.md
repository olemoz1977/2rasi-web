# PrioLens matched-edge Gate F2 synthesis v0.1

Status: ARCHITECTURE FEASIBILITY CHECKPOINT / TEXT-ONLY / NOT HUMAN VALIDATION
Date: 2026-08-30

## Question

Does edge-specific matched-scene design deserve to replace the global-exemplar pool as the primary next research path?

This checkpoint combines:
- Grok Stage 1 + Stage 2;
- Claude Stage 1 + Stage 2;
- prior global-exemplar red-team evidence;
- ConflictLab/2Pair methodological transfer lessons.

## Review-condition caveat

Grok Stage 1 was neutralized and blind to the hidden framework/mapping.

Claude Stage 1 was blind to the eight direction definitions and M01-M14 intended mapping, but the project/matched-edge label leaked. Use Claude as adversarial feasibility evidence, not pristine blind validation.

## What converges strongly

Both reviewers support the matched-edge idea at least at concept-feasibility level.

Strongest surviving concepts / edges:
- M01 + M08: CER ↔ PRO
- M03 + M11: MAS ↔ INF
- M06: AUT ↔ INF partial success

The strongest common property is not a particular visual style. It is that the tradeoff is:
- present-tense;
- directly visible;
- symmetric enough to preserve equal legitimacy;
- understandable without a hidden role/history/future story.

This is consistent with the earlier direction-operationalizability audit.

## Where Grok and Claude diverge

Grok Stage 2 accepted all 14 concepts as SUPPORTED.

Claude Stage 2 classified:
- 5 SUPPORTED;
- 6 CROSS_LOAD;
- 3 INSUFFICIENT.

Do not average confidence scores. Treat the divergence as evidence about reviewer permissiveness.

Where Claude identifies a concrete, reproducible failure mechanism, retain that failure as an active design risk even when Grok accepted the mapping.

## Repeated failure grammars

### 1. Resolved / ready / matched vs unresolved / open

Affected concepts:
- M05
- M07
- M12
- M14

Risk:
A 'ready', 'matching', 'usable' or 'completed' side can be preferred because it is more resolved or satisfying, not because OPP was prioritized.

Consequence:
Current OPP grammar is not acceptable for rendering as-is.

### 2. Choice among equivalent options as AUT

Affected concepts:
- M02
- M07
- M10
- M14

Risk:
Multiple equivalent choices do not automatically communicate meaningful self-direction. They may look arbitrary, uncertain or exploratory.

Consequence:
AUT must be represented through visible self-determined control over a meaningful method/course, not merely option count.

### 3. Unknown / previously unseen as EXP

Affected concepts:
- M02
- M10 and related EXP concepts

Risk:
'Previously unseen' is often a hidden temporal fact. A static frame can show occlusion or investigation, but not what the participant/actor knew before.

Consequence:
EXP needs an in-frame investigation/reveal action whose epistemic contrast is visible without requiring prior-state story.

### 4. One active person / passive others as INF

Affected concepts:
- M04
- M09

Risk:
Impact on a shared outcome becomes visually entangled with dominance, leadership, status or unequal agency.

Consequence:
CON ↔ INF must show external/shared consequence without making one person socially dominant over passive others.

### 5. Scale / scope as a substitute for INF

Affected concepts:
- M13; partly M03/M11 mechanism family

Risk:
Large/multiple/busy effects may be selected because of magnitude or spectacle rather than meaningful influence.

Consequence:
INF should vary in mechanism and not rely systematically on 'more downstream objects'.

## Architecture comparison after Gate F2

### Global exemplar path

Known evidence:
- current 16 failed freeze-readiness;
- direction-correlated face, food, nature, craft, threat and technical-family confounds persist across unrelated images;
- single-image direction legibility is especially weak for AUT, INF, OPP and EXP;
- larger global pool could still be tested, but does not remove within-trial visual-domain asymmetry.

### Matched-edge path

New evidence:
- concept-level matched scenes can create clean direct tradeoffs for at least CER↔PRO and MAS↔INF;
- one AUT↔INF realization also survives;
- within-trial visual domain, people, lighting, object family and reward exposure can be controlled substantially better;
- failures are now localized to specific edge grammars rather than broad unrelated-image confounds.

New risks:
- edge meaning may become opponent-specific;
- recurring visual mechanisms can masquerade as direction signal;
- 28 bespoke edges create large design burden;
- human interpretation remains untested.

## Gate F2 decision

**Architecture M · matched-edge becomes the PRIMARY RESEARCH PATH.**

This is not a final product-architecture freeze.

Architecture G · global exemplar pool is retained as a fallback / comparator, not the next default build path.

Reason:
Matched-edge has demonstrated greater concept-level controllability on difficult edges than the old global-exemplar approach, while its failures are concrete enough to falsify and redesign before large asset generation.

## What this decision does NOT mean

It does not mean:
- matched-edge is validated;
- all 28 edges can be rendered cleanly;
- the eight directions are validated constructs;
- edge wins can already be aggregated into a direction score;
- the 14 current concepts should all be rendered.

## Next gate: rendered diagnostic falsification set

Do not render 56 assets.

Render only four matched pairs chosen to discriminate success vs failure mechanisms:

1. **M08 CER ↔ PRO** — strongest clean baseline.
2. **M11 MAS ↔ INF** — strong cross-domain action baseline.
3. **AUT ↔ OPP redesigned diagnostic** — do NOT render M07/M14 unchanged; remove resolved-ready completion advantage and make autonomy meaningful rather than mere option count.
4. **CON ↔ INF redesigned diagnostic** — do NOT render M04/M09 unchanged; show shared external consequence without active-person/passive-others status asymmetry.

Why not M02 unchanged:
The hidden prior-knowledge flaw is already conceptual. Rendering it unchanged would mostly confirm a known problem. Better information gain comes from testing whether redesigned AUT/OPP and CON/INF grammars can remove the repeated structural confounds.

## Rendered-gate success criteria

At asset review level, before humans:
- intended contrast visibly dominates incidental differences;
- same people/object family/camera/lighting are matched where possible;
- no obvious resolved-vs-unresolved attractiveness asymmetry;
- no hidden prior-state story required;
- no status/dominance cue used as INF shortcut;
- both sides remain functionally legitimate.

Then human M-B validation:
1. pair choice / no_clear_choice;
2. open reason after choice is locked;
3. reasons coded against intended edge only after preservation;
4. compare intended-edge reasons against confound/cross-load reasons.

## Current inference boundary

Until human matched-pair evidence exists, the strongest claim remains:

> These are candidate controlled visual tradeoffs designed to represent working priority-lens edges.

Do not yet say that selecting a variant means that direction took priority.
