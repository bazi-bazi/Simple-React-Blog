export const ADD_TEXT = "ADD_TEXT";
export const ADD_LOGIN = "ADD_DATE";



export const addText = (text) => {
  return {
    type: ADD_TEXT,
    payload: text,
  };
};

export const addLogin = () => {
  return {
    type: ADD_LOGIN,
  };
};