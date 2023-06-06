import { SET_SELECTED_BOOK } from "../_actions/types";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_BOOK:
      return { ...state, selected: action.payload };
      break;

    default:
      return state;
  }
}
