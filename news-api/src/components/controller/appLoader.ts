import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super(process.env.API_URL !== undefined ? process.env.API_URL : 'https://rss-news-api.onrender.com/mocks/', {
      apiKey: process.env.API_KEY !== undefined ? process.env.API_KEY : '618fa5190c15432a8170aa42844cb4f9',
    });
  }
}

export default AppLoader;
