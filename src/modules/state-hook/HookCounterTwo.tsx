/** useState Hook with Previous Value */

/* This code is defining a functional component called `HookCounterTwo` that uses the `useState` hook from
the React library to manage a state variable called `count`. The initial value of `count` is set to
0 using the `initialCount` constant. The component also defines a function called `incrementFive`
that uses a `for` loop to increment the `count` state by 1, five times. The component returns a JSX
expression that displays the current value of `count` and four buttons that allow the user to reset,
increment, decrement, or increment by 5 the value of `count`. Finally, the component is exported as
the default export of the module. */

import { useState } from "react";

const HookCounterTwo = () => {
  const initialCount: number = 0;
  const [count, setCount] = useState<number>(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </>
  );
};

export default HookCounterTwo;
