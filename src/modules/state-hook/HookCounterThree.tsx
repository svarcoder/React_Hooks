/** useState Hook with Object */

/**
 * The HookCounterThree component is a form that allows the user to input their first and last name, and
 * displays the input values in real-time.
 * @returns The HookCounterThree component is being returned, which is a form with two input fields for
 * first name and last name, and two h2 elements displaying the entered first and last names. There is
 * also a third h2 element displaying the entire name object as a JSON string.
 */
import { useState } from "react";

type InitialStateProps = {
  firstName: string;
  lastName: string;
};

const HookCounterThree = () => {
  const [name, setName] = useState<InitialStateProps>({
    firstName: "",
    lastName: "",
  });

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
};

export default HookCounterThree;
