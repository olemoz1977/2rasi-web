# PrioLens Open14 pre-pilot smoke findings — 2026-09-02

Status: ACTIVE CHECKPOINT / PRE-PILOT HARDENING
Date: 2026-09-02

## Evidence boundary

This checkpoint records owner UX / routing smoke evidence only.

It is **not** construct evidence and does not change the frozen Open14 v0.2 research model.
External recruitment remains CLOSED.
No stimulus generation / replacement work was reopened.

## Owner smoke findings

### 1. Channel B no-value slider ambiguity

During a PC participant smoke, choosing `Sunku pasakyti` exposed a misleading visual state:
- the range control still had an internal default midpoint value of 3;
- while unanswered, the midpoint thumb was grey;
- after choosing `Sunku pasakyti`, the same midpoint thumb became dark even though the stored response was `null`.

This could be read as a numeric midpoint answer and therefore is measurement-relevant UX, not merely styling.

### Fix now live

Open14 runtime commit:
`05c6d95a6eccdff102a9244c6aab2e8ea455512d`

Deployment / live-source smoke workflow:
`33620120366` — SUCCESS.

Current rule:
- if no numeric value has been chosen, the range thumb is visually hidden;
- this applies both to unanswered and `Sunku pasakyti / Hard to say` states;
- `Sunku pasakyti / Hard to say` is represented by its explicit button and text state, while storage remains `null`;
- interacting with the range reveals the numeric thumb and records 1–5;
- accessibility state uses `aria-valuetext` for unanswered / hard-to-say.

The existing 0/2, 1/2, 2/2 coverage rule is unchanged.

## Persistent participant exit

The owner proposed allowing participants to leave before completion rather than showing a return action only on the result screen.

This is now live in the same runtime commit / workflow above:
- a subtle persistent `Išeiti / Exit` action is available in the Open14 header on all screens;
- LT sessions return to `https://2rasi.lt/#experiments`;
- EN/com sessions return to `https://2rasi.com/#experiments`;
- local autosave and pagehide checkpoint behavior remain active, so an unfinished session can still be resumed on the same device/browser.

The exit action is intentionally secondary and does not compete visually with the primary task action.

## 2rasi.com language-routing failure

Manual owner smoke found:
> entering PrioLens from public `2rasi.com` card 10 opened the Lithuanian Open14 runtime.

### Root cause

This was **not** absence of an EN runtime.

The bilingual Open14 runtime already supports:
- `?lang=lt&from=lt` -> LT;
- `?lang=en&from=com` -> EN;
- default -> LT.

The public-looking `hero-webgl` branch had drifted from the PrioLens source-of-truth branch:
- its card 10 linked directly to `https://omesg360.eu/priolens-open14-v02/`;
- no `lang` or `from` parameter was passed;
- therefore Open14 correctly fell back to LT.

By contrast, `feature/priolens-architecture` already specified card -> `/tools/priolens/` -> language-aware Open14 routing.

### Repository correction

To align the branch matching the observed public card with the PrioLens source of truth:
- bilingual `tools/priolens/index.html` was added to `hero-webgl`;
- card 10 was changed to `/tools/priolens/`;
- approved EN hook restored: `A first glance and a second answer do not always show the same thing.`;
- landing routes `.lt` to `from=lt&lang=lt` and `.com` to `from=com&lang=en`.

`hero-webgl` correction commit:
`3162fc17699fb4cd5bb8b7102bbfd36cb1680cd2`

Patch workflow:
`33620294591` — SUCCESS.

### Important deployment boundary

The repository correction is verified on `hero-webgl`, but this workflow did not independently prove that the public `2rasi.lt` / `2rasi.com` hosting surface deployed that branch revision.

Therefore public `.com` routing remains **MANUAL RE-SMOKE REQUIRED**, not PASS.

If `.com` still opens LT after a fresh/hard-reload smoke, the remaining fault is public deployment plumbing / stale deployment, not the Open14 bilingual runtime.

## What the screenshots confirm

The supplied evidence confirms:
- public `2rasi.lt` shows PrioLens card 10 on mobile;
- a PC run can complete the visual flow and reach Channel B;
- all `Sunku pasakyti` responses correctly produce 0/2 numeric coverage in the result rather than fake midpoint scores;
- the final result includes repeat and return actions.

It does **not** close the required fresh full LT **mobile** participant smoke, because the Open14 completion shown in this evidence was performed on PC.

## Remaining pre-pilot hardening after this checkpoint

1. Re-smoke the no-value slider and persistent exit after the live runtime patch, preferably on mobile.
2. Run one fresh full LT mobile participant smoke including result summary, coverage states, repeat and return.
3. Run one focused EN smoke.
4. Re-smoke public `2rasi.com` card -> landing -> EN Open14 -> return; also re-confirm `.lt` path.
5. Configure and smoke the 90-day Hostinger cleanup cron.
6. Only when recruitment intentionally opens, record `PILOT_OPENED_AT_UTC` before distributing the external recruitment link.

External recruitment remains CLOSED.
