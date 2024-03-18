import { GameData } from '../types/types';
import { renderCurrentSentence } from './render-sentence';
import data from '../../assets/data/words/wordCollectionLevel1.json';

export const gameProcess = (
  answerField: HTMLElement,
  wordsField: HTMLElement,
  continueBtn: HTMLButtonElement,
  checkBtn: HTMLButtonElement,
) => {
  let gameData: GameData = { level: 1, round: 1, sentenceNumber: 1, roundsCount: data.roundsCount };

  if (localStorage.getItem('gameData')) {
    gameData = JSON.parse(localStorage.getItem('gameData') || '{}');
  } else {
    localStorage.setItem('gameData', JSON.stringify(gameData));
  }

  renderCurrentSentence(answerField, wordsField, gameData, continueBtn, checkBtn);
};
