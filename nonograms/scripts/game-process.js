import { game10x10, game15x15, game5x5 } from './nonograms.js';
export { currentGame, currentHint, currentTemplate, getRandomGame, leftCluesData, topCluesData };

let games = [game5x5, game10x10, game15x15];
// let games = [game5x5]; // для проверки
let currentGame;
let currentGameData;
let currentHint;
let currentTemplate;
let tempGameData;
let leftCluesData = [];
let topCluesData = [];

const getRandomGame = () => {
  leftCluesData = [];
  topCluesData = [];
  currentGame = games[Math.floor(Math.random() * games.length)];
  currentGameData = currentGame[Math.floor(Math.random() * currentGame.length)];
  // currentGameData = currentGame[7]; // для проверки
  currentHint = Object.keys(currentGameData).toString();
  currentTemplate = currentGameData[currentHint];

  if (currentGameData === tempGameData) {
    getRandomGame();
  } else {
    let j = 0;
    let repeatNum = 0;

    for (let i = 0; i < currentTemplate.length; i++) {
      topCluesData.push([]);
    }

    while (j <= currentTemplate.length - 1) {
      for (let i = 0; i < currentTemplate.length; i++) {
        if (currentTemplate[i][j] === 1 && currentTemplate[i + 1]) {
          repeatNum += 1;
        }
        if (currentTemplate[i][j] === 1 && !currentTemplate[i + 1]) {
          repeatNum += 1;
          topCluesData[j].push(repeatNum);
          repeatNum = 0;
        }
        if (currentTemplate[i][j] === 0 && repeatNum !== 0) {
          topCluesData[j].push(repeatNum);
          repeatNum = 0;
        }

        if (i === currentTemplate.length - 1) {
          j++;
        }
      }
    }

    topCluesData.map((el) => el.reverse());

    for (let i = 0; i < currentTemplate.length; i++) {
      leftCluesData.push([]);
    }

    for (let i = 0; i < currentTemplate.length; i++) {
      for (let j = 0; j < currentTemplate.length; j++) {
        if (currentTemplate[i][j] === 1 && currentTemplate[i][j + 1]) {
          repeatNum += 1;
        }
        if (currentTemplate[i][j] === 1 && !currentTemplate[i][j + 1]) {
          repeatNum += 1;
          leftCluesData[i].push(repeatNum);
          repeatNum = 0;
        }
        if (currentTemplate[i][j] === 0 && repeatNum !== 0) {
          leftCluesData[i].push(repeatNum);
          repeatNum = 0;
        }
      }
    }

    leftCluesData.map((el) => el.reverse());
  }

  tempGameData = currentGameData;
  return [currentGameData, currentHint, currentTemplate, leftCluesData, topCluesData];
};

getRandomGame();

// currentGame = game5x5;
// currentGameData = currentGame[7];
// currentHint = Object.keys(currentGameData).toString();
// currentTemplate = currentGameData[currentHint];
