import { useEffect, useState } from "react"

export default function Sidebar({noteArray, currentNotePos, addNote}) {

    function setContent() {
        return noteArray.map((item)=>{
            return <h3 key={item.id}>{item.title}</h3>
        });
    }

    const [sideNotes, setSideNotes] = useState(setContent());

    return (
        <aside>
            <button onClick={addNote}>+</button>
            {sideNotes}
        </aside>
    )
}