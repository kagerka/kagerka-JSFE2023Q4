export const checkIsLogin = () => {
  if (localStorage.getItem('Name') && localStorage.getItem('Surname')) {
    localStorage.setItem('isLogin', 'true');
  } else {
    localStorage.setItem('isLogin', 'false');
  }
  return localStorage.getItem('isLogin');
};

export const checkIsGame = () => {
  return localStorage.getItem('isGame');
};

export const disableBtn = (button: HTMLButtonElement) => {
  const auth = checkIsLogin();
  if (auth === 'false') {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
  return button;
};
