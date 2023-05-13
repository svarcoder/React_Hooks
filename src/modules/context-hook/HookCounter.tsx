/**
 * The HookCounter function provides context values to its child component HookCounterOne using React's
 * createContext method.
 * @returns The `HookCounter` component is returning a JSX code that includes two context providers
 * (`UserContext.Provider` and `ChannelContext.Provider`) and the `HookCounterOne` component. The
 * `UserContext.Provider` is passing the value `"Vishwas"` as the context value for the `UserContext`,
 * while the `ChannelContext.Provider` is passing the value `"Codevolution"` as the context value
 */
import React from "react";
import HookCounterOne from "./HookCounterOne";

export const UserContext = React.createContext<string>("");
export const ChannelContext = React.createContext<string>("");

const HookCounter = () => {
  return (
    <div className="App">
      <UserContext.Provider value={"Subham"}>
        <ChannelContext.Provider value={"Char"}>
          <HookCounterOne />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default HookCounter;
