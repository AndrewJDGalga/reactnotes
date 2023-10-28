
export default function Editor() {
    return (
        <article className="editor">
            <input type="text" id="editor-titlewindow" defaultValue="New Note"></input>
            <div className="editor-textstyle">
                <button id="editor-bold">Bold</button>
                <button id="editor-italic">Italic</button>
                <button id="editor-underline">Underline</button>
                <button id="editor-strikethrough">Strikethrough</button>
            </div>
            <textarea id="editor-textwindow" defaultValue="Enter note here..." rows="0" colums="0"></textarea>
        </article>
    )
}