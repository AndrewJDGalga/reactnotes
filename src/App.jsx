import { useState } from "react";
import Sidebar from "./Sidebar"
import Editor from "./Editor"

function App() {
  const [notes, setNotes] = useState([
    {
        id: 0,
        title: "New Note",
        content: "",
    }]);
  const [selectedNote, setSelectedNote] = useState(0);
  const [currentNote, setCurrentNote] = useState(notes[selectedNote]);

  return (
    <main>
      <Sidebar />
      <Editor />
    </main>
  )
}

export default App
