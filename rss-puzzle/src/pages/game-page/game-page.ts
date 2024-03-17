import './game-page.scss';
import { gameProcess } from '../../module/game-process/game-process';
import { Button } from '../../module/button/button';
import { ButtonData } from '../../module/types/types';

const continueBtnData: ButtonData = {
  buttonName: 'Continue',
  type: 'submit',
  className: 'continue-btn',
  id: 'continueButton',
};

export const GamePage = (pageWrapper: HTMLElement) => {
  pageWrapper.textContent = '';

  const answerField: HTMLDivElement = document.createElement('div');
  answerField.classList.add('answer-field');

  const wordsField: HTMLDivElement = document.createElement('div');
  wordsField.classList.add('words-field');

  pageWrapper.append(answerField, wordsField);

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('game-button-wrapper');
  const continueBtn = Button(continueBtnData);
  continueBtn.disabled = true;
  pageWrapper.append(buttonWrapper);
  buttonWrapper.append(continueBtn);

  gameProcess(answerField, wordsField, continueBtn);
};
