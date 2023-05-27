/* This code is defining a simple store for managing a list of todos. */
let nextId: number = 0;
let todos: any = [{ id: nextId++, text: "Todo #1" }];
let listeners: any = [];

const emitChange = () => {
  for (let listener of listeners) {
    listener();
  }
};

export const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: "Todo #" + nextId }];
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l: any) => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  },
};
