import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Cancel from "@material-ui/icons/Cancel";
import { TodosContext } from "./context/todos.context";

const EditTodoForm = ({id, editTask, toogleEditForm }) => {
  const [value, handleChange, reset] = useInputState(editTask);
  const {dispatch} = useContext(TodosContext);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({type:"EDIT_TODO", id: id, newTask: value});
          reset();
          toogleEditForm();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          style={{ marginLeft: "1rem" }}
          autoFocus
        />
      </form>
      <ListItemSecondaryAction>
        <IconButton aria-label="Cancel" onClick={toogleEditForm}>
          <Cancel />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
};

export default EditTodoForm;
