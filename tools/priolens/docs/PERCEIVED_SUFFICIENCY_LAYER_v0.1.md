# PrioLens perceived-sufficiency layer v0.1

Status: ACTIVE COPY / RESEARCH DRAFT
Date: 2026-08-31

## Purpose

Provide the second PrioLens observation after the visual task:

> how sufficiently broader need areas currently feel represented in the person's life.

This is **not** a Maslow-stage test, diagnosis or validated need scale.

The layer is intentionally short and follows the visual task so it cannot prime the visual choices.

## Participant-facing transition

### LT

**Dabar kita perspektyva.**

Čia nėra teisingų atsakymų. Įvertink ne tai, **kiek tau tai svarbu**, o kiek šiuo metu tavo gyvenime to **pakanka**.

### EN working translation

**Now, another perspective.**

There are no right answers here. Rate not how **important** each area is to you, but how sufficiently it feels **present in your life right now**.

## Response scale

Use one consistent 5-point scale for all items:

1. **Visai nepakanka**
2. **Greičiau nepakanka**
3. **Per vidurį**
4. **Greičiau pakanka**
5. **Visiškai pakanka**

Additional non-scored option:
- **Sunku pasakyti**

Do not invert items. Do not turn this into a psychometric-looking questionnaire.

## Six macro domains / 12 items

### D1 — Restoration & resources

**LT1.** Šiuo metu turiu pakankamai poilsio ir energijos kasdienybei.

**LT2.** Šiuo metu turiu pakankamai kasdienių resursų tam, ko man realiai reikia.

Open14 visual mapping candidates:
- REST;
- RESOURCE.

### D2 — Safety & stability

**LT3.** Šiuo metu jaučiu pakankamai saugumo ir stabilumo.

**LT4.** Mano kasdienybėje pakanka aiškumo ir nuspėjamumo, kad žinočiau, ko tikėtis.

Open14 visual mapping candidates:
- SAFETY;
- ORDER.

### D3 — Connection & care

**LT5.** Mano gyvenime pakanka artimo ryšio ir priklausymo kitiems jausmo.

**LT6.** Mano gyvenime pakanka rūpesčio, paramos ir žmogiško dėmesio.

Open14 visual mapping candidates:
- CONNECTION;
- CARE.

Important: LT6 describes perceived presence of care in the person's life. It does not distinguish receiving care from giving care. If later evidence shows that distinction matters, split it rather than pretending one item solves both.

### D4 — Agency & esteem

**LT7.** Man svarbiose srityse turiu pakankamai laisvės pats spręsti ir veikti.

**LT8.** Jaučiu, kad mano pastangos ir rezultatai yra pakankamai pastebimi ir įvertinti.

Open14 visual mapping candidates:
- AUTONOMY;
- CONTROL partially;
- RECOGNITION;
- SUCCESS partially.

Important: CONTROL and SUCCESS do not map one-to-one onto these two self-report items. Do not manufacture exact equivalence merely for a tidy chart.

### D5 — Growth & capability

**LT9.** Turiu pakankamai galimybių mokytis, atrasti ir augti.

**LT10.** Galiu pakankamai naudoti ir tobulinti savo gebėjimus.

Open14 visual mapping candidates:
- EXPLORATION;
- KNOWLEDGE;
- OPPORTUNITY;
- MASTERY.

### D6 — Meaning & contribution

**LT11.** Tai, ką šiuo metu darau, man atrodo pakankamai prasminga.

**LT12.** Jaučiu, kad turiu pakankamai galimybių prisidėti prie kažko svarbaus ne tik sau.

Reflection-only / deferred visual candidates:
- PURPOSE / MEANING;
- CONTRIBUTION / SERVICE.

Justice/Fairness remains outside v0.1 of this short layer. Reason: adding it to the same domain would mix perceived meaning/contribution with fairness of treatment. If Justice stays theoretically important, it should receive its own item later rather than be hidden inside a composite.

## Data contract

Keep raw answers, not only domain averages.

Suggested fields:

```text
sufficiency_schema: 2rasi.priolens.sufficiency-v0.1
items:
  RESTORATION_ENERGY: 1..5 | null
  MATERIAL_RESOURCES: 1..5 | null
  SAFETY_STABILITY: 1..5 | null
  CLARITY_PREDICTABILITY: 1..5 | null
  CONNECTION_BELONGING: 1..5 | null
  CARE_SUPPORT: 1..5 | null
  AUTONOMY_AGENCY: 1..5 | null
  RECOGNITION_ESTEEM: 1..5 | null
  LEARNING_GROWTH: 1..5 | null
  CAPABILITY_MASTERY: 1..5 | null
  MEANING_PURPOSE: 1..5 | null
  CONTRIBUTION: 1..5 | null
```

`null` means `Sunku pasakyti`, not zero.

Optional descriptive domain summaries may average the two non-null items in each domain, but raw items remain canonical.

## Comparison with visual priority

Do not directly subtract one score from another as if both are the same scale.

Initial comparison is descriptive:

### Pattern A — lower sufficiency + repeated visual pull

Possible reflection:
> Ši sritis tavo greituose pasirinkimuose kartojosi, nors pats vertini, kad šiuo metu jos gyvenime nėra daug.

Research reading:
- currently salient candidate;
- **not** proof of an unmet need.

### Pattern B — higher sufficiency + repeated visual pull

Possible reflection:
> Ši sritis tavo pasirinkimuose kartojosi ir kartu atrodo pakankamai esanti tavo gyvenime.

Research reading:
- may be positively valued / active even without experienced lack.

### Pattern C — lower sufficiency + little visual pull

Possible reflection:
> Pats šią sritį vertini kaip mažiau patenkintą, bet šiame vaizdų rinkinyje ji retai laimėjo.

Research reading remains ambiguous:
- weak stimuli;
- avoidance;
- fatigue;
- competing priorities;
- state/context;
- or no meaningful relation.

### Pattern D — higher sufficiency + little visual pull

Possible reflection:
> Ši sritis šiuo metu atrodo pakankamai stabili ir šiame vaizdų rinkinyje retai iškilo į pirmą planą.

Do not label automatically as `settled need` until evidence supports that interpretation.

## UX target

12 taps should add roughly **30–60 seconds**, not turn PrioLens into a questionnaire.

Recommended presentation:
- 6 compact cards;
- 2 statements per card;
- one tap per statement;
- no long explanatory copy between cards;
- no progress psychology beyond simple `x/6` if useful.

## Current decision

The sufficiency layer is structurally ready enough to prototype after the Open14 visual scan.

Do not polish wording endlessly before the visual bank is ready. The larger uncertainty remains stimulus/family behavior, not whether LT3 should say `stabilumo` or `pastovumo`.
