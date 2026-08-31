# PrioLens project state

Status: ACTIVE RESEARCH / CORE ARCHITECTURE CORRECTED TO STANDALONE-IMAGE COMPARISON
Updated: 2026-08-31
Repository: `olemoz1977/2rasi-web`
Branch: `feature/priolens-architecture`
Draft PR: #9

## Product boundary

PrioLens is a short visual-choice experience.

Working principle:
> **For Fun, but with Wisdom.**

Public flow:

```text
START
→ two standalone images
→ choose
→ two standalone images
→ choose
→ ...
→ short session mirror
```

Public constraints:
- no mandatory free text or per-choice explanation;
- no personality/diagnosis/hidden-self claims;
- `no_clear_choice` allowed;
- target about 2–4 minutes / roughly 12–18 meaningful choices.

## Critical architecture correction · 2026-08-31

The fundamental PrioLens stimulus unit is **one standalone image**.

A trial displays two standalone images, but this does **not** make the trial a 2Pair-style matched A/B stimulus pair.

The two images do not need to:
- show the same object;
- use the same scene;
- differ by one manipulated property;
- form a before/after or preserve/refine mate;
- invite the viewer to detect "what changed".

They may be visually and contextually different scenes, provided each stimulus is interpretable on its own and gross nuisance cues are screened/balanced.

Source: `docs/STANDALONE_IMAGE_COMPARISON_ARCHITECTURE_v0.1.md`.

## Why the correction was necessary

Recent OT-03 rendering drifted into the same design logic used in 2Pair:

```text
one scene
→ A action
vs
→ B action
```

This produced increasingly artificial same-scene mates, especially X12 wooden-frame Preserve. User explicitly clarified that PrioLens is intended to **show two images**, not require a matched scene pair.

Therefore the recent Preserve↔Refine same-scene construction is stopped as a product-architecture path.

## Research unit after correction

Safe research pipeline:

```text
candidate semantic family / hypothesis
→ several standalone image exemplars
→ blind semantic screening of each image independently
→ retain semantically convergent stimuli
→ assemble two-image comparison trials
→ vary opponents across trials
→ inspect repeated choice patterns
→ descriptive session mirror
```

Designer intent still does not validate an image.

## Broad-direction hypotheses

AUT, CER, EXP, MAS, CON, INF, PRO, OPP remain research hypotheses only.

They are not approved scoring units and exactly eight final outputs are not required.

Important reinterpretation of earlier D1/D2 work:
- INF D1 and MAS D2 showed problems when broad directions were forced to survive as poles across tightly controlled matched opponents;
- those failures do not by themselves prove that standalone image families for INF or MAS cannot work;
- the corrected question is whether several **independent standalone images** intended for the same candidate family are recognized as sharing a useful semantic core without pair context.

## Previous observable-tradeoff work

The OT taxonomy and Claude blind recovery remain useful historical evidence about visible semantics and confounds.

However:

> **observable-tradeoff-first matched-pair architecture is no longer the active product architecture.**

Do not keep producing same-scene OT mates merely because a public trial contains two images.

## Current rendered-image status

### X12 wooden frame
- Refine image became physically plausible.
- Preserve mate repeatedly required implausible or more complex woodworking behavior.
- X12 remains useful evidence showing why forced same-scene pairing is the wrong PrioLens constraint.
- Do not continue X12 as a matched pair.

### X13 cord coil
- Refine render is a plausible standalone stimulus candidate: one outer loop is visibly repositioned to make the coil more even.
- Preserve render is also physically plausible as a standalone image: a strap secures an already neat coil.
- They do **not** need to remain a controlled matched pair.
- Both may later be screened independently if their semantic families remain relevant.

Gemini watermark cleanup is cosmetic and can be handled after a stimulus is selected.

## Immediate next research task

Stop rendering matched Preserve↔Refine pairs.

Build a small **standalone image stimulus library** instead.

For the first pass:
1. choose 3–4 candidate semantic families;
2. create 3–5 genuinely different standalone scene concepts for each family;
3. ensure no family is represented by one repeated visual trope;
4. blind-screen each image individually with humans using a short semantic question;
5. only then assemble two-image choice trials across families.

The standalone screen should ask what the image represents or what is happening in it, not "how do these two images differ?"

## Nuisance controls for independent images

Do not require pixel-level or same-scene matching.

Screen/balance major nuisance cues instead:
- valence;
- attractiveness/aesthetic reward;
- threat/loss;
- people count/social salience;
- prestige/status;
- visual complexity;
- brightness/saturation;
- obvious difficulty/expertise;
- completion/success;
- magnitude/scale;
- novelty.

## Human pilot status

`docs/HUMAN_SEMANTIC_PILOT_v0.1.md` was written for matched OT pairs and is now **historical / not the next protocol**.

Do not run it as written.

A replacement protocol must screen standalone images first.

## AI reviewers

AI remains a concept/confound filter only, not a validator.

Do not reopen long Claude/Grok voting loops before human semantic evidence.

## AI Review Harness

Vercel harness is deployed and reaches AI Gateway. Paid execution remains deferred. Do not spend more time on billing now.

## Source-of-truth order

1. `PROJECT_STATE.md`
2. `docs/PRODUCT_CONSTITUTION_FUN_WITH_WISDOM_v0.1.md`
3. `docs/STANDALONE_IMAGE_COMPARISON_ARCHITECTURE_v0.1.md`
4. later standalone-image semantic-screen protocol when created
5. `docs/CLAUDE_OT_REPLICATION_STAGE2_RESULT_v0.1.md` as historical evidence
6. `docs/OBSERVABLE_TRADEOFF_TAXONOMY_v0.1.md` as historical evidence
7. `docs/ARCHITECTURE_REASSESSMENT_AFTER_D1_D2_v0.1.md`
8. earlier INF/MAS gate files as historical evidence

## Recovery instruction

If context is lost, start here.

Do not restart same-scene Preserve↔Refine mate construction, do not treat two images on one screen as a 2Pair matched pair, do not restore automatic eight-direction scoring, and do not return to long AI-review loops before standalone human semantic screening.
