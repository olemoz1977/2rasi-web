# Leadership SJT — legacy Situational Leadership tool audit

Status: LEGACY ASSET AUDIT / DO NOT MODIFY LIVE TOOL YET
Date: 2026-08-23

## Scope

Source reviewed: `olemoz1977/Situacinio-vadovavimo-testas`, live file `public/index.html`.

Important: the repository also contains a smaller root `index.html` with a different 20+3 structure. This audit uses the public 20-scenario version because that is the live linked tool.

Purpose of this audit is not to validate the current instrument. It is to determine what can be reused in a future **Leadership SJT** inside a broader framework:

`WorkStyle → Leadership SJT → Role Profile`

with PAEI / DISC treated only as later interpretation lenses.

---

## 1. What the current public tool actually measures

The live tool presents 20 managerial situations. Every item has four response options corresponding to:

- Nukreipimo
- Įtikinimo
- Dalyvavimo
- Delegavimo

Each item has one pre-coded `correct` style. The item therefore primarily asks whether the respondent chooses the Situational Leadership style expected by the key.

The 20 keyed correct answers are deliberately balanced: **5 items per style**.

This is useful as a model-application exercise, but it is not yet a general managerial-competence measure.

### Current inference boundary

The present score can support a limited statement such as:

> The respondent's choices are more or less aligned with this implementation of a Situational Leadership response key.

It does **not** by itself support:

> The respondent is / is not a competent manager.

or

> The respondent has high / low leadership potential.

---

## 2. Current scoring logic — methodological issues

### 2.1 One correct style per scenario

The scoring reduces a complex managerial situation to one expected S1–S4-style response.

This hides several potentially distinct competencies inside one answer:

- diagnosis of employee/team capability;
- diagnosis of motivation or confidence;
- task clarity;
- support/listening;
- delegation;
- accountability;
- coaching;
- change management;
- decision making under pressure.

A respondent can choose the keyed style for the wrong reason, or choose a non-keyed style while still demonstrating a defensible managerial judgement.

### 2.2 Style distance is treated as a numerical distance

The current code orders styles as:

`Nukreipimo → Įtikinimo → Dalyvavimo → Delegavimo`

and scores an incorrect response according to the absolute index distance from the keyed style.

Current effectiveness weights:

- exact keyed style: 4 points;
- adjacent style: 3 points;
- two or three positions away: 1 point.

This assumes the four styles form an equally ordered numerical line. That assumption is not demonstrated by the instrument and should not be carried into a selection-oriented SJT without empirical or expert calibration.

### 2.3 Current “flexibility” score does not measure adaptive flexibility

Current formula:

`|V1-5| + |V2-5| + |V3-5| + |V4-5|`

A score of zero is labelled “Tobulas balansas”.

Because the answer key contains exactly five correct scenarios for every style, equal use of all four styles appears visually elegant. But the formula only measures **distribution of selected style frequencies**.

A respondent could choose exactly five responses of each style in the wrong situations and obtain “perfect” flexibility.

Therefore:

> **frequency balance ≠ situational adaptability**.

Future flexibility should be inferred from choosing appropriately different behaviours across systematically varied contexts, not from equal counts.

### 2.4 The output exposes more precision than the evidence supports

The live result converts the effectiveness score into a percentage and displays an `x/80` result.

For a future selection-related tool, this should not be interpreted as a calibrated probability, percentile, competence percentage, or managerial-potential percentage unless supported by validation data.

---

## 3. Strongest asset: the scenario bank

The valuable part of the legacy tool is not the current scoring formula. It is the **20 situation stems**.

They already vary meaningful managerial conditions:

- new vs experienced employee;
- task familiarity vs task novelty;
- high vs low capability;
- high vs low confidence / motivation;
- individual vs team;
- stable work vs organisational change;
- ordinary delivery vs deadline pressure;
- high-performing autonomous teams vs struggling teams;
- new procedures / technology;
- delegation and follow-up intensity.

This is a strong starting asset for an SJT because managerial competence is better tested through decisions in context than through statements such as “I am good at delegating.”

