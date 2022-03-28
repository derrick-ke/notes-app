const Note = require('../models/Note');

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json({
      status: 'success',
      results: notes.length,
      data: notes,
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
      status: 'success',
      data: note,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error,
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
