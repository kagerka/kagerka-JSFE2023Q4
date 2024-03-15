import './greeting.scss';

export class Greeting {
  public greetingWrapper: HTMLElement = document.createElement('div');

  userName;

  userSurname;

  greeting = '';

  constructor() {
    this.userName = localStorage.getItem('Name');
    this.userSurname = localStorage.getItem('Surname');
  }

  showGreeting() {
    this.greetingWrapper.classList.add('greeting-wrapper');
    document.body.append(this.greetingWrapper);
    this.greeting = `Welcome, ${this.userName} ${this.userSurname}`;
    this.greetingWrapper.append(this.greeting);
  }
}
