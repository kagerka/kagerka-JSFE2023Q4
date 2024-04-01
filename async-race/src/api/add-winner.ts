import { BASE_URL } from '../data/constants';
import { WinnersCreateType } from '../data/types';

export const addWinner = async (body: WinnersCreateType): Promise<void> => {
  await fetch(`${BASE_URL}/winners`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
