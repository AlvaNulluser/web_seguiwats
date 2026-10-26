/**
 * Seguiwats - Shared navigation behaviour.
 *
 * Progressive enhancement only: the desktop navigation is pure CSS, and the
 * mobile panel ships hidden in the markup. If this script never loads, the
 * site still renders and the desktop nav still works.
 */
(function () {
  'use strict';

  var btn = document.getElementById('mobile-menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  var openIcon = btn.querySelector('[data-icon="open"]');
  var closeIcon = btn.querySelector('[data-icon="close"]');

  function isOpen() {
    return btn.getAttribute('aria-expanded') === 'true';
  }

  function setOpen(open) {
    btn.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('hidden', !open);
    if (openIcon) openIcon.classList.toggle('hidden', open);
    if (closeIcon) closeIcon.classList.toggle('hidden', !open);
  }

  btn.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  // Close after following an anchor so the panel does not cover the target.
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      btn.focus();
    }
  });

  // The panel is mobile-only: close it when the desktop nav takes over.
  var desktop = window.matchMedia('(min-width: 768px)');
  desktop.addEventListener('change', function (event) {
    if (event.matches) setOpen(false);
  });
})();
