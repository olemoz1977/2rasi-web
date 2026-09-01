# PrioLens working direction definitions v0.1

Status: INTERNAL WORKING CONTRACT / NOT VALIDATED CONSTRUCTS
Date: 2026-08-29

## Purpose

This document freezes the **working semantic boundaries** used to audit and map candidate stimuli for PrioLens v0.1.

It does not claim that the eight directions are validated psychological needs, traits or latent constructs. The participant-facing product promise remains descriptive: repeated pairwise choices may help a person see which direction took priority in this session and with these stimuli.

A stimulus must be judged against the definitions below, not against its legacy filename, old pair label, cue vector or previous prototype assignment.

## General mapping rule

A candidate is a defensible exemplar only when all of the following are true:

1. The intended direction can be described from the visible scene/content without relying on the legacy filename or source pair.
2. The scene has a plausible interpretation that is specific enough to the intended direction to survive comparison with its nearest neighbouring directions.
3. The mapping rationale can be written as one short sentence describing **what takes priority**, not what personality type the viewer supposedly has.
4. The image does not require a social-role stereotype, hidden story or researcher-only explanation to make the mapping work.
5. If two or more directions are equally plausible from the visible content, the candidate is `AMBIGUOUS`, not force-mapped.
6. Two final exemplars for one direction must be conceptually independent scene/content realizations, not two variants of one old A/B manipulation.
7. Semantic fit does not override visual-confound risk. A semantically strong image can still fail the final set.

## Direction definitions

### AUT · Autonomy

**Working priority:** freedom to choose or determine one's own path, method or course of action.

**Positive visual signal:** meaningful self-direction, open choice, ability to proceed without externally imposed routing or control.

**Not sufficient:** empty space, physical openness or novelty by themselves.

**Nearest boundaries:**
- vs OPP: AUT is about **freedom of choice**; OPP is about **potential gain/opening**.
- vs EXP: AUT is about **self-direction**; EXP is about **discovering the unknown**.
- vs INF: AUT is about directing **one's own course**; INF is about shaping a **shared/external outcome**.

### CER · Certainty

**Working priority:** clarity, predictability or knowing what applies, what is present, or what is likely to happen.

**Positive visual signal:** defined information, visible boundaries, known structure, reduced ambiguity or uncertainty.

**Not sufficient:** neatness, safety, enclosure or visual simplicity by themselves.

**Nearest boundaries:**
- vs PRO: CER reduces **uncertainty**; PRO reduces **exposure to harm/loss**.
- vs MAS: CER is about knowing/clarity; MAS is about competence/quality.

### EXP · Exploration

**Working priority:** discovering, investigating or engaging with something not yet known.

**Positive visual signal:** curiosity, investigation, unknown territory/content, an invitation to find out.

**Not sufficient:** freedom, movement or an attractive future option by themselves.

**Nearest boundaries:**
- vs OPP: EXP values **discovery itself**; OPP values a **promising possibility or gain**.
- vs AUT: EXP is about the unknown; AUT is about self-directed choice.
- vs CER: EXP tolerates or approaches uncertainty; CER prioritizes reducing it.

### MAS · Mastery

**Working priority:** developing or applying competence, precision, skill or quality.

**Positive visual signal:** practice, refinement, skilled execution, deliberate improvement, craftsmanship or competence-building.

**Not sufficient:** generic work, laptop use, busyness, achievement symbols or productivity.

**Nearest boundaries:**
- vs INF: MAS is about **being/becoming capable**; INF is about **shaping an external/shared outcome**.
- vs OPP: MAS is about competence/quality; OPP is about an opening or advantageous possibility.

### CON · Connection

**Working priority:** mutual contact, closeness, belonging or maintaining a meaningful relationship with others.

**Positive visual signal:** reciprocal interaction, togetherness, social bond or an evident invitation toward relationship.

**Not sufficient:** merely showing people, a phone/chat interface, social visibility or a crowd.

**Nearest boundaries:**
- vs INF: CON is about **relationship/belonging**; INF is about **impact on direction/outcome**.
- vs PRO: CON is about closeness; PRO is about shielding/preserving from harm or loss.

### INF · Influence

**Working priority:** having meaningful impact on the direction, decision or outcome of a shared/external situation.

**Positive visual signal:** an actor can visibly shape what happens next, affect a collective direction, alter an outcome or make a consequential contribution beyond their own private course.

**Not sufficient:** being watched, being central in a frame, social presence, status symbols, authority clothing, dominance, coercion or generic leadership imagery.

**Nearest boundaries:**
- vs AUT: INF shapes a **shared/external outcome**; AUT protects **one's own choice/course**.
- vs CON: INF is about impact; CON is about relationship/belonging.
- vs MAS: INF is about external effect; MAS is about competence/quality.

**Special v0.1 caution:** Influence must not be inferred from a social scene alone. If the image needs a story such as “this person is leading them” that is not visibly established, reject or mark ambiguous.

### PRO · Protection

**Working priority:** preventing harm/loss, reducing exposure, shielding or preserving something that matters.

**Positive visual signal:** barrier, shelter, safeguarding action, preservation, risk containment or an evident protected object/person/value.

**Not sufficient:** closed space, predictability, hesitation or generic risk aversion.

**Nearest boundaries:**
- vs CER: PRO is about **harm/loss exposure**; CER is about **uncertainty/clarity**.
- vs CON: PRO protects a person/relationship/value; CON seeks closeness itself.

### OPP · Opportunity

**Working priority:** pursuing an opening, possibility or potential gain that could improve the future state.

**Positive visual signal:** accessible opening, promising route/resource, chance to advance, gain access or realize future value.

**Not sufficient:** novelty, movement, open physical space or multiple choices by themselves.

**Nearest boundaries:**
- vs EXP: OPP is about **future value/gain**; EXP is about **discovery/curiosity**.
- vs AUT: OPP is about the value of an opening; AUT is about freedom to choose.
- vs MAS: OPP presents potential; MAS develops/applies competence.

## Required nearest-neighbour challenge

Before a candidate can be marked `SEMANTIC_PASS`, explicitly test at least these contrasts:

- AUT ↔ OPP
- AUT ↔ EXP
- AUT ↔ INF
- CER ↔ PRO
- CER ↔ EXP
- EXP ↔ OPP
- MAS ↔ INF
- CON ↔ INF
- CON ↔ PRO

If the mapping survives only because the reviewer already knows the intended label, it fails.

## Audit statuses

Use these semantic statuses:

- `SEMANTIC_PASS`: visible content supports the intended working direction and nearest-neighbour alternatives are materially weaker.
- `SEMANTIC_AMBIGUOUS`: intended mapping is plausible but one or more neighbouring directions are comparably plausible.
- `SEMANTIC_FAIL`: visible content does not defensibly support the intended mapping.
- `INSUFFICIENT_VISUAL_REVIEW`: semantic judgement cannot be completed without directly inspecting the asset.

Visual-confound status is tracked separately. No asset becomes a final PrioLens stimulus until it passes both semantic and visual review.

## Independence rule

Two exemplars count as independent only if changing the scene/content family would still leave the same working priority legible. Opposite members of one legacy pair may be useful candidates for different directions, but they are not evidence that either new direction is valid and must not be treated as a ready-made construct contrast.
