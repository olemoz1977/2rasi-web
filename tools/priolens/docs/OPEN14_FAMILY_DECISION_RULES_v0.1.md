# PrioLens Open14 family decision rules v0.1

Status: ACTIVE FORMATIVE RULESET / NOT VALIDATION THRESHOLDS
Date: 2026-09-01

## Purpose

Define what kind of pilot evidence should trigger:
- KEEP;
- HOLD;
- REASSIGN;
- MERGE;
- SPLIT;
- DROP;

for Open14 families and exemplars.

These are decision rules for iterative research, not psychometric validation cutoffs.

## Unit separation

Never confuse:
1. **exemplar** — one concrete image;
2. **family** — a working impulse hypothesis represented by multiple exemplars;
3. **macro domain** — broad coverage bucket;
4. **participant state/sufficiency** — self-reported current context.

A bad exemplar does not automatically falsify a family.
A weak family in one sample does not automatically falsify the human motive.

## Exemplar-level decisions

### KEEP exemplar

Prefer KEEP when:
- first spontaneous read is close to intended mechanism;
- it remains readable on mobile;
- no unrelated feature obviously dominates;
- it can win sometimes without dominating almost every context;
- it contributes visual diversity relative to its paired exemplar.

### HOLD exemplar

Use HOLD when:
- intended read is plausible but competing read is substantial;
- choice behavior is unusually low/high but semantic cause is unclear;
- first-read audit is mixed;
- more data or a better paired exemplar could resolve it.

### REASSIGN exemplar

Use REASSIGN when:
- participant descriptions repeatedly converge on another existing family;
- its choice behavior aligns more naturally with that other family;
- the new assignment is simpler than inventing a special explanation.

### DROP exemplar

Use DROP when:
- intended mechanism is not the likely first read;
- mobile-size meaning depends on hidden story;
- nuisance salience dominates;
- repeated revisions would make the image increasingly artificial;
- it creates a persistent one-image effect that does not generalize to its paired exemplar.

## Family-level decisions

### KEEP family

Prefer KEEP when several of the following coexist:
- both exemplars survive first-read audit;
- cross-exemplar repetition occurs in real participants;
- A/B behavior is not explained by one extreme exemplar;
- family is distinguishable from nearest neighbors in open-ended stimulus reads;
- relationship to sufficiency/context is interpretable but not necessarily strong;
- the family creates meaningful choice conflict in mixed triads.

No single one of these is required as a universal cutoff.

### HOLD family

Use HOLD when:
- theory coverage is plausible;
- visual mechanism remains uncertain;
- pilot sample is too small or context-specific;
- exemplars disagree but it is unclear whether this is stimulus failure or family breadth.

HOLD is preferable to forcing a premature KEEP/DROP decision.

### MERGE families

Consider MERGE when:
- participants describe two families with the same first-read language;
- their exemplars are repeatedly interchangeable in qualitative coding;
- choice behavior does not show stable separation across contexts;
- sufficiency relationships do not meaningfully distinguish them;
- keeping both would mostly duplicate one pull.

Priority merge watch:
- CONNECTION vs BELONGING;
- RESOURCE vs OPPORTUNITY;
- ORDER vs KNOWLEDGE/clarity boundary;
- AUTONOMY vs CONTROL in some adjustment/control scenes.

Do not merge just because two constructs are theoretically related.

### SPLIT family

Consider SPLIT when:
- A and B exemplars receive consistently different first-read descriptions;
- each exemplar clusters with different neighboring families;
- participant choice patterns treat the two mechanisms differently;
- one broad label hides two operationally distinct pulls.

Priority split watch:
- RECOGNITION-A acknowledgement vs RECOGNITION-B valued judgement;
- KNOWLEDGE explicit learning vs seeing/understanding;
- CARE self-sacrifice vs proactive practical helping if behavior diverges strongly.

A split should create clearer visual hypotheses, not more taxonomy for its own sake.

### DROP family from visual channel

Consider DROP when:
- no convincing exemplar survives after pragmatic attempts;
- intended meaning repeatedly requires explanation/backstory;
- family collapses into neighbors in both first-read and choice behavior;
- it is meaningful conceptually but better suited to reflection/self-report.

DROP from visual channel does **not** mean the human need/value is unreal.

## Red flags, not automatic cutoffs

These should trigger review, not mechanical removal:

### Extreme exemplar asymmetry

After exposure normalization, one exemplar has a choice rate several times higher than its paired exemplar.

Possible causes:
- one better image;
- different mechanism;
- nuisance salience;
- family split;
- sample context.

### Exemplar-concentrated participant pattern

Participant chooses family 2/3 but both wins come from the repeated exemplar.

Interpretation:
- not primary family-level repetition;
- preserve as exemplar-specific evidence.

### High no-clear association

Trials containing an exemplar/family show elevated `no_clear_choice`.

Possible causes:
- weak/unclear image;
- hard triad composition;
- genuine absence of pull.

Review context before acting.

### High RT association

Trials containing an exemplar have longer RT.

Use only as a possible confusion/deliberation signal.
Do not interpret as deeper psychological conflict or importance.

### Low overall family selection

Low selection alone is not a DROP criterion.

Could reflect:
- low current relevance in sample;
- stronger opponents;
- weak exemplars;
- narrow context;
- genuine low salience.

## Evidence priority order

When evidence conflicts, prefer:

1. direct first-read human descriptions;
2. repeated cross-exemplar choice behavior;
3. exemplar-specific telemetry and context;
4. sufficiency/context associations;
5. theory coverage;
6. AI image descriptions.

Theory should not rescue a family that repeatedly fails human first-read evidence.

## Pilot decision table

| Evidence pattern | Default action |
| --- | --- |
| both exemplars readable + cross-exemplar repetition | KEEP / continue |
| one exemplar strong, one weak | replace/HOLD exemplar, not family |
| A/B read as different motives | SPLIT or REASSIGN review |
| two families read the same | MERGE review |
| family meaningful but static imagery repeatedly fails | move to reflection channel |
| one image dominates by salience | replace image before interpreting family |
| low selection but clear semantics | HOLD; do not drop from frequency alone |
| theory says important, humans do not see it | theory loses for visual channel |

## Current family-specific watchlist

### CONNECTION vs BELONGING

Key question:
- direct reciprocity vs being part of/with others.

### CARE

Key question:
- do self-sacrifice and proactive help behave as one broad prosocial care family?

### RECOGNITION

Key question:
- do overt acknowledgement and `my judgement is sought` share a usable esteem/recognition pull, or should B be reassigned/split?

### KNOWLEDGE

Key question:
- is `pamatyti aiškiau / daugiau` genuinely Learning/Understanding or closer to clarity/exploration?

### AUTONOMY vs CONTROL

Key question:
- personal self-setting vs setting what happens in the environment.

### RESOURCE vs OPPORTUNITY

Key question:
- immediate available reward/resource vs possibility to develop/use something.

## Final rule

PrioLens should end with the number of visual families that survive human evidence.

Do not preserve 14 because the planner happens to be elegant.
If later evidence supports 9, 11 or 16 better families, redesign the planner rather than protecting the number.
