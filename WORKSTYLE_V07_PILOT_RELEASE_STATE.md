# WorkStyle v0.7 — LT-E Pilot Release State

Status: PILOT CANDIDATE / MANUAL LIVE SMOKE CHECK STILL REQUIRED
Date: 2026-08-23
Branch: `hero-webgl`

## Candidate identity

Live path:
`https://2rasi.com/tools/workstyle15/v07-cognitive.html`

Form/instrument version:
`0.7-cognitive-8axis-lt-e`

LT wording/content version:
`v07-lt-d`

Session schema:
`workstyle-v07-cognitive-session-v3`

## Frozen for the first invited LT-E cognitive batch

Unless a functional bug is found, do not change item wording or the eight candidate-axis definitions during the first 6–10 LT-E completions.

Current content:
- 34 situations;
- 5 stronger axes × 5 items;
- 3 fragile axes × 3 items.

Current ordering:
- three blocks `12 + 11 + 11`;
- all eight axes represented in every block;
- fragile 3-item axes distributed `1 / 1 / 1`;
- five-item axes distributed `2 / 2 / 1`;
- no adjacent same-axis items by design.

Current response model:
`Visada | Dažniau | Abu panašiai | Dažniau | Visada`
plus separate context and cannot-assess responses.

Current cognitive flags:
- unclear / difficult to understand;
- resembles an earlier situation.

## Timing

Primary process measure is **first-response active time**.

Excluded:
- time after the first answer before pressing Next;
- explicit break-screen time;
- hidden/background tab time.

Break duration is retained separately as process metadata.

Do not compare LT-C timing directly with LT-E as though instrumentation were identical.

## Participant-facing result

No personal profile or score is shown in this batch.

Reason: the pilot is testing construct/item survival, not returning provisional axes as if they were established findings.

## Data transfer

Active method for this invited batch:
- participant exports JSON;
- JSON is returned manually to the researcher.

Prepared but inactive:
- `workers/workstyle-pilot/` Cloudflare Worker + D1 intake.

Do not activate automatic submission until backend health/storage/CORS and privacy copy are verified.

## Required live smoke check before invitations

Mobile first, then desktop:

1. New intro shows separate `Apie` and `Pradėti` cards.
2. Start button text is visible and not dark-filled/obscured.
3. Optional role context does not block starting.
4. A new session starts and uses LT-E version/storage.
5. All five response positions are tappable.
6. Selected answer is highlighted without covering text.
7. `Priklauso nuo situacijos` and `Neteko / negaliu įvertinti` work.
8. Unclear and duplicate flags persist when navigating Back/Next.
9. Back does not create a new random order.
10. Break appears after item 12.
11. Continue starts item 13 and break time is excluded.
12. Second break appears after item 23.
13. Completion screen appears after item 34.
14. Feedback saves.
15. JSON downloads and contains:
   - version LT-E;
   - contentVersion LT-D;
   - schema v3;
   - 34-item order;
   - responses;
   - timingMs;
   - breaks;
   - optional pilotContext;
   - itemMap.
16. Restart clears only the LT-E local session.

## Engineering checks

Static validator:
`node tools/workstyle15/validate-v07.mjs`

Analyzer:
`python tools/workstyle15/analyze-v07.py <exports...>`

The static validator is engineering-only. Passing it does not validate the WorkStyle constructs.

## Stop conditions during invited batch

Fix immediately only if there is a functional/data-integrity bug such as:
- responses not stored;
- wrong item shown for ID;
- duplicate/missing item in an order;
- break logic corrupts index/order;
- timing includes long hidden periods;
- JSON cannot be exported;
- participant cannot proceed on a supported mobile browser.

Do **not** rewrite wording after one opinion. Wording/construct changes wait for repeated cognitive evidence across the small batch, unless a statement contains an obvious factual/grammar error that changes meaning.
