import { raceAll, resetAll } from '../../api/car-animation';
import { generateHundredCars } from '../../api/generate-random-car';
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
  public raceCars: HTMLButtonElement;

  public resetCars: HTMLButtonElement;

  generateCars: HTMLButtonElement;

  constructor() {
    super(RaceButtonsTag);
    this.raceCars = new Button(raceButton).render(this.element);
    this.resetCars = new Button(resetButton).render(this.element);
    this.resetCars.classList.add('disabled');
    this.generateCars = new Button(generateCarsButton).render(this.element);
    this.init();
  }

  init(): void {
    this.generateCars.addEventListener('click', (e) => {
      e.preventDefault();
      generateHundredCars();
    });
    this.raceCars.addEventListener('click', async (e) => {
      e.preventDefault();
      await raceAll(this.raceCars, this.resetCars);
      this.raceCars.classList.add('disabled');
      this.resetCars.classList.remove('disabled');
    });
    this.resetCars.addEventListener('click', async (e) => {
      e.preventDefault();
      await resetAll(this.raceCars, this.resetCars);
      this.resetCars.classList.add('disabled');
      this.raceCars.classList.remove('disabled');
    });
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
