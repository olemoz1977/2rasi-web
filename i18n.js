(() => {
  const host = window.location.hostname.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const forced = params.get('lang');
  const lang = forced === 'lt' || forced === 'en'
    ? forced
    : (host === '2rasi.lt' || host.endsWith('.2rasi.lt') ? 'lt' : 'en');

  window.RASI_LANG = lang;
  window.RASI_COPY = {
    hints: {
      en: {
        tiltTouch: 'TILT · TOUCH · NOTICE',
        touchTilt: 'TOUCH · TILT · NOTICE',
        dragTouch: 'DRAG · TOUCH · NOTICE'
      },
      lt: {
        tiltTouch: 'PAKREIPK · PALIESK · PASTEBĖK',
        touchTilt: 'PALIESK · PAKREIPK · PASTEBĖK',
        dragTouch: 'TEMPK · PALIESK · PASTEBĖK'
      }
    }
  };

  document.documentElement.lang = lang;

  const set = (selector, en, lt) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = lang === 'lt' ? lt : en;
  };

  const setAll = (selector, pairs) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      const pair = pairs[index];
      if (pair) el.textContent = lang === 'lt' ? pair[1] : pair[0];
    });
  };

  function setActionLabel(el, en, lt) {
    if (!el) return;
    const span = el.querySelector('span');
    const arrow = span?.textContent || '';
    const label = lang === 'lt' ? lt : en;
    if (span) {
      const textNode = Array.from(el.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
      if (textNode) textNode.nodeValue = `${label} `;
      else el.insertBefore(document.createTextNode(`${label} `), span);
      span.textContent = arrow;
    } else {
      el.textContent = label;
    }
  }

  function addLanguageSwitch() {
    const nav = document.querySelector('header nav');
    if (!nav) return;

    let link = nav.querySelector('.language-switch');
    if (!link) {
      link = document.createElement('a');
      link.className = 'language-switch';
      nav.appendChild(link);
    }

    const targetLang = lang === 'lt' ? 'EN' : 'LT';
    const targetHost = lang === 'lt' ? '2rasi.com' : '2rasi.lt';
    link.textContent = targetLang;

    if (host === '2rasi.com' || host === 'www.2rasi.com' || host === '2rasi.lt' || host === 'www.2rasi.lt') {
      link.href = `https://${targetHost}${window.location.pathname}${window.location.hash}`;
    } else {
      const next = new URL(window.location.href);
      next.searchParams.set('lang', lang === 'lt' ? 'en' : 'lt');
      link.href = next.toString();
    }

    link.setAttribute('aria-label', lang === 'lt' ? 'Switch to English' : 'Perjungti į lietuvių kalbą');
    link.setAttribute('title', lang === 'lt' ? 'English' : 'Lietuvių');
  }

  function translateHomeTail() {
    set('.manifesto-word', 'LOOK', 'ŽIŪRĖK');
    setAll('.manifesto-copy p', [
      ['Familiar first.', 'Pirmiausia pažįstama.'],
      ['Unexpected second.', 'Tada netikėta.'],
      ['Meaning third.', 'Galiausiai prasmė.']
    ]);
    set('#about .kicker', 'ABOUT', 'APIE');
    set('.about-lead', '2rasi is a place for experiments in perception, choice and reflection.', '2rasi yra vieta suvokimo, pasirinkimo ir refleksijos eksperimentams.');
    setAll('#about .about-copy > p:not(.kicker):not(.about-lead)', [
      ['Some begin with psychology. Some with work. Some with ordinary things we stopped noticing.', 'Vieni prasideda nuo psichologijos. Kiti nuo darbo. Dar kiti nuo paprastų dalykų, kurių nustojome pastebėti.'],
      ['What happens if we look again?', 'Kas nutinka, jei pažvelgiame dar kartą?']
    ]);

    const footerDomain = document.querySelector('.footer-links a:last-child');
    if (footerDomain) {
      footerDomain.textContent = lang === 'lt' ? '2rasi.lt' : '2rasi.com';
      footerDomain.href = lang === 'lt' ? 'https://2rasi.lt' : 'https://2rasi.com';
    }
  }

  function translateHome() {
    set('.site-header nav a:nth-child(1)', 'Experiments', 'Eksperimentai');
    set('.site-header nav a:nth-child(2)', 'About', 'Apie');
    set('.eyebrow', 'A small shift can change the view', 'Mažas poslinkis gali pakeisti vaizdą');
    set('#hero-title', 'Look again.', 'Pažvelk dar kartą.');
    set('.hero-sub', 'Tools and experiments for seeing things differently.', 'Įrankiai ir eksperimentai, padedantys pamatyti kitaip.');
    set('.hint', 'Move · look · notice', 'Judink · žiūrėk · pastebėk');
    set('.section-intro .kicker', 'EXPERIMENTS', 'EKSPERIMENTAI');
    set('#experiments-title', 'Small shifts.\nDifferent views.', 'Maži poslinkiai.\nKitas vaizdas.');

    const cards = {
      '2pair': {
        state: ['Research active', 'Tyrimas vyksta'],
        summary: ['A reflection framework being developed through temporary calibration and validation studies.', 'Refleksijos sistema, kuriama per laikinus kalibravimo ir validavimo tyrimus.'],
        meta: [
          ['Product in development', 'Kuriamas produktas'],
          ['Wave 1 public · Calibration pilot ready', 'Wave 1 viešas · Calibration pilotas paruoštas']
        ],
        actions: [['About', 'Apie'], ['Wave 1', 'Wave 1'], ['Calibration status', 'Calibration būsena']]
      },
      'mirror': {
        state: ['Live · EN/LT', 'Veikia · EN/LT'],
        summary: ['Notice what may be getting in your way.', 'Pastebėk, kas gali tau trukdyti.'],
        meta: [['Reflection experiment', 'Refleksijos eksperimentas'], ['English & Lithuanian', 'Anglų ir lietuvių']],
        actions: [['About', 'Apie'], ['Start', 'Pradėti']]
      },
      'multipliers': {
        state: ['Live · LT', 'Veikia · LT'],
        summary: ['A leadership reflection experiment inspired by the Multipliers framework.', 'Vadovavimo refleksijos eksperimentas, įkvėptas „Multipliers“ modelio.'],
        meta: [['Leadership reflection', 'Vadovavimo refleksija'], ['15 situations', '15 situacijų']],
        actions: [['About', 'Apie'], ['Start', 'Pradėti']]
      },
      'divergent': {
        state: ['Live · LT', 'Veikia · LT'],
        summary: ['A self-reflection experiment combining a Big Five profile with exploratory archetypes.', 'Savirefleksijos eksperimentas, jungiantis Big Five profilį su tyrinėjamais archetipais.'],
        meta: [['OCEAN reflection', 'OCEAN refleksija'], ['60 statements', '60 teiginių']],
        actions: [['About', 'Apie'], ['Start', 'Pradėti']]
      },
      'situational-leadership': {
        state: ['Live · LT', 'Veikia · LT'],
        summary: ['A leadership reflection tool for exploring how your approach shifts with the situation.', 'Vadovavimo refleksijos įrankis, padedantis pastebėti, kaip požiūris keičiasi priklausomai nuo situacijos.'],
        meta: [['Leadership reflection', 'Vadovavimo refleksija'], ['20 + 3 situations', '20 + 3 situacijos']],
        actions: [['About', 'Apie'], ['Start', 'Pradėti']]
      },
      'karpman': {
        state: ['Live · LT', 'Veikia · LT'],
        summary: ['A reflection on the roles we may slip into when tension rises.', 'Refleksija apie vaidmenis, į kuriuos galime įslysti augant įtampai.'],
        meta: [['Conflict patterns', 'Konflikto modeliai'], ['18 statements', '18 teiginių']],
        actions: [['About', 'Apie'], ['Start', 'Pradėti']]
      },
      'strategic-thinking': {
        state: ['Live · LT', 'Veikia · LT'],
        summary: ['A self-reflection experiment exploring systems thinking, reframing and reflection.', 'Savirefleksijos eksperimentas apie sisteminį mąstymą, perspektyvos keitimą ir refleksiją.'],
        meta: [['15 situations · 3 dimensions', '15 situacijų · 3 dimensijos'], ['Browser-only data', 'Duomenys tik naršyklėje']],
        actions: [['About', 'Apie'], ['Start', 'Pradėti']]
      },
      'leadership-360': {
        state: ['Live · LT/EN', 'Veikia · LT/EN'],
        summary: ['A multi-rater leadership development cycle connecting pseudonymous 360° feedback with a 90-day action plan and repeat measurement.', 'Kelių vertintojų lyderystės tobulėjimo ciklas, jungiantis pseudoniminį 360° grįžtamąjį ryšį, 90 dienų veiksmų planą ir pakartotinį matavimą.'],
        meta: [['75 statements · 15 competencies', '75 teiginiai · 15 kompetencijų'], ['C1 → 90 days → C2', 'C1 → 90 dienų → C2']],
        actions: [['About', 'Apie'], ['Start', 'Pradėti']]
      }
    };

    Object.entries(cards).forEach(([id, copy]) => {
      const root = document.getElementById(id);
      if (!root) return;
      const state = root.querySelector('.experiment-state');
      const summary = root.querySelector('.experiment-summary');
      if (state) state.textContent = lang === 'lt' ? copy.state[1] : copy.state[0];
      if (summary) summary.textContent = lang === 'lt' ? copy.summary[1] : copy.summary[0];
      root.querySelectorAll('.experiment-meta span').forEach((el, i) => {
        if (copy.meta[i]) el.textContent = lang === 'lt' ? copy.meta[i][1] : copy.meta[i][0];
      });
      root.querySelectorAll('.experiment-actions a').forEach((el, i) => {
        if (copy.actions[i]) setActionLabel(el, copy.actions[i][0], copy.actions[i][1]);
      });
    });

    const calibrationLink = document.querySelector('#2pair .experiment-actions a:nth-child(3)');
    if (calibrationLink) {
      calibrationLink.href = 'tools/2pair/';
      calibrationLink.removeAttribute('target');
      calibrationLink.removeAttribute('rel');
      setActionLabel(calibrationLink, 'Calibration status', 'Calibration būsena');
    }

    translateHomeTail();
  }

  function translate2Pair() {
    set('.tool-header nav a:nth-child(1)', 'Experiments', 'Eksperimentai');
    set('.tool-header nav a:nth-child(2)', 'About', 'Apie');
    set('.tool-hero .kicker', 'Research active', 'Tyrimas vyksta');
    set('.tool-hero .lead',
      'A reflection framework in development. The current research satellites test different parts of the approach before they are folded into the main product.',
      'Kuriama refleksijos sistema. Dabartiniai tyrimo palydovai tikrina skirtingas metodo dalis prieš jas sujungiant į pagrindinį produktą.'
    );
    setAll('.tool-meta span', [
      ['Product in development', 'Kuriamas produktas'],
      ['Temporary research satellites', 'Laikini tyrimo palydovai'],
      ['Wave 1 · public', 'Wave 1 · viešas'],
      ['Calibration v0.1 · pilot ready', 'Calibration v0.1 · pilotas paruoštas']
    ]);

    const heroActions = document.querySelectorAll('.tool-hero .tool-actions > *');
    if (heroActions[0]) heroActions[0].textContent = lang === 'lt' ? 'Dalyvauti Wave 1 ↗' : 'Join Wave 1 ↗';
    if (heroActions[1]) heroActions[1].textContent = lang === 'lt' ? 'Calibration · viešas paleidimas dar nepradėtas' : 'Calibration · public launch pending';

    const sections = document.querySelectorAll('.tool-section');
    if (sections[0]) {
      const heading = sections[0].querySelector('h2');
      if (heading) heading.textContent = lang === 'lt' ? 'Ką tiriame' : 'What is being explored';
      const ps = sections[0].querySelectorAll('p');
      if (ps[0]) ps[0].textContent = lang === 'lt'
        ? '2Pair remiasi pakartotiniu stebėjimu, o ne vienkartine asmenybės etikete. Projektas tiria, ar maži pasirinkimai, stebimi per kelias sesijas, gali padėti prasmingai savirefleksijai neapsimetant, kad žmogus yra diagnozuojamas.'
        : '2Pair is built around repeated observation rather than a one-shot personality label. The broader project asks whether small choices, observed across multiple sessions, can support useful self-reflection without pretending to diagnose the person.';
      if (ps[1]) ps[1].textContent = lang === 'lt'
        ? 'Tyrimo palydovai nėra galutinis produktas. Tai laikini įrankiai, skirti porų balansui, stimulų dizainui, pasirinkimo laikui ir gaunamos refleksijos kokybei tikrinti.'
        : 'The research satellites are not the final product. They are temporary tools used to test pair balance, stimulus design, selection timing and the quality of the reflections produced.';
    }

    set('#model h2', 'The working idea', 'Darbinė idėja');
    setAll('#model .model-item strong', [
      ['Observe choices', 'Stebėti pasirinkimus'],
      ['Look for repetition', 'Ieškoti pasikartojimo'],
      ['Reflect, do not diagnose', 'Reflektuoti, ne diagnozuoti']
    ]);
    setAll('#model .model-item span', [
      ['Use small decisions as signals rather than asking people to declare who they are.', 'Naudoti mažus sprendimus kaip signalus, užuot prašius žmogaus deklaruoti, kas jis yra.'],
      ['Patterns become more interesting when they recur across different situations and sessions.', 'Modeliai tampa įdomesni, kai kartojasi skirtingose situacijose ir sesijose.'],
      ['The output is designed to create a question worth noticing, not a fixed label or prediction.', 'Rezultatas skirtas sukurti klausimą, kurį verta pastebėti, o ne fiksuotą etiketę ar prognozę.']
    ]);

    if (sections[2]) {
      const heading = sections[2].querySelector('h2');
      if (heading) heading.textContent = lang === 'lt' ? 'Kodėl yra du tyrimo palydovai' : 'Why there are two research satellites';
      const ps = sections[2].querySelectorAll('p');
      if (ps[0]) ps[0].textContent = lang === 'lt'
        ? 'Wave 1 tikrina porų balansą ir kitą pasirinkimo mechaniką. Calibration v0.1 daugiausia orientuotas į greito pasirinkimo ir pasirinkimo laiko signalus. Calibration vidinis testavimas baigtas, bet viešas dalyvių kvietimas dar nepradėtas.'
        : 'Wave 1 tests pair balance and other mechanics. Calibration v0.1 is focused mainly on fast-choice and selection-timing signals. Calibration has completed internal testing but is not yet open for public recruitment.';
      if (ps[1]) ps[1].textContent = lang === 'lt'
        ? 'Abu palydovai laikini. Jų užduotis yra padėti apsibrėžti galutinį 2Pair mechanizmą ir tada pasitraukti.'
        : 'Both satellites are temporary. Their job is to inform the final 2Pair mechanism, then step out of the way.';
    }

    set('.side-card h3', 'Research, not a finished tool', 'Tyrimas, ne galutinis įrankis');
    set('.side-card p',
      'If you participate in an open study, the useful mindset is curiosity: notice the experience and the questions it creates rather than looking for a definitive score.',
      'Jei dalyvauji atvirame tyrime, svarbiausia smalsumas: pastebėk patirtį ir jos keliamus klausimus, o ne ieškok galutinio balo.'
    );
    set('.side-card .button', 'Open Wave 1 ↗', 'Atidaryti Wave 1 ↗');
    set('.tool-footer a', '← Back to experiments', '← Grįžti į eksperimentus');
  }

  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/' || /\/index\.html$/.test(path) && !path.includes('/tools/')) translateHome();
  if (path.endsWith('/tools/2pair') || path.endsWith('/tools/2pair/index.html')) translate2Pair();

  addLanguageSwitch();
  if (path === '/' || /\/index\.html$/.test(path) && !path.includes('/tools/')) {
    requestAnimationFrame(translateHomeTail);
    setTimeout(translateHomeTail, 0);
  }
})();