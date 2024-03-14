import './page-wrapper.scss';

export const PageWrapper = () => {
  const pageWrapper = document.createElement('div');
  pageWrapper.classList.add('page-wrapper');
  pageWrapper.id = 'page-wrapper';
  pageWrapper.textContent = '';
  return pageWrapper;
};
