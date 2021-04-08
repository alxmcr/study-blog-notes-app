import { db } from '../firebaseConfig'
import { useState } from "react"

const NoteForm = ({ setNotes, setIsVisibleNew, setSaving }) => {
    const [text, setText] = useState("");
    const handletext = (e) => setText(e.target.value);
    const cancelNote = () => setIsVisibleNew(false);

    const [error, setError] = useState(null);
    const saveNote = (e) => {
        e.preventDefault();
        setSaving(true);

        // Add a new document in collection "notes"
        let newNote = { text, createdAt: new Date() };
        db.collection("notes")
            .add({ text, createdAt: new Date() })
            .then(({ id }) => {
                newNote.id = id;
                setNotes(prevNotes => [newNote, ...prevNotes])
                setIsVisibleNew(false);
                setSaving(false);
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
                setError(error);
            });
    }

    return (
        <div className="note note--create">
            <h2 className="note__heading">New Note</h2>
            <form onSubmit={saveNote} className="note__form">
                <div className="note__field">
                    <label
                        htmlFor="note__input"
                        className="note__label">Text for your note</label>
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
                    <button type="submit"
                        className="note__button note__button--create">Create</button>
                    <button type="submit"
                        className="note__button note__button--cancel"
                        onClick={cancelNote}>Cancel</button>
                </div>
            </form>
            {error && <p className="note__message--error">{error}</p>}

        </div>
    )
}

export default NoteForm;