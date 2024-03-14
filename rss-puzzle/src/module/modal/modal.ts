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

export const Modal = ({ text, yesBtnData, noBtnData }: ModalProps) => {
  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('modal-wrapper');
  modalWrapper.classList.add('visible');

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modalWrapper.append(modal);

  const modalText = document.createElement('div');
  modalText.classList.add('modal-text');
  modalText.textContent = text;
  modal.append(modalText);

  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');
  modal.append(btnWrapper);

  const confirmBtn = Button(yesBtnData);
  const reduceBtn = Button(noBtnData);
  btnWrapper.append(confirmBtn, reduceBtn);
  document.body.append(modalWrapper);

  confirmBtn.addEventListener('click', () => {
    modalWrapper.classList.remove('visible');
    modalWrapper.classList.add('hidden');
    localStorage.clear();
    const logoutButton = document.getElementById('logoutButton') as HTMLButtonElement;
    if (logoutButton) disableBtn(logoutButton);
    const pageWrapper: HTMLElement | null = document.getElementById('page-wrapper');
    if (pageWrapper) {
      const spinner = Spinner();
      pageWrapper.append(spinner);

      setTimeout(() => {
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
