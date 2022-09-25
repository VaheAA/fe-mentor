const inputs = Array.from(document.querySelectorAll('.card__form-input'));
const fields = Array.from(document.querySelectorAll('[data-field]'));
const cardForm = document.querySelector('.card__form');
const successMessage = document.getElementById('success');
const btnContinue = document.querySelector('[data-btn="continue"]');

const cardTemplateInfo = {
  owner: 'Name Surname',
  number: '0000 0000 000 0000',
  mm: '00',
  yy: '00',
  cvv: '000'
};

inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    switch (input.getAttribute('data-input')) {
      case 'owner':
        fields.find(
          (field) => field.getAttribute('data-field') === 'owner'
        ).textContent = e.target.value;
        break;
      case 'number':
        let numberField = fields.find(
          (field) => field.getAttribute('data-field') === 'number'
        );
        let numberString = e.target.value;
        let checkSpaces = numberString?.match(/.{1,4}/g);
        let insertSpaces = checkSpaces?.join(' ');
        numberField.textContent = insertSpaces;
        break;
      case 'mm':
        fields.find(
          (field) => field.getAttribute('data-field') === 'mm'
        ).textContent = e.target.value;
        break;
      case 'yy':
        fields.find(
          (field) => field.getAttribute('data-field') === 'yy'
        ).textContent = e.target.value;
        break;
      case 'cvc':
        fields.find(
          (field) => field.getAttribute('data-field') === 'cvv'
        ).textContent = e.target.value;
        break;
    }
  });
});

const cardValidation = new RegExp('^[0-9]{13,19}$');
const monthsValidation = new RegExp('^(1[0-2]|[1-9])$');
const cvvValidation = new RegExp('^[0-9]{3}$');

cardForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let errors = 0;

  inputs.forEach((input) => {
    if (input.value === '') {
      input.closest('.card__form-group').classList.add('error');
      input
        .closest('.card__form-group')
        .querySelector('.card__form-error').textContent = `Can't be blank`;
      errors = document.querySelectorAll('.error').length;
    } else if (
      input.getAttribute('data-input') === 'number' &&
      input.value !== '' &&
      !cardValidation.test(input.value)
    ) {
      input.closest('.card__form-group').classList.add('error');
      input
        .closest('.card__form-group')
        .querySelector(
          '.card__form-error'
        ).textContent = `Enter valid card number`;
      errors = document.querySelectorAll('.error').length;
    } else if (
      input.getAttribute('data-input') === 'mm' &&
      input.value !== '' &&
      !monthsValidation.test(input.value)
    ) {
      input.closest('.card__form-group').classList.add('error');
      input
        .closest('.card__form-group')
        .querySelector(
          '.card__form-error'
        ).textContent = `Enter valid month (01-12)`;
      errors = document.querySelectorAll('.error').length;
    } else if (
      input.getAttribute('data-input') === 'cvv' &&
      !cvvValidation.test(input.value)
    ) {
      input.closest('.card__form-group').classList.add('error');
      input
        .closest('.card__form-group')
        .querySelector(
          '.card__form-error'
        ).textContent = `Enter valid CVV code (xxx)`;
      errors = document.querySelectorAll('.error').length;
    } else {
      input.closest('.card__form-group').classList.remove('error');
      input
        .closest('.card__form-group')
        .querySelector('.card__form-error').textContent = '';
      errors = document.querySelectorAll('.error').length;
    }
  });

  if (errors === 0) {
    cardForm.reset();
    cardForm.style.display = 'none';
    successMessage.style.display = 'flex';
  }
});

btnContinue.addEventListener('click', () => {
  cardForm.style.display = 'block';
  successMessage.style.display = 'none';
  fields.forEach((field) => {
    switch (field.getAttribute('data-field')) {
      case 'owner':
        field.textContent = cardTemplateInfo.owner;
        break;
      case 'number':
        field.textContent = cardTemplateInfo.number;
        break;
      case 'mm':
        field.textContent = cardTemplateInfo.mm;
        break;
      case 'yy':
        field.textContent = cardTemplateInfo.yy;
        break;
      case 'cvv':
        field.textContent = cardTemplateInfo.cvv;
    }
  });
});
