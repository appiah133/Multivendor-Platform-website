// order-service/publisher.js
const { publishToQueue } = require('./rabbitmq');

const orderPlacedPayload = {
  order_id: '67890',
  user_id: '12345',
  product_ids: ['101', '102'],
  total_price: 99.99,
  timestamp: new Date().toISOString(),
};

(async () => {
  await publishToQueue('Order_Placed', orderPlacedPayload);
})();
