import { LoginPage } from '../../pages/login-page/login-page';
import { disableBtn } from '../auth/auth';
import { BtnProps, Button } from '../button/button';
import { Spinner } from '../spinner/spinner';
import './modal.scss';

export interface ModalProps {
  text: string;
  yesBtnData: BtnProps;
  noBtnData: BtnProps;
}

export const Modal = ({ text, yesBtnData, noBtnData }: ModalProps): HTMLDivElement => {
  const modalWrapper: HTMLDivElement = document.createElement('div');
  modalWrapper.classList.add('modal-wrapper');
  modalWrapper.classList.add('visible');

  const modal: HTMLDivElement = document.createElement('div');
  modal.classList.add('modal');
  modalWrapper.append(modal);

  const modalText: HTMLDivElement = document.createElement('div');
  modalText.classList.add('modal-text');
  modalText.textContent = text;
  modal.append(modalText);

  const btnWrapper: HTMLDivElement = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');
  modal.append(btnWrapper);

  const confirmBtn: HTMLButtonElement = Button(yesBtnData);
  const reduceBtn: HTMLButtonElement = Button(noBtnData);
  btnWrapper.append(confirmBtn, reduceBtn);
  document.body.append(modalWrapper);

  confirmBtn.addEventListener('click', () => {
    modalWrapper.classList.remove('visible');
    modalWrapper.classList.add('hidden');
    localStorage.removeItem('userData');
    localStorage.removeItem('gameData');
    const logoutButton = document.getElementById('logoutButton') as HTMLButtonElement;
    if (logoutButton) disableBtn(logoutButton);
    const pageWrapper: HTMLElement | null = document.getElementById('page-wrapper');
    if (pageWrapper) {
      const spinner: HTMLDivElement = Spinner();
      pageWrapper.append(spinner);

      setTimeout(() => {
        localStorage.setItem('isGame', 'false');
        LoginPage(pageWrapper);
      }, 1000);
    }
  });

  reduceBtn.addEventListener('click', () => {
    modalWrapper.classList.remove('visible');
    modalWrapper.classList.add('hidden');
  });

  return modalWrapper;
};
