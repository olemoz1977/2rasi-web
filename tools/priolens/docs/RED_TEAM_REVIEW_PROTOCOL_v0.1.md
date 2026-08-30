# PrioLens adversarial AI red-team review protocol v0.1

Status: ACTIVE REVIEW PROTOCOL
Date: 2026-08-30

## Purpose

Use independent AI reviewers to try to falsify PrioLens before further product hardening.

The goal is not to obtain suggestions, praise or consensus. The goal is to discover whether the current design can support its intended interpretation at all, and which claims fail under adversarial scrutiny.

## Review package

Each reviewer should receive the same source bundle, without seeing other reviewers' conclusions:

1. `PROJECT_STATE.md`
2. `docs/DIRECTION_DEFINITIONS_v0.1.md`
3. `docs/STIMULUS_LEDGER_v0.1.md`
4. `docs/FULL_SET_AUDIT_v0.1.md`
5. latest working beta HTML
6. contact sheet or the 16 stimulus images
7. at least two exported baseline+calibration session JSON files
8. current protocol config if implementation details are under review

Do not provide the long development history unless the reviewer explicitly needs it. Avoid priming the reviewer with our preferred conclusions.

## Core rule

Every reviewer must answer this question:

> What observation, experiment or dataset would make you conclude that PrioLens does not measure a stable direction-level preference trace and is instead dominated by image preference, semantic leakage, task demand, presentation bias or other confounds?

If a reviewer cannot state falsification criteria, the review is incomplete.

## Independent review lanes

### Lane A — Construct and psychometric red team

Focus:
- whether the eight directions are separable enough for this task;
- whether a forced visual choice can support direction-level interpretation;
- content validity and construct contamination;
- whether 2 exemplars per direction are sufficient even for a pilot;
- what reliability/validity evidence would be required before stronger interpretation;
- whether the current result wording overclaims.

### Lane B — Experimental-design and statistics red team

Focus:
- 28-edge complete tournament design;
- exemplar rotation and calibration logic;
- carryover, memory and demand effects;
- position balancing;
- repeated-session contamination;
- whether raw win counts are meaningful;
- what model or diagnostics are justified;
- sample-size and stopping criteria for pilot decisions.

### Lane C — Multimodal stimulus red team

Focus:
- inspect all 16 images directly;
- nearest-neighbour semantic leakage;
- valence, reward, threat, faces, brightness, complexity, realism and domain effects;
- whether each exemplar actually depicts the intended direction without filename/context;
- within-direction exemplar independence;
- identify which image pairs are unfair comparisons.

The reviewer must evaluate visible content first, before reading our mapping rationale if possible.

### Lane D — UX / cognitive-task red team

Focus:
- whether the instruction induces the intended first-response task;
- whether the user can infer what is being measured;
- fatigue across 28 or 56 choices;
- accidental strategic responding;
- whether the result screen retroactively biases a calibration round;
- mobile viewport and interaction confounds;
- whether the wording changes the psychological task.

### Lane E — Implementation / data-integrity red team

Focus:
- planner correctness;
- reproducibility;
- exemplar and position balancing;
- event timing;
- preload/decode boundaries;
- session JSON integrity;
- whether calibration truly substitutes both exemplars and reverses position;
- any code path that can create biased or invalid observations.

## Output contract for every reviewer

Require exactly these sections:

1. **Verdict**: continue / redesign / stop, with confidence 0–100.
2. **Three strongest reasons the core idea may be wrong.**
3. **Fatal flaws**: issues that invalidate the intended interpretation, not just UX problems.
4. **Fixable flaws**: issues that can be corrected without changing the core construct/task.
5. **Hidden assumptions**: assumptions currently treated as true without evidence.
6. **Falsification tests**: concrete tests and expected outcomes that would reject the design.
7. **Stimulus-specific failures**: exact stimulus IDs/pairs where applicable.
8. **Minimum evidence to proceed**: what must be observed in a pilot before claiming the method is worth continuing.
9. **What not to fix yet**: avoid premature polishing.
10. **One strongest alternative explanation** for any apparent stability in results.

No compliments, product positioning or feature ideas unless directly relevant to validity.

