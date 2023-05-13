/**
 * This is a React functional component that uses the useState hook to manage a count state and the
 * useDocumentTitle custom hook to update the document title with the current count.
 * @returns The component HookCounterOne is being returned.
 */
import { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
};

export default HookCounterOne;
