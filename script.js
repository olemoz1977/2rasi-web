const lens = document.querySelector('.lens');
const stage = document.querySelector('.perception-stage');
const hero = document.querySelector('.hero');
const cue = document.querySelector('.scroll-cue');
const header = document.querySelector('.site-header');

let dragging = false;

function setLensLocal(x, y) {
  const min = 60;
  const maxX = Math.max(min, stage.clientWidth - min);
  const maxY = Math.max(min, stage.clientHeight - min);
  const px = Math.max(min, Math.min(maxX, x));
  const py = Math.max(min, Math.min(maxY, y));

  lens.style.setProperty('--x', `${px}px`);
  lens.style.setProperty('--y', `${py}px`);
  stage.style.setProperty('--lens-x', `${px}px`);
  stage.style.setProperty('--lens-y', `${py}px`);
}

function setLens(clientX, clientY) {
  const r = stage.getBoundingClientRect();
  setLensLocal(clientX - r.left, clientY - r.top);
}

function centerLens() {
  setLensLocal(stage.clientWidth * .5, stage.clientHeight * .5);
}

centerLens();
window.addEventListener('resize', centerLens);

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
  setTimeout(() => document.querySelector('#experiments').scrollIntoView({ behavior: 'smooth' }), 360);
}

cue.addEventListener('click', rippleAndGo);
lens.addEventListener('dblclick', rippleAndGo);

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }
}, { threshold: .15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Mobile: the drop keeps moving even without hover. The same coordinates
// drive both the optical drop and the SEE -> NOTICE reveal window.
if (matchMedia('(pointer: coarse)').matches) {
  let t = 0;
  const drift = () => {
    if (!dragging) {
      const x = stage.clientWidth * (.5 + Math.sin(t) * .18);
      const y = stage.clientHeight * (.48 + Math.cos(t * .8) * .1);
      setLensLocal(x, y);
    }
    t += .012;
    requestAnimationFrame(drift);
  };

  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setTimeout(() => requestAnimationFrame(drift), 1250);
  }
}
