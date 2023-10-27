import { useEffect, useState } from "react"

export default function Sidebar({noteArray, currentNotePos, addNote, removeNote}) {

    function setContent() {
        if(noteArray.length <= 0) return [];

        return noteArray.map((item)=>{
            return <div className="notes_sidebar-note" key={item.id}>
                    <button>{item.title}</button>
                    <button onClick={()=>removeNote(item.id)}>&#x1F5D1;</button>
                </div>
        });
    }

    const [sidebarNotes, setSidebarNotes] = useState(setContent());

    useEffect(()=>{
        setSidebarNotes(setContent)
    }, [noteArray])

    return (
        <aside className="notes_sidebar">
            <button id="notes_sidebar-add_note" onClick={addNote}>+</button>
            {sidebarNotes}
        </aside>
    )
}