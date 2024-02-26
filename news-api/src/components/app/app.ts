import { assertIsDefined } from '../../types/checking';
import { NewsAPI, SourceAPI } from '../../types/types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  controller: AppController;
  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    const sources = document.querySelector('.sources');
    assertIsDefined(sources);
    sources.addEventListener('click', (e) => this.controller.getNews(e, (data: NewsAPI) => this.view.drawNews(data)));
    this.controller.getSources((data: SourceAPI) => this.view.drawSources(data));
  }
}

export default App;
