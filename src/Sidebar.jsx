
export default function Sidebar({noteArray, currentNotePos}) {
    console.log(noteArray[currentNotePos].title);

    const notes = noteArray.map((item)=>{
        return <h3 key={item.id}>{item.title}</h3>
    })

    return (
        <aside>
            {notes}
        </aside>
    )
}