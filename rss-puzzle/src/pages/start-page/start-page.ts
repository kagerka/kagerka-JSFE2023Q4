import './start-page.scss';
import icon from '../../assets/logo.svg';
import { Button } from '../../module/button/button';
import { Greeting } from '../../module/greeting/greeting';

const startButtonData = {
  buttonName: 'Start',
  type: 'submit',
  className: 'start-btn',
  id: 'startButton',
};

export const StartPage = (pageWrapper: HTMLElement) => {
  pageWrapper.textContent = '';

  const greeting = new Greeting();
  greeting.showGreeting();
  setTimeout(() => {
    greeting.greetingWrapper.classList.add('visible');
  }, 500);
  setTimeout(() => {
    greeting.greetingWrapper.classList.remove('visible');
  }, 4000);

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('content-wrapper');

  const heading = document.createElement('h1');
  heading.textContent = 'English puzzle';
  heading.classList.add('heading');

  const descriptionIcon = new Image();
  descriptionIcon.src = icon;
  descriptionIcon.alt = 'description icon';
  descriptionIcon.classList.add('description-icon');

  const description = document.createElement('p');
  description.innerText =
    'Learn English language in our puzzle game. Click on words, collect phrases and you will see beautiful pictures of famous artists. Words in the task can be drag and drop. You can use hints through the game, if the task too difficult for you now.';
  description.classList.add('description');
  pageWrapper.append(contentWrapper);

  const startButton = Button(startButtonData);

  contentWrapper.append(heading, descriptionIcon, description, startButton);
};
