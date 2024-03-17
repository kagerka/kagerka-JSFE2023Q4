import { GameData, Words } from '../types/types';
import { renderCurrentSentence } from './render-sentence';

export const checkAnswers = (
  answerField: HTMLElement,
  currentSentenceWrapper: HTMLElement | null,
  sentences: [Words],
  gameData: GameData,
  wordsField: HTMLElement,
) => {
  answerField.addEventListener('DOMSubtreeModified', () => {
    currentSentenceWrapper = document.getElementById('current-sentence');
    const answerWords: HTMLElement[] = Array.from(
      currentSentenceWrapper ? currentSentenceWrapper.querySelectorAll('.word-wrapper') : [],
    );
    const answer: string = answerWords.map((el: HTMLElement) => el.textContent).join(' ');

    if (answer === sentences[gameData.sentenceNumber - 1].textExample) {
      if (gameData.sentenceNumber < 10) {
        gameData.sentenceNumber += 1;
      } else if (gameData.round < gameData.roundsCount) {
        gameData.round += 1;
        gameData.sentenceNumber = 1;
        answerField.textContent = '';
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
      renderCurrentSentence(answerField, wordsField, gameData);
    }
  });
};
