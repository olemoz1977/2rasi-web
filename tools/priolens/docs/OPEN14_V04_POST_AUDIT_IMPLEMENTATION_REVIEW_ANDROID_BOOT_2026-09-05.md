# PrioLens v0.4 — post-audit implementation review and Android boot regression

Status: TECHNICAL REMEDIATION DEPLOYED / REAL-ANDROID RECHECK REQUIRED
Date: 2026-09-05

## Trigger

Owner's real Android Chrome showed the v0.4 intro indefinitely stuck at:
- “Tikrinamas vaizdų rinkinys…”
- disabled “Pradėti”

The static MOST–LEAST intro copy was present, so the newest HTML had loaded, but the module bootstrap had not reached the runtime `init()` path.

This is stronger evidence than the prior 390×844 Playwright smoke because the participant device is the actual target environment.

## What changed since the repeated construct audit

Implementation branch moved 29+ commits beyond the pre-audit v0.4 head.

Methodologically justified changes:
- 14 Channel-A families retained;
- 12 Channel-B sufficiency areas retained;
- CARE received-support wording clarified;
- RESOURCE / ORDER / CARE / CONTROL / OPPORTUNITY construct language tightened;
- “pakankamumo sritis” replaces “poreikio sritis” participant-side;
- MOST and LEAST remain analytically separate;
- sufficiency schema bumped to v0.3 because CARE wording changed semantic meaning;
- local-storage namespace isolated to avoid silently reinterpreting old completed responses.

Presentation changes added after that:
- pre-result 12×12 relationship matrix;
- participant result overlays;
- browser Print → Save as PDF;
- extra runtime module `result_matrix_v04.mjs`.

## Critical review

### Correct decisions

1. Construct audit did **not** delete/add families merely for symmetry.
2. CARE giver/receiver ambiguity is now explicit.
3. Schema/storage isolation was appropriate after changing the semantic meaning of a B item.
4. The matrix is explicitly a relationship display, not a validated latent-space model.
5. MOST and LEAST remain separate.
6. v0.2 remained untouched.

### Decisions that increased risk unnecessarily

1. Methodology revision, schema migration, result terminology, matrix UI and PDF were implemented in one short sequence.
2. The new matrix/result code was initially added as an **eager top-level module dependency** of the questionnaire page.
3. That meant a result-view module load/cache/MIME/network failure could prevent the questionnaire's `init()` from running at all.
4. CI 390×844 Chromium was treated too strongly as a “mobile technical pass”. It is a viewport simulation, not a real Android acceptance gate.
5. The first matrix implementation leaked a literal `\n` text node.
6. A deployed smoke initially assumed that every protocol-valid session must have one A-focus marker. That contradicted the existing no-focus rule.
7. Browser Print was described too close to “PDF export”; it is only a prototype Save-as-PDF path and depends on browser/system print support.
8. The intro status says images are being checked, while the current `init()` only fetches/validates the bank JSON structure. Full image preloading occurs only after Start. The wording overstates what the code actually checks.

## Remediation applied

Runtime result modules are now lazy:
- questionnaire bootstrap no longer eagerly imports the ship/map renderer or the 12×12 matrix;
- those modules load only when the result is needed;
- if the matrix fails to load/render, the app falls back to the existing result world instead of blocking the questionnaire.

A static boot watchdog was added:
- if the module bootstrap never reaches `init()` within 8 seconds, the intro no longer spins forever;
- it shows a concrete launch failure and a retry control.

The matrix HTML newline bug was corrected.

Technical evidence:
- logic smoke: `33955382277` SUCCESS;
- local 390×844 A+/B+ flow: `33955382425` SUCCESS;
- deployed owner-preview/API/real-390×844 smoke: `33955382325`, attempt 2, SUCCESS.

The first deploy attempt for this remediation failed during remote API byte verification after an earlier cancelled deployment sequence; rerunning cleanly succeeded. This is deployment-environment evidence, not a participant-logic failure.

## Current acceptance rule

Do **not** call the Android startup issue closed until the owner confirms the same URL starts on the same phone.

No new feature work should be added before that confirmation.

If the same phone still fails:
1. use the new boot-watchdog state to distinguish module bootstrap failure from bank validation;
2. isolate remaining core static imports one by one;
3. do not change construct logic, matrix geometry or PDF while diagnosing startup.
