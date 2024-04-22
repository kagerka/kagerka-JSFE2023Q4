import { ChatPage } from '../../pages/chat/chat-page';
import { InfoPage } from '../../pages/info/info-page';
import { LoginPage } from '../../pages/login/login-page';

export const loadContent = (page: string): void => {
  if (page === '/' || page === '') {
    if (sessionStorage.getItem('currentUserLogin')) {
      new ChatPage().render(document.body);
    } else {
      new LoginPage().render(document.body);
    }
  }
  if (page === 'info') {
    new InfoPage().render(document.body);
  }
  if (page === 'login') {
    new LoginPage().render(document.body);
  }
  if (page === 'chat') {
    new ChatPage().render(document.body);
  }
};
