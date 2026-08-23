# WorkStyle 15 — independent blind review package

Status: READY FOR EXTERNAL BLIND REVIEW
Version: WorkStyle 15 v0.1 LT
Last updated: 2026-08-23

## Reviewer instruction

You are reviewing a **pre-pilot workplace self-reflection instrument**. Evaluate the material below on its own merits.

For this first pass:
- do not search for or infer the project's development history;
- do not browse other repository files;
- do not assume the proposed architecture is correct;
- do not optimize for politeness or agreement;
- distinguish construct logic, item quality, user usefulness, and claims that require empirical evidence.

The instrument is intended for self-reflection, not diagnosis, recruitment selection, or automated personnel decisions.

## Required first-pass verdict

Choose exactly one:
- **READY FOR COGNITIVE PILOT**
- **READY AFTER MINOR REVISIONS**
- **NEEDS MAJOR REVISION BEFORE PILOT**
- **REJECT CURRENT ARCHITECTURE**

Provide:
1. Executive verdict — max 300 words.
2. Domain-level assessment table.
3. 15-dimension distinctness table: Strong / Acceptable / Weak.
4. Item-level flags table with item ID, problem, and rewrite/drop recommendation.
5. Reverse-item verdict table: KEEP / REWRITE / DROP.
6. Result-interpretation assessment.
7. PAEI/DISC lens assessment.
8. Pilot-readiness verdict and confidence 0–100%.
9. Five strongest parts of the design.
10. Ten highest-priority changes.
11. What must be tested empirically rather than debated theoretically.

Also identify any established psychological or organizational-behaviour constructs that the instrument resembles. State whether the overlap appears normal, excessive, or impossible to judge from the material.

---

# PART A — MODEL AND SCORING

Architecture: **5 domains × 3 dimensions × 5 items = 75 items**.

Response scale: Likert 1–5.

Notation:
- `D` = direct-key item;
- `R` = reverse-key item, scored as `6 - response`.

For each dimension:
- 5 items;
- raw range 5–25;
- theoretical index: `(sum - 5) / 20 * 100`.

For each domain:
- average the three dimension indexes;
- equal weight per dimension.

These values are theoretical scale indexes, **not percentiles** and not comparisons with other people.

The intended interpretation rule is not “high = good / low = bad”. Each tendency can bring value and a trade-off depending on context.

---

# PART B — 75 LT ITEMS

## DOMAIN 1 — EXECUTION / ĮGYVENDINIMAS

### 1. Goal Persistence / Kryptingumas

**PER-01 · D** Kai keli darbai konkuruoja dėl mano dėmesio, gebu išlaikyti dėmesį ties svarbiausiu.

**PER-02 · D** Jei svarbus darbas užsitęsia, prie jo grįžtu tol, kol pasiekiu aiškią pabaigą.

**PER-03 · D** Po nesėkmingo bandymo prie svarbios užduoties grįžtu, užuot ją palikęs nuošalyje.

**PER-04 · D** Prireikus galiu atsisakyti mažiau svarbios veiklos, kad nepamesčiau pagrindinio tikslo.

**PER-05 · R** Jei rezultato nepasiekiu greitai, man lengva persijungti prie kitos užduoties ir ankstesnę palikti nebaigtą.

### 2. Work Structure / Struktūra

**ORG-01 · D** Prieš pradėdamas darbą paprastai apsibrėžiu pagrindinę veiksmų seką.

**ORG-02 · D** Užduotims ir informacijai turiu sistemą, kuri padeda nepriklausyti vien nuo atminties.

**ORG-03 · D** Planuoju tiek, kad aiškiai žinočiau ne tik tikslą, bet ir artimiausią kitą žingsnį.

**ORG-04 · D** Kai darbas kartojasi, ieškau būdo jį atlikti nuosekliau ir mažiau priklausomai nuo atsitiktinumo.

**ORG-05 · R** Kai darbų daug, dažniausiai pasikliauju atmintimi ir situacija, o ne aiškia sistema.

### 3. Achievement Drive / Pasiekimų siekis

**ACH-01 · D** Sąmoningai renkuosi tikslus, kurie reikalauja iš manęs daugiau negu įprasta.

**ACH-02 · D** Kai tikslas svarbus, esu linkęs kelti sau aukštesnį standartą negu minimaliai pakanka.

**ACH-03 · D** Pasiekęs gerą rezultatą dažnai pagalvoju, ką dar būtų galima pakelti į aukštesnį lygį.

