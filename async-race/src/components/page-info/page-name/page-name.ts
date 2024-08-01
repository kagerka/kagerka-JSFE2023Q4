import { BaseComponentType } from '../../../data/types';
import { BaseComponent } from '../../base-component';
import './page-name.scss';

const pageNameTag: BaseComponentType = {
  tag: 'h2',
  styles: ['page-name'],
};

export class PageName extends BaseComponent {
  constructor(pageName: string) {
    super(pageNameTag);
    this.element.textContent = pageName;
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
