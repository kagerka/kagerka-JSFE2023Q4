import { Button } from '../../module/button/button';
import { Input } from '../../module/input/input';
import { PageWrapper } from '../../module/page-wrapper/page-wrapper';
import './login-page.scss';

const inputNameData = {
  placeholder: 'First name',
  type: 'text',
  className: 'login-input',
  id: 'inputName',
  name: 'inputName',
  required: 'required',
};

const inputSurnameData = {
  placeholder: 'Surname',
  type: 'text',
  className: 'login-input',
  id: 'inputSurname',
  name: 'inputSurname',
  required: 'required',
};

const loginButtonData = {
  buttonName: 'Login',
  type: 'submit',
  className: 'login-btn',
  id: 'loginButton',
};

const validateForm = (
  inputName: HTMLInputElement,
  inputSurname: HTMLInputElement,
  loginButton: HTMLButtonElement,
  validateError: HTMLParagraphElement,
) => {
  const regexpName = /^[A-Z][a-zA-Z\s-]{2,}$/g;
  const regexpSurname = /^[A-Z][a-zA-Z\s-]{3,}$/g;

  let isValidName;
  let isValidSurname;
  if (inputName.value) {
    isValidName = inputName.value.match(regexpName);
  }
  if (inputSurname.value) {
    isValidSurname = inputSurname.value.match(regexpSurname);
  }
  if (isValidName) {
    inputName.classList.remove('validate-error');
  }
  if (isValidSurname) {
    inputSurname.classList.remove('validate-error');
  }
  if (!isValidName || !isValidSurname) {
    validateError.textContent =
      'First letter should be capitalized. Use only latin letters and dash sign (-). Minimum name length is 3 characters, surname is 4 characters.';
    validateError.classList.add('active');
    if (!isValidName) {
      inputName.classList.add('validate-error');
    }
    if (!isValidSurname) {
      inputSurname.classList.add('validate-error');
    }
    loginButton.disabled = true;
  }
  if (isValidName && isValidSurname) {
    loginButton.disabled = false;
    inputName.classList.remove('validate-error');
    inputSurname.classList.remove('validate-error');
    validateError.classList.remove('active');
    validateError.textContent = '';
  }

  return validateError;
};

export const LoginForm = () => {
  const pageWrapper = PageWrapper();
  document.body.append(pageWrapper);

  const form = document.createElement('form');
  form.classList.add('form');
  pageWrapper.append(form);

  const heading = document.createElement('h1');
  heading.textContent = 'RSS Puzzle';
  heading.classList.add('heading');

  const inputName = Input(inputNameData);

  const inputSurname = Input(inputSurnameData);

  const validateError = document.createElement('p');
  validateError.classList.add('validate-error-text');
  validateError.textContent = ' ';

  const loginButton = Button(loginButtonData);
  form.append(heading, inputName, inputSurname, validateError, loginButton);

  loginButton.disabled = true;

  form.addEventListener('input', () => validateForm(inputName, inputSurname, loginButton, validateError));
};
