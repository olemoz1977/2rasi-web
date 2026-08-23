(() => {
  if (!window.WORKSTYLE15) throw new Error("WORKSTYLE15 base data is missing before v0.6 configuration.");

  const spec = window.WORKSTYLE15;
  spec.instrument.version = "0.6";
  spec.instrument.formId = "workstyle15-lt-v0.6-form-a";
  spec.instrument.formLabel = "A";
  spec.instrument.itemCount = 45;
  spec.instrument.sectionSize = 15;
  spec.instrument.sectionCount = 3;
  spec.instrument.responseMode = "workplace-typicality-1-5-plus-NA";
  spec.instrument.dimensionIndexFormula = "mean valid scored items -> (mean-1)/4*100";
  spec.instrument.minValidItemsPerDimension = 2;
  spec.instrument.note = "1–5 rodo, kiek elgesys būdingas darbe. 'Sunku įvertinti' nėra verčiama į 3 ir į balą neįtraukiama.";

  const domainLabels = {
    execution: "Įgyvendinimas",
    adaptation: "Adaptacija",
    collaboration: "Atvirumas kitiems",
    influence: "Poveikis",
    "self-regulation": "Savireguliacija"
  };
  spec.domains.forEach(domain => { domain.lt = domainLabels[domain.id] || domain.lt; });

  const selected = {
    "PER-02":"Jei svarbus darbas užtrunka ilgiau, negu tikėjausi, prie jo grįžtu ir tęsiu.",
    "PER-04":"Po nesėkmingo bandymo dažniausiai bandau dar kartą.",
    "PER-05":"Jei darbas ilgai nejuda į priekį, dažnai jį atidedu ir imuosi kito.",

    "ORG-01":"Prieš darbo pradžią susidėlioju pirmus žingsnius.",
    "ORG-04":"Pasikartojantį darbą susitvarkau taip, kad kitą kartą būtų paprasčiau.",
    "ORG-05":"Kai darbų daug, dažniausiai viską laikau galvoje.",

    "ACH-01":"Dažnai renkuosi užduotis, kurios reikalauja iš manęs daugiau nei įprastai.",
    "ACH-04":"Kai rezultatas jau geras, dažnai ieškau, ką dar galima pagerinti.",
    "ACH-05":"Jei rezultatas pakankamai geras, dažniausiai ties tuo ir sustoju.",

    "SYS-01":"Kai problema kartojasi, ieškau, kas ją sukelia.",
    "SYS-03":"Kai keičiu vieną darbo dalį, pagalvoju, ką tai pakeis kitur.",
    "SYS-05":"Kai problema atrodo vienkartinė, paprastai ją išsprendžiu ir neieškau platesnių priežasčių.",

    "ADP-01":"Jei matau, kad pasirinktas darbo būdas nebeveikia, išbandau kitą.",
    "ADP-04":"Kai pasikeičia prioritetai, pertvarkau savo darbą pagal naują eilę.",
    "ADP-05":"Kai jau turiu susidėliojęs planą, man nelengva jį keisti eigoje.",

    "LRN-02":"Kai noriu pasitikrinti savo sprendimą, klausiu ir tų, kurie jį mato kitaip.",
    "LRN-04":"Po klaidos pakeičiu ką nors konkretaus, kad ji nesikartotų.",
    "LRN-05":"Jei mano darbo būdas duoda gerą rezultatą, paprastai jo nekeičiu.",

    "COP-02":"Jei informacija gali paveikti kolegų darbą, pasidalinu ja nelaukdamas, kol jie paklaus.",
    "COP-03":"Kai sprendimui trūksta žinių, kreipiuosi į žmogų, kuris jas turi.",
    "COP-05":"Jei užduotį galiu padaryti pats, dažniausiai taip ir darau, užuot derinęs su kitais.",

    "EMP-01":"Jei kolega sureaguoja kitaip, nei tikėjausi, paklausiu, kaip jis tai suprato.",
    "EMP-02":"Prieš sprendimą, kuris palies kitus, pagalvoju, kaip jie į jį gali reaguoti.",
    "EMP-05":"Darbo sprendimuose dažniausiai remiuosi tuo, ką žmonės pasako tiesiai, o ne jų emocinėmis reakcijomis.",

    "HUM-02":"Kai suklystu, tai pasakau tiesiai.",
    "HUM-04":"Kai nežinau, pasakau, kad nežinau.",
    "HUM-05":"Kai dėl sprendimo jau esu apsisprendęs, savo nuomonę keičiu retai.",

    "AST-01":"Kai nesutinku, tai pasakau aiškiai ir pagarbiai.",
    "AST-02":"Kai papildomas darbas trukdytų svarbesniam, pasakau apie tai ir derinu prioritetus.",
    "AST-05":"Kai nesutarimas nėra labai svarbus, dažnai nusileidžiu, kad nekiltų įtampa.",

    "INF-01":"Kai pristatau idėją, paaiškinu, kuo ji naudinga žmonėms, kuriuos noriu įtraukti.",
    "INF-02":"Jei žmonės iš pradžių nesupranta mano idėjos, paaiškinu ją kitu būdu.",
    "INF-05":"Jei mano idėjai nepritaria, dažniausiai jos toliau nestumiu.",

    "ENG-01":"Grupės diskusijose dažniausiai aktyviai įsitraukiu.",
    "ENG-03":"Kai idėja man svarbi, mano entuziazmas dažniausiai matomas.",
    "ENG-05":"Grupėje dažnai lieku stebėtoju, net kai turiu ką pasakyti.",

    "REG-01":"Spaudimo metu pirmiausia susidėlioju faktus, o tik tada reaguoju.",
    "REG-04":"Kai gaunu kritiką, pirmiausia išklausau ją iki galo.",
    "REG-05":"Po netikėtos problemos man dažnai reikia laiko grįžti į įprastą darbo ritmą.",

    "OUT-02":"Po nesėkmės gana greitai pereinu prie to, ką galima daryti toliau.",
    "OUT-03":"Kai ne viską galiu pakeisti, susitelkiu į tai, ką dar galiu paveikti.",
    "OUT-05":"Kai planas stringa, pirmiausia ilgiau analizuoju, kas nepavyko, o tik tada judu toliau.",

    "REF-01":"Po sudėtingo pokalbio pagalvoju, ką galėjau padaryti kitaip.",
    "REF-03":"Kai panaši problema kartojasi, pasižiūriu, ar prie jos neprisideda mano įprastas elgesys.",
    "REF-05":"Kai problema jau išspręsta, dažniausiai prie savo vaidmens joje nebegrįžtu."
  };

  spec.items = spec.items
    .filter(item => Object.prototype.hasOwnProperty.call(selected, item.id))
    .map(item => ({ ...item, text: selected[item.id] }));

  spec.order = [
    "PER-05","EMP-01","ORG-01","HUM-02","COP-05","SYS-05","REG-05","ADP-01","OUT-02","LRN-02","REF-01","AST-05","ACH-01","ENG-01","INF-01",
    "HUM-04","COP-02","PER-02","EMP-05","ORG-05","OUT-05","LRN-04","SYS-01","REG-01","ADP-05","ENG-03","INF-05","REF-03","AST-01","ACH-04",
    "EMP-02","ORG-04","HUM-05","COP-03","PER-04","REG-04","ADP-04","OUT-03","LRN-05","SYS-03","AST-02","ACH-05","ENG-05","INF-02","REF-05"
  ];
})();