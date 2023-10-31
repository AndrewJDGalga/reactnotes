import { useEffect, useState } from "react"
import ToggleSwitch from "./ToggleSwitch";

export default function Sidebar({noteArray, currentNotePos, addNote, removeNote}) {
    const [darkMode, setDarkMode] = useState([getComputedStyle(root).getPropertyValue('--bg-color'), getComputedStyle(root).getPropertyValue('--txt-color')]);

    function setContent() {
        if(noteArray.length <= 0) return [];

        return noteArray.map((item)=>{
            return <div className={"notes_sidebar-note " + (item.selected && "notes_sidebar-note_selected")} key={item.id}>
                    <button onClick={()=>currentNotePos(item.id)}>{item.title}</button>
                    <button onClick={()=>removeNote(item.id)}>&#x1F5D1;</button>
                </div>
        });
    }

    const [sidebarNotes, setSidebarNotes] = useState(setContent());

    useEffect(()=>{
        setSidebarNotes(setContent)
    }, [noteArray])

    function switchDark() {
        console.log(darkMode);
    }

    return (
        <aside className="notes_sidebar">
            <ToggleSwitch effectFunction={switchDark} />
            <button id="notes_sidebar-add_note" onClick={addNote}>+</button>
            {sidebarNotes}
        </aside>
    )
}