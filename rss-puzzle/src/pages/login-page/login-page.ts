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

const validateForm = (inputName: HTMLInputElement, inputSurname: HTMLInputElement, loginButton: HTMLButtonElement) => {
  if (inputName.value && inputSurname.value) {
    loginButton.disabled = false;
  }
};

export const LoginForm = () => {
  const pageWrapper = PageWrapper();
  document.body.append(pageWrapper);

  const form = document.createElement('form');
  form.classList.add('form');
  pageWrapper.append(form);

  const inputName = Input(inputNameData);
  form.append(inputName);

  const inputSurname = Input(inputSurnameData);
  form.append(inputSurname);

  const loginButton = Button(loginButtonData);
  form.append(loginButton);
  loginButton.disabled = true;

  form.addEventListener('input', () => validateForm(inputName, inputSurname, loginButton));
};
