import { getCars } from '../../api/get-cars';
import { BaseComponentType, GarageType } from '../../data/types';
import { BaseComponent } from '../base-component';
import './race-field.scss';
import { RaceLine } from './race-line/race-line';

const raceFieldTag: BaseComponentType = {
  tag: 'div',
  styles: ['race-field'],
};

export class RaceField extends BaseComponent {
  constructor() {
    super(raceFieldTag);
  }

  async render(parent: HTMLElement): Promise<HTMLElement> {
    const carsInfo: GarageType = await getCars();
    carsInfo.cars.forEach((el) => {
      new RaceLine(el.name, el.color, el.id).render(this.element);
    });

    parent.append(this.element);
    return this.element;
  }
}
