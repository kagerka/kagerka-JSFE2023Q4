import { BaseComponentType } from '../../data/types';
import { BaseComponent } from '../base-component';
import './page-info.scss';
import { PageName } from './page-name/page-name';
import { PageNumber } from './page-number/page-number';

const pageInfoTag: BaseComponentType = {
  tag: 'div',
  styles: ['page-info'],
};

export class PageInfo extends BaseComponent {
  pageName: HTMLElement;

  pageNumber: HTMLElement;

  constructor(pageName: string, carsNumber: number, pageNumber: number) {
    super(pageInfoTag);
    this.pageName = new PageName(`${pageName} (${carsNumber})`).render(this.element);
    this.pageNumber = new PageNumber(`Page #${pageNumber}`).render(this.element);
  }

  render(parent?: HTMLElement): HTMLElement {
    if (parent) parent.append(this.element);
    return this.element;
  }
}
