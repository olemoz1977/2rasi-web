const lens = document.querySelector('.lens');
const stage = document.querySelector('.perception-stage');
const notice = document.querySelector('.notice-word');
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
  const radius = parseFloat(getComputedStyle(lens).width) / 2 * 1.05;
  notice.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
}

function settleLens() {
  const r = stage.getBoundingClientRect();
  setLens(r.left + r.width / 2, r.top + r.height / 2);
}
// Reveal only kicks in once the drop has landed, so the reveal-hole
// and the falling ball never look decoupled mid-fall.
lens.addEventListener('animationend', settleLens, { once: true });
setTimeout(settleLens, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 950);

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
      setLens(r.left + x, r.top + y);
    }
    t += .012;
    requestAnimationFrame(drift);
  };
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) requestAnimationFrame(drift);
}
