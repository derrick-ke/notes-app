import { useState, createContext } from 'react';

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Shopping',
      description: 'Dont forget to buy milk',
    },
    {
      id: 2,
      title: '',
      description: 'Wash dishes',
    },
    {
      id: 3,
      title: 'Goals',
      description: 'Read a book',
    },
  ]);
  const [noteEdit, setNoteEdit] = useState({
    edit: false,
    item: {},
  });

  const addNote = (note) => {
    note.id = Math.floor(Math.random() * 1000).toFixed();
    setNotes((prev) => [note, ...prev]);
  };

  const deleteNote = (note) => {
    setNotes((prev) => prev.filter((item) => item.id !== note.id));
  };

  const editNote = (item) => {
    setNoteEdit({
      edit: true,
      item,
    });
  };

  const updateNote = (id, note) => {
    setNotes((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...note } : item))
    );
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, noteEdit, updateNote }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
