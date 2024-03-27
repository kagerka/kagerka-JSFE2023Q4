import { getWinners } from '../../api/get-winners';
import { BaseComponent } from '../../components/base-component';
import { PageInfo } from '../../components/page-info/page-info';
import { BaseComponentType } from '../../data/types';
import './winners.scss';

const winnersPageTag: BaseComponentType = {
  tag: 'div',
  styles: ['winners-page'],
};

export class WinnersPage extends BaseComponent {
  constructor() {
    super(winnersPageTag);
  }

  async render(parent: HTMLElement): Promise<HTMLElement> {
    const winners = await getWinners();
    new PageInfo('Winners', winners.winnersNumber).render(this.element);
    parent.append(this.element);
    return this.element;
  }
}
