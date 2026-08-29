# PrioLens stimulus semantic pre-audit v0.1

Status: INTERNAL TRIAGE / NOT A STIMULUS FREEZE
Date: 2026-08-29

## Scope

This is a **semantic pre-audit** of the 19 historically mapped candidates recovered into `candidate-inventory-v0.1.json`.

It applies `DIRECTION_DEFINITIONS_v0.1.md` and deliberately does **not** assume that legacy pair labels or the old v0.4 assignment are correct.

This document is not a substitute for direct image inspection. Pixel-level visual-confound review remains required for every candidate before any final set is frozen.

Historical prototype reactions/notes may be used only as corroborating provenance. They are not treated as validation evidence for PrioLens directions.

## Status vocabulary

- `PLAUSIBLE`: current mapping has a defensible semantic route, subject to direct image review and neighbour challenge.
- `AMBIGUOUS`: intended mapping is plausible, but a neighbouring direction is at least comparably plausible from the known content/provenance.
- `LIKELY_MISMAPPED`: available semantic evidence points more strongly to another direction than the current mapping.
- `WEAK`: current mapping is not sufficiently supported by the known content/provenance.
- `VISUAL_REVIEW_REQUIRED`: direct asset inspection is still required before final disposition.

No `PLAUSIBLE` label means `SEMANTIC_PASS` yet.

## Mapped-candidate triage

| Current direction | Candidate | Pre-audit | Main challenge | Working disposition |
|---|---|---|---|---|
| AUT | `CR-PO-01/open-space.png` | AMBIGUOUS | Physical openness alone can express AUT, EXP or OPP. Self-direction must be visibly legible. | Keep for direct review, do not freeze. |
| AUT | `p0-001-b.png` | PLAUSIBLE | Historical reaction language included wanting more freedom, which is compatible with AUT, but the image itself must carry that meaning without the old prompt. | Keep as AUT candidate pending direct review. |
| CER | `CR-PO-01/partitioned-space.png` | AMBIGUOUS | Structure/partitioning can mean predictability, protection or mere visual order. | Keep for direct review, challenge against PRO. |
| CER | `p0-003-b.png` | LIKELY_MISMAPPED | Historical reaction language such as “better not open” is more consistent with protection/avoidance of exposure than certainty. | Remove from default CER pool; review as possible PRO only if visible content supports it. |
| CER | `CS-PR-01/more-reveal.webp` | PLAUSIBLE | More visible information can reduce ambiguity, but it may also be a low-level reveal manipulation rather than a real certainty exemplar. | Keep as CER candidate pending visual/confound review. |
| EXP | `p0-003-a.png` | AMBIGUOUS | Historical reactions mix clarity and interest in uncertainty; the scene may be read as CER rather than discovery. | Keep only for direct neighbour review against CER. |
| EXP | `n0-004-a.webp` | AMBIGUOUS | No defensible PrioLens mapping can be inferred from legacy identity alone. | Direct review required before retaining. |
| EXP | `CS-PR-01/less-reveal.jpg` | AMBIGUOUS | Partial concealment may invite curiosity, but it can also simply increase uncertainty. | Keep only if visible scene makes discovery, not uncertainty, salient. |
| MAS | `docs/media/p5_person_laptop.png` | WEAK | A person using a laptop is generic work/productivity, not mastery unless skill/refinement is visibly established. | Quarantine from MAS until direct review proves skilled execution/refinement. |
| MAS | `docs/media/v2_p3_notebook.png` | WEAK | Notebook/work imagery does not by itself encode competence, practice or quality. | Quarantine from MAS until direct review proves mastery-specific content. |
| CON | `docs/media/p1_phone_table.png` | AMBIGUOUS | A phone/social object can imply communication, absence, waiting or disconnection. | Direct review required; do not infer connection from device presence. |
| CON | `docs/media/p4_empty_table.png` | WEAK | An empty table requires a hidden social story to become connection. | Quarantine unless visible content independently establishes reciprocal/belonging meaning. |
| CON | `docs/media/p3_chat_screen.png` | AMBIGUOUS | Chat UI indicates communication, not necessarily mutual closeness/belonging; text/UI confound risk is high. | Keep only for review; likely unsuitable for final cross-direction set if text/UI is salient. |
| INF | `n0-009-a-prototype-v0.png` | WEAK | Historical material already flagged social-pair asymmetry/projection risk. Curiosity about people is not influence. | Quarantine. Do not use to satisfy INF count. |
| INF | `p0-001-a.png` | WEAK | Historical reaction “looks reliable” does not encode ability to shape a shared/external outcome. | Quarantine. Do not use to satisfy INF count. |
| PRO | `n0-009-b-prototype-v0.png` | WEAK | “Leaving them alone”/social distance is not protection unless harm/loss prevention is visibly present. | Quarantine pending direct review. |
| PRO | `p0-002-a.png` | AMBIGUOUS | Historical language about openness/hesitation can indicate protection, certainty or avoidance. | Keep as possible PRO candidate, challenge against CER. |
| OPP | `p0-002-b.png` | LIKELY_MISMAPPED | Historical reaction “what is behind them?” is discovery/curiosity, closer to EXP than future value/gain. | Remove from default OPP pool; review as possible EXP. |
| OPP | `docs/media/v2_p2_corridor.png` | AMBIGUOUS | A corridor/path can mean movement, exploration, autonomy or opportunity; future value must be visible rather than inferred. | Keep for direct review, do not freeze. |

## Direction-level conclusion after mapped-candidate pre-audit

### AUT

One plausible candidate (`p0-001-b`), one ambiguous candidate. No defensible two-exemplar freeze yet.

### CER

`more-reveal` is plausible; `partitioned-space` is ambiguous; `p0-003-b` should not remain CER by default.

### EXP

All three require neighbour challenge. `p0-002-b`, currently mapped to OPP, is a possible additional EXP candidate.

### MAS

Current two-candidate pool is weak because both may encode generic work rather than mastery. Treat MAS as a likely asset gap until reserve review proves otherwise.

### CON

Current pool relies heavily on social/device projection. No two-exemplar freeze yet.

### INF

**Current mapped pool fails the count test in substance even though it passes in raw file count.** Both mapped candidates are quarantined. Treat INF as an active gap unless reserve review yields stronger material.

### PRO

`p0-002-a` remains possible; `p0-003-b`, currently mapped to CER, is a possible replacement candidate. `n0-009-b` is weak.

### OPP

Current pool is not sufficient. `p0-002-b` is likely exploration, while corridor imagery is inherently ambiguous without visible future-value content. Treat OPP as a likely gap unless reserve review yields stronger material.

## Immediate reserve-review priorities

The 23 reserve assets should not be reviewed uniformly. Prioritize directions where the mapped pool is substantively weakest:

1. INF
2. MAS
3. OPP
4. CON
5. PRO
6. AUT / CER / EXP neighbour cleanup

Reserve candidates must be allowed to change direction. Their source-family labels are provenance, not construct labels.

## Methodological consequence

The old statement “raw count is not the bottleneck” remains technically true but is now too optimistic for planning.

After applying explicit semantic boundaries, **usable count may be a bottleneck for INF, MAS and OPP**. New image generation must still wait until the 23 reserve assets have been directly reviewed, but the project should no longer assume that the recovered 42-image library will necessarily yield a defensible 16-image final set.

## What this audit does not authorize

- no final 16 stimulus selection;
- no PrioLens asset freeze;
- no direction scores or validated construct claims;
- no planner/renderer freeze based on these candidates;
- no visual-confound pass without direct image inspection.
