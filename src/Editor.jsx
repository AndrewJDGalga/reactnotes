export default function Editor({noteTitleChange, noteContentsChange, currentNoteTitle, currentNoteContent}) {

    return (
        <article className="editor">
            <input type="text" id="editor-titlewindow"  value={currentNoteTitle} onChange={noteTitleChange}></input>
            <textarea id="editor-textwindow" value={currentNoteContent} onChange={noteContentsChange}></textarea>
        </article>
    )
}