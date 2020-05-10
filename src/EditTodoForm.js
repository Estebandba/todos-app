import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Cancel from "@material-ui/icons/Cancel";

const EditTodoForm = ({ editTodo, id, editTask, toogleEditForm }) => {
  const [value, handleChange, reset] = useInputState(editTask);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editTodo(id, value);
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
