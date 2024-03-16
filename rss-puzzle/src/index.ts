import { checkIsGame, checkIsLogin } from './module/auth/auth';
import { Header } from './module/header/header';
import { PageWrapper } from './module/page-wrapper/page-wrapper';
import { GamePage } from './pages/game-page/game-page';
import { LoginPage } from './pages/login-page/login-page';
import { StartPage } from './pages/start-page/start-page';
import './styles.scss';

const header = Header();
document.body.append(header);

const pageWrapper = PageWrapper();
document.body.append(pageWrapper);

const auth = checkIsLogin();
const isGame = checkIsGame();
if (auth === 'true') {
  if (isGame === 'true') {
    GamePage(pageWrapper);
  } else {
    StartPage(pageWrapper);
  }
} else {
  LoginPage(pageWrapper);
}
