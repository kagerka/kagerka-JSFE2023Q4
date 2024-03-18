export const autoComplete = (answerField: HTMLElement, wordsField: HTMLElement, currentSentence: string) => {
  const currentSentenceWrapper: HTMLElement | null = document.getElementById('current-sentence');
  const words: string[] = currentSentence.split(' ');
  if (currentSentenceWrapper) {
    for (let i = 0; i < words.length; i++) {
      const wordWrapper: HTMLDivElement = document.createElement('div');
      wordWrapper.classList.add('word-wrapper');
      currentSentenceWrapper.append(wordWrapper);
      wordWrapper.append(words[i]);
    }
  }
  const wordWrapper = Array.from(document.querySelectorAll('.word-wrapper')) as HTMLElement[];
  wordWrapper.forEach((el: HTMLElement) => {
    const width: string = window.getComputedStyle(el).width;
    el.style.width = width;
  });
};
