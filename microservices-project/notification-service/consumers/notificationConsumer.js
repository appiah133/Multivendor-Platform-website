const { consumeQueue } = require('../rabbitmq');

function processNotification(payload) {
    console.log('Processing notification:', payload);
    // Add logic to send email or SMS
}

(async () => {
    await consumeQueue('Notification', processNotification);
})();
