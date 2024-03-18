import { GameData, Words } from '../types/types';
import data from '../../assets/data/words/wordCollectionLevel1.json';

export const playSound = (hintField: HTMLElement, gameData: GameData) => {
  const sentences: [Words] = data.rounds[gameData.round - 1 || 0].words;
  hintField.textContent = '';
  const soundBtnWrapper: HTMLDivElement = document.createElement('div');
  soundBtnWrapper.classList.add('sound-btn-wrapper');
  hintField.append(soundBtnWrapper);
  const soundBtn: HTMLDivElement = document.createElement('div');
  soundBtn.classList.add('material-symbols-outlined');
  soundBtn.textContent = 'volume_up';
  soundBtnWrapper.append(soundBtn);
  soundBtn.addEventListener('click', () => {
    const currentSound: string = sentences[gameData.sentenceNumber - 1].audioExample;
    const audioURL: string = `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/${currentSound}`;
    const sound: HTMLAudioElement = new Audio(audioURL);
    sound.play();
    sound.addEventListener('playing', () => {
      soundBtnWrapper.classList.add('playing');
    });
    sound.addEventListener('pause', () => {
      soundBtnWrapper.classList.remove('playing');
    });
  });
};
