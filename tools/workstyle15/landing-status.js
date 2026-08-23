(() => {
  'use strict';
  const host = window.location.hostname.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const forced = params.get('lang');
  const lang = (forced === 'lt' || forced === 'en')
    ? forced
    : ((host === '2rasi.lt' || host.endsWith('.2rasi.lt')) ? 'lt' : 'en');

  const section = document.querySelectorAll('.tool-section')[5];
  const paragraph = section?.querySelectorAll('p')[1];
  if (!paragraph) return;

  paragraph.textContent = lang === 'lt'
    ? 'Užbaigta sesija pirmiausia lieka tavo naršyklėje. Piloto duomenis į tyrimo saugyklą gali pateikti tik pats paspaudęs „Pateikti piloto duomenis“. JSON eksportas lieka kaip atsarginė kopija ir diagnostikos priemonė.'
    : 'A completed session first remains in your browser. Pilot data is sent to the research store only when you explicitly press “Submit pilot data”. JSON export remains available as a fallback copy and debugging aid.';
})();
