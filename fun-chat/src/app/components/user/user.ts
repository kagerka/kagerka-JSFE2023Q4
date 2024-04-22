import { BaseComponentType, UserInfoType } from '../../data/types';
import { BaseComponent } from '../base-component';
import './user.scss';

const userItemTag: BaseComponentType = {
  tag: 'div',
  styles: ['user-item'],
};

export class UserItem extends BaseComponent {
  status: HTMLElement;

  name: HTMLElement;

  constructor(userInfo: UserInfoType) {
    super(userItemTag);
    this.status = document.createElement('div');
    this.status.classList.add('status');
    this.name = document.createElement('div');
    this.name.classList.add('name');
    this.name.textContent = userInfo.login;
    this.init(userInfo.isLogined);
  }

  init(isLogined: boolean): void {
    if (isLogined === true) {
      this.status.classList.remove('offline');
      this.status.classList.add('online');
    } else {
      this.status.classList.remove('online');
      this.status.classList.add('offline');
    }

    this.element.addEventListener('click', () => {
      sessionStorage.setItem(
        'selectedUserStatus',
        this.status.classList.value.includes('online') ? 'online' : 'offline',
      );
      sessionStorage.setItem('selectedUserName', this.name.innerText);
    });
  }

  render(parent: HTMLElement): void {
    this.element.append(this.status, this.name);
    parent.append(this.element);
  }
}
