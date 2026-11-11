# WorkStyle v0.7 — Pilot Data Collection Plan

Status: IMPLEMENTATION PLAN / COGNITIVE PILOT
Date: 2026-08-23

## Goal

Collect cognitive-pilot evidence with as little tester friction as possible while preserving an auditable raw session record.

The tester should not need to download a JSON file and send it manually as the primary workflow.

## Recommended collection model

### Primary path

At the end of the pilot the tester presses:

**Pateikti piloto duomenis**

The browser sends one anonymous session payload to a small HTTPS endpoint.

Expected UX:
1. complete questionnaire;
2. optionally leave general feedback;
3. press `Pateikti piloto duomenis`;
4. receive `Ačiū — sesija gauta` confirmation.

### Fallback path

Keep:

**Atsisiųsti anoniminį JSON**

Reasons:
- debugging;
- audit/reproducibility;
- temporary server failure;
- internal testing;
- ability to recover a session manually.

JSON is therefore an audit/fallback mechanism, not the normal tester workflow.

---

## What one session should contain

### Instrument metadata
- schema version;
- instrument version;
- anonymous session ID;
- form/language;
- started/completed timestamps;
- item order.

### Item-level evidence
For every item:
- item ID;
- axis ID hidden from respondent;
- answer kind (`scale`, `context`, `na`);
- scale value where applicable;
- item active response time;
- `unclear` flag;
- `duplicate` flag.

### Block-level timing
The 34-item cognitive form should be presented as three blocks:
- block 1: 12 items;
- block 2: 11 items;
- block 3: 11 items.

Store:
- active item time per block;
- break start/end or break duration separately;
- do NOT add break duration to item latency.

This allows fatigue/learning effects to be inspected without treating a real break as slow answering.

### End feedback
- free-text overall experience;
- later: optional feedback tags if useful.

---

## Minimal tester context

For the cognitive pilot, collect only information that can plausibly help interpret wording/context problems.

Recommended optional pre-test fields:

1. **Darbo vaidmuo**
   - individual contributor / specialistas;
   - komandos vadovas / meistras / team lead;
   - vadovas;
   - kita.

2. **Darbo patirties intervalas**
   - <2 years;
   - 2–5;
   - 6–10;
   - 11–20;
   - 20+.

3. **Darbo aplinkos tipas** (broad, optional)
   - production / operations;
   - office / professional;
   - service / customer-facing;
   - project / technical;
   - other.

4. **Lithuanian comprehension** (important for a Lithuanian cognitive wording pilot)
   - native / very strong;
   - strong working proficiency;
   - other.

Do not collect name, employer, email, exact job title, date of birth, or other identifying fields for this small wording/construct pilot unless there is a separate research need.

Age and gender are not required for the first 6–10-person cognitive pilot because the immediate question is item comprehension/distinctness, not subgroup psychometrics.

---

## Technical recommendation

### Preferred pilot backend

A tiny serverless ingestion endpoint is sufficient.

Recommended architecture:

`2rasi.com static form -> HTTPS POST -> serverless endpoint -> small database/raw-session store`

A Cloudflare Worker + D1 (or equivalent simple serverless store) is a good fit because:
- 2rasi remains static;
- no database credentials are exposed in the browser;
- the endpoint can validate schema/version;
- CORS can be restricted to 2rasi.com;
- each session can be stored as raw JSON plus indexed metadata;
- the same pipeline can grow into later pilots.

Do not put a writable database credential or private API secret into the frontend.

### Minimal endpoint behaviour

`POST /workstyle/v07/session`

Server should:
1. accept JSON only;
2. validate allowed schema/version;
3. enforce payload size limit;
4. generate/confirm receipt ID;
5. reject duplicate session IDs or make submission idempotent;
6. store raw payload unchanged;
7. record server receipt timestamp;
8. return only a success/receipt response.

No profile calculation is required server-side during cognitive pilot.

---

## Data table concept

One row/session is enough initially.

Fields:
- receipt_id;
- session_id (unique);
- instrument_version;
- language;
- role_band (optional);
- experience_band (optional);
- work_environment (optional);
- language_comprehension (optional);
- started_at;
- completed_at;
- received_at;
- payload_json.

Later analysis can unpack item-level data from payload JSON without prematurely freezing a complex database schema.

---

## Privacy copy for pilot

Respondent-facing wording should remain plain:

> Šis yra bandomasis WorkStyle klausimynas. Jei sutinki, baigus anoniminiai atsakymai ir atsakymo laikas bus perduoti tyrimo analizei. Vardo, el. pašto ar darbdavio neprašome.

Do not claim stronger anonymity/privacy guarantees until the exact endpoint/logging configuration is implemented and checked.

---

## Pilot operational workflow

For the next small pilot:

- normal route: tester completes -> presses submit -> session appears in pilot store;
- fallback: tester downloads JSON and sends it manually;
- analysis uses the same schema for both server-submitted and manually imported sessions.

This prevents two different analysis pipelines.

---

## Decision

**Do not use manual JSON exchange as the primary pilot collection method.**

Build automatic anonymous submission before inviting a wider group than the immediate internal testers.

Keep JSON export permanently as a research/debug fallback.
