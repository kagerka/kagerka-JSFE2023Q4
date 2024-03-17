import { Button } from '../../module/button/button';
import { Input } from '../../module/input/input';
import { ButtonData, InputData } from '../../module/types/types';
import { validateForm } from '../../module/validate/validate';
import './login-page.scss';

const inputNameData: InputData = {
  placeholder: 'First name',
  type: 'text',
  className: 'login-input',
  id: 'inputName',
  name: 'inputName',
  required: 'required',
};

const inputSurnameData: InputData = {
  placeholder: 'Surname',
  type: 'text',
  className: 'login-input',
  id: 'inputSurname',
  name: 'inputSurname',
  required: 'required',
};

const loginButtonData: ButtonData = {
  buttonName: 'Login',
  type: 'submit',
  className: 'login-btn',
  id: 'loginButton',
};

export const LoginPage = (pageWrapper: HTMLElement) => {
  pageWrapper.textContent = '';
  const form: HTMLFormElement = document.createElement('form');
  form.classList.add('form');
  pageWrapper.append(form);

  const heading: HTMLHeadingElement = document.createElement('h1');
  heading.textContent = 'Login';
  heading.classList.add('heading');

  const inputName: HTMLInputElement = Input(inputNameData);

  const inputSurname: HTMLInputElement = Input(inputSurnameData);

  const validateError: HTMLParagraphElement = document.createElement('p');
  validateError.classList.add('validate-error-text');
  validateError.textContent = ' ';

  const loginButton: HTMLButtonElement = Button(loginButtonData);

  form.append(heading, inputName, inputSurname, validateError, loginButton);

  loginButton.disabled = true;

  form.addEventListener('input', () => validateForm(inputName, inputSurname, loginButton, validateError));

  loginButton.addEventListener('click', () => {
    localStorage.setItem('Name', inputName.value);
    localStorage.setItem('Surname', inputSurname.value);
  });
};
