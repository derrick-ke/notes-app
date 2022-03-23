import { useState } from 'react';
import Card from '../shared/Card';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    if (description.trim().length === 0 || title.trim().length === 0) {
      setDisabled(true);
    }

    setDisabled(false);

    setTitle(() => e.target.name === 'title');
    setDescription(() => e.target.name === 'description');
  };

  return (
    <Card>
      <form>
        <input
          className='appearance-none  rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
          type='text'
          placeholder='Title'
          onChange={handleChange}
          name='title'
        />
        <textarea
          className='appearance-none border rounded w-full py-8 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
          placeholder='Note...'
          onChange={handleChange}
        />
        <button
          className='rounded bg-blue-400 px-12 py-3 text-lg font-bold text-white disabled:'
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
