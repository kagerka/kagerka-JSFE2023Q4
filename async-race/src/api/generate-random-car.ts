import { carModels } from '../data/car-models';
import { ADD_CARS_PER_CLICK, DEFAULT_CAR_COLOR, HEX, HEX_COLORS_COUNT } from '../data/constants';
import { RandomCarType } from '../data/types';
import { createCar } from './create-car';

const generateRandomCar = (): RandomCarType => {
  const carBrandsLength = Object.keys(carModels).length;
  const randomCarBrandsNumber = Math.floor(Math.random() * carBrandsLength);
  const randomCarBrand = Object.keys(carModels)[randomCarBrandsNumber];
  const carModelsLength = Object.values(carModels)[randomCarBrandsNumber].length;
  const randomCarModelNumber = Math.floor(Math.random() * carModelsLength);
  const randomCarModel = Object.values(carModels)[randomCarBrandsNumber][randomCarModelNumber];
  const randomColor = `#${Math.floor(Math.random() * HEX_COLORS_COUNT).toString(HEX)}`;
  return {
    randomCarBrand,
    randomCarModel,
    randomColor,
  };
};

export const generateOneCar = async (nameInput: HTMLInputElement, colorInput: HTMLInputElement): Promise<void> => {
  const randomCar = generateRandomCar();
  if (nameInput.value === '' && colorInput.value === DEFAULT_CAR_COLOR) {
    await createCar(`${randomCar.randomCarBrand} ${randomCar.randomCarModel}`, randomCar.randomColor);
  } else if (nameInput.value === '' && colorInput.value !== DEFAULT_CAR_COLOR) {
    await createCar(`${randomCar.randomCarBrand} ${randomCar.randomCarModel}`, colorInput.value);
  } else if (nameInput.value !== '' && colorInput.value === DEFAULT_CAR_COLOR) {
    await createCar(nameInput.value, randomCar.randomColor);
  } else {
    await createCar(nameInput.value, colorInput.value);
  }
  nameInput.value = '';
  colorInput.value = DEFAULT_CAR_COLOR;
};

export const generateHundredCars = (): void => {
  for (let i = 0; i < ADD_CARS_PER_CLICK; i++) {
    const generateCarsData = generateRandomCar();
    createCar(`${generateCarsData.randomCarBrand} ${generateCarsData.randomCarModel}`, generateCarsData.randomColor);
  }
};
