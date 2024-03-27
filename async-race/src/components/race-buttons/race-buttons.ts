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
  id: 'race-btn',
};

const resetButton: ButtonType = {
  name: 'Reset',
  styles: ['reset-btn'],
  id: 'reset-btn',
};

const generateCarsButton: ButtonType = {
  name: 'Generate cars',
  styles: ['generate-cars-btn'],
  id: 'generate-cars-btn',
};
export class RaceButtons extends BaseComponent {
  constructor() {
    super(RaceButtonsTag);
    new Button(raceButton).render(this.element);
    new Button(resetButton).render(this.element);
    new Button(generateCarsButton).render(this.element);
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
