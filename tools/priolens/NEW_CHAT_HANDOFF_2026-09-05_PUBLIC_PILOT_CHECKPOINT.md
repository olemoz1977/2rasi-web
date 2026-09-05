# PrioLens v0.4 PUBLIC PILOT checkpoint — 2026-09-05 22:11 EEST

Status: **CURRENT SOURCE OF TRUTH**

This checkpoint supersedes earlier notes that said v0.4 promotion was still pending or that live v0.2 remained the public participant boundary.

## Runtime

Participant runtime:
`https://omesg360.eu/priolens-open14-v04/`

API:
`https://omesg360.eu/priolens-open14-v04-api/`

Research admin:
`https://omesg360.eu/priolens-open14-v04-api/admin.php`

Current runtime branch:
`olemoz1977/omesg360:feature/priolens-open14-v04`

Architecture/source-of-truth branch:
`olemoz1977/2rasi-web:feature/priolens-architecture`

## Public pilot boundary

Owner stated on 2026-09-05 that the public link had been published about 3 hours before the 21:08 EEST review.

Use approximately **2026-09-05 18:08 EEST** as the first public-cohort cutoff for analysis unless a more precise publication timestamp is later recovered.

Important:
- records before this cutoff are retained in DB but should not automatically count as public-pilot N;
- `systemSmoke:true` sessions are technical and must be excluded from research N;
- older manual/dev sessions may not carry `systemSmoke`, so time/provenance still matters;
- do not delete old sessions merely to simplify analysis.

Initial exported JSONL snapshot reviewed on 2026-09-05 contained 21 sessions total, 19 complete and 2 incomplete, but these counts are historical and dynamic. Do not reuse them as current DB totals without a fresh export/admin read.

## First public feedback

First tester feedback:
- mobile: “telefone šiek tiek keblu matyt”;
- “Abu panašiai” was noticed as not always available.

Data inspection showed that the missing “Abu panašiai” case was protocol-consistent when no MOST choice existed, not evidence of a functional bug.

The useful UX diagnosis was different: rollback + similar-option controls had begun to compete visually with the primary LEAST task.

## Accepted MOST / LEAST interaction

Owner visually accepted the final Android state at 22:11 EEST.

### Before MOST
- only the three images + `Nė vienas aiškiai` are relevant;
- `Keisti pirmą` and `Abu panašiai` are hidden and disabled;
- instruction:
  - **Kuri nuotrauka pirmiausia patraukia tavo dėmesį?**
  - **Pažymėk vieną nuotrauką. Rinkis pirmą impulsą.**

### After MOST / LEAST state
- selected MOST image remains visible for context but is immediately visually de-emphasized;
- `PIRMAS` marker remains visible;
- the other two images stay full visual weight and are the primary LEAST targets;
- instruction:
  - **Kuri iš dviejų likusių nuotraukų traukia mažiausiai?**
  - **Pažymėk vieną iš dviejų. Jei abu traukia panašiai, rinkis „Abu panašiai“.**
- `Keisti pirmą` is a weak recovery action;
- `Abu panašiai` is an exception/fallback, not a co-equal primary action;
- owner screenshot acceptance: **VEIKIA**.

Do not redesign this state again without repeated real-user evidence.

## Undo / RT rule

Same-trial undo remains allowed before LEAST is finalized.

When MOST is undone:
- original MOST choice and RT are preserved in `attentionRevisions`;
- final trial is marked `mostRevised:true`;
- revised MOST trials are excluded from the aggregate spontaneous MOST RT median;
- LEAST RT remains recorded separately.

This preserves error recovery without silently contaminating the RT aggregate.

## Data collection and admin

Current architecture:
browser -> v0.4 `api.php` / `progress.php` -> protected DB config -> MySQL table `priolens_open14_sessions`.

Admin:
- read-only;
- protected by separate `admin-secret.php`;
- `config.php` contains DB credentials only;
- `config.php` and `admin-secret.php` are web-blocked with HTTP 403;
- no admin password is stored in repo/docs.

Admin exposes, among other diagnostics:
- complete/incomplete sessions;
- LT/EN;
- NCC;
- MOST/LEAST separately;
- MOST RT median excluding revised MOST;
- LEAST RT median;
- A/A+ focus/source;
- B/B+ distributions/routes;
- slot-position diagnostics;
- CSV summary + raw JSONL;
- `systemSmoke:true` excluded by default.

Methodological boundary:
**do not create an artificial MOST-minus-LEAST score.**

## Interpretation boundary

Current deterministic participant interpretation remains:
- general reflection, not diagnosis/personality conclusion;
- B/B+ current insufficiency is narrative anchor;
- raw MOST 3/3 and 2/3 repetitions contribute;
- A+ clarifies one direction but does not erase raw repeats;
- exact 3/3 LEAST can only be weak contrast;
- LEAST never means dislike/unimportance;
- no A -> B causality;
- no hidden/true-need claims;
- if no defensible bridge exists, do not manufacture one.

Do not introduce runtime LLM interpretation yet.

## Latest accepted technical gate

Final accepted UI/deploy:
- runtime commit: `660ec63f19cc0288b4ebc7bd1f0a2e426900b246`;
- final deploy run: `33986214567` (run 176);
- job: `101360063259`;
- result: **SUCCESS**;
- API/route checks: PASS;
- preview bytes/MIME: PASS;
- deployed 390x844 participant flow: PASS;
- final DB save: PASS.

## Next work

Primary next task is **pilot observation, not more speculative UI redesign**.

Watch:
- completion/drop-off from the public cutoff;
- mobile vs desktop qualitative feedback when available;
- `Abu panašiai` frequency, especially if repeatedly high on mobile;
- NCC rate;
- A+ frequency;
- RT distributions only after excluding revised MOST and dev/smoke sessions;
- repeated user confusion around any specific step.

Change the UI only when a repeated signal or clear functional failure justifies it.
