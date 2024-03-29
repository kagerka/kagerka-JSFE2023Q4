import { BaseComponentType, InputOptionType } from '../../../data/types';
import { BaseComponent } from '../../base-component';
import './option-input.scss';

const optionInputTag: BaseComponentType = {
  tag: 'input',
  styles: ['option-input'],
};

export class OptionInput extends BaseComponent {
  constructor(inputOptions: InputOptionType) {
    super(optionInputTag);
    this.element.id = inputOptions.id;
    if (inputOptions.styles) this.element.classList.add(...inputOptions.styles);
    this.element.setAttribute('type', inputOptions.type);
    if (inputOptions.placeholder) this.element.setAttribute('placeholder', inputOptions.placeholder);
    if (inputOptions.value) this.element.setAttribute('value', inputOptions.value);
  }

  render(parent: HTMLElement): HTMLInputElement {
    parent.append(this.element);
    return this.element as HTMLInputElement;
  }
}
