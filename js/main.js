(function () {
  'use strict';

  // ========== Mobile Navigation ==========
  var navToggle = document.querySelector('.nav-toggle');
  var navMain = document.querySelector('.nav-main');
  if (navToggle && navMain) {
    navToggle.addEventListener('click', function () {
      var open = navMain.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open);
      navToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
  }

  // ========== Header: Schatten beim Scrollen ==========
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ========== Scroll-Reveal (Intersection Observer) ==========
  var revealEls = document.querySelectorAll('.reveal, .reveal-fade');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
      }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ========== Kontaktformular-Validierung ==========
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var name = form.querySelector('[name="name"]');
      var email = form.querySelector('[name="email"]');
      var valid = true;
      if (name && !name.value.trim()) {
        valid = false;
        name.style.borderColor = '#c00';
      } else if (name) {
        name.style.borderColor = '';
      }
      if (email && !email.value.trim()) {
        valid = false;
        email.style.borderColor = '#c00';
      } else if (email) {
        email.style.borderColor = '';
      }
      if (!valid) {
        e.preventDefault();
      }
    });
  }
})();
