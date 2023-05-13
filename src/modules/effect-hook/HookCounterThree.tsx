/**
 * The HookCounterThree component toggles the display of the HookCounterFour component based on a
 * button click.
 * @returns The `HookCounterThree` component is being returned, which contains a button that toggles
 * the display of the `HookCounterFour` component based on the state of the `display` variable.
 */
import { useState } from "react";
import HookCounterFour from "./HookCounterFour";

const HookCounterThree = () => {
  const [display, setDisplay] = useState<boolean>(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookCounterFour />}
    </div>
  );
};

export default HookCounterThree;
