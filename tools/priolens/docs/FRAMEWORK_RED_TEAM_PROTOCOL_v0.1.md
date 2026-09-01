# PrioLens framework-only adversarial review protocol v0.1

Status: ACTIVE FRAMEWORK REVIEW
Date: 2026-08-30

## Purpose

Test whether the PrioLens conceptual and experimental framework is defensible **assuming ideal stimuli could be created**.

This review deliberately separates the framework question from the current 16-image stimulus problem.

The reviewer must not spend the review judging individual images. The central question is:

> If every stimulus were semantically clean, visually balanced and representative of its intended direction, would the PrioLens framework still support a useful and defensible descriptive inference? If not, why not?

## Stage A source bundle — framework only

Give the reviewer only:

1. `PRIOLENS_PRODUCT_ARCHITECTURE_v0.1.md`
2. `tools/priolens/docs/DIRECTION_DEFINITIONS_v0.1.md`
3. `tools/priolens/config/protocol-v0.1.json`

Do not provide current stimulus images, stimulus ledger, full-set audit, prior AI reviews, pilot results or `RED_TEAM_SYNTHESIS_v0.1.md` during Stage A.

This prevents the known stimulus failures from dominating the framework review.

## Required framework questions

The reviewer must independently challenge:

1. **Inference boundary** — What exactly can be inferred from repeated forced choices between semantically valid exemplars? Is `relative priority in this session and with these stimuli` defensible, or does even this wording overreach?
2. **Direction architecture** — Are the eight working directions sufficiently distinct and reasonably complete for the stated product purpose? Which pairs may be structurally non-separable?
3. **Forced-choice task** — Does asking a participant to choose between two valid directions create meaningful trade-off information, or mainly task-specific preference noise?
4. **Complete 28-edge tournament** — What information does observing every direction pair exactly once add? What does it fail to identify?
5. **Non-transitivity** — Can the product remain useful if A>B, B>C, C>A cycles are common? What result representation is justified in that case?
6. **Exemplar generalization** — What design is required to distinguish direction effects from exemplar effects? Is a larger rotating pool sufficient in principle?
7. **Participant stability** — What kind of repeatability would be meaningful without turning PrioLens into a trait test?
8. **Context sensitivity** — If choices vary by mood/context, does that invalidate the product or merely bound the claim to the current session?
9. **Result semantics** — Are raw wins / pairwise trace / tiers defensible, and which representations would create false psychometric precision?
10. **Alternative explanations** — Give simpler models that could explain stable pairwise choices without invoking direction-level priority.
11. **Falsifiability** — State observations that would make the reviewer reject the framework even with ideal stimuli.
12. **Salvage test** — If the present framework fails, identify the smallest conceptual change that would make a viable product possible.

## Do not assume

- that the eight directions are latent traits;
- that preferences must be transitive;
- that raw wins form a cardinal scale;
- that response latency carries psychological strength;
- that the current two-exemplar implementation is fixed;
- that the current images are valid;
- that the goal is diagnosis or prediction.

## Required output

Return exactly these sections:

1. **Framework verdict**: KEEP / REVISE / REFRAME / STOP, confidence 0–100.
2. **Strongest version of the PrioLens claim that is defensible.**
3. **Strongest reason the core framework could still be invalid even with perfect stimuli.**
4. **Fatal framework flaws.**
5. **Fixable framework flaws.**
6. **Eight-direction architecture audit.**
7. **28-edge tournament audit.**
8. **Result/inference audit.**
9. **Alternative explanations.**
10. **Decisive falsification tests**, each with explicit rejection criterion.
11. **Minimum evidence required before an external pilot.**
12. **Smallest viable redesign if the current framework fails.**
13. **What should not be changed yet.**

No compliments, branding advice, UI polish or stimulus-specific critique.

## Master prompt

You are an adversarial methodology reviewer. Review the attached PrioLens framework as if all individual stimulus images could eventually be made semantically clean, visually balanced and representative of their intended direction.

Your job is not to improve or praise the project. Your job is to determine whether the **framework itself** can support its intended descriptive inference.

PrioLens uses eight working directions and repeated forced choices between direction exemplars. The intended output is not a personality trait, diagnosis or cardinal psychological scale. The narrow intended inference is that the observed pairwise choices may describe which competing directions took priority in this session and with these stimuli.

Do not assume transitivity. Do not assume a strict 1–8 ranking. Do not assume latency has psychological meaning. Do not judge the current 16 images; they are deliberately excluded from this stage.

Try to falsify the framework first. Then identify what, if anything, survives.

For every major criticism, distinguish:
- a logical flaw that follows from the design itself;
- an empirical uncertainty that could be tested;
- a claim that would become valid only after evidence;
- a criticism that does not apply to the stated protocol.

Return exactly the 13 required sections from `FRAMEWORK_RED_TEAM_PROTOCOL_v0.1.md`.
