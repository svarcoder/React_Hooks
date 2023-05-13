/* This code is defining a functional component named `HookCounterThree` that returns an `h2` element
with the text "useCallback Hook". It is also importing the `React` library and using the
`React.memo` higher-order component to memoize the component and optimize its rendering performance.
The `console.log` statement is used to demonstrate when the component is being re-rendered. */
import React from "react";

const HookCounterThree = () => {
  console.log("Rendering Title");

  return <h2>useCallback Hook</h2>;
};

export default React.memo(HookCounterThree);
