import { answers, questions } from './questions.js';
export { currentAnswer, currentQuestion };

let currentQuestion = '';
let currentAnswer = '';

export function currentTask() {
  currentQuestion = questions[Math.floor(Math.random() * questions.length)];
  currentAnswer = answers[questions.indexOf(currentQuestion)];
  console.log('Answer is: ', currentAnswer.toUpperCase());
}
currentTask();


