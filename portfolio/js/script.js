// =========================================================
// PORTFÓLIO — script.js
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- ano no rodapé ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- menu mobile ----
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- efeito de digitação no terminal do hero ----
  const typedOut = document.getElementById('typedOut');
  const phrase = 'desenvolvedor back-end em formação.';
  let i = 0;

  function typeWriter() {
    if (!typedOut) return;
    if (i <= phrase.length) {
      typedOut.textContent = phrase.slice(0, i);
      i++;
      setTimeout(typeWriter, 55);
    }
  }
  setTimeout(typeWriter, 700);

  // ---- ver mais / ver menos projetos ----
  const projectsToggle = document.getElementById('projectsToggle');
  const extraProjects = document.querySelectorAll('.project-card--extra');

  if (projectsToggle && extraProjects.length) {
    projectsToggle.addEventListener('click', () => {
      const isExpanded = projectsToggle.getAttribute('aria-expanded') === 'true';
      const next = !isExpanded;

      extraProjects.forEach(card => card.classList.toggle('is-visible', next));
      projectsToggle.setAttribute('aria-expanded', String(next));
      projectsToggle.textContent = next ? 'Ver menos projetos' : 'Ver mais projetos';

      if (!next) {
        document.getElementById('projetos').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // ---- reveal on scroll ----
  const revealEls = document.querySelectorAll('.reveal, .skill-group');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));

  // ---- header com sombra ao rolar ----
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 12) {
      nav.style.boxShadow = '0 8px 24px -12px rgba(0,0,0,0.6)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });

});
