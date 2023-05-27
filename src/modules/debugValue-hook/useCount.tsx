/**
 * This is a custom React hook that returns a count value that increments every 4 seconds. It also uses
 * the useDebugValue hook to display the count value in React DevTools.
 * @returns The `useCount` custom hook returns the current value of the `count` state variable, which
 * is being incremented by 1 every 4 seconds using `setInterval`. The `useDebugValue` hook is used to
 * display the current value of `count` in React DevTools for debugging purposes.
 */
import { useDebugValue, useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState<number>(0);

  setInterval(() => {
    setCount(count + 1);
  }, 4000);

  useDebugValue(count);
  return count;
};
