# PrioLens Open14 missing scene mechanisms v0.2

Status: HUMAN-REVIEW GATE / TEXT ONLY
Date: 2026-09-01

## Purpose

Define the four remaining Open14 v0.2 visual mechanisms **before any image is created**.

Open slots:
- CARE-A;
- CARE-B;
- RECOGNITION-A;
- RECOGNITION-B.

These are mechanism descriptions, not generation prompts.

## CARE working pull

> **Act for another person's welfare, including with a small personal cost or before being asked.**

CARE must not collapse into:
- CONNECTION — direct contact / reciprocity;
- BELONGING — being together / part of a group;
- SAFETY — protecting oneself or an object;
- bravery / emergency response;
- generic warmth.

### CARE-A — give up some of my comfort for another

**Mechanism**

Two ordinary adults are caught in rain. One person deliberately shifts the only umbrella far enough over the other person that their own shoulder / side is visibly left in the rain.

**First-read target**
> `pasirūpinti kitu savo komforto sąskaita`

**Why this mechanism is useful**
- welfare is directed toward another person;
- a small self-cost is visible in one frame;
- no verbal request is needed;
- the action is ordinary, not heroic.

**Main confounds to watch**
- SAFETY / protection because umbrella imagery is already used there;
- romantic/relationship interpretation if the pair is staged too intimately;
- dramatic weather can overpower the caregiving action.

**Design guardrail**
Use mild ordinary rain and neutral adult relationship cues. The self-cost should be visible but modest.

### CARE-B — help before being asked

**Mechanism**

One ordinary adult has dropped several neutral everyday items while already carrying something. A nearby person is visibly kneeling / reaching to gather the scattered items while the first person is still occupied. No begging, pointing or request gesture.

**First-read target**
> `pastebėti ir padėti neprašytam`

**Why this mechanism is useful**
- proactive helping is the visible action;
- does not require danger or vulnerability;
- materially different from CARE-A because there is no resource transfer or protection;
- modest effort rather than heroic sacrifice.

**Main confounds to watch**
- cooperation / CONNECTION if both people are shown doing the same task symmetrically;
- politeness/social norm;
- clutter if too many dropped objects make the scene visually noisy.

**Design guardrail**
Keep the roles asymmetric: one person has the problem; the other initiates help.

## RECOGNITION working pull

> **Have my contribution or standing seen and acknowledged.**

A neighboring AgileBrain description is useful here only as a coverage check: its Recognition language centers on important efforts / contributions being acknowledged and on esteem for one's contributions. PrioLens does not inherit AgileBrain's scoring or unmet-need claims.

RECOGNITION must not collapse into:
- BELONGING — simply being included;
- CONNECTION — interpersonal contact;
- RESOURCE — receiving a gift/reward;
- MASTERY — doing skilled work;
- SUCCESS — reaching an endpoint;
- prestige symbolism with no visible acknowledgement event.

Recognition remains the less settled family. These two mechanisms are intentionally different and should be rejected if acknowledgement is not the first read.

### RECOGNITION-A — modest peer acknowledgement

**Mechanism**

A small neutral peer group visibly directs a brief round of applause / appreciative gestures toward one ordinary person. No stage, medal, trophy, luxury context or winner symbolism.

**First-read target**
> `būti pastebėtam ir įvertintam kitų`

**Why this mechanism is useful**
- acknowledgement itself is visually explicit;
- group inclusion alone is not enough because attention is clearly directed at one person;
- no material reward is needed.

**Main confounds to watch**
- SUCCESS / winning if the setting looks like a ceremony;
- status if the focal person is dressed or positioned as a leader;
- generic celebration if the group is too excited.

**Design guardrail**
Keep the context ordinary and the acknowledgement modest.

### RECOGNITION-B — visible credit / being singled out

**Mechanism**

Inside a small ordinary peer group, one person clearly uses an open-hand presenting / crediting gesture toward another person. The rest of the group visibly redirects attention toward the acknowledged person. No stage, prize, certificate, handshake or completed technical object is needed.

**First-read target**
> `mano indėlis / vaidmuo pastebėtas ir pripažintas`

**Why this mechanism is useful**
- removes the old handshake/deal ambiguity;
- does not require a trophy or material reward;
- isolates the social event of giving one person visible credit;
- materially different from applause while still testing acknowledgement.

**Main confounds to watch**
- introduction / presentation rather than recognition;
- BELONGING if all people receive equal attention;
- status if the acknowledged person is visually elevated or dressed differently.

**Design guardrail**
All people should remain visually equal except for the momentary direction of group attention. The acknowledgement gesture, not hierarchy, should create the asymmetry.

## Rejected mechanism classes for now

Do not use as first prototypes:
- trophies / medals / podiums — too close to winning/status/sport;
- expensive rewards / gifts — RESOURCE dominates;
- handshake beside completed work — greeting/deal/success/mastery ambiguity is too high;
- child/rescue/emergency CARE — duty, vulnerability and danger dominate;
- romantic couple CARE — relationship valence dominates;
- text-based praise boards or certificates — reading/text becomes the mechanism;
- generic smiles or hugs — CONNECTION/BELONGING dominates.

## Human-review questions

Before creating any missing stimulus, review only these questions:

1. Does CARE-A capture the intended **small self-sacrifice / altruism** rather than merely protection?
2. Does CARE-B capture **help without request** strongly enough in one still frame?
3. Is RECOGNITION-A worth testing despite applause/celebration leakage?
4. Does RECOGNITION-B read as **giving visible credit**, or merely introducing someone?

If a mechanism fails, replace the mechanism. Do not compensate with increasingly artificial visual staging.

## Current recommendation

- CARE-A: **TRY**
- CARE-B: **TRY**
- RECOGNITION-A: **TRY**
- RECOGNITION-B: **TRY, but boundary-sensitive**

Do not generate images yet.
