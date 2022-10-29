const btn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  mobileNav.classList.toggle('open');

  if (mobileNav.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
});
