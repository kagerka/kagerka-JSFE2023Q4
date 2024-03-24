import { STORAGE } from '../storage/storage';

export const moveWordCards = (wordsField: HTMLElement, currentSentenceWrapper: HTMLElement | null) => {
  const moveWordsToAnswerField = (e: Event) => {
    currentSentenceWrapper = STORAGE.currentSentenceWrapper;
    const wordCard = e.target as HTMLElement;

    if (currentSentenceWrapper) {
      if (wordCard.className.includes('word-wrapper')) {
        wordCard.classList.add('hidden');
        const answerWordCard = currentSentenceWrapper.children[currentSentenceWrapper.children.length] as HTMLElement;

        currentSentenceWrapper.insertBefore(wordCard, answerWordCard);
        setTimeout(() => {
          wordCard.classList.remove('hidden');
        }, 300);
      }
    }
  };
  wordsField.addEventListener('click', moveWordsToAnswerField);

  const moveWordsToWordField = (e: Event) => {
    const wordCard = e.target as HTMLElement;
    if (wordCard.className.includes('word-wrapper')) {
      wordCard.classList.add('hidden');
      const answerWordCard = wordsField.children[wordsField.children.length] as HTMLElement;
      wordsField.insertBefore(wordCard, answerWordCard);
      setTimeout(() => {
        wordCard.classList.remove('hidden');
      }, 300);
    }
  };
  currentSentenceWrapper?.addEventListener('click', moveWordsToWordField);
};
