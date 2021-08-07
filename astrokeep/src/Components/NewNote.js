import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

export const NewNote = ({passNotes}) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [hideText, setHideText] = useState(false) 

  function noteDataHandler(event) {
    const { name, value } = event.target;

    setNote((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

  function addNoteHandler() {
        passNotes(note) 
        setNote({
          title: "",
          content: "",
        })   
  }

  return (
    <div className="new-note-container" >
      <form className="new-note-box">
      {hideText &&
        <input
          value={note.title}
          onChange={noteDataHandler}
          name="title"
          placeholder="Title"
          autoComplete="off"
        />}
        <textarea
          value={note.content}
          onChange={noteDataHandler}
          name="content"
          placeholder="Write a note..."
          onClick={() => setHideText(true)}
        />
        <Button onClick={addNoteHandler} className="note-add-btn">
          <AddIcon />
        </Button>
      </form>
    </div>
  );
};
