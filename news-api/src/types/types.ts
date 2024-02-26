enum Status {
  ok = 'ok',
  error = 'error',
}

export interface SourceAPI {
  status: Status.ok | Status.error;
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
  status: Status.ok | Status.error;
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
