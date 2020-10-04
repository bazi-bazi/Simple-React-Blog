import { ADD_TEXT, ADD_LOGIN } from "../actions/blogactions";
import { blogState } from "../state";

let initialState = {
  text: [],
  login: true,
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        text: [...state.text, action.payload],
      };
      break;
    case ADD_LOGIN:
      return {
        ...state,
        login: !state.login,
      };
      break;
    default:
      return state;
  }
};
