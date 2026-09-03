# PrioLens Open14 REST-C scene selection

Status: CANONICAL NEXT-BANK SCENE SELECTION / GEOMETRY NOT OWNER-FROZEN / LIVE v0.2 UNCHANGED
Date: 2026-09-03

## Decision

Select the owner-uploaded sofa-rest image `4971.jpg` as the source scene for next-bank REST-C.

This resolves the construct/mechanism problem exposed by the full A/B/C audit: the earlier furry-slippers `4928.jpg` candidate was too close to an existing home-comfort/footwear mechanism.

## Exact reviewed source binary

- local owner file: `4971.jpg`;
- dimensions: 1536×1097;
- decoded format: JPEG/RGB;
- bytes: 474297;
- SHA-256: `9996dbab58b7963b044f0a1129c228e94cfd28809772e1b17ebbaf131f6e131c`;
- source: Pexels/Pixabay `269141`, person lying/resting on sofa under blue blanket, free/CC0 page previously reviewed.

## First-glance mechanism

> actual resting / restoration action on a sofa under a blanket.

Why it is stronger as the third REST mechanism:
- shows the behavior itself rather than another comfort/footwear object;
- distinct from the existing REST-A home-comfort cue;
- visually simple at small size;
- the person's face is hidden, reducing facial-expression / attractiveness salience;
- no text, branding or construct label.

Residual risks:
- sleep-specific interpretation;
- some viewers may read illness, fatigue or laziness rather than neutral restoration;
- blue blanket / cozy interior add comfort valence.

These risks are accepted at design level because the scene materially improves mechanism diversity over `4928`.

## Geometry boundary

The source is landscape, not square.

A 640×640 technical center-crop preview exists in the working environment, but **this checkpoint does not claim owner approval of that crop**. The user explicitly forbids image editing unless requested, so source-scene selection and runtime geometry are kept separate.

No final runtime derivative is frozen until geometry is explicitly approved or a naturally square equivalent is selected.

## Next-bank REST set

Design-level set:
- REST-A KEEP — current home-comfort/rest cue;
- REST-B KEEP — current rest/recovery cue;
- REST-C SELECTED SOURCE — `4971.jpg` actual sofa-rest action.

Historical `4928.jpg` furry slippers remains HOLD / reserve only.

## Result

All 14 families now have a design-selected three-mechanism set.

However the 42-bank is **not runtime-asset frozen** yet because REST-C square geometry remains unresolved and all next-bank binaries still require versioned packaging/technical audit.

Live Open14 v0.2 remains unchanged.