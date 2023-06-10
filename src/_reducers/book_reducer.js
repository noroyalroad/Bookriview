import { SET_SELECTED_BOOK, SET_SEARCH_QUERY } from "../_actions/types";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_BOOK:
      return { ...state, selected: action.payload };
      break;
    case SET_SEARCH_QUERY:
      return { ...state, searchquery: action.payload };
      break;

    default:
      return state;
  }
}
