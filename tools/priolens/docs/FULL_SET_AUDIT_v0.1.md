# PrioLens full-set audit v0.1

Status: FULL-SET CANDIDATE AUDIT / NOT A STIMULUS FREEZE
Date: 2026-08-30

## Scope

Audited proposed 16-slot working set:

- AUT: `4655`, `4656`
- CER: `4650`, `CER-CHECKLIST-01`
- EXP: `3098`, `4649`
- MAS: `4635`, `4636`
- CON: `4646`, `2624`
- INF: `4602`, `4641`
- PRO: `2723`, `4645`
- OPP: `4637`, `4638`

This audit evaluates candidate suitability for a pilot stimulus freeze. It does not validate the eight directions as psychological constructs.

## Overall verdict

**16/16 semantic candidate coverage exists, but the set is NOT freeze-ready yet.**

No direction currently requires wholesale redesign. The remaining work separates into:

1. **hard asset-cleanup blockers** that must be fixed before freeze;
2. **cross-set structural risks** that can remain only if explicitly carried into pilot monitoring;
3. routine watermark/version/hash cleanup.

## Hard blockers before freeze

### H1 — AUT-1 `4655`: physical task cue inconsistency

The three bottle openers support AUT/method choice, but the visible bottle/cap relationship is imperfect. The bottle appears inconsistent with the loose crown cap / opener task.

**Required:** edit the bottle/cap into one physically coherent same-task scene. Do not solve this only by cropping away the task cue, because then the three tools become generic objects and AUT weakens.

### H2 — CER-2 `CER-CHECKLIST-01`: green success cue

Semantic mapping is defensible: all rows visibly share one completed/known status. However the green checkmarks introduce a learned positive/success cue that is not part of CER.

**Required:** neutralize all checks to dark gray/black while preserving identical completed status. No celebratory icon, stamp or colored coding.

### H3 — CON-2 `2624`: extreme luminance/format outlier

Raw source is portrait `867×1536`, mean relative luminance approximately **0.169**, the darkest item in the proposed set. It also has warm pendant-light salience and a focal smiling face.

**Required:** create a reviewed square normalization and exposure-normalized working asset without changing the social interaction. Do not simply stretch. Confirm the group remains visibly reciprocal after normalization.

### H4 — PRO-1 `2723`: portrait-format / threat-valence normalization

Raw source is portrait `867×1536` and has strong dark/rain contrast. Protection is semantically legible, but presentation would differ substantially from square peers.

**Required:** reviewed square normalization plus restrained tonal normalization. Preserve visible wet/rain context; do not brighten until the protection cue disappears.

### H5 — watermarks / generator marks

Generated candidates with visible KlingAI marks must not enter the frozen stimulus set.

At minimum visible cleanup is required for: `4655`, `4656`, `4650`, `4649`, `4646`, `4641`, `4645` and any other selected source that still contains a generator mark in the final binary.

## Cross-set structural risks

These do not automatically reject the set, but they must be explicit pilot risks.

### R1 — OPP direction is correlated with reward / food-resource valence

`4637` greenhouse and `4638` prepared food table are semantically defensible OPP exemplars, but both contain accessible food/resource value. This risks measuring attraction to food/nature/reward rather than only opportunity.

**Status:** highest methodological risk in the current set.

**Decision for v0.1 candidate stage:** retain both provisionally because no cleaner independent OPP reserve currently beats them under the semantic contract. In pilot, inspect whether OPP wins unusually often across participants and whether either exemplar drives the effect disproportionately.

### R2 — CON is necessarily human/socially salient

Both CON exemplars contain people/faces, while most other directions do not. Human faces can capture attention independently of connection priority.

`4646` also carries opposite-sex + smiling intimacy valence; `2624` carries warm group ambience.

**Decision:** retain provisionally because removing reciprocal social content weakened CON semantics in prior candidates. Treat face/social-salience as a known modality confound and inspect pair-level choice patterns in pilot.

### R3 — CER is currently a bright/minimal still-life family

Measured mean relative luminance:

- `4650`: ~0.618
- `CER-CHECKLIST-01`: ~0.718

The checklist is currently the brightest proposed stimulus. CER could therefore correlate with bright, low-clutter presentation.

