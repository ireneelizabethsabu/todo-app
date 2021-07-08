import React from "react";
import { firebase } from "../../firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

export const Delete = ({ id }) => {
  const deleteTask = () => {
    firebase.firestore().collection("tasks").doc(id).delete();
  };

  return (
    <IconButton
      onClick={() => deleteTask()}
    >
      <Tooltip title="delete" arrow>
      <DeleteIcon />
      </Tooltip>
    </IconButton>
  );
};
