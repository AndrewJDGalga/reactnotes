import { useEffect, useState } from "react";
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
  const artificialNoteLimit = 10;
  const newNotePhrase = 'New Note';
  const [curNoteID, setCurNoteID] = useState(0);
  const [notes, setNotes] = useState([
    new Note(curNoteID, newNotePhrase),
  ]);
  const [selectedNote, setSelectedNote] = useState(notes[0]);

  useEffect(()=>{
    setCurNoteID(prev=>prev+1);
  }, []);

  function newNote() {
    if(notes.length < artificialNoteLimit) {
      setNotes( prev=>{
        setCurNoteID(prev=>prev+1);
        return [...prev, new Note(curNoteID, newNotePhrase)]
      });
    }
    console.log(notes);
    console.log(curNoteID);
  }

  function trashNote(id) {
    setNotes(prev=>{
      if(prev.length > 1) {
        return prev.filter(note => note.id !== id);
      } else {
        setCurNoteID(0);
        return [new Note(setCurNoteID, newNotePhrase)];
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
      <Sidebar noteArray={notes} currentNotePos={setCurrentNote} addNote={newNote} removeNote={trashNote}/>
      <Editor />
    </main>
  )
}

export default App
