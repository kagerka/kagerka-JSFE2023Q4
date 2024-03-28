import { getCars } from '../../api/get-cars';
import { BaseComponent } from '../../components/base-component';
import { CarOptions } from '../../components/options/options';
import { PageInfo } from '../../components/page-info/page-info';
import { PaginationButtons } from '../../components/pagination-buttons/pagination-buttons';
import { RaceButtons } from '../../components/race-buttons/race-buttons';
import { RaceField } from '../../components/race-field/race-field';
import { raceData } from '../../data/race-data';
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

    if (!localStorage.getItem('asyncRaceData')) {
      localStorage.setItem('asyncRaceData', JSON.stringify(raceData));
    }
  }

  async render(parent: HTMLElement): Promise<HTMLElement> {
    new RaceButtons().render(this.element);
    const cars = await getCars();

    const localStorageData = JSON.parse(localStorage.getItem('asyncRaceData') || '{}');
    const pageInfoWrapper = document.createElement('div');
    pageInfoWrapper.classList.add('page-info-wrapper');
    this.element.append(pageInfoWrapper);
    new PageInfo('Garage', cars.carsNumber, localStorageData.pageNumber).render(pageInfoWrapper);

    const raceFieldWrapper = document.createElement('div');
    raceFieldWrapper.classList.add('race-field');
    this.element.append(raceFieldWrapper);
    await new RaceField().render(raceFieldWrapper);

    new PaginationButtons(pageInfoWrapper, raceFieldWrapper).render(this.element);

    parent.append(this.element);

    return this.element;
  }
}
