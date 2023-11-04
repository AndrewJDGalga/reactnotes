
export default function Editor({noteTitle, noteContents, currentNote}) {

    return (
        <article className="editor">
            <input type="text" id="editor-titlewindow" defaultValue={currentNote.title} onChange={noteTitle}></input>
            <div className="editor-textstyle">
                <button id="editor-bold">Bold</button>
                <button id="editor-italic">Italic</button>
                <button id="editor-underline">Underline</button>
                <button id="editor-strikethrough">Strikethrough</button>
            </div>
            <textarea id="editor-textwindow" defaultValue={currentNote.content} rows="0" colums="0" onChange={noteContents}></textarea>
        </article>
    )
}