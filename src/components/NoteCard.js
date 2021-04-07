const Note = ({ id, text }) => {
    return (
        <div className="note" id={id}>
            <p className="note__text">{text}</p>
        </div>
    )
}

export default Note;