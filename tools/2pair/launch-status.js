(() => {
  const lang = window.RASI_LANG === 'lt' ? 'lt' : 'en';
  const text = lang === 'lt' ? {
    meta: 'Calibration v0.1 · paruoštas',
    open: 'Atidaryti Calibration ↗',
    whyTitle: 'Kodėl yra du tyrimo palydovai',
    whyBody: 'Wave 1 tikrina porų balansą ir kitą pasirinkimo mechaniką. Calibration v0.1 daugiausia orientuotas į greito pasirinkimo ir pasirinkimo laiko mechaniką. Abu turi atskiras tyrimo užduotis prieš užfiksuojant galutinį 2Pair mechanizmą.',
    whyNote: 'Abu palydovai laikini. Jų užduotis yra padėti apsibrėžti galutinį 2Pair mechanizmą ir tada pasitraukti.',
    calTitle: 'Apie dalyvavimą Calibration',
    calP1: 'Calibration yra 18+ mechaninio pasirinkimo laiko / UX tyrimas. Jis nevertina asmenybės, psichologinių savybių, tinkamumo darbui ar sveikatos.',
    calP2: 'Galima tęsti lokaliai neįkeliant tyrimo duomenų. Savanoriškai sutikus su įkėlimu saugoma tik pseudoniminė pasirinkimo laiko ir techninė telemetrija; refleksijos tekstas ir intensyvumas lieka tik naršyklėje.',
    privacy: 'Skaityti Calibration privatumo pranešimą ↗',
    sideTitle: 'Tyrimas, ne galutinis įrankis',
    sideBody: 'Dalyvaujant verta išlaikyti smalsumą: pastebėti pačią patirtį ir jos keliamus klausimus, o ne ieškoti galutinio balo.'
  } : {
    meta: 'Calibration v0.1 · ready',
    open: 'Open Calibration ↗',
    whyTitle: 'Why there are two research satellites',
    whyBody: 'Wave 1 tests pair balance and other choice mechanics. Calibration v0.1 focuses mainly on rapid-choice and selection-timing mechanics. Both have separate research jobs before the final 2Pair mechanism is fixed.',
    whyNote: 'Both satellites are temporary. Their job is to inform the final 2Pair mechanism, then step out of the way.',
    calTitle: 'About Calibration participation',
    calP1: 'Calibration is an 18+ mechanical timing / UX study. It does not assess personality, psychological traits, employment suitability or health.',
    calP2: 'You can continue locally without uploading research data. If you voluntarily opt in to research upload, the study stores pseudonymous timing and technical telemetry only; reflection text and intensity remain local to your browser.',
    privacy: 'Read the Calibration privacy notice ↗',
    sideTitle: 'Research, not a finished tool',
    sideBody: 'If you participate, the useful mindset is curiosity: notice the experience and the questions it creates rather than looking for a definitive score.'
  };

  const meta = document.querySelector('.tool-meta span:nth-child(4)');
  if (meta) meta.textContent = text.meta;

  const heroActions = document.querySelectorAll('.tool-hero .tool-actions > *');
  if (heroActions[1]) {
    heroActions[1].textContent = text.open;
    heroActions[1].setAttribute('href', 'https://omesg360.eu/conflictlab/releases/calibration-v0.1/');
    heroActions[1].setAttribute('target', '_blank');
    heroActions[1].setAttribute('rel', 'noopener');
  }

  const sections = document.querySelectorAll('.tool-section');
  if (sections[2]) {
    const h2 = sections[2].querySelector('h2');
    const ps = sections[2].querySelectorAll('p');
    if (h2) h2.textContent = text.whyTitle;
    if (ps[0]) ps[0].textContent = text.whyBody;
    if (ps[1]) ps[1].textContent = text.whyNote;
  }

  const boundary = document.querySelector('.calibration-boundary');
  if (boundary) {
    const h2 = boundary.querySelector('h2');
    const ps = boundary.querySelectorAll('p');
    if (h2) h2.textContent = text.calTitle;
    if (ps[0]) ps[0].innerHTML = text.calP1.replace('18+', '<strong>18+</strong>');
    if (ps[1]) ps[1].textContent = text.calP2;
    const privacy = boundary.querySelector('a');
    if (privacy) privacy.textContent = text.privacy;
  }

  const side = document.querySelector('.side-card');
  if (side) {
    const h3 = side.querySelector('h3');
    const p = side.querySelector('p');
    const a = side.querySelector('a');
    if (h3) h3.textContent = text.sideTitle;
    if (p) p.textContent = text.sideBody;
    if (a) {
      a.textContent = text.open;
      a.href = 'https://omesg360.eu/conflictlab/releases/calibration-v0.1/';
    }
  }
})();