**ACH-04 · D** Esu pasirengęs imtis svarbaus iššūkio net tada, kai sėkmė nėra garantuota.

**ACH-05 · R** Kai pasiekiu priimtiną rezultatą, dažniausiai nematau reikalo siekti daugiau.

## DOMAIN 2 — ADAPTATION / PRISITAIKYMAS

### 4. Systems Thinking / Sisteminis mąstymas

**SYS-01 · D** Spręsdamas problemą ieškau ne tik jos simptomo, bet ir priežasčių bei tarpusavio ryšių.

**SYS-02 · D** Dažnai pastebiu ryšius tarp įvykių ar informacijos, kurie iš pirmo žvilgsnio atrodo nesusiję.

**SYS-03 · D** Vertindamas sprendimą pagalvoju, kokias pasekmes jis gali sukelti kitose proceso ar sistemos vietose.

**SYS-04 · D** Prieš pasirinkdamas sprendimą apsvarstau daugiau negu vieną galimą paaiškinimą ar scenarijų.

**SYS-05 · R** Sprendžiant problemą man patogiau sutelkti dėmesį tik į konkretų atvejį, o ne ieškoti platesnių dėsningumų.

### 5. Adaptability / Prisitaikymas

**ADP-01 · D** Kai nauja informacija paneigia mano planą, jį koreguoju nelaukdamas, kol problema taps akivaizdi.

**ADP-02 · D** Galiu pakeisti darbo būdą nejausdamas, kad tai savaime reiškia ankstesnio sprendimo nesėkmę.

**ADP-03 · D** Pasikeitus aplinkybėms atskiriu, ką būtina išsaugoti, o ką galima keisti.

**ADP-04 · D** Galiu produktyviai veikti ir tada, kai situacija vystosi kitaip, negu tikėjausi.

**ADP-05 · R** Net pasikeitus aplinkybėms, man patogiau laikytis pirminio plano.

### 6. Learning Orientation / Mokymosi orientacija

**LRN-01 · D** Po sudėtingos užduoties apgalvoju, ką kitą kartą daryčiau kitaip.

**LRN-02 · D** Sąmoningai ieškau grįžtamojo ryšio iš žmonių, kurie mano darbą gali matyti kitaip negu aš.

**LRN-03 · D** Mokymąsi vertinu labiausiai tada, kai jis realiai pakeičia mano darbo būdą.

**LRN-04 · D** Padaręs klaidą stengiuosi paversti ją konkrečiu pakeitimu kitam bandymui.

**LRN-05 · R** Jei mano darbo rezultatai geri, retai matau poreikį keisti savo darbo būdą.

## DOMAIN 3 — COLLABORATION / BENDRADARBIAVIMAS

### 7. Cooperation / Bendradarbiavimas

**COP-01 · D** Kai mano sprendimas palies kitų darbą, prieš jį priimdamas suderinu, ko iš jų reikės ir ką jie turi žinoti.

**COP-02 · D** Informacija, kurios gali prireikti kolegoms, stengiuosi pasidalinti dar prieš atsirandant problemai.

**COP-03 · D** Kai kito žmogaus kompetencija gali pagerinti rezultatą, įtraukiu jį į sprendimą.

**COP-04 · D** Bendroje užduotyje stengiuosi aiškiai susitarti, ką deriname kartu ir ką galime atlikti savarankiškai.

**COP-05 · R** Kai žinau, kaip padaryti, man paprasčiau veikti pačiam negu derinti sprendimą su kitais.

### 8. Empathic Attention / Empatinis dėmesys

**EMP-01 · D** Pastebėjęs pasikeitusią kolegos reakciją, pasitikrinu, ar ją supratau teisingai.

**EMP-02 · D** Prieš sudėtingą pokytį pagalvoju ne tik apie veiksmus, bet ir apie tai, kaip jį gali patirti žmonės.

**EMP-03 · D** Kai komandoje atsiranda įtampa, stengiuosi suprasti, kas slypi už matomos reakcijos.

**EMP-04 · D** Žmonių emocinius signalus laikau svarbia informacija, net jei jie nekeičia galutinio sprendimo.

**EMP-05 · R** Kai reikia pasiekti rezultatą, kitų emocinė reakcija man retai turi reikšmės.

### 9. Intellectual Humility / Intelektinis nuolankumas

**HUM-01 · D** Kai kito žmogaus argumentai ar duomenys stipresni, galiu pakeisti savo poziciją.

