const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Import the User model

// Register function (existing code)
exports.register = async (req, res) => {
  const { email, password } = req.body;
  const password_hash = await bcrypt.hash(password, 10);
  try {
    const newUser = await User.create({ email, password_hash });
    res.status(201).json({ user_id: newUser.user_id, email: newUser.email });
  } catch (err) {
    res.status(500).json({ error: 'Error registering user' });
  }
};



exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { user_id: user.user_id, roles: user.roles },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ token });
  } catch (err) {
    console.error('Error during login:', err.message);
    return res.status(500).json({ error: 'Login failed' });
  }
};




// Get all users (existing code)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['user_id', 'email', 'roles'],
    });
    if (users.length === 0) {
      res.status(404).json({ message: 'No users found' });
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users', details: err.message });
  }
};


// authController.js

exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate that email and password are provided
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    // Proceed with user creation (assuming you are hashing the password)
    const password_hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password_hash });

    // Respond with the created user info
    res.status(201).json({ user_id: newUser.user_id, email: newUser.email });
  } catch (err) {
    res.status(500).json({ error: 'Error creating user', details: err.message });
  }
};



