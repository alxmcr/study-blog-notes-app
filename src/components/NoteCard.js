import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const Note = ({ id, text = "", setNotes, setIsVisibleEdit, setIdNoteSelected }) => {
    const deleteNote = () => {
        console.log("Deleting...", id);
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
    }

    const openEditNoteForm = () => {
        setIdNoteSelected(id);
        setIsVisibleEdit(true);
    };

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
                    onClick={openEditNoteForm}
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