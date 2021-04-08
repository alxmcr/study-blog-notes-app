import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const NewNoteCard = ({ setIsVisibleNew }) => {
    const openNewNoteForm = () => setIsVisibleNew(true);

    return (
        <div className="note note--empty">
            <p className="note__text">Add new note</p>
            <button
                className="note__button note__button--new"
                onClick={openNewNoteForm}
            >
                <FontAwesomeIcon className="note__icon" icon={faPlus} />
            </button>
        </div>
    )
}

export default NewNoteCard;