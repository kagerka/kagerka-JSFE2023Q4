import { getWinners } from '../../api/get-winners';
import { BaseComponent } from '../../components/base-component';
import { PageInfo } from '../../components/page-info/page-info';
import { PaginationWinnersButtons } from '../../components/pagination-buttons/pagination-winners-buttons';
import { WinnersTable } from '../../components/winners-table/winners-table';
import { BaseComponentType } from '../../data/types';
import './winners.scss';

const winnersPageTag: BaseComponentType = {
  tag: 'div',
  styles: ['winners-page'],
};

export class WinnersPage extends BaseComponent {
  pageInfoWrapper: HTMLElement;

  paginationBtnWrapper: HTMLElement;
  
  constructor() {
    super(winnersPageTag);
    this.pageInfoWrapper = document.createElement('div');
    this.pageInfoWrapper.id = 'winners-info-wrapper';
    this.element.append(this.pageInfoWrapper);
    this.paginationBtnWrapper = document.createElement('div');
    this.paginationBtnWrapper.id = 'pagination-winners-wrapper';
  }
  
  async render(parent: HTMLElement): Promise<HTMLElement> {
    const winnersData = JSON.parse(localStorage.getItem('winnersPageData') || '{}');
    const winners = await getWinners(winnersData.pageNumber);
    
    
    new PageInfo('Winners', winners.winnersNumber, winnersData.pageNumber).render(this.pageInfoWrapper);
    await new WinnersTable().render(this.element);
    this.element.append(this.paginationBtnWrapper);
    new PaginationWinnersButtons(this.pageInfoWrapper).render(this.paginationBtnWrapper);
    parent.append(this.element);
    return this.element;
  }
}
