import useReadNotes from "../hooks/useReadNotes"
import NoteHeader from './NoteHeader';

const NoteList = () => {
    const [loading, notes = [], setNotes] = useReadNotes();

    return (
        <section className="notes">
            {loading && <p className="notes__loading">Notes are loading...</p>}
            {
                notes.map(({ id, text = "" }) =>
                    <div className="note" key={id} id={id}>
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