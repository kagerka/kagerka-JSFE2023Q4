import './game-page.scss';
import { gameProcess } from '../../module/game-process/game-process';

export const GamePage = (pageWrapper: HTMLElement) => {
  pageWrapper.textContent = '';

  const answerField: HTMLDivElement = document.createElement('div');
  answerField.classList.add('answer-field');

  const wordsField: HTMLDivElement = document.createElement('div');
  wordsField.classList.add('words-field');

  pageWrapper.append(answerField, wordsField);

  gameProcess(answerField, wordsField);
};
