const amqp = require('amqplib');

let channel = null;

const connectRabbitMQ = async () => {
  const connection = await amqp.connect('amqp://rabbitmq');
  channel = await connection.createChannel();
  await channel.assertQueue('PRODUCT_EVENTS');
  console.log("Product Service connected to RabbitMQ!");

  // Listen for any incoming events (optional)
  channel.consume('PRODUCT_EVENTS', (message) => {
    const event = JSON.parse(message.content.toString());
    console.log(`Received event: ${event.type}`);
  });
};

module.exports = { connectRabbitMQ };
