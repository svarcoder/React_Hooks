/**
 * This is a React functional component that uses the useRef and useEffect hooks to focus on an input
 * element when the component mounts.
 * @returns The component HookCounterOne is being returned.
 */
import { useEffect, useRef } from "react";

const HookCounterOne = () => {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default HookCounterOne;
