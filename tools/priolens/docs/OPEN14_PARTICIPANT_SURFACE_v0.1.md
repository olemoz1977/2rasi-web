# PrioLens participant surface v0.1

Status: ACTIVE CHECKPOINT / PRE-PILOT PARTICIPANT SURFACE
Date: 2026-09-02

## Trigger

Owner review identified two product-facing problems after the technical pre-pilot smoke:

1. `Open14` was visible in the participant UI even though it is an internal research / architecture codename.
2. the result screen looked like a research diagnostic output (`0/2`, `2/2`, decimals, bars, technical summary) rather than the product promise expressed by the PrioLens card.

This checkpoint changes participant presentation only. It does **not** change the frozen Open14 v0.2 research model, data schema, family logic, CARE rule, cohort rule or backend semantics.

## Naming boundary

`Open14` remains valid internally for:
- repository paths and technical filenames;
- planner / bank / schema identifiers;
- DB / API / telemetry;
- research documentation and analysis.

`Open14` is **not** participant-facing product copy.

Participant-facing name:
> **PrioLens**

Participant-facing status label:
- LT: `Tyrimo prototipas`
- EN: `Research prototype`

The browser title is now:
`PrioLens · 2rasi`.

The runtime URL may still contain the internal route name; this checkpoint does not rename infrastructure paths.

## Intro surface

The participant intro is intentionally simpler than the 2rasi PrioLens landing page.

The landing explains what PrioLens is. The runtime intro prepares the participant to act.

Current LT framing:
- `Kuris pirmas patraukia?`
- `Trys vaizdai vienu metu. Nesvarstyk, kuris „geresnis“. Pasirink tą, į kurį pirmiausia krypsta dėmesys.`
- `14 trumpų pasirinkimų · apie 2 min. Po jų į tą pačią situaciją pažvelgsi iš kitos perspektyvos.`

EN is semantically matched.

The image-bank readiness card is hidden after a successful check. It remains visible only when useful, such as:
- loading / failure;
- missing assets;
- resume information.

Retention / research-prototype wording remains visible and conservative. The 90-day period is still described as intended, not guaranteed, until cleanup cron is operational.

## Result presentation rule

Participant result hierarchy is now:

1. **Pirmas žvilgsnis / First glance**
2. **Antras atsakymas / Second answer**
3. **Pažvelk dar kartą / Look again**

This directly fulfills the public PrioLens promise:
> `Pirmas žvilgsnis ir antras atsakymas ne visada rodo tą patį.`

### First glance

Show only cross-exemplar repeated visual themes as participant evidence.

Do not show technical selection ratios or bars in normal participant mode.

If no family satisfies the cross-exemplar repetition rule, explicitly say that no theme repeated across both different images.

### Second answer

Only complete 2/2 sufficiency domains receive a participant-facing interpretation.

Participant-facing presentation uses broad descriptive states rather than fake precision:
- lower current sufficiency;
- in between;
- higher current sufficiency.

Do not show `0/2`, `1/2`, `2/2`, decimal averages or bars in normal participant mode.

Incomplete domains remain available in the stored research payload but are omitted from the main participant interpretation. If some are omitted, show one concise note. If none are complete, say that this perspective is not interpreted in the session.

### Look again

Only comparisons already allowed by the frozen research logic may appear.

A comparison requires:
- a cross-exemplar repeated visual family;
- a complete mapped sufficiency domain.

CARE remains excluded from direct CARE <-> received-support comparison according to `OPEN14_CARE_ANALYSIS_RULE_v0.1.md`.

Meaning / Contribution remains contextual-only because it has no active visual counterpart.

If there is no valid comparison, say so without implying failure or forcing a profile.

### Combined no-comparison edge

The exact pre-pilot edge case used during owner smoke is now handled explicitly:
- no cross-exemplar repeated visual family;
- no complete sufficiency domain because the participant used `Sunku pasakyti / Hard to say` throughout.

The participant result must explain **both** reasons instead of presenting only one of them.

Current LT wording:
> `Ši sesija nesukūrė aiškaus dviejų perspektyvų sugretinimo: pirmame žvilgsnyje nebuvo pasikartojimo, o antram atsakymui nepakako aiškių įverčių.`

EN is semantically matched.

## Technical detail boundary

Raw JSON and research diagnostics remain debug-only (`?debug=1`).

All underlying values, coverage information and telemetry continue to be stored for research analysis. The participant surface is simplified; the research payload is not.

## Runtime implementation

Runtime repository:
`olemoz1977/omesg360`

Runtime file:
`priolens/open14-v02/index.html`

Main participant-surface runtime commit:
`caa49b0dcb372fc085e79ec15fbd3fce66dd6d12`

Main deployment workflow run:
`33622563632` — SUCCESS, including live-source smoke.

Latest edge-case runtime commit:
`542f55627cee2f1039dc15c3c91de7eb0770054d`

Latest edge-case deployment workflow run:
`33622980671` — SUCCESS, including live-source smoke.

## Recruitment consequence

This participant-surface change is a pre-pilot hardening correction, not pilot evidence.

External recruitment remains CLOSED until the remaining canonical hardening items are complete and `PILOT_OPENED_AT_UTC` is explicitly recorded.
