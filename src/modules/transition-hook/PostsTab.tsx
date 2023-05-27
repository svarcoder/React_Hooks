/* This code is defining a React component called `PostsTab` that renders a list of 500 `SlowPost`
components. The `SlowPost` component is a simple component that renders a list item with a post
number and artificially slows down the rendering process by using a while loop that does nothing for
1 millisecond per item. The `PostsTab` component is wrapped in the `memo` higher-order component,
which memoizes the component to prevent unnecessary re-renders when its props have not changed. */
import { memo } from "react";

const PostsTab = memo(function PostsTab() {
  console.log("[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />");

  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return <ul className="items">{items}</ul>;
});

const SlowPost = ({ index }: any) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Post #{index + 1}</li>;
};

export default PostsTab;
