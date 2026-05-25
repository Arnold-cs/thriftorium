const categoryButtons = document.querySelectorAll('.cat');
const productCards = document.querySelectorAll('.card');

categoryButtons.forEach(function(button) {
  button.addEventListener('click', function() {

    categoryButtons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    const selected = button.textContent.toLowerCase().trim();

    productCards.forEach(function(card) {
      if (selected === 'all') {
        card.style.display = 'block';
      } else if (card.dataset.category === selected) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

  });
});