import { db } from '../firebaseConfig';
import { useState } from "react";

const NewNoteForm = ({ setIsVisibleNew, notes, setNotes }) => {
    const [text, setText] = useState("");
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);
    const handletext = (e) => setText(e.target.value);
    const closeNewNoteForm = () => setIsVisibleNew(false);
    const saveNote = (e) => {
        e.preventDefault();
        setSaving(true);

        // Add a new document in collection "notes"
        let newNote = { text, createdAt: new Date() };
        db.collection("notes")
            .add({ text, createdAt: new Date() })
            .then(({ id }) => {
                newNote.id = id;
                setNotes([newNote, ...notes]);
                setIsVisibleNew(false);
                setSaving(false);
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
                setError(error);
            });
    }

    return (
        <form onSubmit={saveNote} className="note__form">
            <label htmlFor="note__text">Text for your note</label>
            <input type="text"
                name="note__text"
                id="note_text"
                value={text}
                onChange={handletext}
            />
            <input type="submit"
                className="note__button--primary"
                value="Save note"
            />
            <input type="button"
                className="note__button--secondary"
                value="Cancel"
                onClick={closeNewNoteForm}
            />
            {error && <p className="note__message--error">{error}</p>}
            {saving && <p className="note__message">Saving new note...</p>}
        </form>
    )
}

export default NewNoteForm;