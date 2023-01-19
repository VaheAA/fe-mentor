const links = document.querySelectorAll('[data-dropdown="link"]');
const menus = document.querySelectorAll('[data-dropdown="menu"]');
const nestedLinks = document.querySelectorAll('[data-dropdown="nested-link"]');
const mobileLinks = document.querySelectorAll('[data-menu="button"]');
const mobileMenus = document.querySelectorAll('[data-menu="list"]');
const hamburgerBtn = document.querySelector('[data-button="hamburger"]');
const closeMenuBtn = document.querySelector('[data-button="close"]');
const mobileNav = document.querySelector('[data-role="mobile-menu"]');

links.forEach((link, index) => {
  link.addEventListener('mouseenter', () => {
    menus[index].style.display = 'block';
  });
});

nestedLinks.forEach((link, index) => {
  if (link.closest('[data-dropdown="menu"]')) {
    link.addEventListener('click', () => {
      link.closest('[data-dropdown="menu"]').style.display = 'none';
    });
    link
      .closest('[data-dropdown="menu"]')
      .addEventListener('mouseleave', (e) => (e.target.style.display = 'none'));
  }
  link.addEventListener('click', () => {
    closeHamburger();
    closeMobileDropdown();
  });
});

window.addEventListener('click', (e) => {
  if (!e.target.hasAttribute('data-dropdown')) {
    menus.forEach((menu) => (menu.style.display = 'none'));
  }
  if (e.target.hasAttribute('data-role')) {
    closeHamburger();
    closeMobileDropdown();
  }
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    if (link.nextElementSibling.getAttribute('data-expanded') === 'false') {
      link.nextElementSibling.style.height =
        link.nextElementSibling.scrollHeight + 'px';
      link.nextElementSibling.classList.add('mt-4');
      link.nextElementSibling.setAttribute('data-expanded', 'true');
    } else {
      closeMobileDropdown();
    }
  });
});

hamburgerBtn.addEventListener('click', () => {
  if (hamburgerBtn.getAttribute('data-open') === 'false') {
    openHamburber();
  } else {
    closeHamburger();
  }
});

function closeMobileDropdown() {
  mobileLinks.forEach((link) => {
    link.nextElementSibling.style.height = 0;
    link.nextElementSibling.classList.remove('mt-4');
    link.nextElementSibling.setAttribute('data-expanded', 'false');
  });
}

function openHamburber() {
  mobileNav.classList.toggle('translate-x-[200%]');
  hamburgerBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
  stroke="currentColor" class="w-9 h-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>`;
  hamburgerBtn.setAttribute('data-open', 'true');
  document.body.classList.add('overflow-y-hidden');
}

function closeHamburger() {
  mobileNav.classList.toggle('translate-x-[200%]');
  hamburgerBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
  class="w-8 h-8"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>`;
  hamburgerBtn.setAttribute('data-open', 'false');
  document.body.classList.remove('overflow-y-hidden');
}
