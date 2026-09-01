# PrioLens Open14 owner smoke and runtime hardening v0.1

Status: ACTIVE CHECKPOINT
Date: 2026-09-01

## Owner smoke completed

A full mobile owner smoke session completed successfully in the live Open14 v0.2 runtime.

Observed technical facts from that session:
- 14 / 14 visual triads completed;
- all 6 perceived-sufficiency screens completed;
- `no_clear_choice = 0`;
- median visual-choice RT = 4332.5 ms;
- automatic final submission succeeded (`ok=true`, `inserted=true`);
- planner invariants and A/B exemplar balance were preserved.

This owner run is a runtime / UX sanity check only. It is not construct validation and must not be tuned as if the owner's pattern were population evidence.

## Important owner-smoke findings

### 1. Image geometry is a real confound

The mobile runtime showed that portrait 9:16 assets occupy materially less visible area than square assets inside the same choice slot.

Therefore before external formative recruitment:
- audit the current 28 runtime assets by actual file dimensions;
- create square derivatives for every non-square active asset;
- do not stretch images;
- do not merely place portrait images inside a square canvas with large empty margins;
- do not rely on blind CSS `object-fit: cover` as the final normalization method;
- preserve each stimulus's first-glance meaning when cropping / reframing;
- keep originals untouched and version square derivatives separately.

This geometry normalization is now the immediate stimulus / UX priority.

### 2. Session interruption previously lost progress

The first owner-smoke runtime stored a session only after `finish()` and the production API required exactly 14 choices plus all 12 sufficiency answers. A reload / closed tab during the flow therefore had no resumable state.

This has now been corrected.

## Autosave / resume architecture now live

Current Open14 v0.2 runtime behavior:
- local checkpoint is saved after every visual choice;
- local checkpoint is updated after every perceived-sufficiency response;
- closing / reloading the page preserves an incomplete session in `localStorage` on the same device/browser;
- opening the runtime again offers `Tęsti sesiją` or `Pradėti naują`;
- server-side incomplete checkpoints are also stored through `/priolens-open14-api/progress.php`;
- incomplete checkpoints use the same `sessionUuid` as the eventual completed session;
- the final API upserts the completed payload over that incomplete row;
- a later stale partial checkpoint cannot overwrite a row already marked completed;
- incomplete sessions are not valid completed pilot observations.

A production smoke verified the lifecycle:
`partial checkpoint -> final completion -> stale partial rejected from overwriting completion`.

No new database table was required.

## Perceived-sufficiency UI change

The visible 1–5 Likert buttons are removed from the participant-facing second section.

Current interaction:
- one discrete 5-step slider per item;
- numeric values 1–5 remain internal for the existing data contract;
- participant sees only the semantic anchors:
  - left: `Labai trūksta`
  - right: `Pakanka`
- `Sunku pasakyti` remains a separate button and stores `null`;
- an unanswered slider does not silently count as the midpoint.

This is a UI representation change, not a new scale.

## Methodological observations from the owner run

The two-exemplar rule proved useful:
- BELONGING, MASTERY and SAFETY repeated across both exemplars in the owner run;
- CARE and RECOGNITION repeated only on one exemplar each, so they must remain exemplar-specific observations rather than family-level evidence.

Do not infer stable traits or unmet needs from this one owner run.

Two additional issues remain open before external recruitment:
1. `null` / `Sunku pasakyti` coverage must be surfaced in domain results instead of silently averaging the remaining item as if the domain were fully observed;
2. visual CARE is proactive / giving care, while `CARE_SUPPORT_PRESENT` measures care/support present or received in life. They must not be treated as construct-equivalent.

## Immediate next action

1. Finish the actual-dimensions audit of all 28 active runtime assets.
2. Normalize all active non-square assets to reviewed 1:1 derivatives.
3. Smoke the normalized mobile choice flow.
4. Fix sufficiency-domain coverage display for `null` answers.
5. Keep CARE visual-vs-self-report asymmetry explicit.
6. Configure and smoke the 90-day Hostinger cleanup cron.
7. Only then decide the first external formative mini-pilot release.

Do not recruit externally before steps 1–6 are complete.
