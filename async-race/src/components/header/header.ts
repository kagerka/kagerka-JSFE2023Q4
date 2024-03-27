import { BaseComponentType, ButtonType } from '../../data/types';
import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import './header.scss';

const headerTag: BaseComponentType = {
  tag: 'div',
  styles: ['header-nav'],
};

const garageButton: ButtonType = {
  name: 'Garage',
  styles: ['garage-btn', 'active'],
  id: 'garageBtn',
};

const winnersButton: ButtonType = {
  name: 'Winners',
  styles: ['winners-btn'],
  id: 'winnersBtn',
};

export class Header extends BaseComponent {
  garageBtn: HTMLElement;

  winnersBtn: HTMLElement;

  constructor() {
    super(headerTag);
    this.garageBtn = new Button(garageButton).render(this.element);
    if (garageButton.id) this.garageBtn.id = garageButton.id;
    this.winnersBtn = new Button(winnersButton).render(this.element);
    if (winnersButton.id) this.winnersBtn.id = winnersButton.id;
    this.init();
  }

  init(): void {
    this.element.addEventListener('click', (e) => {
      if (e.target === this.garageBtn) {
        this.garageBtn.classList.add('active');
        this.winnersBtn.classList.remove('active');
      }
      if (e.target === this.winnersBtn) {
        this.winnersBtn.classList.add('active');
        this.garageBtn.classList.remove('active');
      }
    });
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
