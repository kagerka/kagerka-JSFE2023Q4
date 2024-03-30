import { BASE_URL } from '../data/constants';
export const deleteCar = async (id: number): Promise<void> => {
  await fetch(`${BASE_URL}/garage/${id}`, {
    method: 'DELETE',
  });
};
