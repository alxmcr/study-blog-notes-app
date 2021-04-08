import { db } from '../firebaseConfig';
import { useState } from "react";

const EditNoteForm = ({ setIsVisibleNew, notes, setNotes }) => {
    const [text, setText] = useState("");
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);
    const handletext = (e) => setText(e.target.value);
    const closeEditNoteForm = () => setIsVisibleNew(false);
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
        <form onSubmit={saveNote}
            className="note note__form note__form--edit">
            <label htmlFor="note__input" className="note__label">Text for your note</label>
            <input type="text"
                className="note__input"
                name="note__input"
                id="note__input"
                value={text}
                onChange={handletext}
                required
            />
            <div className="note__buttons">
                <input type="submit"
                    className="note__button note__button--primary"
                    value="Save note"
                />
                <input type="button"
                    className="note__button note__button--secondary"
                    value="Cancel"
                    onClick={closeEditNoteForm}
                />
            </div>
            {error && <p className="note__message--error">{error}</p>}
            {saving && <p className="note__message">Saving new note...</p>}
        </form>
    )
}

export default EditNoteForm;