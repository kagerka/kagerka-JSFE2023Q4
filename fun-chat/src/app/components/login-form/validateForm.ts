import { MIN_INPUT_LENGTH } from '../../data/constants';

export const validateForm = (
  name: HTMLInputElement,
  password: HTMLInputElement,
  messageName: HTMLElement,
  messagePassword: HTMLElement,
): boolean => {
  let isNameValid = false;
  let isPasswordValid = false;

  if (name.value.length >= MIN_INPUT_LENGTH && name.value.match(/[A-Za-zА-Яа-я0-9-]/g)?.join('') === name.value) {
    isNameValid = true;
    name.classList.remove('incorrect');
    messageName.classList.remove('incorrect');
  } else {
    name.classList.add('incorrect');
    messageName.classList.add('incorrect');
  }

  if (password.value.length >= MIN_INPUT_LENGTH && password.value.match(/[A-Za-z0-9]/g)?.join('') === password.value) {
    isPasswordValid = true;
    password.classList.remove('incorrect');
    messagePassword.classList.remove('incorrect');
  } else {
    password.classList.add('incorrect');
    messagePassword.classList.add('incorrect');
  }

  return isNameValid && isPasswordValid;
};
