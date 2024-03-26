import { GaragePage } from '../../pages/garage/garage';
import { BaseComponent } from '../base-component';
import './main-content.scss';

export class MainContent extends BaseComponent {
  constructor() {
    super('div', ['main-content']);
    new GaragePage().render(this.element);
  }

  render(parent: HTMLElement): void {
    parent.append(this.element);
  }
}
