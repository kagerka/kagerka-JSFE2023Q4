import './header.scss';
import icon from '../../assets/logo.svg';
import { Button } from '../button/button';
import { disableBtn } from '../auth/auth';
import { Modal } from '../modal/modal';

const logoutButtonData = {
  buttonName: 'Logout',
  type: 'submit',
  className: 'logout-btn',
  id: 'logoutButton',
};

const modalData = {
  text: 'Are you sure you want to logout? All your data will be deleted.',
  yesBtnData: {
    buttonName: 'Yes',
    type: 'submit',
    className: 'modal-btn',
    id: 'yesModalButton',
  },
  noBtnData: {
    buttonName: 'No',
    type: 'submit',
    className: 'modal-btn',
    id: 'noModalButton',
  },
};
export const Header = () => {
  const header = document.createElement('div');
  header.classList.add('header');

  const myIcon = new Image();
  myIcon.src = icon;
  myIcon.alt = 'logo';
  myIcon.classList.add('logo');

  const appName = document.createElement('div');
  appName.textContent = 'RSS Puzzle';
  appName.classList.add('app-name');

  const headerWrapper = document.createElement('div');
  headerWrapper.classList.add('header-wrapper');
  header.append(headerWrapper);

  headerWrapper.append(myIcon, appName);

  const logoutButton = Button(logoutButtonData);
  header.append(logoutButton);
  disableBtn(logoutButton);

  logoutButton.addEventListener('click', () => {
    Modal(modalData);
  });

  return header;
};
