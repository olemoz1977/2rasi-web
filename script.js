const lens = document.querySelector('.lens');
const stage = document.querySelector('.perception-stage');
const hero = document.querySelector('.hero');
const cue = document.querySelector('.scroll-cue');
const header = document.querySelector('.site-header');

let dragging = false;

function setLens(clientX, clientY) {
  const r = stage.getBoundingClientRect();
  const x = Math.max(60, Math.min(r.width - 60, clientX - r.left));
  const y = Math.max(60, Math.min(r.height - 60, clientY - r.top));
  lens.style.setProperty('--x', `${x}px`);
  lens.style.setProperty('--y', `${y}px`);
}

stage.addEventListener('pointerdown', (e) => {
  dragging = true;
  stage.setPointerCapture?.(e.pointerId);
  setLens(e.clientX, e.clientY);
});
stage.addEventListener('pointermove', (e) => {
  if (dragging || e.pointerType === 'mouse') setLens(e.clientX, e.clientY);
});
stage.addEventListener('pointerup', () => { dragging = false; });
stage.addEventListener('pointercancel', () => { dragging = false; });

function rippleAndGo() {
  hero.classList.remove('ripple-now');
  void hero.offsetWidth;
  hero.classList.add('ripple-now');
  setTimeout(() => document.querySelector('#experiments').scrollIntoView({behavior:'smooth'}), 360);
}
cue.addEventListener('click', rippleAndGo);
lens.addEventListener('dblclick', rippleAndGo);

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) if (entry.isIntersecting) entry.target.classList.add('visible');
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile: a slow, subtle drift so the lens is alive without hover.
if (matchMedia('(pointer: coarse)').matches) {
  let t = 0;
  const drift = () => {
    if (!dragging) {
      const r = stage.getBoundingClientRect();
      const x = r.width * (.5 + Math.sin(t) * .18);
      const y = r.height * (.48 + Math.cos(t * .8) * .1);
      lens.style.setProperty('--x', `${x}px`);
      lens.style.setProperty('--y', `${y}px`);
    }
    t += .012;
    requestAnimationFrame(drift);
  };
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) requestAnimationFrame(drift);
}
