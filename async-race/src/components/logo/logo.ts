import logotype from '../../assets/img/logo.svg';
import { BaseComponentType } from '../../data/types';
import { BaseComponent } from '../base-component';
import './logo.scss';

const logoTag: BaseComponentType = {
  tag: 'div',
  styles: ['logo-wrapper', 'active'],
};

export class Logo extends BaseComponent {
  constructor() {
    super(logoTag);
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
