import "./App.css";
import HookCounterOne from "./modules/effect-hook/HookCounterOne";
import HookCounterFour from "./modules/state-hook/HookCounterFour";
import HookCounterThree from "./modules/state-hook/HookCounterThree";
import HookCounterTwo from "./modules/state-hook/HookCounterTwo";
import HookCounter from "./modules/state-hook/HookCounter";

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      <HookCounterOne />
    </div>
  );
}

export default App;
