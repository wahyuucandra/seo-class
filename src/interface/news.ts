export interface NewsParams {
  limit: string;
  page: string;
}

export interface NewsParamsDetail {
  id?: number;
  slug?: string;
}

export interface News {
  id: number;
  title: string;
  author: string;
  publicationdate: Date;
  content: string;
  tags: string;
  slug: string;
  imageurl: string;
  created_at: Date;
  updated_at: Date;
}
