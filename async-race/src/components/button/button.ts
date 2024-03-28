import { BaseComponentType, ButtonType } from '../../data/types';
import { BaseComponent } from '../base-component';
import './button.scss';

const buttonTag: BaseComponentType = {
  tag: 'button',
  styles: ['btn'],
};

export class Button extends BaseComponent {
  constructor(buttonOptions: ButtonType) {
    super(buttonTag);
    this.element.textContent = buttonOptions.name;
    this.element.classList.add(...buttonOptions.styles);
    if (buttonOptions.id) this.element.id = buttonOptions.id;
  }

  render(parent: HTMLElement): HTMLButtonElement {
    parent.append(this.element);
    return this.element as HTMLButtonElement;
  }
}
