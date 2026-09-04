# PrioLens OPEN14 v0.4 — low-fi result world owner preview

Status: DEPLOYED OWNER PREVIEW / TECHNICAL PASS / REAL-PHONE REVIEW PENDING  
Date: 2026-09-04

Runtime:
- repo: `olemoz1977/omesg360`
- branch: `feature/priolens-open14-v04`
- LT: `https://omesg360.eu/priolens-open14-v04/?lang=lt&from=lt`
- EN: `https://omesg360.eu/priolens-open14-v04/?lang=en&from=com`
- API: `/priolens-open14-v04-api/`
- deploy + real 390×844 smoke: `33852386491` SUCCESS

Live v0.2 remains untouched. v0.3.1 owner preview remains untouched. External recruitment remains CLOSED.

## What is now implemented

The v0.4 protocol is no longer design-only.

Implemented:
1. Channel A MOST + LEAST remains unchanged.
2. A+ adaptive visual runoff is live.
3. Channel B remains the existing 12 sufficiency items.
4. B+ adaptive tied-minimum clarification is live.
5. New session schema:
   `2rasi.priolens.open14.rank-session-v0.4`.
6. New draft namespace:
   `priolens.open14.v04.rank.draft`.
7. Isolated v0.4 API validates adaptive semantics server-side.
8. A+/B+ unresolved states survive reload/resume.
9. Low-fi result-world architecture is deployed.

## Result-world architecture

The main result screen deliberately does not automatically interpret Channel A through Channel B.

### Channel A hero

The upper result card is the future ship surface.

It currently uses a low-fi placeholder rather than final ship artwork.

Hero rules:
- represents `attentionFocus` only;
- shows one focus-family name when a focus exists;
- shows no `3/3` or `2/3` number on the hero;
- if A+ produced no clear focus, no family is manufactured;
- tapping opens Channel-A detail.

Channel-A detail discloses:
- the raw MOST repetition count;
- the selected exemplars;
- whether the focus was direct or came through A+;
- LEAST separately;
- A+ is never presented as an extra exposure or as converting 2/3 into 3/3.

The reflection question was changed to the less causal:
> Kas, tavo manymu, galėjo traukti šiuose vaizduose?

The reflection answer is kept separate from Channel-B sufficiency.

### Channel B hero

The lower result card is the future needs-map surface.

It currently uses a low-fi map placeholder rather than final map artwork.

Hero rules:
- represents `sufficiencyRoute` only;
- route endpoint(s) come only from Channel B and B+;
- no Channel-A family names are inserted into the needs map;
- one endpoint -> one route;
- B+ `similar` -> multiple route endpoints;
- B+ `hardToSay`, no numeric answers, or no eligible low direction -> no forced route;
- tapping opens Channel-B detail.

### Separation rule

There is no automatic A↔B causal line and no automatic sentence claiming that the ship focus explains the map route or vice versa.

Current participant-facing note:
> Laivas ir žemėlapis nėra automatiškai sujungiami. Jie rodo dvi skirtingas perspektyvas.

This is a non-negotiable methodological boundary, not temporary copy.

## Technical gates

Deployment run `33852386491` passed:
- A+/B+ unit and semantic tests;
- result-world edge-case tests;
- v0.4 UI build;
- isolated v0.4 API deployment;
- protected config boundary;
- remote byte verification;
- ES-module MIME checks;
- real deployed 390×844 Chromium flow;
- final API save;
- ship card present;
- map card present;
- both detail layers open;
- legacy main-result text `Ką matai, kai palygini abu?` absent.

## What is intentionally not done yet

Not yet implemented:
- final ship illustration;
- final needs-map illustration;
- dotted route drawing;
- six-continent map composition;
- transition video;
- final visual polish.

Do not create final artwork before the owner confirms that the low-fi information architecture works on a real phone.

## Next gate

Owner real-phone review should answer only these questions:

1. Is it immediately clear that the upper object is the first-glance result and the lower object is the self-report result?
2. Does one focus name on the ship feel sufficient rather than too empty?
3. Does tapping the ship reveal enough provenance without turning the hero into a dashboard?
4. Does the needs-map route logic feel understandable for one endpoint, multiple endpoints and no-route cases?
5. Is the explicit separation between the two perspectives clear without feeling defensive or overly methodological?
6. Does the result now feel lighter than the previous long black comparison block?

If this passes, next implementation is final visual grammar:
- minimalist ship;
- needs map;
- dotted route;
- fixed non-diagnostic transition video last.
