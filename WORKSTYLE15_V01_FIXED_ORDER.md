# WorkStyle 15 — v0.1 balanced fixed item order

Status: PRE-PILOT / REPRODUCIBLE ORDER
Last updated: 2026-08-23

Purpose: provide one deterministic 75-item presentation order for the LT beta.

Rules used:
- 5 blocks × 15 items;
- every block contains exactly one item from each of the 15 dimensions;
- every block contains exactly 3 reverse-key items;
- dimensions from the same domain are interleaved rather than grouped;
- each dimension contributes each of its five items exactly once across the full questionnaire;
- this order is a pilot baseline, not a psychometric claim that fixed ordering is optimal.

## Block 1 — items 1–15

1. PER-01
2. EMP-03
3. SYS-04
4. AST-05 · R
5. ORG-02
6. OUT-04
7. COP-02
8. ENG-02
9. ACH-03
10. REF-05 · R
11. ADP-05 · R
12. HUM-04
13. INF-01
14. REG-03
15. LRN-01

## Block 2 — items 16–30

16. PER-02
17. EMP-04
18. SYS-05 · R
19. AST-01
20. ORG-03
21. OUT-05 · R
22. COP-03
23. ENG-03
24. ACH-04
25. REF-01
26. ADP-01
27. HUM-05 · R
28. INF-02
29. REG-04
30. LRN-02

## Block 3 — items 31–45

31. PER-03
32. EMP-05 · R
33. SYS-01
34. AST-02
35. ORG-04
36. OUT-01
37. COP-04
38. ENG-04
39. ACH-05 · R
40. REF-02
41. ADP-02
42. HUM-01
43. INF-03
44. REG-05 · R
45. LRN-03

## Block 4 — items 46–60

46. PER-04
47. EMP-01
48. SYS-02
49. AST-03
50. ORG-05 · R
51. OUT-02
52. COP-05 · R
53. ENG-05 · R
54. ACH-01
55. REF-03
56. ADP-03
57. HUM-02
58. INF-04
59. REG-01
60. LRN-04

## Block 5 — items 61–75

61. PER-05 · R
62. EMP-02
63. SYS-03
64. AST-04
65. ORG-01
66. OUT-03
67. COP-01
68. ENG-01
69. ACH-02
70. REF-04
71. ADP-04
72. HUM-03
73. INF-05 · R
74. REG-02
75. LRN-05 · R

## Reverse-key distribution

- Block 1: AST-05, REF-05, ADP-05
- Block 2: SYS-05, OUT-05, HUM-05
- Block 3: EMP-05, ACH-05, REG-05
- Block 4: ORG-05, COP-05, ENG-05
- Block 5: PER-05, INF-05, LRN-05

Total reverse-key items: 15.

## Implementation note

Store the item order/version with every anonymous beta response. Suggested version identifier:

`workstyle15-lt-v0.1-order-a`

Do not randomize the first pilot unless the system also records exact presentation order, because reproducibility is more valuable than cosmetic randomness during early validation.
