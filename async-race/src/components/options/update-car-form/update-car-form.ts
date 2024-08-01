import { updateCar } from '../../../api/update-car';
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
  styles: ['update-car-btn', 'disabled'],
  id: checkId('update-car-btn'),
};

export class UpdateCarForm extends BaseComponent {
  constructor() {
    super(updateCarFormTag);
    const nameInput = new OptionInput(updateCarName).render(this.element);
    const colorInput = new OptionInput(updateCarColor).render(this.element);
    const updateBtn = new Button(updateCarBtn).render(this.element);
    this.init(nameInput, colorInput, updateBtn);
  }

  init(nameInput: HTMLInputElement, colorInput: HTMLInputElement, updateBtn: HTMLButtonElement): void {
    document.addEventListener('click', (e) => {
      const timeForLsUpdate = 100;
      setTimeout(() => {
        if ((e.target as HTMLElement).id.includes('select-btn')) {
          const getCurrentCar = JSON.parse(localStorage.getItem('currentCarData') || '{}');
          nameInput.value = getCurrentCar.name;
          colorInput.value = getCurrentCar.color;
          updateBtn.classList.remove('disabled');
        }
      }, timeForLsUpdate);
    });
    updateBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const getCurrentCar = JSON.parse(localStorage.getItem('currentCarData') || '{}');
      await updateCar(getCurrentCar.id, { name: nameInput.value, color: colorInput.value });
      updateBtn.classList.add('disabled');
      nameInput.value = '';
      colorInput.value = DEFAULT_CAR_COLOR;
    });
  }

  render(parent: HTMLElement): HTMLElement {
    parent.append(this.element);
    return this.element;
  }
}
