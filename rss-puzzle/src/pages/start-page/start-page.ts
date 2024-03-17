import './start-page.scss';
import icon from '../../assets/logo.svg';
import { Button } from '../../module/button/button';
import { Greeting } from '../../module/greeting/greeting';
import { GamePage } from '../game-page/game-page';
import { Spinner } from '../../module/spinner/spinner';
import { ButtonData } from '../../module/types/types';

const startButtonData: ButtonData = {
  buttonName: 'Start',
  type: 'submit',
  className: 'start-btn',
  id: 'startButton',
};

const startPageDescription: string =
  'Learn English language in our puzzle game. Click on words, collect phrases and you will see beautiful pictures of famous artists. Words in the task can be drag and drop. You can use hints through the game, if the task too difficult for you now.';
const isGame: boolean = false;

export const StartPage = (pageWrapper: HTMLElement) => {
  pageWrapper.textContent = '';

  const greeting: Greeting = new Greeting();
  greeting.showGreeting();

  setTimeout(() => {
    greeting.greetingWrapper.classList.add('visible');
  }, 500);
  setTimeout(() => {
    greeting.greetingWrapper.classList.remove('visible');
  }, 4000);

  const contentWrapper: HTMLDivElement = document.createElement('div');
  contentWrapper.classList.add('content-wrapper');

  const heading: HTMLHeadingElement = document.createElement('h1');
  heading.textContent = 'English puzzle';
  heading.classList.add('heading');

  const descriptionIcon: HTMLImageElement = new Image();
  descriptionIcon.src = icon;
  descriptionIcon.alt = 'description icon';
  descriptionIcon.classList.add('description-icon');

  const description: HTMLParagraphElement = document.createElement('p');
  description.innerText = startPageDescription;
  description.classList.add('description');
  pageWrapper.append(contentWrapper);

  const startButton: HTMLButtonElement = Button(startButtonData);

  startButton.addEventListener('click', () => {
    const spinner: HTMLDivElement = Spinner();
    pageWrapper.append(spinner);

    setTimeout(() => {
      GamePage(pageWrapper);
      greeting.removeGreeting();
      localStorage.setItem('isGame', 'true');
    }, 1000);

    return isGame;
  });

  contentWrapper.append(heading, descriptionIcon, description, startButton);
};
