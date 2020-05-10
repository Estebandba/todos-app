import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Make groceries", completed: true },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const { todos, addTodo, removeTodo, toogleTodo, editTodo } = useTodoState(
    defaultTodos
  );
  return (
    <TodosContext.Provider
      value={{todos, addTodo, removeTodo, toogleTodo, editTodo}}
    >
      {props.children}
    </TodosContext.Provider>
  );
}