**HUM-02 · D** Galiu aiškiai pasakyti, kad suklydau, nepradėdamas iš karto teisinti savo sprendimo.

**HUM-03 · D** Kai nesu tikras dėl savo išvados, galiu tai pripažinti ir patikrinti papildomą informaciją.

**HUM-04 · D** Galiu pasakyti „nežinau“, kai neturiu pakankamai pagrindo tvirtai išvadai.

**HUM-05 · R** Man sunku viešai pripažinti, kad mano ankstesnė pozicija buvo klaidinga.

## DOMAIN 4 — INFLUENCE / ĮTAKA

### 10. Assertive Communication / Asertyvus komunikavimas

**AST-01 · D** Kai su sprendimu nesutinku, tai pasakau aiškiai ir pagarbiai.

**AST-02 · D** Galiu pasakyti „ne“, kai papildomas įsipareigojimas pakenktų svarbesniam darbui.

**AST-03 · D** Savo poreikius ir ribas stengiuosi išsakyti dar prieš atsirandant susierzinimui.

**AST-04 · D** Sudėtingą klausimą mieliau aptariu tiesiogiai su susijusiu žmogumi, negu ilgai jo vengiu.

**AST-05 · R** Kad išvengčiau įtampos, kartais sutinku su tuo, kam iš tikrųjų nepritariu.

### 11. Persuasive Influence / Įtaka

**INF-01 · D** Gebu paaiškinti savo idėją taip, kad kiti suprastų, kodėl verta ją palaikyti.

**INF-02 · D** Argumentuodamas pasiūlymą atsižvelgiu į tai, kas svarbu žmonėms, kuriuos noriu įtikinti.

**INF-03 · D** Kai grupė užstringa tarp kelių variantų, galiu padėti susitelkti į aiškesnę kryptį.

**INF-04 · D** Galiu sutelkti žmones aplink idėją net neturėdamas jiems formalios valdžios.

**INF-05 · R** Jei žmonės iš pradžių nepritaria mano idėjai, retai bandau ieškoti kito būdo ją pagrįsti ar paaiškinti.

### 12. Social Energy / Socialinė energija

**ENG-01 · D** Bendrose diskusijose paprastai aktyviai įsitraukiu, o ne lieku tik stebėtoju.

**ENG-02 · D** Kai grupės energija krenta, man natūralu inicijuoti judėjimą ar veiksmą.

**ENG-03 · D** Kai idėja man svarbi, mano entuziazmas paprastai matomas ir kitiems.

**ENG-04 · D** Naujoje žmonių grupėje gana greitai pradedu aktyviai dalyvauti bendravime.

**ENG-05 · R** Ilgesnėje grupinėje sąveikoje dažniausiai renkuosi likti nuošaliau, net kai turiu ką pasakyti.

## DOMAIN 5 — SELF-REGULATION / SAVIREGULIACIJA

### 13. Emotional Regulation / Emocinė savitvarda

**REG-01 · D** Spaudimo metu sugebu atskirti faktus nuo pirmos emocinės reakcijos.

**REG-02 · D** Konflikto metu galiu pristabdyti tiek, kad pasirinkčiau reakciją, o ne tiesiog sureaguočiau.

**REG-03 · D** Po netikėtos problemos paprastai gana greitai grįžtu į darbinį ritmą.

**REG-04 · D** Gavęs kritiką galiu suvaldyti pirmą gynybinę reakciją ir išklausyti iki galo.

**REG-05 · R** Netikėta problema lengvai išmuša mane iš darbinio ritmo ilgesniam laikui.

### 14. Constructive Outlook / Konstruktyvus požiūris

**OUT-01 · D** Susidūręs su kliūtimi, pirmiausia ieškau, ką dar galima padaryti.

**OUT-02 · D** Neapibrėžtoje situacijoje gebu matyti daugiau negu vien nesėkmės scenarijų.

**OUT-03 · D** Po nesėkmės stengiuosi pamatyti, kokia reali galimybė ar kitas žingsnis dar lieka.

**OUT-04 · D** Kai situacija bloga, stengiuosi atskirti tai, ko negalime pakeisti, nuo to, ką dar galime paveikti.

**OUT-05 · R** Kai situacija blogėja, pirmiausia matau priežastis, kodėl sprendimas nepavyks.

### 15. Reflective Self-Awareness / Reflektyvi savimonė

