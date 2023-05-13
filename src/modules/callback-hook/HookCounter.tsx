/**
 * The HookCounter function is a React component that uses the useState and useCallback hooks to manage
 * and update the age and salary state variables.
 * @returns The `HookCounter` component is returning a JSX element that contains several instances of
 * other custom components (`HookCounterOne`, `HookCounterTwo`, and `HookCounterThree`). It also
 * defines two state variables (`age` and `salary`) and two callback functions (`incrementAge` and
 * `incrementSalary`) that update those state variables.
 */
import { useCallback, useState } from "react";
import HookCounterThree from "./HookCounterThree";
import HookCounterOne from "./HookCounterOne";
import HookCounterTwo from "./HookCounterTwo";

const HookCounter = () => {
  const [age, setAge] = useState<number>(25);
  const [salary, setSalary] = useState<number>(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <HookCounterThree />
      <HookCounterOne text="Age" count={age} />
      <HookCounterTwo handleClick={incrementAge}>Increment Age</HookCounterTwo>
      <HookCounterOne text="Salary" count={salary} />
      <HookCounterTwo handleClick={incrementSalary}>
        Increment Salary
      </HookCounterTwo>
    </>
  );
};

export default HookCounter;
