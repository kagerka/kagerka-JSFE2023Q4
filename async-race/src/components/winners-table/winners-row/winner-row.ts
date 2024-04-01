import { BaseComponentType, CarInfoType } from '../../../data/types';
import { BaseComponent } from '../../base-component';
import { Car } from '../../car/car';
import './winners-row.scss';

const winnersRowTag: BaseComponentType = {
  tag: 'tr',
  styles: ['winners-row'],
};

export class WinnersRow extends BaseComponent {
  tdNumber: HTMLTableCellElement;

  tdCar: HTMLTableCellElement;

  tdName: HTMLTableCellElement;

  tdWins: HTMLTableCellElement;

  tdTime: HTMLTableCellElement;

  constructor(number: number, car: CarInfoType, wins: number, time: number) {
    super(winnersRowTag);
    this.tdNumber = document.createElement('td');
    this.tdNumber.textContent = `${number}`;
    this.tdCar = document.createElement('td');
    new Car(car.color).render(this.tdCar);
    this.tdName = document.createElement('td');
    this.tdName.textContent = `${car.name}`;
    this.tdWins = document.createElement('td');
    this.tdWins.textContent = `${wins}`;
    this.tdTime = document.createElement('td');
    this.tdTime.textContent = `${time}`;
    this.element.append(this.tdNumber, this.tdCar, this.tdName, this.tdWins, this.tdTime);
  }

  async render(parent: HTMLElement): Promise<HTMLElement> {
    parent.append(this.element);
    return this.element;
  }
}
