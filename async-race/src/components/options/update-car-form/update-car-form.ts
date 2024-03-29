import { DEFAULT_CAR_COLOR } from '../../../data/constants';
import { checkId } from '../../../data/ids';
import { BaseComponentType, ButtonType, InputOptionType } from '../../../data/types';
import { BaseComponent } from '../../base-component';
import { Button } from '../../button/button';
import { OptionInput } from '../option-input/option-input';
import './update-car-form.scss';

const updateCarFormTag: BaseComponentType = {
  tag: 'form',
  styles: ['update-car-form'],
  id: checkId('update-car-form'),
};

const updateCarName: InputOptionType = {
  id: checkId('update-car-name'),
  type: 'text',
  placeholder: 'Enter new car name here for update',
  styles: ['update-car-name'],
};

const updateCarColor: InputOptionType = {
  id: checkId('update-car-color'),
  type: 'color',
  value: DEFAULT_CAR_COLOR,
  styles: ['update-car-color'],
};

const updateCarBtn: ButtonType = {
  name: 'Update',
  styles: ['update-car-btn'],
  id: checkId('update-car-btn'),
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
