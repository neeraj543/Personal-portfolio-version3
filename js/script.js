/**
 * NEERAJ Portfolio - Main JavaScript
 * ===================================
 * Handles: Language toggle, Mobile menu, Smooth scroll
 */

// ============================================
// LANGUAGE TOGGLE (English / Dutch)
// ============================================
let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'nl' : 'en';

  // Update all elements with data-en and data-nl attributes
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.getAttribute(`data-${currentLang}`);
    if (text) {
      el.textContent = text;
    }
  });

  // Update the toggle button text to show current language
  const toggleBtn = document.querySelector('.lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = currentLang.toUpperCase();
  }
}

// ============================================
// MOBILE MENU
// ============================================
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.toggle('open');
  }
}

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', () => {
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('mobileMenu');
      if (menu) {
        menu.classList.remove('open');
      }
    });
  });
});

// ============================================
// SMOOTH SCROLL TO TOP
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.footer__back-to-top');
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
  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Highlight active link in side nav
  document.querySelectorAll('.side-nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Highlight active link in mobile nav
  document.querySelectorAll('.mobile-menu__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.style.color = 'var(--accent)';
    }
  });
});
