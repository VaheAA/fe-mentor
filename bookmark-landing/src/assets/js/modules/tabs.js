const tabLinks = document.querySelectorAll('.features__tabs-link');
const tabs = document.querySelectorAll('.features__tabs-item');

export function initTabs() {
  tabLinks.forEach((link, index) => {
    window.addEventListener('hashchange', () => {
      if (
        location.hash === link.getAttribute('href') &&
        location.hash === `#${tabs[index].getAttribute('id')}`
      ) {
        tabs[index].classList.add('active');
        link.classList.add('active');
      } else {
        link.classList.remove('active');
        tabs[index].classList.remove('active');
      }
    });
  });
}
