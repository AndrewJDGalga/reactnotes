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
  const [notes, setNotes] = useState([
    new Note(0, 'New Note'),
  ]);
  const [selectedNote, setSelectedNote] = useState(0);
  const [currentNote, setCurrentNote] = useState(notes[selectedNote]);

  return (
    <main>
      <Sidebar noteArray={notes} currentNotePos={selectedNote} />
      <Editor />
    </main>
  )
}

export default App
