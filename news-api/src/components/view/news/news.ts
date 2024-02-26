import { assertIsDefined } from '../../../types/checking';
import { Article } from '../../../types/types';
import './news.css';

class News {
  draw(data: Article[]) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
    assertIsDefined(newsItemTemp);

    news.forEach((item: Article, idx: number) => {
      const newsClone: Node = newsItemTemp.content.cloneNode(true);
      if (!(newsClone instanceof DocumentFragment)) {
        throw new Error();
      }

      const newsItem = newsClone.querySelector('.news__item');
      assertIsDefined(newsItem);
      if (idx % 2) newsItem.classList.add('alt');

      const newsMetaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
      assertIsDefined(newsMetaPhoto);
      newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || './../../../assets/news_placeholder.jpg'})`;

      const newsMetaAuthor = newsClone.querySelector('.news__meta-author');
      assertIsDefined(newsMetaAuthor);
      newsMetaAuthor.textContent = item.author || item.source.name;

      const newsMetaDate = newsClone.querySelector('.news__meta-date');
      assertIsDefined(newsMetaDate);
      newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

      const newsDescriptionTitle = newsClone.querySelector('.news__description-title');
      assertIsDefined(newsDescriptionTitle);
      newsDescriptionTitle.textContent = item.title;

      const newsDescriptionSource = newsClone.querySelector('.news__description-source');
      assertIsDefined(newsDescriptionSource);
      newsDescriptionSource.textContent = item.source.name;

      const newsDescriptionContent = newsClone.querySelector('.news__description-content');
      assertIsDefined(newsDescriptionContent);
      newsDescriptionContent.textContent = item.description;

      const newsReadMore = newsClone.querySelector('.news__read-more a');
      assertIsDefined(newsReadMore);
      newsReadMore.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const newsBlock = document.querySelector('.news');
    assertIsDefined(newsBlock);
    newsBlock.innerHTML = '';
    newsBlock.appendChild(fragment);
  }
}

export default News;
