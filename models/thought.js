const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReactionSchema = require('./Reaction'); // Importing the Reaction schema

// Thought Schema
const ThoughtSchema = new Schema({
    // The thought text
    thoughtText: {
        type: String,
        required: true,
        minlength: 1, // Ensures the thought is not empty
        maxlength: 280 // Limits thought to 280 characters
    },
    // Timestamp for when the thought was created
    createdAt: {
        type: Date,
        default: Date.now,
        // Getter method to format the timestamp on query
        get: createdAtVal => createdAtVal.toISOString()
    },
    // The username of the user who created the thought
    username: {
        type: String,
        required: true
    },
    // Array of reactions, using the ReactionSchema for structure
    reactions: [ReactionSchema]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// Virtual called reactionCount to retrieve the length of the thought's reactions array field on query
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Creating the Thought model from the schema
const Thought = mongoose.model('Thought', ThoughtSchema);

// Exporting the Thought model
module.exports = Thought;
