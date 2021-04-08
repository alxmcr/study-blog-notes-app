import { useState } from "react"

const NoteForm = ({ id, textProps = "", actionName, actionNote, cancel }) => {
    const [text, setText] = useState(textProps);
    const handletext = (e) => setText(e.target.value);

    return (
        <div className="note" id={id}>
            <h2 className="note__heading">{actionName}</h2>
            <form onSubmit={actionNote} className="note__form">
                <div className="note__field">
                    <label
                        htmlFor="note__input"
                        className="note__label">Text for your note</label>
                    <input type="text"
                        className="note__input"
                        name="note__input"
                        id="note__input"
                        value={text}
                        onChange={handletext}
                        required
                    />
                </div>
                <div className="note__buttons">
                    <input type="submit"
                        className="note__button note__button--primary"
                        value="Save"
                    />
                    <input type="button"
                        className="note__button note__button--secondary"
                        value="Cancel"
                        onClick={cancel}
                    />
                </div>
            </form>
        </div>
    )
}

export default NoteForm;