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

  const buttonHintField = document.createElement('div');
  buttonHintField.classList.add('button-hint-field');

  const translateBtnWrapper = document.createElement('div');
  translateBtnWrapper.classList.add('translate-btn-wrapper');
  buttonHintField.append(translateBtnWrapper);

  const translateBtn = document.createElement('div');
  translateBtn.classList.add('material-symbols-outlined');
  translateBtn.textContent = 'translate';
  translateBtnWrapper.append(translateBtn);

  const hintField: HTMLDivElement = document.createElement('div');
  hintField.classList.add('hint-field');

  const answerField: HTMLDivElement = document.createElement('div');
  answerField.classList.add('answer-field');

  const wordsField: HTMLDivElement = document.createElement('div');
  wordsField.classList.add('words-field');

  pageWrapper.append(buttonHintField, hintField, answerField, wordsField);

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('game-button-wrapper');
  pageWrapper.append(buttonWrapper);

  const checkBtn = Button(checkBtnData);
  checkBtn.disabled = true;
  buttonWrapper.append(checkBtn);

  const autoCompleteBtn = Button(autoCompleteBtnData);
  buttonWrapper.append(autoCompleteBtn);

  gameProcess(hintField, answerField, wordsField, checkBtn, autoCompleteBtn, translateBtnWrapper);
};
