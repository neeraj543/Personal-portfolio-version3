/*
 * script.js — Neeraj's Portfolio
 *
 * Handles:
 *  1. Bilingual language toggle (EN ↔ NL)
 *  2. AOS scroll animation initialization
 *  3. Mobile menu auto-close on link click
 *  4. Smooth "back to top" scroll
 *  5. Active nav link highlighting based on current page URL
 */

// Track the current language — defaults to English
let currentLang = 'en';

/**
 * Toggle between English and Dutch.
 *
 * Every translatable element in the HTML has data-en and data-nl attributes.
 * This function reads the attribute matching the new language and swaps
 * the element's visible text. The toggle button text also updates to show
 * which language is currently active.
 */
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'nl' : 'en';

  // Find every element with a data-en attribute and update its text
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.getAttribute(`data-${currentLang}`);
    if (text) el.textContent = text;
  });

  // Update the toggle button label (shows "EN" or "NL")
  const toggleBtn = document.querySelector('.lang-toggle');
  if (toggleBtn) toggleBtn.textContent = currentLang.toUpperCase();
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animate On Scroll) library
  // - duration: animation length in ms
  // - once: only animate the first time an element scrolls into view
  // - offset: how many px before the element is visible to trigger
  AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 80 });

  // Auto-close the mobile offcanvas menu when a navigation link is clicked,
  // so users don't have to manually dismiss it after choosing a page
  const offcanvasEl = document.getElementById('mobileMenu');
  if (offcanvasEl) {
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
    offcanvasEl.querySelectorAll('.mobile-menu__link').forEach(link => {
      link.addEventListener('click', () => bsOffcanvas.hide());
    });
  }

  // "Back to top" link in the footer — smooth scroll to the top of the page
  const backToTop = document.querySelector('.footer__text[href="#"]');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Highlight the active page in both the side nav and mobile menu.
  // Compares each link's href to the current page filename from the URL.
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Desktop side navigation — add .active class to the matching link
  document.querySelectorAll('.side-nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) link.classList.add('active');
    else link.classList.remove('active');
  });

  // Mobile navigation — set accent colour on the matching link
  document.querySelectorAll('.mobile-menu__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) link.style.color = 'var(--accent)';
  });
});
