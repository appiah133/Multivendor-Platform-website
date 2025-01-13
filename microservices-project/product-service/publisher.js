// product-service/publisher.js
const { publishToQueue } = require('./rabbitmq');

const inventoryUpdatedPayload = {
  product_id: '101',
  stock_quantity: 20,
  operation: 'decrease',
  timestamp: new Date().toISOString(),
};

(async () => {
  await publishToQueue('Inventory_Updated', inventoryUpdatedPayload);
})();
