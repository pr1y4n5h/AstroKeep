import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Button from "@material-ui/core/Button";

export const Notes = ({value, id, deleteItem}) => {
    const {title, content} = value;
    const deleteNote = () => {
        deleteItem(id)
    }

  return (
    <div className="note-box">
      <h1> {title} </h1>
      <p> {content} </p>
      <Button onClick={deleteNote} className="delete-btn">
        <DeleteOutlineIcon />
      </Button>
    </div>
  );
};
