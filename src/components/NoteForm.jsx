import { useState, useContext, useEffect } from 'react';
import Card from '../shared/Card';
import NoteContext from '../context/NoteContext';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { addNote, noteEdit } = useContext(NoteContext);

  useEffect(() => {
    if (noteEdit.edit === true) {
      setDisabled(false);
      setTitle(noteEdit.item.title);
      setDescription(noteEdit.item.description);
    }
  }, [noteEdit]);

  const handleChange = (e) => {
    if (description === '' || description.trim().length === 0) {
      setDisabled(true);
    }

    setDisabled(false);
    setTitle((prev) => (e.target.name === 'title' ? e.target.value : prev));
    setDescription((prev) =>
      e.target.name === 'description' ? e.target.value : prev
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = { title, description };
    addNote(note);
    setDisabled(true);
    setTitle('');
    setDescription('');
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <input
          className='appearance-none  rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
          type='text'
          placeholder='Title'
          onChange={handleChange}
          name='title'
          value={title}
        />
        <textarea
          className='appearance-none border rounded w-full py-8 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
          placeholder='Note...'
          name='description'
          onChange={handleChange}
          value={description}
        />
        <button
          className={` rounded px-12 py-3 text-lg font-bold text-white 
            ${disabled ? 'disabled bg-gray-300 ' : 'bg-blue-400'}
          `}
          type='submit'
          disabled={disabled}
        >
          Save
        </button>
      </form>
    </Card>
  );
};

export default NoteForm;
