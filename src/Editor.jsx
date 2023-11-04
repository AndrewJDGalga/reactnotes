import { useEffect, useState } from "react"

export default function Editor({noteTitleChange, noteContentsChange, currentNote}) {
    //const [noteChanged, isNoteChanged] = useState(false);

    /*
    let noteTitle = currentNote.title;
    let noteContent = currentNote.content;

    useEffect(()=>{
        noteTitle = currentNote.title;
        noteContent = currentNote.content;
        console.log("note changed and seen by editor");
        //isNoteChanged(true);
    }, [currentNote]);
*/

    //defaultValue={noteTitle}
    //defaultValue={noteContent}
    //rows="0" colums="0"

    return (
        <article className="editor">
            <input type="text" id="editor-titlewindow"  value={currentNote.title} onChange={noteTitleChange}></input>
            <div className="editor-textstyle">
                <button id="editor-bold">Bold</button>
                <button id="editor-italic">Italic</button>
                <button id="editor-underline">Underline</button>
                <button id="editor-strikethrough">Strikethrough</button>
            </div>
            <textarea id="editor-textwindow" value={currentNote.content} onChange={noteContentsChange}></textarea>
        </article>
    )
}