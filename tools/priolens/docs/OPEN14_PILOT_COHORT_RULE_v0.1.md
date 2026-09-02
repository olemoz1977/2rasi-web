# PrioLens Open14 pilot cohort rule v0.1

Status: CANONICAL PRE-PILOT ANALYSIS RULE
Date: 2026-09-02

## Purpose

The Open14 database already contains owner, household and synthetic technical testing rows. They are useful for UX and infrastructure evidence but must never be mixed with the external formative cohort.

Deleting them is not required for valid analysis if exclusion is deterministic and documented.

## Frozen inclusion rule for the first external formative cohort

A row can enter the participant analysis set only when all of the following are true:

1. the session is complete (`completed_at_client` is present);
2. the session seed is not `SYSTEM_SMOKE_DO_NOT_ANALYZE`;
3. the session was created on or after the explicit pilot-opening cutoff timestamp recorded at recruitment opening;
4. the payload schema is `2rasi.priolens.open14.session-v0.2`;
5. the active bank / planner / exemplar schema combination matches the frozen pilot release unless an analysis explicitly studies a version transition;
6. `language` is retained as `lt` or `en` and is not discarded before language-stratified checks.

## Pre-pilot rows

All sessions created before the pilot-opening cutoff are classified as:
`PREPILOT_OWNER_HOUSEHOLD_OR_TECHNICAL`

They may be used for:
- UX findings;
- accessibility findings;
- autosave / API / lifecycle evidence;
- debugging.

They must not be used for:
- family prevalence;
- visual-vs-sufficiency association estimates;
- RT distribution for the external cohort;
- any construct-level conclusion.

## Synthetic rows

Any seed equal to:
`SYSTEM_SMOKE_DO_NOT_ANALYZE`

is excluded regardless of timestamp.

Known synthetic UUIDs include infrastructure/lifecycle smoke rows. Future smoke rows must keep the same seed convention.

## Pilot opening

Do not infer a pilot cutoff from the first external-looking row.

When recruitment is intentionally opened, record one UTC timestamp as:
`PILOT_OPENED_AT_UTC`

and add it to the active checkpoint before distributing the public recruitment link.

That timestamp becomes the reproducible cohort boundary.

## Deletion policy

Physical deletion of pre-pilot rows is optional and operational, not methodological. If deletion is performed, it requires an explicit owner decision because it is irreversible.

The 90-day retention cleanup is separate: rows whose generated `expires_at` has passed are eligible for automatic deletion by the CLI cleanup cron.
