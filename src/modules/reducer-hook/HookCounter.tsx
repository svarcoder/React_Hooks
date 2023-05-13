/* This code is implementing a simple counter using the `useReducer` hook in React. The `initialState`
variable is set to 0, and the `reducer` function takes in a `state` and an `action` parameter. The
`useReducer` hook is then used to create a `count` state variable and a `dispatch` function that can
be used to update the state based on the `reducer` function. The `HookCounter` component returns a
div that displays the current count, as well as three buttons that can be used to increment,
decrement, or reset the count. When a button is clicked, the corresponding action is dispatched to
the `reducer` function, which updates the state accordingly. */

import { useReducer } from "react";

const initialState = 0;

const reducer = (state: number, action: any) => {
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

const HookCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count = {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default HookCounter;
