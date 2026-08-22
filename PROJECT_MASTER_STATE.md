# 2rasi / OMESG360 / 2Pair — Project Master State

Status: durable cross-project source of truth for current state, deferred work, operational constraints, and next actions.

Last updated: 2026-08-22

## Operating rule

Do not rely on chat history as the only project memory. Whenever an accepted decision, deferred idea, operational warning, or next step matters across chats, update this file before ending the work session.

Production/deploy repos are not the place for accidental operational notes. This file lives on the non-production `project-memory` branch of `olemoz1977/2rasi-web`.

## Immediate project priority

Leadership 360° core is frozen after successful clean beta E2E. Return focus to OMESG360 recovery verification, then 2rasi / 2Pair.

Immediate sequence:
1. Verify live `https://omesg360.eu/wave1/` after Hostinger restore.
2. Verify live ConflictLab / Calibration deployment under OMESG360 after restore.
3. Verify main `https://omesg360.eu/` homepage after restore.
4. Only after those are confirmed healthy, restore/add the Leadership 360° homepage card using a narrowly targeted file change.
5. Do NOT deploy the entire `olemoz1977/omesg360` repository into Hostinger `public_html` while Wave1/Calibration coexist there.

## Leadership 360°

Repository: `olemoz1977/gla360-personal-full`

State: FROZEN after clean beta E2E PASS on 2026-08-22.

Confirmed final E2E:
- Worker policy `guardian-v6` live.
- Guardian email provider: Resend.
- Initial SELF/evaluator email provider: Resend.
- C1 creation automatically sends Guardian access and initial SELF/evaluator invitations.
- Guardian does not need to press Send for the first invitation wave.
- Guardian magic/admin link is not exposed to the assessed leader setup screen.
- Guardian workspace is process/admin only.
- SELF + one BOSS + Guardian test passed with all three emails received.
- One Gmail test recipient routed the invitation to Spam; treat as deliverability/sender-reputation hardening, not a functional blocker.

Canonical deferred roadmap inside Leadership repo: `FUTURE_ROADMAP.md`.

Do not reopen feature work unless:
- critical bug,
- privacy/security issue,
- or intentional future product phase.

Future organization mode already captured in Leadership `FUTURE_ROADMAP.md`: Organization/People Directory, reporting lines, campaign scheduling, Guardian/Admin launch, roster snapshots, HRIS/import, contextual roles, analytics, SaaS architecture.

## OMESG360 Hostinger recovery incident

Important: `omesg360.eu` Hostinger `public_html` contains more than the OMESG360 marketing homepage. It also hosts Wave1/ConflictLab/Calibration runtime content.

Incident:
- A Git deployment of `olemoz1977/omesg360` into Hostinger `public_html` cleaned/overwrote Hostinger-only sibling folders.
- This was an unsafe deployment strategy.

Recovery:
- Hostinger file backup restored from 2026-08-20 07:19.
- Restore completed successfully.
- Database was intentionally NOT restored; Git file deployment should not have altered MySQL.

Recovered backup visibly contained:
- `public_html/conflictlab/`
- `public_html/wave1/`
- `public_html/assets/`
- `public_html/index.html`
- `public_html/contact.php`
- privacy/robots/sitemap and related site files.

Operational rule:
- NEVER reconnect/autodeploy the whole OMESG360 repo directly into `public_html` while satellite folders live there.
- Any homepage/card change must be narrowly targeted or use a deployment method that cannot delete sibling folders.
- Do not perform repo-wide cleanup/ref moves on OMESG360 without an explicit inventory.

## Human Wave1 / ConflictLab

Source of truth repository: `olemoz1977/ConflictLab`.

Current documented state:
- Human Wave1 v0.3 = PILOT READY / FROZEN.
- Live intended URL: `https://omesg360.eu/wave1/`.
- Protocol: `wave1-v0.3`.
- Stack: HTML + vanilla JS, PHP API, MySQL, local assets.
- Hostinger deployment mirror in repo: `deploy/wave1-hostinger/`.
- Live `config.php` with DB credentials must never be committed.
- Participant-facing changes require a new protocol version.
- Known smoke-test participant excluded from research: `82d751a8-cbca-4854-9198-75719ea3e437`.
- DB duplicate protection documented as `UNIQUE (participant_id, candidate_id)`.

Do not confuse Wave1 source with `olemoz1977/omesg360`.

## Calibration / 2Pair satellites

Calibration-related research/deployment artifacts are associated with ConflictLab / 2Pair, not the OMESG360 marketing repo.

Hostinger restore included `public_html/conflictlab/`; exact live Calibration URL must be verified before making further OMESG360 production changes.

2Pair temporary satellites/concepts:
- Wave1
- Calibration
- CS A/B
- CR A/B

Treat satellite runtime content as independent from OMESG360 homepage deployment.

## 2rasi.lt / 2rasi.com

Repository: `olemoz1977/2rasi-web`.

Project positioning:
- `2rasi.com` / `2rasi.lt` = creative/experimental public space.
- `omesg360.eu` = professional/business-facing space.

Language work already completed/checked:
- `.lt` lower manifesto/About sections corrected to Lithuanian.
- visible language switch requested/implemented direction.
- Leadership 360° card text modernized to current LT/EN, pseudonymous multi-rater, 75 statements / 15 competencies, C1 → 90 days → C2.

Do not revisit language/layout work unless a real bug appears.

## OMESG360 Leadership 360° card

A Leadership 360° card/page existed in OMESG360 work, but the Hostinger restore to 2026-08-20 likely removed production changes made after that backup.

Do not restore it by deploying the whole repo.

Safe sequence:
1. Verify Wave1 live.
2. Verify Calibration/ConflictLab live.
3. Verify OMESG360 homepage live.
4. Then make one narrowly scoped homepage/card change.

## Cross-project deployment safety

Before any deployment that can touch a shared hosting root:
1. Inventory current production folders/files.
2. Identify authoritative source repo for every live subsystem.
3. Confirm whether deployment tool deletes files not present in repo.
4. Create/confirm backup.
5. Deploy only intended paths.
6. Smoke-test all sibling applications afterward.

Never assume one Git repo represents the entire contents of a shared `public_html`.

## Deferred cross-project work

Keep here when accepted but not currently being implemented:
- safer OMESG360 deployment architecture that isolates homepage from Wave1/Calibration satellites;
- central project-level deployment inventory;
- explicit production mapping: repo/branch/path → domain/subpath;
- future 2Pair productization after Wave1/Calibration research evidence;
- OMESG360 professional positioning and future Leadership 360° pilot promotion strategy;
- Leadership 360° public promotion should remain cautious while user is employed in current operational leadership role; validate quietly before aggressive B2B promotion.

## Maintenance rule

For future chats:
- Leadership-only future item → update `gla360-personal-full/FUTURE_ROADMAP.md`.
- Cross-project / OMESG360 / 2rasi / 2Pair operational state → update this file on `project-memory`.
- ConflictLab protocol/research decision → update the appropriate ConflictLab project-state/protocol document.

Do not silently rely on assistant memory for durable project decisions.
