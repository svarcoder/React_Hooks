/**
 * This is a React functional component that uses the useState and useEffect hooks to update the
 * document title and display a button that increments a count when clicked.
 * @returns The component HookCounterTwo is being returned.
 */
import { useEffect, useState } from "react";

const HookCounterTwo = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    console.log("useEffect - Updating document title ");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>
        useEffect - Click {count} times
      </button>
    </div>
  );
};

export default HookCounterTwo;
