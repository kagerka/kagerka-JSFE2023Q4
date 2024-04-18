import { loadContent } from './loadContent';

export const listenToPopstate = (): void => {
  window.addEventListener('popstate', (event) => {
    if (event.state === null || event.state.page === '') {
      loadContent('/');
    } else {
      const { page } = event.state;
      loadContent(page);
    }
  });
};
