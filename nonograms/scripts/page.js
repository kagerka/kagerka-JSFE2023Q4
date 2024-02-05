import {
  currentHint,
  currentTemplate,
  gameList,
  leftCluesData,
  loadGameOnChange,
  topCluesData,
} from './game-process.js';

export {
  audioBtn,
  gameField,
  gameLevel,
  gameTemplateList,
  modalText,
  modalWrapper,
  randomGameBtn,
  resetGameBtn,
  themeBtn,
  timerWrapper,
  updateGameField,
};

document.body.className = 'body';

let pageWrapper = document.createElement('div');
pageWrapper.className = 'page-wrapper';
document.body.append(pageWrapper);

let heading = document.createElement('h1');
heading.className = 'heading';
heading.innerText = 'Nonograms';
pageWrapper.append(heading);

let audioBtnWrapper = document.createElement('div');
audioBtnWrapper.className = 'audio-btn-wrapper';
pageWrapper.append(audioBtnWrapper);

let audioBtn = document.createElement('div');
audioBtn.className = 'audio-btn';
audioBtn.innerHTML = `<span class="material-symbols-outlined">volume_up</span>`;
audioBtnWrapper.append(audioBtn);

let themeBtn = document.createElement('div');
themeBtn.className = 'theme-btn';
themeBtn.id = 'toggle-theme';
themeBtn.innerHTML = `<span class="material-symbols-outlined">dark_mode</span>`;
audioBtnWrapper.append(themeBtn);

let gameWrapper = document.createElement('div');
gameWrapper.className = 'game-wrapper';
pageWrapper.append(gameWrapper);

let gameLevelWrapper = document.createElement('div');
gameLevelWrapper.className = 'game-level-wrapper';
gameWrapper.append(gameLevelWrapper);

let gameLevel = document.createElement('select');
gameLevel.className = 'game-level-list';
gameLevel.id = 'game-level-list';
gameLevelWrapper.append(gameLevel);

let gameLevelEasy = document.createElement('option');
gameLevelEasy.setAttribute('value', 'easy');
gameLevelEasy.className = 'game-level easy';
gameLevelEasy.innerText = 'Easy';
gameLevel.append(gameLevelEasy);

let gameLevelMedium = document.createElement('option');
gameLevelMedium.setAttribute('value', 'medium');
gameLevelMedium.className = 'game-level medium';
gameLevelMedium.innerText = 'Medium';
gameLevel.append(gameLevelMedium);

let gameLevelHard = document.createElement('option');
gameLevelHard.setAttribute('value', 'hard');
gameLevelHard.className = 'game-level hard';
gameLevelHard.innerText = 'Hard';
gameLevel.append(gameLevelHard);

let gameTemplateList = document.createElement('select');
gameTemplateList.className = 'game-template-list';
gameTemplateList.id = 'game-template-list';
gameLevelWrapper.append(gameTemplateList);

let timerWrapper = document.createElement('div');
timerWrapper.className = 'timer-wrapper';
timerWrapper.id = 'timer-wrapper';
timerWrapper.innerText = '00:00';
gameWrapper.append(timerWrapper);

let btnWrapper = document.createElement('div');
btnWrapper.className = 'btn-wrapper';
gameWrapper.append(btnWrapper);

let randomGameBtn = document.createElement('button');
randomGameBtn.className = 'random-game-btn';
randomGameBtn.innerText = 'Random game';
randomGameBtn.id = 'random-game-btn';
btnWrapper.append(randomGameBtn);

let resetGameBtn = document.createElement('button');
resetGameBtn.className = 'reset-game-btn';
resetGameBtn.innerText = 'Reset game';
resetGameBtn.id = 'reset-game-btn';
btnWrapper.append(resetGameBtn);

let gameField = document.createElement('div');
gameField.className = 'game-field';
gameWrapper.append(gameField);

