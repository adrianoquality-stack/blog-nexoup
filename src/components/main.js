/* ===================================================
   NexoUP Blog — JavaScript
   =================================================== */

// ---------- BILLING TOGGLE ----------
const PRICES = {
  starter: 97,
  pro: 247,
};

function setToggle(tipo) {
  const btnMensal = document.getElementById('btnMensal');
  const btnAnual  = document.getElementById('btnAnual');
  const priceStarter = document.getElementById('priceStarter');
  const pricePro     = document.getElementById('pricePro');

  if (!btnMensal) return;

  btnMensal.classList.toggle('active', tipo === 'mensal');
  btnAnual.classList.toggle('active',  tipo === 'anual');

  const factor = tipo === 'anual' ? 0.8 : 1;
  if (priceStarter) priceStarter.textContent = 'R$ ' + Math.round(PRICES.starter * factor);
  if (pricePro)     pricePro.textContent     = 'R$ ' + Math.round(PRICES.pro     * factor);
}

// ---------- NEWSLETTER ----------
function handleNewsletter(e) {
  e.preventDefault();
  const input = document.getElementById('nlEmail');
  if (!input || !input.value) return;
  showToast('✓ Inscrição realizada! Bem-vindo(a) ao NexoUP Blog.');
  input.value = '';
}

// ---------- TOAST ----------
function showToast(msg) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3500);
}

// ---------- MOBILE MENU ----------
document.addEventListener('DOMContentLoaded', function () {
  const toggle  = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      mobileNav.setAttribute('aria-hidden', !isOpen);
    });

    // Fechar ao clicar em link interno
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // ---------- SMOOTH SCROLL para âncoras ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---------- HEADER SHADOW on scroll ----------
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 10
        ? '0 2px 16px rgba(27,46,60,.08)'
        : 'none';
    });
  }

  // ---------- ARTICLE CARDS hover animation ----------
  document.querySelectorAll('.article-card').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-3px)';
      this.style.transition = 'transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease';
    });
    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });
});
