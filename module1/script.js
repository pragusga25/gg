const ONE_CAPITAL = /[A-Z]/;
const ONE_LOWER = /[a-z]/;
const ONE_NUMBER = /[0-9]/;
const ONE_SPECIAL = /[!@#$%^&*]/;

let lengthValid = false;
let lowercaseValid = false;
let uppercaseValid = false;
let numberValid = false;
let specialValid = false;
let emailValid = false;

const lowercaseValidation = document.getElementById('lowercase-validation');
const uppercaseValidation = document.getElementById('uppercase-validation');
const numberValidation = document.getElementById('number-validation');
const specialValidation = document.getElementById('special-validation');
const lengthValidation = document.getElementById('length-validation');

// Real-time password validation
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const submit = document.getElementById('submit');

function validateForm() {
  if (
    lengthValid &&
    lowercaseValid &&
    uppercaseValid &&
    numberValid &&
    specialValid &&
    emailValid
  ) {
    alert('Form submitted successfully');
    return true;
  }

  alert('Form not submitted');
  return false;
}

emailInput.addEventListener('input', function () {
  const email = this.value;

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = 'Invalid email format';
    emailValid = false;
  } else {
    emailError.textContent = '';
    emailValid = true;
  }
});

passwordInput.addEventListener('input', function () {
  const password = this.value;

  lengthValid = password.length >= 6;
  lowercaseValid = ONE_LOWER.test(password);
  uppercaseValid = ONE_CAPITAL.test(password);
  numberValid = ONE_NUMBER.test(password);
  specialValid = ONE_SPECIAL.test(password);

  if (lengthValid) {
    lengthValidation.classList.remove('invalid');
    lengthValidation.classList.add('valid');
  }

  if (lowercaseValid) {
    lowercaseValidation.classList.remove('invalid');
    lowercaseValidation.classList.add('valid');
  }

  if (uppercaseValid) {
    uppercaseValidation.classList.remove('invalid');
    uppercaseValidation.classList.add('valid');
  }

  if (numberValid) {
    numberValidation.classList.remove('invalid');
    numberValidation.classList.add('valid');
  }

  if (specialValid) {
    specialValidation.classList.remove('invalid');
    specialValidation.classList.add('valid');
  }

  if (!lengthValid) {
    lengthValidation.classList.remove('valid');
    lengthValidation.classList.add('invalid');
  }

  if (!lowercaseValid) {
    lowercaseValidation.classList.remove('valid');
    lowercaseValidation.classList.add('invalid');
  }

  if (!uppercaseValid) {
    uppercaseValidation.classList.remove('valid');
    uppercaseValidation.classList.add('invalid');
  }

  if (!numberValid) {
    numberValidation.classList.remove('valid');
    numberValidation.classList.add('invalid');
  }

  if (!specialValid) {
    specialValidation.classList.remove('valid');
    specialValidation.classList.add('invalid');
  }
});
