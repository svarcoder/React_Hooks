/**
 * This is a custom hook in React that creates a stateful input field with a reset function.
 * @param initialValue - The initial value that the state variable "value" will be set to when the
 * component using this custom hook mounts.
 * @returns The `useInput` custom hook is returning an array with three elements: `value`, `bind`, and
 * `reset`. The `value` is the current value of the input field, `bind` is an object containing the
 * `value` and `onChange` event handler to be used in the input field, and `reset` is a function that
 * sets the `value` to an empty string
 */
import { SetStateAction, useState } from "react";

function useInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue("");
  };

  const bind = {
    value,
    onChange: (e: any) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, reset];
}

export default useInput;
