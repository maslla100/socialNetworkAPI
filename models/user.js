const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Validator function for email
const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// User Schema definition
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true // Trims whitespace from the username
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'], // Uses the validateEmail function to validate the email address
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought' // Establishes a reference to the Thought model
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User' // Reference to the User model itself for the friends list
        }
    ]
}, {
    toJSON: {
        virtuals: true, // Ensures virtuals are included when converting the document to JSON
        getters: true  // Allows the use of getters in the schema
    },
    id: false // Prevents the virtual `id` field from being added alongside `_id`
});

// Virtual for friendCount
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length; // Returns the length of the user's friends array, effectively counting the number of friends
});

// Creating the User model from the schema
const User = mongoose.model('User', UserSchema);

// Exporting the User model
module.exports = User;
