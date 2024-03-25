import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import './header.scss';

export class Header extends BaseComponent {
  garageBtn: HTMLElement;

  winnersBtn: HTMLElement;

  constructor() {
    super('div', ['header-nav']);
    this.garageBtn = new Button('Garage', ['garage-btn', 'active']).render(this.element);
    this.winnersBtn = new Button('Winners', ['winners-btn']).render(this.element);
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
