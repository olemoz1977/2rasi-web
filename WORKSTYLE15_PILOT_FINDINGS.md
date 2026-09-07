# WorkStyle 15 — pilot findings

Status: ACTIVE PILOT LOG
Last updated: 2026-08-23

Do not commit raw participant JSON files or personal identifiers. Record only aggregate/behavioural observations needed to improve the instrument and pilot flow.

## Pilot 001 — first complete mobile smoke/cognitive run

Instrument content: WorkStyle 15 LT v0.4
Presentation form: A
Device context: mobile browser
Completion: 75/75
Active completion time: about 6 min 58 s
Post-result specificity rating: 2/5
Open feedback: participant reported boredom from around item 30.

### Strong fatigue / satisficing signal

The response-latency trace shows a sharp regime change rather than a gradual slowdown:
- items 1–30: median first-response latency about 8.2 s;
- items 31–36: median about 8.5 s;
- items 37–75: median about 0.38 s;
- among items 37–75, 33 of 39 responses used option 4.

Interpretation: after roughly the first half of the questionnaire, the run no longer represents careful item reading. The resulting 15-dimension profile should therefore NOT be interpreted as a valid individual profile. This run is useful primarily as evidence about response burden and mobile UX.

### Decision

Do not shorten the 75-item bank from a single participant. Instead, change the presentation flow before the next pilot while keeping v0.4 wording frozen:
- retain all 75 items;
- split the experience into five explicit 15-item sections;
- insert a checkpoint after each section;
- clearly allow the participant to stop and resume later;
- use a new presentation form ID so form-A and form-B behaviour can be distinguished;
- continue collecting item latency and abandonment data.

If the same fatigue pattern appears across several independent participants despite checkpoints, shortening or multi-session administration becomes an evidence-backed option.

### Visual/UI finding

Dimension score tracks rendered without the accent fill on mobile. Root cause: `.ws-bar` is an inline `span`, so percentage width does not render as intended. Fix by setting `.ws-bar{display:block}` before the next pilot.

### What this pilot does NOT establish

It does not validate or invalidate:
- the 5-domain architecture;
- the distinctness of the 15 dimensions;
- score reliability;
- factor structure;
- the participant's real WorkStyle profile.

Those questions require careful responses from multiple participants and, later, an adequate sample for psychometric analysis.
