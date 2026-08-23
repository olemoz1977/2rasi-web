# WorkStyle 15 — v0.6 ambiguity review

Status: COGNITIVE PILOT FINDINGS / ACTION REQUIRED
Date: 2026-08-23

## Core finding

A statement can use simple Lithuanian and still be cognitively ambiguous.

The main source of ambiguity in the v0.6 screenshots is not vocabulary difficulty. It is **missing situational boundaries**: the respondent has to invent the context before they can rate their behaviour.

Rule going forward:

> The respondent should rate their usual work behaviour, not solve what situation the item author probably had in mind.

## Ambiguity patterns to screen for

### 1. Undefined magnitude or time
Words such as `greitai`, `ilgiau`, `dažnai`, `reikia laiko`, `svarbus` can change meaning dramatically by context.

Bad pattern:
- a five-minute disruption and a serious operational crisis would rationally produce different answers;
- the item does not tell the respondent which kind of event is meant.

### 2. Rationality trap
Some reverse items describe behaviour that can be perfectly rational rather than a low pole of the construct.

Examples:
- not changing a work method that gives a good result;
- solving a truly one-off problem without searching for system causes;
- doing a task independently when coordination adds no value.

Such items should not be reverse-scored as if the behaviour were automatically the opposite of the target construct.

### 3. Role / authority dependency
An answer changes depending on job role, formal authority, confidentiality, responsibility boundaries or access to information.

The item should avoid measuring position in the organization instead of work style.

### 4. Hidden-context dependency
Generic nouns such as `problema`, `sprendimas`, `informacija`, `nesėkmė`, `rezultatas` can be too broad when the expected behaviour depends on what exactly happened.

### 5. Self-analysis instead of behaviour
Items that ask the person to know their hidden bias, causal contribution or emotional process can be harder to answer reliably than items about something they actually do.

Prefer observable or recallable behaviour.

### 6. Socially obvious reverse pole
A reverse item should describe a legitimate alternative tendency, not make one answer sound obviously careless, selfish, irrational or emotionally weak.

### 7. Two decisions inside one item
If the respondent must first decide whether a behaviour is justified and only then decide whether they do it, the item contains an extra cognitive task.

## Screenshots / items flagged in the v0.6 pass

### REG-05
Current:
`Po netikėtos problemos man dažnai reikia laiko grįžti į įprastą darbo ritmą.`

Ambiguity:
- size/severity of the problem is undefined;
- `reikia laiko` has no meaningful anchor;
- nearly everyone needs *some* time after some problems.

Rewrite direction:
Measure lingering disruption after the practical problem is already dealt with.

Candidate:
`Kai netikėta problema jau sutvarkyta, man dar kurį laiką sunku susikaupti darbui.`

### OUT-02
Current:
`Po nesėkmės gana greitai pereinu prie to, ką galima daryti toliau.`

Ambiguity:
- `nesėkmė` ranges from a small mistake to a major failure;
- `gana greitai` is subjective;
- recovery speed partly overlaps Emotional Regulation.

Rewrite direction:
Measure attention orientation after setback, not time-to-recovery.

Candidate:
`Kai kas nors nepavyksta, dėmesį nukreipiu į tai, ką dar galiu pakeisti.`

### LRN-02
Current:
`Kai noriu pasitikrinti savo sprendimą, klausiu ir tų, kurie jį mato kitaip.`

Ambiguity:
- assumes the respondent deliberately identifies dissenting people;
- not every role or decision provides that opportunity;
- partly measures decision style / openness rather than learning behaviour.

Rewrite direction:
Ask for concrete feedback-seeking behaviour.

Candidate:
`Paprašau kitų pasakyti, ką mano darbe būtų galima padaryti geriau.`

### COP-02
Current:
`Jei informacija gali paveikti kolegų darbą, pasidalinu ja nelaukdamas, kol jie paklaus.`

Ambiguity:
- `gali paveikti` is very broad;
- appropriateness can depend on confidentiality and responsibility boundaries.

Rewrite direction:
Make information need explicit.

Candidate:
`Kai žinau, kad kolegai mano turima informacija reikalinga jo darbui, ja pasidalinu.`

### PER-02
Current:
`Jei svarbus darbas užtrunka ilgiau, negu tikėjausi, prie jo grįžtu ir tęsiu.`

Ambiguity:
- `svarbus` and `užtrunka ilgiau` are respondent-defined;
- some work cannot meaningfully be paused and resumed;
- external delays can dominate the answer.

Rewrite direction:
Use unfinished important work rather than duration estimate.

Candidate:
`Jei svarbios užduoties nepavyksta užbaigti iš karto, vėliau prie jos grįžtu.`

### LRN-05 · R
Current:
`Jei mano darbo būdas duoda gerą rezultatą, paprastai jo nekeičiu.`

Ambiguity:
- this is often rational process discipline;
- it does not cleanly represent low Learning Orientation;
- reverse scoring can punish stable good practice.

Decision:
**Replace, not polish.**

Candidate low-pole behaviour:
`Naujus darbo būdus dažniausiai išbandau tik tada, kai senasis nebeveikia.`

This represents reactive rather than proactive learning and is a more legitimate opposite tendency.

### REF-05 · R
Current:
`Kai problema jau išspręsta, dažniausiai prie savo vaidmens joje nebegrįžtu.`

Ambiguity:
- `savo vaidmuo` is abstract;
- returning to a solved problem may be unnecessary in many situations;
- the item can measure efficiency / closure rather than low reflection.

Decision:
**Replace, not polish.**

Candidate:
`Kai problema išspręsta, retai pagalvoju, ką kitą kartą pats daryčiau kitaip.`

Before release, make the final Lithuanian wording gender-neutral without parenthetical suffixes.

## Public UI rule learned from pilot

The respondent-facing UI should not explain internal scoring mechanics unless they are necessary to answer the question.

The statement that `Sunku įvertinti` is not converted to `3` came from an internal pilot reflection. It is useful for methodology documentation, but it should **not** be shown as respondent-facing explanatory copy.

Public UI should simply provide:
- 1–5 typicality scale;
- a separate `Sunku įvertinti / neteko tokios situacijos` option;
- concise explanation that 3 means `Kartais taip, kartais ne` if needed.

Internal scoring continues to treat `Sunku įvertinti` as missing (`NA`), not as a scored midpoint.

## Next gate

Before another broad rewrite:
1. remove internal scoring commentary from public UI;
2. replace the items above that contain structural ambiguity;
3. re-check all 45 items against the seven ambiguity patterns;
4. only then create the next cognitive version.
