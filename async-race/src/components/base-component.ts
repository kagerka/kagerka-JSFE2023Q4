import { BaseComponentType } from '../data/types';

export class BaseComponent {
  element: HTMLElement;

  constructor({ tag = 'div', styles = [], id }: BaseComponentType) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
    if (id) this.element.id = id;
  }
}
