import { currentAnswer } from './game.js';
export { modalText, modalWrapper };

let modalWrapper = document.createElement('div');
modalWrapper.className = 'modal-wrapper hidden';

let modal = document.createElement('div');
modal.className = 'modal';
modalWrapper.append(modal)

let modalText = document.createElement('div');
modalText.className = 'modal-text';
modalText.innerHTML = `<div class='modal-heading'>Game over!</div><div>The secret word is <span class='modal-word'>${currentAnswer}</span></div>`;
modal.append(modalText);

let playAgainBtn = document.createElement('button')
playAgainBtn.className = 'play-again-btn'
playAgainBtn.innerText = 'Play again';
modal.append(playAgainBtn)

