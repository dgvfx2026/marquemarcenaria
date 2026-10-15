/*!
 * Marque Marcenaria — main.js v4
 * Animações scroll-reveal unificadas, sem conflitos legados
 */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ══════════════════════════════════════════════
     1. BARRA DE PROGRESSO DE SCROLL
  ══════════════════════════════════════════════ */
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });

  /* ══════════════════════════════════════════════
     2. HEADER SCROLL + NAV ATIVA
  ══════════════════════════════════════════════ */
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link[href^="#"]');

  window.addEventListener('scroll', () => {
    const mid = window.scrollY + header.offsetHeight + 80;
    let cur = '';
    sections.forEach(s => { if (s.offsetTop <= mid) cur = s.id; });
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${cur}`));
  }, { passive: true });

  /* ══════════════════════════════════════════════
     3. MOBILE MENU
  ══════════════════════════════════════════════ */
  const menuToggle  = document.querySelector('.menu-toggle');
  const mobileNav   = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  let menuOpen = false;

  if (menuToggle && mobileNav) {
    const open  = () => { menuOpen=true;  menuToggle.classList.add('open');    menuToggle.setAttribute('aria-expanded','true');  mobileNav.classList.add('open');    document.body.style.overflow='hidden'; };
    const close = () => { menuOpen=false; menuToggle.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); mobileNav.classList.remove('open'); document.body.style.overflow=''; };
    menuToggle.addEventListener('click', () => menuOpen ? close() : open());
    mobileLinks.forEach(l => l.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key==='Escape' && menuOpen) close(); });
  }

  /* ══════════════════════════════════════════════
     4. SMOOTH SCROLL
  ══════════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const t = document.querySelector(this.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - header.offsetHeight - 12, behavior: 'smooth' });
    });
  });

  /* ══════════════════════════════════════════════
     5. HERO — ANIMAÇÃO DE ENTRADA
  ══════════════════════════════════════════════ */
  if (!prefersReduced) {
    const heroSequence = [
      { sel: '.hero-label',    delay: 200  },
      { sel: '.hero-headline', delay: 450  },
      { sel: '.hero-sub',      delay: 750  },
      { sel: '.hero-actions',  delay: 950  },
      { sel: '.hero-scroll',   delay: 1150 },
    ];

    heroSequence.forEach(({ sel, delay }) => {
      const el = document.querySelector(sel);
      if (!el) return;
      el.style.opacity   = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'none';
      setTimeout(() => {
        el.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity   = '1';
        el.style.transform = 'translateY(0)';
      }, delay);
    });
  }

  /* ══════════════════════════════════════════════
     6. SCROLL REVEAL — SISTEMA ÚNICO V4
     Aplica data-animate dinamicamente via JS.
     NÃO depende de classes CSS .reveal/.visible.
  ══════════════════════════════════════════════ */

  /*
   * animMap: cada entrada define:
   *   sel     — seletor CSS
   *   anim    — tipo de animação: fade-up | fade-left | fade-right | scale-up | fade-in
   *   stagger — delay adicional por elemento-irmão (ms)
   *   delay   — delay base (ms)
   */
  const animMap = [
    // Seção Sobre
    { sel: '.about-image-wrap',  anim: 'fade-left',  delay: 0   },
    { sel: '.about-badge',       anim: 'scale-up',   delay: 350 },
    { sel: '.about-text .eyebrow',    anim: 'fade-up', delay: 100 },
    { sel: '.about-text .display-md', anim: 'fade-up', delay: 200 },
    { sel: '.about-text .body-lg',    anim: 'fade-up', delay: 300 },
    { sel: '.about-value-item',  anim: 'fade-up',    delay: 0,  stagger: 100 },
    { sel: '.about-text .btn',   anim: 'fade-up',    delay: 0   },

    // Section headers genéricos
    { sel: '.section-header .eyebrow',    anim: 'fade-up', delay: 0   },
    { sel: '.section-header .display-md', anim: 'fade-up', delay: 100 },
    { sel: '.section-header p',           anim: 'fade-up', delay: 180 },

    // Ambientes
    { sel: '.service-card',      anim: 'fade-up',    delay: 0,  stagger: 120 },

    // Galeria
    { sel: '.gallery-filter',    anim: 'fade-up',    delay: 0   },
    { sel: '.gallery-item',      anim: 'scale-up',   delay: 0,  stagger: 80  },
    { sel: '.gallery-cta',       anim: 'fade-up',    delay: 0   },

    // Diferenciais
    { sel: '.diff-card',         anim: 'fade-up',    delay: 0,  stagger: 110 },

    // Processo
    { sel: '.process-text .eyebrow',    anim: 'fade-up',   delay: 0   },
    { sel: '.process-text .display-md', anim: 'fade-up',   delay: 120 },
    { sel: '.process-text .body-lg',    anim: 'fade-up',   delay: 200 },
    { sel: '.process-step',      anim: 'fade-left',  delay: 0,  stagger: 120 },
    { sel: '.process-text .btn', anim: 'fade-up',    delay: 0   },
    { sel: '.process-image-col', anim: 'fade-right', delay: 150 },

    // CTA final
    { sel: '.cta-content .eyebrow',    anim: 'fade-up', delay: 0   },
    { sel: '.cta-content .display-lg', anim: 'fade-up', delay: 100 },
    { sel: '.cta-content p',           anim: 'fade-up', delay: 200 },
    { sel: '.cta-actions',             anim: 'fade-up', delay: 300 },
    { sel: '.cta-contact-line',        anim: 'fade-up', delay: 400 },

    // Footer
    { sel: '.footer-grid > *',   anim: 'fade-up',    delay: 0,  stagger: 120 },
  ];

  /* Estado inicial por tipo de animação */
  const INITIAL = {
    'fade-up':    { opacity: '0', transform: 'translateY(52px)' },
    'fade-left':  { opacity: '0', transform: 'translateX(-64px)' },
    'fade-right': { opacity: '0', transform: 'translateX(64px)'  },
    'scale-up':   { opacity: '0', transform: 'scale(0.85) translateY(28px)' },
    'fade-in':    { opacity: '0', transform: 'none' },
  };

  function applyInitial(el, anim) {
    const state = INITIAL[anim] || INITIAL['fade-up'];
    el.style.opacity   = state.opacity;
    el.style.transform = state.transform;
    el.style.willChange = 'opacity, transform';
  }

  function revealEl(el) {
    const delay = parseInt(el.dataset.revealDelay) || 0;
    el.dataset.revealDone = '1';
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
      el.style.opacity    = '1';
      el.style.transform  = 'none';
      el.style.willChange = 'auto';
    }, delay);
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.dataset.revealDone) return;
        revealEl(el);
        observer.unobserve(el);
      });
    }, {
      threshold: 0.07,
      rootMargin: '0px 0px -50px 0px'
    });

    // Aplicar estados iniciais e registrar observação
    function prepareAll() {
      animMap.forEach(({ sel, anim, delay = 0, stagger }) => {
        // Rastrear índice de stagger por elemento pai
        const parentMap = new Map();

        document.querySelectorAll(sel).forEach(el => {
          if (el.dataset.revealReady) return; // não duplicar
          el.dataset.revealReady = '1';

          let finalDelay = delay;
          if (stagger) {
            const parent = el.parentElement || document.body;
            if (!parentMap.has(parent)) parentMap.set(parent, 0);
            const idx = parentMap.get(parent);
            finalDelay = delay + idx * stagger;
            parentMap.set(parent, idx + 1);
          }

          el.dataset.revealDelay = String(finalDelay);

          if (!prefersReduced) {
            applyInitial(el, anim);
            observer.observe(el);
          }
          // Se prefersReduced, não aplica estado inicial → elemento visível
        });
      });
    }

    // Aguardar DOM completo antes de preparar
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', prepareAll);
    } else {
      // DOM já pronto — pequeno tick para garantir layout calculado
      requestAnimationFrame(prepareAll);
    }

  } else {
    // Fallback: sem IntersectionObserver — tudo visível
    // (nada a fazer, elementos já visíveis por padrão no HTML)
  }

  /* ══════════════════════════════════════════════
     7. PARALLAX HERO
  ══════════════════════════════════════════════ */
  if (!prefersReduced && window.innerWidth > 900) {
    const heroImg = document.querySelector('.hero-bg img');
    if (heroImg) {
      heroImg.style.transform = 'scale(1.08)';
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (ticking) return;
        requestAnimationFrame(() => {
          if (window.scrollY < window.innerHeight) {
            heroImg.style.transform = `translateY(${window.scrollY * 0.22}px) scale(1.08)`;
          }
          ticking = false;
        });
        ticking = true;
      }, { passive: true });
    }
  }

  /* ══════════════════════════════════════════════
     8. CONTADOR — about badge
  ══════════════════════════════════════════════ */
  const badgeNum = document.querySelector('.about-badge-num');
  if (badgeNum && 'IntersectionObserver' in window) {
    const countObs = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      let n = 0;
      const target = 100;
      const step = () => {
        n = Math.min(n + 3, target);
        badgeNum.textContent = n + '%';
        if (n < target) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      countObs.disconnect();
    }, { threshold: 0.6 });
    countObs.observe(badgeNum);
  }

  /* ══════════════════════════════════════════════
     9. GALERIA — FILTROS + LIGHTBOX
  ══════════════════════════════════════════════ */
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      galleryItems.forEach((item, i) => {
        const show = filter === 'all' || item.dataset.category === filter;
        if (show) {
          item.style.display = 'block';
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px) scale(0.96)';
          setTimeout(() => {
            item.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
            item.style.opacity = '1';
            item.style.transform = 'none';
          }, 40 + i * 55);
        } else {
          item.style.transition = 'opacity 0.25s ease';
          item.style.opacity = '0';
          setTimeout(() => { item.style.display = 'none'; }, 270);
        }
      });
    });
  });

  // Lightbox
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev  = document.getElementById('lightbox-prev');
  const lightboxNext  = document.getElementById('lightbox-next');
  let currentIndex = 0;
  const galleryImages = Array.from(document.querySelectorAll('.gallery-item[data-src]'));

  function openLightbox(i) {
    currentIndex = i;
    const item = galleryImages[i];
    if (!item) return;
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.94)';
    lightboxImg.src = item.dataset.src;
    lightboxImg.alt = item.dataset.alt || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lightboxImg.onload = () => {
      lightboxImg.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      lightboxImg.style.opacity = '1';
      lightboxImg.style.transform = 'scale(1)';
    };
    if (lightboxClose) lightboxClose.focus();
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  function showPrev() { currentIndex = (currentIndex-1+galleryImages.length)%galleryImages.length; openLightbox(currentIndex); }
  function showNext() { currentIndex = (currentIndex+1)%galleryImages.length; openLightbox(currentIndex); }

  galleryImages.forEach((item, i) => {
    item.setAttribute('tabindex','0');
    item.setAttribute('role','button');
    item.setAttribute('aria-label', item.dataset.alt || 'Ver projeto');
    item.addEventListener('click', () => openLightbox(i));
    item.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') { e.preventDefault(); openLightbox(i); } });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev)  lightboxPrev.addEventListener('click', showPrev);
  if (lightboxNext)  lightboxNext.addEventListener('click', showNext);
  if (lightbox)      lightbox.addEventListener('click', e => { if (e.target===lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key==='Escape')     closeLightbox();
    if (e.key==='ArrowLeft')  showPrev();
    if (e.key==='ArrowRight') showNext();
  });

  /* ══════════════════════════════════════════════
     10. HOVER 3D NOS CARDS DE SERVIÇO
  ══════════════════════════════════════════════ */
  if (!prefersReduced && window.innerWidth > 900) {
    document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const r = this.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width  - 0.5;
        const y = (e.clientY - r.top)  / r.height - 0.5;
        this.style.transform = `perspective(900px) rotateY(${x*7}deg) rotateX(${-y*5}deg) scale(1.02)`;
      });
      card.addEventListener('mouseleave', function() {
        this.style.transition = 'transform 0.5s ease';
        this.style.transform = '';
      });
    });
  }

  /* ══════════════════════════════════════════════
     11. BOTÃO WA FLUTUANTE — PULSE APÓS 3s
  ══════════════════════════════════════════════ */
  const waFloat = document.querySelector('.wa-float');
  if (waFloat) setTimeout(() => waFloat.classList.add('wa-pulse'), 3000);

  /* ══════════════════════════════════════════════
     12. ANO NO FOOTER
  ══════════════════════════════════════════════ */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
