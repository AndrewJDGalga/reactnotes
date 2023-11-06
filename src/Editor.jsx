import { useState } from "react"

export default function Editor({noteTitleChange, noteContentsChange, currentNote}) {
    const [boldSet, isBoldSet] = useState(false);

    function textMod(text){
        noteContentsChange(text);
        console.log(text.target.value);
    }

    return (
        <article className="editor">
            <input type="text" id="editor-titlewindow"  value={currentNote.title} onChange={noteTitleChange}></input>
            <div className="editor-textstyle">
                <button id="editor-bold">Bold</button>
                <button id="editor-italic">Italic</button>
                <button id="editor-underline">Underline</button>
                <button id="editor-strikethrough">Strikethrough</button>
            </div>
            <textarea id="editor-textwindow" value={currentNote.content} onChange={textMod}></textarea>
        </article>
    )
}