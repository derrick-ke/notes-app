import { useContext } from 'react';
import { ImBin, ImPencil } from 'react-icons/im';
import Card from '../shared/Card';
import NoteContext from '../context/NoteContext';

const NoteItem = ({ note }) => {
  const { deleteNote, editNote } = useContext(NoteContext);

  const handleDelete = () => {
    deleteNote(note);
  };

  const handleEdit = () => {
    editNote(note);
  };

  return (
    <Card>
      {note.title && (
        <div className='font-sans text-2xl font-bold mb-4 '>{note.title}</div>
      )}
      <div>{note.description}</div>

      <button className='absolute right-0 top-0 mt-8 mr-16'>
        <ImPencil onClick={handleEdit} />
      </button>
      <button className='absolute right-0 top-0 mt-8 mr-8'>
        <ImBin onClick={handleDelete} />
      </button>
    </Card>
  );
};

export default NoteItem;
