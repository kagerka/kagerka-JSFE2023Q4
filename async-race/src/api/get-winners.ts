import { BASE_URL, WINNERS_PER_PAGE } from '../data/constants';
import { WinnersInfoType, WinnersType } from '../data/types';

export const getWinners = async (page: number, sort: string = 'id', order: string = 'ASC'): Promise<WinnersType> => {
  const response = await fetch(
    `${BASE_URL}/winners?_page=${page}&_limit=${WINNERS_PER_PAGE}&_sort=${sort}&_order=${order}`,
  );
  const winners: WinnersInfoType[] = await response.json();
  const winnersNumber = Number(response.headers.get('X-Total-Count'));
  return { winners: winners, winnersNumber: winnersNumber };
};
