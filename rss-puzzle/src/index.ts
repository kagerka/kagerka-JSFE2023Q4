import { checkIsGame, checkIsLogin } from './module/auth/auth';
import { Header } from './module/header/header';
import { PageWrapper } from './module/page-wrapper/page-wrapper';
import { GamePage } from './pages/game-page/game-page';
import { LoginPage } from './pages/login-page/login-page';
import { StartPage } from './pages/start-page/start-page';
import './styles.scss';

const header: HTMLDivElement = Header();
document.body.append(header);

const pageWrapper: HTMLDivElement = PageWrapper();
document.body.append(pageWrapper);

const auth: string | null = checkIsLogin();
const isGame: string | null = checkIsGame();
if (auth === 'true') {
  if (isGame === 'true') {
    GamePage(pageWrapper);
  } else {
    StartPage(pageWrapper);
  }
} else {
  LoginPage(pageWrapper);
}
