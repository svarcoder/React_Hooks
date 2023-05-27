/**
 * The HookCounter component uses the useCount custom hook to display a button with the current count
 * value.
 * @returns The HookCounter component is returning a button element that displays the value of the
 * count variable obtained from the useCount custom hook.
 */
import { useCount } from "./useCount";

const HookCounter = () => {
  const count = useCount();

  return (
    <div>
      <button>{count}</button>
    </div>
  );
};

export default HookCounter;
