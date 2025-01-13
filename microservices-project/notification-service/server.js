const express = require('express');
const bodyParser = require('body-parser');
const notificationRoutes = require('./routes/notificationRoutes');
require('./consumers/notificationConsumer'); // Start consuming messages

const app = express();
const PORT = process.env.SERVICE_PORT || 4003;

app.use(bodyParser.json());
app.use('/api/notifications', notificationRoutes);

app.listen(PORT, () => {
    console.log(`Notification Service is running on port ${PORT}`);
});
