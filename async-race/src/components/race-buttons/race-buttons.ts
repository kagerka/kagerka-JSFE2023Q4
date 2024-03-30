import { createCar } from '../../api/create-car';
import { generateRandomCar } from '../../api/generate-random-car';
import { checkId } from '../../data/ids';
import { BaseComponentType, ButtonType } from '../../data/types';
import { BaseComponent } from '../base-component';
import { Button } from '../button/button';
import './race-buttons.scss';

const RaceButtonsTag: BaseComponentType = {
  tag: 'div',
  styles: ['race-buttons'],
};

const raceButton: ButtonType = {
  name: 'Race',
  styles: ['race-btn'],
  id: checkId('race-btn'),
};

const resetButton: ButtonType = {
  name: 'Reset',
  styles: ['reset-btn'],
  id: checkId('reset-btn'),
};

const generateCarsButton: ButtonType = {
  name: 'Generate cars',
  styles: ['generate-cars-btn'],
  id: checkId('generate-cars-btn'),
};
export class RaceButtons extends BaseComponent {
  constructor() {
    super(RaceButtonsTag);
    new Button(raceButton).render(this.element);
    new Button(resetButton).render(this.element);
    const generateCars = new Button(generateCarsButton).render(this.element);
    this.init(generateCars);
  }

  init(generateCars: HTMLButtonElement): void {
    generateCars.addEventListener('click', (e) => {
      e.preventDefault();
      const ADD_CARS_PER_CLICK = 100;
      for (let i = 0; i < ADD_CARS_PER_CLICK; i++) {
        const generateCarsData = generateRandomCar();
        createCar(
          `${generateCarsData.randomCarBrand} ${generateCarsData.randomCarModel}`,
          generateCarsData.randomColor,
        );
      }
    });
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