**REF-01 · D** Pastebiu, kokiose situacijose mano emocijos, įpročiai ar išankstinės nuostatos pradeda veikti mano sprendimus.

**REF-02 · D** Galiu įvardyti situacijas, kuriose mano stiprybė tampa kliūtimi.

**REF-03 · D** Po sudėtingos sąveikos apgalvoju ne tik kito žmogaus, bet ir savo indėlį į tai, kas įvyko.

**REF-04 · D** Vertindamas savo elgesį stengiuosi atskirti, ką ketinau padaryti, nuo to, kokį poveikį iš tikrųjų sukėliau.

**REF-05 · R** Man retai kyla abejonių, ar mano elgesys galėjo prisidėti prie problemos.

---

# PART C — RESULT INTERPRETATIONS

## Interpretation rule

WorkStyle 15 does not treat a high score as inherently good or a low score as inherently bad. Until a norm sample exists, indexes must not be described as percentiles or population comparisons.

## DOMAIN 1 — EXECUTION / ĮGYVENDINIMAS

Aprašo, kaip žmogus paverčia ketinimą nuosekliu veiksmu: išlaiko kryptį, kuria tvarką ir kelia sau rezultato kartelę.

### Kryptingumas / Goal Persistence

**Ką matuoja:** Polinkį išlaikyti dėmesį ties svarbiu tikslu ir grįžti prie jo po kliūčių ar nesėkmingų bandymų.

**Kai labiau išreikšta:** Tikėtina, kad lengviau išlaikai prioritetą, užbaigi ilgiau trunkančius darbus ir neatsisakai tikslo po pirmos kliūties.

**Kai mažiau išreikšta:** Gali greičiau persiorientuoti, paleisti užduotį, kuri nebeatrodo verta pastangų, ir neįstrigti viename tiksle.

**Gali padėti:** Ilgalaikėse užduotyse, spaudžiant terminams, kai rezultatui reikia kelių bandymų.

**Verta stebėti:** Atkaklumas gali virsti užsispyrimu, o greitas persijungimas — per ankstyvu atsitraukimu.

**Pastebėk:** Kada tęsi todėl, kad tikslas vis dar svarbus, o kada tik todėl, kad jau daug investavai?

### Struktūra / Work Structure

**Ką matuoja:** Polinkį planuoti, organizuoti informaciją ir kurti aiškią darbo seką.

**Kai labiau išreikšta:** Dažniau kuri sistemas, planuoji kitą žingsnį ir mažiau pasikliauji vien atmintimi ar improvizacija.

**Kai mažiau išreikšta:** Gali lengviau veikti spontaniškai ir neapkrauti darbo perteklinėmis procedūromis.

**Gali padėti:** Sudėtinguose, pasikartojančiuose ar nuo koordinavimo priklausančiuose procesuose.

**Verta stebėti:** Tvarka gali tapti biurokratija, o lanksti improvizacija — chaotiškumu.

**Pastebėk:** Ar tavo sistema padeda darbui judėti, ar darbas jau pradeda tarnauti sistemai?

### Pasiekimų siekis / Achievement Drive

**Ką matuoja:** Polinkį kelti sau aukštesnius tikslus ir ieškoti galimybės pagerinti jau priimtiną rezultatą.

**Kai labiau išreikšta:** Tikėtina, kad renkiesi ambicingesnius iššūkius ir sunkiau pasitenkini vien minimaliu rezultatu.

**Kai mažiau išreikšta:** Gali lengviau priimti „pakankamai gerą“ rezultatą, saugoti energiją ir nekurti nereikalingos konkurencijos su savimi.

**Gali padėti:** Augimo, transformacijos ir aukštų standartų aplinkoje.

**Verta stebėti:** Siekiamybė gali virsti nuolatiniu nepasitenkinimu, o pasitenkinimas rezultatu — per ankstyvu sustojimu.

**Pastebėk:** Kada aukštesnė kartelė kuria vertę, o kada tik padidina kainą?

## DOMAIN 2 — ADAPTATION / PRISITAIKYMAS

Aprašo, kaip žmogus supranta sudėtingumą, keičia požiūrį gavęs naujos informacijos ir mokosi iš patirties.

### Sisteminis mąstymas / Systems Thinking

**Ką matuoja:** Polinkį ieškoti priežasčių, ryšių, platesnių dėsningumų ir sprendimo pasekmių kitose sistemos vietose.

