const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers/thoughtController');


// Route to get all thoughts
router.get('/', thoughtController.getAllThoughts);

// Route to get a single thought by id
router.get('/:id', thoughtController.getThoughtById);

// Route to create a new thought
// Requires body data for the thought (e.g., thoughtText, username)
router.post('/', thoughtController.createThought);

// Route to update an existing thought by id
// Requires body data with updates to the thought (e.g., thoughtText)
router.put('/:id', thoughtController.updateThought);

// Route to delete a thought by id
router.delete('/:id', thoughtController.deleteThought);

// Route to add a reaction to a thought
// The thought id is specified in the URL, and reaction data is provided in the body
router.post('/:thoughtId/reactions', thoughtController.addReactionToThought);

// Route to remove a reaction from a thought
// Both the thought id and the reaction id are specified in the URL
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.removeReactionFromThought);

module.exports = router;
