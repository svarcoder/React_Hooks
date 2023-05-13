/**
 * The function is a custom hook that returns an array with count, increment, decrement, and reset
 * functions for managing a counter.
 * @param [initialCount=0] - The initial value of the counter. If no value is provided, it defaults to
 * 0.
 * @param value - The `value` parameter is a number that determines the amount by which the counter
 * will be incremented or decremented when the `increment` or `decrement` functions are called. It is
 * used in the `setCount` function inside the `increment` and `decrement` functions to update the
 * @returns An array containing the current count value, the increment function, the decrement
 * function, and the reset function.
 */
import { useState } from "react";

function useCounter({ initialCount }: any) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount: any) => prevCount + 5);
  };

  const decrement = () => {
    setCount((prevCount: any) => prevCount - 5);
  };

  const reset = () => {
    setCount(initialCount);
  };
  return [count, increment, decrement, reset];
}

export default useCounter;
