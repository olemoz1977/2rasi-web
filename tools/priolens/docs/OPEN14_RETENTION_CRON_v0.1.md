# PrioLens Open14 retention cron v0.1

Status: CODE + LIVE DB READY / HOSTINGER CRON NOT YET CONFIGURED
Date: 2026-09-02

## Purpose

This checkpoint separates three different claims that must not be conflated:

1. the database has a correct 90-day expiry invariant;
2. the production cleanup script is present and safe to run from PHP CLI;
3. Hostinger is actually scheduling that script automatically.

Only the first two are currently verified.

## Live database invariant — VERIFIED

Retention readiness workflow:
`olemoz1977/omesg360/.github/workflows/verify-priolens-retention-readiness-v01.yml`

Successful run:
`33623739323`

The live production database reported:
- `expiresColumnPresent: true`;
- `expiresExtra: STORED GENERATED`;
- `expiresExpression: created_at + interval 90 day`;
- `expiresIndexPresent: true`;
- `expiryMismatchRows: 0`;
- `totalRows: 13` at verification time;
- `expiredRowsNow: 0` at verification time.

Therefore the live table itself correctly and audibly identifies when each row becomes eligible for deletion.

## Production cleanup script — VERIFIED

Source:
`olemoz1977/omesg360/priolens/open14-v02/server/cleanup.php`

The script:
- requires PHP CLI (`PHP_SAPI === cli`);
- loads the protected production DB config from the server;
- deletes only rows where `expires_at < NOW()`;
- reports `Deleted N expired row(s)` to STDOUT;
- returns non-zero on failure.

The readiness run downloaded the production `cleanup.php` over FTP and compared it exactly with the repository source.

Both files had SHA-256:
`9c56f9bef6e52e643e8afbccba264e65cb7bb8ccb46578e3ec4e6593d79cce4b`

So production cleanup code parity is verified.

## Web-execution boundary — VERIFIED

A direct HTTP request to production `cleanup.php` returned:
`403 Forbidden`.

This is acceptable and stronger than relying only on the script's internal CLI guard: the hosting/web layer itself denies access before normal web execution.

The readiness workflow accepts HTTP 403 or 404 as a valid non-web-executable state.

## Hostinger scheduler — OPEN

The following is **not yet verified**:
- a Hostinger hPanel cron entry exists;
- its PHP command points at the production `cleanup.php`;
- its schedule is enabled and appropriate;
- the command has executed successfully at least once;
- Hostinger `View Output` (or equivalent cron output) shows a successful cleanup run.

FTP deployment cannot create or prove an hPanel scheduler entry. No available connected hosting-control tool currently exposes Hostinger cron management.

Therefore:
> **automatic physical deletion after 90 days is not yet guaranteed.**

Participant wording must remain provisional:
- LT: `Numatyta saugojimo trukmė – iki 90 dienų.`
- EN: `The intended retention period is up to 90 days.`

Do not strengthen this wording until the scheduler is configured and smoked.

## Required final operational step

In Hostinger hPanel, create a PHP cron job for the production `cleanup.php` under the `omesg360.eu` hosting account.

Recommended cadence:
- once per day is sufficient for a 90-day retention policy;
- exact hour is operational, not methodological.

After creation:
1. run it once or wait for the first scheduled execution;
2. inspect cron output;
3. require exit success and output matching `Deleted N expired row(s)`;
4. record the schedule, first successful run time and observed output in this checkpoint;
5. only then change this document status to `CRON OPERATIONAL` and allow participant retention wording to become definitive.

Because `expiredRowsNow = 0` during the readiness check, a first successful smoke may legitimately report `Deleted 0 expired row(s)`.

## Research / cohort boundary

Retention is operational data hygiene and is separate from the pilot cohort cutoff.

Do not delete pre-pilot owner / household / technical rows merely to define the external cohort. The canonical `OPEN14_PILOT_COHORT_RULE_v0.1.md` remains authoritative: `PILOT_OPENED_AT_UTC` defines the first external analysis cohort, and `SYSTEM_SMOKE_DO_NOT_ANALYZE` is always excluded.
