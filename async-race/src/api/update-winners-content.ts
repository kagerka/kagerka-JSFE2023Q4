import { PageInfo } from '../components/page-info/page-info';
import { PaginationWinnersButtons } from '../components/pagination-buttons/pagination-winners-buttons';
import { WinnersRow } from '../components/winners-table/winners-row/winner-row';
import { FIRST_PAGE, WINNERS_PER_PAGE } from '../data/constants';
import { WinnersSortType } from '../data/types';
import { getCurrentCar } from './get-current-car';
import { getWinners } from './get-winners';

export const updateWinnersContent = async (
  winnersWrapper: HTMLElement,
  pageNumber?: number,
  pageInfoWrapper?: HTMLElement,
  paginationBtnWrapper?: HTMLElement,
): Promise<void> => {
  if (winnersWrapper) {
    if (!localStorage.getItem('winnersPageData')) {
      localStorage.setItem('winnersPageData', JSON.stringify({ pageNumber: 1 }));
    } else {
      if (pageNumber) {
        const winnersSortData: WinnersSortType = JSON.parse(localStorage.getItem('winnersSortData') || '{}');
        const winners = await getWinners(pageNumber, winnersSortData.sort, winnersSortData.order);
        winnersWrapper.innerHTML = '';
        let rowNum = 1;
        winners.winners.forEach(async (el) => {
          const car = await getCurrentCar(el.id);

          new WinnersRow(
            pageNumber > FIRST_PAGE ? rowNum + (pageNumber - FIRST_PAGE) * WINNERS_PER_PAGE : rowNum,
            car,
            el.wins,
            el.time,
          ).render(winnersWrapper);
          rowNum++;
        });
      }
    }
  }

  if (pageInfoWrapper) {
    const winnersData = JSON.parse(localStorage.getItem('winnersPageData') || '{}');
    const winners = await getWinners(winnersData.pageNumber);
    pageInfoWrapper.innerHTML = '';
    new PageInfo('Winners', winners.winnersNumber, winnersData.pageNumber).render(pageInfoWrapper);
  }

  if (paginationBtnWrapper) {
    paginationBtnWrapper.innerHTML = '';
    if (pageInfoWrapper) new PaginationWinnersButtons(pageInfoWrapper).render(paginationBtnWrapper);
  }
};

export const updateWinnersThead = (thWins: HTMLTableCellElement, thTime: HTMLTableCellElement): void => {
  const winnersSortData: WinnersSortType = JSON.parse(localStorage.getItem('winnersSortData') || '{}');
  thWins.textContent = `Wins ${winnersSortData.arrowWin}`;
  thTime.textContent = `Best time ${winnersSortData.arrowTime}`;
};
