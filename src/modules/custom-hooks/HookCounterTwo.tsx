/**
 * The HookCounterTwo component is a form that takes in a user's first and last name and displays an
 * alert with the full name upon submission.
 * @returns The HookCounterTwo component is being returned.
 */
import useInput from "./useInput";

const HookCounterTwo = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e: any) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...bindLastName} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default HookCounterTwo;
