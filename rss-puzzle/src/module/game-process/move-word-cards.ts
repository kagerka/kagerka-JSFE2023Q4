export const moveWordCards = (wordsField: HTMLElement, currentSentenceWrapper: HTMLElement | null) => {
  wordsField.addEventListener('click', (e: Event) => {
    currentSentenceWrapper = document.getElementById('current-sentence');
    const item = e.target as HTMLElement;

    if (item.className === 'word-wrapper') {
      item.classList.add('hidden');
      const ansItem = currentSentenceWrapper?.children[currentSentenceWrapper.children.length] as HTMLElement;
      currentSentenceWrapper?.insertBefore(item, ansItem);
      setTimeout(() => {
        item.classList.remove('hidden');
      }, 300);
    }
  });

  currentSentenceWrapper?.addEventListener('click', (e: Event) => {
    const item = e.target as HTMLElement;
    if (item.className === 'word-wrapper') {
      item.classList.add('hidden');
      const ansItem = wordsField.children[wordsField.children.length] as HTMLElement;
      wordsField.insertBefore(item, ansItem);
      setTimeout(() => {
        item.classList.remove('hidden');
      }, 300);
    }
  });
};
