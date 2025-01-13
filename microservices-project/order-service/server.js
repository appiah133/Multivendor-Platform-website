
// const express = require('express'); // Import Express
// const bodyParser = require('body-parser'); // Import Body-Parser
// require('dotenv').config(); // Load environment variables
// const sequelize = require('./config/database'); // Import Sequelize configuration

// // Initialize the Express app
// const app = express();

// // Use Body-Parser middleware to parse JSON
// app.use(bodyParser.json());

// // Test database connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('✅ Database connection established successfully.');

//     // Start the server
//     const PORT = process.env.PORT || 5000; // Use port from .env or default to 5000
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch(err => {
//     console.error('❌ Failed to connect to the database:', err.message);
//   });



const express = require('express');
const { connectRabbitMQ, closeRabbitMQ } = require('./config/rabbitmq');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/api', orderRoutes);

// Connect to RabbitMQ
connectRabbitMQ();

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Received SIGINT, shutting down...');
  await closeRabbitMQ();
  process.exit(0);
});

app.listen(5000, () => {
  console.log('Order service running on port 5000');
});
