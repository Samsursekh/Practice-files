import { ADD_NUMBER, REDUCE_NUMBER } from "./actionTypes";

const initialState = {
  count: 5
};

const reducer = (state = initialState, action) => {
  console.log(state, "State is there ot not");
  console.log(action, "Action is there ot not");
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        count: state.count + action.payload
      };
    case REDUCE_NUMBER:
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      return state;
  }
};

export default reducer;
