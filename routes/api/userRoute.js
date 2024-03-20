const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// Route to get all users
router.route('/').get(getAllUsers);

// Route to create a new user
router.route('/').post(createUser);

// Routes for operations on a specific user by id
router
    .route('/:id')
    .get(getUserById) // Get a user by ID
    .put(updateUser)  // Update a user by ID
    .delete(deleteUser); // Delete a user by ID

// Routes for adding and removing a friend from a user's friend list
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)    // Add a friend
    .delete(removeFriend); // Remove a friend

module.exports = router;
