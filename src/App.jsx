import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import "./style/style.css"

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
  const [selectedNoteContent, setSelectedNoteContent] = useState(notes[0].content);

  function newNote() {
    if(notes.length < artificialNoteLimit) {
      setNotes( prev=>{
        setNoteIDLimit(prev=>prev+1);
        return [...prev, new Note(noteIDLimit, newNotePhrase)]
      });
    }
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

  useEffect(()=>{
    setCurrentNote(0);
  }, [notes.length === 1]);

  function setCurrentNote(id) {
    setSelectedNote(notes[id]);
    setSelectedNoteTitle(notes[id].title);
    setSelectedNoteContent(notes[id].content);
  }

  function setNoteTitle(titleChange) {
    titleChange.preventDefault();
    setSelectedNoteTitle(titleChange.target.value);
    selectedNote.title = titleChange.target.value;
  }

  function setNoteContents(contentsChange) {
    contentsChange.preventDefault();
    setSelectedNoteContent(contentsChange.target.value);
    selectedNote.content = contentsChange.target.value;
  }


  return (
    <main className="noteapp-container">
      <Sidebar noteArray={notes} setCurrentNote={setCurrentNote} addNote={newNote} removeNote={trashNote} titleUpdate={selectedNoteTitle}/>
      <Editor noteTitleChange={setNoteTitle} noteContentsChange={setNoteContents} currentNoteTitle={selectedNoteTitle} currentNoteContent={selectedNoteContent} />
    </main>
  )
}

export default App
