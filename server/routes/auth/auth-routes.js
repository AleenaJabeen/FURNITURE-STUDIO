// Import the Express library to create and manage routes
const express = require('express');

// Import the `registerUser` function from the authentication controller
// The `registerUser` function will handle the logic for user registration
const { registerUser,loginUser,logoutUser,authMiddleware } = require('../../controllers/auth/auth-controller');

// Create a new Router instance using Express
// The Router will be used to define and manage specific routes
const router = express.Router();

// Define a POST route for '/register'
// When a POST request is made to '/register', the `registerUser` function is invoked
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/check-auth',authMiddleware,(req,res)=>{
    const user=req.user;
    res.status(200).json({
        success:true,
    message:"Authenticated User",
    user,
    
    });
});



// Export the router so it can be used in other parts of the application
module.exports = router;
