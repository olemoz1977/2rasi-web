# PrioLens Open14 backend reuse decision note v0.1

Status: RECOMMENDED / DEPLOYMENT REQUIRES APPROVAL
Date: 2026-09-01

## Finding

`olemoz1977/omesg360` already contains a working PHP + MySQL research data pattern in `wave1/api.php`.

That implementation already demonstrates:
- POST-only JSON handling;
- explicit field validation;
- UUID validation;
- allow-listed values/assets;
- prepared PDO statements;
- database error handling without leaking details;
- simple rate-limit behavior;
- same Hostinger environment used by the current research site.

Therefore PrioLens does **not** need a new Vercel/Supabase/etc. project merely to collect ~30 formative pilot sessions.

## Recommended approach

Reuse the same infrastructure pattern, not the same response table.

Create a separate PrioLens surface:
- endpoint under a dedicated PrioLens research path;
- separate `priolens_open14_sessions` table;
- separate config file / credentials reference as appropriate;
- append-only session payloads;
- no name/email/location fields;
- no intentional IP persistence in application data.

## Prepared but not deployed

`olemoz1977/omesg360` now contains drafts:
- `priolens/open14-v02/server/api.example.php`;
- `priolens/open14-v02/server/schema.sql`;
- `priolens/open14-v02/server/config.example.php`.

These are source drafts only.

No real `config.php` is committed.
No SQL migration has been executed.
No API endpoint has been uploaded to Hostinger.
No data-retention behavior has changed.

## Deployment boundary check

The existing general `deploy-hostinger.yml` builds an explicit frontend-only package and protects existing Wave1/PHP/research surfaces by construction.

The existing dedicated PrioLens runtime workflow uploads only the historical `/public_html/priolens/index.html`.

Therefore merely storing the API draft under `priolens/open14-v02/server/` does not, by itself, authorize or perform production backend deployment.

## Why this is preferable for the formative pilot

Advantages:
- no new external service/vendor;
- existing Hostinger/MySQL operational knowledge;
- same-origin POST can be used;
- simpler privacy story;
- straightforward raw JSON export/analysis;
- easy to remove after the pilot;
- avoids coupling research collection to a new platform before the concept earns it.

Risks:
- custom PHP endpoint still needs security review;
- DB retention/deletion policy must be explicit;
- public abuse protection is limited compared with managed serverless/WAF stacks;
- backups/admin export need a deliberate plan;
- client runtime must add anonymous `sessionUuid` and POST/retry behavior before launch.

## Approval gate

Before any real backend deployment:
1. approve reuse of Hostinger + MySQL for the formative pilot;
2. choose retention period;
3. decide raw-data access/export method;
4. execute schema creation;
5. deploy endpoint to a dedicated research path;
6. add client POST + retry/fallback export;
7. perform negative validation tests and HTTP smoke;
8. only then recruit external participants.

## Current recommendation

For the first ~30-person formative pilot:
> **reuse Hostinger PHP + MySQL rather than creating a new backend service.**

Reconsider a managed backend only if the study scales, collaboration/admin needs grow, or Hostinger operational constraints become material.
