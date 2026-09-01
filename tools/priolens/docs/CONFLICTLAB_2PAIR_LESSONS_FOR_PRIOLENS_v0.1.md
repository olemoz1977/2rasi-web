# ConflictLab / 2Pair lessons for PrioLens v0.1

Status: TRANSFER REVIEW / NOT A METHODOLOGY IMPORT
Date: 2026-08-30

## Purpose

Use ConflictLab v0.8 and its historical Pair P0 / 2Pair line only as prior methodological evidence. Do not revive their constructs, scoring, cue-to-vector mapping, or frozen product architecture inside PrioLens.

## Transferable lessons

### 1. Keep scene property, participant response, and derived interpretation separate

ConflictLab ADR-011 formalized:

`SCENE PROPERTY / VISUAL MANIPULATION -> PARTICIPANT RESPONSE -> DERIVED SIGNAL`

A designer may define a target hypothesis, but a raw image choice has no inherent psychological polarity. This boundary should be preserved in PrioLens.

PrioLens implication:
- an image is a candidate operationalization of a direction, not evidence that the direction was selected;
- `selected stimulus` and `direction-level interpretation` must remain separate in data and analysis;
- direction-level claims require human evidence that survives exemplar substitution.

### 2. Validate stimulus families before expanding the library

ConflictLab Wave 1 explicitly tested manipulation families before building a full library. Human evidence determined KEEP / REVISE / REJECT; second exemplars were to be created only for surviving families.

PrioLens implication:
- do not generate 32+ polished assets first;
- first test whether each direction can be instantiated by multiple semantically independent visual families;
- stop early on directions that repeatedly require post-hoc story or cross-load to neighbours.

### 3. Blind human reasons are more informative than designer intent

ConflictLab Wave 1 used neutral `Kurį renkiesi?`, optional free-text reason, `no_clear_choice`, and `hard_to_identify`, while hiding axis/family labels and hypotheses.

PrioLens implication:
- human semantic validation should begin blind;
- capture open-ended meaning/reason before revealing direction labels;
- preserve `no clear mapping` / `hard to identify` as real outcomes rather than forcing assignment.

### 4. Treat AI as curation support, not validation evidence

ConflictLab used AI multimodal review for CONTROL / EXPERIENCE / INTERPRETABILITY, but explicitly stated that AI recommendation did not validate the signal or replace human-response evidence.

PrioLens implication:
- Kimi/Gemini/Claude/Grok findings are useful red-team evidence and candidate filters;
- they cannot establish construct validity or direction mapping.

### 5. Freeze protocol versions once human collection starts

ConflictLab Wave 1 required a new protocol version for participant-facing wording, presentation, capture semantics, or stimulus changes after real collection started.

PrioLens implication:
- semantic-validation protocol and later preference protocol must be separate frozen versions;
- edited assets receive new immutable IDs/hashes or new stimulus-set version;
- do not pool data across changed protocols silently.

### 6. Preserve raw distinctions instead of compressing them into one score

ConflictLab preserved `no_clear_choice != hard_to_identify != empty free text`, and kept reaction intensity separate from latency/confidence/signal magnitude.

PrioLens implication:
- retain raw pair choice, exemplar IDs, position, optional reason, ambiguity/hard-to-map status, and presentation diagnostics;
- do not convert latency, ambiguity, or self-report intensity into direction strength without a separate validated model.

### 7. Neutral wording matters, but neutral wording alone does not solve construct validity

Earlier ConflictLab cue work correctly identified risks from emotional, interpretive, leading, or theory-derived wording and moved toward visible-content language. However, its historical choice->cue->vector logic was later explicitly demoted to prototype logic by ADR-011.

PrioLens implication:
- reuse the discipline of visual fidelity and non-leading wording;
- do not reuse cue weights or assume a visible cue maps directly to a psychological direction.

### 8. The most important historical warning: a static visual axis can fail

ConflictLab v0.8 suspended AW as a peer static-stimulus axis and stopped generating AW-specific static images. Historical Pair P0 assumptions such as AW/CS/CR equivalence, 3+3+3 balance, predefined choice-to-vector mapping, and 18 unique pairs were explicitly marked historical rather than current scientific truth.

PrioLens implication:
- accept the possibility that one or more of AUT / INF / OPP / CER / EXP / PRO may not be cleanly operationalizable as static-image directions;
- if human semantic screening repeatedly fails a direction across independent visual families, redesign or remove the direction rather than endlessly improving artwork.

## What NOT to import

- AW / CS / CR as PrioLens constructs.
- Historical choice -> cue -> predefined vector mapping.
- Latency as psychological strength.
- AHA/fallback thresholds as PrioLens validity criteria.
- The 3-session x 3-pair or 18-pair historical architecture.
- Existing ConflictLab stimulus assets as evidence for PrioLens direction validity.
- The assumption that successful UX/reflection proves stimulus-to-direction mapping.

## Recommended PrioLens sequence after this review

1. Keep the eight PrioLens directions as hypotheses for now.
2. Define 3-5 materially different visual families per direction before asset polishing.
3. Internally red-team those families for nearest-neighbour leakage and systematic modality confounds.
4. Run blind human semantic screening on candidate exemplars before any preference tournament.
5. Only directions/families that survive semantic screening enter the pairwise preference experiment.
6. In the preference experiment, retain direction, exemplar, family, opponent, position, sequence and participant IDs so direction-level effects can be separated from exemplar/family effects.
7. If a direction does not generalize across exemplars/families, stop or reframe that direction before product development.

## Bottom line

ConflictLab should not be treated as a predecessor whose model PrioLens inherits. It should be treated as a repository of methodological failures and controls that PrioLens should not rediscover by repeating them.
