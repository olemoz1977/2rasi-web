# PrioLens OPEN14 v0.4 — low-fi result world owner preview

Status: DEPLOYED OWNER PREVIEW / OWNER-FEEDBACK UX REFINEMENT TECHNICAL PASS / REVISED REAL-PHONE REVIEW PENDING  
Date: 2026-09-04

Runtime:
- repo: `olemoz1977/omesg360`
- branch: `feature/priolens-open14-v04`
- LT: `https://omesg360.eu/priolens-open14-v04/?lang=lt&from=lt`
- EN: `https://omesg360.eu/priolens-open14-v04/?lang=en&from=com`
- API: `/priolens-open14-v04-api/`
- latest owner-feedback deploy + real 390×844 smoke: `33868510484` SUCCESS
- local 390×844 A+/result UX smoke: `33868490503` SUCCESS

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
- participant-facing detail copy avoids technical MOST/LEAST/A+ labels when the same provenance can be stated plainly.

Channel-A detail discloses:
- the raw first-choice repetition count;
- the selected exemplars;
- whether the focus was direct or required an additional visual comparison;
- only exact 3/3 repeated LEAST/background directions are surfaced to the participant;
- 2/3 LEAST remains preserved in raw research data but is intentionally not shown in the participant detail;
- A+ is never presented as an extra exposure or as converting 2/3 into 3/3.

The reflection question was changed to the less causal:
> Kas, tavo manymu, galėjo traukti šiuose vaizduose?

The reflection answer is kept separate from Channel-B sufficiency. After a participant answers, the six-option list collapses to the selected answer plus the separation note.

### Channel B hero

The lower result card is the future needs-map surface.

It currently uses a low-fi map placeholder rather than final map artwork.

Hero rules:
- represents `sufficiencyRoute` only;
- route endpoint(s) come only from Channel B and B+;
- no Channel-A family names are inserted into the needs map;
- the hero no longer renders all six inactive continent groups by default;
- one endpoint -> only its route-relevant land is rendered;
- multiple valid endpoints -> only their route-relevant lands are rendered;
- B+ `similar` keeps every protocol-valid tied endpoint; the UI does not silently truncate a genuine 3+ tie merely to satisfy a one/two-land visual preference;
- B+ `hardToSay`, no numeric answers, or no eligible low direction -> compact no-route state with no inactive lands;
- tapping opens a compact sufficiency bottom sheet over the main result scene.

### Separation rule

There is no automatic A↔B causal line and no automatic sentence claiming that the ship focus explains the map route or vice versa.

Current participant-facing note:
> Laivas rodo pirmo žvilgsnio fokusą. Žemėlapis remiasi tik tavo pakankamumo atsakymais.

This is a non-negotiable methodological boundary, not temporary copy.

## Technical gates

Initial deployment run `33852386491` passed:
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
- transition video;
- final visual polish.

The earlier six-continent / twelve-location geometry remains a model vocabulary, but the participant hero now renders only route-relevant land(s). It is no longer intended to show the full six-continent taxonomy on every result.

Do not create final artwork before the owner confirms that the low-fi information architecture works on a real phone.

## Next gate

Owner real-phone review should answer only these questions:

1. Is it immediately clear that the upper object is the first-glance result and the lower object is the self-report result?
2. Does one focus name on the ship feel sufficient rather than too empty?
3. Does tapping the ship reveal enough provenance without turning the hero into a dashboard?
4. Are A+ candidate image groups now large enough to judge on the phone?
5. Does the route-only needs map feel understandable for one endpoint, multiple endpoints and no-route cases?
6. Does the sufficiency bottom sheet provide enough explanation without becoming a report?
7. Is the separation between the two perspectives clear without feeling defensive or overly methodological?
8. Does the result now feel lighter than the previous long black comparison block?

If this passes, next implementation is final visual grammar:
- minimalist ship;
- needs map;
- dotted route;
- fixed non-diagnostic transition video last.


## Hardening after Claude review

Independent review surfaced several useful frontend risks. After checking them against the actual runtime code:

Accepted and fixed:
- result DOM lookup now throws a descriptive missing-element error instead of failing later on a null dereference;
- the whole result renderer is wrapped in a visible error boundary, so a render failure does not leave a silently half-rendered result;
- owner-preview HTML/MJS/JSON now send `Cache-Control: no-cache, max-age=0, must-revalidate`;
- deployment explicitly gates the renderer Cache-Control header;
- need-location labels now reuse the existing Channel-B item labels rather than maintaining a second duplicate label taxonomy;
- ship/map receive explicit accessible labels.

Review points rejected after code verification:
- ship/map keyboard access was not missing: both surfaces are native `<button>` elements with `aria-controls`, `aria-expanded` and focus styling;
- result CSS is not a separately cached asset; it is currently inlined into generated `index.html`.

Earlier hardened smoke `33863361300` verified the full six-continent / twelve-location low-fi geometry.

Owner-feedback refinement changed the participant-facing presentation. Latest local smoke `33868490503` and deployed smoke `33868510484` verify:
- A+ mobile candidate groups use one wide card per row and remain label-free;
- a one-endpoint B/B+ result renders one route-relevant land and one need node rather than the full taxonomy;
- no-route renders no inactive continents or need nodes;
- 2/3 LEAST is absent from participant detail;
- participant detail does not leak MOST/LEAST/A+/B+ technical labels;
- attention detail still supports its dedicated routed view and Browser Back;
- sufficiency detail opens as a bottom sheet while the main result scene remains visible;
- bottom-sheet close / backdrop / Escape / Browser Back behavior works;
- remote bytes, ES-module MIME, isolated API save and deployed 390×844 owner flow PASS.

Remaining engineering debt before final artwork:
- `build_from_v031.mjs` still constructs v0.4 by string-patching v0.3 HTML and contains the result shell/CSS inline.
- Before adding final SVG ship/map visuals, extract the v0.4 result shell/styles into dedicated source files rather than increasing the patch surface further.

## Owner-feedback refinement — 2026-09-04

Real-phone screenshots exposed an information-hierarchy problem rather than a scoring problem.

Accepted changes:
1. A+ visual runoff: phone layout changed from two candidate groups side-by-side to one candidate group per row. The three exemplars inside a candidate group are therefore materially larger.
2. Main needs map: stopped rendering the entire six-group / twelve-item model on every result. Only route-relevant land(s) are shown.
3. Attention detail: only exact 3/3 repeated background/LEAST directions are participant-facing. 2/3 remains in stored raw data for analysis.
4. Participant wording: technical MOST/LEAST/A+/B+ labels were removed from the visible detail where plain-language provenance is enough.
5. Self-explanation: after selection, the option list collapses to the participant's selected answer.
6. Sufficiency detail: replaced the mostly empty dedicated page with a compact bottom sheet over the result.
7. No semantic engine changes: raw Channel-A choices, A+ logic, Channel-B ratings, B+ logic and server validation remain unchanged.

Deliberate exception to the visual “one or two lands” preference:
- normally the route will render one land, or several when ambiguity remains;
- if B+ `similar` legitimately preserves more than two tied endpoints, all protocol-valid endpoints remain visible;
- the renderer must not discard valid data merely to force a two-land cap.

This refinement is deployed, but it still needs a new real-phone owner pass before the information architecture is frozen for final artwork.

