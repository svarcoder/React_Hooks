/**
 * The HookCounter component uses the useRef hook to focus on an input element when it is clicked.
 * @returns The HookCounter component is being returned.
 */
import { useRef } from "react";
import Input from "./Input";

const HookCounter = () => {
  const inputRef = useRef<any>(null);
  return (
    <div>
      <Input
        onFocus={() => inputRef && inputRef.current.focus()}
        ref={inputRef}
      />
    </div>
  );
};

export default HookCounter;
