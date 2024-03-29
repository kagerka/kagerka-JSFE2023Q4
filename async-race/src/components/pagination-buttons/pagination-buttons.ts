import { getCars } from '../../api/get-cars';
import { updateRaceContent } from '../../api/update-race-content';
import { CARS_PER_PAGE, FIRST_PAGE } from '../../data/constants';
import { checkId } from '../../data/ids';
import { raceData } from '../../data/race-data';
import { BaseComponentType, ButtonType, GarageType } from '../../data/types';
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
  id: checkId('prev-btn'),
};

const nextButton: ButtonType = {
  name: 'Next',
  styles: ['next-btn'],
  id: checkId('next-btn'),
};

type PaginationButtonsType = {
  prev: HTMLButtonElement;
  next: HTMLButtonElement;
};

export class PaginationButtons extends BaseComponent {
  public prevBtn: HTMLButtonElement;

  public nextBtn: HTMLButtonElement;

  pageInfoWrapper?: HTMLElement;

  raceFieldWrapper?: HTMLElement;

  constructor(pageInfoWrapper?: HTMLElement, raceFieldWrapper?: HTMLElement) {
    super(paginationButtonsTag);
    if (pageInfoWrapper) this.pageInfoWrapper = pageInfoWrapper;
    if (raceFieldWrapper) this.raceFieldWrapper = raceFieldWrapper;
    this.prevBtn = new Button(prevButton).render(this.element);
    this.nextBtn = new Button(nextButton).render(this.element);
  }

  init(carsInfo: GarageType): void {
    this.prevBtn.addEventListener('click', async () => {
      this.nextBtn.classList.remove('disabled');
      if (JSON.parse(localStorage.asyncRaceData).pageNumber > FIRST_PAGE) {
        raceData.pageNumber = JSON.parse(localStorage.asyncRaceData).pageNumber;
        raceData.pageNumber -= 1;
        localStorage.setItem('asyncRaceData', JSON.stringify(raceData));
        if (this.raceFieldWrapper && this.pageInfoWrapper && JSON.parse(localStorage.asyncRaceData).pageNumber) {
          await updateRaceContent(
            this.raceFieldWrapper,
            this.pageInfoWrapper,
            JSON.parse(localStorage.asyncRaceData).pageNumber,
          );
        }
      }

      if (JSON.parse(localStorage.asyncRaceData).pageNumber === FIRST_PAGE) {
        this.prevBtn.classList.add('disabled');
      }
    });
    this.nextBtn.addEventListener('click', async () => {
      const pageNumber = JSON.parse(localStorage.asyncRaceData).pageNumber;
      this.prevBtn.classList.remove('disabled');
      if (JSON.parse(localStorage.asyncRaceData).pageNumber < carsInfo.carsNumber / CARS_PER_PAGE) {
        raceData.pageNumber = JSON.parse(localStorage.asyncRaceData).pageNumber;
        raceData.pageNumber += 1;
        localStorage.setItem('asyncRaceData', JSON.stringify(raceData));
        if (this.raceFieldWrapper && this.pageInfoWrapper && JSON.parse(localStorage.asyncRaceData).pageNumber) {
          await updateRaceContent(
            this.raceFieldWrapper,
            this.pageInfoWrapper,
            JSON.parse(localStorage.asyncRaceData).pageNumber,
          );
        }
      }
      if (pageNumber === Math.floor(carsInfo.carsNumber / CARS_PER_PAGE)) {
        this.nextBtn.classList.add('disabled');
      }
    });
  }

  async render(parent: HTMLElement): Promise<PaginationButtonsType> {
    const carsInfo: GarageType = await getCars();
    const LS = JSON.parse(localStorage.getItem('asyncRaceData') || '{}');
    if (LS.pageNumber === FIRST_PAGE) this.prevBtn.classList.add('disabled');
    if (LS.pageNumber > Math.floor(carsInfo.carsNumber / CARS_PER_PAGE)) this.nextBtn.classList.add('disabled');
    this.init(carsInfo);
    parent.append(this.element);
    return { prev: this.prevBtn, next: this.nextBtn };
  }
}
