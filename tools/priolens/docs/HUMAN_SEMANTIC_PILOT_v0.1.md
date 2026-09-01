# PrioLens human semantic pilot v0.1

Status: READY FOR FIRST RENDERED PILOT / X12 RETIRED FOR PHYSICAL-PLAUSIBILITY FAILURE
Date: 2026-08-31

## Purpose

Move from AI text review to actual participant evidence.

The pilot does **not** test personality, motivation, a stable trait or a final scoring model.

Primary question:

> Do real participants perceive the intended observable A/B relation consistently across rendered scenes?

Secondary question:

> Can rapid A/B choices later be summarized as a repeated session pattern without requiring psychological labels?

## Participants

Target first pass: 10–15 adults.

This is a semantic-screen / feasibility sample, not construct validation.

## Stimulus set

Use 6 pairs only.

### Family OT-03 · Preserve ↔ Refine

Use:
- X01 · wax panel
- X06 · clay vessel
- X13 · neutral flexible-cord coil

X12 wooden frame is retired from the rendered pilot.

Why X12 was retired:
- Refine could be rendered plausibly as geometry correction with a simple try square;
- Preserve repeatedly required an implausible woodworking action or a materially more complex clamping system;
- a try square is used to check/align geometry, not to stabilize a glued wooden corner;
- therefore a matched Preserve image would either be physically false or introduce a tool/process complexity confound.

The accepted X12 Refine image may remain as historical render evidence, but X12 must not be used as an OT-03 matched pair.

### X13 replacement concept · flexible cord coil

Shared scene:
- one plain neutral flexible cord/rope arranged as a medium circular coil on a neutral bench;
- same hands, camera, lighting, coil size, material and visual density;
- one plain reusable fabric retaining strap is present in both variants;
- no branding, electrical device, valuable equipment, damage or safety context.

Refine:
- strap remains loose beside the coil;
- the hand adjusts one or two loops so the coil becomes more even, concentric and controlled in shape;
- no dramatic before/after and no perfect finished result.

Preserve:
- coil is already acceptably even;
- the hand fastens the same plain fabric strap around the existing coil so the loops remain in their current arrangement during ordinary handling;
- no reshaping, tightening for compression, repair or safety cue.

Reason for inclusion:
- both actions are physically natural;
- same object and scene can support both poles;
- Preserve is active but does not require specialist hardware;
- Refine changes the form while Preserve holds the existing form;
- scene is structurally different from wax-panel and clay-vessel craft mechanisms.

Known X13 risks:
- Refine can read as tidying/neatness;
- Preserve can read as bundling/packing;
- strap fastening may look more final/complete than loop adjustment.

These risks must be tested with humans rather than hidden by prompt wording.

### Family OT-01 · Observe ↔ Change

Use:
- X02 · lamp joint
- X05 · disc panel
- X09 · block tray

Reason for inclusion:
- blind grouping and polarity recovered exactly;
- locally clear relation.

Known risks:
- all three currently reuse a reveal-device convention;
- X02 Change side has greater motion salience.

This family is included deliberately as a test of whether semantic recovery survives rendering despite template similarity.

## Public-like choice phase

For each pair:
- show only two images;
- neutral prompt: `Kurį renkiesi?` / `Which do you choose?`;
- choices: A / B / `Nė vienas aiškiai`;
- no explanation before or during choice;
- record presentation order, side assignment and mechanical response time;
- response time remains descriptive/mechanical only, not psychological evidence.

Randomize:
- pair order;
- left/right position independently from semantic pole.

## Research-only semantic phase

After all six rapid choices, show the same six pairs again one at a time.

Ask one short open question:

> `Kuo šie du vaizdai tau labiausiai skiriasi?`

No construct labels, no examples, no multiple-choice semantic options.

Optional second question only if first answer is unclear:

> `Ką viename variante žmogus daro kitaip negu kitame?`

Do not ask why the participant chose A/B until after the semantic difference is captured. Choice justification can contaminate semantic description.

## Coding

Code semantic descriptions blind to participant choice.

For OT-03 count a semantic hit when the response distinguishes approximately:
- holding/stabilizing/preserving current form/state
versus
- changing/refining/correcting form/fit/quality.

For OT-01 count a semantic hit when the response distinguishes approximately:
- revealing/checking/seeing current state without changing it
versus
- physically changing orientation/arrangement/state.

Do not require exact project terminology.

Also code common alternative explanations, especially:
- active vs passive;
- skilled vs simple;
- useful vs less useful;
- fixing a problem vs merely holding/checking;
- opening/cover manipulation;
- craft/manual work;
- tidying/packing;
- motion magnitude.

## First-pass decision rules

These are feasibility gates, not psychometric thresholds.

Family can proceed when:
- at least ~70% of semantic descriptions across participants and exemplars express the intended local distinction or a close equivalent;
- no single nuisance explanation dominates the family across exemplars;
- all three exemplars contribute rather than one pair carrying nearly all recognition.

Family should be redesigned/held when:
- semantic recovery is mostly scene-specific;
- participants repeatedly describe the same nuisance cue instead of the intended relation;
- one exemplar produces materially different meanings;
- left/right or attractiveness dominates choice.

Do not compute or publish a psychological score from this pilot.

## Choice-pattern analysis

Only after semantic coding passes:
- inspect whether individual participants repeatedly choose one pole across the three exemplars;
- report counts such as 3/3, 2/3, 1/3, 0/3;
- retain `no_clear_choice` rather than forcing it into a pole;
- do not convert 2/3 into a percentage-like trait score.

A safe prototype mirror could say:

> `Kai rinkaisi tarp išsaugoti esamą būseną ir ją tikslinti, šioje sesijoje dažniau rinkaisi ...`

or

> `Šiose trijose porose tavo pasirinkimai keitėsi pagal situaciją.`

Only use such wording if the family itself passes semantic screening.

## Pilot success criterion

The pilot succeeds if at least one observable family:
1. remains semantically recognizable across all three rendered scenes;
2. is not dominated by one nuisance cue;
3. produces enough within-person variation/repetition to make a short session mirror meaningful.

One surviving family is enough to justify the next iteration. There is no requirement that both survive.

## Execution order

Render one pair at a time.

Current order:
1. X13 flexible-cord coil replacement;
2. X01 wax panel;
3. X06 clay vessel;
4. OT-01 pairs.

For X13:
1. generate Refine standalone first;
2. accept/reject visually and physically;
3. only then create Preserve as a matched variant;
4. use English prompts for technical/spatial constraints;
5. do not create a collage or both states in one image.
