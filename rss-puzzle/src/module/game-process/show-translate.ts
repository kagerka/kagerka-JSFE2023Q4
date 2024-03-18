import { GameData, Words } from '../types/types';
import data from '../../assets/data/words/wordCollectionLevel1.json';

export const showTranslate = (gameData: GameData, hintField: HTMLElement, translateBtnWrapper: HTMLDivElement) => {
  const sentences: [Words] = data.rounds[gameData.round - 1 || 0].words;
  const currentTranslate: string = sentences[gameData.sentenceNumber - 1].textExampleTranslate;
  const showTranslateIcon: HTMLDivElement = document.createElement('div');
  showTranslateIcon.classList.add('translate-icon');
  showTranslateIcon.textContent = '?';
  hintField.append(showTranslateIcon);
  const hintWrapper: HTMLDivElement = document.createElement('div');
  hintWrapper.classList.add('hint-wrapper');
  hintField.append(hintWrapper);
  if (localStorage.getItem('translate') === 'on') {
    translateBtnWrapper.classList.add('active');
    hintWrapper.textContent = '';
    hintWrapper.append(currentTranslate);
    hintWrapper.classList.add('active');
  } else {
    hintWrapper.classList.remove('active');
    translateBtnWrapper.classList.remove('active');
  }
  showTranslateIcon.addEventListener('click', () => {
    hintWrapper.textContent = '';
    hintWrapper.append(currentTranslate);
    hintWrapper.classList.toggle('active');
    localStorage.setItem('translate', 'off');
    translateBtnWrapper.classList.remove('active');
  });
  translateBtnWrapper.addEventListener('click', () => {
    if (!localStorage.getItem('translate') || localStorage.getItem('translate') === 'off') {
      localStorage.setItem('translate', 'on');
      translateBtnWrapper.classList.add('active');
      hintWrapper.textContent = '';
      hintWrapper.append(currentTranslate);
      hintWrapper.classList.add('active');
    } else {
      localStorage.setItem('translate', 'off');
      translateBtnWrapper.classList.remove('active');
      hintWrapper.textContent = '';
      hintWrapper.classList.remove('active');
    }
  });
};
