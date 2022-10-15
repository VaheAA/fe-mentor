const hamburgerBtn = document.querySelector('#mobile-menu');
const hamburgerIcon = document.querySelector('.hamburger__icon');
const mobileMenu = document.querySelector('.menu');

hamburgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  if (mobileMenu.classList.contains('open')) {
    hamburgerIcon.src = 'assets/img/svgicons/icon-close.svg';
    document.body.style.overflowY = 'hidden';
  } else {
    hamburgerIcon.src = 'assets/img/svgicons/icon-hamburger.svg';
    document.body.style.overflowY = 'visible';
  }
});

window.addEventListener('click', (e) => {
  if (e.target.closest('.menu')) {
    closeMobileMenu();
  }
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburgerIcon.src = 'assets/img/svgicons/icon-hamburger.svg';
  document.body.style.overflowY = 'visible';
}
