const AuthService = require('../services/authService');

exports.register = async (req, res) => {
    try {
        const user = await AuthService.register(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const token = await AuthService.login(req.body);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