---

## 4. Scenario-by-scenario salvage map

This is an initial content map, not a validated scoring key.

| # | Legacy situation | Primary reusable evidence target |
|---|---|---|
| 1 | New employee, unfamiliar purchasing/research task, workload concern | task diagnosis; direction/support calibration; workload/priorities |
| 2 | New team member, unfamiliar report requirements | onboarding; instruction clarity; appropriate monitoring |
| 3 | Performance decline, disengagement, suspected lack of experience | performance diagnosis; accountability; intervention calibration |
| 4 | Restructured team, lower capability, desire to improve | change leadership; capability building; direction + involvement |
| 5 | Highly experienced employee appears indifferent to a people-motivation assignment | motivation diagnosis; influence; coaching/support |
| 6 | Previously reliable employee now repeatedly late/inaccurate with reports | diagnosis before prescription; feedback; accountability |
| 7 | Experienced performer starts important but unfamiliar project and lacks information | task-specific competence diagnosis; instruction vs autonomy |
| 8 | Highly competent employee doubts meeting a tight deadline | problem solving under pressure; support; preserving autonomy |
| 9 | Competent, collaborative team proposes a plan change | empowerment; delegation; change ownership |
| 10 | Newly led team, poor results, low skills and worsening attitude | performance recovery; capability + commitment diagnosis |
| 11 | Strong performer planning a largely stable next year | delegation; goal setting; autonomy calibration |
| 12 | Historically strong team hit by external changes; morale and results fall | resilience leadership; support; recovery planning |
| 13 | Inexperienced but enthusiastic/confident employee | onboarding; task clarity; monitoring calibration |
| 14 | Experienced employee has relevant experience but low confidence in new assignment | confidence/support; delegation; development |
| 15 | Successful, experienced and willing employee appointed to committee | delegation; empowerment; reporting boundaries |
| 16 | Committee performs well without leader for two meetings | leadership restraint; trust; unnecessary-control avoidance |
| 17 | Highly competent autonomous team sets next-year goals | empowerment; goal ownership; strategic delegation |
| 18 | Team wants new procedures but lacks required skills/knowledge | training; change implementation; involvement calibration |
| 19 | Department has low results, low new-technology capability and low motivation | performance recovery; change leadership; direction/support calibration |
| 20 | Inexperienced employee makes report errors and sees task as wasteful | instruction; accountability; meaning/motivation; follow-up |

### Internal consistency flag

Items 10 and 19 deserve explicit expert review before reuse.

