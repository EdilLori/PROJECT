document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const menuCard = document.getElementById('menuCard');

  burger.addEventListener('change', function () {
    if (burger.checked) {
      menuCard.style.display = 'block';
    } else {
      menuCard.style.display = 'none';
    }
  });
});