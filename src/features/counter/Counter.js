import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset all</button>
      </div>

      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(addValue))}>+</button>
    </div>
  );
};

export default Counter;
