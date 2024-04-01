import { getWinners } from '../../api/get-winners';
import { updateWinnersContent } from '../../api/update-winners-content';
import { FIRST_PAGE, WINNERS_PER_PAGE } from '../../data/constants';
import { checkId } from '../../data/ids';
import { winnersData } from '../../data/race-data';
import { BaseComponentType, ButtonType, WinnersType } from '../../data/types';
import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import './pagination-buttons.scss';

const paginationButtonsTag: BaseComponentType = {
  tag: 'div',
  styles: ['pagination-btn-wrapper'],
};

const prevButton: ButtonType = {
  name: 'Prev',
  styles: ['prev-btn'],
  id: checkId('prev-winner-btn'),
};

const nextButton: ButtonType = {
  name: 'Next',
  styles: ['next-btn'],
  id: checkId('next-winner-btn'),
};

type PaginationButtonsType = {
  prev: HTMLButtonElement;
  next: HTMLButtonElement;
};

export class PaginationWinnersButtons extends BaseComponent {
  public prevBtn: HTMLButtonElement;

  public nextBtn: HTMLButtonElement;

  pageInfoWrapper: HTMLElement;

  constructor(pageInfoWrapper: HTMLElement) {
    super(paginationButtonsTag);
    this.pageInfoWrapper = pageInfoWrapper;
    this.prevBtn = new Button(prevButton).render(this.element);
    this.nextBtn = new Button(nextButton).render(this.element);
  }

  prevBtnInit(): void {
    this.prevBtn.addEventListener('click', async () => {
      const winners = await getWinners(JSON.parse(localStorage.getItem('winnersPageData') || '{}').pageNumber);
      await getWinners(JSON.parse(localStorage.getItem('winnersPageData') || '{}').pageNumber);
      this.nextBtn.classList.remove('disabled');
      if (JSON.parse(localStorage.winnersPageData).pageNumber > FIRST_PAGE) {
        winnersData.pageNumber = JSON.parse(localStorage.winnersPageData).pageNumber;
        winnersData.pageNumber -= 1;
        localStorage.setItem('winnersPageData', JSON.stringify(winnersData));
        const winnersContent = document.getElementById('winners-tbody');
        if (winnersContent) await updateWinnersContent(winnersContent, winnersData.pageNumber, this.pageInfoWrapper);
        if (
          winners.winnersNumber === WINNERS_PER_PAGE ||
          winners.winnersNumber / WINNERS_PER_PAGE === JSON.parse(localStorage.winnersPageData).pageNumber
        )
          this.nextBtn.classList.add('disabled');
      }

      if (JSON.parse(localStorage.winnersPageData).pageNumber === FIRST_PAGE) {
        this.prevBtn.classList.add('disabled');
      }
    });
  }

  nextBtnInit(): void {
    this.nextBtn.addEventListener('click', async () => {
      this.prevBtn.classList.remove('disabled');
      const winners = await getWinners(JSON.parse(localStorage.getItem('winnersPageData') || '{}').pageNumber);
      if (JSON.parse(localStorage.winnersPageData).pageNumber < winners.winnersNumber / WINNERS_PER_PAGE) {
        winnersData.pageNumber = JSON.parse(localStorage.winnersPageData).pageNumber;
        winnersData.pageNumber += 1;
        localStorage.setItem('winnersPageData', JSON.stringify(winnersData));
        const winnersContent = document.getElementById('winners-tbody');
        if (winnersContent) await updateWinnersContent(winnersContent, winnersData.pageNumber, this.pageInfoWrapper);
      }
      if (
        winners.winnersNumber === WINNERS_PER_PAGE ||
        Math.ceil(winners.winnersNumber / WINNERS_PER_PAGE) === JSON.parse(localStorage.winnersPageData).pageNumber
      ) {
        this.nextBtn.classList.add('disabled');
      }
    });
  }

  async render(parent: HTMLElement): Promise<PaginationButtonsType> {
    const winnersInfo: WinnersType = await getWinners(
      JSON.parse(localStorage.getItem('winnersPageData') || '{}').pageNumber,
    );
    const LS = JSON.parse(localStorage.getItem('winnersPageData') || '{}');
    if (LS.pageNumber === FIRST_PAGE) this.prevBtn.classList.add('disabled');
    if (LS.pageNumber >= Math.ceil(winnersInfo.winnersNumber / WINNERS_PER_PAGE))
      this.nextBtn.classList.add('disabled');
    this.prevBtnInit();
    this.nextBtnInit();
    parent.append(this.element);
    return { prev: this.prevBtn, next: this.nextBtn };
  }
}
