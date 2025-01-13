// order-service/consumer.js
const { consumeQueue } = require('./rabbitmq');

function handlePaymentStatus(payload) {
  console.log('Payment status received:', payload);
}

(async () => {
  await consumeQueue('Payment_Status', handlePaymentStatus);
})();
