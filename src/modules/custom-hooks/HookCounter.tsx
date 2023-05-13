/**
 * This is a functional component that uses the custom hook useCounter to manage and display a count
 * value with increment, decrement, and reset buttons.
 * @returns The `HookCounter` component is being returned, which renders a `div` containing the current
 * count value, and three buttons to increment, decrement, or reset the count. The `useCounter` hook is
 * used to manage the state of the count value and provide the necessary functions to update it.
 */
import useCounter from "./useCounter";

const HookCounter = () => {
  const [count, increment, decrement, reset] = useCounter(10);

  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default HookCounter;
