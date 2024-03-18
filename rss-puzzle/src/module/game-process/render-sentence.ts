import data from '../../assets/data/words/wordCollectionLevel1.json';
import { GameData, Words } from '../types/types';
import { checkAnswers } from './check-answers';
import { moveWordCards } from './move-word-cards';

export const renderCurrentSentence = (
  answerField: HTMLElement,
  wordsField: HTMLElement,
  gameData: GameData,
  continueBtn: HTMLButtonElement,
  checkBtn: HTMLButtonElement,
) => {
  const checkReloadData = () => {
    gameData.sentenceNumber = 1;
    localStorage.setItem('gameData', JSON.stringify(gameData));
  };
  document.addEventListener('DOMContentLoaded', checkReloadData);

  const sentences: [Words] = data.rounds[gameData.round - 1 || 0].words;
  const currentSentence: string = sentences[gameData.sentenceNumber - 1].textExample;
  // eslint-disable-next-line no-console
  console.log(currentSentence);

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

  moveWordCards(wordsField, currentSentenceWrapper);
  checkAnswers(answerField, currentSentenceWrapper, sentences, gameData, wordsField, continueBtn, checkBtn);
};
