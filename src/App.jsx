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
  const [noteIDLimit, setNoteIDLimit] = useState(0);
  const [notes, setNotes] = useState([
    new Note(noteIDLimit, newNotePhrase),
  ]);
  const [selectedNote, setSelectedNote] = useState(notes[0]);

  useEffect(()=>{
    setNoteIDLimit(prev=>prev+1);
  }, []);

  function newNote() {
    if(notes.length < artificialNoteLimit) {
      setNotes( prev=>{
        setNoteIDLimit(prev=>prev+1);
        return [...prev, new Note(noteIDLimit, newNotePhrase)]
      });
    }
    console.log(notes);
    console.log(noteIDLimit);
  }

  function trashNote(id) {
    setNotes(prev=>{
      if(prev.length > 1) {
        return prev.filter(note => note.id !== id);
      } else {
        setNoteIDLimit(0);
        return [new Note(noteIDLimit, newNotePhrase)];
      }
    });
  }

  function setCurrentNote(id) {

  }

  function setNoteTitle(titleChange) {
    console.log(titleChange.target.value);
  }

  function setNoteContents(contentsChange) {
    console.log(contentsChange.target.value);
  }


  return (
    <main className="noteapp-container">
      <Sidebar noteArray={notes} currentNotePos={setCurrentNote} addNote={newNote} removeNote={trashNote}/>
      <Editor noteTitle={setNoteTitle} noteContents={setNoteContents} />
    </main>
  )
}

export default App
