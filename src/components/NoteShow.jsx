const NoteShow = ({ text = "" }) => {
    return (
        <div className="note__body">
            <p className="note__text">{text.toUpperCase()}</p>
        </div>
    )
}

export default NoteShow;