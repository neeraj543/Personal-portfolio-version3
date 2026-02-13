// Portfolio JS - Neeraj

let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'nl' : 'en';

  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.getAttribute(`data-${currentLang}`);
    if (text) el.textContent = text;
  });

  const toggleBtn = document.querySelector('.lang-toggle');
  if (toggleBtn) toggleBtn.textContent = currentLang.toUpperCase();
}

document.addEventListener('DOMContentLoaded', () => {
  // AOS
  AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 80 });

  // close mobile menu on link click
  const offcanvasEl = document.getElementById('mobileMenu');
  if (offcanvasEl) {
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
    offcanvasEl.querySelectorAll('.mobile-menu__link').forEach(link => {
      link.addEventListener('click', () => bsOffcanvas.hide());
    });
  }

  // scroll back up
  const backToTop = document.querySelector('.footer__text[href="#"]');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // active nav highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.side-nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) link.classList.add('active');
    else link.classList.remove('active');
  });

  document.querySelectorAll('.mobile-menu__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) link.style.color = 'var(--accent)';
  });
});
