// const express = require('express');
// const bodyParser = require('body-parser');
// // const { connectRabbitMQ } = require('./config/rabbitmq');
// const productRoutes = require('./routes/productRoutes');
// require('dotenv').config();
// const sequelize = require('./config/database');  // Import sequelize instance

// const app = express();

// const cors = require('cors');
// app.use(bodyParser.json());

// // Middleware for JSON parsing
// app.use(express.json());

// // CORS configuration (allow requests from frontend origin)
// app.use(cors({ origin: 'http://localhost:3000' }));

// // Handle preflight requests for all routes
// app.options('*', cors());





// // connectRabbitMQ();  // Connect RabbitMQ

// app.use('/product', productRoutes);  // Register product routes

// // Test the database connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Database connection established successfully.');
//     // Sync the database
//     return sequelize.sync();
//   })
//   .then(() => {
//     // Start the server
//     app.listen(5001, () => {
//       console.log('Product Service running on port 5001');
//     });
//   })
//   .catch(err => {
//     console.error('Failed to connect to the database:', err);
//   });


const express = require('express');
const bodyParser = require('body-parser');
// const { connectRabbitMQ } = require('./config/rabbitmq');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();
const sequelize = require('./config/database');  // Import sequelize instance

const app = express();

const cors = require('cors');
app.use(bodyParser.json());

// Middleware for JSON parsing
app.use(express.json());

// CORS configuration (allow requests from frontend origin)
app.use(cors({ origin: 'http://localhost:3000' }));

// Handle preflight requests for all routes
app.options('*', cors());

// connectRabbitMQ();  // Connect RabbitMQ

app.use('/product', productRoutes);  // Register product routes

// Test the database connection and sync schema
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection established successfully.');

    // Sync the database schema
    return sequelize.sync({ alter: true });  // Use alter to update schema
  })
  .then(() => {
    console.log('Database synchronized successfully.');

    // Start the server
    app.listen(5001, () => {
      console.log('Product Service running on port 5001');
    });
  })
  .catch(err => {
    console.error('Failed to connect to the database or synchronize schema:', err);
  });
