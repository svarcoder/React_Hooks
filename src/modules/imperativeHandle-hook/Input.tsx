/**
 * This is a functional component in React that creates an input element with a placeholder
 * and allows for imperatively handling focus.
 * @param props - an object containing all the properties passed to the Input component.
 * @param ref - The `ref` parameter is a reference to the component instance that is passed from the
 * parent component. It is used to access the methods and properties of the child component from the
 * parent component. In this case, the `ref` is used to access the `focus` method of the `Input`
 * @returns The `Input` component wrapped in `forwardRef` is being returned.
 */
import { useRef, useImperativeHandle, forwardRef } from "react";

const Input = (props: any, ref: any) => {
  const btn = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log("Input is in focus");
    },
  }));
  return <input ref={btn} {...props} placeholder="type here" />;
};

export default forwardRef(Input);
