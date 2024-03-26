import { BaseComponent } from '../base-component';
import { PageName } from '../page-name/page-name';
import { PageNumber } from '../page-number/page-number';
import './page-info.scss';

export class PageInfo extends BaseComponent {
  pageName: HTMLElement;

  pageNumber: HTMLElement;

  constructor() {
    super('div', ['page-info']);
    this.pageName = new PageName('Garage (100)').render(this.element);
    this.pageNumber = new PageNumber('Page #1').render(this.element);
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
