const express = require('express');
const noteController = require('./../controllers/noteController');

const router = express.Router();

router.route('/').get(noteController.getNotes).post(noteController.createNote);

router
  .route('/:id')
  .delete(noteController.deleteNote)
  .patch(noteController.updateNote);

module.exports = router;
