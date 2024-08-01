import { startDriving, stopDriving } from '../../../api/car-animation';
import { deleteCar } from '../../../api/delete-car';
import { deleteWinner } from '../../../api/delete-winner';
import { getCurrentCar } from '../../../api/get-current-car';
import flagImage from '../../../assets/img/flag.svg';
import { checkId } from '../../../data/ids';
import { BaseComponentType, ButtonType } from '../../../data/types';
import { BaseComponent } from '../../base-component';
import { Button } from '../../button/button';
import { Car } from '../../car/car';
import './race-line.scss';

const raceLineTag: BaseComponentType = {
  tag: 'div',
  styles: ['race-line'],
};

const removeButton: ButtonType = {
  name: 'Remove',
  styles: ['remove-btn'],
  id: checkId('remove-btn'),
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
    const selectBtn = new Button({
      name: 'Select',
      styles: ['select-btn'],
      id: `select-btn-${id}`,
    }).render(carSelectWrapper);
    const removeBtn = new Button(removeButton).render(carSelectWrapper);
    const startBtn = new Button({
      name: 'A',
      styles: ['a-btn'],
      id: `a-btn-${id}`,
    }).render(carEngineWrapper);
    const stopBtn = new Button({
      name: 'B',
      styles: ['b-btn', 'disabled'],
      id: `b-btn-${id}`,
    }).render(carEngineWrapper);
    const flag: HTMLImageElement = new Image();
    flag.src = flagImage;
    flag.alt = 'flag';
    flag.classList.add('flag-img');
    flag.id = `img-flag-${id}`;
    this.element.append(flag);
    const car = new Car(this.color, this.id).render(this.element);
    this.init(removeBtn, selectBtn, startBtn, stopBtn, car, flag);
  }

  init(
    removeBtn: HTMLButtonElement,
    selectBtn: HTMLButtonElement,
    startBtn: HTMLButtonElement,
    stopBtn: HTMLButtonElement,
    car: HTMLElement,
    flag: HTMLImageElement,
  ): void {
    removeBtn.addEventListener('click', async () => {
      await deleteCar(this.id);
      await deleteWinner(this.id);
    });
    selectBtn.addEventListener('click', async (e) => {
      const target = e.target as HTMLElement;
      if (target.id === `select-btn-${this.id}`) await getCurrentCar(this.id);
    });
    startBtn.addEventListener('click', async () => {
      await startDriving(this.id, startBtn, stopBtn, car, flag);
    });
    stopBtn.addEventListener('click', async () => {
      await stopDriving(this.id, startBtn, stopBtn, car);
    });
  }

  render(parent: HTMLElement): HTMLElement {
    const carName = document.createElement('div');
    carName.textContent = this.name;
    carName.classList.add('car-name');
    this.element.append(carName);
    parent.append(this.element);
    return this.element;
  }
}
