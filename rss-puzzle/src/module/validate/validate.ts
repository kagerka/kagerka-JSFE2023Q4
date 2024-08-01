const errorMessage =
  'First letter should be capitalized. Use only latin letters and dash sign (-). Minimum name length is 3 characters, surname is 4 characters.';

const MIN_NAME_LENGTH = 3;
const MIN_SURNAME_LENGTH = 4;

export const validateForm = (
  inputName: HTMLInputElement,
  inputSurname: HTMLInputElement,
  loginButton: HTMLButtonElement,
  validateError: HTMLParagraphElement,
): HTMLParagraphElement => {
  const regexpName: RegExp = /^[A-Z][a-zA-Z\s-]{2,}$/g;
  const regexpSurname: RegExp = /^[A-Z][a-zA-Z\s-]{3,}$/g;
  let isValidName: RegExpMatchArray | null = [''];
  let isValidSurname: RegExpMatchArray | null = [''];
  if (inputName.value) {
    isValidName = inputName.value.match(regexpName);
  }
  if (inputSurname.value) {
    isValidSurname = inputSurname.value.match(regexpSurname);
  }
  if (isValidName?.toString() === inputName.value.toString() && inputName.value.length >= MIN_NAME_LENGTH) {
    inputName.classList.remove('validate-error');
  } else {
    inputName.classList.add('validate-error');
    loginButton.disabled = true;
    validateError.textContent = errorMessage;
    validateError.classList.add('active');
  }
  if (isValidSurname?.toString() === inputSurname.value.toString() && inputSurname.value.length >= MIN_SURNAME_LENGTH) {
    inputSurname.classList.remove('validate-error');
  } else {
    inputSurname.classList.add('validate-error');
    loginButton.disabled = true;
    validateError.textContent = errorMessage;
    validateError.classList.add('active');
  }
  if (
    isValidName?.toString() === inputName.value.toString() &&
    isValidSurname?.toString() === inputSurname.value.toString() &&
    inputName.value.length >= MIN_NAME_LENGTH &&
    inputSurname.value.length >= MIN_SURNAME_LENGTH
  ) {
    loginButton.disabled = false;
    inputName.classList.remove('validate-error');
    inputSurname.classList.remove('validate-error');
    validateError.classList.remove('active');
    validateError.textContent = '';
  }
  return validateError;
};
