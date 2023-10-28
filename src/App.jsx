import { useState } from "react";
import Sidebar from "./Sidebar"
import Editor from "./Editor"
import "./style.css"

class Note {
  constructor(id, title) {
    this.id = id,
    this.title = title,
    this.content = "",
    this.selected = false
  }
}

function App() {
  const newNotePhrase = 'New Note';
  const [notes, setNotes] = useState([
    new Note(0, newNotePhrase),
  ]);
  //const [notePos, setNotePos] = useState(0);
  const [selectedNote, setSelectedNote] = useState(notes[0]);

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

  function setCurrentNote(id){
    /*
    setSelectedNote(prev=>{
      return [
        if()
      ]
    });*/
  }

  return (
    <main className="noteapp-container">
      <Sidebar noteArray={notes} currentNotePos={setCurrentNote} addNote={newNote} removeNote={trashNote} />
      <Editor />
    </main>
  )
}

export default App