**Kai labiau išreikšta:** Dažniau matai ne tik atskirą problemą, bet ir jos ryšį su procesu, aplinka ar ilgalaikėmis pasekmėmis.

**Kai mažiau išreikšta:** Gali greičiau susitelkti į konkretų faktą ar praktinį sprendimą ir neperkomplikuoti paprastos situacijos.

**Gali padėti:** Kai problemos kartojasi, turi daug priežasčių ar vienas sprendimas veikia kelias proceso dalis.

**Verta stebėti:** Platus vaizdas gali sulėtinti veiksmą, o lokalus sprendimas — perkelti problemą kitur.

**Pastebėk:** Ar šiai problemai reikia gilesnio sistemos supratimo, ar pakanka sutvarkyti konkretų atvejį?

### Prisitaikymas / Adaptability

**Ką matuoja:** Polinkį keisti planą ar darbo būdą, kai pasikeičia faktai ir aplinkybės.

**Kai labiau išreikšta:** Tikėtina, kad lengviau atnaujini veiksmų planą ir nepriimi pakeitimo kaip asmeninės nesėkmės.

**Kai mažiau išreikšta:** Gali suteikti daugiau stabilumo, nuoseklumo ir neatsisakyti gero plano dėl kiekvienos naujos aplinkybės.

**Gali padėti:** Neapibrėžtoje, greitai besikeičiančioje aplinkoje.

**Verta stebėti:** Lankstumas gali virsti blaškymusi, o nuoseklumas — nelankstumu.

**Pastebėk:** Ką šioje situacijoje reikia keisti, o ką svarbu išlaikyti?

### Mokymosi orientacija / Learning Orientation

**Ką matuoja:** Polinkį reflektuoti po veiklos, ieškoti grįžtamojo ryšio ir patirtį paversti kitu elgesiu.

**Kai labiau išreikšta:** Dažniau klausi, ką galima išmokti ir ką kitą kartą padaryti kitaip.

**Kai mažiau išreikšta:** Gali daugiau pasitikėti jau veikiančia praktika ir nešvaistyti energijos nuolatiniam optimizavimui.

**Gali padėti:** Naujose rolėse, po klaidų, keičiantis procesams ar technologijoms.

**Verta stebėti:** Nuolatinis tobulinimas gali trukdyti stabilizuoti tai, kas jau veikia, o pasitenkinimas esamu būdu — sustabdyti mokymąsi.

**Pastebėk:** Kokią paskutinę įžvalgą realiai pavertėi nauju veiksmu?

## DOMAIN 3 — COLLABORATION / BENDRADARBIAVIMAS

Aprašo, kiek žmogaus darbo būde vietos turi koordinavimas su kitais, žmonių signalų pastebėjimas ir pasirengimas koreguoti savo poziciją.

### Bendradarbiavimas / Cooperation

**Ką matuoja:** Polinkį dalintis informacija, derinti tarpusavio priklausomybes ir įtraukti kitų kompetenciją.

**Kai labiau išreikšta:** Tikėtina, kad dažniau kuri bendrą veikimo paveikslą ir mažiau sprendimų laikai tik savo teritorija.

**Kai mažiau išreikšta:** Gali greičiau veikti savarankiškai, sumažinti derinimo kainą ir aiškiau prisiimti asmeninę atsakomybę.

**Gali padėti:** Kai rezultatas priklauso nuo kelių žmonių ar funkcijų.

**Verta stebėti:** Bendradarbiavimas gali virsti pertekliniu derinimu, o savarankiškumas — informaciniais silosais.

**Pastebėk:** Kur šiandien derinimas realiai pagerina rezultatą, o kur tik lėtina?

### Empatinis dėmesys / Empathic Attention

**Ką matuoja:** Polinkį pastebėti kitų žmonių emocines reakcijas ir laikyti jas prasminga informacija.

**Kai labiau išreikšta:** Dažniau pastebi, kaip žmonės patiria sprendimus, įtampą ar pokyčius, ir tikrini savo interpretaciją.

**Kai mažiau išreikšta:** Gali lengviau atsiriboti nuo emocinio triukšmo ir priimti nepopuliarų sprendimą, jei tam yra faktinis pagrindas.

**Gali padėti:** Pokyčių, konfliktų, mentorystės ir jautrių pokalbių metu.

**Verta stebėti:** Empatija gali virsti vengimu sukelti diskomfortą, o emocinis atsiribojimas — nepastebėtais žmonių signalais.

