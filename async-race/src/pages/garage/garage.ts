import { getCars } from '../../api/get-cars';
import { BaseComponent } from '../../components/base-component';
import { CarOptions } from '../../components/options/options';
import { PageInfo } from '../../components/page-info/page-info';
import { RaceButtons } from '../../components/race-buttons/race-buttons';
import { BaseComponentType } from '../../data/types';
import './garage.scss';

const garagePageTag: BaseComponentType = {
  tag: 'div',
  styles: ['garage-page'],
};

export class GaragePage extends BaseComponent {
  constructor() {
    super(garagePageTag);
    new CarOptions().render(this.element);
    new RaceButtons().render(this.element);
  }

  async render(parent: HTMLElement): Promise<HTMLElement> {
    const cars = await getCars();
    new PageInfo('Garage', cars.carsNumber).render(this.element);
    parent.append(this.element);
    return this.element;
  }
}
