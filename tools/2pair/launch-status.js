(() => {
  const lang = window.RASI_LANG === 'lt' ? 'lt' : 'en';
  const pilotUrl = 'https://omesg360.eu/2pair/releases/2pair-integrated-v0.1/';
  const text = lang === 'lt' ? {
    kicker: 'Integruotas pilotas aktyvus',
    lead: 'Kuriama refleksijos sistema. Wave 1 stimulų validacija ir greito pasirinkimo timing dabar sujungti į vieną integruotą pilotą.',
    meta: ['Kuriamas produktas', 'Integruotas tyrimo pilotas', 'Greitas vizualinis pasirinkimas', 'Refleksija po pasirinkimo'],
    open: 'Atidaryti 2Pair pilotą ↗',
    exploreTitle: 'Ką tiriame',
    exploreP1: '2Pair remiasi stebėjimu, o ne vienkartine asmenybės etikete. Integruotas pilotas sujungia greitus vizualinius pasirinkimus, mechaninį pasirinkimo laiką ir vėlesnę refleksiją apie tai, kas nulėmė pasirinkimą.',
    exploreP2: 'Dabartinis pilotas vis dar eksperimentinis. Jo užduotis yra patikrinti sąveiką, timing mechaniką, stimulų kokybę ir refleksijos eigą prieš užfiksuojant produkto modelį.',
    modelTitle: 'Darbinė idėja',
    model: [
      ['Pasirink prieš paaiškindamas', 'Pirmą vizualinį pasirinkimą užfiksuoti prieš prašant žmogaus jį paaiškinti.'],
      ['Pažiūrėk dar kartą', 'Po pasirinkimo grįžti prie poros ir pastebėti, kas jį nulėmė, įskaitant atvejus, kai aiškaus pasirinkimo nebuvo.'],
      ['Reflektuoti, ne diagnozuoti', 'Dabartinis rezultatas yra sesijos pasirinkimų pėdsakas, o ne asmenybės balas, diagnozė ar prognozė.']
    ],
    changedTitle: 'Kas pasikeitė',
    changedP1: 'Ankstesni Wave 1 ir Calibration pilotai atskirai tikrino skirtingas metodo dalis. Naujasis Integrated Pilot sujungia jų mechaniką į vieną dalyvio eigą, išlaikydamas atskiras duomenų ribas analizei.',
    changedP2: 'Timing vis dar vertinamas tik mechaniškai. Dabartinis bendras 6000 ms langas yra eksperimentinis kandidatas, o ne patvirtinta psichologinė riba.',
    participationTitle: 'Apie dalyvavimą',
    participationP1: 'Integrated Pilot yra <strong>18+ eksperimentinis timing / UX ir stimulų validacijos tyrimas</strong>. Jis nevertina asmenybės, psichologinių savybių, tinkamumo darbui ar sveikatos.',
    participationP2: 'Galima tęsti lokaliai neįkeliant tyrimo duomenų. Savanoriškai sutikus su įkėlimu saugomas pseudoniminis sesijos ID, vizualiniai pasirinkimai, mechaninis pasirinkimo laikas ir tavo pateikta neprivaloma refleksija.',
    privacy: 'Skaityti privatumo informaciją ↗',
    sideTitle: 'Tyrimas, ne galutinis įrankis',
    sideBody: 'Dalyvaujant verta stebėti pačią patirtį ir savo pasirinkimus, o ne ieškoti galutinio balo. Dabartinio piloto tikslas yra rinkti įrodymus ir gerinti metodą.'
  } : {
    kicker: 'Integrated pilot active',
    lead: 'A reflection framework in development. Wave 1 stimulus validation and rapid-choice timing are now combined in one integrated pilot.',
    meta: ['Product in development', 'Integrated research pilot', 'Rapid visual choice', 'Post-choice reflection'],
    open: 'Open 2Pair Pilot ↗',
    exploreTitle: 'What is being explored',
    exploreP1: '2Pair is built around observation rather than a one-shot personality label. The integrated pilot combines rapid visual choices, mechanical response timing and a later reflection on what influenced those choices.',
    exploreP2: 'The current pilot is still experimental. Its job is to test the interaction, timing mechanics, stimulus quality and the usefulness of the reflection flow before the product model is fixed.',
    modelTitle: 'The working idea',
    model: [
      ['Choose before explaining', 'Capture the first visual choice before asking the participant to explain it.'],
      ['Look again', 'Return to the pair afterwards and notice what influenced the choice, including when there was no clear choice.'],
      ['Reflect, do not diagnose', 'The current output is a trace of the session, not a personality score, diagnosis or prediction.']
    ],
    changedTitle: 'What changed',
    changedP1: 'The earlier Wave 1 and Calibration pilots tested different parts of the method separately. The new Integrated Pilot brings those mechanics into one participant flow while keeping their data boundaries visible for analysis.',
    changedP2: 'Timing is still treated mechanically. The current shared 6000 ms window is an experimental candidate, not a validated psychological threshold.',
    participationTitle: 'About participation',
    participationP1: 'The Integrated Pilot is an <strong>18+ experimental timing / UX and stimulus-validation study</strong>. It does not assess personality, psychological traits, employment suitability or health.',
    participationP2: 'You can continue locally without uploading research data. If you voluntarily opt in to upload, the study stores a pseudonymous session ID, visual choices, mechanical timing and the optional reflection you submit.',
    privacy: 'Read the privacy information ↗',
    sideTitle: 'Research, not a finished tool',
    sideBody: 'If you participate, notice the experience and your own choices rather than looking for a definitive score. The current pilot is designed to collect evidence and improve the method.'
  };

  const kicker = document.querySelector('.tool-hero .kicker');
  const lead = document.querySelector('.tool-hero .lead');
  if (kicker) kicker.textContent = text.kicker;
  if (lead) lead.textContent = text.lead;

  document.querySelectorAll('.tool-meta span').forEach((node, i) => {
    if (text.meta[i]) node.textContent = text.meta[i];
  });

  document.querySelectorAll('.tool-hero .tool-actions a, .side-card a').forEach(a => {
    a.textContent = text.open;
    a.href = pilotUrl;
    a.target = '_blank';
    a.rel = 'noopener';
  });

  const sections = document.querySelectorAll('.tool-section');
  if (sections[0]) {
    const h2 = sections[0].querySelector('h2');
    const ps = sections[0].querySelectorAll('p');
    if (h2) h2.textContent = text.exploreTitle;
    if (ps[0]) ps[0].textContent = text.exploreP1;
    if (ps[1]) ps[1].textContent = text.exploreP2;
  }

  if (sections[1]) {
    const h2 = sections[1].querySelector('h2');
    if (h2) h2.textContent = text.modelTitle;
    sections[1].querySelectorAll('.model-item').forEach((item, i) => {
      const strong = item.querySelector('strong');
      const span = item.querySelector('span');
      if (text.model[i]) {
        if (strong) strong.textContent = text.model[i][0];
        if (span) span.textContent = text.model[i][1];
      }
    });
  }

  if (sections[2]) {
    const h2 = sections[2].querySelector('h2');
    const ps = sections[2].querySelectorAll('p');
    if (h2) h2.textContent = text.changedTitle;
    if (ps[0]) ps[0].textContent = text.changedP1;
    if (ps[1]) ps[1].textContent = text.changedP2;
  }

  const boundary = document.querySelector('.calibration-boundary');
  if (boundary) {
    const h2 = boundary.querySelector('h2');
    const ps = boundary.querySelectorAll('p');
    if (h2) h2.textContent = text.participationTitle;
    if (ps[0]) ps[0].innerHTML = text.participationP1;
    if (ps[1]) ps[1].textContent = text.participationP2;
    const privacy = boundary.querySelector('a');
    if (privacy) privacy.textContent = text.privacy;
  }

  const side = document.querySelector('.side-card');
  if (side) {
    const h3 = side.querySelector('h3');
    const p = side.querySelector('p');
    if (h3) h3.textContent = text.sideTitle;
    if (p) p.textContent = text.sideBody;
  }
})();
