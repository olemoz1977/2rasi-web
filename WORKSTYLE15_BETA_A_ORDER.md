# WorkStyle 15 — Beta A balanced item order

Status: PRE-PILOT / REPRODUCIBLE ORDER
Last updated: 2026-08-23

## Purpose

This file fixes a first reproducible presentation order for the 75-item Beta A form without publishing legacy statement text.

Goals:
- no two items from the same dimension are adjacent;
- every 15-item section contains all five item types in balance: 3 × L1, 3 × L2, 3 × L3, 3 × new direct, 3 × new reverse;
- direct and reverse items from the same dimension are separated widely;
- reverse items are distributed rather than placed in one block;
- all 15 dimensions recur across the whole questionnaire rather than being shown as dimension blocks;
- IDs remain traceable for debugging and pilot analysis.

Legacy item IDs refer to source positions in `ADEPT15.xlsx` / `Žemelapis`.

## Section 1 — items 1–15

| # | Dimension | Item ID | Type |
|---:|---|---|---|
| 1 | Kryptingumas | L001 | Legacy 1 |
| 2 | Jautrumas | JAU+ | New direct |
| 3 | Struktūra | L012 | Legacy 2 |
| 4 | Nuolankumas | NUO-R | New reverse |
| 5 | Bendradarbiavimas | L028 | Legacy 3 |
| 6 | Konceptualus mąstymas | L052 | Legacy 1 |
| 7 | Ramybė | RAM+ | New direct |
| 8 | Lankstumas | L062 | Legacy 2 |
| 9 | Pozityvumas | POZ-R | New reverse |
| 10 | Tobulėjimas | L074 | Legacy 3 |
| 11 | Savimonė | L101 | Legacy 1 |
| 12 | Asertiškumas | ASE+ | New direct |
| 13 | Ambicija | L115 | Legacy 2 |
| 14 | Gyvybingumas | GYV-R | New reverse |
| 15 | Įtaka | L129 | Legacy 3 |

## Section 2 — items 16–30

| # | Dimension | Item ID | Type |
|---:|---|---|---|
| 16 | Nuolankumas | L041 | Legacy 1 |
| 17 | Bendradarbiavimas | BEN+ | New direct |
| 18 | Kryptingumas | L004 | Legacy 2 |
| 19 | Jautrumas | JAU-R | New reverse |
| 20 | Struktūra | L020 | Legacy 3 |
| 21 | Pozityvumas | L091 | Legacy 1 |
| 22 | Tobulėjimas | TOB+ | New direct |
| 23 | Konceptualus mąstymas | L057 | Legacy 2 |
| 24 | Ramybė | RAM-R | New reverse |
| 25 | Lankstumas | L065 | Legacy 3 |
| 26 | Gyvybingumas | L141 | Legacy 1 |
| 27 | Įtaka | ITA+ | New direct |
| 28 | Savimonė | L103 | Legacy 2 |
| 29 | Asertiškumas | ASE-R | New reverse |
| 30 | Ambicija | L119 | Legacy 3 |

## Section 3 — items 31–45

| # | Dimension | Item ID | Type |
|---:|---|---|---|
| 31 | Jautrumas | L031 | Legacy 1 |
| 32 | Struktūra | STR+ | New direct |
| 33 | Nuolankumas | L042 | Legacy 2 |
| 34 | Bendradarbiavimas | BEN-R | New reverse |
| 35 | Kryptingumas | L008 | Legacy 3 |
| 36 | Ramybė | L081 | Legacy 1 |
| 37 | Lankstumas | LAN+ | New direct |
| 38 | Pozityvumas | L092 | Legacy 2 |
| 39 | Tobulėjimas | TOB-R | New reverse |
| 40 | Konceptualus mąstymas | L059 | Legacy 3 |
| 41 | Asertiškumas | L131 | Legacy 1 |
| 42 | Ambicija | AMB+ | New direct |
| 43 | Gyvybingumas | L144 | Legacy 2 |
| 44 | Įtaka | ITA-R | New reverse |
| 45 | Savimonė | L104 | Legacy 3 |

## Section 4 — items 46–60

| # | Dimension | Item ID | Type |
|---:|---|---|---|
| 46 | Bendradarbiavimas | L023 | Legacy 1 |
| 47 | Kryptingumas | KRY+ | New direct |
| 48 | Jautrumas | L032 | Legacy 2 |
| 49 | Struktūra | STR-R | New reverse |
| 50 | Nuolankumas | L048 | Legacy 3 |
| 51 | Tobulėjimas | L071 | Legacy 1 |
| 52 | Konceptualus mąstymas | KON+ | New direct |
| 53 | Ramybė | L085 | Legacy 2 |
| 54 | Lankstumas | LAN-R | New reverse |
| 55 | Pozityvumas | L094 | Legacy 3 |
| 56 | Įtaka | L122 | Legacy 1 |
| 57 | Savimonė | SAV+ | New direct |
| 58 | Asertiškumas | L135 | Legacy 2 |
| 59 | Ambicija | AMB-R | New reverse |
| 60 | Gyvybingumas | L149 | Legacy 3 |

## Section 5 — items 61–75

| # | Dimension | Item ID | Type |
|---:|---|---|---|
| 61 | Struktūra | L011 | Legacy 1 |
| 62 | Nuolankumas | NUO+ | New direct |
| 63 | Bendradarbiavimas | L024 | Legacy 2 |
| 64 | Kryptingumas | KRY-R | New reverse |
| 65 | Jautrumas | L036 | Legacy 3 |
| 66 | Lankstumas | L061 | Legacy 1 |
| 67 | Pozityvumas | POZ+ | New direct |
| 68 | Tobulėjimas | L073 | Legacy 2 |
| 69 | Konceptualus mąstymas | KON-R | New reverse |
| 70 | Ramybė | L087 | Legacy 3 |
| 71 | Ambicija | L112 | Legacy 1 |
| 72 | Gyvybingumas | GYV+ | New direct |
| 73 | Įtaka | L124 | Legacy 2 |
| 74 | Savimonė | SAV-R | New reverse |
| 75 | Asertiškumas | L139 | Legacy 3 |

## Balance check

Across all 75 items:
- 15 dimensions × 5 items each;
- 45 legacy items;
- 15 new direct items;
- 15 new reverse candidates;
- each 15-item section contains 3 items of each source/type family;
- no dimension repeats inside a 15-item section.

## Pilot implementation note

For the first technical beta, keep this fixed order so sessions are reproducible and item-position effects are inspectable.

Later, if enough pilot data exists, compare:
- fixed balanced order;
- several pre-generated balanced forms;
- or constrained randomization.

Do not use unconstrained full randomization if it can accidentally create runs of one dimension, multiple reverse items, or semantically similar questions.
