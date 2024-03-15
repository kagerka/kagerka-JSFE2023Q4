import './game-page.scss';

export const GamePage = (pageWrapper: HTMLElement) => {
  pageWrapper.textContent = '';

  const heading = document.createElement('h1');
  heading.textContent = 'Game Page';
};
