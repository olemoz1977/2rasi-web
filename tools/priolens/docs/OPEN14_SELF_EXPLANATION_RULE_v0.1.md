# PrioLens Open14 self-explanation rule v0.1

Status: CANONICAL PRE-PILOT PARTICIPANT REFLECTION RULE
Date: 2026-09-02

## Purpose

PrioLens now separates three observations:

- **A — visual pull:** what repeatedly attracted the participant across distinct visual exemplars;
- **B — current self-report:** what the participant says feels less or more sufficient right now;
- **C — self-explanation:** what the participant themselves thinks may explain why the visual theme attracted them.

C does not reveal the true or subconscious cause of A. It is a post-choice self-explanation and must be analysed as such.

## Participant flow

When a repeated visual family is the final focus, ask:

> **Kaip tau atrodo, kodėl būtent šie vaizdai tave traukė?**

EN:

> **Why do you think these particular images pulled you?**

Offer exactly these current options:

1. `WANT_MORE` — Norėčiau daugiau to savo gyvenime / I would like more of this in my life
2. `IMPORTANT_NOW` — Man tai dabar svarbu / This matters to me right now
3. `REMINDS_ME` — Primena žmogų ar situaciją / It reminds me of a person or situation
4. `LIKE_SCENE` — Patinka tai, ką matau / I like what I see
5. `JUST_IMAGE` — Tiesiog patraukė pats vaizdas / The image itself just caught my eye
6. `DONT_KNOW` — Nežinau / I do not know

`DONT_KNOW` is a valid response. PrioLens must not pressure the participant to manufacture an explanation.

## Interpretation boundary

Channel B is not treated as the explanation of Channel A. It only checks one plausible account: whether the mapped area is something the participant currently reports wanting more of.

Examples:

- A repeats and mapped B is low: lack/sufficiency is one plausible participant-level explanation, not a proven cause.
- A repeats and mapped B is high: the simple `I chose it because I lack it` account is not supported by that self-report; C can surface other explanations.
- A and the clearest low B item differ: PrioLens shows the mismatch and asks the participant to explain the visual pull rather than deciding which signal is more true.

Do not claim:
- C is an objective cause;
- A is subconscious truth;
- A reveals an unmet need;
- disagreement between A, B and C means poor self-awareness or deception.

## Storage

C is stored inside the existing Open14 v0.2 JSON payload as optional:

```json
"selfExplanation": {
  "schema": "2rasi.priolens.self-explanation-v0.1",
  "familyId": "RECOGNITION",
  "scenario": "MATCH_LOW | MATCH_HIGH | DIFFERENT | VISUAL_ONLY",
  "reasonCode": "WANT_MORE | IMPORTANT_NOW | REMINDS_ME | LIKE_SCENE | JUST_IMAGE | DONT_KNOW",
  "answeredAt": "ISO-8601"
}
```

No DB-column change and no Open14 session-schema bump are introduced. The existing final endpoint upserts by `sessionUuid`, so the completed session can be updated after C is chosen.

## Research consequence

C is a new formative research variable. For the first pilot, analyse it descriptively and do not treat the reason categories as validated latent constructs.

Potential formative questions include:
- how often repeated visual pulls are explained by `WANT_MORE` versus `IMPORTANT_NOW`;
- whether high-sufficiency visual repetitions are more often explained by association, current importance or image salience;
- how often participants choose `DONT_KNOW`;
- whether self-explanations differ between LT and EN.

Keep language stratified and preserve the frozen CARE boundary.

## Runtime

Runtime commit:
`0a41dd15c5182c45d791343984c9ecbd5f3b3309`

Deployment / live HTTP smoke:
`33636219024` — SUCCESS.

External recruitment remains CLOSED.
