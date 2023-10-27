import { useState } from "react";
import Sidebar from "./Sidebar"
import Editor from "./Editor"

class Note {
  constructor(id, title) {
    this.id = id,
    this.title = title,
    this.content = ""
  }
}

function App() {
  const newNotePhrase = 'New Note';
  const [notes, setNotes] = useState([
    new Note(0, newNotePhrase),
  ]);
  const [selectedNote, setSelectedNote] = useState(0);
  const [currentNote, setCurrentNote] = useState(notes[selectedNote]);

  function newNote() {
    setNotes( prev=>{
      return [...prev, new Note(prev.length, newNotePhrase)]
    });
    console.log(notes);
  }

  return (
    <main>
      <Sidebar noteArray={notes} currentNotePos={selectedNote} addNote={newNote} />
      <Editor />
    </main>
  )
}

export default App
