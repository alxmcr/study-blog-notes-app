const NewNoteCard = ({ setIsVisibleNew }) => {
    const openNewNoteForm = () => setIsVisibleNew(true);

    return (
        <div className="note--empty">
            <p className="note__text">Add new note</p>
            <button
                className="note__new"
                onClick={openNewNoteForm}
            >+</button>
        </div>
    )
}

export default NewNoteCard;