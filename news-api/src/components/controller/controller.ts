import { assertIsDefined } from '../../types/checking';
import { Callback } from './../../types/types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources<Type>(callback: Callback<Type>) {
    super.getResp({ endpoint: 'sources' }, callback);
  }

  getNews<Type>(e: Event, callback: Callback<Type>) {
    let target: EventTarget | null = e.target;

    const newsContainer: EventTarget | null = e.currentTarget;
    assertIsDefined(newsContainer);

    while (target !== newsContainer) {
      if (!(target instanceof HTMLElement) || !(newsContainer instanceof HTMLElement)) {
        throw new Error();
      }
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        assertIsDefined(sourceId);
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode;
    }
  }
}

export default AppController;