**Pastebėk:** Ar kitų reakciją naudoji kaip informaciją, ar kaip veto sprendimui?

### Intelektinis nuolankumas / Intellectual Humility

**Ką matuoja:** Pasirengimą pripažinti žinių ribas, klaidą ir pakeisti poziciją, kai atsiranda stipresni argumentai ar duomenys.

**Kai labiau išreikšta:** Tikėtina, kad lengviau sakai „nežinau“, tikrini savo išvadą ir nepriimi pozicijos pakeitimo kaip pralaimėjimo.

**Kai mažiau išreikšta:** Gali demonstruoti daugiau tvirtumo ir greičiau laikytis pasirinktos krypties, kai informacija nėra vienareikšmė.

**Gali padėti:** Sprendžiant sudėtingas problemas, mokantis ir dirbant su stipriais ekspertais.

**Verta stebėti:** Nuolankumas gali virsti nepasitikėjimu savo vertinimu, o tvirtumas — gynyba nuo naujų faktų.

**Pastebėk:** Koks faktas ar argumentas realiai priverstų tave pakeisti dabartinę nuomonę?

## DOMAIN 4 — INFLUENCE / ĮTAKA

Aprašo, kaip žmogus išsako poziciją, kuria palaikymą ir kiek socialinės energijos atsineša į bendrą veiklą.

### Asertyvus komunikavimas / Assertive Communication

**Ką matuoja:** Polinkį aiškiai ir pagarbiai išsakyti nesutikimą, ribas ar sudėtingą klausimą.

**Kai labiau išreikšta:** Tikėtina, kad mažiau vengi tiesioginio pokalbio ir aiškiau parodai savo poziciją.

**Kai mažiau išreikšta:** Gali būti atsargesnis, mažinti tiesioginę įtampą ir daugiau laiko skirti santykiui ar kontekstui.

**Gali padėti:** Konfliktuose, prioritetų derybose, ribų nustatyme ir sprendimų priėmime.

**Verta stebėti:** Tiesumas gali tapti spaudimu, o atsargumas — nepasakytu nesutikimu.

**Pastebėk:** Ar tavo pozicija kitiems aiški dar prieš prasidedant susierzinimui?

### Įtaka / Persuasive Influence

**Ką matuoja:** Polinkį formuluoti idėjas taip, kad jos būtų suprantamos ir galėtų sulaukti kitų palaikymo.

**Kai labiau išreikšta:** Dažniau pritaikai argumentą auditorijai, padedi grupei susitelkti ir kuri palaikymą net be formalios valdžios.

**Kai mažiau išreikšta:** Gali labiau pasitikėti pačios idėjos kokybe ir mažiau investuoti į kitų įtikinimą ar politinį palaikymą.

**Gali padėti:** Įgyvendinant pokyčius, derantis, buriant palaikymą tarp funkcijų.

**Verta stebėti:** Įtaka gali virsti manipuliavimu, o nenoras įtikinėti — gera idėja, kuri taip ir neįgauna palaikymo.

**Pastebėk:** Kai žmonės nepritaria, ar pirmiausia kartoji savo argumentą, ar keiti jo pateikimo būdą?

### Socialinė energija / Social Energy

**Ką matuoja:** Polinkį aktyviai dalyvauti grupinėje sąveikoje ir išoriškai rodyti energiją bei entuziazmą.

**Kai labiau išreikšta:** Tikėtina, kad greičiau įsitrauki į grupę, inicijuoji judėjimą ir esi matomesnis bendroje diskusijoje.

**Kai mažiau išreikšta:** Gali būti santūresnis, labiau stebėti prieš įsitraukdamas ir nejausti poreikio nuolat būti socialiniame centre.

**Gali padėti:** Kai komandai reikia impulso, naujuose kontaktuose ar idėjos mobilizavime.

**Verta stebėti:** Didelė energija gali užimti per daug erdvės, o santūrumas — paslėpti vertingą indėlį.

**Pastebėk:** Ar tavo energija atveria erdvę kitiems, ar ją užpildo?

## DOMAIN 5 — SELF-REGULATION / SAVIREGULIACIJA

Aprašo, kaip žmogus valdo reakciją spaudimo metu, išlaiko konstruktyvų požiūrį ir reflektuoja savo poveikį.

### Emocinė savitvarda / Emotional Regulation

**Ką matuoja:** Polinkį išlaikyti darbinį funkcionalumą spaudimo, konflikto ar kritikos metu.

