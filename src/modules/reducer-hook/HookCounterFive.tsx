/**
 * This is a functional component that uses the useContext hook to access and update the state of a
 * count context in a React app.
 * @returns The HookCounterFive component is being returned, which contains JSX code for displaying the
 * current count state and buttons for incrementing, decrementing, and resetting the count using the
 * countDispatch function from the CountContext.
 */
import { useContext } from "react";
import { CountContext } from "./HookCounterThree";

const HookCounterFive = () => {
  const countContext = useContext(CountContext);

  return (
    <div>
      Component A {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default HookCounterFive;
