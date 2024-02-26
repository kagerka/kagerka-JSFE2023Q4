import { assertIsDefined } from '../../../types/checking';
import './filter.css';

export const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

function filter(categories: string[]) {
  const draw = (categories: string[]) => {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const filterItemTemp: HTMLTemplateElement | null = document.querySelector('#filterItemTemp');
    assertIsDefined(filterItemTemp);

    categories.forEach((item: string) => {
      const filterClone: Node = filterItemTemp.content.cloneNode(true);
      if (!(filterClone instanceof DocumentFragment)) {
        throw new Error();
      }

      const filterItemName = filterClone.querySelector('.filter__item-name');
      assertIsDefined(filterItemName);
      filterItemName.textContent = item;

      const filterItem = filterClone.querySelector('.filter__item');
      filterItem?.setAttribute('data-category', item);
      assertIsDefined(filterItem);

      fragment.append(filterClone);
    });

    const filter = document.querySelector('.filter');
    assertIsDefined(filter);
    filter.append(fragment);
  };
  draw(categories);
}

export default filter;