**Kai labiau išreikšta:** Dažniau pristabdai pirmą reakciją, gali išklausyti kritiką ir greičiau grįžti į darbinį ritmą.

**Kai mažiau išreikšta:** Gali reaguoti emocionaliau ir aiškiau signalizuoti, kad situacija tau svarbi ar peržengė ribą.

**Gali padėti:** Krizėse, konfliktuose, spaudžiant terminams ir priimant sunkius sprendimus.

**Verta stebėti:** Savitvarda gali virsti emocijų slopinimu, o stipri reakcija — sumažinti gebėjimą matyti faktus.

**Pastebėk:** Ką darai tarp pirmos emocinės reakcijos ir realaus veiksmo?

### Konstruktyvus požiūris / Constructive Outlook

**Ką matuoja:** Polinkį sunkioje situacijoje ieškoti realios veikimo galimybės, o ne sustoti ties nesėkmės scenarijumi.

**Kai labiau išreikšta:** Dažniau matai, ką dar galima paveikti, ir po nesėkmės ieškai kito žingsnio.

**Kai mažiau išreikšta:** Gali greičiau pastebėti rizikas, silpnas vietas ir priežastis, kodėl planas gali nepavykti.

**Gali padėti:** Neapibrėžtume, po nesėkmių ir situacijose, kuriose komandai reikia judėti pirmyn.

**Verta stebėti:** Optimizmas gali nuvertinti rizikas, o kritiškumas — uždaryti galimybes dar jų neišbandžius.

**Pastebėk:** Ar matai riziką tam, kad ją valdytum, ar tam, kad įrodytum, jog neverta bandyti?

### Reflektyvi savimonė / Reflective Self-Awareness

**Ką matuoja:** Polinkį pastebėti savo pačių reakcijų, įpročių, stiprybių ir išankstinių nuostatų poveikį elgesiui.

**Kai labiau išreikšta:** Dažniau analizuoji ne tik tai, ką ketinai padaryti, bet ir kokį poveikį realiai sukėlei.

**Kai mažiau išreikšta:** Gali mažiau užstrigti savianalizėje ir greičiau veikti remdamasis savo įprastu sprendimo būdu.

**Gali padėti:** Mokantis iš konfliktų, keičiant elgesio įpročius ir dirbant su savo stiprybių „šešėline puse“.

**Verta stebėti:** Refleksija gali tapti peranalizavimu, o jos stoka — pasikartojančiais aklais taškais.

**Pastebėk:** Kokį poveikį tavo elgesys sukėlė, nepriklausomai nuo to, ką ketinai?

## Domain-summary UX rule

The five domain indexes are summaries only. They must not hide differences between their three dimensions. Show the 15-dimensional profile first; use domains as orientation, not fixed person types.

---

# PART D — PAEI + DISC CORRESPONDENCE LENSES

## Rule

WorkStyle 15 directly measures only its own 15 dimensions.

PAEI and DISC are **interpretive correspondence lenses**, not official assessments. Numeric outer-ring scoring is disabled until pilot evidence and item-level review support it.

Mapping levels:
- **Primary** = strong conceptual correspondence;
- **Secondary** = plausible contribution or expression modifier;
- blank = no forced relationship.

## PAEI lens

### P — Producer
Primary:
- Goal Persistence / Kryptingumas
- Achievement Drive / Pasiekimų siekis

Secondary:
- Assertive Communication / Asertyvus komunikavimas
- Work Structure / Struktūra
- Constructive Outlook / Konstruktyvus požiūris

Caution: high achievement drive without persistence may produce ambitious starts without sustained completion; high persistence without achievement drive may support reliable completion without a strong desire to raise the performance bar.

### A — Administrator
Primary:
- Work Structure / Struktūra

Secondary:
- Goal Persistence / Kryptingumas
- Emotional Regulation / Emocinė savitvarda
- Reflective Self-Awareness / Reflektyvi savimonė

Caution: do not equate structure with bureaucracy.

### E — Entrepreneur
Primary:
- Systems Thinking / Sisteminis mąstymas
- Adaptability / Prisitaikymas
- Learning Orientation / Mokymosi orientacija

Secondary:
- Achievement Drive / Pasiekimų siekis
- Persuasive Influence / Įtaka
- Constructive Outlook / Konstruktyvus požiūris

Caution: adaptability alone is not entrepreneurship.

