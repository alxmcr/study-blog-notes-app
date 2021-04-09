import NoteHeader from "./NoteHeader";

const NoteShow = ({ id, text, setNotes }) => {
    return (
        <div className="note note--show" key={id} id={id}>
            <NoteHeader
                id={id}
                setNotes={setNotes}
            />
            <div className="note__body">
                <p className="note__text">{text}</p>
            </div>
        </div>
    )
}

export default NoteShow;