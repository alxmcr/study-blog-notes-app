import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const NoteShow = ({ id, text = "" }) => {
    return (
        <div className="note" id={id}>
            <div className="note__header">
                <button className="note__button">
                    <FontAwesomeIcon icon={faTimesCircle} />
                </button>
                <button className="note__button">
                    <FontAwesomeIcon icon={faEdit} />
                </button>
            </div>
            <div className="note__body">
                <p className="note__text">{text.toUpperCase()}</p>
            </div>
        </div>
    )
}

export default NoteShow;