(() => {
  'use strict';

  const host = window.location.hostname.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const forced = params.get('lang');
  const lang = (forced === 'lt' || forced === 'en')
    ? forced
    : ((host === '2rasi.lt' || host.endsWith('.2rasi.lt')) ? 'lt' : 'en');
  const slug = window.location.pathname.split('/').filter(Boolean).pop() || '';

  const pages = {
    mirror: {
      description: 'Trumpas dvikalbis savirefleksijos įrankis, padedantis pastebėti elgesio modelius, kurie kartais gali trukdyti.',
      kicker: 'Refleksijos eksperimentas · EN/LT',
      lead: 'Trumpa pauzė pastebėti elgesio įpročius, kurie kartais padeda, o kartais gali tau trukdyti.',
      meta: ['3–5 min.', '20 teiginių', '6 refleksijos sritys', 'Duomenys tik naršyklėje'],
      actions: ['Pradėti Veidrodį ↗', 'Suprasti modelį'],
      sections: [
        {
          title: 'Ką jis tyrinėja',
          paragraphs: [
            'Veidrodis skirtas žmonėms, kurie daro įtaką kitiems ir nori užduoti paprastą klausimą: <em>ar kai kurie mano elgesio įpročiai kartais gali stabdyti mano augimą?</em>',
            'Jis nesiekia apibrėžti tavo asmenybės. Įrankis atspindi modelius šešiose elgesio srityse ir pateikia atvirus klausimus apmąstymui.'
          ]
        },
        { title: 'Kaip veikia refleksija', paragraphs: [] },
        {
          title: 'Skaityk rezultatą kaip veidrodį',
          paragraphs: [
            'Šeši rezultatai nėra nuosprendžiai. Įrankis išryškina 2–3 sritis, kurioms gali būti verta skirti daugiau dėmesio, ir prie kiekvienos pateikia refleksijos klausimą.',
            'Tai savirefleksijos įrankis, o ne psichologinis testas, diagnozė, 360° vertinimas ar kompetencijų vertinimo sistema.'
          ]
        },
        {
          title: 'Privatumas',
          paragraphs: ['Registracijos nėra. Duomenys serveryje nesaugomi. Atsakymai lieka tavo naršyklėje, o PDF eksportui naudojamas naršyklės spausdinimo dialogas.']
        }
      ],
      model: [
        ['Statusas ir pripažinimo poreikis', 'Kiek stipriai noras būti pastebėtam, pripažintam ar įvertintam gali veikti tavo reakcijas.'],
        ['Teisumas, kontrolė ir atsakomybė', 'Kaip reaguoji, kai ginčijami sprendimai, atsakomybė ar kontrolė.'],
        ['Klausymasis ir erdvės suteikimas', 'Kiek vietos palieki kitų balsams, ypač kai jau turi savo nuomonę.'],
        ['Kitų pripažinimas ir padėka', 'Kaip nuosekliai dėkingumas ir kitų indėlio pripažinimas tampa matomi tavo elgesyje.'],
        ['Emocinės reakcijos', 'Kaip įtampa, nusivylimas ar spaudimas gali pakeisti tavo reakciją.'],
        ['Lankstumas ir dalijimasis', 'Kaip lengvai prisitaikai, daliniesi atsakomybe ir leidi kartu egzistuoti kitiems požiūriams.']
      ],
      side: ['Pasiruošęs pažvelgti dar kartą?', 'Atsakyk pagal tai, ką paprastai darai, o ne pagal tai, koks atsakymas atrodo „geresnis“.', 'Pradėti Veidrodį ↗']
    },

    multipliers: {
      description: 'Vadovavimo refleksijos eksperimentas, įkvėptas „Multipliers“ modelio.',
      kicker: 'Vadovavimo refleksija · LT',
      lead: '15 situacijų refleksija apie būdus, kuriais vadovas gali stiprinti kitų žmonių gebėjimus, atsakomybę ir mąstymą.',
      meta: ['15 situacijų', '5 vadovavimo kryptys', 'Lietuvių kalba', 'Duomenys tik naršyklėje'],
      actions: ['Pradėti Multipliers ↗', 'Suprasti modelį'],
      sections: [
        {
          title: 'Ką jis tyrinėja',
          paragraphs: [
            'Eksperimentas klausia, kaip reaguotum įvairiose vadovavimo situacijose. Tavo pasirinkimai susiejami su penkiomis archetipinėmis kryptimis, naudojamomis šiame refleksijos įrankyje.',
            'Tikslas nėra priskirti tave vienam tipui. Svarbiau pastebėti, kurie vadovavimo būdai atsiranda natūraliau, o kuriuos naudoji rečiau.'
          ]
        },
        { title: 'Penkios kryptys', paragraphs: [] },
        {
          title: 'Kaip naudoti rezultatą',
          paragraphs: [
            'Žiūrėk į visą modelį, ne tik į aukščiausią rezultatą. Naudingas klausimas: <em>kokio vadovavimo veiksmo imuosi pirmiausia ir kurį pamirštu, kai padidėja spaudimas?</em>',
            'Tai nepriklausomas 2rasi refleksijos eksperimentas, įkvėptas „Multipliers“ modelio. Tai nėra oficialus ar validuotas „Multipliers“ vertinimas.'
          ]
        }
      ],
      model: [
        ['Talent Magnet', 'Pastebėti gebėjimus, pritraukti talentus ir sukurti erdvę žmonėms pilnai prisidėti.'],
        ['Liberator', 'Sukurti pakankamai saugumo ir erdvės, kad žmonės galėtų mąstyti, kalbėti ir rizikuoti idėjomis.'],
        ['Challenger', 'Plėsti mąstymą prasmingais iššūkiais, užuot pateikus visus atsakymus.'],
        ['Debate Maker', 'Kviesti skirtingas perspektyvas ir prieš sprendimus naudoti produktyvią diskusiją.'],
        ['Investor', 'Suteikti atsakomybę, nuosavybės jausmą ir atskaitomybę, užuot pasiėmus darbą atgal.']
      ],
      side: ['Išbandyk pilną versiją', '2rasi kataloge pagrindiniu „Multipliers“ eksperimentu naudojama 15 situacijų versija.', 'Pradėti Multipliers ↗']
    },

    divergent: {
      description: 'OCEAN pagrindu sukurta asmenybės refleksijos schema su papildomu tyrinėjamu archetipų sluoksniu.',
      kicker: 'OCEAN refleksija · LT',
      lead: 'Penkios plačios asmenybės dimensijos, matomos kaip žemėlapis, o ne dėžutė, su papildomu tyrinėjamu archetipų sluoksniu.',
      meta: ['8–10 min.', '60 teiginių', '5 OCEAN dimensijos', '8 tyrinėjami archetipai'],
      actions: ['Pradėti Divergent ↗', 'Suprasti OCEAN'],
      sections: [
        {
          title: 'Ką jis tyrinėja',
          paragraphs: [
            'Divergent remiasi Big Five / OCEAN struktūra. Užuot klausęs „koks tavo tipas?“, jis žiūri į penkias tęstines dimensijas. Kiekvienoje gali būti aukščiau, žemiau arba kažkur per vidurį.',
            'Eksperimentas prideda ir antrą, žaismingesnį interpretacijos sluoksnį: aštuonis 2rasi archetipus, sudarytus iš bendro dimensijų modelio.'
          ]
        },
        { title: 'Penkios OCEAN dimensijos', paragraphs: [] },
        {
          title: 'Archetipų sluoksnis',
          paragraphs: [
            'Divergent taip pat parodo artumą aštuoniems tyrinėjamiems archetipams: Conductor, Analyst, Diplomat, Innovator, Stabilizer, Mentor, Driver ir Architect.',
            'Šie archetipai yra 2rasi interpretacijos sluoksnis. Jie nėra Big Five modelio dalis ir turėtų būti skaitomi kaip kvietimai refleksijai, o ne asmenybės diagnozės.'
          ]
        },
        {
          title: 'Kaip skaityti rezultatą',
          paragraphs: [
            'Ieškok įtampų ir derinių. Naudingas rezultatas nėra „aš esu Architect“. Naudingesnis klausimas: <em>kurios tendencijos viena kitą sustiprina, o kur jos traukia skirtingomis kryptimis?</em>',
            'Divergent įkvėptas Big Five / OCEAN modelio, tačiau nėra oficialus ar nepriklausomai validuotas Big Five instrumentas.'
          ]
        }
      ],
      model: [
        ['Atvirumas patirčiai', 'Smalsumas, vaizduotė, naujumas ir komfortas su naujomis idėjomis.'],
        ['Sąmoningumas', 'Struktūra, nuoseklus užbaigimas, planavimas ir patikimumas.'],
        ['Ekstraversija', 'Socialinė energija, ekspresyvumas ir įsitraukimas į išorinį pasaulį.'],
        ['Sutariamumas', 'Bendradarbiavimas, empatija, pasitikėjimas ir orientacija į darną.'],
        ['Neurotiškumas', 'Jautrumas stresui, neapibrėžtumui ir neigiamam emociniam suaktyvėjimui.']
      ],
      side: ['Pasiruošęs pamatyti modelį?', 'Atsakyk į visus 60 teiginių pagal tai, kas paprastai yra tiesa, o ne pagal tai, kaip norėtum save apibūdinti.', 'Pradėti Divergent ↗']
    },

    'situational-leadership': {
      description: 'Vadovavimo refleksija apie tai, kaip tavo požiūris keičiasi priklausomai nuo kompetencijos, pasitikėjimo ir konteksto.',
      kicker: 'Vadovavimo refleksija · LT',
      lead: 'Vadovavimas nėra vienas nekintantis stilius. Šis eksperimentas klausia, kaip tavo reakcija kinta priklausomai nuo žmogaus, užduoties ir neapibrėžtumo lygio.',
      meta: ['20 pagrindinių situacijų', '3 ribinės situacijos', '4 vadovavimo kryptys', 'Lietuvių kalba'],
      actions: ['Pradėti refleksiją ↗', 'Suprasti modelį'],
      sections: [
        {
          title: 'Ką jis tyrinėja',
          paragraphs: [
            'Tas pats vadovavimo elgesys vienoje situacijoje gali būti naudingas, o kitoje trukdyti. Eksperimentas pateikia praktines situacijas ir stebi, kokio tipo reakcijas dažniausiai renkiesi.',
            'Dėmesys skiriamas lankstumui: ar gali padidinti krypties aiškumą, palaikymą, įtraukimą ar autonomiją tada, kai to reikalauja situacija.'
          ]
        },
        { title: 'Keturios reakcijos kryptys', paragraphs: [] },
        {
          title: 'Kam reikalingos ribinės situacijos?',
          paragraphs: [
            'Trys papildomi scenarijai, krizė, eksperto autonomija ir sauga, tikrina, ar tavo įprasta tendencija pasikeičia, kai kontekstas tampa ryškesnis.',
            'Tai nėra diagnostinis „lankstumo balas“. Tai kvietimas pastebėti, ar gali atsitraukti nuo savo numatytos reakcijos, kai situacija aiškiai pasikeičia.'
          ]
        },
        {
          title: 'Kaip skaityti rezultatą',
          paragraphs: [
            'Neieškok „geriausio stiliaus“. Žiūrėk į savo pasirinkimų pasiskirstymą. Mišrus profilis gali būti informatyvesnis už vieną dominuojančią etiketę.',
            'Tai nepriklausomas situacinio vadovavimo refleksijos įrankis, o ne validuotas diagnostinis instrumentas ar oficialus komercinės vadovavimo programos vertinimas.'
          ]
        }
      ],
      model: [
        ['S1 · Nurodymas', 'Daugiau struktūros, aiškesnės instrukcijos ir artimesnis vedimas, kai trūksta aiškumo ar kompetencijos.'],
        ['S2 · Ugdymas', 'Kryptis kartu su paaiškinimu, padrąsinimu ir dialogu, kol gebėjimai dar vystosi.'],
        ['S3 · Palaikymas', 'Mažiau užduoties nurodymų ir daugiau klausymosi, įtraukimo bei pasitikėjimo stiprinimo.'],
        ['S4 · Delegavimas', 'Daugiau autonomijos ir atsakomybės, kai kompetencija ir pasitikėjimas jau yra stiprūs.']
      ],
      side: ['Kokios reakcijos griebiesi pirmiausia?', 'Rinkis tai, ką iš tikrųjų darytum kiekvienoje situacijoje, ypač kai „teisingesnis“ atsakymas atrodo akivaizdus.', 'Pradėti refleksiją ↗']
    },

    'drama-triangle': {
      description: 'Savirefleksijos eksperimentas, padedantis pastebėti, į kokį vaidmenį gali lengviau įslysti kylant įtampai.',
      kicker: 'Konflikto refleksija · LT',
      lead: 'Kylant įtampai žmonės gali įkristi į pažįstamus sąveikos modelius. Ši refleksija padeda pastebėti, kuri kryptis tau gali tapti lengviausiai pasiekiama.',
      meta: ['18 teiginių', '3 elgesio kryptys', 'Lietuvių kalba', 'Duomenys tik naršyklėje'],
      actions: ['Pradėti refleksiją ↗', 'Suprasti trikampį'],
      sections: [
        {
          title: 'Ką jis tyrinėja',
          paragraphs: [
            'Karpmano dramos trikampis aprašo tris pasikartojančias pozicijas, kurios gali atsirasti įtemptuose santykiuose ar konflikte: Auką, Gelbėtoją ir Persekiotoją. Tai elgesys dinamiškoje situacijoje, o ne nuolatinės tapatybės.',
            'Priklausomai nuo santykio, spaudimo ir konteksto gali judėti tarp šių pozicijų.'
          ]
        },
        { title: 'Trys kryptys įtampoje', paragraphs: [] },
        {
          title: 'Išėjimo kryptis',
          paragraphs: [
            'Refleksija kiekvieną dramos poziciją susieja su konstruktyvesne kryptimi: Auką su Kūrėju, Gelbėtoją su Treneriu, o Persekiotoją su Iššūkio kėlėju.',
            'Tikslas nėra panaikinti įtampą. Tikslas yra anksčiau pastebėti poslinkį ir pasirinkti reakciją, kurioje daugiau veiksnumo, aiškesnių ribų ir daugiau pagarbos atsakomybei.'
          ]
        },
        {
          title: 'Kaip skaityti rezultatą',
          paragraphs: [
            'Profilis yra santykinis. Aukštesnė juosta reiškia, kad tas modelis tavo atsakymuose pasirodė dažniau nei kitos dvi kryptys. Tai nėra klinikinis balas ar teiginys apie tai, kas tu esi.',
            'Tai nepriklausoma 2rasi refleksija, įkvėpta Stepheno Karpmano dramos trikampio. Tai nėra oficialus Karpmano vertinimas ar diagnostinis instrumentas.'
          ]
        }
      ],
      model: [
        ['Auka', 'Mažas veiksnumo jausmas, laukimas, kad problemą išspręs kiti, arba dėmesys tam, ko negalima pakeisti.'],
        ['Gelbėtojas', 'Atsakomybės už kitų problemas perėmimas, pagalba neprašius arba kitų galimybių prisiimti savo dalį mažinimas.'],
        ['Persekiotojas', 'Poslinkis į kaltinimą, spaudimą ar kontrolę, kai centre atsiduria standartai, klaidos ar nusivylimas.']
      ],
      side: ['Pastebėk poslinkį anksčiau už etiketę', 'Galvok apie realias konfliktines situacijas. Naudingas klausimas ne „koks mano vaidmuo?“, o „ką pradedu daryti, kai kyla spaudimas?“', 'Pradėti refleksiją ↗']
    },

    'strategic-thinking': {
      description: 'Savirefleksijos eksperimentas apie sisteminį mąstymą, perspektyvos keitimą ir refleksiją.',
      kicker: 'Mąstymo refleksija · LT',
      lead: '15 situacijų refleksija apie tris veiksmus, kurie dažnai svarbūs strateginiam mąstymui: matyti sistemas, pakeisti problemos rėmą ir mokytis iš sprendimų.',
      meta: ['15 situacijų', '3 dimensijos', 'Lietuvių kalba', 'Duomenys tik naršyklėje'],
      actions: ['Pradėti refleksiją ↗', 'Suprasti modelį'],
      sections: [
        {
          title: 'Ką jis tyrinėja',
          paragraphs: [
            'Strateginis mąstymas čia nėra sutraukiamas į vieną balą. Eksperimentas atskiria tris skirtingus mąstymo įpročius ir klausia, kurie iš jų natūraliau atsiranda tavo pasirinkimuose.',
            'Trijų dalių struktūra įkvėpta strateginio mąstymo tyrimų, kurie išskiria sisteminį mąstymą, perspektyvos keitimą ir refleksiją.'
          ]
        },
        { title: 'Trys mąstymo veiksmai', paragraphs: [] },
        {
          title: 'Kodėl nėra vieno „strategiškumo“ balo',
          paragraphs: [
            'Bendras balas gali paslėpti įdomų disbalansą. Žmogus gali gerai matyti sistemą, bet retai kvestionuoti pradinį problemos rėmą. Kitas gali lengvai generuoti alternatyvias perspektyvas, bet pernelyg greitai judėti toliau ir nepasimokyti iš rezultatų.',
            'Todėl profilį naudingiau skaityti kaip tris kryptis palyginimui, o ne kaip reitingą, kiek esi „strategiškas“.'
          ]
        },
        {
          title: 'Kaip naudoti rezultatą',
          paragraphs: [
            'Pradėk nuo rečiausiai naudojamos krypties ir mėnesiui pasirink vieną praktiką: prielaidų patikrą, alternatyvius scenarijus, sprendimų retrospektyvas, priešingų perspektyvų paiešką ar tarp-funkcinį ryšių žemėlapį.',
            'Šis 2rasi eksperimentas įkvėptas strateginio mąstymo literatūros ir trijų dimensijų STQ struktūros, tačiau nėra oficialus STQ klausimynas ir nėra validuotas diagnostinis instrumentas.'
          ]
        }
      ],
      model: [
        ['Sistemos', 'Žiūrėti už lokalios problemos ribų į ryšius, pasekmes, prielaidas ir platesnę sistemą.'],
        ['Perspektyvos keitimas', 'Keisti klausimą, perspektyvą ar problemos apibrėžimą, užuot tik intensyviau ieškojus atsakymo pradiniame rėme.'],
        ['Refleksija', 'Nagrinėti sprendimus, prielaidas, sėkmes ir nesėkmes, kad patirtis taptų panaudojamu mokymusi.']
      ],
      side: ['Kurį mąstymo veiksmą pamiršti?', 'Stipriausia įžvalga gali ateiti ne iš aukščiausio rezultato, o iš dimensijos, kurią naudoji rečiausiai.', 'Pradėti refleksiją ↗']
    }
  };

  const page = pages[slug];
  if (!page) return;

  document.documentElement.lang = lang;

  const nav = document.querySelector('.tool-header nav');
  if (nav) {
    const links = nav.querySelectorAll('a:not(.language-switch)');
    if (lang === 'lt') {
      if (links[0]) links[0].textContent = 'Eksperimentai';
      if (links[1]) links[1].textContent = 'Apie';
    }
    let switcher = nav.querySelector('.language-switch');
    if (!switcher) {
      switcher = document.createElement('a');
      switcher.className = 'language-switch';
      nav.appendChild(switcher);
    }
    const targetHost = lang === 'lt' ? '2rasi.com' : '2rasi.lt';
    switcher.textContent = lang === 'lt' ? 'EN' : 'LT';
    switcher.href = `https://${targetHost}${window.location.pathname}`;
    switcher.setAttribute('aria-label', lang === 'lt' ? 'Switch to English' : 'Perjungti į lietuvių kalbą');
  }

  if (lang !== 'lt') return;

  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && value !== undefined) el.textContent = value;
  };
  const setHtml = (el, value) => {
    if (el && value !== undefined) el.innerHTML = value;
  };
  const setList = (selector, values) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (values[i] !== undefined) el.textContent = values[i];
    });
  };

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', page.description);

  setText('.tool-hero .kicker', page.kicker);
  setText('.tool-hero .lead', page.lead);
  setList('.tool-hero .tool-meta span', page.meta);
  setList('.tool-hero .tool-actions .button', page.actions);

  const sections = document.querySelectorAll('.tool-section');
  page.sections.forEach((sectionCopy, i) => {
    const section = sections[i];
    if (!section) return;
    const heading = section.querySelector('h2');
    if (heading) heading.textContent = sectionCopy.title;
    const paragraphs = section.querySelectorAll(':scope > p');
    sectionCopy.paragraphs.forEach((value, pIndex) => setHtml(paragraphs[pIndex], value));
  });

  const modelItems = document.querySelectorAll('#model .model-item');
  page.model.forEach((itemCopy, i) => {
    const item = modelItems[i];
    if (!item) return;
    const strong = item.querySelector('strong');
    const span = item.querySelector('span');
    if (strong) strong.textContent = itemCopy[0];
    if (span) span.textContent = itemCopy[1];
  });

  const side = document.querySelector('.side-card');
  if (side) {
    const title = side.querySelector('h3');
    const paragraph = side.querySelector('p');
    const button = side.querySelector('.button');
    if (title) title.textContent = page.side[0];
    if (paragraph) paragraph.textContent = page.side[1];
    if (button) button.textContent = page.side[2];
  }

  const footer = document.querySelector('.tool-footer');
  if (footer) {
    const brand = footer.querySelector('span');
    const back = footer.querySelector('a');
    if (brand) brand.textContent = '2rasi · Pažvelk dar kartą.';
    if (back) back.textContent = '← Grįžti į eksperimentus';
  }
})();

