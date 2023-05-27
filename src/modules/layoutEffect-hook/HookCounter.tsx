/**
 * This is a React functional component that uses the useLayoutEffect hook to update the value state
 * variable and display it in a div element.
 */
import { useLayoutEffect, useState } from "react";

const HookCounter = () => {
  const [value, setValue] = useState<string>("ABC");

  useLayoutEffect(() => {
    if (value === "ABC") {
      setValue("Char");
    }
    console.log("UseLayoutEffect is called with the value of ", value);
  }, [value]);

  return <div>{value} is the greatest man!</div>;
};

export default HookCounter;
