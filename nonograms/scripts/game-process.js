import { game10x10, game15x15, game5x5 } from './nonograms.js';
export {
  currentGame,
  currentHint,
  currentTemplate,
  gameList,
  getRandomGame,
  leftCluesData,
  loadGame,
  loadGameOnChange,
  loadOnStart,
  playAudio,
  resetTimer,
  seconds,
  startTimer,
  topCluesData,
};

let interval;
let clicked = false;
let timer;
let seconds = 0;
let minutes = 0;

const updateTime = () => {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  console.log(seconds);
  timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return [seconds, minutes, timer];
};

const startTimer = () => {
  window.addEventListener('load', () => {
    timer = document.getElementById('timer-wrapper');
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.addEventListener('click', () => {
        if (!clicked) {
          clicked = true;
          interval = setInterval(updateTime, 1000);
          console.log('sss');
        }
      });
      cell.addEventListener('contextmenu', (e) => {
        if (!clicked) {
          clicked = true;
          interval = setInterval(updateTime, 1000);
        }
      });
    });
  });
  return [interval, clicked, seconds, minutes, timer];
};

const resetTimer = () => {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  clicked = false;
  // console.log(seconds);
  return [seconds, minutes, timer, clicked];
};
const updateTimer = () => {
  timer = document.getElementById('timer-wrapper');
  timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return [timer];
};

let games = [game5x5, game10x10, game15x15];
let currentGame;
let currentGameData;
let currentHint;
let currentTemplate;
let tempGameData;
let leftCluesData = [];
let topCluesData = [];
let gameList = [];

const loadGame = () => {
  resetTimer();
  startTimer();

  currentGameData = currentGame[Math.floor(Math.random() * currentGame.length)];
  // currentHint = Object.keys(currentGameData).toString();
  // currentTemplate = currentGameData[currentHint];

  if (currentGameData === tempGameData) {
    loadGame();
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
  return [leftCluesData, topCluesData];
};

const loadGameOnChange = () => {
  resetTimer();
  startTimer();
  leftCluesData = [];
  topCluesData = [];

  window.addEventListener('load', () => {
    let gameLevelList = document.getElementById('game-level-list');
    gameLevelList?.addEventListener('change', (e) => {
      gameList = [];
      if (e.target.value === 'easy') {
        currentGame = game5x5;
      }
      if (e.target.value === 'medium') {
        currentGame = game10x10;
      }
      if (e.target.value === 'hard') {
        currentGame = game15x15;
      }

      for (let i = 0; i < currentGame.length; i++) {
        gameList.push(Object.keys(currentGame[i]).toString());
      }
      return [currentGame, currentHint, currentGameData, currentTemplate];
    });

    let gameTemplateList = document.getElementById('game-template-list');
    gameTemplateList?.addEventListener('change', (e) => {
      currentHint = e.target.value;
      for (let i = 0; i < currentGame.length; i++) {
        currentGameData = currentGame[i];
        if (e.target.value === Object.keys(currentGameData).toString()) {
          currentTemplate = currentGameData[currentHint];
        }
      }
      return [currentHint, currentGameData, currentTemplate];
    });

    return [currentGame, currentHint, currentTemplate, currentGameData];
  });

  loadGame();

  return [gameList, currentGame, currentGameData, currentHint, currentTemplate, leftCluesData, topCluesData, seconds];
};

const loadOnStart = () => {
  resetTimer();
  startTimer();
  leftCluesData = [];
  topCluesData = [];
  gameList = [];
  currentGame = game5x5;
  currentGameData = currentGame[Math.floor(Math.random() * currentGame.length)];
  currentHint = Object.keys(currentGameData).toString();
  currentTemplate = currentGameData[currentHint];
  for (let i = 0; i < currentGame.length; i++) {
    gameList.push(Object.keys(currentGame[i]).toString());
  }
  loadGame();
  return [gameList, currentGame, currentGameData, currentHint, currentTemplate, leftCluesData, topCluesData, seconds];
};
loadOnStart();

const getRandomGame = () => {
  resetTimer();
  updateTimer();
  startTimer();

  leftCluesData = [];
  topCluesData = [];
  currentGame = games[Math.floor(Math.random() * games.length)];
  currentGameData = currentGame[Math.floor(Math.random() * currentGame.length)];
  currentHint = Object.keys(currentGameData).toString();
  currentTemplate = currentGameData[currentHint];
  loadGame();

  return [gameList, currentGameData, currentHint, currentTemplate, leftCluesData, topCluesData, seconds];
};

const playAudio = (name) => {
  let audio = new Audio();
  audio.src = `./assets/${name}.mp3`;
  audio.autoplay = true;
};
