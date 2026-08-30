# PrioLens vs 2Pair methodological boundary v0.1

Status: PRODUCT-IDENTITY / METHOD GATE
Date: 2026-08-30

## Why this check exists

The matched-edge redesign makes PrioLens stimuli visually and procedurally resemble 2Pair/ConflictLab v0.8.

That resemblance is not accidental. Both now use the same useful experimental discipline:

- controlled A/B visual contrasts;
- choose before explaining;
- blind/open reason before interpretation;
- equal legitimacy where possible;
- scene property != participant response != inferred meaning;
- no diagnostic/personality claim from a raw choice;
- mechanical latency only unless separately validated.

Shared experimental discipline is acceptable. A separate product is justified only if PrioLens has a distinct inferential target that survives evidence.

---

## 2Pair current unit of meaning

Current 2Pair/ConflictLab methodology treats the **pair/manipulation and participant response** as the primary observation unit.

Current constitutional boundary:

```text
SCENE PROPERTY / VISUAL MANIPULATION
        ↓
PARTICIPANT RESPONSE
        ↓
DERIVED SIGNAL
```

Raw A/B choice has no inherent psychological polarity. In current Wave 1, `signal_mapping_status: NONE` remains in force until human evidence supports mapping.

2Pair can remain scientifically coherent even if different pairs represent different local visual mechanisms, because the product/research flow can reflect on the observed choice without requiring all pairs to collapse onto one common latent direction.

---

## PrioLens intended unit of meaning

PrioLens proposes a stronger layer above individual pairs.

Working directions:
- AUT
- CER
- EXP
- MAS
- CON
- INF
- PRO
- OPP

Each direction is intended to recur across multiple different opponents. A later 28-edge session would therefore implicitly treat, for example, `INF vs MAS`, `INF vs CON`, `INF vs AUT`, etc. as different realizations of the **same working direction INF**.

That cross-edge identity is what would justify any direction-level summary such as:

> In this session, Influence took precedence more often across the competing priority situations shown.

Without cross-edge identity evidence, summing seven edge outcomes under one label is not justified.

---

## The collapse risk

Matched-edge improves local experimental control but creates a new architectural risk:

> each edge may become a valid local contrast while the repeated direction changes meaning from opponent to opponent.

Examples already visible in concept work:

### INF
- vs MAS: broad/system effect vs precise local skill;
- vs AUT: shared/broad scope vs self-scoped control;
- vs CON: external/shared consequence vs reciprocal interaction.

These may all plausibly contain some `INF` meaning, but they can also reduce to three unrelated visual mechanisms:
- scale/scope;
- local vs distributed effect;
- unilateral agency vs reciprocity.

### AUT
- vs EXP: known alternatives / self-directed choice;
- vs INF: self-scoped control;
- vs OPP: reconfigurable method/course.

If blind participants do not spontaneously recognize a common self-direction concept across these contexts, `AUT` becomes a researcher grouping rather than an empirically supported repeated direction.

### OPP
Current concepts repeatedly collapse into `ready / useful / resolved`, which is already known to be confounded with completion and desirability.

---

## Product-identity criterion

PrioLens remains methodologically distinct from 2Pair only if at least some direction-level structure generalizes **across different edges and scene mechanisms**.

Therefore the next research question is not merely:

> Can each A/B pair form a clean visual contrast?

It is:

> When the same working direction appears against different opponents, do blind participant reasons preserve a coherent common meaning that is stronger than scenario/mechanism-specific explanations?

---

# Gate D1 · Cross-edge Direction Identity

Before rendering a large library or building a 28-edge product session, test one or two directions across multiple opponents.

## Minimal diagnostic design

Choose a high-risk direction with at least three different opponents and materially different scene mechanisms.

Recommended first target: **INF** because current concept work already contains three distinct opponent contexts:

1. MAS ↔ INF
2. AUT ↔ INF
3. CON ↔ INF

For each edge:
- create one controlled matched pair;
- keep local visual confounds low;
- do not show direction labels;
- collect `Kurį renkiesi?` / `no_clear_choice`;
- lock response;
- collect open reason;
- separately ask what each side seems to prioritize/make possible if needed for semantic validation.

The research target is not whether each edge can be interpreted after reveal. It is whether the **INF side across all three edges** receives semantically coherent open coding.

## Evidence required

Direction identity is supported only if:

1. blind/open responses repeatedly contain the intended common direction meaning across different opponents;
2. that common meaning survives materially different scene mechanisms;
3. nearest-neighbour interpretations do not dominate one or more opponent contexts;
4. a generic visual mechanism (`more things affected`, `bigger scale`, `one person controls`) does not explain the mapping better than the direction definition;
5. held-out scenario replication preserves the same semantic pattern;
6. scenario/edge-specific effects remain visible in analysis rather than being silently averaged away.

No fixed numeric threshold is frozen yet. Human pilot data should determine useful thresholds before product-level inference.

---

## Approach / avoidance framing

The newly proposed two-stage framing experiment is complementary but separate.

- Stage A: `Kurį rinktumeisi?`
- Stage B, using a different realization of the same edge: `Jei vieno iš šių dviejų turėtum atsisakyti, kurio atsisakytum?`

This can test framing robustness/asymmetry.

It must not be used to rescue a direction that lacks cross-edge semantic identity, and approach/avoidance responses must not be automatically combined into one score.

---

# Decision outcomes

## A · Cross-edge identity survives

Then PrioLens has a real methodological distinction from 2Pair:

- 2Pair: local pair observation/reflection can stand on its own;
- PrioLens: local matched edges are repeated manifestations of a higher working priority lens, supported across opponents.

Direction-level descriptive aggregation may then be tested further.

## B · Some directions survive, others do not

Do not force an eight-direction model.

Possible actions:
- tighten/redefine weak directions;
- merge/split/retire directions;
- keep only empirically coherent lenses;
- report some edges only at edge level.

## C · Cross-edge identity fails broadly

Then PrioLens as an eight-direction aggregation model is not justified.

At that point the scientifically cleaner choice is to:
- stop treating 28 edges as seven repeated observations per direction;
- retain useful matched pairs as local reflection experiments;
- conceptually fold the method back toward 2Pair rather than maintain a separate product through labels alone.

---

## Immediate architecture correction

The previous rendered diagnostic plan selected four mostly independent edge tests:
- CER ↔ PRO
- MAS ↔ INF
- AUT ↔ OPP
- CON ↔ INF

That plan is useful for local edge feasibility, but it is insufficient for the newly identified product-identity question.

**New priority:** after the already-created CER↔PRO baseline, do not simply proceed through four unrelated edges.

Instead build a **cross-edge INF identity mini-set**:

1. MAS ↔ INF
2. AUT ↔ INF
3. CON ↔ INF

Each must use a materially different scene mechanism and must avoid using `bigger/more/busier` or `active controller vs passive others` as the only INF cue.

If INF cannot preserve a coherent meaning across these three contexts, pause PrioLens direction aggregation before any 28-edge expansion.

---

## Current conclusion

Matched-edge visual discipline does not by itself make PrioLens redundant with 2Pair.

But **PrioLens is not yet empirically distinct either**.

Its distinctiveness now rests on one falsifiable claim:

> the same working priority direction can retain coherent meaning across multiple different matched-edge conflicts and scene mechanisms.

That claim must be tested before direction-level scoring/summary or large-scale asset generation.