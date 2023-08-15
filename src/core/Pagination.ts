export interface Pagination<T> {
  content: Array<T>;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
}
