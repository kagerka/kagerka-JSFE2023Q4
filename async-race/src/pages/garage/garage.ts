import { getCars } from '../../api/get-cars';
import { updateRaceContent } from '../../api/update-race-content';
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
  styles: ['garage-page', 'active'],
};

export class GaragePage extends BaseComponent {
  constructor() {
    super(garagePageTag);

    if (!localStorage.getItem('asyncRaceData')) {
      localStorage.setItem('asyncRaceData', JSON.stringify(raceData));
    }
  }

  init(): void {}

  async render(parent: HTMLElement): Promise<HTMLElement> {
    new CarOptions().render(this.element);
    new RaceButtons().render(this.element);
    const cars = await getCars();

    const localStorageData = JSON.parse(localStorage.getItem('asyncRaceData') || '{}');
    const pageInfoWrap = document.createElement('div');
    pageInfoWrap.classList.add('page-info-wrapper');
    this.element.append(pageInfoWrap);
    new PageInfo('Garage', cars.carsNumber, localStorageData.pageNumber).render(pageInfoWrap);

    const raceFieldWrap = document.createElement('div');
    raceFieldWrap.classList.add('race-field');
    this.element.append(raceFieldWrap);
    await new RaceField().render(raceFieldWrap);

    const paginationWrap = document.createElement('div');
    paginationWrap.classList.add('pagination-btn-wrapper');
    this.element.append(paginationWrap);

    new PaginationButtons(pageInfoWrap, raceFieldWrap).render(paginationWrap);

    parent.append(this.element);

    document.addEventListener('click', async (e: Event) => {
      const target = e.target as HTMLButtonElement;
      if (
        target.id === 'remove-btn' ||
        target.id === 'create-car-btn' ||
        target.id === 'update-car-btn' ||
        target.id === 'generate-cars-btn'
      ) {
        await updateRaceContent(raceFieldWrap, pageInfoWrap, localStorageData.pageNumber, paginationWrap);
        localStorage.removeItem('currentCarData');
      }
    });
    return this.element;
  }
}
