/* ============================================================
   I.S. ENGINEERING CO. — Main JavaScript (Full Responsive)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── STICKY HEADER ── */
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* ── ACTIVE NAV LINK ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav a').forEach(function (link) {
    const href = link.getAttribute('href') || '';
    if (href === page || (href === 'index.html' && (page === '' || page === '/'))) {
      link.classList.add('active');
    }
  });

  /* ── HAMBURGER MENU ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!header.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      }
    });
  }

  /* ── DYNAMIC FILTER BAR STICKY TOP ── */
  // Adjust sticky top of filter bar based on actual header height
  function updateFilterBarTop() {
    const filterBar = document.querySelector('.filter-bar');
    if (filterBar && header) {
      filterBar.style.top = header.offsetHeight + 'px';
    }
  }
  updateFilterBarTop();
  window.addEventListener('resize', updateFilterBarTop, { passive: true });

  /* ── HERO CAROUSEL ── */
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.carousel-dot');
  let current  = 0;
  let autoTimer = null;

  function goToSlide(n) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = ((n % slides.length) + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(function () { goToSlide(current + 1); }, 5000);
  }
  function stopAuto() {
    if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
  }

  if (slides.length > 0) {
    goToSlide(0);
    startAuto();

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { stopAuto(); goToSlide(i); startAuto(); });
    });

    const prev = document.querySelector('.carousel-prev');
    const next = document.querySelector('.carousel-next');
    if (prev) prev.addEventListener('click', function () { stopAuto(); goToSlide(current - 1); startAuto(); });
    if (next) next.addEventListener('click', function () { stopAuto(); goToSlide(current + 1); startAuto(); });

    // Touch swipe
    let touchStartX = 0;
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
      carousel.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].clientX;
      }, { passive: true });
      carousel.addEventListener('touchend', function (e) {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          stopAuto();
          goToSlide(diff > 0 ? current + 1 : current - 1);
          startAuto();
        }
      }, { passive: true });
    }
  }

  /* ── FAQ ACCORDION ── */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    const q = item.querySelector('.faq-q');
    if (q) {
      q.addEventListener('click', function () {
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(function (i) { i.classList.remove('open'); });
        if (!wasOpen) item.classList.add('open');
      });
    }
  });

  /* ── COUNTER ANIMATION ── */
  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1600;
    const steps    = 60;
    const stepVal  = target / steps;
    let count = 0;
    const interval = setInterval(function () {
      count += stepVal;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      el.textContent = Math.floor(count) + suffix;
    }, duration / steps);
  }

  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (counters.length) {
    const cObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          cObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { cObserver.observe(c); });
  }

  /* ── FADE IN ON SCROLL ── */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const fObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(function (el) { fObserver.observe(el); });
  }

  /* ── BACK TO TOP ── */
  const backTop = document.querySelector('.back-top');
  if (backTop) {
    window.addEventListener('scroll', function () {
      backTop.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── PRODUCT FILTER ── */
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card[data-category]');
  const searchInput  = document.getElementById('product-search');

  function applyFilter() {
    const activeBtn = document.querySelector('.filter-btn.active');
    const cat       = activeBtn ? activeBtn.dataset.filter : 'all';
    const query     = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visible = 0;
    productCards.forEach(function (card) {
      const matchCat    = cat === 'all' || card.dataset.category === cat;
      const matchSearch = !query || card.textContent.toLowerCase().includes(query);
      const show = matchCat && matchSearch;
      card.classList.toggle('hide', !show);
      if (show) visible++;
    });
    // Show "no results" message if needed
    const noRes = document.getElementById('no-results');
    if (noRes) noRes.style.display = visible === 0 ? 'block' : 'none';
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      applyFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilter);
  }

  /* ── GALLERY TABS ── */
  const galleryTabs  = document.querySelectorAll('.gallery-tab');
  const galleryItems = document.querySelectorAll('.gallery-item[data-cat]');

  galleryTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      galleryTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      const cat = tab.dataset.tab;
      galleryItems.forEach(function (item) {
        item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
      });
    });
  });

  /* ── LIGHTBOX ── */
  const lightbox = document.getElementById('lightbox');
  const lbClose  = document.querySelector('.lb-close');

  function openLightbox() {
    if (lightbox) {
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', openLightbox);
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(); }
    });
  });
  if (lbClose)  lbClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });

  // Also expose globally for gallery.html inline onclick
  window.openLightbox = openLightbox;

  /* ── CONTACT FORM — EmailJS ── */

  // ─────────────────────────────────────────────
  // REPLACE THESE THREE VALUES WITH YOUR OWN:
  const EMAILJS_PUBLIC_KEY  = 'aKub_JxW-z1Rc-hif';       // e.g. 'aBcDeFgHiJkLmNoP'
  const EMAILJS_SERVICE_ID  = 'service_u3z3haa';       // e.g. 'service_xxxxxxx'
  const EMAILJS_TEMPLATE_ID = 'template_qimioxj';      // e.g. 'template_xxxxxxx'
  // ─────────────────────────────────────────────

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {

    // Initialise EmailJS with your public key
    if (typeof emailjs !== 'undefined') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn     = contactForm.querySelector('.form-submit-btn');
      const success = contactForm.querySelector('.form-success');
      const error   = contactForm.querySelector('.form-error');

      // Guard: EmailJS not loaded
      if (typeof emailjs === 'undefined') {
        console.error('EmailJS SDK not loaded. Add the script tag to contact.html.');
        return;
      }

      // Button loading state
      const origText  = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled    = true;
      if (error)   error.style.display   = 'none';
      if (success) success.style.display = 'none';

      // Build template params — keys must match your EmailJS template variables
      const templateParams = {
        from_name    : contactForm.querySelector('#name')        ?.value || '',
        company      : contactForm.querySelector('#company')     ?.value || '',
        phone        : contactForm.querySelector('#phone')       ?.value || '',
        reply_to     : contactForm.querySelector('#email')       ?.value || '',
        product      : contactForm.querySelector('#product')     ?.value || '',
        requirement  : contactForm.querySelector('#requirement') ?.value || '',
        message      : contactForm.querySelector('#message')     ?.value || '',
        to_name      : 'I.S. Engineering Co.',
      };

      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function (response) {
          console.log('EmailJS success:', response.status, response.text);

          // Reset form
          contactForm.reset();

          // Show success message
          if (success) {
            success.style.display = 'block';
            setTimeout(function () { success.style.display = 'none'; }, 7000);
          }

          // Restore button
          btn.textContent = origText;
          btn.disabled    = false;
        })
        .catch(function (err) {
          console.error('EmailJS error:', err);

          // Show error message
          if (error) {
            error.style.display = 'block';
            setTimeout(function () { error.style.display = 'none'; }, 7000);
          }

          // Restore button
          btn.textContent = origText;
          btn.disabled    = false;
        });
    });
  }

  /* ── SMOOTH SCROLL for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = (header ? header.offsetHeight : 70) + 10;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ── RESIZE HANDLER ── */
  window.addEventListener('resize', function () {
    // Close mobile nav on resize to desktop
    if (window.innerWidth > 768 && mobileNav && mobileNav.classList.contains('open')) {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    }
    updateFilterBarTop();
  }, { passive: true });

});