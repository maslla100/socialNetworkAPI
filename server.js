
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Setting up the port for the application
const PORT = process.env.PORT || 3000;

// Creating an instance of express
const app = express();

// Middlewares for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using the API routes
app.use(routes);

// Connecting to MongoDB
// Ensure you have a .env file or replace the process.env.CONNECTION_STRING with your MongoDB connection string directly
mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost/socialmedia', {

});

// Logging mongoose queries for debugging
mongoose.set('debug', true);

// Starting the server and listening on the specified port
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
