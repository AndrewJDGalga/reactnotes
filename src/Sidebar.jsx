import { useEffect, useState } from "react"

export default function Sidebar({noteArray, currentNotePos, addNote}) {

    function setContent() {
        return noteArray.map((item)=>{
            return <h3 key={item.id}>{item.title}</h3>
        });
    }

    const [sidebarNotes, setSidebarNotes] = useState(setContent());

    useEffect(()=>{
        setSidebarNotes(setContent)
    }, [noteArray])

    return (
        <aside>
            <button onClick={addNote}>+</button>
            {sidebarNotes}
        </aside>
    )
}