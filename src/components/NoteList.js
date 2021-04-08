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
            {notes &&
                <div className="notes">
                    <NewNoteCard
                        setIsVisibleNew={setIsVisibleNew}
                        />
                    {isVisibleNew &&
                        <NewNoteForm
                        setIsVisibleNew={setIsVisibleNew}
                        notes={notes}
                        setNotes={setNotes}
                        />
                    }
                    {loading && <span>Notes: Loading...</span>}
                    {
                        notes.map(({ id, text }) =>
                            <NoteCard key={id}
                                id={id}
                                text={text}
                            />
                        )
                    }

                </div>
            }
        </section>
    )
}

export default NoteList;