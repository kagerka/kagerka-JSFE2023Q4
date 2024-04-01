import { BASE_URL } from '../data/constants';
import { CarInfoType, GarageType } from '../data/types';

export const createCar = async (name: string, color: string): Promise<GarageType> => {
  const response = await fetch(`${BASE_URL}/garage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, color }),
  });
  const cars: CarInfoType[] = await response.json();
  const carsNumber = Number(response.headers.get('X-Total-Count'));
  return { cars: cars, carsNumber: carsNumber };
};
