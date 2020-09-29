export const INCREMENT_NUMBER = "INCREMENT_NUMBER";
export const DECREMENT_NUMBER = "DECREMENT_NUMBER";

export const increment = () => {
  return {
    type: INCREMENT_NUMBER,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT_NUMBER,
  };
};
