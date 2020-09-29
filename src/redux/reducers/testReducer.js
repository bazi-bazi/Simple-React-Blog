import { INCREMENT_NUMBER, DECREMENT_NUMBER } from "../actions/testAction";

const initialState = 0;

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_NUMBER:
      return state + 1;
    case DECREMENT_NUMBER:
      return state - 1;
    default:
      return state;
  }
};
