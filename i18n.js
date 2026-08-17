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

  function addLanguageSwitch() {
    const nav = document.querySelector('header nav');
    if (!nav || nav.querySelector('.language-switch')) return;

    const link = document.createElement('a');
    link.className = 'language-switch';
    link.textContent = lang === 'lt' ? 'EN' : 'LT';

    const targetHost = lang === 'lt' ? '2rasi.com' : '2rasi.lt';
    if (host === '2rasi.com' || host === 'www.2rasi.com' || host === '2rasi.lt' || host === 'www.2rasi.lt') {
      link.href = `https://${targetHost}${window.location.pathname}${window.location.search}${window.location.hash}`;
    } else {
      const next = new URL(window.location.href);
      next.searchParams.set('lang', lang === 'lt' ? 'en' : 'lt');
      link.href = next.toString();
    }
    link.setAttribute('aria-label', lang === 'lt' ? 'English version' : 'Lietuviška versija');
    nav.appendChild(link);
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
          ['Wave 1 + Calibration v0.1 live', 'Wave 1 + Calibration v0.1']
        ],
        actions: [['About', 'Apie'], ['Wave 1', 'Wave 1'], ['Calibration', 'Calibration']]
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
        state: ['Prototype · LT', 'Prototipas · LT'],
        summary: ['A multi-rater leadership development cycle connecting 360° feedback with reflection, a 90-day plan and repeat measurement.', 'Daugiapakopis vadovavimo tobulėjimo ciklas, jungiantis 360° grįžtamąjį ryšį, refleksiją, 90 dienų planą ir pakartotinį matavimą.'],
        meta: [['75 statements · 15 competencies', '75 teiginiai · 15 kompetencijų'], ['Professional track', 'Profesionali kryptis']],
        actions: [['About', 'Apie'], ['Professional page', 'Profesionalus puslapis']]
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
        if (!copy.actions[i]) return;
        const arrow = el.querySelector('span')?.textContent || '';
        const label = lang === 'lt' ? copy.actions[i][1] : copy.actions[i][0];
        el.childNodes[0].nodeValue = `${label} `;
        if (arrow && !el.querySelector('span')) el.append(arrow);
      });
    });

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
  }

  function translate2Pair() {
    set('.tool-header nav a:nth-child(1)', 'Experiments', 'Eksperimentai');
    set('.tool-header nav a:nth-child(2)', 'About', 'Apie');
    set('.tool-hero .kicker', 'Research active', 'Tyrimas vyksta');
    set('.tool-hero .lead', 'A reflection framework in development. The current public experiences are research satellites used to calibrate and test parts of the approach.', 'Kuriama refleksijos sistema. Dabartinės viešos patirtys yra laikini tyrimo palydovai, skirti atskiroms metodo dalims kalibruoti ir tikrinti.');
    setAll('.tool-meta span', [
      ['Product in development', 'Kuriamas produktas'],
      ['Temporary research satellites', 'Laikini tyrimo palydovai'],
      ['Wave 1', 'Wave 1'],
      ['Calibration v0.1', 'Calibration v0.1']
    ]);
    setAll('.tool-hero .tool-actions a', [
      ['Join Wave 1 ↗', 'Dalyvauti Wave 1 ↗'],
      ['Calibration v0.1 ↗', 'Calibration v0.1 ↗']
    ]);

    const sections = document.querySelectorAll('.tool-section');
    if (sections[0]) {
      sections[0].querySelector('h2').textContent = lang === 'lt' ? 'Ką tiriame' : 'What is being explored';
      setAll('.tool-section:nth-of-type(1) p', [
        ['2Pair is built around repeated observation rather than a one-shot personality label. The broader project asks whether small choices, observed across multiple sessions, can support useful self-reflection without pretending to diagnose the person.', '2Pair remiasi pakartotiniu stebėjimu, o ne vienkartine asmenybės etikete. Projektas tiria, ar maži pasirinkimai, stebimi per kelias sesijas, gali padėti prasmingai savirefleksijai neapsimetant, kad žmogus yra diagnozuojamas.'],
        ['The public studies are not the final product. They are temporary research tools used to test calibration, stimulus design and the quality of the reflections produced.', 'Vieši tyrimai nėra galutinis produktas. Tai laikini tyrimo įrankiai, skirti kalibravimui, stimulų dizainui ir gaunamos refleksijos kokybei tikrinti.']
      ]);
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

    const why = Array.from(document.querySelectorAll('.tool-section')).find((s) => s.querySelector('h2')?.textContent.includes('Why there are two public links'));
    if (why) {
      why.querySelector('h2').textContent = lang === 'lt' ? 'Kodėl yra dvi tyrimo nuorodos' : 'Why there are two public links';
      const ps = why.querySelectorAll('p');
      if (ps[0]) ps[0].textContent = lang === 'lt'
        ? 'Wave 1 ir Calibration v0.1 tikrina skirtingas tyrimo proceso dalis. Tobulėjant pagrindinei sistemai jos gali keistis arba išnykti.'
        : 'Wave 1 and Calibration v0.1 test different parts of the research process. They may change or disappear as the main framework develops.';
      if (ps[1]) ps[1].textContent = lang === 'lt'
        ? 'Tai yra dalyvavimo tyrime patirtys, o ne užbaigti 2rasi produktai.'
        : 'Treat these as research participation experiences, not finished 2rasi products.';
    }

    set('.side-card h3', 'Research, not a finished tool', 'Tyrimas, ne galutinis įrankis');
    set('.side-card p', 'If you participate, the useful mindset is curiosity: notice the experience and the questions it creates rather than looking for a definitive score.', 'Jei dalyvauji, svarbiausia smalsumas: pastebėk patirtį ir jos keliamus klausimus, o ne ieškok galutinio balo.');
    set('.side-card .button', 'Open Wave 1 ↗', 'Atidaryti Wave 1 ↗');
    set('.tool-footer a', '← Back to experiments', '← Grįžti į eksperimentus');
  }

  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '' || path === '/' || /\/index\.html$/.test(path)) translateHome();
  if (path.endsWith('/tools/2pair') || path.endsWith('/tools/2pair/index.html')) translate2Pair();

  addLanguageSwitch();
})();