const updateGameField = () => {
  loadGameOnChange();

  gameField.innerHTML = '';

  window.addEventListener('load', () => {
    gameTemplateList.innerHTML = '';
    let gameTemplateItem = document.createElement('option');
    gameTemplateItem.className = 'game-template-item';
    gameTemplateItem.setAttribute('disabled', 'disabled');
    gameTemplateItem.setAttribute('selected', 'selected');
    gameTemplateItem.innerText = '----------';
    gameTemplateList.append(gameTemplateItem);

    for (let i = 0; i < gameList.length; i++) {
      let gameTemplateItem = document.createElement('option');
      gameTemplateItem.className = 'game-template-item';
      gameTemplateItem.setAttribute('value', `${gameList[i]}`);
      gameTemplateItem.innerText = `${gameList[i]}`;
      gameTemplateList.append(gameTemplateItem);
    }
  });

  gameLevel.addEventListener('change', () => {
    gameTemplateList.innerHTML = '';

    let gameTemplateItem = document.createElement('option');
    gameTemplateItem.className = 'game-template-item';
    gameTemplateItem.setAttribute('disabled', 'disabled');
    gameTemplateItem.setAttribute('selected', 'selected');
    gameTemplateItem.innerText = '----------';
    gameTemplateList.append(gameTemplateItem);

    for (let i = 0; i < gameList.length; i++) {
      let gameTemplateItem = document.createElement('option');
      gameTemplateItem.className = 'game-template-item';
      gameTemplateItem.setAttribute('value', `${gameList[i]}`);
      gameTemplateItem.innerText = `${gameList[i]}`;
      gameTemplateList.append(gameTemplateItem);
    }
  });

  let topClues = document.createElement('div');
  topClues.className = 'top-clues';
  gameField.append(topClues);

  for (let i = 0; i < topCluesData.length; i++) {
    let topClueColumn = document.createElement('div');
    topClueColumn.className = 'top-clue-column';
    if (i > 0 && i !== topCluesData.length - 1 && (i + 1) % 5 === 0) {
      topClueColumn.classList.add('fifth-col');
    }
    topClues.append(topClueColumn);
    let tempClueData = [...topCluesData];
    let topClueMaxLength = tempClueData.sort((a, b) => b.length - a.length)[0].length;
    for (let j = 0; j < +topClueMaxLength; j++) {
      let topClueCell = document.createElement('div');
      topClueCell.className = `top-clue-cell`;
      if (topCluesData[i][j]) {
        topClueCell.innerText = topCluesData[i][j].toString();
      } else {
        topClueCell.innerText = '';
      }
      topClueColumn.append(topClueCell);
    }
  }

  let leftClues = document.createElement('div');
  leftClues.className = 'left-clues';
  gameField.append(leftClues);

  for (let i = 0; i < leftCluesData.length; i++) {
    let leftClueRow = document.createElement('div');
    leftClueRow.className = 'left-clue-row';

    if (i > 0 && i !== topCluesData.length - 1 && (i + 1) % 5 === 0) {
      leftClueRow.classList.add('fifth-row');
    }

    leftClues.append(leftClueRow);
    let tempClueData = [...leftCluesData];
    let leftClueMaxLength = tempClueData.sort((a, b) => b.length - a.length)[0].length;

    for (let j = 0; j < +leftClueMaxLength; j++) {
      let leftClueCell = document.createElement('div');
      leftClueCell.className = `left-clue-cell`;
      if (leftCluesData[i][j]) {
        leftClueCell.innerText = leftCluesData[i][j].toString();
      } else {
        leftClueCell.innerText = '';
      }
      leftClueRow.append(leftClueCell);
    }
  }

  let emptyField = document.createElement('div');
  emptyField.className = 'empty-field';
  gameField.append(emptyField);

  let gameCells = document.createElement('div');
  gameCells.className = 'game-cells';
  gameField.append(gameCells);
  gameCells.style.setProperty('--size', currentTemplate.length);

  for (let i = 1, j = 0; i <= currentTemplate.length ** 2; i++) {
    let cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = `cell-${i}`;
    gameCells.append(cell);

    if (i % 5 === 0 && i % currentTemplate.length !== 0) {
      cell.classList.add('fifth-col');
    }
    if (
      Math.ceil(i / currentTemplate.length) % 5 === 0 &&
      Math.ceil(i / currentTemplate.length) % currentTemplate.length !== 0
    ) {
      cell.classList.add('fifth-row');
    }

    let innerCell = document.createElement('div');
    innerCell.className = 'inner-cell';
    cell.append(innerCell);
  }

  let hintWord = document.createElement('p');
  hintWord.className = 'hint-word';
  hintWord.innerText = `Hint: ${currentHint}`;
  gameField.append(hintWord);
};

updateGameField();

let modalWrapper = document.createElement('div');
modalWrapper.className = 'modal-wrapper hidden';
document.body.append(modalWrapper);

let modal = document.createElement('div');
modal.className = 'modal';
modalWrapper.append(modal);

let modalText = document.createElement('div');
modalText.className = 'modal-text';
modal.append(modalText);
