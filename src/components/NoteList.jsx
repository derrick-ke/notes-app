import { useContext } from 'react';
import NoteContext from '../context/NoteContext';
import NoteItem from './NoteItem';
import Card from '../shared/Card';

const NoteList = () => {
  const { notes } = useContext(NoteContext);

  if (!notes || notes.length === 0)
    return <Card className='text-center'>No notes</Card>;

  return (
    <div className='mt-8'>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
