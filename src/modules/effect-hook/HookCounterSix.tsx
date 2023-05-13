/**
 * This is a React component that fetches a post from an API based on the ID entered by the user and
 * displays the post title.
 * @returns The component HookCounterSix is being returned, which renders an input field, a button, and
 * a div that displays the title of a post fetched from the JSONPlaceholder API based on the ID entered
 * in the input field and submitted by clicking the button. There is also a commented-out section that
 * would render a list of posts if uncommented.
 */
import axios from "axios";
import { useEffect, useState } from "react";

const HookCounterSix = () => {
  const [post, setPost] = useState<any>({});
  const [id, setId] = useState<number | string>(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState<number>(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(+id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
      {/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
    </div>
  );
};

export default HookCounterSix;
