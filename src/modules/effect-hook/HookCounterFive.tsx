/**
 * The HookCounterFive component uses the useState and useEffect hooks to update and display a count
 * that increments every second.
 * @returns The component is returning a `div` element that displays the current value of the `count`
 * state variable.
 */
import { useEffect, useState } from "react";

const HookCounterFive = () => {
  const [count, setCount] = useState<number>(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <div>{count}</div>;
};

export default HookCounterFive;
