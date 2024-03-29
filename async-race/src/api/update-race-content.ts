import { PageInfo } from '../components/page-info/page-info';
import { RaceLine } from '../components/race-field/race-line/race-line';
import { CarInfoType } from '../data/types';
import { getCars } from './get-cars';

export const updateRaceContent = async (
  raceField: HTMLElement,
  pageInfoWrapper: HTMLElement,
  pageNum: number,
): Promise<void> => {
  const carsInfo = await getCars(pageNum);
  const cars = carsInfo.cars;
  const carsNumber = carsInfo.carsNumber;
  if (raceField) {
    raceField.innerHTML = '';
    cars.forEach((item: CarInfoType) => new RaceLine(item.name, item.color, item.id).render(raceField));
  }
  if (pageInfoWrapper) {
    pageInfoWrapper.innerHTML = '';
    pageInfoWrapper.append(new PageInfo('Garage', carsNumber, pageNum).render());
  }
};
