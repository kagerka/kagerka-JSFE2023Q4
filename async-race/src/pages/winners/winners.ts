import { BaseComponent } from '../../components/base-component';
import { PageInfo } from '../../components/page-info/page-info';
import './winners.scss';

export class WinnersPage extends BaseComponent {
  pageInfo: HTMLElement;

  constructor() {
    super('div', ['winners-page']);
    this.pageInfo = new PageInfo().render(this.element);
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
