import { SET_SELECTED_BOOK } from "./types";

export const SelectedBook = (book) => ({
  type: SET_SELECTED_BOOK,
  payload: book,
});
