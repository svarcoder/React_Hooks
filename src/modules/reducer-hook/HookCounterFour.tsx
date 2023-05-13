/**
 * This is a functional component that renders the HookCounterFive component within it.
 * @returns The component HookCounterFour is being returned, which includes the component
 * HookCounterFive.
 */
import HookCounterFive from "./HookCounterFive";

const HookCounterFour = () => {
  return (
    <>
      Component Four <HookCounterFive />
    </>
  );
};

export default HookCounterFour;
