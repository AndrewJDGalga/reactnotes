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
  const [noteIDLimit, setNoteIDLimit] = useState(1);
  const [notes, setNotes] = useState([
    new Note(0, newNotePhrase),
  ]);
  const [selectedNote, setSelectedNote] = useState(notes[0]);
  const [selectedNoteTitle, setSelectedNoteTitle] = useState(notes[0].title);

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
        setNoteIDLimit(1);
        return [new Note(0, newNotePhrase)];
      }
    });
  }

  function setCurrentNote(id) {
    setSelectedNote(notes[id]);
    console.log(notes[id]);
  }

  function setNoteTitle(titleChange) {
    //selectedNote.title = titleChange.target.value;
    setSelectedNoteTitle(titleChange.target.value);
    selectedNote.title = titleChange.target.value;
    console.log(titleChange.target.value);
  }

  function setNoteContents(contentsChange) {
    selectedNote.content = contentsChange.target.value;
  }


  return (
    <main className="noteapp-container">
      <Sidebar noteArray={notes} currentNote={setCurrentNote} addNote={newNote} removeNote={trashNote} titleUpdate={selectedNoteTitle}/>
      <Editor noteTitle={setNoteTitle} noteContents={setNoteContents} />
    </main>
  )
}

export default App
