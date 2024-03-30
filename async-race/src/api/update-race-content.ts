import { PageInfo } from '../components/page-info/page-info';
import { PaginationButtons } from '../components/pagination-buttons/pagination-buttons';
import { RaceLine } from '../components/race-field/race-line/race-line';
import { CarInfoType } from '../data/types';
import { getCars } from './get-cars';

export const updateRaceContent = async (
  raceFieldWrapper: HTMLElement,
  pageInfoWrapper: HTMLElement,
  pageNum: number,
  paginationBtnWrapper?: HTMLElement,
): Promise<void> => {
  const carsInfo = await getCars(pageNum);
  const carsNumber = carsInfo.carsNumber;
  if (raceFieldWrapper) {
    raceFieldWrapper.innerHTML = '';
    (await getCars(pageNum)).cars.forEach((item: CarInfoType) =>
      new RaceLine(item.name, item.color, item.id).render(raceFieldWrapper),
    );
  }
  if (pageInfoWrapper) {
    pageInfoWrapper.innerHTML = '';
    new PageInfo('Garage', carsNumber, pageNum).render(pageInfoWrapper);
  }

  if (paginationBtnWrapper) {
    paginationBtnWrapper.innerHTML = '';
    new PaginationButtons(pageInfoWrapper, raceFieldWrapper).render(paginationBtnWrapper);
  }
};
