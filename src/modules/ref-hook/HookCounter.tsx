/**
 * The HookCounter component is a timer that increments every second and can be cleared with a button
 * click.
 * @returns The component HookCounter is being returned.
 */
import { useEffect, useRef, useState } from "react";

const HookCounter = () => {
  const [timer, setTimer] = useState<number>(0);
  const interValRef = useRef<any>();

  useEffect(() => {
    interValRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      clearInterval(interValRef.current);
    };
  }, []);

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => clearInterval(interValRef.current)}>
        Clear Timer
      </button>
    </div>
  );
};

export default HookCounter;
