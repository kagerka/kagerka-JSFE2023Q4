import { BaseComponentType } from '../data/types';

export class BaseComponent {
  element: HTMLElement;

  constructor({ tag = 'div', styles = [] }: BaseComponentType) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
  }
}
