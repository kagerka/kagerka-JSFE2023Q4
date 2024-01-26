import { currentGame, currentTemplate } from './game-process.js';
import { wrapper } from './page.js';

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    cell.classList.toggle('checked');
  });
  cell.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    cell.classList.toggle('crossed');
  });
});
// console.log(wrapper);
// console.log(currentGame);
// console.log(currentTemplate.key);
