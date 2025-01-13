const { publishToQueue } = require('../config/rabbitmq');

const sendNotificationMessage = async (notificationData) => {
    await publishToQueue('Notification', notificationData);
};

module.exports = { sendNotificationMessage };
