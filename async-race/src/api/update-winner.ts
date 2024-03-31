import { BASE_URL } from '../data/constants';
import { WinnerUpdateType } from '../data/types';

export const updateWinner = async (id: number, body: WinnerUpdateType): Promise<void> => {
  await fetch(`${BASE_URL}/winners/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
