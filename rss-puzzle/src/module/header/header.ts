import './header.scss';
import icon from '../../assets/logo.svg';
import { Button } from '../button/button';
import { disableBtn } from '../auth/auth';
import { Modal } from '../modal/modal';
import { ButtonData, ModalData } from '../types/types';
import { STORAGE } from '../storage/storage';

const logoutButtonData: ButtonData = {
  buttonName: 'Logout',
  type: 'submit',
  className: 'logout-btn',
  id: 'logoutButton',
};

const modalData: ModalData = {
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
export const Header = (): HTMLDivElement => {
  const header: HTMLDivElement = document.createElement('div');
  header.classList.add('header');

  const headerIcon: HTMLImageElement = new Image();
  headerIcon.src = icon;
  headerIcon.alt = 'logo';
  headerIcon.classList.add('logo');

  const appName: HTMLDivElement = document.createElement('div');
  appName.textContent = 'RSS Puzzle';
  appName.classList.add('app-name');

  const headerWrapper: HTMLDivElement = document.createElement('div');
  headerWrapper.classList.add('header-wrapper');
  header.append(headerWrapper);

  headerWrapper.append(headerIcon, appName);

  const logoutButton: HTMLButtonElement = Button(logoutButtonData);
  header.append(logoutButton);
  STORAGE.logoutButton = logoutButton;
  disableBtn(logoutButton);

  logoutButton.addEventListener('click', () => {
    Modal(modalData);
  });

  return header;
};
