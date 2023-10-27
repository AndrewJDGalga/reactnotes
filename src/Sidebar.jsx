import { useEffect, useState } from "react"

export default function Sidebar({noteArray, currentNotePos, addNote}) {

    function setContent() {
        return noteArray.map((item)=>{
            return <div key={item.id}>
                    <button>{item.title}</button>
                    <button >&#x1F5D1;</button>
                </div>
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