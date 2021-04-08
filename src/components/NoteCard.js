import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const Note = ({ id, text = "", setNotes }) => {
    const deleteNote = () => {
        console.log("Deleting...", id);
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
    }
    const editNote = () => {
        console.log("Editing...", id);

        setNotes(prevNotes => {
            let notesUpdated = [...prevNotes];
            const indexNoteToUpdate = notesUpdated.findIndex(note => note.id == id);

            if (indexNoteToUpdate > -1) {
                notesUpdated[indexNoteToUpdate].text = text;
            }

            return notesUpdated;
        })

    }

    return (
        <div className="note note--classic" id={id}>
            <div className="note__actions">
                <button
                    className="note__button note--action"
                    onClick={deleteNote}
                >
                    <FontAwesomeIcon
                        className="note__icon"
                        icon={faTimesCircle}
                    />
                </button>
                <button
                    className="note__button note--action"
                    onClick={editNote}
                >
                    <FontAwesomeIcon
                        className="note__icon"
                        icon={faEdit}
                    />
                </button>
            </div>
            <p className="note__text">{text.toUpperCase()}</p>
        </div>
    )
}

export default Note;