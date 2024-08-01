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

export class PaginationRaceButtons extends BaseComponent {
  public prevBtn: HTMLButtonElement;

  public nextBtn: HTMLButtonElement;

  pageInfoWrapper?: HTMLElement;

  raceFieldWrapper?: HTMLElement;

  paginationBtnWrapper?: HTMLElement;

  constructor(pageInfoWrapper?: HTMLElement, raceFieldWrapper?: HTMLElement, paginationBtnWrapper?: HTMLElement) {
    super(paginationButtonsTag);
    if (pageInfoWrapper) this.pageInfoWrapper = pageInfoWrapper;
    if (raceFieldWrapper) this.raceFieldWrapper = raceFieldWrapper;
    if (paginationBtnWrapper) this.paginationBtnWrapper = paginationBtnWrapper;
    this.prevBtn = new Button(prevButton).render(this.element);
    this.nextBtn = new Button(nextButton).render(this.element);
  }

  prevBtnInit(): void {
    this.prevBtn.addEventListener('click', async () => {
      const cars = await getCars();
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
        if (
          cars.carsNumber === CARS_PER_PAGE ||
          cars.carsNumber / CARS_PER_PAGE === JSON.parse(localStorage.asyncRaceData).pageNumber
        )
          this.nextBtn.classList.add('disabled');
      }
      if (JSON.parse(localStorage.asyncRaceData).pageNumber === FIRST_PAGE) {
        this.prevBtn.classList.add('disabled');
      }
    });
  }

  nextBtnInit(): void {
    this.nextBtn.addEventListener('click', async () => {
      this.prevBtn.classList.remove('disabled');
      const cars = await getCars();
      if (JSON.parse(localStorage.asyncRaceData).pageNumber < cars.carsNumber / CARS_PER_PAGE) {
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
      if (
        cars.carsNumber === CARS_PER_PAGE ||
        Math.ceil(cars.carsNumber / CARS_PER_PAGE) === JSON.parse(localStorage.asyncRaceData).pageNumber
      ) {
        this.nextBtn.classList.add('disabled');
      }
    });
  }

  async render(parent: HTMLElement): Promise<PaginationButtonsType> {
    const carsInfo: GarageType = await getCars();
    const LS = JSON.parse(localStorage.getItem('asyncRaceData') || '{}');
    if (LS.pageNumber === FIRST_PAGE) this.prevBtn.classList.add('disabled');
    if (LS.pageNumber >= Math.ceil(carsInfo.carsNumber / CARS_PER_PAGE)) this.nextBtn.classList.add('disabled');
    this.prevBtnInit();
    this.nextBtnInit();
    parent.append(this.element);
    return { prev: this.prevBtn, next: this.nextBtn };
  }
}