// Legacy runtimes now live under the same 2rasi domain. Keep local navigation
// in the same browsing context and use an internal arrow rather than the
// external-link symbol. True external systems keep their ↗ marker.
(() => {
  document.querySelectorAll('a[href^="/tools/"]').forEach((link) => {
    link.target = '_self';
    link.removeAttribute('rel');
    if (link.textContent.includes('↗')) link.textContent = link.textContent.replace('↗', '→');
  });
})();

// Match Lithuanian page titles to the phrases people actually use when
// searching for these reflection tools. This changes browser/search metadata,
// not the test model or visible result semantics.
(() => {
  const host = window.location.hostname.toLowerCase();
  if (!(host === '2rasi.lt' || host.endsWith('.2rasi.lt'))) return;
  const slug = window.location.pathname.split('/').filter(Boolean).pop() || '';
  const titles = {
    mirror: 'Savirefleksijos testas „Veidrodis“ — 2rasi',
    multipliers: 'Vadovavimo refleksijos testas „Multipliers“ — 2rasi',
    divergent: 'Big Five / OCEAN asmenybės refleksijos testas — 2rasi',
    'situational-leadership': 'Situacinio vadovavimo testas — 2rasi',
    'drama-triangle': 'Karpmano dramos trikampio testas — 2rasi',
    'strategic-thinking': 'Strateginio mąstymo testas — 2rasi'
  };
  if (titles[slug]) document.title = titles[slug];
})();
