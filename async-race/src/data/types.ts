export type BaseComponentType = {
  tag: keyof HTMLElementTagNameMap;
  styles: string[];
  id?: string;
};

export type CarInfoType = {
  name: string;
  color: string;
  id: number;
};

export type GarageType = {
  cars: CarInfoType[];
  carsNumber: number;
};

export type WinnersType = {
  winners: WinnersInfoType[];
  winnersNumber: number;
};

export type WinnersInfoType = {
  id: number;
  wins: number;
  time: number;
};

export type InputOptionType = {
  id: string;
  type: string;
  placeholder?: string;
  value?: string;
  styles?: string[];
};

export type ButtonType = {
  name: string;
  styles: string[];
  id?: string;
};

export type RaceDataType = {
  pageNumber: number;
};
