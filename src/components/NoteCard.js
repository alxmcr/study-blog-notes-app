const Note = ({ id, text }) => {
    return (
        <div className="note note--classic" id={id}>
            <p className="note__text">{text}</p>
        </div>
    )
}

export default Note;