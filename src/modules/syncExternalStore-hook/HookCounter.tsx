/* This code is defining a functional component called `HookCounter` that uses the
`useSyncExternalStore` hook from the `react` library to subscribe to changes in a `todosStore` and
get its current snapshot. The `todos` variable is then used to render a list of todos and a button
to add a new todo. The `todosStore` is likely a custom store that manages a list of todos and
provides methods to add them. */
import { useSyncExternalStore } from "react";
import { todosStore } from "./TodosStore";

const HookCounter = () => {
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot
  );

  return (
    <>
      <button onClick={() => todosStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
};

export default HookCounter;
