
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database');
require('dotenv').config(); // Load environment variables

const app = express();
const cors = require('cors');

// Allow requests from specific origin (your frontend)
app.use(cors({ origin: 'http://localhost:3000' }));

// For all routes
app.use(express.json());


// Example routes
app.get('/auth/login', (req, res) => {

  // Your login logic
  res.status(200).json({ message: 'login successful' });
});
// Other routes...


app.options('*', cors()); // Preflight handling for all routes


 // Middleware
app.use(bodyParser.json());
app.use('/auth', authRoutes);


// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
    // Sync the database
    return sequelize.sync();
  })
  .then(() => {
    // Start the server
    app.listen(5000, () => {
      console.log('Authentication service running on port 5000');
    });
  })
  .catch(err => {
    console.error('Failed to connect to the database:', err);
  });

