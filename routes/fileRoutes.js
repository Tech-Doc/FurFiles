const express = require('express');
const { uploadFile, listFiles, changePermissions } = require('../controllers/fileController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../utils/upload');

const router = express.Router();

router.post('/upload', authMiddleware, upload.single('file'), uploadFile);
router.get('/', authMiddleware, listFiles);
router.put('/permissions/:id', authMiddleware, changePermissions);

module.exports = router;
