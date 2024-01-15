import { currentAnswer } from './game.js';
export { modalWrapper };

let modalWrapper = document.createElement('div');
modalWrapper.className = 'modal-wrapper hidden';

let modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `<div class='modal-heading'>Game over!</div><div>The secret word is <span class='modal-word'>${currentAnswer}</span></div>`;
modalWrapper.append(modal)

let playAgainBtn = document.createElement('button')
playAgainBtn.className = 'play-again-btn'
playAgainBtn.innerText = 'Play again';
modal.append(playAgainBtn)

