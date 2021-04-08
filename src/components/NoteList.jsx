import { useState } from "react";
import useReadNotes from "../hooks/useReadNotes"
import NoteActionCard from "./NoteActionCard";
import NoteForm from "./NoteForm";
import NoteHeader from './NoteHeader';

const NoteList = () => {
    const [loading, notes = [], setNotes] = useReadNotes();
    const [isVisibleNew, setIsVisibleNew] = useState(false);
    const [saving, setSaving] = useState(false);

    return (
        <section className="notes">
            <NoteActionCard
                setIsVisibleNew={setIsVisibleNew}
            />
            {isVisibleNew &&
                <>
                    <NoteForm
                        setNotes={setNotes}
                        setIsVisibleNew={setIsVisibleNew}
                        setSaving={setSaving}
                    />
                    {saving && <p className="note__message">Saving new note...</p>}
                </>
            }
            {loading &&
                <p className="notes__loading">Notes are loading...</p>
            }
            {
                notes.map(({ id, text = "" }) =>
                    <div className="note note--show" key={id} id={id}>
                        <NoteHeader
                            id={id}
                            setNotes={setNotes}
                        />
                        <div className="note__body">
                            <p className="note__text">{text}</p>
                        </div>
                    </div>
                )
            }
        </section>
    )
}

export default NoteList;