// auth-service/consumer.js
const { consumeQueue } = require('./rabbitmq');

function handleNotification(payload) {
  console.log('Notification received:', payload);
}

(async () => {
  await consumeQueue('Notification', handleNotification);
})();
