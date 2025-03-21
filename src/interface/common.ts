export interface ReturnResponse<T> {
  data: T;
  pagination: Pagination;
}
export interface Pagination {
  page: number;
  perPage: number;
  total: number;
}

export interface SingleResponse<T> {
  data: T;
}
