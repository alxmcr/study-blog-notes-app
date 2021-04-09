// notes-app/src/components/NoteList.jsx
import { useState } from "react";
import useReadNotes from "../hooks/useReadNotes"
import NoteActionCard from "./NoteActionCard";
import NoteForm from "./NoteForm";
import NoteShow from "./NoteShow";

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
                    <NoteShow
                        key={id}
                        id={id}
                        text={text}
                        setNotes={setNotes}
                    />
                )
            }
        </section>
    )
}

export default NoteList;