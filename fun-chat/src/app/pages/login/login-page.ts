import { BaseComponent } from '../../components/base-component';
import { LoginForm } from '../../components/login-form/login-form';
import { BaseComponentType } from '../../data/types';

const loginPageTag: BaseComponentType = {
  tag: 'div',
  styles: ['login-page'],
};

export class LoginPage extends BaseComponent {
  constructor() {
    super(loginPageTag);
    this.init();
  }

  init(): void {
    new LoginForm().render(this.element);
  }

  render(parent: HTMLElement): void {
    parent.replaceChildren(this.element);
  }
}
