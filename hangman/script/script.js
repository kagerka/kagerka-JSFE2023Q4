import { answerField } from "./answer.js";
import { svg } from "./gallows.js";
import { currentAnswer } from './game.js';
import { header } from "./header.js";
import { hint } from "./hint.js";
import { keyboard } from "./keyboard.js";
import { modalWrapper } from "./modal.js";
export { incorrectCount };


let wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.append(wrapper);

let pictureField = document.createElement('div');
pictureField.className = 'picture-field';
wrapper.append(pictureField);

let keyboardField = document.createElement('div');
keyboardField.className = 'keyboard-field';
wrapper.append(keyboardField);

// Answer
keyboardField.append(answerField);

// Hint
keyboardField.append(hint);

// Incorrect guesses
let guesses = document.createElement('div');
let incorrectCount = 0;
guesses.className = 'guesses';
guesses.innerHTML = `Incorrect guesses: <span class="incorrect-count">${incorrectCount} / 6</span>`;
keyboardField.append(guesses);

// Keyboard
keyboardField.append(keyboard);

// Picture SVG
pictureField.append(svg);

// Header
pictureField.append(header);

// Answer
let answerLetters = document.querySelectorAll('.answer-letter');
console.log(answerLetters);

keyboard.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    if (currentAnswer.indexOf(e.target.dataset.key) !== -1) {
      console.log(e.target.dataset.key);
      answerLetters[currentAnswer.indexOf(e.target.dataset.key)].innerText = e.target.dataset.key;
    }
    if (currentAnswer.indexOf(e.target.dataset.key) === -1 && incorrectCount < 6) {
      incorrectCount++;
      guesses.innerHTML = `Incorrect guesses: <span class="incorrect-count">${incorrectCount} / 6</span>`;
    } else {
      modalWrapper.classList.remove('hidden');
      incorrectCount = 0;
    }

  }

})


// Modal
document.body.append(modalWrapper);

modalWrapper.addEventListener('click', e => {
  if (e.target.classList.value === 'play-again-btn') {
    modalWrapper.classList.add('hidden')
    incorrectCount = 0;
    guesses.innerHTML = `Incorrect guesses: <span class="incorrect-count">${incorrectCount} / 6</span>`;
  }
})