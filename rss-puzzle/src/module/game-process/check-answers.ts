import { GameData, Words } from '../types/types';
import { renderCurrentSentence } from './render-sentence';

export const checkAnswers = (
  answerField: HTMLElement,
  currentSentenceWrapper: HTMLElement | null,
  sentences: [Words],
  gameData: GameData,
  wordsField: HTMLElement,
  checkBtn: HTMLButtonElement,
) => {
  const checking = () => {
    setTimeout(() => {
      if (wordsField.children.length > 0) {
        checkBtn.disabled = true;
      }
    }, 0);

    if (wordsField.children.length === 0) {
      checkBtn.disabled = false;

      const checkAnswer = () => {
        const rightAnswer = sentences[gameData.sentenceNumber - 1].textExample;

        currentSentenceWrapper = document.getElementById('current-sentence');
        const answerWords: HTMLElement[] = Array.from(
          currentSentenceWrapper ? currentSentenceWrapper.querySelectorAll('.word-wrapper') : [],
        );
        const answer: string = answerWords.map((el: HTMLElement) => el.textContent).join(' ');

        if (answer === rightAnswer) {
          if (gameData.sentenceNumber < 10) {
            gameData.sentenceNumber += 1;
          } else if (gameData.round < gameData.roundsCount) {
            gameData.round += 1;
            gameData.sentenceNumber = 1;
          } else {
            gameData.level += 1;
            gameData.round = 1;
            gameData.sentenceNumber = 1;
          }

          localStorage.setItem('gameData', JSON.stringify(gameData));
          if (currentSentenceWrapper) {
            currentSentenceWrapper.classList.add('inactive');
            currentSentenceWrapper.removeAttribute('id');
          }
          checkBtn.textContent = 'Continue';
          checkBtn.classList.add('continue');

          const renderSentence = () => {
            if (gameData.sentenceNumber === 1) answerField.textContent = '';

            answerField.removeEventListener('DOMSubtreeModified', checking);
            checkBtn.removeEventListener('click', renderSentence);
            renderCurrentSentence(answerField, wordsField, gameData, checkBtn);
            checkBtn.disabled = true;
            checkBtn.classList.remove('continue');
            checkBtn.textContent = 'Check';
          };

          checkBtn.addEventListener('click', renderSentence);
        }

        // Выделение цветом правильные и неправильные ответы.
        /*
        if (answer !== rightAnswer) {
          const answerWordsArr: HTMLElement[] = currentSentence
            ? (Array.from(currentSentence?.childNodes) as HTMLElement[])
            : [];
          const rightAnswerArr = rightAnswer.split(' ') as string[];

          for (let i = 0; i < rightAnswer.length; i++) {
            if (answerWordsArr[i]) {
              if (answerWordsArr[i].innerText === rightAnswerArr[i]) {
                answerWordsArr[i].classList.add('correct');
              } else {
                answerWordsArr[i].classList.add('incorrect');
              }
            }
          }
        }

        checkBtn.removeEventListener('click', checkAnswer); 
        */
      };
      checkBtn.addEventListener('click', checkAnswer);
    }
  };

  answerField.addEventListener('DOMSubtreeModified', checking);
};
