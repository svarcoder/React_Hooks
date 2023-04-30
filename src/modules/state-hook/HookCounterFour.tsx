/** useState Hook with Array */

/**
 * This is a TypeScript React component that uses the useState hook to add and display a list of random
 * numbers.
 * @property {number} id - The id property is a number that represents the unique identifier of an item
 * in the items array. It is used as the key when rendering the list of items.
 * @property {number} value - The value property is a number that is randomly generated and added to
 * the items array when the addItem function is called. It is then displayed in the list of items as a
 * list item.
 */
import { useState } from "react";

type InitialStateProps = {
  id: number;
  value: number;
};

const HookCounterFour = () => {
  const [items, setItems] = useState<InitialStateProps[]>([
    {
      id: 0,
      value: 0,
    },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookCounterFour;
