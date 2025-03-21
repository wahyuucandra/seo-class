export interface EventParams {
  limit: string;
  page: string;
}

export interface EventParamsDetail {
  id?: number;
  slug?: string;
}

export interface Event {
  id: number;
  title: string;
  date: Date;
  time: string;
  slug: string;
  description: string;
  location: string;
  registrationurl: string;
  imageurl: string;
  created_at: Date;
  updated_at: Date;
}
