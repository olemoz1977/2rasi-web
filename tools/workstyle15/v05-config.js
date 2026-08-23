(() => {
  if (!window.WORKSTYLE15) throw new Error("WORKSTYLE15 base data is missing before v0.5 configuration.");

  const spec = window.WORKSTYLE15;
  spec.instrument.version = "0.5";
  spec.instrument.formId = "workstyle15-lt-v0.5-form-a";
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
    "PER-02":"Jei svarbus darbas užsitęsia, prie jo vis tiek grįžtu.",
    "PER-04":"Kai rezultatas neateina greitai, tęsiu darbą, jei tikslas vis dar svarbus.",
    "PER-05":"Jei greitai nepavyksta, dažnai pereinu prie kito darbo.",

    "ORG-01":"Prieš darbo pradžią susidėlioju, nuo ko pradėsiu.",
    "ORG-04":"Pasikartojantį darbą stengiuosi susitvarkyti taip, kad kitą kartą būtų paprasčiau.",
    "ORG-05":"Kai darbų daug, dažniausiai pasikliauju atmintimi, o ne planu ar sistema.",

    "ACH-01":"Dažnai renkuosi užduotis, kurios reikalauja iš manęs daugiau nei įprastai.",
    "ACH-04":"Imuosi svarbaus iššūkio net tada, kai sėkmė negarantuota.",
    "ACH-05":"Kai rezultatas jau priimtinas, dažniausiai sustoju.",

    "SYS-01":"Kai kyla problema, ieškau ne tik kas nutiko, bet ir kodėl.",
    "SYS-03":"Prieš sprendimą pagalvoju, ką jis pakeis kitose proceso vietose.",
    "SYS-05":"Kai sprendžiu problemą, dažniausiai žiūriu tik į konkretų atvejį.",

    "ADP-01":"Kai nauji faktai rodo, kad planas nebeveikia, jį keičiu.",
    "ADP-04":"Kai situacija pasikeičia, pakeičiu darbo būdą ir judu toliau.",
    "ADP-05":"Net pasikeitus situacijai, man patogiau laikytis pirminio plano.",

    "LRN-02":"Prašau grįžtamojo ryšio ir iš žmonių, kurie gali su manimi nesutikti.",
    "LRN-04":"Po klaidos pakeičiu ką nors konkretaus, kad ji nesikartotų.",
    "LRN-05":"Jei rezultatai geri, dažniausiai nematau reikalo keisti savo darbo būdo.",

    "COP-02":"Svarbia informacija su kolegomis pasidalinu dar prieš atsirandant problemai.",
    "COP-03":"Jei kitas žmogus išmano geriau, įtraukiu jį į sprendimą.",
    "COP-05":"Kai žinau, kaip padaryti, man paprasčiau padaryti pačiam nei tartis su kitais.",

    "EMP-01":"Kai pastebiu, kad kolegos reakcija pasikeitė, pasitikrinu, ar teisingai ją supratau.",
    "EMP-02":"Prieš sprendimą pagalvoju, kaip jis paveiks kitus žmones.",
    "EMP-05":"Kai spaudžia terminas, žmonių reakcijoms skiriu mažiau dėmesio.",

    "HUM-02":"Kai suklystu, tai pasakau tiesiai.",
    "HUM-04":"Kai nežinau, pasakau, kad nežinau.",
    "HUM-05":"Net gavęs stipresnių argumentų, dažnai laikausi savo pirminės nuomonės.",

    "AST-01":"Kai nesutinku, tai pasakau aiškiai ir pagarbiai.",
    "AST-02":"Pasakau „ne“, kai naujas darbas pakenktų svarbesniems prioritetams.",
    "AST-05":"Kad išvengčiau įtampos, kartais pritariu tam, kam iš tikrųjų nepritariu.",

    "INF-01":"Kai pristatau idėją, paaiškinu, kodėl ji verta dėmesio.",
    "INF-02":"Argumentus pritaikau pagal tai, kas svarbu žmonėms, kuriuos noriu įtikinti.",
    "INF-05":"Jei žmonės iš pradžių nepritaria mano idėjai, dažniausiai nebandau jos aiškinti kitu būdu.",

    "ENG-01":"Grupės diskusijose dažniausiai aktyviai įsitraukiu.",
    "ENG-03":"Kai idėja man svarbi, mano entuziazmas matomas ir kitiems.",
    "ENG-05":"Grupėje dažnai lieku nuošaliau, net kai turiu ką pasakyti.",

    "REG-01":"Spaudimo metu stengiuosi atskirti faktus nuo pirmos emocinės reakcijos.",
    "REG-04":"Kai gaunu kritiką, pirmiausia išklausau ją iki galo.",
    "REG-05":"Netikėta problema dažnai ilgam išmuša mane iš darbo ritmo.",

    "OUT-02":"Neaiškioje situacijoje ieškau daugiau nei vienos galimos baigties.",
    "OUT-03":"Po nesėkmės ieškau kito realaus žingsnio.",
    "OUT-05":"Kai situacija blogėja, dažnai užstringu ties tuo, kas gali nepavykti.",

    "REF-01":"Pastebiu, kada mano išankstinė nuomonė veikia sprendimą.",
    "REF-03":"Po sudėtingo pokalbio pagalvoju, kaip mano elgesys prisidėjo prie rezultato.",
    "REF-05":"Kai kyla problema, dažniau žiūriu į išorines priežastis negu į savo veiksmus."
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
