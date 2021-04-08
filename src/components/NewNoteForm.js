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
        <div className="container__form">
            <h2>New Note</h2>
            <form onSubmit={saveNote}
                className="note note__form  note__form--new">
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
                        onClick={closeNewNoteForm}
                    />
                </div>
                {error && <p className="note__message--error">{error}</p>}
                {saving && <p className="note__message">Saving new note...</p>}
            </form>
        </div>
    )
}

export default NewNoteForm;