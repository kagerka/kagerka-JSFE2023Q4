import { currentTemplate } from './game-process.js';

export { wrapper };

document.body.className = 'body';

let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

let gameField = document.createElement('div');
gameField.className = 'game-field';
wrapper.append(gameField);

let grid = document.createElement('div');
grid.className = 'grid';
gameField.append(grid);
grid.style.setProperty('--size', currentTemplate.length);

for (let i = 1; i <= currentTemplate.length ** 2; i++) {
  let cell = document.createElement('div');
  cell.className = 'cell';
  cell.id = `cell-${i}`;
  grid.append(cell);

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
