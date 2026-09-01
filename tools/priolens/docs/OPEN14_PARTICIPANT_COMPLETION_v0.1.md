# PrioLens Open14 participant completion v0.1

Status: ACTIVE CHECKPOINT / PRE-PILOT COMPLETION HARDENING
Date: 2026-09-01

## Trigger

Informal household testing exposed a product-level completion failure: after reading the result summary, the participant asked what happens next.

The old result screen contained three descriptive sections but did not provide a concise synthesis or a clear path out of the experiment. `Nauja sesija` was technically a restart control but did not read as `Atlikti dar kartą`, and there was no participant-facing route back to 2rasi.

This is UX / product evidence only, not construct evidence or pilot data.

## Runtime changes now live

Runtime source:
`olemoz1977/omesg360/priolens/open14-v02/index.html`

Runtime commit:
`98d4204ebc178288931af0ec3ef1a42693fc8fd2`

Workflow:
`Apply PrioLens result completion v01`

Run:
`33542878842` — SUCCESS; live smoke passed.

### Participant result completion

The result now includes a participant-facing `Trumpai` summary above the detailed sections.

The summary is generated only from information already used by the existing result logic:
- cross-exemplar repeated visual themes;
- complete current-sufficiency domains;
- descriptive comparisons between those two channels.

It does not claim:
- unmet need;
- hidden / true self;
- diagnosis;
- global priority score.

The closing wording explicitly frames the result as a question for reflection rather than a verdict.

### Clear completion actions

The old `Nauja sesija` label is now:
`Atlikti dar kartą`.

A second clear action is now present:
`Grįžti į 2rasi`.

The return target is selected through a constrained `from=lt|com` query parameter:
- `from=lt` -> `https://2rasi.lt/#experiments`;
- `from=com` -> `https://2rasi.com/#experiments`;
- default -> LT.

No arbitrary return URL / open redirect is used.

### Technical controls removed from normal participant view

`Tyrimo diagnostika` is hidden in normal mode and remains available only through `?debug=1`.

Raw `Eksportuoti JSON` is also hidden in normal participant mode and remains available in debug mode. Automatic server submission is unchanged.

## Sufficiency coverage blocker closed

The previous result logic could calculate a domain mean from one numeric item when the second item was `Sunku pasakyti = null`, creating a complete-looking domain score from partial evidence.

This is now corrected in participant-facing results:
- `0/2` numeric answers -> `Sunku pasakyti`;
- `1/2` numeric answers -> explicit `1/2 atsakyta` / partial-information state;
- only `2/2` numeric answers receive a full domain value and bar;
- only complete domains can enter Channel A vs Channel B comparison logic and the `Trumpai` synthesis.

Storage semantics remain unchanged: item values are still 1–5 or `null`.

## 2rasi entry / exit architecture

The 10th `PrioLens` homepage card already exists in the `feature/priolens-architecture` branch and points to:
`/tools/priolens/`.

The PrioLens landing page has now been rewritten from the obsolete 8-direction / 28-pair architecture to Open14:
- 14 visual triads;
- 12 current-sufficiency items;
- about 3 minutes;
- two separate perspectives, not one score;
- explicit non-diagnostic guardrails;
- CTA into `https://omesg360.eu/priolens-open14-v02/` with the appropriate `from` parameter.

Landing commit:
`9af3081f88cb0172afc61413bdeda25e717ec138`.

The homepage card hook was also aligned with triads:
- old: `When two things matter, what takes priority?`
- new: `When several things matter, what pulls you first?`
- LT: `Kai svarbūs keli dalykai, kas patraukia pirmiausia?`

The feature branch homepage / landing are prepared but are not considered live until the branch is intentionally merged / deployed.

### Language limitation

The 2rasi landing is bilingual, but the current Open14 runtime itself is still Lithuanian.
The `.com` landing states this explicitly instead of implying an English participant runtime already exists.

## Remaining pre-pilot blockers

1. run one fresh mobile smoke through the full participant journey including the new `Trumpai`, coverage states, restart and return controls;
2. preserve CARE visual-giving vs received-support asymmetry explicitly in final wording / logic documentation;
3. configure and smoke the 90-day cleanup cron;
4. decide whether the first external formative release is LT-only or whether an EN runtime is required first;
5. only then intentionally publish / merge the 2rasi entry route and open external recruitment.

External recruitment remains CLOSED.

## Research guardrail

Current research question remains:
> **Do cross-exemplar repeated visual pulls show interpretable, non-trivial relationships with independently reported current sufficiency, beyond stimulus-specific salience and chance?**

The new participant synthesis must remain descriptive. It is a completion layer over the same evidence, not a new psychological scoring model.
