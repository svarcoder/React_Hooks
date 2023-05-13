/**
 * This is a React functional component that uses the useEffect hook to add and remove a mousemove
 * event listener and updates the state with the current mouse position.
 * @returns The component HookCounterFour is being returned, which renders a div that displays the
 * current values of x and y.
 */
import { SetStateAction, useEffect, useState } from "react";

const HookCounterFour = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const logMousePosition = (e: {
    clientX: SetStateAction<number>;
    clientY: SetStateAction<number>;
  }) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useFffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks - X - {x} Y - {y}
    </div>
  );
};

export default HookCounterFour;
