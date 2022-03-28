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
    const response = await fetch('http://localhost:5000/api/note');

    const data = await response.json();

    setNotes(data.data);
    setIsLoading(false);
  };

  const addNote = async (note) => {
    const response = await fetch('http://localhost:5000/api/note', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: note,
    });

    const data = await response.json();

    setNotes((prev) => [data, ...prev]);
  };

  const deleteNote = (note) => {
    setNotes((prev) => prev.filter((item) => item._id !== note._id));
  };

  const editNote = (item) => {
    setNoteEdit({
      edit: true,
      item,
    });
  };

  const updateNote = (id, note) => {
    setNotes((prev) =>
      prev.map((item) => (item._id === id ? { ...item, ...note } : item))
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
