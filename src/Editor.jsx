
export default function Editor() {
    return (
        <article className="editor">
            <div className="editor-textstyle">
                <button>Bold</button>
                <button>Italic</button>
                <button>Underline</button>
                <button>Strikethrough</button>
            </div>
            <textarea id="editor-textwindow" defaultValue="Enter note here..." rows="0" colums="0"></textarea>
        </article>
    )
}