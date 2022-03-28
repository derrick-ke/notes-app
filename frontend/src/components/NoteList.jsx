import { useContext } from 'react';
import NoteContext from '../context/NoteContext';
import NoteItem from './NoteItem';
import Card from '../shared/Card';
import Spinner from '../shared/Spinner';

const NoteList = () => {
  const { notes, isLoading } = useContext(NoteContext);

  if (!isLoading && (!notes || notes.length === 0))
    return <Card className='text-center'>No notes</Card>;

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='mt-8'>
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
