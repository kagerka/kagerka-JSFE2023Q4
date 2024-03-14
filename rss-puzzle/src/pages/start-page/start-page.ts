export const StartPage = (pageWrapper: HTMLElement) => {
  pageWrapper.textContent = '';
  const heading = document.createElement('h1');
  heading.textContent = 'Welcome';
  heading.classList.add('heading');
  pageWrapper.append(heading);
};
