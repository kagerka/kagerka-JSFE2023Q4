import { generateOneCar } from '../../../api/generate-random-car';
import { DEFAULT_CAR_COLOR } from '../../../data/constants';
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
  value: DEFAULT_CAR_COLOR,
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
    const nameInput = new OptionInput(createCarName).render(this.element);
    const colorInput = new OptionInput(createCarColor).render(this.element);
    const createButton = new Button(createCarBtn).render(this.element);
    this.init(createButton, nameInput, colorInput);
  }

  init(createButton: HTMLButtonElement, nameInput: HTMLInputElement, colorInput: HTMLInputElement): void {
    createButton.addEventListener('click', async (e) => {
      e.preventDefault();
      generateOneCar(nameInput, colorInput);
    });
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
