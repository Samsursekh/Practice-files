import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, reduceNumber } from "../Redux/action";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  console.log(count);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch(addNumber(1))}>+</button>
      <button onClick={() => dispatch(reduceNumber(1))}>-</button>
    </div>
  );
};

export default Counter;
