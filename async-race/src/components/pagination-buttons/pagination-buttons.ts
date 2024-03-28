import { checkId } from '../../data/ids';
import { BaseComponentType, ButtonType } from '../../data/types';
import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import './pagination-buttons.scss';

const paginationButtonsTag: BaseComponentType = {
  tag: 'div',
  styles: ['pagination-btn-wrapper'],
};

const prevButton: ButtonType = {
  name: 'Prev',
  styles: ['prev-btn'],
  id: checkId('prev-btn'),
};

const nextButton: ButtonType = {
  name: 'Next',
  styles: ['next-btn'],
  id: checkId('next-btn'),
};

export class PaginationButtons extends BaseComponent {
  constructor() {
    super(paginationButtonsTag);
    new Button(prevButton).render(this.element);
    new Button(nextButton).render(this.element);
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
