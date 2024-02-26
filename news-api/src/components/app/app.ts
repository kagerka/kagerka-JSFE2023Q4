import { assertIsDefined } from '../../types/checking';
import { NewsAPI, SourceAPI } from '../../types/types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import filter from '../view/filter/filter';
import { categories } from './../view/filter/filter';

class App {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start() {
    filter(categories);
    const filterItem = document.querySelectorAll('.filter__item');
    filterItem.forEach((item) => {
      item.addEventListener('click', (e) => {
        const target: EventTarget | null = e.currentTarget;
        if (!(target instanceof HTMLElement)) {
          throw new Error();
        }
        const newsButtons = document.querySelectorAll('.source__item');
        newsButtons.forEach((el) => {
          if (!(el instanceof HTMLElement)) {
            throw new Error();
          }
          el.classList.add('active');
          if (target.dataset.category === el.dataset.category) {
            el.classList.add('active');
            el.classList.remove('hidden');
          } else {
            el.classList.remove('active');
            el.classList.add('hidden');
          }
        });
      });
    });
    const sources = document.querySelector('.sources');
    assertIsDefined(sources);
    sources.addEventListener('click', (e) => this.controller.getNews(e, (data: NewsAPI) => this.view.drawNews(data)));
    this.controller.getSources((data: SourceAPI) => this.view.drawSources(data));
  }
}

export default App;
