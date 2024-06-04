const File = require('../models/File');
const sharp = require('sharp');
const fs = require('fs');

exports.uploadFile = async (req) => {
    const { filename, path } = req.file;
    const file = new File({ filename, path, owner: req.user.id });
    await file.save();

    // Generate thumbnail for images
    if (req.file.mimetype.startsWith('image/')) {
        const thumbnailPath = `uploads/thumbnails/${filename}`;
        await sharp(req.file.path).resize(200, 200).toFile(thumbnailPath);
    }

    return file;
};

exports.listFiles = async (userId) => {
    const files = await File.find({ owner: userId });
    return files;
};

exports.changePermissions = async (fileId, permissions, userId) => {
    const file = await File.findById(fileId);
    if (file.owner.toString() !== userId) {
        throw new Error('Not authorized');
    }
    file.permissions = permissions;
    await file.save();
    return file;
};
