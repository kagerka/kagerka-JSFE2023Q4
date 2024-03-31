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
  car: CarInfoType;
};

export type WinnerUpdateType = {
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

export type RandomCarType = {
  randomCarBrand: string;
  randomCarModel: string;
  randomColor: string;
};

export type CarUpdateType = {
  name: string;
  color: string;
};

export type StartEngineType = {
  velocity: number;
  distance: number;
};

export type DriveModeType = {
  success: boolean;
};

export type CoordinatesType = {
  x: number;
  y: number;
};

export type DriveResultType = {
  success: boolean;
  id: number;
  time: number;
};

export type RaceButtonsType = {
  raceCars: HTMLButtonElement;
  resetCars: HTMLButtonElement;
};

export type AnimationStateType = {
  id: number;
};
