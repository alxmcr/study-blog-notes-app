import NoteCard from "./NoteCard";
import useReadNotes from "../hooks/useReadNotes";
import NewNoteCard from "./NewNoteCard";
import NewNoteForm from "./NewNoteForm";
import EditNoteForm from "./EditNoteForm";
import { useState } from "react";

const NoteList = () => {
    const [loading, notes, setNotes] = useReadNotes();
    const [idNoteSelected, setIdNoteSelected] = useState(-1);
    const [isVisibleNew, setIsVisibleNew] = useState(false);
    const [isVisibleEdit, setIsVisibleEdit] = useState(false);

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
                    {isVisibleEdit &&
                        <EditNoteForm
                            setIsVisibleEdit={setIsVisibleEdit}
                            setNotes={setNotes}
                            idNoteSelected={idNoteSelected}
                        />
                    }
                    {loading && <span>Notes: Loading...</span>}
                    {
                        notes.map(({ id, text }) =>
                            <NoteCard key={id}
                                id={id}
                                text={text}
                                setNotes={setNotes}
                                setIdNoteSelected={setIdNoteSelected}
                                setIsVisibleEdit={setIsVisibleEdit}
                            />
                        )
                    }

                </div>
            }
        </section>
    )
}

export default NoteList;