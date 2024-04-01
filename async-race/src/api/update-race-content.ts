import { PageInfo } from '../components/page-info/page-info';
import { PaginationRaceButtons } from '../components/pagination-buttons/pagination-race-buttons';
import { RaceLine } from '../components/race-field/race-line/race-line';
import { CarInfoType } from '../data/types';
import { getCars } from './get-cars';

export const updateRaceContent = async (
  raceFieldWrapper: HTMLElement,
  pageInfoWrapper: HTMLElement,
  pageNum: number,
  paginationBtnWrapper?: HTMLElement,
): Promise<void> => {
  const asyncRaceData = JSON.parse(localStorage.getItem('asyncRaceData') || '{}');
  const carsInfo = await getCars(asyncRaceData.pageNumber);
  const carsNumber = carsInfo.carsNumber;
  if (raceFieldWrapper) {
    raceFieldWrapper.innerHTML = '';
    (await getCars(asyncRaceData.pageNumber)).cars.forEach((item: CarInfoType) =>
      new RaceLine(item.name, item.color, item.id).render(raceFieldWrapper),
    );
  }
  if (pageInfoWrapper) {
    pageInfoWrapper.innerHTML = '';
    new PageInfo('Garage', carsNumber, pageNum).render(pageInfoWrapper);
  }
  if (paginationBtnWrapper) {
    paginationBtnWrapper.innerHTML = '';
    new PaginationRaceButtons(pageInfoWrapper, raceFieldWrapper).render(paginationBtnWrapper);
  }
};