Both describe a group with weak capability and deteriorating motivation/attitude, but the current answer key assigns different correct styles (`Įtikinimo` for #10 and `Nukreipimo` for #19).

There may be a defensible contextual reason, but it is not obvious enough to treat the difference as self-evident. This is exactly the type of pair that should be adjudicated by multiple subject-matter experts rather than silently inherited from the legacy key.

---

## 5. Candidate Leadership SJT competency model

Do not treat this list as final. It is a working architecture to be tested against the scenarios and the target manager role.

### C1. Situation diagnosis

Can the person distinguish:
- lack of skill / knowledge;
- lack of clarity;
- lack of confidence;
- lack of motivation;
- external constraint;
- performance/accountability problem?

This is likely the most important bridge from the legacy Situational Leadership logic into a broader SJT.

### C2. Direction and task clarity

Can the person provide enough structure, standards and expectations without unnecessary micromanagement?

### C3. Support and listening

Can the person notice uncertainty, motivation and emotional context, and respond without replacing task accountability?

### C4. Delegation and autonomy calibration

Can the person give appropriate ownership and avoid both premature delegation and unnecessary control?

### C5. Feedback, coaching and development

Can the person help another person improve rather than only correct the immediate output?

### C6. Accountability and performance management

Can the person confront underperformance, clarify expectations and follow through proportionately?

### C7. Change and uncertainty leadership

Can the person lead when procedures, technology, team composition or external circumstances change?

### C8. Decision / priority judgement

Can the person choose what requires immediate direction, what requires diagnosis, and what can be delegated?

This competency is underrepresented in the current 20-item bank and should receive new scenarios in a selection-oriented version.

### C9. Conflict engagement

The current bank has little direct coverage of real interpersonal conflict, competing interests or disagreement with a peer/senior leader. New scenarios are required.

---

## 6. What should NOT be copied into the future SJT

Do not copy the following mechanically:

1. `correct style` as the only score;
2. equal frequency of four styles as “flexibility”;
3. style-index distance as partial-credit logic;
4. `0–100%` leadership effectiveness presentation;
5. the assumption that all leadership competence can be represented by S1–S4;
6. answer options that differ in several uncontrolled behaviours at once without a defined evidence model.

---

## 7. Proposed future SJT item structure

Each future scenario should have:

### A. Situation stem

Concrete role-relevant context with enough information to make a decision, but without signalling the theory being tested.

### B. 4–5 plausible actions

Avoid one obviously virtuous answer and three caricatures.

Each option should represent a defensible managerial choice or a realistic error.

### C. Multi-competency evidence coding

Instead of:

`option = S3 = correct`

use a vector such as:

`diagnosis +2`
`accountability +1`
`delegation 0`
`support +1`

The exact weights must come from expert judgement and later empirical behaviour, not from intuition alone.

### D. Partial credit based on SME consensus

Use multiple experienced-manager raters.

Possible initial approach:
- ask SMEs to rank response effectiveness;
- capture disagreement;
- retain items only where expert consensus is adequate;
- do not force a single answer when experts consistently see two defensible responses.

### E. Rationale signal

For selected high-value scenarios, consider a second question:

> What was the main reason for your choice?

This can distinguish the same action chosen from different diagnostic reasoning. It should be piloted carefully because it increases test length.

---

## 8. Relationship to WorkStyle

WorkStyle and Leadership SJT should stay psychometrically separate.

### WorkStyle

Measures a person's usual behavioural preference / tendency.

Example:

`Autonomy ↔ Cooperation`

### Leadership SJT

Measures judgement in managerial situations.

Example:

> Does the person appropriately delegate to a capable employee even if their natural WorkStyle is highly autonomous?

### Cross-layer interpretation

Only after both measures are independently usable should we test combinations such as:

`strong autonomy preference + weak delegation judgement → possible leadership risk hypothesis`

or

`strong autonomy preference + strong delegation judgement → preference is not a competence limitation`

Do **not** make these interaction rules hard selection cut-offs before validation.

---

## 9. Relationship to Role Profile

Leadership SJT should be role-contextual, not a universal “manager score”.

Recommended first target:

**front-line / operational manager**

Examples:
- team leader;
- shift supervisor;
- production supervisor;
- operational project lead with direct people responsibility.

This role family fits many existing legacy scenarios and avoids prematurely mixing strategic-executive competencies into the same test.

A later Role Profile can specify:

- must-have competencies;
- development-capable competencies;
- role-level-specific competencies;
- minimum evidence requirements.

Selection output should initially be phrased as evidence and risk, not as a universal `fit %`.

---

## 10. PAEI / DISC boundary

PAEI and DISC should not define SJT scoring.

Possible later use:

- PAEI: managerial interpretation lens;
- DISC: interpersonal interpretation lens;
- WorkStyle: primary preference model;
- Leadership SJT: primary managerial-judgement evidence;
- Role Profile: job requirement layer.

Any mapping must remain secondary until empirically supported.

---

## 11. Immediate next methodological gate

Before writing new scenarios:

1. freeze the current public test as a legacy asset;
2. define the target role family for V1;
3. agree a candidate managerial-competency taxonomy;
4. map all 20 legacy scenarios to those competencies;
5. identify coverage gaps and redundant scenarios;
6. send the taxonomy + map to independent / SME review;
7. only then design the new SJT candidate bank.

## Current recommendation

**SALVAGE THE SCENARIOS, REPLACE THE SCORING MODEL.**

The legacy tool is useful as source material for a Leadership SJT, but it should not be treated as a validated managerial-competence or selection instrument in its current form.
