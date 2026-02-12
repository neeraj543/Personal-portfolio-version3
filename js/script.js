/**
 * NEERAJ Portfolio - Main JavaScript
 * Handles: AOS init, Language toggle, Smooth scroll, Active nav
 */

// ============================================
// AOS INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80
  });
});

// ============================================
// LANGUAGE TOGGLE (English / Dutch)
// ============================================
let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'nl' : 'en';

  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.getAttribute(`data-${currentLang}`);
    if (text) {
      el.textContent = text;
    }
  });

  const toggleBtn = document.querySelector('.lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = currentLang.toUpperCase();
  }
}

// ============================================
// MOBILE MENU (Bootstrap Offcanvas)
// Close offcanvas when a link is clicked
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const offcanvasEl = document.getElementById('mobileMenu');
  if (offcanvasEl) {
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
    offcanvasEl.querySelectorAll('.mobile-menu__link').forEach(link => {
      link.addEventListener('click', () => bsOffcanvas.hide());
    });
  }
});

// ============================================
// SMOOTH SCROLL TO TOP
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.footer__text[href="#"]');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.side-nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  document.querySelectorAll('.mobile-menu__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.style.color = 'var(--accent)';
    }
  });
});

