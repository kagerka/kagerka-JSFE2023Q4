import { GameData } from '../types/types';

const SENTENCE_NUMBER_PER_ROUND = 10;
export const changeGameLevel = (gameData: GameData): GameData => {
  if (gameData.sentenceNumber < SENTENCE_NUMBER_PER_ROUND) {
    gameData.sentenceNumber += 1;
  } else if (gameData.round < gameData.roundsCount) {
    gameData.round += 1;
    gameData.sentenceNumber = 1;
  } else {
    gameData.level += 1;
    gameData.round = 1;
    gameData.sentenceNumber = 1;
  }
  localStorage.setItem('gameData', JSON.stringify(gameData));
  return gameData;
};
