import NoteCard from "./NoteCard";
import useReadNotes from "../hooks/useReadNotes";
import NewNoteCard from "./NewNoteCard";
import NewNoteForm from "./NewNoteForm";
import { useState } from "react";

const NoteList = () => {
    const [loading, notes, setNotes] = useReadNotes();
    const [isVisibleNew, setIsVisibleNew] = useState(false);


    return (
        <section className="container">
            {loading && <span>Notes: Loading...</span>}
            {notes &&
                <div className="notes">
                    {
                        notes.map(({ id, text }) =>
                            <NoteCard key={id}
                                id={id}
                                text={text}
                            />
                        )
                    }
                    {isVisibleNew &&
                        <NewNoteForm
                            setIsVisibleNew={setIsVisibleNew}
                            notes={notes}
                            setNotes={setNotes}
                        />
                    }
                    <NewNoteCard
                        setIsVisibleNew={setIsVisibleNew}
                    />
                </div>
            }
        </section>
    )
}

export default NoteList;