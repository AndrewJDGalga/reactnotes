import { useEffect, useState } from "react"
import ToggleSwitch from "./ToggleSwitch";

export default function Sidebar({noteArray, currentNotePos, addNote, removeNote}) {
    const propCSSBG = '--bg-color', propCSSTXT = '--txt-color';
    const [darkMode, setDarkMode] = useState([getComputedStyle(root).getPropertyValue(propCSSBG), getComputedStyle(root).getPropertyValue(propCSSTXT)]);

    function setContent() {
        if(noteArray.length <= 0) return [];

        return noteArray.map((item)=>{
            return <div className={"notes_sidebar-note " + (item.selected && "notes_sidebar-note_selected")} key={item.id}>
                    <button className="notes_sidebar-note-select" onClick={()=>currentNotePos(item.id)}>{item.title}</button>
                    <button className="notes_sidebar-note-delete" onClick={()=>removeNote(item.id)}>X</button>
                </div>
        });
    }

    const [sidebarNotes, setSidebarNotes] = useState(setContent());

    useEffect(()=>{
        setSidebarNotes(setContent)
    }, [noteArray])

    function switchDark() {
        //console.log(darkMode);
        setDarkMode(prev=>{
            return prev.reverse();
        });
        const root = document.documentElement;
        root.style.setProperty(propCSSTXT,darkMode[0]);
        root.style.setProperty(propCSSBG,darkMode[1]);
    }

    return (
        <aside className="notes_sidebar">
            <ToggleSwitch id="colormode-switch" effectFunction={switchDark} />
            <button id="notes_sidebar-add_note" onClick={addNote}>+</button>
            {sidebarNotes}
        </aside>
    )
}