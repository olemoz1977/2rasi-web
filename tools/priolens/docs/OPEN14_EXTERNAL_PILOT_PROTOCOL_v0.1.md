# PrioLens Open14 external pilot protocol v0.1

Status: READY FOR REVIEW / NOT YET RUNNING
Date: 2026-09-01

## Purpose

Run the first external-human Open14 v0.2 study as a **formative research pilot**, not construct validation.

Primary question:
> Do the visual task, exemplar structure and post-visual sufficiency layer produce interpretable data without turning PrioLens into a questionnaire or a pseudo-psychological test?

Secondary exploratory question:
> Do cross-exemplar repeated visual pulls show any non-trivial relationship with independently reported current perceived sufficiency?

Do not ask yet:
> Does PrioLens identify unmet needs?

## Phase 0 — technical/design smoke

Before external participants:
- complete all runtime asset paths;
- run 1–3 owner/internal sessions only for technical/UX defects;
- verify mobile layout, image loading, no-clear, sufficiency taps and JSON export;
- do not interpret owner choice frequencies as evidence.

## Phase 1 — external formative pilot

### Target

Aim for:
- 24–36 valid external completions;
- 30 is a practical working target.

This is enough to reveal large UX/stimulus failures and gross exemplar asymmetries. It is **not** enough to establish a validated human-needs model.

### Participant requirements

For this first pass:
- ordinary adults;
- no requirement for psychology expertise;
- avoid recruiting only people already deeply familiar with PrioLens development;
- record no sensitive demographic profile unless a specific research question requires it.

Optional minimal context:
- age band, not exact age;
- broad work/non-work context only if later interpretation needs it.

Do not collect identifying information inside the research JSON unless necessary for study operations.

## Participant flow

1. Intro: choose what pulls first; no explanation of families.
2. 14 Open14 triads.
3. `no_clear_choice` remains available every trial.
4. 12 perceived-sufficiency taps across 6 cards.
5. Result screen.
6. Optional short UX debrief after result.

Target total time:
- visual task: roughly 1–2 minutes;
- sufficiency layer: 30–60 seconds;
- total core flow: approximately 2–4 minutes.

## Choice data to retain

Per trial:
- participant/session anonymous ID;
- seed;
- trial ID and design index;
- exact family composition;
- exact exemplar IDs and runtime paths;
- slot positions;
- chosen family/exemplar or `no_clear_choice`;
- RT telemetry;
- pointer type;
- viewport size if available;
- document visibility interruptions if implemented.

RT remains process/UX telemetry only.

## Exemplar balancing

Canonical assigner:
`research/p3_open14_exemplar_assigner_v01.mjs`.

Within each session:
- both exemplars of every family appear;
- one appears twice, one once;
- 7 families repeat A and 7 repeat B;
- total A/B exposure = 21/21;
- each slot gets 7 A and 7 B appearances.

Across participants:
- record which exemplar was repeated per family;
- do not compare raw A/B chosen counts without exposure normalization;
- if recruitment becomes systematic, use paired counterbalancing groups in a later revision rather than trusting random sample balance.

## Primary pilot metrics

### 1. Completion / friction

Track:
- completion rate;
- median core completion time;
- sufficiency incomplete/`Sunku pasakyti` frequency;
- obvious mobile layout failures.

### 2. No-clear behavior

Track:
- overall `no_clear_choice` rate;
- trial-level concentration;
- whether certain exemplars/family combinations are disproportionately present in no-clear trials.

Do not automatically treat no-clear as bad. It is a valid outcome.

### 3. Exemplar behavior

For every exemplar:
- shown count;
- chosen count;
- exposure-normalized choice rate;
- no-clear trial association;
- median RT of trials where it appears, for UX/confusion diagnostics only.

Flag large A/B asymmetries for review.

### 4. Cross-exemplar repetition

For every family:
- `chosen_total` 0..3;
- `chosen_A`;
- `chosen_B`;
- `cross_exemplar_win`;
- `exemplar_concentrated`.

Primary participant-facing family signal requires:
`chosen_A > 0 && chosen_B > 0`.

### 5. Family distribution

Track:
- family exposure-normalized choice rate across participants;
- number of participants with cross-exemplar repetition per family;
- ties / distributed sessions;
- participant-level diversity/entropy descriptively.

A low family selection rate alone is **not** enough to drop a family. It may reflect sample state, opponents or weak exemplars.

### 6. Sufficiency behavior

For all 12 items:
- response distribution;
- `Sunku pasakyti` rate;
- floor/ceiling concentration;
- pairwise coherence inside each two-item broad domain as descriptive evidence only.

Do not report reliability coefficients as if these two-item domains were validated scales.

## Cross-channel analysis

Treat as exploratory.

Primary comparison uses cross-exemplar repeated visual families only.

Possible first-pass summaries:
- visual family chosen count 0..3 vs closest sufficiency domain/item;
- cross-exemplar repetition yes/no vs sufficiency distribution;
- participant-level examples of low sufficiency + repeated pull, high sufficiency + repeated pull, and mismatches.

Do not create one combined score.

Do not dichotomize the full study into `need present / absent`.

For n≈30, prefer descriptive plots/tables and bootstrap uncertainty over significance hunting.

Any inferential choice model belongs to a later, larger sample.

## Separate stimulus-read audit

The choice pilot alone cannot prove what people saw in each picture.

Recommended parallel/next study:
- independent participants or a separate session;
- show single images without family labels;
- ask a brief open question such as `Kas čia vyksta?` / `Ką pirmiausia matai?`;
- code first-read descriptions after collection.

Do not ask this before the main choice task because it would prime later choices.

The stimulus-read audit is especially important for:
- RECOGNITION-B;
- KNOWLEDGE-B boundary probe;
- AUTONOMY-A/B;
- CONNECTION vs BELONGING;
- CONTROL vs SAFETY/ORDER.

## Optional post-result UX debrief

Maximum 3 short questions:
1. `Ar buvo momentų, kai visi trys vaizdai atrodė vienodai neaiškūs?`
2. `Ar pasirinkimai jautėsi labiau kaip greitas žaidimas ar kaip klausimynas?`
3. `Kas rezultate buvo neaišku arba atrodė pritempta?`

Keep this outside the core scored/telemetry flow.

## Exclusions

Exclude from analysis only for clear data-quality reasons:
- incomplete core session;
- technical image-load failure;
- corrupted/missing trial composition;
- duplicate accidental submission if demonstrable.

Do not exclude people merely because:
- RT was slow;
- they used `no_clear_choice` often;
- their pattern was flat;
- their result contradicted theory.

## Pilot stop/go gate

Do not move to a larger study until:
- runtime completion works reliably on mobile;
- no systematic broken-image/layout issue exists;
- accepted missing prototypes pass a pragmatic first-read review;
- obvious exemplar dominance has been reviewed;
- CONNECTION/BELONGING and RECOGNITION boundary problems are at least measurable, even if unresolved;
- data collection is operational and privacy-appropriate.

## Important infrastructure blocker

The current runtime exports JSON locally but no anonymous collection backend has been approved/deployed for external participants.

Do not start a 24–36 person pilot with a manual `download and send me the JSON` workflow unless intentionally accepting that friction for a tiny pre-pilot.

Before external recruitment, choose a minimal data-ingestion method with explicit privacy/retention rules.
