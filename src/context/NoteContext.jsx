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

  return (
    <NoteContext.Provider value={{ notes }}>{children}</NoteContext.Provider>
  );
};

export default NoteContext;
