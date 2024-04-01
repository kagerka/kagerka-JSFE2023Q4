import { BaseComponentType } from '../../data/types';
import { BaseComponent } from '../base-component';
import { CreateCarForm } from './create-car-form/create-car-form';
import './options.scss';
import { UpdateCarForm } from './update-car-form/update-car-form';

const carOptionsTag: BaseComponentType = {
  tag: 'div',
  styles: ['car-options'],
};

export class CarOptions extends BaseComponent {
  constructor() {
    super(carOptionsTag);
    new CreateCarForm().render(this.element);
    new UpdateCarForm().render(this.element);
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
