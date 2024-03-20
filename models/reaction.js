// Importing the necessary module from mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining the Reaction Schema
const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(), // Generates a new ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280, // Maximum length for the reaction body
    },
    username: {
        type: String,
        required: true, // Username is required for a reaction
    },
    createdAt: {
        type: Date,
        default: Date.now, // Sets default value to the current timestamp
        get: createdAtVal => createdAtVal.toISOString(), // Formats the timestamp upon query
    },
}, {
    toJSON: {
        getters: true, // Activates getters for virtuals
    },
});

// Exporting the ReactionSchema for use in other models
module.exports = ReactionSchema;
