import { BaseComponentType } from '../../data/types';
import { BaseComponent } from '../base-component';
import { PageName } from './page-name/page-name';
import { PageNumber } from './page-number/page-number';
import './page-info.scss';

const pageInfoTag: BaseComponentType = {
  tag: 'div',
  styles: ['page-info'],
};

export class PageInfo extends BaseComponent {
  pageName: HTMLElement;

  pageNumber: HTMLElement;

  constructor(pageName: string, number: number) {
    super(pageInfoTag);
    this.pageName = new PageName(`${pageName} (${number})`).render(this.element);
    this.pageNumber = new PageNumber('Page #1').render(this.element);
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
