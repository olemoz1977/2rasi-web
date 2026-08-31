# PrioLens Open14 set-level visual balance audit v0.1

Status: ACTIVE SET-LEVEL CHECK / NOT STIMULUS VALIDATION
Date: 2026-09-01

## Purpose

Check the current Open14 asset shortlist as **one competing visual set** before filling CARE / RECOGNITION / SUCCESS gaps.

This is not a laboratory-normalization exercise.

Active rule remains:

> **clear enough + engaging > theoretically pure + dead**

The question is narrower:

> Is any family getting a systematic perceptual advantage or disadvantage from brightness, saturation, aspect ratio, scene density or repeated visual mechanism?

## Source

Current Open14 shortlist:
`OPEN14_ASSET_MATRIX_v0.1.md`

Automated asset metrics and contact sheets are generated in:
`olemoz1977/omesg360/priolens/open14-audit-v01/`

Metrics include:
- source dimensions / aspect ratio;
- mean luminance;
- contrast;
- saturation;
- colorfulness;
- grayscale entropy;
- simple edge density.

These metrics are nuisance diagnostics only. They do not score stimulus quality or psychological meaning.

## Runtime geometry finding

Current P3 v0.4 runtime places images in a square visual container and uses:

```css
aspect-ratio: 1 / 1;
object-fit: contain;
```

Therefore portrait images are not cropped, but they occupy a narrower visible area inside the same square slot.

This creates a plausible **size/salience disadvantage** when a family is represented mainly by portrait assets.

## Current set-level findings

### 1. CONTROL-B is a real visual outlier

Current:
`file_0000000092148210be3631f7c20ec0da.png`

Recorded first read:
`reguliuoti nustatymus`

Approximate metrics:
- luminance: **41.4**;
- contrast: **23.6**;
- saturation: **26.4**;
- colorfulness: **5.0**;
- entropy: **6.36**.

It is materially darker and visually flatter than most of the set.

This is not useful `natural variation`; it can systematically weaken CONTROL when compared with vivid alternatives.

### Replacement decision

Replace CONTROL-B with:
`file_000000006b148210abe3c22f8ce50764.png`

Recorded first read:
> **įjungti / pakeisti visos patalpos būseną**

Approximate metrics:
- square source;
- luminance: **109.4**;
- contrast: **37.1**;
- saturation: **57.5**;
- colorfulness: **24.5**;
- entropy: **7.01**.

Why this is better:
- still a concrete control/action mechanism;
- materially different from S04 flow-routing;
- square presentation;
- visually alive without becoming an obvious salience outlier.

Decision: **REPLACE**.

---

### 2. KNOWLEDGE has a family-level aspect-ratio problem

Current two Knowledge assets are both 768×1360 portrait files.

In the square `contain` runtime this means both naturally render narrower than square competitors.

They are also among the more saturated assets.

This is more concerning than either property alone because the geometry difference is **systematic at family level**.

Targeted existing alternatives were checked:

- `20260811_180451129.png` — square; first read `pamatyti aiškiau / daugiau`;
- `file_000000005de482439d67d0a9a57c0072.png` — near-square; first read `pamatyti objektą aiškiau`;
- `20260730_231228063.png` — portrait; first read `skaityti / aiškiau matyti`.

The square alternatives improve geometry, but they broaden the semantic territory from explicit learning/knowledge toward **understanding / seeing clearly**.

Current decision:
- do **not** silently relabel a clarity image as knowledge just to equalize geometry;
- keep one square candidate as `KNOWLEDGE/UNDERSTANDING boundary HOLD`;
- before runtime freeze, decide whether the family is really `KNOWLEDGE`, or a broader `UNDERSTANDING / LEARNING` impulse.

Decision: **HOLD, NOT AUTO-REPLACE**.

This is a genuine conceptual question, not a reason to generate immediately.

---

### 3. RESOURCE harvest is visually dense and highly saturated

Harvest candidate:
`file_00000000673881f4bc390c5618110a68.png`

It is one of the strongest edge-density and saturation outliers in the current set.

Targeted prepared-food alternatives are visually calmer, but they introduce an equally obvious appetitive cue.

The harvest scene has a strong first read and useful resource/opportunity semantics.

Decision: **KEEP AND TRACK**.

Do not desaturate or replace merely to make the bank visually uniform.

Later human data should tell us whether it wins suspiciously often across different opponents.

---

### 4. OPPORTUNITY-B is bright, but not yet a replacement case

Current blank-canvas / creative-possibility exemplar is among the brightest images in the set.

Alternative greenhouse / growth-space images are darker but also visually dense, green/nature-heavy and semantically shift toward growth/reward.

The current exemplar remains direct and materially different from Opportunity-A.

Decision: **KEEP AND TRACK**.

Brightness alone is not a rejection criterion.

---

### 5. AUTONOMY improved after user asset recovery

The old seat-choice placeholder is no longer the intended AUT-B.

Preferred AUT pair:
- `S05.webp` — choose the appropriate tool;
- recovered backpack-strap adjustment — configure / fit something for oneself.

The recovered backpack image is square and its visual metrics sit near the middle of the current set, so the semantic upgrade does **not** create a new obvious visual-salience problem.

The recovered physical audio-control image remains an AUT/CONTROL boundary reserve.

## Human / face salience

Do not try to suppress people or faces across CONNECTION merely because social scenes attract attention.

CARE and RECOGNITION are still missing and will naturally require human interaction as well.

The relevant future question is whether **one social family** receives uniquely stronger facial/emotional salience than the other social families, not whether every stimulus has equal numbers of faces.

## Aspect-ratio rule for Open14 v0.1

Do not require every source file to be square.

But avoid a family being represented **only** by portrait assets when the runtime compares them inside square slots.

Pragmatic guardrail:
- mixed source geometry is acceptable;
- systematic family-level geometry is a nuisance signal;
- fix by choosing an equally meaningful alternative where possible, not by destructive cropping.

## Current actions

1. **CONTROL-B: replace** with `file_000000006b148210abe3c22f8ce50764.png`.
2. **KNOWLEDGE:** keep current semantics temporarily; retain square `pamatyti aiškiau / daugiau` as a boundary candidate and resolve family naming before runtime freeze.
3. **RESOURCE:** keep harvest; track vivid reward/saturation.
4. **OPPORTUNITY:** keep current pair; track high brightness of B.
5. **AUTONOMY:** use S05 + recovered backpack, once exact binary provenance/path is resolved.
6. Do not generate anything to fix visual metrics.

## What this audit does not justify

It does not justify:
- equalizing all luminance/saturation;
- making images emotionally neutral;
- replacing vivid scenes with sterile controls;
- interpreting visual metrics as construct validity;
- declaring a family invalid because one exemplar is visually unusual.

## Next gate

After CONTROL replacement and recovered AUT asset provenance are clean:

1. resolve only the KNOWLEDGE vs UNDERSTANDING naming/coverage question if needed;
2. review the six intentionally blank mechanisms:
   - CARE A/B;
   - RECOGNITION A/B;
   - SUCCESS A/B;
3. ask the user only at that mechanism gate, because choosing what those missing families should visibly mean is a substantive product decision;
4. do not generate images before that decision.
