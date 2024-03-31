import { BASE_URL } from '../data/constants';
import { WinnersInfoType, WinnersType } from '../data/types';

export const getWinners = async (): Promise<WinnersType> => {
  const response = await fetch(`${BASE_URL}/winners`);
  const winners: WinnersInfoType[] = await response.json();
  const winnersNumber = winners.length;
  return { winners: winners, winnersNumber: winnersNumber };
};
