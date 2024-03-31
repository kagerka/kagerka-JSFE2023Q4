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
  garage: Promise<HTMLElement>;

  winners: Promise<HTMLElement>;

  constructor() {
    super(mainContentTag);
    this.garage = new GaragePage().render(this.element);
    this.winners = new WinnersPage().render(this.element);
    this.init();
  }

  init(): void {
    const header = new Header();
    document.addEventListener('click', async (e) => {
      if (e.target instanceof Element) {
        if (e.target.id === header.garageBtn.id) {
          (await this.garage).classList.toggle('active');
          (await this.winners).classList.toggle('active');
        }
        if (e.target.id === header.winnersBtn.id) {
          (await this.winners).classList.toggle('active');
          (await this.garage).classList.toggle('active');
        }
      }
    });
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
