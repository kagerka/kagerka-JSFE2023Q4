import { currentTemplate, getRandomGame } from './game-process.js';
import { updateGameField } from './page.js';

const clickCells = () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (!cell.className.includes('crossed')) {
        cell.classList.toggle('checked');
        checkCells(cells);
      }
    });
    cell.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if (!cell.className.includes('checked')) {
        cell.classList.toggle('crossed');
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
      console.log('you are winner');
    }, 2000);
  }
};
