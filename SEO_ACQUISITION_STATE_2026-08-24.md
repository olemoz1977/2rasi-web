# 2rasi SEO / Acquisition State — 2026-08-24

Status: BASELINE CAPTURED / WAITING FOR SEARCH CONSOLE RECrawl

## Why this exists

Capture the current technical SEO and acquisition baseline after the 2026-08-24 cleanup so later Search Console changes can be compared against a known state instead of reconstructed from memory.

## Search Console baseline

Source: Google Search Console Coverage / Valid export downloaded 2026-08-24. The export itself reports crawl/index data through 2026-08-21.

### Indexed URLs reported in the export

- `https://2rasi.com/tools/leadership-360/` — last checked 2026-08-19
- `https://www.2rasi.com/tools/mirror/` — last checked 2026-08-18
- `https://www.2rasi.com/tools/drama-triangle/` — last checked 2026-08-18
- `https://www.2rasi.com/tools/divergent/` — last checked 2026-08-18
- `https://www.2rasi.com/tools/situational-leadership/` — last checked 2026-08-18
- `https://2rasi.com/` — last checked 2026-08-18
- `http://www.2rasi.com/` — last checked 2026-08-18
- `https://www.2rasi.com/` — last checked 2026-08-18

Search Console summary at that point: 8 indexed, 1 non-indexed. The non-indexed reason shown in Search Console was `Page with redirect`.

Important interpretation: the count of 8 includes duplicate host/protocol homepage variants, so it is not equivalent to 8 distinct content pages.

### Not present in that indexed export

- Multipliers landing
- Strategic Thinking landing
- 2Pair landing

WorkStyle is intentionally not treated as an organic-search acquisition page while the cognitive pilot is collecting evidence.

## SERP baseline before recrawl

A search check on 2026-08-24, before Google had recrawled the new metadata, did not surface 2rasi for the main Lithuanian intent phrases checked, including variants around:

- situacinio vadovavimo testas
- strateginio mąstymo testas
- Karpmano dramos trikampio testas
- savirefleksijos testas
- Big Five / OCEAN testas lietuviškai

This is the `before` state, not a failure verdict. Search Console shows the relevant pages were last checked mainly on 2026-08-18/19, before the SEO cleanup.

A useful external signal: older LinkedIn content about the situational leadership test already appears for the relevant search phrase, indicating that the topic itself can surface in search even though the 2rasi domain has not yet established visibility.

## Changes made on 2026-08-24

### Technical SEO

- Added explicit EN/LT `hreflang` relationships.
- Replaced the previous `.lt -> .com` canonical behaviour with host-aware self-canonical logic.
- Sitemap now contains both `.com` and `.lt` URL variants with language alternates.
- Sitemap entries carry `lastmod=2026-08-24` after the cleanup.
- `robots.txt` points to both domain sitemap URLs.
- Homepage title/description now describe self-reflection, leadership and thinking tools instead of relying only on the brand phrase `Look again.`
- Individual indexed tool landings received page-specific Open Graph / Twitter metadata.
- Lithuanian tool landing browser titles target natural search intent such as `Situacinio vadovavimo testas`, `Strateginio mąstymo testas`, `Karpmano dramos trikampio testas`, and `Savirefleksijos testas`.

### Canonical consolidation expectation

The host-aware canonical logic intentionally maps `www.2rasi.com` pages to the non-`www` canonical form under `https://2rasi.com/...`.

Therefore, after Google recrawls the updated pages, the old Search Console `www` variants are expected to consolidate toward the non-`www` canonical URLs even if the hosting-level redirect chain has not yet been independently verified.

Do not make a DNS/hosting change unless a reliable live HTTP check later shows that the redirect behaviour itself is wrong.

### Portfolio / acquisition hierarchy

Homepage order:

1. Leadership 360°
2. Mirror
3. Multipliers
4. Divergent
5. Situational Leadership
6. Drama Triangle
7. Strategic Thinking
8. 2Pair
9. WorkStyle

Cards 8–9 are separated under `HELP TO BUILD` / `PADĖK KURTI`.

### English acquisition pilot

Two legacy tools were selected for the first EN acquisition experiment because they have the broadest immediate user value without requiring changes to the active research streams:

- Divergent — EN version added at `https://olemoz1977.github.io/Divergent-test-2/public/en/`
- Multipliers — EN version added at `https://olemoz1977.github.io/multipliers-test/pilnas/en/`

Rules:

- Original LT versions remain unchanged and available.
- `2rasi.com` routes Start to the EN versions.
- `2rasi.lt` routes Start to the existing LT versions.
- Both cards are marked `EN/LT`.
- The EN versions preserve the existing scoring structures; this is localization, not methodology redevelopment.
- Both EN result flows provide a direct path back to 2rasi.

Situational Leadership, Drama Triangle and Strategic Thinking remain LT-only for now. Do not translate all legacy tools automatically before observing whether the first two EN tools attract real usage.

### Retention

- Legacy tool launches from the 2rasi homepage stay in the same browsing context so browser Back returns to 2rasi instead of leaving an orphaned external tab.
- The same behaviour is applied when a legacy tool is launched from its 2rasi About landing.
- Mirror additionally has a direct `← 2rasi` link on its result screen.
- The new EN Divergent and Multipliers versions also include direct `← 2rasi` links.

## Known unresolved observation

Search Console had indexed `www`, non-`www`, HTTP and HTTPS homepage variants before this cleanup. The 2rasi repository itself does not generate `www.2rasi.com` or `http://2rasi.com` links.

The actual DNS/hosting redirect chain still needs confirmation from a reliable live HTTP source before any hosting-level change is made.

Do not modify DNS/hosting based only on the old Coverage export.

## Current gate

Do not keep adding speculative SEO changes.

Wait for Google to recrawl the 2026-08-24 state, then evaluate Search Console **Performance**, not only Coverage:

- impressions
- queries
- pages
- clicks / CTR
- country/device only if useful

Priority questions after recrawl:

1. Are Multipliers and Strategic Thinking discovered/indexed?
2. Which LT search queries begin generating impressions?
3. Which landing pages receive impressions but weak CTR?
4. Do `www/http` duplicates disappear or consolidate?
5. Which existing tool proves capable of bringing users to 2rasi without a research recruitment ask?
6. Do EN Divergent or Multipliers generate measurable external usage before more legacy tools are translated?

Until that evidence arrives, product methodology and active research pilots remain unchanged.