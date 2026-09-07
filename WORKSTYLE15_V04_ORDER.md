# WorkStyle 15 — v0.4 balanced pilot order

Status: PILOT-FROZEN ORDER
Instrument: WorkStyle 15 v0.4 LT
Last updated: 2026-08-23

Purpose: reproducible first-pilot presentation order using the current v0.4 item IDs.

Rules:
- 15 dimensions × 5 items = 75;
- every 15-item section contains every dimension exactly once;
- exactly 3 reverse-key items per section;
- no dimension blocks;
- items from the same dimension are separated across sections;
- fixed order supports debugging, abandonment analysis and position effects.

## Section 1 — items 1–15

| # | Item ID | Dimension |
|---:|---|---|
| 1 | PER-01 | Kryptingumas |
| 2 | EMP-04 | Empatinis dėmesys |
| 3 | ORG-02 | Struktūra |
| 4 | HUM-05 | Intelektinis nuolankumas |
| 5 | COP-03 | Bendradarbiavimas |
| 6 | SYS-01 | Sisteminis mąstymas |
| 7 | REG-04 | Emocinė savitvarda |
| 8 | ADP-02 | Prisitaikymas |
| 9 | OUT-05 | Konstruktyvus požiūris |
| 10 | LRN-03 | Mokymosi orientacija |
| 11 | REF-01 | Reflektyvi savimonė |
| 12 | AST-04 | Asertyvus komunikavimas |
| 13 | ACH-02 | Pasiekimų siekis |
| 14 | ENG-05 | Socialinė energija |
| 15 | INF-03 | Įtaka |

## Section 2 — items 16–30

| # | Item ID | Dimension |
|---:|---|---|
| 16 | HUM-01 | Intelektinis nuolankumas |
| 17 | COP-04 | Bendradarbiavimas |
| 18 | PER-02 | Kryptingumas |
| 19 | EMP-05 | Empatinis dėmesys |
| 20 | ORG-03 | Struktūra |
| 21 | OUT-01 | Konstruktyvus požiūris |
| 22 | LRN-04 | Mokymosi orientacija |
| 23 | SYS-02 | Sisteminis mąstymas |
| 24 | REG-05 | Emocinė savitvarda |
| 25 | ADP-03 | Prisitaikymas |
| 26 | ENG-01 | Socialinė energija |
| 27 | INF-04 | Įtaka |
| 28 | REF-02 | Reflektyvi savimonė |
| 29 | AST-05 | Asertyvus komunikavimas |
| 30 | ACH-03 | Pasiekimų siekis |

## Section 3 — items 31–45

| # | Item ID | Dimension |
|---:|---|---|
| 31 | EMP-01 | Empatinis dėmesys |
| 32 | ORG-04 | Struktūra |
| 33 | HUM-02 | Intelektinis nuolankumas |
| 34 | COP-05 | Bendradarbiavimas |
| 35 | PER-03 | Kryptingumas |
| 36 | REG-01 | Emocinė savitvarda |
| 37 | ADP-04 | Prisitaikymas |
| 38 | OUT-02 | Konstruktyvus požiūris |
| 39 | LRN-05 | Mokymosi orientacija |
| 40 | SYS-03 | Sisteminis mąstymas |
| 41 | AST-01 | Asertyvus komunikavimas |
| 42 | ACH-04 | Pasiekimų siekis |
| 43 | ENG-02 | Socialinė energija |
| 44 | INF-05 | Įtaka |
| 45 | REF-03 | Reflektyvi savimonė |

## Section 4 — items 46–60

| # | Item ID | Dimension |
|---:|---|---|
| 46 | COP-01 | Bendradarbiavimas |
| 47 | PER-04 | Kryptingumas |
| 48 | EMP-02 | Empatinis dėmesys |
| 49 | ORG-05 | Struktūra |
| 50 | HUM-03 | Intelektinis nuolankumas |
| 51 | LRN-01 | Mokymosi orientacija |
| 52 | SYS-04 | Sisteminis mąstymas |
| 53 | REG-02 | Emocinė savitvarda |
| 54 | ADP-05 | Prisitaikymas |
| 55 | OUT-03 | Konstruktyvus požiūris |
| 56 | INF-01 | Įtaka |
| 57 | REF-04 | Reflektyvi savimonė |
| 58 | AST-02 | Asertyvus komunikavimas |
| 59 | ACH-05 | Pasiekimų siekis |
| 60 | ENG-03 | Socialinė energija |

## Section 5 — items 61–75

| # | Item ID | Dimension |
|---:|---|---|
| 61 | ORG-01 | Struktūra |
| 62 | HUM-04 | Intelektinis nuolankumas |
| 63 | COP-02 | Bendradarbiavimas |
| 64 | PER-05 | Kryptingumas |
| 65 | EMP-03 | Empatinis dėmesys |
| 66 | ADP-01 | Prisitaikymas |
| 67 | OUT-04 | Konstruktyvus požiūris |
| 68 | LRN-02 | Mokymosi orientacija |
| 69 | SYS-05 | Sisteminis mąstymas |
| 70 | REG-03 | Emocinė savitvarda |
| 71 | ACH-01 | Pasiekimų siekis |
| 72 | ENG-04 | Socialinė energija |
| 73 | INF-02 | Įtaka |
| 74 | REF-05 | Reflektyvi savimonė |
| 75 | AST-03 | Asertyvus komunikavimas |

## Reverse-key positions

Reverse items are every dimension's `-05` item.

Presentation positions:
- 4, 9, 14;
- 19, 24, 29;
- 34, 39, 44;
- 49, 54, 59;
- 64, 69, 74.

## Form identity

Recommended implementation identifier: `workstyle15-lt-v0.4-form-a`.

Keep this order fixed during the first cognitive/early pilot. Any later randomized or alternate form must receive its own form/version ID.