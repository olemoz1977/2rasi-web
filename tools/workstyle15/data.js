window.WORKSTYLE15 = {
  instrument: {
    id: "workstyle15",
    version: "0.4",
    language: "lt",
    formId: "workstyle15-lt-v0.4-form-a",
    scaleMin: 1,
    scaleMax: 5,
    itemCount: 75,
    reverseRule: "6-response",
    dimensionIndexFormula: "(sum-5)/20*100",
    note: "Teorinės skalės pozicijos indeksas, ne percentilis ir ne palyginimas su kitais žmonėmis."
  },

  domains: [
    {
      id: "execution",
      lt: "Įgyvendinimas",
      en: "Execution",
      description: "Aprašo, kaip žmogus paverčia ketinimą nuosekliu veiksmu: išlaiko kryptį, kuria tvarką ir kelia sau rezultato kartelę.",
      dimensions: ["PER", "ORG", "ACH"]
    },
    {
      id: "adaptation",
      lt: "Prisitaikymas",
      en: "Adaptation",
      description: "Aprašo, kaip žmogus supranta sudėtingumą, keičia požiūrį gavęs naujos informacijos ir mokosi iš patirties.",
      dimensions: ["SYS", "ADP", "LRN"]
    },
    {
      id: "collaboration",
      lt: "Bendradarbiavimas",
      en: "Collaboration",
      description: "Aprašo, kiek žmogaus darbo būde vietos turi koordinavimas su kitais, žmonių signalų pastebėjimas ir pasirengimas koreguoti savo poziciją.",
      dimensions: ["COP", "EMP", "HUM"]
    },
    {
      id: "influence",
      lt: "Įtaka",
      en: "Influence",
      description: "Aprašo, kaip žmogus išsako poziciją, kuria palaikymą ir kiek socialinės energijos atsineša į bendrą veiklą.",
      dimensions: ["AST", "INF", "ENG"]
    },
    {
      id: "self-regulation",
      lt: "Savireguliacija",
      en: "Self-Regulation",
      description: "Aprašo, kaip žmogus valdo reakciją spaudimo metu, išlaiko konstruktyvų požiūrį ir reflektuoja savo poveikį.",
      dimensions: ["REG", "OUT", "REF"]
    }
  ],

  dimensions: {
    PER: {
      lt: "Kryptingumas",
      en: "Goal Persistence",
      domain: "execution",
      measures: "Polinkį išlaikyti dėmesį ties svarbiu tikslu ir grįžti prie jo po kliūčių ar nesėkmingų bandymų.",
      high: "Tikėtina, kad lengviau išlaikai prioritetą, užbaigi ilgiau trunkančius darbus ir neatsisakai tikslo po pirmos kliūties.",
      low: "Gali greičiau persiorientuoti, paleisti užduotį, kuri nebeatrodo verta pastangų, ir neįstrigti viename tiksle.",
      helps: "Ilgalaikėse užduotyse, spaudžiant terminams, kai rezultatui reikia kelių bandymų.",
      watch: "Atkaklumas gali virsti užsispyrimu, o greitas persijungimas — per ankstyvu atsitraukimu.",
      prompt: "Kada tęsi todėl, kad tikslas vis dar svarbus, o kada tik todėl, kad jau daug investavai?"
    },
    ORG: {
      lt: "Struktūra",
      en: "Work Structure",
      domain: "execution",
      measures: "Polinkį planuoti, organizuoti informaciją ir kurti aiškią darbo seką.",
      high: "Dažniau kuri sistemas, planuoji kitą žingsnį ir mažiau pasikliauji vien atmintimi ar improvizacija.",
      low: "Gali lengviau veikti spontaniškai ir neapkrauti darbo perteklinėmis procedūromis.",
      helps: "Sudėtinguose, pasikartojančiuose ar nuo koordinavimo priklausančiuose procesuose.",
      watch: "Tvarka gali tapti biurokratija, o lanksti improvizacija — chaotiškumu.",
      prompt: "Ar tavo sistema padeda darbui judėti, ar darbas jau pradeda tarnauti sistemai?"
    },
    ACH: {
      lt: "Pasiekimų siekis",
      en: "Achievement Drive",
      domain: "execution",
      measures: "Polinkį kelti sau aukštesnius tikslus ir ieškoti galimybės pagerinti jau priimtiną rezultatą.",
      high: "Tikėtina, kad renkiesi ambicingesnius iššūkius ir sunkiau pasitenkini vien minimaliu rezultatu.",
      low: "Gali lengviau priimti „pakankamai gerą“ rezultatą, saugoti energiją ir nekurti nereikalingos konkurencijos su savimi.",
      helps: "Augimo, transformacijos ir aukštų standartų aplinkoje.",
      watch: "Siekiamybė gali virsti nuolatiniu nepasitenkinimu, o pasitenkinimas rezultatu — per ankstyvu sustojimu.",
      prompt: "Kada aukštesnė kartelė kuria vertę, o kada tik padidina kainą?"
    },
    SYS: {
      lt: "Sisteminis mąstymas",
      en: "Systems Thinking",
      domain: "adaptation",
      measures: "Polinkį ieškoti priežasčių, ryšių, platesnių dėsningumų ir sprendimo pasekmių kitose sistemos vietose.",
      high: "Dažniau matai ne tik atskirą problemą, bet ir jos ryšį su procesu, aplinka ar ilgalaikėmis pasekmėmis.",
      low: "Gali greičiau susitelkti į konkretų faktą ar praktinį sprendimą ir neperkomplikuoti paprastos situacijos.",
      helps: "Kai problemos kartojasi, turi daug priežasčių ar vienas sprendimas veikia kelias proceso dalis.",
      watch: "Platus vaizdas gali sulėtinti veiksmą, o lokalus sprendimas — perkelti problemą kitur.",
      prompt: "Ar šiai problemai reikia gilesnio sistemos supratimo, ar pakanka sutvarkyti konkretų atvejį?"
    },
    ADP: {
      lt: "Prisitaikymas",
      en: "Adaptability",
      domain: "adaptation",
      measures: "Polinkį keisti planą ar darbo būdą, kai pasikeičia faktai ir aplinkybės.",
      high: "Tikėtina, kad lengviau atnaujini veiksmų planą ir nepriimi pakeitimo kaip asmeninės nesėkmės.",
      low: "Gali suteikti daugiau stabilumo, nuoseklumo ir neatsisakyti gero plano dėl kiekvienos naujos aplinkybės.",
      helps: "Neapibrėžtoje, greitai besikeičiančioje aplinkoje.",
      watch: "Lankstumas gali virsti blaškymusi, o nuoseklumas — nelankstumu.",
      prompt: "Ką šioje situacijoje reikia keisti, o ką svarbu išlaikyti?"
    },
    LRN: {
      lt: "Mokymosi orientacija",
      en: "Learning Orientation",
      domain: "adaptation",
      measures: "Polinkį reflektuoti po veiklos, ieškoti grįžtamojo ryšio ir patirtį paversti kitu elgesiu.",
      high: "Dažniau klausi, ką galima išmokti ir ką kitą kartą padaryti kitaip.",
      low: "Gali daugiau pasitikėti jau veikiančia praktika ir nešvaistyti energijos nuolatiniam optimizavimui.",
      helps: "Naujose rolėse, po klaidų, keičiantis procesams ar technologijoms.",
      watch: "Nuolatinis tobulinimas gali trukdyti stabilizuoti tai, kas jau veikia, o pasitenkinimas esamu būdu — sustabdyti mokymąsi.",
      prompt: "Kokią paskutinę įžvalgą realiai pavertėi nauju veiksmu?"
    },
    COP: {
      lt: "Bendradarbiavimas",
      en: "Cooperation",
      domain: "collaboration",
      measures: "Polinkį dalintis informacija, derinti tarpusavio priklausomybes ir įtraukti kitų kompetenciją.",
      high: "Tikėtina, kad dažniau kuri bendrą veikimo paveikslą ir mažiau sprendimų laikai tik savo teritorija.",
      low: "Gali greičiau veikti savarankiškai, sumažinti derinimo kainą ir aiškiau prisiimti asmeninę atsakomybę.",
      helps: "Kai rezultatas priklauso nuo kelių žmonių ar funkcijų.",
      watch: "Bendradarbiavimas gali virsti pertekliniu derinimu, o savarankiškumas — informaciniais silosais.",
      prompt: "Kur šiandien derinimas realiai pagerina rezultatą, o kur tik lėtina?"
    },
    EMP: {
      lt: "Empatinis dėmesys",
      en: "Empathic Attention",
      domain: "collaboration",
      measures: "Polinkį pastebėti kitų žmonių emocines reakcijas ir laikyti jas prasminga informacija.",
      high: "Dažniau pastebi, kaip žmonės patiria sprendimus, įtampą ar pokyčius, ir tikrini savo interpretaciją.",
      low: "Gali lengviau atsiriboti nuo emocinio triukšmo ir priimti nepopuliarų sprendimą, jei tam yra faktinis pagrindas.",
      helps: "Pokyčių, konfliktų, mentorystės ir jautrių pokalbių metu.",
      watch: "Empatija gali virsti vengimu sukelti diskomfortą, o emocinis atsiribojimas — nepastebėtais žmonių signalais.",
      prompt: "Ar kitų reakciją naudoji kaip informaciją, ar kaip veto sprendimui?"
    },
    HUM: {
      lt: "Intelektinis nuolankumas",
      en: "Intellectual Humility",
      domain: "collaboration",
      measures: "Pasirengimą pripažinti žinių ribas, klaidą ir pakeisti poziciją, kai atsiranda stipresni argumentai ar duomenys.",
      high: "Tikėtina, kad lengviau sakai „nežinau“, tikrini savo išvadą ir nepriimi pozicijos pakeitimo kaip pralaimėjimo.",
      low: "Gali demonstruoti daugiau tvirtumo ir greičiau laikytis pasirinktos krypties, kai informacija nėra vienareikšmė.",
      helps: "Sprendžiant sudėtingas problemas, mokantis ir dirbant su stipriais ekspertais.",
      watch: "Nuolankumas gali virsti nepasitikėjimu savo vertinimu, o tvirtumas — gynyba nuo naujų faktų.",
      prompt: "Koks faktas ar argumentas realiai priverstų tave pakeisti dabartinę nuomonę?"
    },
    AST: {
      lt: "Asertyvus komunikavimas",
      en: "Assertive Communication",
      domain: "influence",
      measures: "Polinkį aiškiai ir pagarbiai išsakyti nesutikimą, ribas ar sudėtingą klausimą.",
      high: "Tikėtina, kad mažiau vengi tiesioginio pokalbio ir aiškiau parodai savo poziciją.",
      low: "Gali būti atsargesnis, mažinti tiesioginę įtampą ir daugiau laiko skirti santykiui ar kontekstui.",
      helps: "Konfliktuose, prioritetų derybose, ribų nustatyme ir sprendimų priėmime.",
      watch: "Tiesumas gali tapti spaudimu, o atsargumas — nepasakytu nesutikimu.",
      prompt: "Ar tavo pozicija kitiems aiški dar prieš prasidedant susierzinimui?"
    },
    INF: {
      lt: "Įtaka",
      en: "Persuasive Influence",
      domain: "influence",
      measures: "Polinkį formuluoti idėjas taip, kad jos būtų suprantamos ir galėtų sulaukti kitų palaikymo.",
      high: "Dažniau pritaikai argumentą auditorijai, padedi grupei susitelkti ir kuri palaikymą net be formalios valdžios.",
      low: "Gali labiau pasitikėti pačios idėjos kokybe ir mažiau investuoti į kitų įtikinimą ar politinį palaikymą.",
      helps: "Įgyvendinant pokyčius, derantis, buriant palaikymą tarp funkcijų.",
      watch: "Įtaka gali virsti manipuliavimu, o nenoras įtikinėti — gera idėja, kuri taip ir neįgauna palaikymo.",
      prompt: "Kai žmonės nepritaria, ar pirmiausia kartoji savo argumentą, ar keiti jo pateikimo būdą?"
    },
    ENG: {
      lt: "Socialinė energija",
      en: "Social Energy",
      domain: "influence",
      measures: "Polinkį aktyviai dalyvauti grupinėje sąveikoje ir išoriškai rodyti energiją bei entuziazmą.",
      high: "Tikėtina, kad greičiau įsitrauki į grupę, inicijuoji judėjimą ir esi matomesnis bendroje diskusijoje.",
      low: "Gali būti santūresnis, labiau stebėti prieš įsitraukdamas ir nejausti poreikio nuolat būti socialiniame centre.",
      helps: "Kai komandai reikia impulso, naujuose kontaktuose ar idėjos mobilizavime.",
      watch: "Didelė energija gali užimti per daug erdvės, o santūrumas — paslėpti vertingą indėlį.",
      prompt: "Ar tavo energija atveria erdvę kitiems, ar ją užpildo?"
    },
    REG: {
      lt: "Emocinė savitvarda",
      en: "Emotional Regulation",
      domain: "self-regulation",
      measures: "Polinkį išlaikyti darbinį funkcionalumą spaudimo, konflikto ar kritikos metu.",
      high: "Dažniau pristabdai pirmą reakciją, gali išklausyti kritiką ir greičiau grįžti į darbinį ritmą.",
      low: "Gali reaguoti emocionaliau ir aiškiau signalizuoti, kad situacija tau svarbi ar peržengė ribą.",
      helps: "Krizėse, konfliktuose, spaudžiant terminams ir priimant sunkius sprendimus.",
      watch: "Savitvarda gali virsti emocijų slopinimu, o stipri reakcija — sumažinti gebėjimą matyti faktus.",
      prompt: "Ką darai tarp pirmos emocinės reakcijos ir realaus veiksmo?"
    },
    OUT: {
      lt: "Konstruktyvus požiūris",
      en: "Constructive Outlook",
      domain: "self-regulation",
      measures: "Polinkį sunkioje situacijoje ieškoti realios veikimo galimybės, o ne sustoti ties nesėkmės scenarijumi.",
      high: "Dažniau matai, ką dar galima paveikti, ir po nesėkmės ieškai kito žingsnio.",
      low: "Gali greičiau pastebėti rizikas, silpnas vietas ir priežastis, kodėl planas gali nepavykti.",
      helps: "Neapibrėžtume, po nesėkmių ir situacijose, kuriose komandai reikia judėti pirmyn.",
      watch: "Optimizmas gali nuvertinti rizikas, o kritiškumas — uždaryti galimybes dar jų neišbandžius.",
      prompt: "Ar matai riziką tam, kad ją valdytum, ar tam, kad įrodytum, jog neverta bandyti?"
    },
    REF: {
      lt: "Reflektyvi savimonė",
      en: "Reflective Self-Awareness",
      domain: "self-regulation",
      measures: "Polinkį pastebėti savo reakcijų, įpročių, stiprybių ir išankstinių nuostatų poveikį elgesiui.",
      high: "Dažniau analizuoji ne tik tai, ką ketinai padaryti, bet ir kokį poveikį realiai sukėlei.",
      low: "Gali mažiau užstrigti savianalizėje ir greičiau veikti remdamasis savo įprastu sprendimo būdu.",
      helps: "Mokantis iš konfliktų, keičiant elgesio įpročius ir dirbant su savo stiprybių „šešėline puse“.",
      watch: "Refleksija gali tapti peranalizavimu, o jos stoka — pasikartojančiais aklais taškais.",
      prompt: "Kokį poveikį tavo elgesys sukėlė, nepriklausomai nuo to, ką ketinai?"
    }
  },

  items: [
    {id:"PER-01",dim:"PER",dir:"D",text:"Kai keli darbai konkuruoja dėl mano dėmesio, atsisakau mažiau svarbių veiklų, kad išlaikyčiau dėmesį ties svarbiausiu."},
    {id:"PER-02",dim:"PER",dir:"D",text:"Jei svarbus darbas užsitęsia, prie jo grįžtu net po pertraukų ar vėlavimų."},
    {id:"PER-03",dim:"PER",dir:"D",text:"Po nesėkmingo bandymo prie svarbios užduoties grįžtu, užuot ją palikęs nuošalyje."},
    {id:"PER-04",dim:"PER",dir:"D",text:"Kai svarbaus darbo rezultatas pasimato ne iš karto, tęsiu pastangas ir be greito grįžtamojo ryšio."},
    {id:"PER-05",dim:"PER",dir:"R",text:"Jei rezultato nepasiekiu greitai, dažnai pereinu prie kitos užduoties."},

    {id:"ORG-01",dim:"ORG",dir:"D",text:"Prieš darbo pradžią paprastai apsibrėžiu pagrindinę veiksmų seką."},
    {id:"ORG-02",dim:"ORG",dir:"D",text:"Užduotims ir informacijai turiu sistemą, kuri padeda nepriklausyti vien nuo atminties."},
    {id:"ORG-03",dim:"ORG",dir:"D",text:"Planuoju tiek, kad aiškiai žinočiau ne tik tikslą, bet ir artimiausią kitą žingsnį."},
    {id:"ORG-04",dim:"ORG",dir:"D",text:"Kai darbas kartojasi, ieškau būdo jį atlikti nuosekliau ir mažiau priklausomai nuo atsitiktinumo."},
    {id:"ORG-05",dim:"ORG",dir:"R",text:"Kai darbų daug, dažniausiai pasikliauju atmintimi ir situacija, o ne aiškia sistema."},

    {id:"ACH-01",dim:"ACH",dir:"D",text:"Renkuosi tikslus, kurie reikalauja iš manęs daugiau negu įprasta, net kai lengvesnė alternatyva būtų prieinama."},
    {id:"ACH-02",dim:"ACH",dir:"D",text:"Kai tikslas svarbus, esu linkęs kelti sau aukštesnį standartą negu minimaliai pakanka."},
    {id:"ACH-03",dim:"ACH",dir:"D",text:"Po gero rezultato dažnai pagalvoju, ką dar būtų galima pakelti į aukštesnį lygį."},
    {id:"ACH-04",dim:"ACH",dir:"D",text:"Esu pasirengęs imtis svarbaus iššūkio net tada, kai sėkmė nėra garantuota."},
    {id:"ACH-05",dim:"ACH",dir:"R",text:"Kai pasiekiu priimtiną rezultatą, dažniausiai nematau reikalo siekti daugiau."},

    {id:"SYS-01",dim:"SYS",dir:"D",text:"Kai sprendžiu problemą, ieškau priežasčių, kurios ją sukėlė arba palaiko."},
    {id:"SYS-02",dim:"SYS",dir:"D",text:"Dažnai pastebiu ryšius tarp įvykių ar informacijos, kurie iš pirmo žvilgsnio atrodo nesusiję."},
    {id:"SYS-03",dim:"SYS",dir:"D",text:"Kai vertinu sprendimą, pagalvoju, kokias pasekmes jis gali sukelti kitose proceso ar sistemos vietose."},
    {id:"SYS-04",dim:"SYS",dir:"D",text:"Prieš pasirinkdamas sprendimą apsvarstau daugiau negu vieną galimą paaiškinimą ar scenarijų."},
    {id:"SYS-05",dim:"SYS",dir:"R",text:"Kai sprendžiu problemą, man patogiau sutelkti dėmesį tik į konkretų atvejį, o ne ieškoti platesnių dėsningumų."},

    {id:"ADP-01",dim:"ADP",dir:"D",text:"Kai nauja informacija paneigia mano planą, jį koreguoju nelaukdamas, kol problema taps akivaizdi."},
    {id:"ADP-02",dim:"ADP",dir:"D",text:"Darbo būdo pakeitimo nelaikau ankstesnio sprendimo nesėkme."},
    {id:"ADP-03",dim:"ADP",dir:"D",text:"Pasikeitus aplinkybėms pirmiausia peržiūriu, kurios mano sprendimo dalys vis dar galioja."},
    {id:"ADP-04",dim:"ADP",dir:"D",text:"Kai situacija vystosi kitaip, negu tikėjausi, pakeičiu darbo būdą ir tęsiu darbą."},
    {id:"ADP-05",dim:"ADP",dir:"R",text:"Net pasikeitus aplinkybėms, man patogiau laikytis pirminio plano."},

    {id:"LRN-01",dim:"LRN",dir:"D",text:"Po sudėtingos užduoties peržiūriu savo darbo eigą ir nusprendžiu, ką kitą kartą keisiu procese."},
    {id:"LRN-02",dim:"LRN",dir:"D",text:"Prašau grįžtamojo ryšio ir iš žmonių, iš kurių tikiuosi kritiško vertinimo."},
    {id:"LRN-03",dim:"LRN",dir:"D",text:"Mokymąsi vertinu labiausiai tada, kai jis realiai pakeičia mano darbo būdą."},
    {id:"LRN-04",dim:"LRN",dir:"D",text:"Po klaidos stengiuosi paversti ją konkrečiu pakeitimu kitam bandymui."},
    {id:"LRN-05",dim:"LRN",dir:"R",text:"Jei mano darbo rezultatai geri, retai matau poreikį keisti savo darbo būdą."},

    {id:"COP-01",dim:"COP",dir:"D",text:"Kai mano sprendimas palies kitų darbą, iš anksto suderinu, ko iš jų reikės ir ką jie turi žinoti."},
    {id:"COP-02",dim:"COP",dir:"D",text:"Informacija, kurios gali prireikti kolegoms, stengiuosi pasidalinti dar prieš atsirandant problemai."},
    {id:"COP-03",dim:"COP",dir:"D",text:"Kai kito žmogaus kompetencija gali pagerinti rezultatą, įtraukiu jį į sprendimą."},
    {id:"COP-04",dim:"COP",dir:"D",text:"Bendroje užduotyje stengiuosi aiškiai susitarti, ką deriname kartu ir ką galime atlikti savarankiškai."},
    {id:"COP-05",dim:"COP",dir:"R",text:"Kai žinau, kaip padaryti, man paprasčiau veikti pačiam negu derinti sprendimą su kitais."},

    {id:"EMP-01",dim:"EMP",dir:"D",text:"Kai pastebiu pasikeitusią kolegos reakciją, pasitikrinu, ar ją supratau teisingai."},
    {id:"EMP-02",dim:"EMP",dir:"D",text:"Kai sprendimas palies kitus, pagalvoju, kaip jie gali jį patirti."},
    {id:"EMP-03",dim:"EMP",dir:"D",text:"Kai komandoje atsiranda įtampa, stengiuosi suprasti, kas slypi už matomos reakcijos."},
    {id:"EMP-04",dim:"EMP",dir:"D",text:"Žmonių emocinius signalus laikau svarbia informacija, net jei jie nekeičia galutinio sprendimo."},
    {id:"EMP-05",dim:"EMP",dir:"R",text:"Kai spaudžia terminas, kitų emocinė reakcija man paprastai turi mažesnę reikšmę negu pats rezultatas."},

    {id:"HUM-01",dim:"HUM",dir:"D",text:"Kai kito žmogaus argumentai ar duomenys stipresni, pakeičiu savo poziciją net kitų akivaizdoje."},
    {id:"HUM-02",dim:"HUM",dir:"D",text:"Kai suklystu, aiškiai tai pripažįstu ir neskubu teisinti savo sprendimo."},
    {id:"HUM-03",dim:"HUM",dir:"D",text:"Kai abejoju savo išvada, galiu tai pripažinti ir patikrinti papildomą informaciją."},
    {id:"HUM-04",dim:"HUM",dir:"D",text:"Kai neturiu pakankamai pagrindo tvirtai išvadai, aiškiai pasakau, kad nežinau."},
    {id:"HUM-05",dim:"HUM",dir:"R",text:"Man sunku viešai pripažinti, kad mano ankstesnė pozicija buvo klaidinga."},

    {id:"AST-01",dim:"AST",dir:"D",text:"Kai su sprendimu nesutinku, tai pasakau aiškiai ir pagarbiai."},
    {id:"AST-02",dim:"AST",dir:"D",text:"Galiu pasakyti „ne“, kai papildomas įsipareigojimas pakenktų svarbesniam darbui."},
    {id:"AST-03",dim:"AST",dir:"D",text:"Savo poreikius ir ribas stengiuosi išsakyti dar prieš atsirandant susierzinimui."},
    {id:"AST-04",dim:"AST",dir:"D",text:"Sudėtingą klausimą mieliau aptariu tiesiogiai su susijusiu žmogumi, negu ilgai jo vengiu."},
    {id:"AST-05",dim:"AST",dir:"R",text:"Kad išvengčiau įtampos, kartais sutinku su tuo, kam iš tikrųjų nepritariu."},

    {id:"INF-01",dim:"INF",dir:"D",text:"Kai pristatau savo idėją, argumentus formuluoju taip, kad kiti matytų, kodėl ją verta palaikyti."},
    {id:"INF-02",dim:"INF",dir:"D",text:"Kai argumentuoju pasiūlymą, atsižvelgiu į tai, kas svarbu žmonėms, kuriuos noriu įtikinti."},
    {id:"INF-03",dim:"INF",dir:"D",text:"Kai grupė neapsisprendžia, pasiūlau kryptį, kuri padeda judėti toliau."},
    {id:"INF-04",dim:"INF",dir:"D",text:"Kai neturiu formalios valdžios, vis tiek ieškau būdų sutelkti žmones aplink idėją."},
    {id:"INF-05",dim:"INF",dir:"R",text:"Jei žmonės iš pradžių nepritaria mano idėjai, retai bandau ieškoti kito būdo ją pagrįsti ar paaiškinti."},

    {id:"ENG-01",dim:"ENG",dir:"D",text:"Bendrose diskusijose paprastai aktyviai įsitraukiu, o ne lieku tik stebėtoju."},
    {id:"ENG-02",dim:"ENG",dir:"D",text:"Kai grupės energija krenta, man natūralu inicijuoti judėjimą ar veiksmą."},
    {id:"ENG-03",dim:"ENG",dir:"D",text:"Kai idėja man svarbi, mano entuziazmas paprastai matomas ir kitiems."},
    {id:"ENG-04",dim:"ENG",dir:"D",text:"Naujoje darbo grupėje paprastai gana greitai įsitraukiu į bendrą diskusiją."},
    {id:"ENG-05",dim:"ENG",dir:"R",text:"Ilgesnėje grupinėje sąveikoje dažniausiai renkuosi likti nuošaliau, net kai turiu ką pasakyti."},

    {id:"REG-01",dim:"REG",dir:"D",text:"Spaudimo metu atskiriu faktus nuo pirmos emocinės reakcijos."},
    {id:"REG-02",dim:"REG",dir:"D",text:"Konflikto metu galiu pristabdyti tiek, kad pasirinkčiau reakciją, o ne tiesiog sureaguočiau."},
    {id:"REG-03",dim:"REG",dir:"D",text:"Po stiprios emocinės reakcijos į netikėtą problemą paprastai gana greitai atgaunu darbinę būseną."},
    {id:"REG-04",dim:"REG",dir:"D",text:"Kai gaunu kritiką, pirmiausia išklausau iki galo, net jei kyla gynybinė reakcija."},
    {id:"REG-05",dim:"REG",dir:"R",text:"Netikėta problema paprastai ilgesniam laikui suardo mano darbinį ritmą."},

    {id:"OUT-01",dim:"OUT",dir:"D",text:"Kai susiduriu su kliūtimi, pirmiausia ieškau, ką dar galima padaryti."},
    {id:"OUT-02",dim:"OUT",dir:"D",text:"Neapibrėžtoje situacijoje svarstau daugiau negu vien nesėkmės scenarijų."},
    {id:"OUT-03",dim:"OUT",dir:"D",text:"Po nesėkmės stengiuosi pamatyti, kokia reali galimybė ar kitas žingsnis dar lieka."},
    {id:"OUT-04",dim:"OUT",dir:"D",text:"Kai situacija bloga, stengiuosi atskirti tai, ko negalime pakeisti, nuo to, ką dar galime paveikti."},
    {id:"OUT-05",dim:"OUT",dir:"R",text:"Kai situacija blogėja, pirmiausia matau priežastis, kodėl sprendimas nepavyks."},

    {id:"REF-01",dim:"REF",dir:"D",text:"Pastebiu, kada mano išankstinė nuomonė pradeda veikti mano sprendimus."},
    {id:"REF-02",dim:"REF",dir:"D",text:"Atpažįstu situacijas, kuriose mano stiprybė tampa kliūtimi."},
    {id:"REF-03",dim:"REF",dir:"D",text:"Po sudėtingos sąveikos apgalvoju ne tik kito žmogaus, bet ir savo indėlį į tai, kas įvyko."},
    {id:"REF-04",dim:"REF",dir:"D",text:"Kai vertinu savo elgesį, stengiuosi atskirti, ką ketinau padaryti, nuo to, kokį poveikį iš tikrųjų sukėliau."},
    {id:"REF-05",dim:"REF",dir:"R",text:"Kai problema atsiranda, pirmiausia ieškau išorinių priežasčių, o ne savo indėlio į ją."}
  ],

  order: [
    "PER-01","EMP-04","ORG-02","HUM-05","COP-03","SYS-01","REG-04","ADP-02","OUT-05","LRN-03","REF-01","AST-04","ACH-02","ENG-05","INF-03",
    "HUM-01","COP-04","PER-02","EMP-05","ORG-03","OUT-01","LRN-04","SYS-02","REG-05","ADP-03","ENG-01","INF-04","REF-02","AST-05","ACH-03",
    "EMP-01","ORG-04","HUM-02","COP-05","PER-03","REG-01","ADP-04","OUT-02","LRN-05","SYS-03","AST-01","ACH-04","ENG-02","INF-05","REF-03",
    "COP-01","PER-04","EMP-02","ORG-05","HUM-03","LRN-01","SYS-04","REG-02","ADP-05","OUT-03","INF-01","REF-04","AST-02","ACH-05","ENG-03",
    "ORG-01","HUM-04","COP-02","PER-05","EMP-03","ADP-01","OUT-04","LRN-02","SYS-05","REG-03","ACH-01","ENG-04","INF-02","REF-05","AST-03"
  ]
};