**Required:** tonal normalization before freeze; do not leave both CER exemplars as the two brightest images.

### R4 — EXP valence/style heterogeneity

`3098` is a pleasant nature/travel scene; `4649` is a warm wooden domestic discovery scene. Independence is good, but `3098` may attract nature/travel preference.

**Decision:** retain and monitor exemplar-specific effects.

### R5 — technical/mechanical affinity across MAS / INF / AUT

- MAS-1 `4635` is technical/mechanical.
- INF-1 `4602` is a wooden mechanical routing system.
- AUT-2 `4656` is technology/workspace-heavy.

Semantics remain separable, but domain preference may create correlated choices.

**Decision:** acceptable for pilot if pair/exemplar diagnostics are stored.

## Quantitative visual check

Approximate mean relative luminance / contrast standard deviation from current working binaries:

| Slot | Mean luminance | Contrast SD |
|---|---:|---:|
| AUT-1 `4655` | 0.555 | 0.197 |
| AUT-2 `4656` | 0.611 | 0.219 |
| CER-1 `4650` | 0.618 | 0.201 |
| CER-2 checklist | 0.718 | 0.152 |
| EXP-1 `3098` | 0.387 | 0.187 |
| EXP-2 `4649` | 0.378 | 0.246 |
| MAS-1 `4635` | 0.412 | 0.206 |
| MAS-2 `4636` | 0.490 | 0.203 |
| CON-1 `4646` | 0.394 | 0.204 |
| CON-2 `2624` | 0.169 | 0.153 |
| INF-1 `4602` | 0.523 | 0.241 |
| INF-2 `4641` | 0.556 | 0.230 |
| PRO-1 `2723` | 0.400 | 0.276 |
| PRO-2 `4645` | 0.432 | 0.287 |
| OPP-1 `4637` | 0.400 | 0.236 |
| OPP-2 `4638` | 0.617 | 0.161 |

The present range **0.169–0.718** is too wide to freeze without normalization, especially because the extremes are direction-correlated (`CON-2` darkest, `CER-2` brightest).

## Within-direction independence

Current judgement:

- AUT `4655` vs `4656`: **PASS** — method choice vs environment configuration.
- CER `4650` vs checklist: **PASS** — known contents vs explicit known status.
- EXP `3098` vs `4649`: **PASS** — unknown space vs unknown content.
- MAS `4635` vs `4636`: **PASS** — precision measurement vs craft shaping.
- CON `4646` vs `2624`: **PASS** — dyadic reciprocity vs group belonging.
- INF `4602` vs `4641`: **PASS** — routed-system consequence vs causal chain reaction.
- PRO `2723` vs `4645`: **PASS** — weather shielding vs impact cushioning.
- OPP `4637` vs `4638`: **PASS at scene level / FLAG at domain level** — greenhouse access vs prepared resource, but both food/resource-positive.

## Semantic nearest-neighbour recheck

No current candidate is rejected purely on nearest-neighbour semantics after the latest review.

Highest semantic leakage to keep watching:

1. OPP-2 `4638` → residual CON / appetite-reward.
2. CER-2 checklist → task completion / achievement association.
3. AUT-2 `4656` → MAS/work-productivity association.
4. EXP-1 `3098` → AUT/open-route association.
5. CON-1 `4646` → romantic/intimacy association.

These are weaker than the intended direction at candidate-review level but require pilot diagnostics.

## Freeze gate

Do **not** populate `stimuli-v0.1.json` with final hashes yet.

Before candidate freeze:

1. fix H1 AUT-1 physical coherence;
2. neutralize CER-2 green checks;
3. square/tonally normalize CON-2 and PRO-1;
4. remove all watermarks/generator marks;
5. re-run the same luminance/contrast + semantic visual audit on cleaned binaries;
6. confirm no cleanup altered semantic meaning;
7. then copy 16 binaries into a PrioLens-owned asset path and record hashes.

## Pilot interpretation boundary

Even after cleanup and freeze, this set is only suitable for **internal/beta pilot evaluation**, not claims that the eight directions are validated latent priorities.

Pilot data must retain stimulus/exemplar IDs so exemplar-specific bias can be inspected, especially for OPP, CON and CER.