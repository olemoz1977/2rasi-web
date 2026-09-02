# PrioLens Open14 result link matrix v0.1

Status: CANONICAL PRE-PILOT PARTICIPANT RESULT RULE
Date: 2026-09-02

## Purpose

The participant result must compare the two PrioLens perspectives without pretending that every visual family is equivalent to one of the six broader Channel B domains.

This checkpoint therefore uses the **12 individual Channel B items** for participant-facing result comparison while leaving the stored research payload, six-domain aggregation and pilot-analysis model unchanged.

This is a participant presentation rule, not a validated psychological mapping.

## Participant hierarchy

1. **Tavo pasirinkimai / Your choices**
   - heading: `Kas tave traukė? / What pulled you?`
   - show cross-exemplar repeated visual families only (`chosen_A > 0 && chosen_B > 0`, at least 2/3 total choices);
   - show the actual chosen images and `2/3` or `3/3` count;
   - show one short, non-diagnostic family description;
   - explicitly state that repetition does not mean the participant lacks that thing.

2. **Tavo atsakymai / Your answers**
   - heading: `Ko dabar norėtųsi daugiau? / What would you like more of right now?`
   - evaluate the 12 individual Channel B item responses independently for display;
   - show numeric item responses `<= 3` only;
   - omit numeric item responses `4–5` from the main result;
   - omit `null / Hard to say` items rather than guessing;
   - this `<=3` rule is a participant-display filter only and is not a pilot-analysis cutoff.

3. **Svarbiausia / Most important**
   - heading: `Ką matai, kai palygini abu? / What do you notice when you compare the two?`
   - show one dominant reflection scenario, not a list of technical comparisons.

## Family -> Channel B item matrix

| Visual family | Channel B item | Link | Participant use |
| --- | --- | --- | --- |
| REST | RESTORATION_ENERGY | DIRECT | direct comparison allowed |
| RESOURCE | MATERIAL_RESOURCES | DIRECT | direct comparison allowed |
| SAFETY | SAFETY_STABILITY | DIRECT | direct comparison allowed |
| ORDER | CLARITY_PREDICTABILITY | DIRECT | direct comparison allowed |
| CONNECTION | CONNECTION_BELONGING | RELATED | comparison allowed with explicit softer wording |
| BELONGING | CONNECTION_BELONGING | DIRECT | direct comparison allowed |
| CARE | none | NONE | no direct Channel B comparison |
| AUTONOMY | AUTONOMY_AGENCY | DIRECT | direct comparison allowed |
| CONTROL | AUTONOMY_AGENCY | RELATED | comparison allowed with explicit softer wording |
| RECOGNITION | RECOGNITION_ESTEEM | DIRECT | direct comparison allowed |
| MASTERY | CAPABILITY_MASTERY | DIRECT | direct comparison allowed |
| EXPLORATION | LEARNING_GROWTH | RELATED | comparison allowed with explicit softer wording |
| KNOWLEDGE | LEARNING_GROWTH | DIRECT | direct comparison allowed |
| OPPORTUNITY | LEARNING_GROWTH | RELATED | comparison allowed with explicit softer wording |

Channel B items with no active visual counterpart:
- `MEANING_PURPOSE`
- `CONTRIBUTION`

CARE remains intentionally unmatched according to `OPEN14_CARE_ANALYSIS_RULE_v0.1.md`: visual CARE is proactive care-giving; `CARE_SUPPORT_PRESENT` is mainly received / available care and support.

## Final reflection scenarios

### A. Same area also feels insufficient

When a repeated visual family has a DIRECT or RELATED mapped Channel B item with numeric response `<=3`:
- show the repeated visual theme and its count;
- state that the participant also marked the mapped item as something they would like more of;
- for RELATED links, explicitly state that the two are not identical but may be related;
- ask a simple question such as:
  - LT: `Ar tau šie du dalykai atrodo susiję?`
  - EN: `Do these two things feel connected to you?`

Do not claim that the visual choice revealed an unmet need.

### B. Same area feels sufficient

When a repeated visual family has a DIRECT or RELATED mapped item with numeric response `4–5` and no stronger scenario A exists:
- preserve the contrast;
- ask what still attracted attention to those images;
- do not explain the reason for the participant.

### C. Different things stand out

When there is at least one repeated visual family and at least one item `<=3`, but there is no valid mapped low pair:
- show the strongest self-reported lower-sufficiency item;
- show the strongest repeated visual family;
- state simply that they did not point to the same place;
- ask which of the two feels more important to the participant right now.

Do not use CARE vs `CARE_SUPPORT_PRESENT` as this contrast pair because that would recreate the forbidden giving-vs-received comparison.

### D. Visual-only

If a repeated visual family has no valid comparable Channel B item and no useful scenario C is available:
- reflect only on the repeated visual choice;
- ask what about those images attracted attention.

### E. Self-report-only

If no visual family reaches the cross-exemplar repetition rule but at least one Channel B item is `<=3`:
- show the strongest lower-sufficiency item;
- ask what about that area matters most right now.

### F. Quiet result

If neither perspective gives a clear participant-facing focal point:
- do not manufacture one;
- ask whether anything still stayed with the participant.

## Priority rule

When multiple valid mapped pairs exist:
1. prefer a mapped item `<=3` over a mapped item `4–5`;
2. prefer `DIRECT` over `RELATED`;
3. prefer `3/3` visual repetition over `2/3`;
4. for lower-sufficiency items, lower numeric response has priority;
5. ties may follow stable questionnaire order.

## Guardrails

Do not claim:
- visual pull = unmet need;
- visual pull = true priority;
- disagreement = deception or lack of self-awareness;
- agreement = validation of a psychological construct;
- CARE giving = received support;
- Meaning / Contribution has a visual equivalent in v0.2.

The final participant question is the product payoff. PrioLens shows two observations and asks the participant what, if anything, the relationship means to them.

## Runtime implementation

Runtime repository:
`olemoz1977/omesg360`

Runtime file:
`priolens/open14-v02/index.html`

Item-level matrix runtime commit:
`dd987aef62ea75d8d7a91b83318ed908f3fc54a3`

Deployment / live HTTP smoke:
`33632458582` — SUCCESS.

External recruitment remains CLOSED. This result rule is pre-pilot product hardening, not pilot evidence.
