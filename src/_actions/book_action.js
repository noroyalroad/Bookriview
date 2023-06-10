import { SET_SELECTED_BOOK, SET_SEARCH_QUERY } from "./types";

export const SelectedBook = (book) => ({
  type: SET_SELECTED_BOOK,
  payload: book,
});
export const searchquery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});
