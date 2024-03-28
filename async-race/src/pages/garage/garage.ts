import { getCars } from '../../api/get-cars';
import { BaseComponent } from '../../components/base-component';
import { CarOptions } from '../../components/options/options';
import { PageInfo } from '../../components/page-info/page-info';
import { PaginationButtons } from '../../components/pagination-buttons/pagination-buttons';
import { RaceButtons } from '../../components/race-buttons/race-buttons';
import { RaceField } from '../../components/race-field/race-field';
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
    await new PageInfo('Garage', cars.carsNumber).render(this.element);
    parent.append(this.element);
    await new RaceField().render(this.element);
    await new PaginationButtons().render(this.element);
    return this.element;
  }
}
