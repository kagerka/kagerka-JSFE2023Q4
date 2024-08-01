import './greeting.scss';
interface UserData {
  name: string;
  surname: string;
}
export class Greeting {
  public greetingWrapper: HTMLElement = document.createElement('div');

  userName;

  userSurname;

  greeting = '';

  userData: UserData = JSON.parse(localStorage.getItem('userData') || '{}');

  constructor() {
    this.userName = this.userData.name;
    this.userSurname = this.userData.surname;
  }

  showGreeting() {
    this.greetingWrapper.classList.add('greeting-wrapper');
    document.body.append(this.greetingWrapper);
    this.greeting = `Welcome, ${this.userName} ${this.userSurname}`;
    this.greetingWrapper.append(this.greeting);
  }

  removeGreeting() {
    this.greetingWrapper.remove();
  }
}
