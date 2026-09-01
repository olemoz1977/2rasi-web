# PrioLens perceived-sufficiency layer v0.2

Status: ACTIVE RESEARCH DRAFT / ALIGNED WITH OPEN14 v0.2
Date: 2026-09-01

## Purpose

Provide the second PrioLens observation after the visual task:

> how sufficiently broader need areas currently feel present in the person's life.

This is not a Maslow-stage test, diagnosis or validated need scale.

The visual task remains first to reduce priming. The sufficiency layer follows afterward.

## Participant-facing transition

### LT

**Dabar kita perspektyva.**

Čia nėra teisingų atsakymų. Įvertink ne tai, **kiek tau tai svarbu**, o kiek šiuo metu tavo gyvenime to **pakanka**.

## Response scale

1. **Visai nepakanka**
2. **Greičiau nepakanka**
3. **Per vidurį**
4. **Greičiau pakanka**
5. **Visiškai pakanka**

Additional non-scored option:
- **Sunku pasakyti**

Do not invert items and do not present this as a psychometric questionnaire.

## Six broad domains / 12 items

### D1 — Restoration & resources

1. Šiuo metu turiu pakankamai poilsio ir energijos kasdienybei.
2. Šiuo metu turiu pakankamai kasdienių resursų tam, ko man realiai reikia.

Closest visual families:
- REST;
- RESOURCE.

### D2 — Safety & stability

3. Šiuo metu jaučiu pakankamai saugumo ir stabilumo.
4. Mano kasdienybėje pakanka aiškumo ir nuspėjamumo, kad žinočiau, ko tikėtis.

Closest visual families:
- SAFETY;
- ORDER.

### D3 — Connection, belonging & support

5. Mano gyvenime pakanka artimo ryšio ir jausmo, kad priklausau kitiems.
6. Mano gyvenime pakanka rūpesčio, paramos ir žmogiško dėmesio.

Closest visual families:
- CONNECTION;
- BELONGING.

Important:
- visual CARE is **not** treated as equivalent to item 6;
- CARE in Open14 means acting for another person's welfare, including altruistic/proactive helping;
- item 6 measures perceived care/support present in one's life, which may largely concern receiving support;
- keep this asymmetry explicit rather than manufacturing a tidy mapping.

### D4 — Agency & esteem

7. Man svarbiose srityse turiu pakankamai laisvės pats spręsti ir veikti.
8. Jaučiu, kad mano pastangos, nuomonė ar indėlis yra pakankamai pastebimi ir vertinami.

Closest visual families:
- AUTONOMY;
- CONTROL (adjacent, not identical);
- RECOGNITION.

`SUCCESS / ACHIEVEMENT` is no longer an active visual family and is not used in this mapping.

### D5 — Growth & capability

9. Turiu pakankamai galimybių mokytis, atrasti ir augti.
10. Galiu pakankamai naudoti ir tobulinti savo gebėjimus.

Closest visual families:
- EXPLORATION;
- KNOWLEDGE / Learning-Understanding;
- OPPORTUNITY;
- MASTERY.

### D6 — Meaning & contribution

11. Tai, ką šiuo metu darau, man atrodo pakankamai prasminga.
12. Jaučiu, kad turiu pakankamai galimybių prisidėti prie kažko svarbaus ne tik sau.

No active Open14 v0.2 visual families map cleanly here.

Reflection/theory hold:
- PURPOSE / MEANING;
- CONTRIBUTION / SERVICE.

This asymmetry is intentional. Do not force abstract values into weak static images merely to make both channels symmetrical.

Justice/Fairness remains outside this short v0.2 layer.

## Data contract

Keep raw answers as canonical:

```text
sufficiency_schema: 2rasi.priolens.sufficiency-v0.2
items:
  RESTORATION_ENERGY: 1..5 | null
  MATERIAL_RESOURCES: 1..5 | null
  SAFETY_STABILITY: 1..5 | null
  CLARITY_PREDICTABILITY: 1..5 | null
  CONNECTION_BELONGING: 1..5 | null
  CARE_SUPPORT_PRESENT: 1..5 | null
  AUTONOMY_AGENCY: 1..5 | null
  RECOGNITION_ESTEEM: 1..5 | null
  LEARNING_GROWTH: 1..5 | null
  CAPABILITY_MASTERY: 1..5 | null
  MEANING_PURPOSE: 1..5 | null
  CONTRIBUTION: 1..5 | null
```

`null` means `Sunku pasakyti`, not zero.

Optional descriptive domain summaries may average available items, but raw items remain canonical.

## Interpretation boundary

Do not infer:
- a single global need stage;
- that a low score automatically causes a visual choice;
- that a high visual pull proves deprivation;
- that CARE visual pull equals lack of care/support;
- that meaning/contribution can be inferred from the absence of a visual counterpart.

Preferred term:
**current perceived sufficiency landscape**.

## UX target

12 taps, roughly 30–60 seconds.

Recommended presentation:
- 6 compact cards;
- 2 statements per card;
- one tap per statement;
- optional simple `x/6` progress;
- no explanatory detours between cards.

## Current decision

The layer is ready enough for runtime wiring after the visual scan. Do not keep polishing wording before real human data expose actual comprehension problems.
