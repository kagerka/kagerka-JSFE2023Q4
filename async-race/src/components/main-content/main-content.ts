import { BaseComponentType } from '../../data/types';
import { GaragePage } from '../../pages/garage/garage';
import { WinnersPage } from '../../pages/winners/winners';
import { BaseComponent } from '../base-component';
import { Header } from '../header/header';
import './main-content.scss';

const mainContentTag: BaseComponentType = {
  tag: 'div',
  styles: ['main-content'],
};

export class MainContent extends BaseComponent {
  constructor() {
    super(mainContentTag);
    new GaragePage().render(this.element);
    this.init();
  }

  init(): void {
    const header = new Header();
    document.addEventListener('click', (e) => {
      if (e.target instanceof Element) {
        if (e.target.id === header.garageBtn.id) {
          this.element.textContent = '';
          new GaragePage().render(this.element);
        }
        if (e.target.id === header.winnersBtn.id) {
          this.element.textContent = '';
          new WinnersPage().render(this.element);
        }
      }
    });
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
