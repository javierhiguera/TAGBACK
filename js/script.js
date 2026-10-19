/* TAGBACK v40 — interacciones adicionales. Cargar después de script.js. */
document.addEventListener('DOMContentLoaded', () => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Actualizar el texto de portfolio sin perder la traducción ES/EN existente.
  if (typeof translations !== 'undefined') {
    if (translations.es) translations.es.work_link = 'Consultar proyecto →';
    if (translations.en) translations.en.work_link = 'Discuss project →';
    $$('.work-card-link').forEach(link => { link.textContent = document.documentElement.lang === 'en' ? 'Discuss project →' : 'Consultar proyecto →'; });
  }

  // Menú secundario "Más".
  const moreToggle = $('.nav-more-toggle');
  const moreMenu = $('#nav-more-menu');
  if (moreToggle && moreMenu) {
    const closeMore = () => {
      moreMenu.hidden = true;
      moreToggle.setAttribute('aria-expanded', 'false');
    };
    moreToggle.addEventListener('click', () => {
      const opening = moreMenu.hidden;
      moreMenu.hidden = !opening;
      moreToggle.setAttribute('aria-expanded', String(opening));
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.nav-more')) closeMore();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeMore();
        moreToggle.focus();
      }
    });
    $$('.nav-more-menu a').forEach(link => link.addEventListener('click', closeMore));
  }

  // Elegir un plan lleva al formulario y marca el tipo de proyecto.
  const projectRadios = $$('input[name="project_type"]');
  const choosePlan = value => {
    if (!value) return;
    const radio = projectRadios.find(item => item.value === value);
    if (!radio) return;
    radio.checked = true;
    radio.dispatchEvent(new Event('change', { bubbles: true }));
    const fieldset = radio.closest('fieldset');
    if (fieldset) {
      fieldset.classList.add('is-prefilled');
      window.setTimeout(() => fieldset.classList.remove('is-prefilled'), 1400);
    }
  };
  $$('[data-plan]').forEach(card => {
    card.addEventListener('click', () => {
      const plan = card.getAttribute('data-plan');
      try { sessionStorage.setItem('tagback-selected-plan', plan); } catch (_) {}
      choosePlan(plan);
    });
  });
  const applyPlanFromLocation = () => {
    let selected = '';
    try { selected = sessionStorage.getItem('tagback-selected-plan') || ''; } catch (_) {}
    const params = new URLSearchParams(window.location.search);
    selected = params.get('plan') || selected;
    if (selected) {
      choosePlan(selected);
      try { sessionStorage.removeItem('tagback-selected-plan'); } catch (_) {}
    }
  };
  applyPlanFromLocation();

  // Una pregunta abierta por vez para que el bloque sea fácil de recorrer.
  const faqItems = $$('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      faqItems.forEach(other => { if (other !== item) other.open = false; });
    });
  });

  // El cursor solo actualiza variables de luz; nunca deforma el SVG con transform inline.
  if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
    let raf = 0;
    let x = window.innerWidth * .5;
    let y = window.innerHeight * .35;
    let targetX = x;
    let targetY = y;
    const update = () => {
      x += (targetX - x) * .12;
      y += (targetY - y) * .12;
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
      if (Math.abs(targetX - x) > .4 || Math.abs(targetY - y) > .4) raf = requestAnimationFrame(update);
      else raf = 0;
    };
    document.addEventListener('pointermove', event => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!raf) raf = requestAnimationFrame(update);
    }, { passive: true });
  }

  // El proceso se ilumina por etapas, manteniendo los detalles accesibles.
  const processItems = $$('.process-item');
  if (!reducedMotion && processItems.length) {
    processItems.forEach((item, index) => {
      item.style.setProperty('--process-delay', `${index * 1.2}s`);
    });
  }

  // Persistir también el rechazo de cookies y evitar que el banner reaparezca al recargar.
  const cookieKey = 'tagback-cookies-accepted';
  const banner = $('#cookie-banner');
  if (banner) {
    let choice = null;
    try { choice = localStorage.getItem(cookieKey); } catch (_) {}
    if (choice === '0' || choice === '1') {
      banner.classList.remove('is-visible');
      banner.remove();
    }
  }
});
