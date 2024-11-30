// Import required libraries
const express = require('express'); // Framework for building web applications and APIs.
const mongoose = require('mongoose'); // Library for connecting to and interacting with MongoDB.
const cookieParser = require('cookie-parser'); // Middleware to read and parse cookies from the browser.
const cors = require('cors'); // Middleware to handle Cross-Origin Resource Sharing (CORS).
const authRouter=require('./routes/auth/auth-routes');
const adminProductsRouter = require("./routes/admin/products-routes");

// Create a database connection
mongoose
  .connect('mongodb+srv://aleenajabeen19648:aleena19648@cluster0.6na76.mongodb.net/') // MongoDB connection string.
  .then(() => {
    console.log('MongoDb connected'); // Log a message when the connection is successful.
  })
  .catch(err => console.log(err)); // Log an error if the connection fails.

const app = express(); // Create an Express application instance.
const PORT = process.env.PORT || 5000; // Define the port the server will listen on. Use environment variable or default to 5000.

// Set up CORS to allow requests from a specific origin (front-end URL)
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow requests only from this URL (your front-end).
    methods: ['GET', 'POST', 'DELETE', 'PUT'], // Allow these HTTP methods.
    allowedHeaders: [ // Specify which headers can be sent in requests.
      'Content-Type', 
      'Authorization', 
      'Cache-Control', 
      'Expires', 
      'Pragma'
    ],
    credentials: true // Enable sending cookies and other credentials with requests.
  })
);

// Middleware to read cookies from the front-end
app.use(cookieParser()); // Parse cookies from the browser into an object for easy use in the server.

// Middleware to parse incoming JSON data
app.use(express.json()); // Allows the server to handle JSON data sent in HTTP requests.
app.use('/api/auth',authRouter);
app.use("/api/admin/products", adminProductsRouter);
//when i will go to /api/auth/register it will go to registerUser and same goes for logn
// Start the server and listen for incoming requests
app.listen(PORT, () => console.log(`server is running on port ${PORT}`)); // Log a message indicating the server is running and its port.
