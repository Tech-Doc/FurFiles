const express = require('express');
const multer = require('multer');
const { uploadFile, listFiles, changePermission } = require('../services/fileService');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', authMiddleware, upload.single('file'), async (req, res) => {
    try {
        const file = await uploadFile(req.file.filename, req.file.path, req.user._id);
        res.json(file);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/', authMiddleware, async (req, res) => {
    try {
        const files = await listFiles(req.user._id, req.query.page, req.query.limit);
        res.json(files);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.patch('/permission/:fileId', authMiddleware, async (req, res) => {
    try {
        const file = await changePermission(req.params.fileId, req.body.permissions);
        res.json(file);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

