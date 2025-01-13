// // const amqp = require('amqplib');

// // let channel = null;

// // const connectRabbitMQ = async () => {
// //   const connection = await amqp.connect('amqp://rabbitmq');
// //   channel = await connection.createChannel();
// //   await channel.assertQueue('ORDER_EVENTS');
// //   console.log("Order Service connected to RabbitMQ!");

// //   // Listen for any incoming events (optional)
// //   channel.consume('ORDER_EVENTS', (message) => {
// //     const event = JSON.parse(message.content.toString());
// //     console.log(`Received event: ${event.type}`);
// //   });
// // };

// // module.exports = { connectRabbitMQ };




// const amqp = require('amqplib');

// let channel = null;
// let connection = null;

// const connectRabbitMQ = async () => {
//   try {
//     // Connect to RabbitMQ server
//     connection = await amqp.connect('amqp://rabbitmq');  // Ensure 'rabbitmq' is the correct host
//     channel = await connection.createChannel();

//     // Declare queue to ensure it exists
//     await channel.assertQueue('ORDER_EVENTS', { durable: true });
//     console.log("Order Service connected to RabbitMQ!");

//     // Listen for any incoming events
//     channel.consume('ORDER_EVENTS', (message) => {
//       const event = JSON.parse(message.content.toString());
//       console.log(`Received event: ${event.type}`);
      
//       // Acknowledge the message
//       channel.ack(message);
//     });

//   } catch (error) {
//     console.error("Error connecting to RabbitMQ:", error);
//     setTimeout(connectRabbitMQ, 5000); // Reattempt connection after 5 seconds
//   }
// };

// // Graceful shutdown to close RabbitMQ connection and channel
// const closeRabbitMQ = async () => {
//   try {
//     if (channel) {
//       await channel.close();
//     }
//     if (connection) {
//       await connection.close();
//     }
//     console.log('RabbitMQ connection closed gracefully');
//   } catch (error) {
//     console.error('Error closing RabbitMQ connection:', error);
//   }
// };

// module.exports = { connectRabbitMQ, closeRabbitMQ };



const amqp = require('amqplib');

let channel = null;
let connection = null;

const connectRabbitMQ = async () => {
  try {
    // Connect to RabbitMQ server
    connection = await amqp.connect('amqp://rabbitmq');  // Ensure 'rabbitmq' is the correct host
    channel = await connection.createChannel();

    // Declare queue to ensure it exists
    await channel.assertQueue('ORDER_EVENTS', { durable: true });
    console.log("Order Service connected to RabbitMQ!");

    // Listen for any incoming events
    channel.consume('ORDER_EVENTS', (message) => {
      const event = JSON.parse(message.content.toString());
      console.log(`Received event: ${event.type}`);
      
      // Acknowledge the message
      channel.ack(message);
    });

  } catch (error) {
    console.error("Error connecting to RabbitMQ:", error);
    setTimeout(connectRabbitMQ, 5000); // Reattempt connection after 5 seconds
  }
};

// Graceful shutdown to close RabbitMQ connection and channel
const closeRabbitMQ = async () => {
  try {
    if (channel) {
      await channel.close();
    }
    if (connection) {
      await connection.close();
    }
    console.log('RabbitMQ connection closed gracefully');
  } catch (error) {
    console.error('Error closing RabbitMQ connection:', error);
  }
};

module.exports = { connectRabbitMQ, closeRabbitMQ };
