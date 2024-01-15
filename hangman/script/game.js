import { keyboard } from './keyboard.js';
import { answers, questions } from './questions.js';
export { currentAnswer, currentQuestion };

let currentQuestion = questions[Math.floor(Math.random() * questions.length)];
let currentAnswer = answers[questions.indexOf(currentQuestion)];

let letters = document.getElementsByClassName('letter');



keyboard.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    if (currentAnswer.indexOf(e.target.dataset.key) !== -1) {
      console.log(e.target.dataset.key);

      // answerLetters[currentAnswer.indexOf(e.target.dataset.key)].style.backgroundColor = 'red';
    }

  }

})




console.log('Answer is: ', currentAnswer.toUpperCase());