const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); // Assuming you have an index.js file in a routes directory to handle all your routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Replace 'your_mongodb_connection_string' with your actual connection string
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
