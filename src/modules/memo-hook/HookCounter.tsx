/**
 * The HookCounter component is a React functional component that uses the useState and useMemo hooks
 * to render two buttons that increment separate counters and display whether the first counter is even
 * or odd.
 * @returns The HookCounter component is being returned.
 */
import { useMemo, useState } from "react";

const HookCounter = () => {
  const [counterOne, setCounterOne] = useState<number>(0);
  const [counterTwo, setCounterTwo] = useState<number>(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </>
  );
};

export default HookCounter;
