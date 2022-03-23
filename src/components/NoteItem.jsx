import Card from '../shared/Card';

const NoteItem = ({ note }) => {
  return (
    <Card>
      {note.title && (
        <div className='font-sans text-2xl font-bold mb-4 '>{note.title}</div>
      )}
      <div>{note.description}</div>
    </Card>
  );
};

export default NoteItem;
