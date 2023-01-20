const form = document.querySelector('#form');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const newMail = Object.fromEntries(formData);

  if (newMail.email === '' || !emailRegex.test(newMail.email)) {
    form.classList.add('invalid');
  } else {
    form.classList.remove('invalid');
  }
});
