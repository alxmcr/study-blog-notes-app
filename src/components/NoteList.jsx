import { useState } from "react";
import useReadNotes from "../hooks/useReadNotes"
import NoteHeader from './NoteHeader';
import NoteForm from './NoteForm';

const NoteList = () => {
    const [loading, notes = [], setNotes] = useReadNotes();
    const [isEditNote, setIsEditNote] = useState(false);
    const updateNote = (id) => console.log("Update...", id);
    const cancelEdit = () => setIsEditNote(false);

    return (
        <section className="notes">
            {loading && <p className="notes__loading">Notes are loading...</p>}
            {
                notes.map(({ id, text = "" }) =>
                    <div className="note__cards" key={id} id={id}>
                        <div className="note">
                            <NoteHeader
                                id={id}
                                setNotes={setNotes}
                                setIsEditNote={setIsEditNote}
                            />
                            <div className="note__body">
                                <p className="note__text">{text}</p>
                            </div>
                        </div>
                        {isEditNote &&
                            <NoteForm
                                id={id}
                                textProps={text}
                                actionName="Edit Note"
                                actionNote={(e) => {
                                    e.preventDefault();
                                    updateNote(id);
                                }}
                                cancel={cancelEdit}
                            />
                        }
                    </div>
                )
            }
        </section>
    )
}

export default NoteList;