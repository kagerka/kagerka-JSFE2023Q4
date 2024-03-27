import { BaseComponentType, ButtonType, InputOptionType } from '../../../data/types';
import { BaseComponent } from '../../base-component';
import { Button } from '../../button/button';
import { OptionInput } from '../option-input/option-input';
import './update-car-form.scss';

const updateCarFormTag: BaseComponentType = {
  tag: 'form',
  styles: ['update-car-form'],
  id: 'update-car-form',
};

const updateCarName: InputOptionType = {
  id: 'update-car-name',
  type: 'text',
  placeholder: 'Enter new car name here for update',
  styles: ['update-car-name'],
};

const updateCarColor: InputOptionType = {
  id: 'update-car-color',
  type: 'color',
  value: '#e3e3e3',
  styles: ['update-car-color'],
};

const updateCarBtn: ButtonType = {
  name: 'Update',
  styles: ['update-car-btn'],
  id: 'update-car-btn',
};

export class UpdateCarForm extends BaseComponent {
  constructor() {
    super(updateCarFormTag);
    new OptionInput(updateCarName).render(this.element);
    new OptionInput(updateCarColor).render(this.element);
    new Button(updateCarBtn).render(this.element);
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
