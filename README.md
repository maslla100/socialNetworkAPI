# Social Network API

## Description
This project is a backend API for a social network web application where users can share thoughts, react to friends' thoughts, and manage a friend list. It utilizes Express.js for routing, MongoDB as the database, and Mongoose as the ODM. This application demonstrates the use of a NoSQL database to handle large amounts of unstructured data efficiently, providing a flexible schema for a social networking platform.

## Features
- CRUD operations for users: Create, Read, Update, and Delete.
- Users can post thoughts.
- Users can react to thoughts.
- Users can add and remove friends.
- API routes tested with Insomnia.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- Optional JavaScript date library or native JavaScript Date object for timestamp formatting.

## Models and Schema
- **User**: Includes username, email, thoughts (array of Thought model references), and friends (array of User model self-references).
- **Thought**: Includes thoughtText, createdAt timestamp, username (creator), and reactions (array of nested documents created with the Reaction schema).
- **Reaction** (Schema only): Nested document in Thought model containing reactionId, reactionBody, username, and createdAt timestamp.

## API Routes
- `/api/users`: Routes for user operations.
- `/api/thoughts`: Routes for thought operations.
- `/api/thoughts/:thoughtId/reactions`: Routes for adding and removing reactions to thoughts.
- `/api/users/:userId/friends/:friendId`: Routes for managing a user's friend list.

## Getting Started
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Ensure MongoDB is running on your machine.
4. Start the server with `npm start`.
5. Use Insomnia or a similar API testing tool to test the routes.

## Walkthrough Video
[\[Click here for the walkthrough video #1.](https://www.loom.com/share/5f3fe59bb9de43dba3dfa5d5e80b976b?sid=051db7fd-7227-45f1-a132-3c7a5993c13d)]

[\[Click here for the walkthrough video #2.](https://www.loom.com/share/f15b497a3b95417c96297480517297c7?sid=f1f7fdd7-60a3-407a-8579-40c6d722b32d)]




## Installation
To set up this project locally, follow these steps:
1. Ensure that Node.js and MongoDB are installed on your machine.
2. Clone this repository.
3. Run `npm install` to install the required npm packages.
4. Use `npm start` to run the server.

## Usage
Test the API routes using Insomnia or any other API testing tool by accessing the following endpoints:
- Create, read, update, and delete users.
- Post, read, update, and delete thoughts.
- Add and remove reactions to thoughts.
- Add and remove friends.

## Contribution
Feel free to contribute to this project. Please fork the repository and submit a pull request for review.

## License
This project is licensed under the MIT License.

## Questions
For any questions or comments, please contact the main developer of this project.


