# PrioLens Open14 missing scene mechanisms v0.2

Status: HUMAN REVIEW COMPLETE / 4 OF 4 TEXT MECHANISMS ACCEPTED
Date: 2026-09-01

## Human decision checkpoint

Accepted for prototyping:
- CARE-A;
- CARE-B;
- RECOGNITION-A;
- RECOGNITION-B.

No image generation is authorized by this document. Acceptance means only that the text-level mechanism is worth prototyping when image creation is explicitly requested.

## CARE working pull

> **Act for another person's welfare, including with a small personal cost or before being asked.**

CARE must not collapse into:
- CONNECTION — direct contact / reciprocity;
- BELONGING — being together / part of a group;
- SAFETY — protecting oneself or an object;
- bravery / emergency response;
- generic warmth.

### CARE-A — ACCEPTED

**Mechanism**

Two ordinary adults are caught in mild rain. One person deliberately shifts the only umbrella far enough over the other person that their own shoulder / side is visibly left in the rain.

**First-read target**
> `pasirūpinti kitu savo komforto sąskaita`

**Guardrails**
- ordinary, not heroic;
- neutral relationship cues, not romantic staging;
- modest visible self-cost;
- weather must not dominate the scene.

### CARE-B — ACCEPTED

**Mechanism**

One ordinary adult has dropped several neutral everyday items while already carrying something. A nearby person is visibly kneeling / reaching to gather the scattered items while the first person is still occupied. No begging, pointing or request gesture.

**First-read target**
> `pastebėti ir padėti neprašytam`

**Guardrails**
- roles remain asymmetric;
- helper initiates action before a visible request;
- avoid a symmetric teamwork reading;
- keep dropped items visually simple.

## RECOGNITION working pull

> **Have my contribution, judgement or standing seen and acknowledged by others.**

Recognition must not collapse into:
- BELONGING — simply being included;
- CONNECTION — interpersonal contact;
- RESOURCE — receiving a gift/reward;
- MASTERY — merely displaying skill;
- SUCCESS — reaching an endpoint;
- prestige symbolism with no visible acknowledgement event.

AgileBrain remains only a coverage reference here; PrioLens does not inherit its scoring or unmet-need claims.

### RECOGNITION-A — ACCEPTED

**Mechanism**

A small neutral peer group directs restrained positive acknowledgement toward one ordinary person. Several people clap modestly, smile naturally and one or more peers show a clear thumbs-up gesture toward the acknowledged person.

No stage, medal, trophy, luxury setting or winner symbolism.

**First-read target**
> `būti pastebėtam ir įvertintam kitų`

**Why this version is accepted**
- acknowledgement is explicit in one still frame;
- applause plus restrained smiles plus thumbs-up makes appreciation clearer than applause alone;
- the focal person receives attention without requiring a prize or formal hierarchy.

**Guardrails**
- keep the mood warm but restrained, not a celebration party;
- focal person must not be visually elevated as a leader/winner;
- several approval cues may be present, but avoid exaggerated cheering;
- no text, certificates or awards.

### RECOGNITION-B — ACCEPTED AS A BOUNDARY PROBE

**Mechanism**

A small group of visually equal peers is discussing a neutral plan, object or situation. Several people clearly turn toward one person for their view; one peer presents the neutral material toward that person and pauses for their judgement, while the others attend to the same person. The focal person is not shown commanding, teaching or demonstrating a skill.

**First-read target**
> `mano nuomonė / kompetencija čia vertinama`

**Why this is materially different from A**
- A tests overt positive acknowledgement after/around contribution;
- B tests being actively sought out because one's judgement is valued;
- both share the broader recognition/esteem pull without requiring prizes or formal status.

**Main confounds to watch**
- MASTERY / expertise if technical competence dominates the scene;
- CONTROL / leadership if the focal person appears to command the group;
- CONNECTION if it reads as ordinary conversation;
- BELONGING if equal group presence dominates over directional attention.

**Guardrails**
- no podium, head-of-table position, formal leader cues or teaching posture;
- neutral everyday material, not a highly technical artefact;
- group attention must visibly converge on the focal person;
- the scene should read as `they want this person's view`, not `this person is in charge`.

**Research status**
`ACCEPTED_BOUNDARY_PROBE`.

If the image later reads primarily as expertise, leadership or generic discussion, drop/reassign it rather than forcing RECOGNITION.

## Rejected mechanism classes for now

Do not use as first prototypes:
- trophies / medals / podiums;
- expensive rewards / gifts;
- handshake beside completed work;
- text-based praise boards or certificates;
- generic introduction gesture;
- child/rescue/emergency CARE;
- romantic couple CARE;
- generic hugs/smiles with no directional acknowledgement.

## Current recommendation

- CARE-A: **ACCEPTED FOR PROTOTYPING**
- CARE-B: **ACCEPTED FOR PROTOTYPING**
- RECOGNITION-A: **ACCEPTED FOR PROTOTYPING**
- RECOGNITION-B: **ACCEPTED BOUNDARY PROBE**

All four text mechanisms have now passed the human gate.

Next:
1. prepare production-ready text specifications for these four scenes;
2. do not generate images unless explicitly requested;
3. once actual prototypes exist, apply the same one-second pragmatic first-read audit used for the rest of the bank;
4. reject/reassign any prototype whose competing read dominates.
