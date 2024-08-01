import { listenToPopstate } from './app/api/router/listenToPopstate';
import { loadContent } from './app/api/router/loadContent';
import './styles/styles.scss';

if (sessionStorage.getItem('currentUserLogin')) {
  loadContent('chat');
} else {
  loadContent('login');
}

listenToPopstate();
