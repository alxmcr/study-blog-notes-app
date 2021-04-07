import { useState } from "react";

const NewNoteForm = ({ setIsVisibleNew, notes, setNotes }) => {
    const [noteText, setNoteText] = useState("");
    const handleNoteText = (e) => setNoteText(e.target.value);
    const closeNewNoteForm = () => setIsVisibleNew(false);
    const saveNote = (e) => {
        e.preventDefault();
        console.log("Saving a note...", noteText);
        const notesUpdated = [...notes, {
            id: 19999,
            text: noteText
        }]
        setNotes(notesUpdated)
    }

    return (
        <form onSubmit={saveNote} className="note__form">
            <label htmlFor="note__text">Text for your note</label>
            <input type="text"
                name="note__text"
                id="note_text"
                value={noteText}
                onChange={handleNoteText}
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
        </form>
    )
}

export default NewNoteForm;