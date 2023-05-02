import { ADD_NUMBER, REDUCE_NUMBER } from "./actionTypes";

const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload
  };
};

const reduceNumber = (payload) => {
  return {
    type: REDUCE_NUMBER,
    payload
  };
};

export { addNumber, reduceNumber };
