import { BaseComponentType } from '../../../data/types';
import { BaseComponent } from '../../base-component';
import './page-number.scss';

const pageNumberTag: BaseComponentType = {
  tag: 'h3',
  styles: ['page-number'],
};

export class PageNumber extends BaseComponent {
  constructor(pageNumber: string) {
    super(pageNumberTag);
    this.element.textContent = pageNumber;
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
