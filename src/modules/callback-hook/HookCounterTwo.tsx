/**
 * This is a React functional component that renders a button and logs a message when it is rendered,
 * and it is wrapped in React.memo for performance optimization.
 * @param  - 1. `React` - the `React` library is imported to enable the use of React components and
 * features.
 * @returns The `HookCounterTwo` component wrapped in `React.memo`.
 */
import React, { ReactNode } from "react";

type Props = {
  handleClick: () => void;
  children: ReactNode;
};

const HookCounterTwo = ({ handleClick, children }: Props) => {
  console.log("Rendering button - ", children);

  return <button onClick={handleClick}>{children}</button>;
};

export default React.memo(HookCounterTwo);
