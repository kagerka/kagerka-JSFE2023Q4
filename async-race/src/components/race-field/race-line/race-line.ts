import { checkId } from '../../../data/ids';
import { BaseComponentType, ButtonType } from '../../../data/types';
import { BaseComponent } from '../../base-component';
import { Button } from '../../button/button';
import { Car } from '../../car/car';
import './race-line.scss';
import flagImage from '../../../assets/img/flag.svg';

const raceLineTag: BaseComponentType = {
  tag: 'div',
  styles: ['race-line'],
};

const selectButton: ButtonType = {
  name: 'Select',
  styles: ['select-btn'],
  id: checkId('select-btn'),
};

const removeButton: ButtonType = {
  name: 'Remove',
  styles: ['remove-btn'],
  id: checkId('remove-btn'),
};

const aButton: ButtonType = {
  name: 'A',
  styles: ['a-btn'],
  id: checkId('a-btn'),
};

const bButton: ButtonType = {
  name: 'B',
  styles: ['b-btn'],
  id: checkId('b-btn'),
};

export class RaceLine extends BaseComponent {
  name: string;

  color: string;

  id: number;

  constructor(name: string, color: string, id: number) {
    super(raceLineTag);
    this.name = name;
    this.color = color;
    this.id = id;
    const carRaceBtnWrapper = document.createElement('div');
    carRaceBtnWrapper.classList.add('car-race-btn-wrapper');
    this.element.append(carRaceBtnWrapper);

    const carSelectWrapper = document.createElement('div');
    carSelectWrapper.classList.add('car-select-wrapper');
    carRaceBtnWrapper.append(carSelectWrapper);

    const carEngineWrapper = document.createElement('div');
    carEngineWrapper.classList.add('car-engine-wrapper');
    carRaceBtnWrapper.append(carEngineWrapper);

    new Button(selectButton).render(carSelectWrapper);
    new Button(removeButton).render(carSelectWrapper);
    new Button(aButton).render(carEngineWrapper);
    new Button(bButton).render(carEngineWrapper);

    const flag: HTMLImageElement = new Image();
    flag.src = flagImage;
    flag.alt = 'flag';
    flag.classList.add('flag-img');
    this.element.append(flag);
  }

  render(parent: HTMLElement): HTMLElement {
    new Car(this.color, this.id).render(this.element);
    const carName = document.createElement('div');
    carName.textContent = this.name;
    carName.classList.add('car-name');
    this.element.append(carName);
    parent.append(this.element);
    return this.element;
  }
}
