const { publishToQueue } = require('../rabbitmq');

const sendNotification = async (req, res) => {
    const { type, email, phone_number, message } = req.body;

    if (type === 'email') {
        console.log(`Sending email to ${email}: ${message}`);
        await publishToQueue('Notification', { type, email, message });
    } else if (type === 'sms') {
        console.log(`Sending SMS to ${phone_number}: ${message}`);
        await publishToQueue('Notification', { type, phone_number, message });
    }

    res.status(200).json({ message: 'Notification sent successfully' });
};

module.exports = { sendNotification };
