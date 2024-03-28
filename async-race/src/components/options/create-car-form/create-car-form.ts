import { checkId } from '../../../data/ids';
import { BaseComponentType, ButtonType, InputOptionType } from '../../../data/types';
import { BaseComponent } from '../../base-component';
import { Button } from '../../button/button';
import { OptionInput } from '../option-input/option-input';
import './create-car-form.scss';

const createCarFormTag: BaseComponentType = {
  tag: 'form',
  styles: ['create-car-form'],
  id: checkId('create-car-form'),
};

const createCarName: InputOptionType = {
  id: checkId('create-car-name'),
  type: 'text',
  placeholder: 'Enter car name here',
  styles: ['create-car-name'],
};

const createCarColor: InputOptionType = {
  id: checkId('create-car-color'),
  type: 'color',
  value: '#e3e3e3',
  styles: ['create-car-color'],
};

const createCarBtn: ButtonType = {
  name: 'Create',
  styles: ['create-car-btn'],
  id: checkId('create-car-btn'),
};

export class CreateCarForm extends BaseComponent {
  constructor() {
    super(createCarFormTag);
    new OptionInput(createCarName).render(this.element);
    new OptionInput(createCarColor).render(this.element);
    new Button(createCarBtn).render(this.element);
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
