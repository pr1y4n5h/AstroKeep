import React from "react"
import './App.css';
import {Header} from "./Components/Header"
import {Footer} from "./Components/Footer"
import {NewNote} from "./Components/NewNote"
import {Notes} from "./Components/Notes"

function App() {

  const addNote = () => {
    alert("I Am clicked")
  }

  return (
    <>
    <main>
    <Header />
    <NewNote passNotes={addNote} />
    <Notes />
    </main>
    <Footer />
    </>
  );
}

export default App;