### I — Integrator
Primary:
- Cooperation / Bendradarbiavimas
- Empathic Attention / Empatinis dėmesys
- Intellectual Humility / Intelektinis nuolankumas

Secondary:
- Reflective Self-Awareness / Reflektyvi savimonė
- Persuasive Influence / Įtaka
- Emotional Regulation / Emocinė savitvarda

Caution: high cooperation alone is not automatically integration.

## DISC lens

### D — Dominance
Primary:
- Assertive Communication / Asertyvus komunikavimas
- Achievement Drive / Pasiekimų siekis
- Persuasive Influence / Įtaka

Secondary:
- Goal Persistence / Kryptingumas
- Social Energy / Socialinė energija

Caution: persistence and achievement orientation do not automatically imply social forcefulness.

### I — Influence
Primary:
- Social Energy / Socialinė energija
- Persuasive Influence / Įtaka
- Constructive Outlook / Konstruktyvus požiūris

Secondary:
- Assertive Communication / Asertyvus komunikavimas
- Cooperation / Bendradarbiavimas

Caution: persuasive influence can be quiet and analytical; do not infer social energy from influence alone.

### S — Steadiness
Primary:
- Cooperation / Bendradarbiavimas
- Empathic Attention / Empatinis dėmesys
- Emotional Regulation / Emocinė savitvarda

Secondary:
- Intellectual Humility / Intelektinis nuolankumas
- Work Structure / Struktūra

Caution: emotional regulation does not mean passivity and cooperation does not imply resistance to change.

### C — Conscientiousness
Primary:
- Work Structure / Struktūra
- Systems Thinking / Sisteminis mąstymas
- Goal Persistence / Kryptingumas

Secondary:
- Intellectual Humility / Intelektinis nuolankumas
- Reflective Self-Awareness / Reflektyvi savimonė
- Learning Orientation / Mokymosi orientacija

Caution: DISC-C is not identical to Big Five Conscientiousness. This is explanatory correspondence only.

## Lens-review questions

Assess whether the Primary / Secondary mappings are conceptually defensible, where they are forced or misleading, whether numeric derived scores should be avoided in the first pilot, and whether the lenses add explanatory value or mainly visual novelty.

---

# PART E — SPECIFIC REVIEW QUESTIONS

## Architecture
For each of the five domains:
- Do the three dimensions form a meaningful higher-order workplace domain?
- Is any dimension placed in the wrong domain?
- Are any two dimensions too similar to justify separate scales?
- Is an important workplace construct missing?

## Item audit
Flag every item that is:
- double-barrelled;
- vague;
- overly socially desirable;
- an identity label rather than behaviour;
- too context-specific;
- likely to cross-load;
- semantically redundant;
- awkward or ambiguous in Lithuanian;
- a poor reverse-key item.

For every flagged item provide item ID, problem, and suggested rewrite or drop recommendation.

## Reverse-key quality
For each of the 15 reverse items assess whether it is natural, represents the intended lower pole, introduces avoidable confusion, or may create method effects. Give KEEP / REWRITE / DROP.

## Scoring
Comment on:
- whether five items per dimension is a defensible pilot starting point;
- whether equal weighting is reasonable before evidence exists;
- what can and cannot be claimed from a 0–100 theoretical scale index;
- which pilot statistics should determine later shortening or weighting.

## Result interpretation
Check whether the interpretations:
- avoid “high = good / low = bad” framing;
- accurately reflect item content;
- contain Barnum-style generic statements;
- overstate what self-report can infer;
- offer useful reflection prompts.

## Known empirical questions for the pilot
Do not solve these by intuition alone; identify how they should be tested:
- Social Energy vs Persuasive Influence vs Assertive Communication;
- Constructive Outlook vs Emotional Regulation;
- Achievement Drive vs Goal Persistence;
- reverse-item comprehension and method effects;
- cross-dimension correlations;
- general socially desirable self-description factor;
- item variance / ceiling-floor effects;
- corrected item-total relationships;
- completion time and abandonment;
- whether result feedback feels specific/useful rather than flattering/general.

---

# END OF FIRST-PASS PACKAGE

Do **not** request or inspect project-history/provenance material until you have written and committed to the full first-pass verdict above.

After the first-pass verdict is complete, the project owner may provide a separate historical/provenance reveal. Then answer only:

> Does learning the model history materially change your earlier verdict? If yes, specify exactly what changes and why. If no, state why the first-pass evaluation still stands.
