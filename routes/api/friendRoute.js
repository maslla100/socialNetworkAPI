const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

// Route to add a new friend to a user's friend list
// Assuming you have a method in your userController for adding a friend
router.post('/:userId/friends/:friendId', userController.addFriend);

// Route to remove a friend from a user's friend list
// Assuming you have a method in your userController for removing a friend
router.delete('/:userId/friends/:friendId', userController.removeFriend);

module.exports = router;
