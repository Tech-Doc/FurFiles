const File = require('../models/File');

const uploadFile = async (filename, path, owner) => {
    const file = new File({ filename, path, owner });
    await file.save();
    return file;
};

const listFiles = async (owner, page = 1, limit = 10) => {
    const files = await File.find({ owner })
        .skip((page - 1) * limit)
        .limit(limit);
    return files;
};

const changePermission = async (fileId, permissions) => {
    const file = await File.findById(fileId);
    if (!file) throw new Error('File not found');
    file.permissions = permissions;
    await file.save();
    return file;
};

module.exports = { uploadFile, listFiles, changePermission };

