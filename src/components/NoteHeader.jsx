import { db } from '../firebaseConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const NoteHeader = ({ id, setNotes }) => {
    const deleteNote = () => {

        db.collection("notes").doc(id).delete().then(() => {
            console.log("Note successfully deleted!");
            setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
        }).catch((error) => {
            console.error("Error removing note: ", error);
        });

    };
    return (
        <div className="note__header">
            <button
                className="note__button"
                onClick={deleteNote}
            >
                <FontAwesomeIcon icon={faTimesCircle} />
            </button>
        </div>
    )
}

export default NoteHeader;