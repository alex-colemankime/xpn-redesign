(function () {
  'use strict';

  const header = document.querySelector('.site-header');
  const COLLAPSE_AT = 300;
  const EXPAND_AT = 120;
  let collapsed = false;
  let ticking = false;

  function updateHeader() {
    const y = window.scrollY;
    if (!collapsed && y > COLLAPSE_AT) {
      header.classList.add('is-collapsed');
      collapsed = true;
    } else if (collapsed && y < EXPAND_AT) {
      header.classList.remove('is-collapsed');
      collapsed = false;
    }
    ticking = false;
  }

  if (header) {
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });
  }

  const drawer = document.querySelector('.header-drawer');
  const overlay = document.querySelector('.header-drawer-overlay');
  const openBtns = document.querySelectorAll('[data-drawer-open]');
  const closeBtn = document.querySelector('[data-drawer-close]');
  let lastFocused = null;

  const FOCUSABLE = 'a, button, [tabindex]:not([tabindex="-1"])';

  function openDrawer() {
    if (!drawer) return;
    lastFocused = document.activeElement;
    drawer.classList.add('is-open');
    if (overlay) overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  openBtns.forEach(btn => btn.addEventListener('click', openDrawer));
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', e => {
    if (!drawer || !drawer.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      closeDrawer();
      return;
    }
    if (e.key === 'Tab') {
      const items = drawer.querySelectorAll(FOCUSABLE);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  document.querySelectorAll('.footer-nav__toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const col = toggle.closest('.footer-nav__col');
      if (!col) return;
      const expanded = col.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(expanded));
    });
  });
})();
