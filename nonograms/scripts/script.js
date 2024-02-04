import { currentTemplate, getRandomGame, loadGameOnChange, playAudio, resetTimer, seconds } from './game-process.js';
import { gameField, modalText, modalWrapper, updateGameField } from './page.js';

const clickCells = () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (!cell.className.includes('crossed') && !cell.className.includes('checked')) {
        cell.classList.add('checked');
        playAudio('checked');
        checkCells(cells);
      } else if (!cell.className.includes('crossed') && cell.className.includes('checked')) {
        cell.classList.remove('checked');
        playAudio('unchecked');
        checkCells(cells);
      }
    });
    cell.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if (!cell.className.includes('checked')) {
        cell.classList.toggle('crossed');
        playAudio('crossed');
      }
    });
  });
};
clickCells();

const randomButton = document.getElementById('random-game-btn');
randomButton?.addEventListener('click', () => {
  getRandomGame();
  updateGameField();
  clickCells();
  gameField.classList.remove('disabled');
});

const checkCells = (cells) => {
  let errors = [];
  let cellNum = 0;
  for (let i = 0; i < currentTemplate.length; i++) {
    for (let j = 0; j < currentTemplate[i].length; j++) {
      if (
        (cells[cellNum].className.includes('checked') && currentTemplate[i][j] === 0) ||
        (!cells[cellNum].className.includes('checked') && currentTemplate[i][j] === 1)
      ) {
        errors.push(cells[cellNum].id);
      }
      cellNum++;
    }
  }
  if (errors.length === 0) {
    setTimeout(() => {
      const crossed = document.querySelectorAll('.crossed');
      crossed.forEach((cell) => {
        cell.classList.remove('crossed');
      });
      playAudio('winner');
      console.log('you are winner');
      console.log('seconds', seconds);
      modalText.innerHTML = `<div class='modal-heading'>Great!</div><div>You have solved the nonogram in <span class='modal-time'>${seconds}</span> seconds!</div>`;
      resetTimer();
      modalWrapper.classList.remove('hidden');
    }, 1000);
  }
};

modalWrapper.addEventListener('click', (e) => {
  if (e.target.classList.value === 'modal-wrapper') {
    modalWrapper.classList.add('hidden');
    gameField.classList.add('disabled');
  }
});

window.addEventListener('change', () => {
  loadGameOnChange();
  updateGameField();
  clickCells();
  gameField.classList.remove('disabled');
});
