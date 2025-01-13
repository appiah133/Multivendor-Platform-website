// auth-service/publisher.js
const { publishToQueue } = require('./rabbitmq');

const userRegisteredPayload = {
  user_id: '12345',
  email: 'user@example.com',
  roles: ['user'],
  timestamp: new Date().toISOString(),
};

(async () => {
  await publishToQueue('User_Registered', userRegisteredPayload);
})();
