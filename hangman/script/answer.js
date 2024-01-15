import { currentAnswer } from './game.js';

export { answerField };

let answerField = document.createElement('div');
answerField.className = 'answer-field';

let answerWord = document.createElement('div');
answerWord.className = 'answer-word';
answerField.append(answerWord);



for (let i = 0; i < currentAnswer.length; i++) {
  let answerLetter = document.createElement('div');
  answerLetter.className = 'answer-letter';
  answerWord.append(answerLetter);
}



