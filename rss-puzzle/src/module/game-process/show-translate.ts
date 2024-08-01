import { GameData, Words } from '../types/types';
import data from '../../assets/data/words/wordCollectionLevel1.json';

export const showTranslate = (
  gameData: GameData,
  hintTranslateWrapper: HTMLElement,
  translateBtnWrapper: HTMLDivElement,
) => {
  const sentences: [Words] = data.rounds[gameData.round - 1 || 0].words;
  const currentTranslate: string = sentences[gameData.sentenceNumber - 1].textExampleTranslate;

  if (localStorage.getItem('translate') === 'on') {
    translateBtnWrapper.classList.add('active');
    hintTranslateWrapper.textContent = '';
    hintTranslateWrapper.append(currentTranslate);
    hintTranslateWrapper.classList.add('active');
  } else {
    hintTranslateWrapper.classList.remove('active');
    translateBtnWrapper.classList.remove('active');
  }

  translateBtnWrapper.addEventListener('click', () => {
    if (!localStorage.getItem('translate') || localStorage.getItem('translate') === 'off') {
      localStorage.setItem('translate', 'on');
      translateBtnWrapper.classList.add('active');
      hintTranslateWrapper.textContent = '';
      hintTranslateWrapper.append(currentTranslate);
      hintTranslateWrapper.classList.add('active');
    } else {
      localStorage.setItem('translate', 'off');
      translateBtnWrapper.classList.remove('active');
      hintTranslateWrapper.textContent = '';
      hintTranslateWrapper.classList.remove('active');
    }
  });
};
