export { guesses };

let guesses = document.createElement('div');
let incorrectCount = 0;
guesses.className = 'guesses';
guesses.innerHTML = `Incorrect guesses: <span class="incorrect-count">${incorrectCount} / 6</span>`;
