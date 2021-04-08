import useReadNotes from "../hooks/useReadNotes"
import NoteShow from "./NoteShow";

const NoteList = () => {
    const [loading, notes = [], setNotes] = useReadNotes();

    return (
        <section className="notes">
            {loading && <p className="notes__loading">Notes are loading...</p>}
            {
                notes.map(({ id, text }) =>
                    <NoteShow
                        key={id}
                        id={id}
                        text={text}
                    />
                )
            }
        </section>
    )
}

export default NoteList;