import React from "react";
import { firebase } from "../../firebase";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

export const MarkasDone = ({ id }) => {
  const completedTask = () => {
    firebase.firestore().collection("tasks").doc(id).update({
      completed: true,
    });
  };

  return (
    <IconButton
      inputprops={{ "aria-label": "uncontrolled-checkbox" }}
      onClick={() => completedTask()}
    >
      <Tooltip title="Mark as done" arrow>
      <DoneIcon />
      </Tooltip>
    </IconButton>
  );
};
