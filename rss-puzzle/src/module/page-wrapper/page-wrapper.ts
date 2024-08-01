import './page-wrapper.scss';

export const PageWrapper = (): HTMLDivElement => {
  const pageWrapper: HTMLDivElement = document.createElement('div');
  pageWrapper.classList.add('page-wrapper');
  pageWrapper.id = 'page-wrapper';
  pageWrapper.textContent = '';
  return pageWrapper;
};
