# Original PrioLens baseline recovery v0.1

Status: RECOVERED FROM PRIOR PROJECT FILES / USE TO PREVENT ARCHITECTURE DRIFT
Date: 2026-08-31

## Why this file exists

A later research thread drifted toward 2Pair-style matched A/B scene construction. Prior PrioLens project files were re-checked to recover the original product architecture before continuing.

## Recovered original architecture

The original PrioLens v0.1 architecture defined:

- 8 working directions;
- 2 **independent visual exemplars per direction**;
- 16 active standalone stimuli total;
- stable stimulus IDs separate from direction IDs;
- pairwise trials assembled later from stimuli belonging to different directions;
- 28 unique direction-v-direction edges in the original full research session;
- one of four possible exemplar combinations selected for each direction edge;
- top/bottom position balanced independently from semantic direction.

Therefore:

> **A PrioLens stimulus is one standalone visual exemplar. A trial is a later comparison between two standalone stimuli.**

The stimulus itself is not a 2Pair-style matched A/B scene.

## Original separation from 2Pair

The original architecture explicitly treated 2Pair as a separate frozen experimental product.

PrioLens could reuse lessons about rapid visual presentation, timing hygiene and reflection, but should not import 2Pair scoring assumptions or matched-pair stimulus architecture.

## Recovered working beta

The prior `priolens_working_beta_v03.html` contains:

- the 8 working directions;
- stimulus IDs such as `autonomy-01`, `autonomy-02`, etc.;
- embedded image data for the active stimulus set;
- a runtime that presents two square images vertically and records the chosen stimulus/direction;
- a 28-comparison core mode and optional second 28-comparison calibration mode.

The embedded image data means the old 16-stimulus set is recoverable from the prior beta file; it should not be manually reconstructed from memory if exact assets are needed.

## Recovered red-team checkpoint

The earlier red-team review had already reached a more useful diagnosis than the later matched-pair detour:

- current 16-stimulus freeze was stopped;
- the main blocker was semantic robustness + stimulus-family confounding, not cosmetic cleanup;
- two exemplars per direction were considered insufficient for stronger inference;
- next research architecture proposed a broader pool, provisionally at least 4 independently designed exemplars per direction;
- human semantic validation was required before preference testing;
- exemplar identity should remain in the data so direction effects can be separated from image-specific effects.

Strongest then-current direction family: MAS, especially S12/S16, but both shared a skilled-hand/craft-action trope.

Other direction families had concrete problems:
- CON: face/social salience;
- INF: generic causality/routing vs meaningful influence;
- AUT: hidden-story dependence;
- CER: completion/containment leakage;
- EXP: AUT/OPP leakage;
- PRO: mood/value/fragility ambiguity;
- OPP: food/nature/reward confounds.

## Current recovery rule

Do not ask the user to re-upload all historical material when prior project files are available.

Before requesting uploads:
1. check current repo source of truth;
2. check prior PrioLens project files / File Library;
3. recover exact architecture and stimulus IDs from those files;
4. request only a genuinely missing artifact that cannot be recovered.

## What remains active now

The original 28-edge / 2-exemplar design is historical architecture, not automatically restored as the current protocol.

What *is* restored as an invariant:

> standalone image first; comparison second.

The next research step should start from the recovered standalone stimulus bank and red-team status, then decide which semantic families and exemplars deserve continuation.
