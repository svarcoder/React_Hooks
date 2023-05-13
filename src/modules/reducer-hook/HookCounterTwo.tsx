/* This code is demonstrating the use of the `useReducer` hook in React. It defines an initial state of
0 and a reducer function that takes in the current state and an action and returns a new state based
on the action. The `HookCounterTwo` component uses `useReducer` to create two separate state
variables (`count` and `countTwo`) and their corresponding dispatch functions (`dispatch` and
`dispatchTwo`). The component renders two sets of buttons that allow the user to increment,
decrement, or reset each count value by dispatching the appropriate action to the corresponding
dispatch function. */

import { useReducer } from "react";

const initialState = 0;
const reducer = (state: any, action: any) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const HookCounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count = {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      <div>Count = {countTwo}</div>
      <button onClick={() => dispatchTwo("increment")}>Increment</button>
      <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
};

export default HookCounterTwo;
