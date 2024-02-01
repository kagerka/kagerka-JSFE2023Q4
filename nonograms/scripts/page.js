import { currentHint, currentTemplate, leftCluesData, topCluesData } from './game-process.js';

export { updateGameField };

document.body.className = 'body';

let pageWrapper = document.createElement('div');
pageWrapper.className = 'page-wrapper';
document.body.append(pageWrapper);

let heading = document.createElement('h1');
heading.className = 'heading';
heading.innerText = 'Nonograms';
pageWrapper.append(heading);

let gameWrapper = document.createElement('div');
gameWrapper.className = 'game-wrapper';
pageWrapper.append(gameWrapper);

let randomGameBtn = document.createElement('button');
randomGameBtn.className = 'random-game-btn';
randomGameBtn.innerText = 'Random Game';
randomGameBtn.id = 'random-game-btn';
gameWrapper.append(randomGameBtn);

let gameField = document.createElement('div');
gameField.className = 'game-field';
gameWrapper.append(gameField);

const updateGameField = () => {
  gameField.innerHTML = '';

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
