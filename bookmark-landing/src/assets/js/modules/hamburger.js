const hamburder = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.menu');
const logo = document.querySelector('#logo');

const logoStyles = {
  light: {
    text: '#fff',
    circle: '#fff',
    icon: '#252b46'
  },
  dark: {
    text: '#242A45',
    circle: '#5267df',
    icon: '#fff'
  }
};

export function toggleMenu() {
  hamburder.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('noscroll');
    if (mobileMenu.classList.contains('open')) {
      setTimeout(() => {
        hamburder.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"><path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/></svg>`;
      }, 150);
      setTimeout(() => {
        for (const [key, value] of Object.entries(logoStyles.light)) {
          logo.querySelector(`[data-logo="${key}"]`).style.fill = value;
        }
      }, 300);
    } else {
      hamburder.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"> <path fill="#242A45" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z" /> </svg>`;
      for (const [key, value] of Object.entries(logoStyles.dark)) {
        logo.querySelector(`[data-logo="${key}"]`).style.fill = value;
      }
    }
  });
}
