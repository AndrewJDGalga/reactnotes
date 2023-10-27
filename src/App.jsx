import { useState } from "react";
import Sidebar from "./Sidebar"
import Editor from "./Editor"
import "./style.css"

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

  function trashNote(id) {
    setNotes(prev=>{
      if(prev.length > 1) {
        return prev.filter(note => note.id !== id);
      } else {
        return [new Note(prev.length-1, newNotePhrase)];
      }
    });
  }

  return (
    <main>
      <Sidebar noteArray={notes} currentNotePos={selectedNote} addNote={newNote} removeNote={trashNote} />
      <Editor />
    </main>
  )
}

export default App
