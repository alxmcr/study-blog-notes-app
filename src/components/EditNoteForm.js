import { db } from '../firebaseConfig';
import { useState } from "react";

const EditNoteForm = ({ setIsVisibleEdit, setNotes, idNoteSelected }) => {
    const [text, setText] = useState("");
    const [updating, setUpdating] = useState(false);
    const handletext = (e) => setText(e.target.value);
    const closeEditNoteForm = () => setIsVisibleEdit(false);
    const updateNote = (e) => {
        e.preventDefault();
        setUpdating(true);
        console.log("Editing...", idNoteSelected);

        setNotes(prevNotes => {
            let notesUpdated = [...prevNotes];
            const indexNoteToUpdate = notesUpdated.findIndex(note => note.id === idNoteSelected);

            if (indexNoteToUpdate > -1) {
                notesUpdated[indexNoteToUpdate].text = text;
            }

            return notesUpdated;
        })
        setUpdating(false);
    }

    return (
        <div className="note note--edit">
            <h2>Edit Note</h2>
            <form onSubmit={updateNote}
                className="note__form note__form--edit">
                <div className="note__field">
                    <label htmlFor="note__input" className="note__label">Text for your note</label>
                    <input type="text"
                        className="note__input"
                        name="note__input"
                        id="note__input"
                        value={text}
                        onChange={handletext}
                        required
                    />
                </div>
                <div className="note__buttons">
                    <input type="submit"
                        className="note__button note__button--primary"
                        value="Update note"
                    />
                    <input type="button"
                        className="note__button note__button--secondary"
                        value="Cancel"
                        onClick={closeEditNoteForm}
                    />
                </div>
                {updating && <p className="note__message">Updating note...</p>}
            </form>
        </div>
    )
}

export default EditNoteForm;