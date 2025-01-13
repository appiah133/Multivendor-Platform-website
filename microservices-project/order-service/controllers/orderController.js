const Order = require('../models/order');
const { publishOrderEvent } = require('../config/rabbitmq');

exports.createOrder = async (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  try {
    const newOrder = await Order.create({
      user_id,
      product_id,
      quantity,
      order_status: 'PENDING'
    });

    // Publish event to RabbitMQ
    publishOrderEvent({ type: 'ORDER_CREATED', order_id: newOrder.order_id, user_id: newOrder.user_id });

    res.status(201).json({ order_id: newOrder.order_id, user_id: newOrder.user_id });
  } catch (err) {
    res.status(500).json({ error: 'Error creating order' });
  }
};
