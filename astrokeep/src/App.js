import React, { useState } from "react"
import './App.css';
import {Header} from "./Components/Header"
import {Footer} from "./Components/Footer"
import {NewNote} from "./Components/NewNote"
import {Notes} from "./Components/Notes"

function App() {

  const [addNote, setAddNote] = useState([])

  const addPropValue = (note) => {
    // alert("I Am clicked", note);
    // console.log(note)
    
    setAddNote((data) => [...data, note])
    console.log(addNote)
  }

  const deletePropValue = (id) => {
    setAddNote(data => data.filter((item,index) => index !== id ))
  }

  return (
    <>
    <main>
    <Header />
    <NewNote passNotes={addPropValue} />
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
    {
      addNote.map((item,ind) => (
        <Notes key={ind} id={ind} value={item} deleteItem={deletePropValue}  />
      ))
    }
    </div>
    <Footer />
    </main>
    </>
  );
}

export default App;
