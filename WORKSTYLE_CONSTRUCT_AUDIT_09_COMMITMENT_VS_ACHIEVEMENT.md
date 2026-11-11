# WorkStyle construct audit 09 — Commitment Stability vs Achievement Drive

Status: CONSTRUCT REDUNDANCY AUDIT / PRE-ITEM-WRITING
Date: 2026-08-23
Branch: hero-webgl

## Purpose

Resolve whether two remaining candidates are sufficiently distinct:

1. `Commitment Stability ↔ Goal Reallocation` (redesigned Goal Persistence)
2. `Achievement Drive` (provisional unipolar)

---

## 1. Conceptual distinction

### Commitment Stability ↔ Goal Reallocation

Question:
> Once a goal or priority is chosen, how high is my threshold for continuing versus reallocating effort when progress is difficult or new competing information appears?

Core referent:
**stability of commitment after choice.**

### Achievement Drive

Question:
> How strongly do I tend to seek challenge, improvement and demanding standards?

Core referent:
**aspiration / intensity of striving.**

A person can coherently be:
- high achievement + low commitment stability: seeks ambitious goals but reallocates quickly when expected value changes;
- high achievement + high commitment stability: pursues demanding goals persistently;
- lower achievement + high commitment stability: prefers moderate goals but follows through strongly;
- lower achievement + lower commitment stability.

Therefore the constructs are not logically redundant.

---

## 2. Measurement asymmetry

The two constructs have different methodological status.

### Commitment Stability

Potentially bipolar and non-evaluative if written carefully.

Both poles can be legitimate:
- protecting a chosen direction;
- reallocating effort when circumstances change.

Main risk:
responses may become almost entirely context-dependent, making the construct more judgement-like than trait-like.

### Achievement Drive

Unipolar and socially desirable.

There is no clean legitimate opposite to high aspiration. `Sufficiency` is not a true opposite because efficient people can deliberately stop optimising low-value tasks while remaining highly achievement-oriented.

Main risk:
a self-report result may mostly reward saying `I like challenge and improvement`.

---

## 3. Product-value comparison

For a non-evaluative WorkStyle product, Commitment Stability fits the core philosophy better than Achievement Drive because it describes a trade-off rather than a virtue gradient.

Achievement Drive can still be useful, but it changes the feel of the instrument:
- bipolar axes ask `which mode do you tend toward?`;
- Achievement Drive asks `how much of a valued tendency do you have?`.

This creates a mixed measurement family and a stronger temptation to interpret the result as good/bad.

---

## 4. Decision

**KEEP Commitment Stability ↔ Goal Reallocation as a conditional bipolar candidate.**

It must pass cognitive testing for trait-like stability. If most respondents answer `depends entirely on the goal`, drop it.

**Move Achievement Drive out of the primary core into an OPTIONAL UNIPOLAR layer for the next architecture draft.**

This is not a permanent deletion.

Reason:
- it is conceptually distinct;
- but it is methodologically less aligned with the non-evaluative bipolar core;
- it has stronger social-desirability risk;
- the next architecture should first test whether the compact directional core is useful without mixing scoring families.

If later user/product strategy explicitly values a broader hybrid profile, Achievement Drive can be reintroduced as a clearly labelled unipolar scale.

---

## 5. Architecture effect

Primary directional core candidate count becomes cleaner.

`Achievement Drive` no longer determines whether the entire public instrument must support two scoring grammars in V1.

This preserves the option of a largely uniform bipolar experience while keeping hybrid methodology available if later evidence or product goals justify it.

---

## Current decision

`Commitment Stability ↔ Goal Reallocation`: **KEEP / CONDITIONAL BIPOLAR**.

`Achievement Drive`: **PARK / OPTIONAL UNIPOLAR**, not primary core for the next architecture draft.
