import './game-page.scss';
import data from '../../assets/data/words/wordCollectionLevel1.json';

type GameData = {
  level: number;
  round: number;
  sentenceNumber: number;
  roundsCount: number;
};

const renderCurrentSentence = (answerField: HTMLElement, wordsField: HTMLElement, gameData: GameData) => {
  document.addEventListener('DOMContentLoaded', () => {
    gameData.sentenceNumber = 1;
    localStorage.setItem('gameData', JSON.stringify(gameData));
  });
  const sentences = data.rounds[gameData.round - 1 || 0].words;
  const currentSentence = sentences[gameData.sentenceNumber - 1].textExample;
  const words = currentSentence.split(' ');
  words.sort(() => Math.random() - 0.5);

  for (let i = 0; i < words.length; i++) {
    const wordWrapper = document.createElement('div');
    wordWrapper.classList.add('word-wrapper');
    wordsField.append(wordWrapper);
    wordWrapper.append(words[i]);
  }

  const sentenceWrapper = document.createElement('div');
  sentenceWrapper.classList.add('sentence-wrapper');
  sentenceWrapper.id = 'current-sentence';
  answerField.append(sentenceWrapper);

  let currentSentenceWrapper = document.getElementById('current-sentence');

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
      const ansItem = wordsField.children[wordsField.children.length];
      wordsField.insertBefore(item, ansItem);
      setTimeout(() => {
        item.classList.remove('hidden');
      }, 300);
    }
  });

  answerField.addEventListener('DOMSubtreeModified', () => {
    currentSentenceWrapper = document.getElementById('current-sentence');
    const answerWords = Array.from(
      currentSentenceWrapper ? currentSentenceWrapper.querySelectorAll('.word-wrapper') : [],
    );
    const answer = answerWords.map((el) => el.textContent).join(' ');

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

const gameProcess = (answerField: HTMLElement, wordsField: HTMLElement) => {
  let gameData: GameData = { level: 1, round: 1, sentenceNumber: 1, roundsCount: data.roundsCount };

  if (localStorage.getItem('gameData')) {
    gameData = JSON.parse(localStorage.getItem('gameData') || '{}');
  } else {
    localStorage.setItem('gameData', JSON.stringify(gameData));
  }

  renderCurrentSentence(answerField, wordsField, gameData);
};

export const GamePage = (pageWrapper: HTMLElement) => {
  pageWrapper.textContent = '';

  const answerField = document.createElement('div');
  answerField.classList.add('answer-field');

  const wordsField = document.createElement('div');
  wordsField.classList.add('words-field');

  pageWrapper.append(answerField, wordsField);

  gameProcess(answerField, wordsField);
};
