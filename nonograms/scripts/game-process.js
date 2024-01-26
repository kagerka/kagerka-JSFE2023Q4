import { game15x15 } from './nonograms.js';
export { currentGame, currentHint, currentTemplate };

let currentGame = game15x15;
let currentGameData = currentGame[Math.floor(Math.random() * currentGame.length)];
let currentHint = Object.keys(currentGameData).toString();
let currentTemplate = currentGameData[currentHint];
console.log(currentGameData);
// console.log('current tip: ', currentHint);
// console.log('current template: ', currentTemplate);
console.log(currentGameData);
