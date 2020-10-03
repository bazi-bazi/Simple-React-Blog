import { ADD_TEXT, ADD_TITLE, ADD_DATE } from "../actions/blogactions";
import { blogState } from "../state";

let initialState = {
  title: [],
  text: [],
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        text: [...state.text, action.payload],
      };
    default:
      return state;
  }
};
