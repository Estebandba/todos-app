import React, { useContext, memo } from "react";
import useToogle from "./hooks/useToogle";
import EditTodoForm from "./EditTodoForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { DispatchContext } from "./context/todos.context";

const Todo = ({ task, completed, id }) => {
  const [isToogle, toogle] = useToogle(false);
  const dispatch = useContext(DispatchContext);
  return (
    <ListItem style={{ height: "64px" }}>
      {isToogle ? (
        <EditTodoForm id={id} editTask={task} toogleEditForm={toogle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onChange={() => dispatch({ type: "TOGGLE_TODO", id: id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE_TODO", id: id })}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toogle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

//memo is a performance enhancer that avoid re-renders on piece of 
//components where there is not change, basically it works with a cached pieced of state.

export default memo(Todo);
