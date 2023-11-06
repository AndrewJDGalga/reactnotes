export default function Editor({noteTitleChange, noteContentsChange, currentNote}) {
    return (
        <article className="editor">
            <input type="text" id="editor-titlewindow"  value={currentNote.title} onChange={noteTitleChange}></input>
            <textarea id="editor-textwindow" value={currentNote.content} onChange={noteContentsChange}></textarea>
        </article>
    )
}