import { currentQuestion } from './game.js';

export { hint, hintQuestion };

let hint = document.createElement('div');
hint.className = 'hint';

let hintTitle = document.createElement('div');
hintTitle.className = 'hint-title';
hintTitle.textContent = 'Hint: ';
hint.append(hintTitle);

let hintQuestion = document.createElement('div');
hintQuestion.className = 'hint-question';
hintQuestion.textContent = `${currentQuestion}`;
hint.append(hintQuestion);



