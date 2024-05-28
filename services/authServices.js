const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (username, email, password) => {
    const user = new User({ username, email, password });
    await user.save();
    return generateToken(user);
};

const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
        throw new Error('Invalid credentials');
    }
    return generateToken(user);
};

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
};

module.exports = { register, login };

