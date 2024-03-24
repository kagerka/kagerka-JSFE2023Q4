import './play-sound.scss';
import { GameData } from '../../types/types';
import { Words } from '../../types/types';
import data from '../../../assets/data/words/wordCollectionLevel1.json';

export class PlaySound {
  hintField: HTMLElement;

  gameData: GameData;

  soundBtnWrapper: HTMLElement;

  soundBtn: HTMLElement;

  constructor(hintField: HTMLElement, gameData: GameData) {
    this.hintField = hintField;
    this.gameData = gameData;

    this.soundBtnWrapper = document.createElement('div');
    this.soundBtnWrapper.classList.add('sound-btn-wrapper');

    this.soundBtn = document.createElement('div');
    this.soundBtn.classList.add('material-symbols-outlined');
    this.soundBtn.textContent = 'volume_up';
    this.playSound();
  }

  public render(hintField: HTMLElement) {
    hintField.textContent = '';
    hintField.append(this.soundBtnWrapper);
    this.soundBtnWrapper.append(this.soundBtn);
    return this.soundBtnWrapper;
  }

  public playSound() {
    this.soundBtn.addEventListener('click', () => {
      const sentences: [Words] = data.rounds[this.gameData.round - 1 || 0].words;
      const currentSound: string = sentences[this.gameData.sentenceNumber - 1].audioExample;
      const audioURL: string = `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/${currentSound}`;
      const sound: HTMLAudioElement = new Audio(audioURL);
      sound.play();
      sound.addEventListener('playing', () => {
        this.soundBtnWrapper.classList.add('playing');
      });
      sound.addEventListener('pause', () => {
        this.soundBtnWrapper.classList.remove('playing');
      });
    });
  }
}
