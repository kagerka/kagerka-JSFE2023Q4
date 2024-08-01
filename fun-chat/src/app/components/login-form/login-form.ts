import { moveToPage } from '../../api/router/moveToPage';
import { createUser, getAllUsers } from '../../api/webSocket';
import { BaseComponentType, ButtonType } from '../../data/types';
import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import './login-form.scss';
import { validateForm } from './validateForm';

const loginFormTag: BaseComponentType = {
  tag: 'form',
  styles: ['login-form'],
};

const loginBtn: ButtonType = {
  name: 'Login',
  styles: ['login-btn'],
};

const infoBtn: ButtonType = {
  name: 'Information',
  styles: ['info-btn'],
};

export class LoginForm extends BaseComponent {
  fieldset: HTMLFieldSetElement;

  legend: HTMLLegendElement;

  inputName: HTMLInputElement;

  inputPassword: HTMLInputElement;

  messageName: HTMLElement;

  messagePassword: HTMLElement;

  constructor() {
    super(loginFormTag);
    this.fieldset = document.createElement('fieldset');
    this.fieldset.classList.add('fieldset');

    this.legend = document.createElement('legend');
    this.legend.textContent = 'Fill here your name and password';
    this.legend.classList.add('legend');

    this.inputName = document.createElement('input');
    this.inputName.setAttribute('type', 'text');
    this.inputName.setAttribute('placeholder', 'Name');
    this.inputName.classList.add('input');

    this.inputPassword = document.createElement('input');
    this.inputPassword.setAttribute('type', 'password');
    this.inputPassword.setAttribute('placeholder', 'Password');
    this.inputPassword.classList.add('input');

    this.messageName = document.createElement('div');
    this.messageName.classList.add('message-name');
    this.messageName.textContent =
      'Minimum length is 4 characters. Only latin and cyrillic letters, numbers and dash [ - ] are allowed.';

    this.messagePassword = document.createElement('div');
    this.messagePassword.classList.add('message-password');
    this.messagePassword.textContent = 'Minimum length is 4 characters. Only latin letters and numbers are allowed.';

    this.element.append(this.fieldset);
    this.fieldset.append(this.legend, this.inputName, this.messageName, this.inputPassword, this.messagePassword);
    this.init();
    getAllUsers();
  }

  init(): void {
    const loginButton = new Button(loginBtn).render(this.element);
    loginButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (validateForm(this.inputName, this.inputPassword, this.messageName, this.messagePassword)) {
        sessionStorage.setItem(
          'currentUserLogin',
          JSON.stringify({ login: this.inputName.value, password: this.inputPassword.value }),
        );
        createUser(this.inputName.value, this.inputPassword.value);
        moveToPage('chat');
      }
    });
    const infoButton = new Button(infoBtn).render(this.element);
    infoButton.addEventListener('click', (e) => {
      e.preventDefault();
      moveToPage('info');
    });
  }

  render(parent: HTMLElement): void {
    parent.append(this.element);
  }
}
