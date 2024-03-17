const errorMessage =
  'First letter should be capitalized. Use only latin letters and dash sign (-). Minimum name length is 3 characters, surname is 4 characters.';

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
  if (isValidName) {
    inputName.classList.remove('validate-error');
  }
  if (isValidSurname) {
    inputSurname.classList.remove('validate-error');
  }
  if (!isValidName || !isValidSurname) {
    validateError.textContent = errorMessage;
    validateError.classList.add('active');
    if (!isValidName) {
      inputName.classList.add('validate-error');
    }
    if (!isValidSurname) {
      inputSurname.classList.add('validate-error');
    }
    loginButton.disabled = true;
  }
  if (isValidName && isValidSurname) {
    loginButton.disabled = false;
    inputName.classList.remove('validate-error');
    inputSurname.classList.remove('validate-error');
    validateError.classList.remove('active');
    validateError.textContent = '';
  }

  return validateError;
};
