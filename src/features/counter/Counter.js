import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export default function Counter() {
  const [amount, setAmount] = useState(5);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />
        <span>{count}</span>
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <hr />
        <button
          aria-label="Increment By Amount"
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          increment by {amount}
        </button>
        <select
          onChange={(e) => setAmount(parseInt(e.target.value, 10))}
          value={amount}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
    </div>
  );
}
