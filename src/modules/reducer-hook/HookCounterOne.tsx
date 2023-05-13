/* This code is demonstrating the use of the `useReducer` hook in a React functional component. It
initializes a state object with two counters, and defines a reducer function that updates the state
based on different actions. The `useReducer` hook is then used to create a state and a dispatch
function, which can be used to update the state by dispatching actions to the reducer. The component
renders buttons that dispatch different actions to increment, decrement, or reset the counters, and
displays the current values of the counters. */

import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const HookCounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count = {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>Secound Counter = {count.secondCounter}</div>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default HookCounterOne;
