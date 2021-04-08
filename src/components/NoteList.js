import NoteCard from "./NoteCard";


const NoteList = ({ loading, notes, setNotes, setIdNoteSelected, setIsVisibleEdit }) => {
    return (
        <>
            {loading && <span>Notes: Loading...</span>}
            { notes && <div className="notes">
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
        </>

    )
}

export default NoteList;