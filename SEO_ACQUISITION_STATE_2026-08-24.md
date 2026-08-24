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

### Retention

- Legacy tool launches from the 2rasi homepage stay in the same browsing context so browser Back returns to 2rasi instead of leaving an orphaned external tab.
- The same behaviour is applied when a legacy tool is launched from its 2rasi About landing.
- Mirror additionally has a direct `← 2rasi` link on its result screen.

## Known unresolved observation

Search Console had indexed `www`, non-`www`, HTTP and HTTPS homepage variants before this cleanup. The 2rasi repository itself does not generate `www.2rasi.com` or `http://2rasi.com` links. The actual DNS/hosting redirect chain still needs confirmation from a reliable live HTTP source before any hosting-level change is made.

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

Until that evidence arrives, product methodology and active research pilots remain unchanged.
