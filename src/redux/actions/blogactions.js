export const ADD_TITLE = "ADD_TITLE";
export const ADD_TEXT = "ADD_TEXT";
export const ADD_DATE = "ADD_DATE";

export const addTitle = (title) => {
  return {
    type: ADD_TITLE,
    payload: title,
  };
};

export const addText = (text) => {
  return {
    type: ADD_TEXT,
    payload: text,
  };
};

export const addDate = (date) => {
  return {
    type: ADD_DATE,
    payload: date,
  };
};