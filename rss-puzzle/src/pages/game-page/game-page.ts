import './game-page.scss';
import { gameProcess } from '../../module/game-process/game-process';
import { Button } from '../../module/button/button';
import { ButtonData } from '../../module/types/types';

const checkBtnData: ButtonData = {
  buttonName: 'Check',
  type: 'submit',
  className: 'check-btn',
  id: 'checkButton',
};

const autoCompleteBtnData: ButtonData = {
  buttonName: "I don't know",
  type: 'submit',
  className: 'auto-complete-btn',
  id: 'autoCompleteButton',
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
  pageWrapper.append(buttonWrapper);

  const checkBtn = Button(checkBtnData);
  checkBtn.disabled = true;
  buttonWrapper.append(checkBtn);

  const autoCompleteBtn = Button(autoCompleteBtnData);
  buttonWrapper.append(autoCompleteBtn);

  gameProcess(answerField, wordsField, checkBtn, autoCompleteBtn);
};
