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

No direction currently requires wholesale redesign.

## Hard blockers before freeze

### H1 — AUT-1 `4655`: physical task cue inconsistency

The three bottle openers support AUT/method choice, but the visible bottle/cap relationship is imperfect. The bottle appears inconsistent with the loose crown cap / opener task.

**Required:** edit the bottle/cap into one physically coherent same-task scene. Do not solve this only by cropping away the task cue, because then the three tools become generic objects and AUT weakens.

### H2 — generator marks

Visible KlingAI / generator marks must not enter the frozen stimulus set.

At minimum visible cleanup is required for selected generated files that still show a mark, including `4655`, `4656`, `4650`, `4649`, `4646`, `4641`, `4645` and any other final binary where a mark remains.

## Preliminary non-semantic cleanup completed in working runtime

These are **working previews only**, not repository-owned or frozen binaries.

### CER-2 `CER-CHECKLIST-01`

- Green checks were converted to neutral dark gray.
- Overall tone was reduced so the stimulus is no longer the brightest extreme.
- Semantic content is unchanged: all six rows remain visibly in the same completed/known state.
- Working preview mean luminance: ~**0.591**.
- Preliminary judgement: **cleanup PASS**.

### CON-2 `2624`

- A square crop centered on the reciprocal three-person interaction was produced.
- Exposure/shadows were lifted and color saturation reduced without changing who is present or their interaction.
- The hanging-lamp/portrait-format dominance was substantially reduced.
- Working preview mean luminance: ~**0.351**, versus raw ~0.169.
- Preliminary judgement: **cleanup PASS**, pending final binary review.

### PRO-1 `2723`

- A square crop centered on the wet umbrella was produced.
- Tonal normalization was restrained so wet/rain evidence remains visible.
- Working preview mean luminance: ~**0.353**.
- Preliminary judgement: **cleanup PASS**, pending final binary review.

After these three working cleanups, approximate mean-luminance range becomes **0.351–0.618** instead of raw **0.169–0.718**. That is a material improvement and removes the previous direction-correlated brightness extremes.

Therefore H2/H3/H4 from the initial audit are no longer conceptual blockers; they are now implementation/final-binary cleanup tasks. The only remaining **content-level hard blocker** is AUT-1 `4655` physical coherence.

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

### R3 — CER visual-family correlation

Even after tonal normalization, both CER exemplars remain simple, low-clutter, explicit-state scenes. This is partly inherent to the direction but may correlate CER with visual simplicity.

**Decision:** accept for pilot, retain exemplar IDs and test for unusually consistent CER preference independent of counterpart direction.

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

Raw working binaries before cleanup:

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

Preliminary cleaned substitutions:

- CER-2: ~0.591
- CON-2: ~0.351
- PRO-1: ~0.353

Resulting working range: approximately **0.351–0.618**.

## Within-direction independence

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

Highest semantic leakage to watch in pilot:

1. OPP-2 `4638` → residual CON / appetite-reward.
2. CER-2 checklist → task completion / achievement association.
3. AUT-2 `4656` → MAS/work-productivity association.
4. EXP-1 `3098` → AUT/open-route association.
5. CON-1 `4646` → romantic/intimacy association.

## Freeze gate

Do **not** populate `stimuli-v0.1.json` with final hashes yet.

Remaining required sequence:

1. fix AUT-1 `4655` bottle/cap physical coherence;
2. finalize cleaned square/tonal CER-2, CON-2 and PRO-1 binaries;
3. remove all visible generator marks;
4. re-run semantic + luminance/contrast review on the exact cleaned binaries;
5. confirm cleanup did not alter intended meaning;
6. copy 16 exact binaries into a PrioLens-owned asset path and record immutable hashes;
7. only then populate/freeze `stimuli-v0.1.json`.

## Pilot interpretation boundary

Even after cleanup and freeze, this set is only suitable for **internal/beta pilot evaluation**, not claims that the eight directions are validated latent priorities.

Pilot data must retain stimulus/exemplar IDs so exemplar-specific bias can be inspected, especially for OPP, CON and CER.