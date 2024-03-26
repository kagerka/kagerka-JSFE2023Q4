import { BaseComponent } from '../base-component';
import './page-number.scss';

export class PageNumber extends BaseComponent {
  constructor(pageNumber: string) {
    super('h3', ['page-number']);
    this.element.textContent = pageNumber;
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
