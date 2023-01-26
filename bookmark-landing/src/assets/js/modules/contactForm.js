const form = document.querySelector('#form');
const errorElem = document.querySelector('.contact__form-error');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function initForm() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const newMail = Object.fromEntries(formData);

    if (newMail.email === '') {
      form.classList.add('invalid');
      errorElem.textContent = 'The input field is empty';
    } else if (!emailRegex.test(newMail.email)) {
      form.classList.add('invalid');
      errorElem.textContent = 'The email address is not formatted correctly';
    } else {
      form.classList.remove('invalid');
    }
  });
}
