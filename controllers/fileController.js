const FileService = require('../services/fileService');

exports.uploadFile = async (req, res) => {
    try {
        const file = await FileService.uploadFile(req, res);
        res.json(file);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listFiles = async (req, res) => {
    try {
        const files = await FileService.listFiles(req.user.id);
        res.json(files);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.changePermissions = async (req, res) => {
    try {
        const file = await FileService.changePermissions(req.params.id, req.body.permissions, req.user.id);
        res.json(file);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
