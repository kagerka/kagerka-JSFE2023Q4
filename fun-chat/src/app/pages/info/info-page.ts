import { moveToPage } from '../../api/router/moveToPage';
import { BaseComponent } from '../../components/base-component';
import { Button } from '../../components/button/button';
import { BaseComponentType, ButtonType } from '../../data/types';
import './info-page.scss';

const infoPageTag: BaseComponentType = {
  tag: 'div',
  styles: ['info-page'],
};

const goBackBtn: ButtonType = {
  name: 'Go back',
  styles: ['go-back-btn'],
};

export class InfoPage extends BaseComponent {
  heading: HTMLHeadingElement;

  aboutText: HTMLElement;

  author: HTMLAnchorElement;

  goBackBtn: HTMLButtonElement;

  constructor() {
    super(infoPageTag);
    this.heading = document.createElement('h1');
    this.heading.textContent = 'Fun chat';
    this.aboutText = document.createElement('p');
    this.aboutText.textContent =
      'This chat will allow you to talk with your friends or teammates. Find necessary name and send your message. When this person will be online, he will read and answer back. Easy to use and funny to chat!';
    this.author = document.createElement('a');
    this.author.href = 'https://github.com/kagerka';
    this.author.textContent = 'Author: kagerka';
    this.element.append(this.heading, this.aboutText, this.author);
    this.goBackBtn = new Button(goBackBtn).render(this.element);
    this.init();
  }

  init(): void {
    this.goBackBtn.addEventListener('click', () => {
      window.history.back();
      if (sessionStorage.getItem('currentUserLogin')) {
        moveToPage('chat');
      } else {
        moveToPage('login');
      }
    });
  }

  render(parent: HTMLElement): void {
    parent.replaceChildren(this.element);
  }
}
