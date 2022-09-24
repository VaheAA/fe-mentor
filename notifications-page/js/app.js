const notifications = Array.from(
  document.querySelectorAll('.notifications__item')
);
const notificationsCount = document.querySelector(
  '.notifications__count-number'
);
const readBtn = document.querySelector('.notifications__actions-btn');

readBtn.addEventListener('click', () => {
  if (readBtn.getAttribute('data-action') === 'read') {
    notifications.forEach((notif) => {
      notif.setAttribute('data-status', 'read');
    });
    readBtn.textContent = 'Mark all as unread';
    readBtn.setAttribute('data-action', 'unread');
  } else if (readBtn.getAttribute('data-action') === 'unread') {
    notifications.forEach((notif) => {
      notif.setAttribute('data-status', 'unread');
    });
    readBtn.textContent = 'Mark all as read';
    readBtn.setAttribute('data-action', 'read');
  }
  getNotificationCount();
});

notifications.forEach((notif) => {
  notif.addEventListener('click', () => {
    if (notif.getAttribute('data-status') === 'unread') {
      notif.setAttribute('data-status', 'read');
    } else {
      notif.setAttribute('data-status', 'unread');
    }
    getNotificationCount();
  });
});

function getNotificationCount() {
  notificationsCount.textContent = notifications.filter(
    (notif) => notif.getAttribute('data-status') === 'unread'
  ).length;
}

getNotificationCount();
