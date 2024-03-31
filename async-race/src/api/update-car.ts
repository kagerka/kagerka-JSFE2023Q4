import { BASE_URL } from '../data/constants';
import { CarUpdateType } from '../data/types';

export const updateCar = async (id: number, data: CarUpdateType): Promise<void> => {
  await fetch(`${BASE_URL}/garage/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
