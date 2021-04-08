import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const Note = ({ id, text = "" }) => {
    return (
        <div className="note note--classic" id={id}>
            <div className="note__actions">
                <button className="note__button note--action">
                    <FontAwesomeIcon
                        className="note__icon"
                        icon={faTimesCircle}
                    />
                </button>
                <button className="note__button note--action">
                    <FontAwesomeIcon
                        className="note__icon"
                        icon={faEdit}
                    />
                </button>
            </div>
            <p className="note__text">{text.toUpperCase()}</p>
        </div>
    )
}

export default Note;