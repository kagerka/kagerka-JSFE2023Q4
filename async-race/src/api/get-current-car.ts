import { BASE_URL } from '../data/constants';
import { CarInfoType } from '../data/types';

export const getCurrentCar = async (id: number): Promise<CarInfoType> => {
  const response = await fetch(`${BASE_URL}/garage/${id}`);
  const currentCar: CarInfoType = await response.json();
  await localStorage.setItem(
    'currentCarData',
    await JSON.stringify({ name: currentCar.name, color: currentCar.color, id: currentCar.id }),
  );
  return currentCar;
};
