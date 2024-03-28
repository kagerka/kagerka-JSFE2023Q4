import { BASE_URL, CARS_PER_PAGE } from '../data/constants';
import { CarInfoType, GarageType } from '../data/types';

export const getCars = async (pageNumber?: number): Promise<GarageType> => {
  const response = pageNumber
    ? await fetch(`${BASE_URL}/garage?_page=${pageNumber}&_limit=${CARS_PER_PAGE}`)
    : await fetch(`${BASE_URL}/garage`);
  const cars: CarInfoType[] = await response.json();
  const carsNumber = pageNumber ? Number(response.headers.get('X-Total-Count')) : cars.length;

  return { cars: cars, carsNumber: carsNumber };
};
