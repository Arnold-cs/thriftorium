// ── CATEGORY FILTER ──
const categoryButtons = document.querySelectorAll('.cat');
const productCards = document.querySelectorAll('.card');
const announcement = document.getElementById('filter-announcement');

categoryButtons.forEach(function(button) {
  button.addEventListener('click', function() {

    // update active state and aria-pressed on all buttons
    categoryButtons.forEach(function(btn) {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');

    const selected = button.dataset.filter;
    let visibleCount = 0;

    // show or hide cards
    productCards.forEach(function(card) {
      if (selected === 'all' || card.dataset.category === selected) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // announce result to screen readers
    const categoryName = button.textContent.trim();
    announcement.textContent = visibleCount + ' listing' +
      (visibleCount !== 1 ? 's' : '') + ' shown for ' + categoryName;
  });
});

// ── MOBILE NAV TOGGLE ──
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', function() {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

// close menu when a link is clicked
navMenu.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
  });
});

// ── HEART / FAVOURITE TOGGLE ──
document.querySelectorAll('.heart-btn').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); // don't follow the card link
    const isPressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', isPressed ? 'false' : 'true');
    const itemName = btn.closest('.card').querySelector('.card-name').textContent;
    btn.setAttribute(
      'aria-label',
      (isPressed ? 'Save ' : 'Remove ') + itemName + ' from favourites'
    );
  });
});