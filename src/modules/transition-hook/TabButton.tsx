/**
 * This is a functional component in React that renders a button or bold text based on
 * whether it is active or not.
 * @param  - `children`: the content to be displayed inside the button or bold tag
 * @returns The `TabButton` component is being returned. If `isActive` is true, the component returns
 * the `children` wrapped in a bold tag. Otherwise, it returns a button with an `onClick` event handler
 * that calls the `onClick` function passed as a prop and displays the `children`.
 */
const TabButton = ({ children, isActive, onClick }: any) => {
  if (isActive) {
    return <b>{children}</b>;
  }
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default TabButton;
