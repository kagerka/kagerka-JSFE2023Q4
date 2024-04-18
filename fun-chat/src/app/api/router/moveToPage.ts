import { loadContent } from './loadContent';

export const moveToPage = (page: string): void => {
  window.history.pushState({ page }, page, `/${page}`);
  loadContent(page);
};
