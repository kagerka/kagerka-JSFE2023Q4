import { GameData } from '../types/types';
import { renderCurrentSentence } from './render-sentence';
import data from '../../assets/data/words/wordCollectionLevel1.json';

export const gameProcess = (
  hintField: HTMLElement,
  answerField: HTMLElement,
  wordsField: HTMLElement,
  checkBtn: HTMLButtonElement,
  autoCompleteBtn: HTMLButtonElement,
) => {
  let gameData: GameData = { level: 1, round: 1, sentenceNumber: 1, roundsCount: data.roundsCount };

  if (localStorage.getItem('gameData')) {
    gameData = JSON.parse(localStorage.getItem('gameData') || '{}');
  } else {
    localStorage.setItem('gameData', JSON.stringify(gameData));
  }

  renderCurrentSentence(hintField, answerField, wordsField, gameData, checkBtn, autoCompleteBtn);
};
