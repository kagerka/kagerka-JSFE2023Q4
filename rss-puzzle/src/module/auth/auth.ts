export const checkLogin = () => {
  let isLogin;
  if (localStorage.getItem('Name') && localStorage.getItem('Surname')) {
    isLogin = true;
  } else {
    isLogin = false;
  }
  return isLogin;
};

export const disableBtn = (button: HTMLButtonElement) => {
  const auth = checkLogin();
  if (!auth) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
  return button;
};
