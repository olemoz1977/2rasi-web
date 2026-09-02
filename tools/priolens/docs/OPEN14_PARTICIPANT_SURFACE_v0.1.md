# PrioLens participant surface v0.1

Status: ACTIVE CHECKPOINT / PRE-PILOT PARTICIPANT SURFACE / HUMAN VISUAL RESULT LIVE
Updated: 2026-09-02

## Scope

This checkpoint controls **participant-facing presentation only**.

It does **not** change:
- the frozen Open14 v0.2 family set;
- visual-choice evidence rules;
- 1–5 / null Channel B storage;
- domain aggregation stored in the research payload;
- CARE analysis boundary;
- cohort inclusion rule;
- backend schema or API lifecycle.

## Naming boundary

`Open14` remains internal terminology for repository paths, schema identifiers, planner / bank / telemetry and analysis.

Normal participant UI uses:
- product name: **PrioLens**;
- LT status: `Tyrimo prototipas`;
- EN status: `Research prototype`.

Browser title:
`PrioLens · 2rasi`.

## Intro surface

The 2rasi landing explains what PrioLens is. The runtime intro prepares the participant to act.

Current LT framing:
- `Kuris pirmas patraukia?`
- three images at a time;
- do not decide which is better;
- choose where attention goes first;
- 14 quick choices, followed by a second perspective.

The readiness card disappears after a successful bank check and remains visible only when useful, such as loading, failure, missing assets or resume state.

Retention wording remains conservative until the cleanup cron is operational.

## Result product rule

The result is not a diagnostic report and not a list of all collected values.

Its participant-facing job is now:

1. **Ką rinkaisi dažniausiai / What you chose most often**
2. **Kur dabar ne visai pakanka / Where things do not feel quite enough**
3. **Svarbiausia / Most important -> Kas čia verta antro žvilgsnio? / What deserves a second look?**

The third section is the main product payoff. The first two sections are evidence that supports it.

The public promise remains:
> `Pirmas žvilgsnis ir antras atsakymas ne visada rodo tą patį.`

### 1. Repeated visual choices

Participant evidence remains the frozen cross-exemplar repetition rule:
- show a family only when both distinct exemplars were chosen at least once;
- therefore a displayed family is normally `2/3` or `3/3`;
- `3/3` is visually stronger repetition but is **not** a separate construct threshold;
- same-exemplar repetition alone is not promoted to family-level evidence.

For each displayed family:
- show the actual distinct images the participant selected;
- show a simple `2/3` or `3/3` badge;
- show one short human-language description of what the theme **may** relate to;
- never present that description as the reason the participant chose the image.

The interpretation boundary is concise and human:
> `Tai nereiškia, kad tau šito trūksta. Tik tiek, kad prie šių temų tavo dėmesys grįžo daugiau nei kartą.`

Family descriptions may use language such as `Gali būti susiję su...`, but never:
- `you need this`;
- `you lack this`;
- `your subconscious wants this`;
- `this is your true priority`.

### 2. Current sufficiency

Channel B still stores all twelve item responses and full domain coverage exactly as before.

Normal participant output is intentionally selective:
- only complete 2/2 domains may be interpreted;
- among complete domains, only domains with the current aggregate value `<= 3` are listed individually;
- values on the 4–5 side are not listed as separate reassuring cards;
- if no complete domain is `<= 3`, show one concise statement that nothing clearly stood out;
- incomplete domains remain omitted from interpretation and one concise coverage note is allowed;
- if no domain is complete, do not interpret this perspective.

This `<= 3` threshold is a **participant-display filter only**. It is not a new research variable, clinical cutoff, Maslow stage or pilot-analysis threshold. Raw values remain stored.

No decimals, bars or technical coverage counts are shown in normal participant mode.

### 3. Final reflection is the main payoff

The final section must feel clearly more important than the two evidence sections.

Current presentation:
- label: `Svarbiausia / Most important`;
- heading: `Kas čia verta antro žvilgsnio? / What deserves a second look?`;
- visually dominant dark reflection card;
- relevant selected images repeated inside the final card when a visual family is in focus;
- one short synthesis in ordinary language;
- one large reflection question.

Avoid research-language phrases such as:
- `two signals`;
- `broader area`;
- `valid pairing`;
- repeated references to `this session` unless technically necessary.

Current priority logic:

1. If repeated visual families have valid complete mapped sufficiency domains, prefer a mapping whose domain is `<=3`; within the same priority, prefer the family chosen more often.
2. If the mapped domain is `<=3`, ask whether the repetition has anything to do with how the participant currently feels in that area, explicitly allowing `not related`.
3. If the mapped domain is on the more-sufficient side, preserve the contrast and ask, in ordinary language, what about the images still caught the participant.
4. If a repeated theme has no valid Channel B counterpart, reflect on the image choice alone.
5. If there is no repeated visual family but one or more complete domains are `<=3`, reflect on the lower-sufficiency area.
6. If neither side produces a salient participant-facing point, ask whether anything still stayed with the participant.

The final question must not imply that a relationship exists.

## CARE and asymmetry guardrail

The frozen CARE rule remains unchanged:
- visual CARE = proactive / giving care;
- `CARE_SUPPORT_PRESENT` = care/support present or received;
- no direct CARE <-> CARE_SUPPORT_PRESENT comparison in Open14 v0.2.

A repeated CARE theme may appear with its selected images and a visual-only reflection question, but must not be falsely paired with received support.

Meaning / Contribution remains contextual-only because it has no active visual counterpart.

## Technical detail boundary

Raw JSON and diagnostics remain debug-only (`?debug=1`).

All underlying values, coverage information, choices and telemetry continue to be stored for research analysis. The participant surface is selective; the research payload is not.

## Runtime implementation

Runtime repository:
`olemoz1977/omesg360`

Runtime file:
`priolens/open14-v02/index.html`

Human visual result runtime commit:
`a079295e8054160973f7fccb7282319a751fdad8`

Deployment / live HTTP smoke:
`33629814257` — SUCCESS.

Verified by that deployment:
- current bilingual participant surface present in source;
- selected repeated images are rendered back to the participant;
- `2/3` and `3/3` participant badges use the existing cross-exemplar evidence rule;
- family `may relate to` descriptions are present in LT and EN;
- focused `<=3` result filter remains present;
- final reflection uses the visually dominant reflection hero;
- managed runtime uploaded to Hostinger;
- live HTTP source contains the new human-result implementation;
- planner / assigner / bank / API health remain reachable;
- historical `/priolens/` boundary remains reachable.

## Recruitment consequence

This result change is pre-pilot product hardening, not construct evidence.

External recruitment remains CLOSED until the remaining canonical hardening items are complete and `PILOT_OPENED_AT_UTC` is explicitly recorded.
