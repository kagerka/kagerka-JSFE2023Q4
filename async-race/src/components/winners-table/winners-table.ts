import { updateWinnersContent, updateWinnersThead } from '../../api/update-winners-content';
import { BaseComponent } from '../../components/base-component';
import { BaseComponentType, WinnersPageNumDataType, WinnersSortType } from '../../data/types';
import './winners-table.scss';

const winnersTableTag: BaseComponentType = {
  tag: 'div',
  styles: ['winners-table-wrapper'],
};

export class WinnersTable extends BaseComponent {
  table: HTMLTableElement;

  thead: HTMLTableSectionElement;

  public tbody: HTMLTableSectionElement;

  thNumber: HTMLTableCellElement;

  thCar: HTMLTableCellElement;

  thName: HTMLTableCellElement;

  thWins: HTMLTableCellElement;

  thTime: HTMLTableCellElement;

  constructor() {
    super(winnersTableTag);
    this.table = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');
    this.tbody.id = 'winners-tbody';
    this.thNumber = document.createElement('th');
    this.thNumber.textContent = '№';
    this.thCar = document.createElement('th');
    this.thCar.textContent = 'Car';
    this.thName = document.createElement('th');
    this.thName.textContent = 'Name';
    this.thWins = document.createElement('th');
    this.thWins.id = 'th-wins';
    this.thWins.classList.add('th-wins');
    this.thTime = document.createElement('th');
    this.thTime.id = 'th-time';
    this.thTime.classList.add('th-time');
    this.element.append(this.table);
    this.table.append(this.thead, this.tbody);
    this.thead.append(this.thNumber, this.thCar, this.thName, this.thWins, this.thTime);
    if (!localStorage.getItem('winnersSortData')) {
      localStorage.setItem(
        'winnersSortData',
        JSON.stringify({ sort: 'id', order: 'ASC', arrowTime: '', arrowWin: '' }),
      );
    }
  }

  init(): void {
    const winnersSortData: WinnersSortType = JSON.parse(localStorage.getItem('winnersSortData') || '{}');
    this.thWins.textContent = `Wins ${winnersSortData.arrowWin}`;
    this.thTime.textContent = `Best time ${winnersSortData.arrowTime}`;
    this.thead.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.id === 'th-wins') {
        if (winnersSortData.order === 'ASC') {
          winnersSortData.order = 'DESC'; winnersSortData.arrowTime = ''; winnersSortData.arrowWin = '▼';
          localStorage.setItem( 'winnersSortData', JSON.stringify({
            sort: 'wins', order: winnersSortData.order, arrowTime: winnersSortData.arrowTime,
            arrowWin: winnersSortData.arrowWin }) );
        } else {
          winnersSortData.order = 'ASC'; winnersSortData.arrowTime = ''; winnersSortData.arrowWin = '▲';
          localStorage.setItem( 'winnersSortData', JSON.stringify({
            sort: 'wins', order: winnersSortData.order, arrowTime: winnersSortData.arrowTime,
            arrowWin: winnersSortData.arrowWin }) );         
        }
      }
      if (target.id === 'th-time') {
        if (winnersSortData.order === 'ASC') {
          winnersSortData.order = 'DESC'; winnersSortData.arrowTime = '▼'; winnersSortData.arrowWin = '';
          localStorage.setItem( 'winnersSortData', JSON.stringify({
            sort: 'time', order: winnersSortData.order, arrowTime: winnersSortData.arrowTime,
            arrowWin: winnersSortData.arrowWin }) );
        } else {
          winnersSortData.order = 'ASC'; winnersSortData.arrowTime = '▲'; winnersSortData.arrowWin = '';
          localStorage.setItem( 'winnersSortData', JSON.stringify({
            sort: 'time', order: winnersSortData.order, arrowTime: winnersSortData.arrowTime,
            arrowWin: winnersSortData.arrowWin }) );
        }
      }
      updateWinnersThead(this.thWins, this.thTime);
      const winnersContent = document.getElementById('winners-tbody');
      const winnersPageData: WinnersPageNumDataType = JSON.parse(localStorage.getItem('winnersPageData') || '{}');
      if (winnersContent) updateWinnersContent(winnersContent, winnersPageData.pageNumber);
    });
  }

  async render(parent: HTMLElement): Promise<HTMLElement> {
    this.init();
    const winners: WinnersPageNumDataType = JSON.parse(localStorage.getItem('winnersPageData') || '{}');
    await updateWinnersContent(this.tbody, winners.pageNumber);
    parent.append(this.element);
    return this.element;
  }
}
