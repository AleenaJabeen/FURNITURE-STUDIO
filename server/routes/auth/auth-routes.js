// Import the Express library to create and manage routes
const express = require('express');

// Import the `registerUser` function from the authentication controller
// The `registerUser` function will handle the logic for user registration
const { registerUser } = require('../../controllers/auth/auth-controller');

// Create a new Router instance using Express
// The Router will be used to define and manage specific routes
const router = express.Router();

// Define a POST route for '/register'
// When a POST request is made to '/register', the `registerUser` function is invoked
router.post('/register', registerUser);

// Export the router so it can be used in other parts of the application
module.exports = router;
