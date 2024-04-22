import { moveToPage } from '../../api/router/moveToPage';
import { getAllUsers, logout, sendMsg } from '../../api/webSocket';
import { BaseComponent } from '../../components/base-component';
import { Button } from '../../components/button/button';
import { UserItem } from '../../components/user/user';
import { BaseComponentType, ButtonType, UserInfoType } from '../../data/types';
import './chat-page.scss';

const chatPageTag: BaseComponentType = {
  tag: 'div',
  styles: ['chat-page'],
};

const logoutBtn: ButtonType = {
  name: 'Logout',
  styles: ['logout-btn'],
};

const infoBtn: ButtonType = {
  name: 'Info',
  styles: ['info-btn'],
};

const sendBtn: ButtonType = {
  name: 'Send',
  styles: ['send-btn'],
};

export class ChatPage extends BaseComponent {
  header: HTMLElement;

  currentUser: HTMLElement;

  title: HTMLElement;

  btnWrapper: HTMLElement;

  infoBtn: HTMLButtonElement;

  logoutBtn: HTMLButtonElement;

  main: HTMLElement;

  public users: HTMLElement;

  chat: HTMLElement;

  chatHeader: HTMLElement;

  chatHeaderLogin: HTMLElement;

  chatHeaderStatus: HTMLElement;

  chatField: HTMLElement;

  answerField: HTMLElement;

  answerInput: HTMLInputElement;

  sendButton: HTMLButtonElement;

  footer: HTMLElement;

  school: HTMLElement;

  nickname: HTMLElement;

  year: HTMLElement;

  constructor() {
    super(chatPageTag);
    this.header = document.createElement('header');
    this.header.classList.add('header');
    this.currentUser = document.createElement('div');
    this.currentUser.classList.add('current-user');
    this.title = document.createElement('div');
    this.title.classList.add('title');
    this.btnWrapper = document.createElement('div');
    this.btnWrapper.classList.add('btn-wrapper');
    this.infoBtn = new Button(infoBtn).render(this.btnWrapper);
    this.logoutBtn = new Button(logoutBtn).render(this.btnWrapper);
    this.main = document.createElement('main');
    this.main.classList.add('main');
    this.users = document.createElement('div');
    this.users.classList.add('users');
    this.chat = document.createElement('div');
    this.chat.classList.add('chat');
    this.chatHeader = document.createElement('div');
    this.chatHeader.classList.add('chat-header');
    this.chatHeaderLogin = document.createElement('div');
    this.chatHeaderStatus = document.createElement('div');
    this.chatField = document.createElement('div');
    this.chatField.classList.add('chat-field');
    this.answerField = document.createElement('form');
    this.answerField.classList.add('answer-field');
    this.answerInput = document.createElement('input');
    this.answerInput.setAttribute('type', 'text');
    this.answerField.append(this.answerInput);
    this.sendButton = new Button(sendBtn).render(this.answerField);
    this.footer = document.createElement('footer');
    this.footer.classList.add('footer');
    this.school = document.createElement('div');
    this.nickname = document.createElement('div');
    this.year = document.createElement('div');
    this.getName();
    this.init();
    this.getUsers();
    this.selectUser();
  }

  getName(): void {
    let currentUser;
    if (sessionStorage.getItem('currentUserLogin')) {
      currentUser = JSON.parse(sessionStorage.getItem('currentUserLogin') || '{}');
      this.currentUser.textContent = `Your name: ${currentUser.login}`;
    }
  }

  init(): void {
    this.infoBtn.addEventListener('click', () => {
      sessionStorage.removeItem('selectedUserName');
      sessionStorage.removeItem('selectedUserStatus');
      this.answerInput.disabled = true;
      this.sendButton.disabled = true;
      this.sendButton.classList.add('disabled');
      moveToPage('info');
    });
    this.logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('currentUserLogin');
      logout();
      moveToPage('login');
      sessionStorage.clear();
    });
    this.sendButton.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedUser = sessionStorage.getItem('selectedUserName');
      if (selectedUser) sendMsg(selectedUser, this.answerInput.value);
      this.chatField.append(this.answerInput.value);
      this.answerInput.value = '';
    });
  }

  selectUser(): void {
    this.chatHeaderStatus.classList.add('chat-header-status');
    this.users.addEventListener('click', () => {
      this.chatHeaderLogin.textContent = sessionStorage.getItem('selectedUserName');
      this.chatHeaderStatus.textContent = sessionStorage.getItem('selectedUserStatus');
      if (this.chatHeaderStatus.textContent === 'online') {
        this.chatHeaderStatus.classList.remove('offline');
        this.chatHeaderStatus.classList.add('online');
      } else {
        this.chatHeaderStatus.classList.remove('online');
        this.chatHeaderStatus.classList.add('offline');
      }
    });

    window.onclick = (): void => {
      if (!sessionStorage.getItem('selectedUserName')) {
        this.answerInput.disabled = true;
        this.sendButton.disabled = true;
        this.sendButton.classList.add('disabled');
      } else {
        this.answerInput.disabled = false;
        this.sendButton.disabled = false;
        this.sendButton.classList.remove('disabled');
      }
    };

    window.onload = (): void => {
      sessionStorage.removeItem('selectedUserName');
      sessionStorage.removeItem('selectedUserStatus');
      this.answerInput.disabled = true;
      this.sendButton.disabled = true;
      this.sendButton.classList.add('disabled');
    };
  }

  getUsers(): void {
    getAllUsers();
    const users = JSON.parse(sessionStorage.getItem('allAuthorizedUsers') || '[]');
    const timeout = 100;
    setTimeout(() => {
      users.forEach((user: UserInfoType) => {
        new UserItem(user).render(this.users);
      });
    }, timeout);
  }

  render(parent: HTMLElement): void {
    this.title.textContent = 'Fun chat';
    this.school.textContent = 'RSSchool';
    this.nickname.textContent = 'kagerka';
    this.year.textContent = '2024';
    this.element.append(this.header, this.main, this.footer);
    this.header.append(this.currentUser, this.title, this.btnWrapper);
    this.main.append(this.users, this.chat);

    this.chat.append(this.chatHeader, this.chatField, this.answerField);
    this.chatHeader.append(this.chatHeaderLogin, this.chatHeaderStatus);
    this.footer.append(this.school, this.nickname, this.year);
    parent.replaceChildren(this.element);
  }
}
