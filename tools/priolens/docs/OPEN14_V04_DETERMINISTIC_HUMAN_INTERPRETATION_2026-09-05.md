# PrioLens v0.4 — deterministic human interpretation composer

Status: IMPLEMENTED / LOCAL TECHNICAL PASS / OWNER PREVIEW DEPLOYMENT IN PROGRESS
Date: 2026-09-05

## Product decision

The 12×12 matrix remains the primary result.

A new text layer is added below the matrix and before the detail buttons:

**Viena galima interpretacija**

Boundary:
**Tai bendrinė refleksija pagal šios sesijos pasirinkimus. Ne diagnozė ir ne išvada apie tavo asmenybę.**

The purpose is not to restate statistics. It is to translate the participant's combined result into a human-readable hypothesis that can be recognized, rejected or questioned.

## Interpretation inputs

The composer may use only already-derived session observations:

1. all raw Channel-A MOST repetitions at 3/3;
2. all raw Channel-A MOST repetitions at 2/3;
3. the final Channel-B/B+ insufficiency route endpoint(s);
4. exact 3/3 LEAST/background directions, only as a weak contrast statement;
5. the frozen formative A↔B construct map as a relationship constraint.

A+ remains a detail/focus clarifier.
It does not erase the other raw 3/3 or 2/3 MOST repetitions from the general interpretation.

## Interpretation grammar

The composer is deterministic, not LLM-generated.

Typical structure:
1. human-language Channel-B anchor;
2. first-glance themes, without presenting them as needs;
3. one possible semantic bridge when a defensible bridge rule exists;
4. exact-3/3 LEAST/background only as a weak contrast;
5. one reflection question.

Example pattern:

B:
- CONTRIBUTION insufficient.

A:
- RECOGNITION 3/3;
- BELONGING 3/3;
- KNOWLEDGE 2/3.

Possible interpretation:
> Tau gali būti svarbus ne pats pripažinimas ar priklausymas atskirai, o situacija, kurioje gali prasmingai prisidėti ir kartu jausti, kad tavo indėlis matomas bei turi vietą tarp kitų.

Secondary A:
> Mokymasis ir supratimas tada gali būti ne atskiras tikslas, o būdas daugiau suprasti, daugiau gebėti ir turėti daugiau galimybių prisidėti.

This is explicitly a hypothesis, not a causal or diagnostic conclusion.

## No-story rule

The engine must be able to refuse to manufacture an “aha”.

If:
- there is no B insufficiency route;
- no A direction repeats 2/3 or 3/3;
- or no defensible semantic bridge exists;

the result uses a bounded fallback:
- do not invent a deficit;
- do not force A and B into one explanation;
- state that the two perspectives may refer to different things.

This is a core quality rule.

## LEAST boundary

LEAST must never be interpreted as:
- dislike;
- unimportance;
- absence of need.

If exact 3/3 LEAST/background exists, the composer may only say that the theme competed less for spontaneous attention in this image set.

LEAST remains omitted from the primary matrix signal grammar.

## Implementation

Implementation repo:
`olemoz1977/omesg360`

Branch:
`feature/priolens-open14-v04`

Module:
`priolens/open14-v04/result_interpretation_v04.mjs`

Schema:
`2rasi.priolens.open14.result-interpretation-v0.1`

The matrix imports the composer lazily through the already-lazy result module path.

No external AI/LLM call is used.
No network call is required for interpretation generation.

## Validation

Unit test includes the owner-observed combination:
- B CONTRIBUTION;
- A RECOGNITION 3/3;
- A BELONGING 3/3;
- A KNOWLEDGE 2/3;
- LEAST ORDER + REST.

Required semantic output:
- contribution as the current anchor;
- visible/accepted contribution as one possible bridge;
- learning as a possible way to increase capacity to contribute;
- ORDER/REST only as weak background contrast;
- explicit non-diagnostic boundary.

Local 390×844 full-flow smoke also checks:
- interpretation block exists;
- “Ne diagnozė” is visible;
- forbidden certainty such as “tikrasis poreikis” / subconscious claims is absent;
- the existing one-page PDF print smoke still runs with the interpretation block.
