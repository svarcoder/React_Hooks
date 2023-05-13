/**
 * This is a memoized functional component in React that renders a text and count value.
 * @param  - The above code is a functional component in React called `HookCounterOne`. It takes in two
 * props, `text` and `count`, and renders them inside a `div` element. The `console.log` statement is
 * used to log the text prop whenever the component is rendered. The component is
 * @returns The component HookCounterOne wrapped in React.memo.
 */
import React from "react";

type Props = {
  text: string;
  count: number;
};

const HookCounterOne = ({ text, count }: Props) => {
  console.log(`Rendering ${text}`);

  return (
    <div>
      {text} - {count}
    </div>
  );
};

export default React.memo(HookCounterOne);
