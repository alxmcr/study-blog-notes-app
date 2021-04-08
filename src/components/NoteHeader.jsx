import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const NoteHeader = ({ id, setNotes, setIsEditNote }) => {
    const editNote = () => setIsEditNote(true);
    const deleteNote = () => {
        console.log("Deleting...", id);
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
    };
    return (
        <div className="note__header">
            <button
                className="note__button"
                onClick={deleteNote}
            >
                <FontAwesomeIcon icon={faTimesCircle} />
            </button>
            <button
                className="note__button"
                onClick={editNote}
            >
                <FontAwesomeIcon icon={faEdit} />
            </button>
        </div>
    )
}

export default NoteHeader;