## Blind multimodal test

For stimulus review, use a two-stage process:

### Stage 1 — blind coding

Show each image without direction label or rationale. Ask the model to assign:
- primary meaning in one sentence;
- top 3 candidate psychological/behavioral themes;
- valence (-2 to +2);
- arousal/salience (1–5);
- realism (1–5);
- dominant visual cue;
- ambiguity confidence.

Only after all 16 are coded reveal the intended eight directions.

### Stage 2 — mapping challenge

Ask the reviewer to:
- map each image to at most one intended direction;
- mark `AMBIGUOUS` if two directions are comparably plausible;
- mark `FAIL` if the intended direction is not the strongest visible interpretation;
- test independence of the two exemplars per direction;
- identify cross-direction visual families.

This reduces confirmation bias from our labels.

## Evidence aggregation

Do not average AI opinions.

Classify findings by evidence strength:

- **A — decisive**: reviewer identifies a concrete logical/statistical flaw or reproducible implementation defect.
- **B — convergent**: at least two independent reviewers flag the same issue without seeing each other's output.
- **C — plausible**: one reviewer gives a credible concern that needs an empirical test.
- **D — preference**: style/taste suggestion without validity consequence.

Only A/B findings should automatically change architecture. C findings become pilot hypotheses. D findings are ignored for now.

## Stop / redesign criteria

Pause or redesign the core task if any of these occur:

1. blind reviewers cannot map several exemplars to their intended direction better than neighbouring directions;
2. direction-level results change substantially when both exemplars are substituted;
3. one direction systematically wins/loses across many people because of valence/salience rather than intended semantics;
4. calibration agreement is not meaningfully above what can be explained by stable image preference or task demand;
5. result stability disappears when the second round is truly blind to first-round results;
6. user-level rank/win patterns are dominated by exemplar identity;
7. the eight directions cannot be operationalized visually without systematically different stimulus modalities;
8. another simpler explanation predicts the observed choices as well as or better than the direction model.

## Proceed criteria for an internal pilot

Do not set fixed numerical thresholds before data exists. Pre-register provisional decision rules before examining the next participant batch.

At minimum, require:
- no obvious systematic direction-wide win/loss bias across participants;
- no single exemplar dominating its sibling across most opponents/participants;
- acceptable blind semantic mapping of selected stimuli;
- within-person calibration agreement clearly better than chance/task-noise expectations;
- reproducible planner/data capture;
- evidence that pairwise direction patterns are not reducible to brightness, faces, food/reward, threat or domain affinity.

## Master red-team prompt

You are an adversarial methodological reviewer. Your job is to try to falsify the attached PrioLens design, not to improve or praise it.

PrioLens presents repeated pairs of images. Each image is intended to instantiate one of eight working directions. A participant chooses the image that first attracts them. The current design uses a complete 28-edge tournament across eight directions, with two conceptually independent exemplars per direction. A calibration round can repeat the same direction pairs while substituting both exemplars and reversing position. Results are intended to remain descriptive and non-diagnostic.

Read the attached source files as the current source of truth. Do not assume the intended direction mapping is valid just because the project says it is.

Your task:
1. Identify the strongest ways the core inference can be wrong.
2. Separate fatal flaws from fixable implementation/stimulus flaws.
3. State the hidden assumptions required for a visual choice to be interpreted at direction level.
4. Give concrete falsification experiments. For each, state what result would make you reject the method.
5. Challenge the 8-direction architecture, the 2-exemplar assumption, the 28-pair tournament, the calibration design, the result interpretation and the stimulus set.
6. Where possible, give a simpler alternative explanation for observed choice stability.
7. Do not provide compliments or generic feature suggestions.

Return exactly:
- Verdict: CONTINUE / REDESIGN / STOP, confidence 0–100
- 3 strongest reasons the core idea may be wrong
- Fatal flaws
- Fixable flaws
- Hidden assumptions
- Falsification tests
- Stimulus-specific failures
- Minimum evidence required to proceed
- What not to fix yet
- Strongest alternative explanation

Be willing to conclude that the project should be stopped if the evidence supports that conclusion.
