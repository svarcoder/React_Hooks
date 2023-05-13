/* This code is defining a functional component called `HookCounterTwo` that uses the `useContext` hook
from React to access the values of two context objects: `UserContext` and `ChannelContext`. These
context objects are imported from the `HookCounter` module. The component then renders a `div`
element that displays the values of `user` and `channel`. Finally, the component is exported as the
default export of the module. */
import { useContext } from "react";
import { ChannelContext, UserContext } from "./HookCounter";
import HookCounterThree from "./HookCounterThree";

const HookCounterTwo = () => {
  const user = useContext<string>(UserContext);
  const channel = useContext<string>(ChannelContext);

  return (
    <div>
      User is {user} and channel is {channel}
      <HookCounterThree />
    </div>
  );
};

export default HookCounterTwo;
