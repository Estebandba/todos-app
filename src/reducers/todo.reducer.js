import uuid from "uuid/dist/v4";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: uuid(), task: action.task, completed: false }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        action.id === todo.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT_TODO":
      return state.map((todo) =>
        action.id === todo.id ? { ...state, task: action.newTask } : todo
      );
    default:
      return state;
  }
};
export default reducer;