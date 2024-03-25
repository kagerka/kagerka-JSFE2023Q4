import { BaseComponent } from '../base-component';
import './button.scss';

export class Button extends BaseComponent {
  constructor(buttonName: string, styles: string[]) {
    super('button', ['btn']);
    this.element.textContent = buttonName;
    this.element.classList.add(...styles);
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
