// product-service/consumer.js
const { consumeQueue } = require('./rabbitmq');

function updateInventory(payload) {
  console.log('Inventory updated for order:', payload);
  // Inventory adjustment logic
}

(async () => {
  await consumeQueue('Order_Placed', updateInventory);
})();
