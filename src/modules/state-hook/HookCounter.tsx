/** useState Hook */

/**
 * The HookCounter component is a simple counter that uses the useState hook in React.
 * @returns The HookCounter component is being returned, which contains a button that displays the
 * current count and updates it when clicked.
 */
import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default HookCounter;
