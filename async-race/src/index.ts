import { Header } from './components/header/header';
import { Logo } from './components/logo/logo';
import { MainContent } from './components/main-content/main-content';
import './styles/styles.scss';

new Logo().render(document.body);
new Header().render(document.body);
new MainContent().render(document.body);
