import './game-page.scss';
import { gameProcess } from '../../module/game-process/game-process';
import { Button } from '../../module/button/button';
import { ButtonData } from '../../module/types/types';
import { PlaySound } from '../../module/game-process/play-sound/play-sound';

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
  pageWrapper.append(buttonHintField);

  const translateBtn = document.createElement('div');
  translateBtn.classList.add('material-symbols-outlined');
  translateBtn.textContent = 'translate';
  translateBtnWrapper.append(translateBtn);

  const hintField: HTMLDivElement = document.createElement('div');
  hintField.classList.add('hint-field');
  pageWrapper.append(hintField);

  const gameData = JSON.parse(localStorage.getItem('gameData') || '{}');
  new PlaySound(hintField, gameData).render(hintField);
  new PlaySound(hintField, gameData).playSound();

  const hintWrapper: HTMLDivElement = document.createElement('div');
  hintWrapper.classList.add('hint-wrapper');
  hintField.append(hintWrapper);

  const hintTranslateWrapper: HTMLDivElement = document.createElement('div');
  hintTranslateWrapper.classList.add('hint-translate-wrapper');
  hintWrapper.append(hintTranslateWrapper);

  const answerField: HTMLDivElement = document.createElement('div');
  answerField.classList.add('answer-field');
  pageWrapper.append(answerField);

  const wordsField: HTMLDivElement = document.createElement('div');
  wordsField.classList.add('words-field');
  pageWrapper.append(wordsField);

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('game-button-wrapper');
  pageWrapper.append(buttonWrapper);

  const checkBtn = Button(checkBtnData);
  checkBtn.disabled = true;
  buttonWrapper.append(checkBtn);

  const autoCompleteBtn = Button(autoCompleteBtnData);
  buttonWrapper.append(autoCompleteBtn);

  gameProcess(
    hintField,
    hintWrapper,
    hintTranslateWrapper,
    answerField,
    wordsField,
    checkBtn,
    autoCompleteBtn,
    translateBtnWrapper,
  );
};
