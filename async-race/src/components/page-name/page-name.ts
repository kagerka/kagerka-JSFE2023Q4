import { BaseComponent } from '../base-component';
import './page-name.scss';

export class PageName extends BaseComponent {
  constructor(pageName: string) {
    super('h2', ['page-name']);
    this.element.textContent = pageName;
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
