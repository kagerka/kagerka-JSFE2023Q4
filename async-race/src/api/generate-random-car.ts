/* eslint-disable no-console */
import { carModels } from '../data/car-models';
import { HEX, HEX_COLORS_COUNT } from '../data/constants';
import { RandomCarType } from '../data/types';

export const generateRandomCar = (): RandomCarType => {
  const carBrandsLength = Object.keys(carModels).length;
  const randomCarBrandsNumber = Math.floor(Math.random() * carBrandsLength);
  const randomCarBrand = Object.keys(carModels)[randomCarBrandsNumber];
  const carModelsLength = Object.values(carModels)[randomCarBrandsNumber].length;
  const randomCarModelNumber = Math.floor(Math.random() * carModelsLength);
  const randomCarModel = Object.values(carModels)[randomCarBrandsNumber][randomCarModelNumber];
  const randomColor = `#${Math.floor(Math.random() * HEX_COLORS_COUNT).toString(HEX)}`;
  
  return {
    randomCarBrand, randomCarModel, randomColor,
  };
};