const Note = require('../models/Note');

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });

    res.status(200).json({
      notes,
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: error,
    });
  }
};

exports.createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);

    res.status(201).json({
      note,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Create failed',
    });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
    });

    console.log(note);

    if (!note) {
      return new Error('Note does not exist');
    }

    res.status(200).json({
      note,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Update failed',
    });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error,
    });
  }
};
