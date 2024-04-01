import { DISPLAY_MODAL_TIME } from '../../data/constants';
import { BaseComponentType } from '../../data/types';
import { BaseComponent } from '../base-component';
import './winner-modal.scss';

const winnerModalTag: BaseComponentType = {
  tag: 'div',
  styles: ['window-modal'],
};

export class WinnerModal extends BaseComponent {
  textWrapper: HTMLElement;

  constructor(carName: string, winTime: number) {
    super(winnerModalTag);
    this.textWrapper = document.createElement('div');
    this.textWrapper.classList.add('modal-text-wrapper');
    this.element.append(this.textWrapper);
    this.textWrapper.innerHTML = `${carName} finished first (${winTime} sec)!`;
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    setTimeout(() => {
      this.element.remove();
    }, DISPLAY_MODAL_TIME);
    return this.element;
  }
}
