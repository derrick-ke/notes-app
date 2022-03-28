const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
