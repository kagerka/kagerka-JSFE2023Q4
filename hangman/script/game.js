import { keyboard } from './keyboard.js';
import { answers, questions } from './questions.js';
export { currentAnswer, currentQuestion };

let currentQuestion = questions[Math.floor(Math.random() * questions.length)];
let currentAnswer = answers[questions.indexOf(currentQuestion)];





console.log('Answer is: ', currentAnswer.toUpperCase());