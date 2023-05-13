/**
 * The HookCounterThree component uses the Consumer API to access and display values from the
 * UserContext and ChannelContext.
 * @returns The `HookCounterThree` component is returning a JSX element that contains a nested
 * structure of two `Consumer` components. The first `Consumer` component is consuming the
 * `UserContext` and the second `Consumer` component is consuming the `ChannelContext`. The values of
 * both contexts are being passed as arguments to their respective render props functions, which are
 * returning a JSX element that displays the values of both
 */
import { ChannelContext, UserContext } from "./HookCounter";

const HookCounterThree = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User context value {user}, channel context value {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default HookCounterThree;
