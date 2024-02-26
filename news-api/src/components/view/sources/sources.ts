import { assertIsDefined } from '../../../types/checking';
import { SourceItem } from '../../../types/types';
import './sources.css';

class Sources {
  public draw(data: SourceItem[]) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
    assertIsDefined(sourceItemTemp);

    data.forEach((item: SourceItem) => {
      const sourceClone: Node = sourceItemTemp.content.cloneNode(true);
      if (!(sourceClone instanceof DocumentFragment)) {
        throw new Error();
      }

      const sourceItemName = sourceClone.querySelector('.source__item-name');
      assertIsDefined(sourceItemName);
      sourceItemName.textContent = item.name;

      const sourceItem = sourceClone.querySelector('.source__item');
      assertIsDefined(sourceItem);
      sourceItem.setAttribute('data-source-id', item.id);
      sourceItem.setAttribute('data-category', item.category);

      fragment.append(sourceClone);
    });

    const sources = document.querySelector('.sources');
    assertIsDefined(sources);
    sources.append(fragment);
  }
}

export default Sources;
