/** useEffect Hook */

/**
 * This is a React functional component that uses the useState and useEffect hooks to update the
 * document title with the number of times a button is clicked.
 * @returns The component HookCounterOne is being returned, which contains a button that updates the
 * count state when clicked and also updates the document title using the useEffect hook.
 */
import { useEffect, useState } from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("useEffect - Updating document title ");
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        useEffect - Click {count} times
      </button>
    </div>
  );
};

export default HookCounterOne;
