import { STORAGE } from '../storage/storage';
import { GameData, Words } from '../types/types';
import { changeGameLevel } from './change-game-level';
import { renderCurrentSentence } from './render-sentence';

export const checkAnswers = (
  hintField: HTMLElement,
  hintWrapper: HTMLElement,
  hintTranslateWrapper: HTMLElement,
  answerField: HTMLElement,
  currentSentenceWrapper: HTMLElement | null,
  sentences: [Words],
  gameData: GameData,
  wordsField: HTMLElement,
  checkBtn: HTMLButtonElement,
  autoCompleteBtn: HTMLButtonElement,
  translateBtnWrapper: HTMLDivElement,
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
        currentSentenceWrapper = STORAGE.currentSentenceWrapper;
        const answerWords: HTMLElement[] = Array.from(
          currentSentenceWrapper ? currentSentenceWrapper.querySelectorAll('.word-wrapper') : [],
        );
        const answer: string = answerWords.map((el: HTMLElement) => el.textContent).join(' ');
        if (answer === rightAnswer) {
          changeGameLevel(gameData);
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
            renderCurrentSentence(
              gameData,
              hintField,
              hintWrapper,
              hintTranslateWrapper,
              answerField,
              wordsField,
              checkBtn,
              autoCompleteBtn,
              translateBtnWrapper,
            );
            checkBtn.disabled = true;
            checkBtn.classList.remove('continue');
            checkBtn.textContent = 'Check';
          };
          checkBtn.addEventListener('click', renderSentence);
        }
      };
      checkBtn.addEventListener('click', checkAnswer);
    }
  };
  answerField.addEventListener('DOMSubtreeModified', checking);
};
