// Typewriter effect
(function () {
  const words = ['Building scalable systems', 'Crafting web experiences', 'Solving complex problems'];
  const el = document.getElementById('typewriter');
  if (!el) return;
  let wordIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const word = words[wordIdx];
    el.textContent = word.slice(0, charIdx);
    if (!deleting) {
      charIdx++;
      if (charIdx > word.length) { setTimeout(() => { deleting = true; tick(); }, 1800); return; }
    } else {
      charIdx--;
      if (charIdx < 0) { charIdx = 0; wordIdx = (wordIdx + 1) % words.length; deleting = false; }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
})();

// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// Header scroll shadow
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));

// Active nav link
const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.nav-links a');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navItems.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-40% 0px -60% 0px' });
sections.forEach(s => navObserver.observe(s));
