export const moveWordCards = (wordsField: HTMLElement, currentSentenceWrapper: HTMLElement | null) => {
  const moveWordsToAnswerField = (e: Event) => {
    currentSentenceWrapper = document.getElementById('current-sentence');
    const item = e.target as HTMLElement;

    if (item.className.includes('word-wrapper')) {
      item.classList.add('hidden');
      const ansItem = currentSentenceWrapper?.children[currentSentenceWrapper.children.length] as HTMLElement;
      currentSentenceWrapper?.insertBefore(item, ansItem);
      item.classList.remove('correct');
      item.classList.remove('incorrect');
      setTimeout(() => {
        item.classList.remove('hidden');
      }, 300);
    }
  };
  wordsField.addEventListener('click', moveWordsToAnswerField);

  const moveWordsToWordField = (e: Event) => {
    const item = e.target as HTMLElement;
    if (item.className.includes('word-wrapper')) {
      item.classList.add('hidden');
      const ansItem = wordsField.children[wordsField.children.length] as HTMLElement;
      wordsField.insertBefore(item, ansItem);
      item.classList.remove('correct');
      item.classList.remove('incorrect');
      setTimeout(() => {
        item.classList.remove('hidden');
      }, 300);
    }
  };
  currentSentenceWrapper?.addEventListener('click', moveWordsToWordField);
};
