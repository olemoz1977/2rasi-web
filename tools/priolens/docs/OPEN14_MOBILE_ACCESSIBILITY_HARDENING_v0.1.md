# PrioLens Open14 mobile accessibility hardening v0.1

Status: ACTIVE CHECKPOINT / PRE-PILOT UX HARDENING
Date: 2026-09-01

## Trigger

Informal mobile smoke with a lower-vision household tester exposed three concrete usability failures:

1. the visual-task fallback `Nė vienas aiškiai` was easy to miss because it was rendered as a narrow vertical control on the right;
2. Channel B sufficiency text and support labels were too small to read comfortably without glasses;
3. the unanswered slider state was visually ambiguous: the native thumb sat at the midpoint and was only greyed, so it looked like a valid default answer even though the domain could not advance.

This is UX/accessibility evidence only, not construct evidence and not pilot data.

## Root causes in runtime

Before the patch:
- `Nė vienas aiškiai` occupied a 50 px vertical column;
- trial prompt was 14 px;
- sufficiency statements were 16 px;
- domain / slider helper text was 11–13 px;
- unanswered range control used value `3` as a visual placeholder with only reduced opacity;
- pressing `Toliau` with missing answers relied on a browser `alert()`, which is weak feedback in in-app browsers.

## Applied changes

Runtime commit:
`6ed9fd59cf8b715cf99d03427084a9cd38ff722d`

Workflow:
`Apply PrioLens mobile accessibility v01`

Run:
`33540650020` — SUCCESS.

Live smoke passed.

Changes:
- `Nė vienas aiškiai` is now a horizontal 48 px minimum-height button below the three images;
- trial prompt and counter increased in size / contrast;
- general explanatory notes increased to 15 px;
- sufficiency statements increased to 18 px with larger line-height;
- domain titles, anchors, `Sunku pasakyti`, and autosave helper text increased in size / contrast;
- every unanswered item now explicitly shows `Neatsakyta`;
- unanswered items remain visually neutral rather than silently implying a midpoint answer;
- pressing `Toliau` with missing responses now shows an inline high-contrast error, marks unanswered items, and scrolls the message into view;
- browser `alert()` is no longer the primary validation feedback.

## Related mobile export hardening

The same informal mobile testing also exposed that Messenger in-app browser could ignore Blob + download JSON export.

Runtime commit:
`5e0f8881e93d53e3fac5c22c6f5587e30bc18053`

Export now attempts:
1. native file Share API where supported;
2. normal file download;
3. clipboard fallback with participant-visible status.

Automatic server submission remains independent of manual JSON export.

## Interpretation

These findings matter before pilot because they can produce measurement artefacts:
- a hidden `Nė vienas aiškiai` option artificially forces a visual choice;
- unreadable self-report text increases random / satisficing responses;
- an ambiguous unset slider can create false assumptions about a default midpoint and frustration at blocked progression.

Therefore accessibility/readability is part of measurement integrity, not cosmetic polish.

## Immediate next sequence

1. rerun one short mobile smoke specifically checking the new no-clear control, text readability, and unanswered-state validation;
2. then fix participant-facing sufficiency result coverage (`1/2 answered` must not look fully observed);
3. preserve CARE visual-giving vs received-support asymmetry explicitly in result wording / logic;
4. configure and smoke 90-day cleanup cron;
5. only then decide first external formative mini-pilot.

External recruitment remains CLOSED.
