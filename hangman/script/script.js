import { addAnswerLetters, answerField } from "./answer.js";
import { svg } from "./gallows.js";
import { currentAnswer, currentQuestion, currentTask } from './game.js';
import { header } from "./header.js";
import { hint, hintQuestion } from "./hint.js";
import { keyboard } from "./keyboard.js";
import { modalText, modalWrapper } from "./modal.js";
export { incorrectCount };

addAnswerLetters();
// Modal
document.body.append(modalWrapper);

modalWrapper.addEventListener('click', e => {
  if (e.target.classList.value === 'play-again-btn') {
    modalWrapper.classList.add('hidden')
    incorrectCount = 0;
    guesses.innerHTML = `Incorrect guesses: <span class="incorrect-count">${incorrectCount} / 6</span>`;
    head?.classList.remove('visible');
    body?.classList.remove('visible');
    leftHand?.classList.remove('visible');
    rightHand?.classList.remove('visible');
    leftLeg?.classList.remove('visible');
    rightLeg?.classList.remove('visible');

    let active = keyboard.querySelectorAll('.active');
    for (let el of active) {
      el.classList.remove('active');
    }

    // let userAnswerLetters = document.querySelectorAll('.answer-letter');
    // for (let el of userAnswerLetters) {
    //   el.innerHTML = '';
    // }

    currentTask();
    hintQuestion.textContent = `${currentQuestion}`;
    let answerWord = document.querySelector('.answer-word');
    answerWord?.remove();
    addAnswerLetters();
  }
})

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


let head = document.getElementById('head');
let body = document.getElementById('body');
let leftHand = document.getElementById('leftHand');
let rightHand = document.getElementById('rightHand');
let leftLeg = document.getElementById('leftLeg');
let rightLeg = document.getElementById('rightLeg');

keyboard.addEventListener('click', e => {
  let answerLetters = document.querySelectorAll('.answer-letter');
  if (e.target.tagName === 'BUTTON') {
    e.target.classList.add('active')
    for (let i = 0; i < currentAnswer.length; i++) {
      if (currentAnswer[i] === e.target.dataset.key) {
        answerLetters[i].innerHTML = e.target.dataset.key;
      }
    }

    if (currentAnswer.indexOf(e.target.dataset.key) === -1 && incorrectCount < 6) {
      incorrectCount++;
      guesses.innerHTML = `Incorrect guesses: <span class="incorrect-count">${incorrectCount} / 6</span>`;
      if (incorrectCount === 1) {
        head?.classList.add('visible');
      }
      if (incorrectCount === 2) {
        body?.classList.add('visible');
      }
      if (incorrectCount === 3) {
        leftHand?.classList.add('visible');
      }
      if (incorrectCount === 4) {
        rightHand?.classList.add('visible');
      }
      if (incorrectCount === 5) {
        leftLeg?.classList.add('visible');
      }
      if (incorrectCount === 6) {
        rightLeg?.classList.add('visible');
      }
    }
    if (incorrectCount === 6) {
      modalWrapper.classList.remove('hidden');
      incorrectCount = 0;
      modalText.innerHTML = `<div class='modal-heading'>You lose!</div><div>The secret word is <span class='modal-word'>${currentAnswer}</span></div>`;
    }
    let userAnswer = [];
    for (let letter of answerLetters) {
      userAnswer.push(letter.innerHTML);
    }
    if (userAnswer.join('') === currentAnswer) {
      modalWrapper.classList.remove('hidden');
      userAnswer = [];
      modalText.innerHTML = `<div class='modal-heading'>You win!</div><div>The secret word is <span class='modal-word'>${currentAnswer}</span></div>`;
    }

  }

})



document.addEventListener('keypress', e => {
  let answerLetters = document.querySelectorAll('.answer-letter');
  let keyboardLetters = document.querySelectorAll('.letter');
  for (let key of keyboardLetters) {
    if (e.key === key.dataset.key) {
      key.classList.add('active')
    }
  }

  for (let i = 0; i < currentAnswer.length; i++) {
    if (currentAnswer[i] === e.key) {
      answerLetters[i].innerHTML = e.key;
    }
  }

  if (currentAnswer.indexOf(e.key) === -1 && incorrectCount < 6) {
    incorrectCount++;
    guesses.innerHTML = `Incorrect guesses: <span class="incorrect-count">${incorrectCount} / 6</span>`;
    if (incorrectCount === 1) {
      head?.classList.add('visible');
    }
    if (incorrectCount === 2) {
      body?.classList.add('visible');
    }
    if (incorrectCount === 3) {
      leftHand?.classList.add('visible');
    }
    if (incorrectCount === 4) {
      rightHand?.classList.add('visible');
    }
    if (incorrectCount === 5) {
      leftLeg?.classList.add('visible');
    }
    if (incorrectCount === 6) {
      rightLeg?.classList.add('visible');
    }
  }
  if (incorrectCount === 6) {
    modalWrapper.classList.remove('hidden');
    incorrectCount = 0;
    modalText.innerHTML = `<div class='modal-heading'>You lose!</div><div>The secret word is <span class='modal-word'>${currentAnswer}</span></div>`;
  }
  let userAnswer = [];
  for (let letter of answerLetters) {
    userAnswer.push(letter.innerHTML);
  }
  if (userAnswer.join('') === currentAnswer) {
    modalWrapper.classList.remove('hidden');
    userAnswer = [];
    modalText.innerHTML = `<div class='modal-heading'>You win!</div><div>The secret word is <span class='modal-word'>${currentAnswer}</span></div>`;
  }


})

