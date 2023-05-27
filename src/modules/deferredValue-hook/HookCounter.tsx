/**
 * This is a React component that uses useState, useEffect, useMemo, and useDeferredValue hooks to
 * fetch and filter a large list of items based on user input.
 * @returns The component HookCounter is being returned.
 */
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import axios from "axios";

const HookCounter = () => {
  const [name, setName] = useState<string>("");
  const [largeList, setLargeList] = useState<any>([]);
  const deferredName = useDeferredValue(name);

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

  const list = useMemo(() => {
    return largeList.filter((item: any) => item?.title.includes(deferredName));
  }, [deferredName]);

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      {list.map((item: any) => (
        <ul key={item?.id}>
          <li> {item?.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default HookCounter;
