(() => {
  const lang = window.RASI_LANG || ((location.hostname === '2rasi.lt' || location.hostname.endsWith('.2rasi.lt')) ? 'lt' : 'en');
  document.querySelectorAll(`[data-${lang}]`).forEach((el) => {
    const value = el.getAttribute(`data-${lang}`);
    if (value != null) el.textContent = value;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('in-view', entry.isIntersecting));
  }, { threshold: 0.42 });

  document.querySelectorAll('.portal-card').forEach((card) => observer.observe(card));

  document.querySelectorAll('.card-visual').forEach((visual) => {
    visual.addEventListener('click', () => {
      const card = visual.closest('.portal-card');
      if (!card) return;
      card.classList.remove('in-view');
      void card.offsetWidth;
      card.classList.add('in-view');
    });
  });
})();
