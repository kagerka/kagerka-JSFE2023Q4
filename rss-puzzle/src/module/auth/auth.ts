export const checkIsLogin = (): boolean => {
  return localStorage.getItem('userData') ? true : false;
};

export const checkIsGame = (): string | null => {
  return localStorage.getItem('isGame');
};

export const disableBtn = (button: HTMLButtonElement) => {
  const auth: boolean = checkIsLogin();
  if (!auth) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
  return button;
};
