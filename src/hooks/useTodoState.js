import useLocalStorageState from "./useLocalStorageState";
import uuid from "uuid/dist/v4";

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: (todoId) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    toogleTodo: (todoId) => {
      const updateTodos = todos.map((todo) =>
        todoId === todo.id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updateTodos);
    },
    editTodo: (todoId, newTask) => {
      const updateTodos = todos.map((todo) =>
        todoId === todo.id ? { ...todo, task: newTask } : todo
      );
      setTodos(updateTodos);
    },
  };
};
