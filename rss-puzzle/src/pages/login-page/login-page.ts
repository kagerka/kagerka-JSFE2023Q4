import { Button } from '../../module/button/button';
import { Input } from '../../module/input/input';
import { validateForm } from '../../module/validate/validate';
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

export const LoginPage = (pageWrapper: HTMLElement) => {
  pageWrapper.textContent = '';
  const form = document.createElement('form');
  form.classList.add('form');
  pageWrapper.append(form);

  const heading = document.createElement('h1');
  heading.textContent = 'Login';
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

  loginButton.addEventListener('click', () => {
    localStorage.setItem('Name', inputName.value);
    localStorage.setItem('Surname', inputSurname.value);
  });
};
