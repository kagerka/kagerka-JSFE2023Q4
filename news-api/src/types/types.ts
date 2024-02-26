export interface SourceAPI {
  status: 'ok' | 'error';
  sources: SourceItem[];
}

export interface SourceItem {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface NewsAPI {
  status: 'ok' | 'error';
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: ArticleSource;
  author: string | null;
  title: string | null;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

export interface ArticleSource {
  id: string | null;
  name: string;
}

export interface Options {
  [key: string]: string;
}

export type Callback<Type> = (data: Type) => void;
