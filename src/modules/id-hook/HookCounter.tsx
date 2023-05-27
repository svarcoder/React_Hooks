/**
 * The HookCounter component fetches a list of posts from an API and displays them as a list on the
 * webpage using React hooks.
 * @returns The component HookCounter is being returned, which renders a list of items fetched from an
 * API using axios. The list is displayed as an unordered list with each item's title as a list item.
 * The key for each list item is a combination of the item's id and a unique id generated using the
 * useId hook.
 */
import { useEffect, useId, useState } from "react";
import axios from "axios";

const HookCounter = () => {
  const [largeList, setLargeList] = useState<any>([]);
  const id = useId();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        setLargeList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {largeList.map((item: any) => (
        <ul key={`${item.id} + ${id}`}>
          <li> {item?.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default HookCounter;
