import { useState, useEffect, createContext } from 'react';

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noteEdit, setNoteEdit] = useState({
    edit: false,
    item: {},
  });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await fetch('http://localhost:5000/api/notes');

    const data = await response.json();

    setNotes(data.notes);
    setIsLoading(false);
  };

  const addNote = async (note) => {
    let response = await fetch('http://localhost:5000/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });

    const data = await response.json();

    setNotes((prev) => [data.note, ...notes]);
  };

  const deleteNote = async (note) => {
    await fetch(`http://localhost:5000/api/notes/${note._id}`, {
      method: 'DELETE',
    });

    setNotes((prev) => prev.filter((item) => item._id !== note._id));
  };

  const editNote = (item) => {
    setNoteEdit({
      edit: true,
      item,
    });
  };

  const updateNote = async (id, note) => {
    const response = await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });

    const data = await response.json();

    setNotes((prev) =>
      prev.map((item) => (item._id === id ? { ...item, ...data.note } : item))
    );
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        editNote,
        noteEdit,
        updateNote,
        isLoading,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
