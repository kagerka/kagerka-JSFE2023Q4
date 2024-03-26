import { BaseComponent } from '../base-component';
import './logo.scss';
import logotype from '../../assets/img/logo.svg';

export class Logo extends BaseComponent {
  constructor() {
    super('div', ['logo-wrapper']);
    const logo: HTMLImageElement = new Image();
    logo.src = logotype;
    logo.alt = 'logo';
    logo.classList.add('logo-img');
    this.element.append(logo);
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
