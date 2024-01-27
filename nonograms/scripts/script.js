import { getRandomGame } from './game-process.js';
import { updateGameField } from './page.js';

const checkCells = () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      if (!cell.className.includes('crossed')) {
        cell.classList.toggle('checked');
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
checkCells();

const randomButton = document.getElementById('random-game-btn');
randomButton?.addEventListener('click', () => {
  getRandomGame();
  updateGameField();
  checkCells();
});
