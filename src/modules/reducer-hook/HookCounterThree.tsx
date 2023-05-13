/* This code is defining a React component called `HookCounterThree` that uses the `useReducer` hook to
manage state. It also creates a context called `CountContext` using `React.createContext()`. The
`HookCounterThree` component provides the `countState` and `countDispatch` values to the
`CountContext.Provider` component, which is then used to wrap the `HookCounterFour` component. This
allows the `HookCounterFour` component to access the `countState` and `countDispatch` values from
the `CountContext` without having to pass them down through props. */

import React, { useReducer } from "react";
import HookCounterFour from "./HookCounterFour";

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

export const CountContext = React.createContext<any>({});

const HookCounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <HookCounterFour />
    </CountContext.Provider>
  );
};

export default HookCounterThree;
