import { useState } from 'react';
import './App.css';
import NewNoteCard from "./components/NewNoteCard";
import NewNoteForm from "./components/NewNoteForm";
import EditNoteForm from "./components/EditNoteForm";
import NoteList from './components/NoteList';
import useReadNotes from './hooks/useReadNotes';

function App() {
  const [loading, notes, setNotes] = useReadNotes();
  const [idNoteSelected, setIdNoteSelected] = useState(-1);
  const [isVisibleNew, setIsVisibleNew] = useState(false);
  const [isVisibleEdit, setIsVisibleEdit] = useState(false);

  return (
    <div className="App">
      <h1>Notes</h1>
      <section>
        <NewNoteCard
          setIsVisibleNew={setIsVisibleNew}
        />
        {isVisibleNew &&
          <NewNoteForm
            setIsVisibleNew={setIsVisibleNew}
            notes={notes}
            setNotes={setNotes}
          />
        }
        {isVisibleEdit &&
          <EditNoteForm
            setIsVisibleEdit={setIsVisibleEdit}
            setNotes={setNotes}
            idNoteSelected={idNoteSelected}
          />
        }
      </section>
      <section>
        <NoteList
          loading={loading}
          notes={notes}
          setNotes={setNotes}
          setIdNoteSelected={setIdNoteSelected}
          setIsVisibleEdit={setIsVisibleEdit}
        />
      </section>
    </div>
  );
}

export default App;
