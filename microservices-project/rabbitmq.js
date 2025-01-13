const amqp = require('amqplib');

let channel = null;

const connectRabbitMQ = async () => {
  const connection = await amqp.connect('amqp://rabbitmq');
  channel = await connection.createChannel();
  await channel.assertQueue('USER_EVENTS');
  console.log("RabbitMQ connected to Authentication Service!");

  // You can listen for messages here (if required)
};

const publishUserEvent = (event) => {
  if (channel) {
    channel.sendToQueue('USER_EVENTS', Buffer.from(JSON.stringify(event)));
    console.log(`Published event: ${event.type}`);
  }
};

module.exports = { connectRabbitMQ, publishUserEvent };
