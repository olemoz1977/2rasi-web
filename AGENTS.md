# 2rasi-web

- Peržiūrėk keičiamo įrankio esamą kodą, versijos dokumentus ir susijusias `.github/workflows/` patikras. Vietinei peržiūrai paleisk statinį HTTP serverį saugyklos šaknyje, pvz., `python3 -m http.server 8000`.
- Keisdamas bendrą sąsają ar navigaciją, patikrink paveiktus LT ir EN puslapius telefono ir kompiuterio pločiu. Išlaikyk esamų tiesioginių nuorodų veikimą.
- Keisdamas viešą maršrutą arba SEO metaduomenis, patikrink `2rasi.lt` ir `2rasi.com` canonical adresus, peradresavimus ir indeksavimo taisykles. Pagal pakeitimo apimtį sutikrink `robots.txt`, `sitemap.xml`, `sitemap-lt.xml` ir `sitemap-com.xml`. Į sitemap įtrauk tik indeksavimui skirtus kanoninius puslapius.
- Keisdamas PrioLens klausimus, vertinimą ar validacijos duomenis, įvardyk paveiktą versiją. Sutikrink duomenų rinkinio identifikatorių ir schemą su jį naudojančiu kodu. Viešos v0.4 validacijos patikrą aprašo `.github/workflows/priolens-validation-v04-live-check.yml`.
- Keisdamas WorkStyle v0.7, paleisk `node tools/workstyle15/validate-v07.mjs`. Jei keiti duomenų priėmimo kodą, taikyk ir atitinkamas sintaksės patikras iš `.github/workflows/workstyle-v07-check.yml`.
- Darbo pabaigoje įvardyk paveiktus puslapius ar versijas, atliktas patikras ir ką dar reikės patikrinti paskelbus pakeitimą.
