// ── MOBILE MENU TOGGLE ──
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });
}

// ── HEADER CATEGORY TABS ──
document.querySelectorAll('.header-cat').forEach(function (cat) {
  cat.addEventListener('click', function () {
    document.querySelectorAll('.header-cat').forEach(function (c) {
      c.classList.remove('active');
    });
    cat.classList.add('active');
  });
});

// ── HEART / FAVOURITE TOGGLE ──
document.querySelectorAll('.heart-btn').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    const isPressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', isPressed ? 'false' : 'true');
    const itemName = btn.closest('.card').querySelector('.card-name').textContent;
    btn.setAttribute(
      'aria-label',
      (isPressed ? 'Save ' : 'Remove ') + itemName + ' from favourites'
    );
  });
});

// ── LOAD MORE (simulated) ──
const loadMoreBtn = document.querySelector('.btn-load-more');
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', function () {
    loadMoreBtn.textContent = 'Loading...';
    loadMoreBtn.disabled = true;
    setTimeout(function () {
      loadMoreBtn.textContent = 'Load more listings';
      loadMoreBtn.disabled = false;
    }, 1500);
  });
}