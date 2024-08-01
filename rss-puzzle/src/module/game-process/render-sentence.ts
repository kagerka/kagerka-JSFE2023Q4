import data from '../../assets/data/words/wordCollectionLevel1.json';
import { STORAGE } from '../storage/storage';
import { GameData, Words } from '../types/types';
import { autoComplete } from './auto-complete';
import { checkAnswers } from './check-answers';
import { moveWordCards } from './move-word-cards';
import { showTranslate } from './show-translate';

const FIRST_SENTENCE_NUMBER = 1;

export const renderCurrentSentence = (
  gameData: GameData,
  hintField: HTMLElement,
  hintWrapper: HTMLElement,
  hintTranslateWrapper: HTMLElement,
  answerField: HTMLElement,
  wordsField: HTMLElement,
  checkBtn: HTMLButtonElement,
  autoCompleteBtn: HTMLButtonElement,
  translateBtnWrapper: HTMLDivElement,
) => {
  const onReloadPage = () => {
    gameData.sentenceNumber = FIRST_SENTENCE_NUMBER;
    localStorage.setItem('gameData', JSON.stringify(gameData));
  };
  let currentSentence: string = '';
  let sentences: [Words] = [{ textExample: '', textExampleTranslate: '', audioExample: '' }];
  if (gameData.round) {
    document.addEventListener('DOMContentLoaded', onReloadPage);
    sentences = data.rounds[gameData.round - 1].words;
    currentSentence = sentences[gameData.sentenceNumber - 1].textExample;
    showTranslate(gameData, hintTranslateWrapper, translateBtnWrapper);
  }
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
  STORAGE.currentSentenceWrapper = sentenceWrapper;
  const currentSentenceWrapper: HTMLElement | null = STORAGE.currentSentenceWrapper;
  const wordWrapper = Array.from(document.querySelectorAll('.word-wrapper')) as HTMLElement[];
  wordWrapper.forEach((el: HTMLElement) => {
    const width: string = window.getComputedStyle(el).width;
    el.style.width = width;
  });
  autoCompleteBtn.addEventListener('click', () => {
    const currentSentenceWrap: HTMLElement | null = STORAGE.currentSentenceWrapper;
    if (currentSentenceWrap) currentSentenceWrap.innerText = '';
    wordsField.innerText = '';
    autoComplete(answerField, wordsField, currentSentence);
  });
  moveWordCards(wordsField, currentSentenceWrapper);
  checkAnswers(
    hintField,
    hintWrapper,
    hintTranslateWrapper,
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
