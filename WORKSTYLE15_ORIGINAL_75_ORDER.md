# WorkStyle 15 — original 75 balanced order

Status: PRE-PILOT / FIXED ORDER
Last updated: 2026-08-23

Purpose: reproducible first-pilot presentation order for the preferred fully original 75-item LT bank.

Rules satisfied:
- 15 dimensions × 5 items;
- every 15-item section contains every dimension exactly once;
- 3 reverse-key items per 15-item section;
- no dimension blocks;
- items from the same dimension are separated by at least one full section;
- fixed order supports debugging and item-position analysis.

## Section 1 — items 1–15

| # | Item ID | Dimension |
|---:|---|---|
| 1 | KRY-01 | Kryptingumas |
| 2 | JAU-04 | Jautrumas |
| 3 | STR-02 | Struktūra |
| 4 | NUO-05 | Nuolankumas |
| 5 | BEN-03 | Bendradarbiavimas |
| 6 | KON-01 | Konceptualus mąstymas |
| 7 | RAM-04 | Ramybė |
| 8 | LAN-02 | Lankstumas |
| 9 | POZ-05 | Pozityvumas |
| 10 | TOB-03 | Tobulėjimas |
| 11 | SAV-01 | Savimonė |
| 12 | ASE-04 | Asertiškumas |
| 13 | AMB-02 | Ambicija |
| 14 | GYV-05 | Gyvybingumas |
| 15 | ITA-03 | Įtaka |

## Section 2 — items 16–30

| # | Item ID | Dimension |
|---:|---|---|
| 16 | NUO-01 | Nuolankumas |
| 17 | BEN-04 | Bendradarbiavimas |
| 18 | KRY-02 | Kryptingumas |
| 19 | JAU-05 | Jautrumas |
| 20 | STR-03 | Struktūra |
| 21 | POZ-01 | Pozityvumas |
| 22 | TOB-04 | Tobulėjimas |
| 23 | KON-02 | Konceptualus mąstymas |
| 24 | RAM-05 | Ramybė |
| 25 | LAN-03 | Lankstumas |
| 26 | GYV-01 | Gyvybingumas |
| 27 | ITA-04 | Įtaka |
| 28 | SAV-02 | Savimonė |
| 29 | ASE-05 | Asertiškumas |
| 30 | AMB-03 | Ambicija |

## Section 3 — items 31–45

| # | Item ID | Dimension |
|---:|---|---|
| 31 | JAU-01 | Jautrumas |
| 32 | STR-04 | Struktūra |
| 33 | NUO-02 | Nuolankumas |
| 34 | BEN-05 | Bendradarbiavimas |
| 35 | KRY-03 | Kryptingumas |
| 36 | RAM-01 | Ramybė |
| 37 | LAN-04 | Lankstumas |
| 38 | POZ-02 | Pozityvumas |
| 39 | TOB-05 | Tobulėjimas |
| 40 | KON-03 | Konceptualus mąstymas |
| 41 | ASE-01 | Asertiškumas |
| 42 | AMB-04 | Ambicija |
| 43 | GYV-02 | Gyvybingumas |
| 44 | ITA-05 | Įtaka |
| 45 | SAV-03 | Savimonė |

## Section 4 — items 46–60

| # | Item ID | Dimension |
|---:|---|---|
| 46 | BEN-01 | Bendradarbiavimas |
| 47 | KRY-04 | Kryptingumas |
| 48 | JAU-02 | Jautrumas |
| 49 | STR-05 | Struktūra |
| 50 | NUO-03 | Nuolankumas |
| 51 | TOB-01 | Tobulėjimas |
| 52 | KON-04 | Konceptualus mąstymas |
| 53 | RAM-02 | Ramybė |
| 54 | LAN-05 | Lankstumas |
| 55 | POZ-03 | Pozityvumas |
| 56 | ITA-01 | Įtaka |
| 57 | SAV-04 | Savimonė |
| 58 | ASE-02 | Asertiškumas |
| 59 | AMB-05 | Ambicija |
| 60 | GYV-03 | Gyvybingumas |

## Section 5 — items 61–75

| # | Item ID | Dimension |
|---:|---|---|
| 61 | STR-01 | Struktūra |
| 62 | NUO-04 | Nuolankumas |
| 63 | BEN-02 | Bendradarbiavimas |
| 64 | KRY-05 | Kryptingumas |
| 65 | JAU-03 | Jautrumas |
| 66 | LAN-01 | Lankstumas |
| 67 | POZ-04 | Pozityvumas |
| 68 | TOB-02 | Tobulėjimas |
| 69 | KON-05 | Konceptualus mąstymas |
| 70 | RAM-03 | Ramybė |
| 71 | AMB-01 | Ambicija |
| 72 | GYV-04 | Gyvybingumas |
| 73 | ITA-02 | Įtaka |
| 74 | SAV-05 | Savimonė |
| 75 | ASE-03 | Asertiškumas |

## Reverse-key positions

Reverse items are item `-05` in each dimension.

Presentation positions:
- 4, 9, 14;
- 19, 24, 29;
- 34, 39, 44;
- 49, 54, 59;
- 64, 69, 74.

This gives a regular 3-per-section balance without consecutive reverse items.

## Implementation note

For the first pilot, keep this order fixed.

If later introducing multiple forms/randomization, use constrained balanced orders only. Preserve:
- one item per dimension per 15-item section;
- reverse spacing;
- reproducible form/version ID.
