import { BASE_URL } from '../data/constants';
import { CarInfoType, GarageType } from '../data/types';

export const deleteCar = async (id: number): Promise<GarageType> => {
  const response = await fetch(`${BASE_URL}/garage/${id}`, {
    method: 'DELETE',
  });
  const cars: CarInfoType[] = await response.json();
  const carsNumber: number = cars.length;
  return { cars: cars, carsNumber: carsNumber };
};
