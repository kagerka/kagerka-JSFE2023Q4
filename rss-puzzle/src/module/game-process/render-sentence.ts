import data from '../../assets/data/words/wordCollectionLevel1.json';
import { GameData, Words } from '../types/types';
import { autoComplete } from './auto-complete';
import { checkAnswers } from './check-answers';
import { moveWordCards } from './move-word-cards';

export const renderCurrentSentence = (
  hintField: HTMLElement,
  answerField: HTMLElement,
  wordsField: HTMLElement,
  gameData: GameData,
  checkBtn: HTMLButtonElement,
  autoCompleteBtn: HTMLButtonElement,
  translateBtnWrapper: HTMLDivElement,
) => {
  const checkReloadData = () => {
    gameData.sentenceNumber = 1;
    localStorage.setItem('gameData', JSON.stringify(gameData));
  };
  document.addEventListener('DOMContentLoaded', checkReloadData);

  const sentences: [Words] = data.rounds[gameData.round - 1 || 0].words;

  const currentSentence: string = sentences[gameData.sentenceNumber - 1].textExample;
  const currentTranslate: string = sentences[gameData.sentenceNumber - 1].textExampleTranslate;

  hintField.textContent = '';

  const soundBtnWrapper: HTMLDivElement = document.createElement('div');
  soundBtnWrapper.classList.add('sound-btn-wrapper');
  hintField.append(soundBtnWrapper);

  const soundBtn: HTMLDivElement = document.createElement('div');
  soundBtn.classList.add('material-symbols-outlined');
  soundBtn.textContent = 'volume_up';
  soundBtnWrapper.append(soundBtn);

  soundBtn.addEventListener('click', () => {
    const currentSound: string = sentences[gameData.sentenceNumber - 1].audioExample;
    const audioURL: string = `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/${currentSound}`;
    const sound: HTMLAudioElement = new Audio(audioURL);
    sound.play();

    sound.addEventListener('playing', () => {
      soundBtnWrapper.classList.add('playing');
    });
    sound.addEventListener('pause', () => {
      soundBtnWrapper.classList.remove('playing');
    });
  });

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

  const words: string[] = currentSentence.split(' ');
  words.sort(() => Math.random() - 0.5);

  if (wordsField.children.length === 0) {
    for (let i = 0; i < words.length; i++) {
      const wordWrapper: HTMLDivElement = document.createElement('div');
      wordWrapper.classList.add('word-wrapper');
      wordsField.append(wordWrapper);
      wordWrapper.append(words[i]);
    }
  }

  const sentenceWrapper: HTMLDivElement = document.createElement('div');
  sentenceWrapper.classList.add('sentence-wrapper');
  sentenceWrapper.id = 'current-sentence';
  answerField.append(sentenceWrapper);

  const currentSentenceWrapper: HTMLElement | null = document.getElementById('current-sentence');

  const wordWrapper = Array.from(document.querySelectorAll('.word-wrapper')) as HTMLElement[];
  wordWrapper.forEach((el: HTMLElement) => {
    const width: string = window.getComputedStyle(el).width;
    el.style.width = width;
  });

  autoCompleteBtn.addEventListener('click', () => {
    const currentSentenceWrap: HTMLElement | null = document.getElementById('current-sentence');

    if (currentSentenceWrap) currentSentenceWrap.innerText = '';
    wordsField.innerText = '';
    autoComplete(answerField, wordsField, currentSentence);
  });

  moveWordCards(wordsField, currentSentenceWrapper);
  checkAnswers(
    hintField,
    answerField,
    currentSentenceWrapper,
    sentences,
    gameData,
    wordsField,
    checkBtn,
    autoCompleteBtn,
    translateBtnWrapper,
  );
};
