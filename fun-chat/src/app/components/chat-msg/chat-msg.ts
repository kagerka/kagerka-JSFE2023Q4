import { BaseComponentType } from '../../data/types';
import { BaseComponent } from '../base-component';
import './chat-msg.scss';

const chatMsgTag: BaseComponentType = {
  tag: 'div',
  styles: ['chat-msg'],
};

export class ChatMsg extends BaseComponent {
  from: HTMLElement;

  time: HTMLElement;

  message: HTMLElement;

  status: HTMLElement;

  constructor(author: string, dateTime: string, msg: string, sendStatus: string) {
    super(chatMsgTag);
    const topWrapper = document.createElement('div');
    topWrapper.classList.add('top-wrapper');
    this.from = document.createElement('div');
    this.from.innerText = author;
    this.time = document.createElement('div');
    this.time.classList.add('time');
    this.time.innerText = dateTime;
    topWrapper.append(this.from, this.time);
    this.message = document.createElement('div');
    this.message.classList.add('inner-msg');
    this.message.innerText = msg;
    const bottomWrapper = document.createElement('div');
    bottomWrapper.classList.add('bottom-wrapper');
    this.status = document.createElement('div');
    this.status.innerText = sendStatus;
    bottomWrapper.append(this.status);
    this.element.append(topWrapper, this.message, bottomWrapper);
  }

  render(parent: HTMLElement): void {
    parent.append(this.element);
  }
}
